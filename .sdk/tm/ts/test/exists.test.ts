
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CommonroomSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await CommonroomSDK.test()
    equal(null !== testsdk, true)
  })

})
