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
    await expect(element(by.text('Correios'))).toBeVisible()
    await expect(element(by.text('Rastreio de pacotes'))).toBeVisible()

    await getAllPacketsTabViewButton().tap()
    await assertThereIsNoPackets(0)

    await getPendingPacketsTabViewButton().tap()
    await assertThereIsNoPackets(1)

    await getDeliveredPacketsTabViewButton().tap()
    await assertThereIsNoPackets(2)
  })
})
