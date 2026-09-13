
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')


const { CommonroomSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('MemberEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when COMMONROOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('COMMONROOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CommonroomSDK.test()
    const ent = testsdk.Member()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let member_ref01_data = Object.values(setup.data.existing.member)[0]

    // LIST
    const member_ref01_ent = client.Member()
    const member_ref01_match = {}
    member_ref01_match['community_id'] = setup.idmap['community01']

    const member_ref01_list = (await member_ref01_ent.list(member_ref01_match)).map((e) => e.data())


    // LOAD
    const member_ref01_match_dt0 = {}
    member_ref01_match_dt0.id = member_ref01_data.id
    const member_ref01_data_dt0 = (await member_ref01_ent.load(member_ref01_match_dt0)).data()
    assert(member_ref01_data_dt0.id === member_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/member/MemberTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CommonroomSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['member01','member02','member03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'COMMONROOM_TEST_MEMBER_ENTID': idmap,
    'COMMONROOM_TEST_LIVE': 'FALSE',
    'COMMONROOM_TEST_EXPLAIN': 'FALSE',
    'COMMONROOM_APIKEY': '',
  })

  idmap = env['COMMONROOM_TEST_MEMBER_ENTID']

  if ('TRUE' === env.COMMONROOM_TEST_LIVE) {
    client = new CommonroomSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.COMMONROOM_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
      extra || {}
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.COMMONROOM_TEST_EXPLAIN,
    now: Date.now(),
  }

  return setup
}
  
