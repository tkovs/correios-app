import {
  getAddPacketFAB,
  getTitleTextInput,
  getCodeTextInput,
  getSubmitModalButton,
  getAllPacketsCount,
} from './queries'

export const addPacket = async (title, code) => {
  await getAddPacketFAB().tap()

  expect(getAllPacketsCount()).toNotExist()

  await getTitleTextInput().typeText(title)
  await getCodeTextInput().typeText(code)
  await getSubmitModalButton().tap()

  await expect(getAllPacketsCount()).toExist()
  await expect(getAllPacketsCount()).toHaveText('1 encomenda')
}
