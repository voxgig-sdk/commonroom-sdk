
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { CommonroomSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await CommonroomSDK.test()
    equal(null !== testsdk, true)
  })

})
