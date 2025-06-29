import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`  
    
body {
  margin: 0; line-height: normal;
}
:root {

/* Color */
--color-seagreen: #4a8552;
--color-honeydew: #cfe3d1;
--color-darkslategray: #4a4a47;
--color-gray-200: #262626;
--color-gray-100: #877d70;
--color-gainsboro-100: #e6e6e6;
--color-mediumslateblue: #0057ff;
--color-dimgray-100: #595959;
--Main-Brand-Color-Links: #754043;
--BlackToWhite-White: #fff;
--Brownscales-Brown-A19689: #a19689;
--Brownscales-Brown-extra-light-E2DCD3: #e2dcd3;
--Brownscales-Brown-dark-2F2E2C: #2f2e2c;
--Brownscales-Brown-light-CFC5B5: #cfc5b5;
--FFFFFF-Primary: #fff;
---nfu-purple-org: #3a0ca3;
--Main-Brand-Color-Brand-colors: #dbff00;
--Brownscales-Paragraph-text-726862: #726862;
--Brownscales-Left-menu-hover-F1EEE9: #f1eee9;
--Brownscales-Generic-BG-F9F7ED: #f9f7ed;
--Brownscales-Brown-light-4D4540: #4d4540;
--Main-Brand-Color-Background-main: #171614;
--White-Transparencies-White-100: #fff;

/* Gap */
--gap-1: 1px;
--gap-2: 2px;
--gap-3: 3px;
--gap-4: 4px;
--gap-5: 5px;
--gap-6: 6px;
--gap-8: 8px;
--gap-10: 10px;
--gap-12: 12px;
--gap-16: 16px;
--gap-32: 32px;

/* Padding */
--padding-1: 1px;
--padding-2: 2px;
--padding-3: 3px;
--padding-4: 4px;
--padding-6: 6px;
--padding-8: 8px;
--padding-10: 10px;
--padding-11: 11px;
--padding-12: 12px;
--padding-14: 14px;
--padding-15: 15px;
--padding-16: 16px;
--padding-18: 18px;
--padding-19: 19px;
--padding-20: 20px;
--padding-22: 22px;
--padding-24: 24px;
--padding-28: 28px;

/* BorderRadius */
--br-4: 4px;
--br-6: 6px;
--br-8: 8px;
--br-10: 10px;
--br-12: 12px;
--br-100: 100px;

/* Font */
--font-inherit: inherit;
--font-inika: Inika;

/* FontSize */
--font-size-12: 12px;
--font-size-14: 14px;
--font-size-16: 16px;
--font-size-24: 24px;


--General-shadow: 0px 12px 32px rgba(23, 22, 20, 0.16);

/* Figma Variables */

/* Spacing */
--Headline-12-Headline-bold-Font-Weight: 700;
--Headline-16-Headline-bold-Font-Weight: 700;
--Spacing-outer-toggle: 0px;
--V-padding-inner-toggle: 0px;
--Spacing-inner-toggle: 0px;
--Paragraph-24-Paragraph-regular-Font-Weight: 400;
--Others-10-Bold-Bundle-titles-Font-Weight: 700;
--Paragraph-20-Paragraph-bold-Font-Weight: 700;
--Stroke-badge: 1px;
--DD-menu-180-Stroke: 1px;
--Stroke-toggle: 1px;
--Stroke-CB-RB-bgselector: 1px;
--Stroke-CB-RB: 1px;
--Containers-Cont-Input-stroke: 1px;
--380-Line-Width: 2px;
--Radius-badge: 4px;
--Paragraph-14-Paragraph-bold-Font-Weight: 700;
--Headline-34-Headline-bold-Font-Weight: 700;
--Others-12-Paragraph-regular-Font-Weight: 400;
--Others-12-Button-medium-Font-Weight: 500;
--Statuses-240-S-Status-V-padding: 2px;
--V-padding-outer-toggle: 2.5px;
--H-padding-outer-toggle: 3px;
--Statuses-240-S-Status-spacing: 4px;
--V-padding-badge: 4px;
--H-padding-badge: 4px;
--Tooltip-180-Spacing: 4px;
--Radius-inner-toggle: 4px;
--DD-menu-180-Spacing: 4px;
--Spacing-CB-RB: 4px;
--V-padding-CB-RB: 4px;
--H-padding-CB-RB: 4px;
--Size-V-padding: 6px;
--Radius-outer-toggle: 6px;
--Containers-Cont-Input-V-padding: 6px;
--Statuses-240-S-Status-H-padding: 8px;
--Size-Spacing: 8px;
--Size-Radius: 8px;
--Tooltip-180-Radius: 8px;
--Paddings-TooltipDD-V-padding-Tooltip-font-12: 8px;
--DD-menu-180-Radius: 8px;
--DD-menu-180-V-padding: 8px;
--DD-menu-180-H-padding: 8px;
--Radius-CB-RB-bgselector: 8px;
--Containers-Cont-Input-spacing: 8px;
--Containers-Cont-Input-radius: 8px;
--Notes-240-N-Radius: 8px;
--Others-10-Bold-Bundle-titles-Font-Size: 10px;
--Others-12-Button-medium-Font-Size: 12px;
--Menu-categories-Counter-Counter-weight-no-text: 12px;
--Menu-categories-Counter-Counter-high-no-text: 12px;
--Others-12-Paragraph-regular-Font-Size: 12px;
--Paddings-TooltipDD-V-padding-Tooltip-font-14: 12px;
--Headline-12-Headline-bold-Font-Size: 12px;
--Paddings-TooltipDD-H-padding-Tooltip-font-12: 12px;
--H-padding-inner-toggle: 12px;
--V-padding-CB-RB-bgselector: 12px;
--Paragraph-14-Paragraph-bold-Font-Size: 14px;
--Height-badge: 14px;
--Paragraph-14-Paragraph-regular-Font-Size: 14px;
--Buttons-14-Button-regular: 14px;
--Others-12-Button-medium-Font-Line-Height: 16px;
--Size-H-padding: 16px;
--Others-12-Paragraph-regular-Font-Line-Height: 16px;
--Others-10-Bold-Bundle-titles-Font-Line-Height: 16px;
--Size-Icon-arrow-size: 16px;
--Paddings-TooltipDD-H-padding-Tooltip-font-14: 16px;
--Headline-12-Headline-bold-Font-Line-Height: 16px;
--H-padding-CB-RB-bgselector: 16px;
--Containers-Cont-Input-H-padding: 16px;
--Containers-Cont-Input-Arrow-size: 16px;
--Notes-240-N-H-padding: 16px;
--Notes-240-N-V-padding: 16px;
--Headline-16-Headline-bold-Font-Size: 16px;
--Height-weight-inner-toggle-default: 18px;
--Statuses-240-S-Status-heigh: 20px;
--Paragraph-14-Paragraph-bold-Font-Line-Height: 20px;
--Paragraph-14-Paragraph-regular-Font-Line-Height: 20px;
--Paragraph-20-Paragraph-bold-Font-Size: 20px;
--Height-Width-CB-RB: 20px;
--Headline-16-Headline-bold-Font-Line-Height: 20px;
--Icon-Input-size-Icon-left-size-H-40: 20px;
--Height-outer-toggle: 24px;
--Spacing-CB-RB-bgselector: 24px;
--Notes-240-N-Spacing: 24px;
--Headline-28-Headline-bold-Font-Size: 28px;
--Paragraph-20-Paragraph-bold-Font-Line-Height: 28px;
--Headline-34-Headline-bold-Font-Line-Height: 40px;
--Containers-Cont-Input-heigh: 40px;
--380-Width: 48px;
--380-Height: 48px;
--Statuses-240-S-Status-radius: 999px;
--Menu-categories-Counter-Counter-radius: 999px;
--Radius-RB: 999px;

/* Color */
--Containers-Hover-170-Selected-entered-txt-hover: #4d4540;
--Containers-Hover-170-Fill-hover: #fff;
--Default-310-Subtitle: #726862;
--Active-Checked-Undertemined-310-Title: #171614;
--Active-Checked-Undertemined-310-Subtitle: #171614;
--Active-Checked-hover-310-CB-RB-V: #f9f7ed;
--Items-Active-Items-170-Fill-active: #dbff00;
--Active-Checked-Undertemined-310-Fill: #dbff00;
--Active-Checked-Undertemined-310-Stroke: #dbff00;
--Notes-Statuses-Note-Alert-250-Text-notes-statuses: #ac5d00;
--Notes-Statuses-Note-Alert-250-Fill-notes-statuses: #fff5d9;
--Notes-Statuses-Sucsess-250-Text-statuses: #17332d;
--Notes-Statuses-Sucsess-250-Fill-notes-statuses: #e9fceb;
--Notes-Statuses-Sucsess-250-Stroke-statuses: #245f2c;
--Default-310-Title: #4d4540;
--Default-310-CB-RB-stroke: #726862;
--Default-310-Stroke: #cfc5b5;
--Default-310-Fill: #fff;
--Default-310-CB-RB-fill: #fff;
--Active-Checked-Undertemined-310-CB-RB-fill: #171614;
--Containers-Disable-170-Placeholder-txt-disable: #a19689;
--Notes-Statuses-Info-250-Fill-notes-statuses: #f9f7ed;
--Containers-Disable-170-Fill-disable: #f9f7ed;
--Active-Checked-Undertemined-310-CB-RB-V: #f9f7ed;
--Toggles-Active-Circule-310-toogle-active-circule-stroke-off: #4d4540;
--Toggles-Active-Circule-310-toogle-circule-active-off: #4d4540;
--Containers-Default-170-Fill-default: #fff;
--Toggles-Active-Circule-310-toogle-active-circule-off-back-switch-2: #fff;
--Disabled-Default-310-Subtitle: #a19689;
--Disabled-Default-310-CB-RB-stroke: #e2dcd3;
--Disabled-Default-310-CB-RB-fill: #f9f7ed;
--Disabled-Default-310-Stroke: #cfc5b5;
--Containers-Default-170-Placeholder-txt-default: #a19689;
--DD-menu-190-DD-stroke: #cfc5b5;
--Containers-Disable-170-Stroke-disable: #cfc5b5;
--DD-menu-190-DD-fill: #fff;
--Containers-Default-170-Placeholder-txt-Prefix-DD-default: #4d4540;
--Containers-Default-170-Fill-Prefix-DD-default: #f9f7ed;
--Items-Disable-Items-170-Text-disable: #cfc5b5;
--Items-Disable-Items-170-Fill-disable: #fff;
--Items-Error-default-Items-170-Text-Error-default: #ea4335;
--Items-Error-default-Items-170-Fill-Error-default: #fff;
--Items-Default-Items-170-Text-default: #726862;
--Items-Active-Items-170-Text-active: #171614;
--Toggles-Active-310-toogle-active-text-off: #726862;
--Default-156-Default-stroke: #726862;
--Notes-Statuses-Info-250-Text-notes-statuses: #726862;
--Toggles-Active-310-toogle-active-off: rgba(255, 255, 255, 0);
--Toggles-Active-310-toogle-active-text-on: #f9f7ed;
--Toggles-Active-310-toogle-active-on: #4d4540;
--Containers-Default-170-Selected-entered-txt-default: #4d4540;
--Toggles-Active-310-toogle-active-stroke: #a19689;
--Containers-Default-170-Stroke-default: #a19689;
--Toggles-Active-Circule-310-toogle-active-circule-stroke-on: #171614;
--Toggles-Active-Circule-310-toogle-circule-active-on: #171614;
--Toggles-Active-Circule-310-toogle-active-circule-on-back-switch-2: #dbff00;
--Default-290-Stoke: #f9f7ed;
--Inactive-390-Text: #cfc5b5;
--Inactive-390-Line: #f1eee9;
--Inactive-390-Fill: #f1eee9;
--Current-390-Stroke: #dbff00;
--Current-390-Line: #2f2e2c;
--Current-390-Fill: #2f2e2c;
--Current-390-Text: #2f2e2c;
--Success-390-Line: #41ba52;
--Success-390-Fill: #41ba52;
--Success-390-Text: #41ba52;
--Tooltip-190-Tooltip-fill: #fff;
--Toggles-Active-310-toogle-active-back: #fff;
--Tooltip-190-Tooltip-stroke: #cfc5b5;
--Default-290-Text: #4d4540;
--Default-150-Default-budgets: #4d4540;
--Tooltip-190-Tooltip-Text: #4d4540;
--Default-155-Default-fill: rgba(255, 255, 255, 0);
--Default-155-Default-stroke: rgba(255, 255, 255, 0);
--Default-290-Fill: rgba(255, 255, 255, 0);
--Black: #41ba52;
--292-Fill: #ea4335;
--Toolbar-icons-T-Back-default: #171614;
--Notes-Statuses-Tag-status-250-Text-statuses: #fff5d9;
--Notes-Statuses-Tag-status-250-Fill-statuses: #754043;
--252-Stroke-statuses-notes: #754043;

/* Font */
--Inter: Inter;
--Fonts-General-Font-family-font-family: Inter;
--Fonts-General-Font-family-font-family1: Inter;

}
`;
