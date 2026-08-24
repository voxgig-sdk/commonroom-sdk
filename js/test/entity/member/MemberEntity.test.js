
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { CommonroomSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('MemberEntity', async () => {

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
    'COMMONROOM_APIKEY': 'NONE',
  })

  idmap = env['COMMONROOM_TEST_MEMBER_ENTID']

  if ('TRUE' === env.COMMONROOM_TEST_LIVE) {
    client = new CommonroomSDK(merge([
      {
        apikey: env.COMMONROOM_APIKEY,
      },
      extra
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
  
