import { getAllPacketsCount } from './queries'

export const assertThereIsNoPackets = async () =>
  expect(getAllPacketsCount()).toNotExist()
