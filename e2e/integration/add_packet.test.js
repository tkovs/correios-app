import { addPacket } from '../utils/actions'

describe('Add packet', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have a new packet on the list', async () => {
    const mockTitle = 'iPad'
    const mockCode = 'PW086958114BR'

    await addPacket(mockTitle, mockCode)
  })
})
