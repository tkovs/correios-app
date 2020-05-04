import { assertThereIsNoPackets } from '../utils/asserts'

describe('PacketList', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have empty packet list initially', async () => {
    await expect(element(by.text('Correios'))).toBeVisible()
    await expect(element(by.text('Rastreio de pacotes'))).toBeVisible()
    await assertThereIsNoPackets()
  })
})
