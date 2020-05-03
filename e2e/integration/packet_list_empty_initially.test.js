import { assertThereIsNoPackets } from '../utils/asserts'
import {
  getAllPacketsTabViewButton,
  getPendingPacketsTabViewButton,
  getDeliveredPacketsTabViewButton,
} from '../utils/queries'

describe('PacketList', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have empty packet list initially', async () => {
    const allPacketTabViewIndex = 0
    const pendingPacketTabViewIndex = 1
    const deliveredPacketTabViewIndex = 2

    await expect(element(by.text('Correios'))).toBeVisible()
    await expect(element(by.text('Rastreio de pacotes'))).toBeVisible()

    await getAllPacketsTabViewButton().tap()
    await assertThereIsNoPackets(allPacketTabViewIndex)

    await getPendingPacketsTabViewButton().tap()
    await assertThereIsNoPackets(pendingPacketTabViewIndex)

    await getDeliveredPacketsTabViewButton().tap()
    await assertThereIsNoPackets(deliveredPacketTabViewIndex)
  })
})
