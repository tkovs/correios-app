import {
  getAddPacketFAB,
  getTitleTextInput,
  getCodeTextInput,
  getSubmitModalButton,
} from './queries'

export const addPacket = async (title, code) => {
  await getAddPacketFAB().tap()
  await getTitleTextInput().typeText(title)
  await getCodeTextInput().typeText(code)
  await getSubmitModalButton().tap()
}
