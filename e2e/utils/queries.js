export const getAllPacketsTabViewButton = () =>
  element(by.id('allPacketsTabButton'))

export const getPendingPacketsTabViewButton = () =>
  element(by.id('pendingPacketsTabButton'))

export const getDeliveredPacketsTabViewButton = () =>
  element(by.id('deliveredPacketsTabButton'))

export const getAddPacketFAB = () => element(by.id('add-packet-fab'))

export const getTitleTextInput = () => element(by.id('title-text-input'))

export const getCodeTextInput = () => element(by.id('code-text-input'))

export const getSubmitModalButton = () => element(by.id('submit-modal-button'))

export const getAllPacketsCount = () => element(by.id('all-packets-count'))

export const getPendingPacketsCount = () =>
  element(by.id('pending-packets-count'))

export const getDeliveredPacketsCount = () =>
  element(by.id('delivered-packets-count'))
