# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.7.0] - 2020-05-13
### Added
- Archive packet
- Tests for logics

## [0.6.7] - 2020-05-06
### Fixed
- Detox error after first successfully

## [0.6.6] - 2020-05-06
### Fixed
- Error post packet add

## [0.6.5] - 2020-05-03
### Added
- Detox tool for e2e layer tests

## [0.6.4] - 2020-05-03
### Added
- `createdAt` info to packets
- Sort packets by `updatedAt` and `code` properties
### Changed
- Add shadow to InfoBar component

## [0.6.3] - 2020-05-03
### Added
- Icon and message to empty `PacketList`

## [0.6.2] - 2020-05-02
### Added
- Truck icon for `PacketTrackingItem`
- Paper theme
### Changed
- `PacketInfo` screen styles

## [0.6.1] - 2020-05-02
### Added
- Icons to `InfoBar`
- Location Icon to `PacketTrackingItem`

## [0.6.0] - 2020-04-29
### Added
- Not-viewed packet warning after update

## [0.5.1] - 2020-04-27
### Added
- `InfoBar` component at packet info page
 - Show shipping passed days
 - Show shipping mode
 - Show code

## [0.5.0] - 2020-04-24
### Added
- Packet update by click

## [0.4.11] - 2020-04-23
### Fix
- Add packet modal data after packet added

## [0.4.10] - 2020-04-23
### Changed
- Improve the status of error and pending process for packets

## [0.4.9] - 2020-04-22
### Fix
- Error while deleting packet

## [0.4.8] - 2020-04-19
### Fix
- Non-serializable values found in the navigation state

## [0.4.7] - 2020-04-19
### Added
- Show the passed days of shipping
- Show the number of days of shipping
- Show the shipping mode

## [0.4.6] - 2020-04-11
### Fixed
- Disable `AddPacketModal` submit button according validations

## [0.4.5] - 2020-04-11
### Added
- Selectors with reselect for redux store access
- Central hydration point of packets with general status

## [0.4.4] - 2020-04-11
### Fixed
- Packets list tabs filter

## [0.4.3] - 2020-04-11
### Changed
- Refact tracking general status

## [0.4.2] - 2020-04-10
### Fixed
- Tracking general status (delivered or pending)

## [0.4.1] - 2020-04-07
### Added
- Clear inputs and errors from add packet modal

## [0.4.0] - 2020-04-07
### Added
- Packet removal
- Success feedback for remove packet

## [0.3.6] - 2020-04-06
### Changed
- Clear packet error after some related action

## [0.3.5] - 2020-04-05
### Changed
- Hide keyboard after packet add confirmation

## [0.3.4] - 2020-04-05
### Added
- Toast component
- Feedback as toast for success addition

## [0.3.3] - 2020-04-04
### Added
- Feedback for duplicated packets
- Feedback for fetch packet error

## [0.3.2] - 2020-04-01
### Added
- Validation to packet tracking addition

## [0.3.1] - 2020-03-31
### Added
- Real fetch packet tracking by tracking code

## [0.3.0] - 2020-03-30
### Added
- Packet addition

## [0.2.2] - 2020-03-19
### Added
- Styles to `PacketInfo` page
- Date formatting

## [0.2.1] - 2020-03-13
### Added
- PacketInfo screen
- Menu in `Header`
- Edit and delete packet option
### Fixed
- Replace margin by padding spacing on left of `PacketList`

## [0.2.0] - 2020-02-29
### Added
- Packets count info into packet list page

## [0.1.2] - 2020-02-28
### Changed
- StatusBar background color

## [0.1.1] - 2020-02-28
### Changed
- Package status color on packages list

## [0.1.0] - 2020-02-28
### Added
- Add modal for adding packets

## [0.0.4] - 2020-02-24
### Added
- Tabs for packets filtering

## [0.0.3] - 2020-02-22
### Added
- App bar with app title
- Floating action button to insert packages

## [0.0.2] - 2020-02-17
### Added
- Application title