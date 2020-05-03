export const assertThereIsNoPackets = async index => {
  expect(
    element(by.text('Nenhuma encomenda nesta lista')).atIndex(index)
  ).toBeVisible()
}
