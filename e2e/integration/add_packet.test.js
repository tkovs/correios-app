import { addPacket } from '../utils/actions'
import { getAllPacketsCount } from '../utils/queries'

describe('Add packet', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have a new packet on the list', async () => {
    const mockTitle = 'iPad'
    const mockCode = 'PZ024483413BR'

    await expect(getAllPacketsCount()).toNotExist()
    await addPacket(mockTitle, mockCode)
    await expect(getAllPacketsCount()).toExist()
    await expect(getAllPacketsCount()).toHaveText('1 encomenda')
  })
})
