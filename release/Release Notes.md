# Release Notes

These are the official release notes for the TX Education Exchange **Front-** and **Back-End SDK/Shared Components**.

## Version 2.2.5

- ### New Features

  - SideBar component can accept an optional `currentUserAccessRole` for access control.
  - `SideBarMenuItemData` now accepts an optional `accessibleByRole?: string[]` for access control.

- ### Improvements

  - EMP-221: Novu Initialization will send request only after having all the required information.

- ### Fixes
  - TBD

## Version 2.2.4

- ### New Features

  - TBD

- ### Improvements

  - EMP-221: Novu Initialization will send request only after having all the required information.

- ### Fixes
  - TBD

## Version 2.2.3

- ### New Features

  - TBD

- ### Improvements

  - Novu Initialization step payload now includes First Name, Last Name and Email.

- ### Fixes
  - EMP-77: Addressing issues with persistent popover

## Version 2.2.2

- ### New Features

  - TBD

- ### Improvements

  - TBD

- ### Fixes
  - EMP-77: Fixed issue where left sidebar click toggle would not activate on lower section of sidebar

## Version 2.2.0

- ### New Features

  - Added `AuthorizationErrorPage` component; It takes 2 props: `primaryButtonBackUrl`, and `primaryButtonLabel`.
  - Added Skip Navigation

- ### Improvements

  - Updated `EdxErrorPage` and `NotFoundPage` components; It now accepts 4 new props: `primaryButtonLabel: string` required, `primaryButtonBackUrl: string` required, `secondaryButtonLabel: string` optional, `secondaryButtonBackUrl: string` optional.
  - Updated Left Sidebar; toggle sidebar on click, hover title for collapsed sidebar options

- ### Fixes
  - Renamed `subscriptioTenantId` to `subscriptionTenantId` in `ExternalAppData` Interface.
  - Renamed `boddyPadding` to `bodyPadding` in `RightSlideInPanelBodyProps`.
  - Renamed `headerTextfontSize` to `headerTextFontSize` in `RightSlideInPanelHeaderProps`.
  - Renamed directory name `RightSlideout` to `RightSlideOut`.

## Version 2.1.0

- ### Implemented logic to only show Forgot Password link to Local users (not SSO/external users). NOTE: if a user has a Local account and then migrates to an SSO/external account, they will still see the link as both account types will be associated with a user record.
  - Jira ticket: https://txedexchange.atlassian.net/browse/EXDEV-673

## Version 2.0.99

- ### Implemented a Right Slide-Out component.

  - Jira ticket: https://txedexchange.atlassian.net/browse/EXDEV-458

- ### Fixed an issue in Storybook where disabled buttons appear transparent on hover.
  - Jira ticket: https://txedexchange.atlassian.net/browse/EXDEV-561

## Version 2.0.98

- ### Refined the search feature on the tenant selector component.

- ### Fixed an issue where only 3 “Read” Notifications would be accessible, as there was no scrollbar to view more.
  - Jira ticket: https://txedexchange.atlassian.net/browse/EXDEV-532

## Version 2.0.97

- ### Fixed an issue where Notifications, when marked as “Read”, would not appear in the “Read” section of the Notification window.

  - Jira ticket: https://txedexchange.atlassian.net/browse/EXDEV-532

- ### Minor revision to the Quick Launcher to improve UX.
  - Jira ticket: https://txedexchange.atlassian.net/browse/EXDEV-575
- ### Fixed an issue where disabled buttons appear transparent on hover.
  - Jira ticket: https://txedexchange.atlassian.net/browse/EXDEV-561

## Version 2.0.96

- ### Fixed an issue where the left side-bar accordion component would cut off text when there are no sub-menu items.
  - Jira ticket: https://txedexchange.atlassian.net/browse/EXDEV-578

## Version 2.0.95

- ### Implemented a "load more" function in the tenant selector component as part of a larger workstream to make users with a high tenant count more efficient.

  - Jira ticket: https://txedexchange.atlassian.net/browse/EXDEV-558

- ### • Addressed all accessibility issues flagged.
  - Missing Accessible Names in Left Accordion Menu
    https://txedexchange.atlassian.net/browse/EXDEV-514
  - 'Mark as Read' automatically being selected when clicking on the Notifications hamburger menu
    https://txedexchange.atlassian.net/browse/EXDEV-507
  - Set up step 0 keyboard navigation doesn't click button
    https://txedexchange.atlassian.net/browse/EXDEV-474
  - Colors do not meet contrast
    https://txedexchange.atlassian.net/browse/EXDEV-471
  - Form elements missing labels
    https://txedexchange.atlassian.net/browse/EXDEV-470
  - Tab navigation is not keyboard navigable
    https://txedexchange.atlassian.net/browse/EXDEV-465
  - Help next not keyboard focus-able
    https://txedexchange.atlassian.net/browse/EXDEV-473
  - Dialogs do not have accessible names
    https://txedexchange.atlassian.net/browse/EXDEV-467

## Version 2.0.94

- ### Removed a few remaining references to assets.edgraph.dev in the SDK. This fix requires baseImagesUrl property to be added by vendor partners to config.json and/or app.config.json, under the "app" property. More documentation available in Jira ticket.
  - Jira ticket: https://txedexchange.atlassian.net/browse/EXDEV-488

## Version 2.0.93

- ### Fixed an issue where if more than one status message was displayed to a user, they would be overlaid on top of one another.

  - Jira ticket: https://txedexchange.atlassian.net/browse/EXDEV-434

- ### Resolved two accessibility issues related to the header bar/Tenant drop down list.
  - Jira ticket: https://txedexchange.atlassian.net/browse/EXDEV-228

## Version 2.0.92

- ### Update NOVU package reference to Axios > v1.6.4

  - Jira ticket: https://txedexchange.atlassian.net/browse/EXDEVOPS-280

  This issue stemmed from the external package "@novu/notification-center". It was v0.16.4, which was old and had Axios v1.2.0. We updated this package to the latest version (v0.24.0), which has Axios v1.6.2.

  This may resolve the issue, but the Snyk ticket proposed an Axios update to > v1.6.4. If there is still an issue, affected vendors may want to migrate from npm to pnpm so they can implement an override to update Axios to v1.6.6.

  --

  _Steps for Resolution:_

  - Vendor upgrades "@texas-education-exchange/edx-portal-shared" to v2.0.92 or later

  - If the above solution doesn’t resolve Snyk issue, Vendor needs to upgrade their package.json and use pnpm instead of npm to install/override and build web application.

  - Note: npm has an issue where it doesn’t apply the “overrides” in the package.json, which is the reason why pnpm would be used.

  - When using pnpm, a section named “resolutions“ needs to be added at the bottom of package.json to override the axios library:

  --

        > "resolutions": {
        >
        >     "axios": "^1.6.6"
        >
        > }

## Version 2.0.91

- ### Updated visual issues to left slide out accordion component in the front-end SDK
  - Jira ticket: https://txedexchange.atlassian.net/browse/EXDEV-504

## Version 2.0.90

- ### Updated the requested Field Style changes

  - Jira ticket: https://txedexchange.atlassian.net/browse/EXDEV-476

- ### Updated the left slide out component to include accordion items
  - Jira ticket: https://txedexchange.atlassian.net/browse/EXDEV-410

## Version 2.0.90

- ### No release notes for this version - automated update.

## Version 2.0.88

- ### UI Brand text changes – Demo site 1 –Updated “the Exchange” to “The Exchange”

- ### Snyk updates

## Version 2.0.87

- ### No release notes for this version - automated update.

## Version 2.0.86

- ### No release notes for this version - automated update.

## Version 2.0.85

- ### Addressed all accessibility issues flagged.

  - SDK edx-portal-shared@2.0.68 accessibility issues
  - Global Accessibility of "a" or "button"
  - User Profile: Dropdown
  - Login Page: Auth Provider
  - Login Page: Delete Icon
  - Landing Page Nav: Several
  - Edit Profile Modal: Icon
  - Onboarding wizard Step 3 Click to Copy button reported as missing accessible text

- ### Help link in the Top-Right User icon menu has been updated to expand the current application's entry and provide context-aware help.

## Version 2.0.83

- ### No release notes for this version - automated update.

## Version 2.0.80

- Usage Metrics - Provided Environment Variable for Matomo
- Addressed final accessibility issue for “Accessible names to the buttons in the waffle menu” task

## Version 2.0.76

- ### Accessibility Improvements:
  - Updated text colors to pass contrast
  - Added alt attribute to img elements
  - Added hidden label elements to step 3 of the Onboarding Wizard
  - Added accessible names to the buttons in the waffle menu
- ### Shared Package:
  - Provided support for individual links per app on the launchpad

## Version 2.0.74

- Fixed various accessibility issues

## Version 2.0.73

- Fixed various accessibility issues

## Version 2.0.70

- Fixed various accessibility issues

## Version 2.0.68

- Accessibility: Updated the text colors to pass contrast
- Accessibility: Added accessible names to buttons of the shared package
- Accessibility: Added hidden label elements
- Accessibility: Added attributes to image elements
- Added Community help links
- The "Online Community" has been updated to "Community" in the User menu

## Version 1

- Updated expected configuration for the shared components
- Updated all applications (Tech Console, Starter App, Launcher) with latest version of shared package
- Removed "See All" in the Notifications tab
- Removed empty validations from User Profile
- Added Validation for Save Action of User Profile form
- Added EDX config value and add dynamic link for Back to the Exchange link
- Redirected open links in Quick Apps menu in new tab
- Show/Hide Notifications cue on unread messages
