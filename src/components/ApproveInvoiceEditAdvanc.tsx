import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import OnOffSwitch from "./OnOffSwitch";
import LabelButton from "./LabelButton";
import TooltipIcon from "./TooltipIcon";
import GenericInteractiveBtnsText from "./GenericInteractiveBtnsText";

export type ApproveInvoiceEditAdvancType = {
  className?: string;
  title?: string;
  tooltipText?: string;
  state?: string;
  switch1?: string;
  type1?: string;
  editOffText?: string;
  editONText?: string;
  disableAlign?: "none ⛔" | "center";
  labelButtonAlign?: "none ⛔" | "center";
  disableIconWithLabel?: string;
  labelButtonIconWith?: string;
  disableOrientation?: "none ⛔" | "label ⬆️";
  labelButtonOrientation?: "none ⛔" | "label ⬆️";
  disableSize?: "28px" | "40px";
  labelButtonSize?: "28px" | "40px";
  disableType?: "disable no border" | "disable" | "sub action";
  labelButtonType?: "disable no border" | "disable" | "sub action";
  disableHeight?: string;
  labelButtonDisableHeight?: string;
  disableWidth?: string;
  labelButtonDisableWidth?: string;
  tooltipiconpendingHoverClick?: string;
  tooltipiconpendingHoverClick1?: string;
  tooltipiconpendingHoverClick2?: string;
  tooltipiconpendingHoverClick3?: string;
  tooltipiconpendingHoverClick4?: string;
  tooltipiconpendingHoverClick5?: string;
  tooltipiconpendingHoverClick6?: string;
  tooltipiconpendingHoverClick7?: string;
  tooltipiconpendingHoverClick8?: string;
  tooltipiconpendingHoverClick9?: string;
  tooltipiconpendingHoverClick10?: string;
  tooltipiconpendingHoverClick11?: string;
  tooltipiconpendingHoverClick12?: string;
  tooltipiconpendingHoverClick13?: string;
  tooltipiconpendingHoverClick14?: string;
  tooltipiconpendingHoverClick15?: string;
  tooltipiconpendingHoverClick16?: string;
  tooltipiconpendingHoverClick17?: string;
  tooltipiconpendingHoverClick18?: string;
  tooltipiconpendingHoverClick19?: string;
  tooltipiconpendingHoverClick20?: string;
  tooltipiconpendingHoverClick21?: string;
  tooltipiconpendingHoverClick22?: string;
  tooltipiconpendingHoverClick23?: string;
  tooltipiconpendingHoverClick24?: string;
  tooltipiconpendingHoverClick25?: string;
  tooltipiconpendingHoverClick26?: string;
  tooltipiconpendingHoverClick27?: string;
  tooltipiconpendingHoverClick28?: string;
  tooltipiconpendingHoverClick29?: string;
  tooltipIconHoverClick?: string;
  tooltipiconpendingIconSize?: string;
  tooltipiconpendingIconSize1?: string;
  tooltipiconpendingIconSize2?: string;
  tooltipiconpendingIconSize3?: string;
  tooltipiconpendingIconSize4?: string;
  tooltipiconpendingIconSize5?: string;
  tooltipiconpendingIconSize6?: string;
  tooltipiconpendingIconSize7?: string;
  tooltipiconpendingIconSize8?: string;
  tooltipiconpendingIconSize9?: string;
  tooltipiconpendingIconSize10?: string;
  tooltipiconpendingIconSize11?: string;
  tooltipiconpendingIconSize12?: string;
  tooltipiconpendingIconSize13?: string;
  tooltipiconpendingIconSize14?: string;
  tooltipiconpendingIconSize15?: string;
  tooltipiconpendingIconSize16?: string;
  tooltipiconpendingIconSize17?: string;
  tooltipiconpendingIconSize18?: string;
  tooltipiconpendingIconSize19?: string;
  tooltipiconpendingIconSize20?: string;
  tooltipiconpendingIconSize21?: string;
  tooltipiconpendingIconSize22?: string;
  tooltipiconpendingIconSize23?: string;
  tooltipiconpendingIconSize24?: string;
  tooltipiconpendingIconSize25?: string;
  tooltipiconpendingIconSize26?: string;
  tooltipiconpendingIconSize27?: string;
  tooltipiconpendingIconSize28?: string;
  tooltipiconpendingIconSize29?: string;
  tooltipIconSize?: string;
  tooltipiconpendingOrientation?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation1?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation2?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation3?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation4?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation5?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation6?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation7?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation8?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation9?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation10?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation11?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation12?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation13?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation14?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation15?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation16?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation17?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation18?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation19?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation20?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation21?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation22?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation23?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation24?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation25?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation26?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation27?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation28?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingOrientation29?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipIconOrientation?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  tooltipiconpendingState?: string;
  tooltipiconpendingState1?: string;
  tooltipiconpendingState2?: string;
  tooltipiconpendingState3?: string;
  tooltipiconpendingState4?: string;
  tooltipiconpendingState5?: string;
  tooltipiconpendingState6?: string;
  tooltipiconpendingState7?: string;
  tooltipiconpendingState8?: string;
  tooltipiconpendingState9?: string;
  tooltipiconpendingState10?: string;
  tooltipiconpendingState11?: string;
  tooltipiconpendingState12?: string;
  tooltipiconpendingState13?: string;
  tooltipiconpendingState14?: string;
  tooltipiconpendingState15?: string;
  tooltipiconpendingState16?: string;
  tooltipiconpendingState17?: string;
  tooltipiconpendingState18?: string;
  tooltipiconpendingState19?: string;
  tooltipiconpendingState20?: string;
  tooltipiconpendingState21?: string;
  tooltipiconpendingState22?: string;
  tooltipiconpendingState23?: string;
  tooltipiconpendingState24?: string;
  tooltipiconpendingState25?: string;
  tooltipiconpendingState26?: string;
  tooltipiconpendingState27?: string;
  tooltipiconpendingState28?: string;
  tooltipiconpendingState29?: string;
  tooltipIconState?: string;
  tooltipiconpendingShowTooltip?: boolean;
  tooltipiconpendingShowTooltip1?: boolean;
  tooltipiconpendingShowTooltip2?: boolean;
  tooltipiconpendingShowTooltip3?: boolean;
  tooltipiconpendingShowTooltip4?: boolean;
  tooltipiconpendingShowTooltip5?: boolean;
  tooltipiconpendingShowTooltip6?: boolean;
  tooltipiconpendingShowTooltip7?: boolean;
  tooltipiconpendingShowTooltip8?: boolean;
  tooltipiconpendingShowTooltip9?: boolean;
  tooltipiconpendingShowTooltip10?: boolean;
  tooltipiconpendingShowTooltip11?: boolean;
  tooltipiconpendingShowTooltip12?: boolean;
  tooltipiconpendingShowTooltip13?: boolean;
  tooltipiconpendingShowTooltip14?: boolean;
  tooltipiconpendingShowTooltip15?: boolean;
  tooltipiconpendingShowTooltip16?: boolean;
  tooltipiconpendingShowTooltip17?: boolean;
  tooltipiconpendingShowTooltip18?: boolean;
  tooltipiconpendingShowTooltip19?: boolean;
  tooltipiconpendingShowTooltip20?: boolean;
  tooltipiconpendingShowTooltip21?: boolean;
  tooltipiconpendingShowTooltip22?: boolean;
  tooltipiconpendingShowTooltip23?: boolean;
  tooltipiconpendingShowTooltip24?: boolean;
  tooltipiconpendingShowTooltip25?: boolean;
  tooltipiconpendingShowTooltip26?: boolean;
  tooltipiconpendingShowTooltip27?: boolean;
  tooltipiconpendingShowTooltip28?: boolean;
  tooltipiconpendingShowTooltip29?: boolean;
  tooltipIconShow?: boolean;
  size?: "28px" | "40px";
  state1?: string;
  type2?: "sub action" | "action";
  editBtnText?: string;
  editBadgeText?: string;
  upload?: string;
  iconarrowRight?: string;
  showBadge?: boolean;
  showLIcon?: boolean;
  showRIcon?: boolean;
  showBtnText?: boolean;
  showTooltipBtn?: boolean;
  tooltipBtnHeight?: string;
  tooltipBtnWidth?: string;
  tooltipiconpendingEditInfo?: string;
  tooltipiconpendingEditInfo1?: string;
  tooltipiconpendingEditInfo2?: string;
  tooltipiconpendingEditInfo3?: string;
  tooltipiconpendingEditInfo4?: string;
  tooltipiconpendingEditInfo5?: string;
  tooltipiconpendingEditInfo6?: string;
  tooltipiconpendingEditInfo7?: string;
  tooltipiconpendingEditInfo8?: string;
  tooltipiconpendingEditInfo9?: string;
  tooltipiconpendingEditInfo10?: string;
  tooltipiconpendingEditInfo11?: string;
  tooltipiconpendingEditInfo12?: string;
  tooltipiconpendingEditInfo13?: string;
  tooltipiconpendingEditInfo14?: string;
  tooltipiconpendingEditInfo15?: string;
  tooltipiconpendingEditInfo16?: string;
  tooltipiconpendingEditInfo17?: string;
  tooltipiconpendingEditInfo18?: string;
  tooltipiconpendingEditInfo19?: string;
  tooltipiconpendingEditInfo20?: string;
  tooltipiconpendingEditInfo21?: string;
  tooltipiconpendingEditInfo22?: string;
  tooltipiconpendingEditInfo23?: string;
  tooltipiconpendingEditInfo24?: string;
  tooltipiconpendingEditInfo25?: string;
  tooltipiconpendingEditInfo26?: string;
  tooltipiconpendingEditInfo27?: string;
  tooltipiconpendingEditInfo28?: string;
  tooltipiconpendingEditInfo29?: string;
  tooltipIconEditInfoText?: string;

  /** Variant props */
  type?: string;
};

const Text = styled.b`
  position: relative;
`;
const TotalBalanceFromContainer = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-14);
`;
const Tooltip = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-4);
`;
const Title = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-24);
  gap: var(--gap-12);
  z-index: 1;
`;
const AssignTeamMembers = styled.span``;
const TotalBalanceFromContainer1 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-14);
  color: var(--Toggles-Active-310-toogle-active-text-off);
  z-index: 2;
  font-family: Inter;
`;
const RadioButton = styled.div`
  width: 20px;
  border-radius: var(--br-100);
  background-color: var(--Default-290-Stoke);
  border: 1px solid var(--Tooltip-190-Tooltip-stroke);
  box-sizing: border-box;
  height: 20px;
`;
const Monthly = styled.b`
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
`;
const Rbtext = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
`;
const Headline = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const TotalBalanceFrom = styled.div`
  width: 869px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
`;
const TotalBalanceFrom1 = styled.div`
  width: 143px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
`;
const CaptionTitle = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const FlagsIcon = styled.img`
  width: 20px;
  position: relative;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const ConnectorIcon = styled.img`
  width: 20px;
  position: relative;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
  display: none;
`;
const Iconsearch = styled.img`
  width: 20px;
  position: relative;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const ActiveLabel = styled.div`
  flex: 1;
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
`;
const Title1 = styled.div`
  position: relative;
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
`;
const StatusesComp = styled.div`
  align-self: stretch;
  border-radius: var(--Statuses-240-S-Status-radius);
  background-color: var(--Notes-Statuses-Info-250-Fill-notes-statuses);
  border: 1px solid var(--Default-156-Default-stroke);
  box-sizing: border-box;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--Statuses-240-S-Status-V-padding)
    var(--Statuses-240-S-Status-H-padding);
  gap: var(--Statuses-240-S-Status-spacing);
  min-width: 80px;
  text-align: center;
  font-size: var(--Others-12-Button-medium-Font-Size);
  color: var(--Notes-Statuses-Info-250-Text-notes-statuses);
`;
const FieldContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-4);
`;
const IconarrowDown = styled.img`
  height: 16px;
  width: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const TextField = styled.div`
  align-self: stretch;
  border-radius: var(--br-8) 0px 0px var(--br-8);
  background-color: var(--Containers-Default-170-Fill-default);
  border: 1px solid var(--Containers-Default-170-Stroke-default);
  box-sizing: border-box;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-6) var(--padding-16);
  gap: var(--gap-8);
  z-index: 1;
`;
const ConnectorIcon1 = styled.img`
  width: 20px;
  position: relative;
  height: 20px;
  display: none;
`;
const SecondaryText = styled.div`
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
`;
const Text1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const StatusesComp1 = styled.div`
  border-radius: var(--Statuses-240-S-Status-radius);
  background-color: var(--Notes-Statuses-Info-250-Fill-notes-statuses);
  border: 1px solid var(--Default-156-Default-stroke);
  box-sizing: border-box;
  height: var(--Statuses-240-S-Status-heigh);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--Statuses-240-S-Status-V-padding)
    var(--Statuses-240-S-Status-H-padding);
  gap: var(--Statuses-240-S-Status-spacing);
  min-width: 80px;
`;
const Status = styled.div`
  width: 139px;
  display: none;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  font-size: var(--Others-12-Button-medium-Font-Size);
  color: var(--Notes-Statuses-Info-250-Text-notes-statuses);
`;
const DropdownSell = styled.div`
  align-self: stretch;
  border-radius: var(--br-6);
  background-color: var(--Items-Active-Items-170-Fill-active);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 8;
  color: var(--Items-Active-Items-170-Text-active);
`;
const DropdownSell1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-6);
  background-color: var(--Containers-Default-170-Fill-default);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 7;
`;
const DropdownSell11 = styled.div`
  align-self: stretch;
  border-radius: var(--br-6);
  background-color: var(--Containers-Default-170-Fill-default);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 6;
`;
const DropdownSell111 = styled.div`
  align-self: stretch;
  border-radius: var(--br-6);
  background-color: var(--Containers-Default-170-Fill-default);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 5;
`;
const DropdownSell1111 = styled.div`
  align-self: stretch;
  border-radius: var(--br-6);
  background-color: var(--Containers-Default-170-Fill-default);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 4;
`;
const DropdownSell11111 = styled.div`
  align-self: stretch;
  border-radius: var(--br-6);
  background-color: var(--Containers-Default-170-Fill-default);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 3;
`;
const DropdownSell111111 = styled.div`
  width: 98px;
  border-radius: var(--br-6);
  background-color: var(--Containers-Default-170-Fill-default);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 2;
`;
const FlagsIcon1 = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const DropdownSell7Red = styled.div`
  width: 98px;
  border-radius: var(--br-6);
  background-color: var(--Items-Error-default-Items-170-Fill-Error-default);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 1;
  color: var(--Items-Error-default-Items-170-Text-Error-default);
`;
const DropdownSell8Disabled = styled.div`
  width: 98px;
  border-radius: var(--br-6);
  background-color: var(--Items-Disable-Items-170-Fill-disable);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 0;
  color: var(--Items-Disable-Items-170-Text-disable);
`;
const TextDdR = styled.div`
  width: 204px;
  box-shadow: var(--General-shadow);
  border-radius: var(--DD-menu-180-Radius);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: var(--DD-menu-180-Stroke) solid var(--Tooltip-190-Tooltip-stroke);
  box-sizing: border-box;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--DD-menu-180-H-padding);
  gap: var(--DD-menu-180-Spacing);
  opacity: 0;
  z-index: 0;
  color: var(--Items-Default-Items-170-Text-default);
`;
const RoleSelector = styled.div`
  flex: 1;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FieldContent1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-16) 0px 0px;
  gap: var(--gap-8);
`;
const ArrowDownIcon = styled.img`
  width: 16px;
  position: relative;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Field = styled.div`
  align-self: stretch;
  border-radius: 0px var(--br-8) var(--br-8) 0px;
  background-color: var(--Containers-Default-170-Fill-Prefix-DD-default);
  border: 1px solid var(--Containers-Default-170-Stroke-default);
  box-sizing: border-box;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px var(--padding-16);
  gap: 0px;
  z-index: 1;
`;
const Currency = styled.div`
  align-self: stretch;
  border-radius: var(--br-6);
  background-color: var(--Containers-Default-170-Fill-default);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 9;
`;
const Currency1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-6);
  background-color: var(--Containers-Default-170-Fill-default);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 8;
`;
const Currency11 = styled.div`
  width: 176px;
  border-radius: var(--br-6);
  background-color: var(--Containers-Default-170-Fill-default);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 7;
`;
const Currency111 = styled.div`
  width: 98px;
  border-radius: var(--br-6);
  background-color: var(--Containers-Default-170-Fill-default);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 6;
`;
const Currency1111 = styled.div`
  width: 98px;
  border-radius: var(--br-6);
  background-color: var(--Containers-Default-170-Fill-default);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 5;
`;
const Currency11111 = styled.div`
  width: 98px;
  border-radius: var(--br-6);
  background-color: var(--Containers-Default-170-Fill-default);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 4;
`;
const Currency111111 = styled.div`
  width: 98px;
  border-radius: var(--br-6);
  background-color: var(--Containers-Default-170-Fill-default);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 3;
`;
const Currency1111111 = styled.div`
  width: 98px;
  border-radius: var(--br-6);
  background-color: var(--Containers-Default-170-Fill-default);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 1;
`;
const Currency11111111 = styled.div`
  width: 98px;
  border-radius: var(--br-6);
  background-color: var(--Containers-Default-170-Fill-default);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 0;
`;
const CheckboxesDdR = styled.div`
  align-self: stretch;
  box-shadow: var(--General-shadow);
  border-radius: var(--DD-menu-180-Radius);
  background-color: var(--DD-menu-190-DD-fill);
  border: var(--DD-menu-180-Stroke) solid var(--DD-menu-190-DD-stroke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--DD-menu-180-H-padding);
  gap: var(--DD-menu-180-Spacing);
  opacity: 0;
  z-index: 0;
  margin-top: -18px;
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  color: var(--Items-Default-Items-170-Text-default);
`;
const RoleSelector1 = styled.div`
  width: 125px;
  border-radius: 0px var(--br-8) var(--br-8) 0px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: -1px;
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  color: var(--Containers-Default-170-Placeholder-txt-Prefix-DD-default);
`;
const WhoEditUserRole = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const StatusesComp11 = styled.div`
  align-self: stretch;
  border-radius: var(--Statuses-240-S-Status-radius);
  background-color: var(--Notes-Statuses-Info-250-Fill-notes-statuses);
  border: 1px solid var(--Default-156-Default-stroke);
  box-sizing: border-box;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--Statuses-240-S-Status-V-padding)
    var(--Statuses-240-S-Status-H-padding);
  gap: var(--Statuses-240-S-Status-spacing);
  opacity: 0;
  min-width: 80px;
  text-align: center;
  font-size: var(--Others-12-Button-medium-Font-Size);
  color: var(--Notes-Statuses-Info-250-Text-notes-statuses);
`;
const TextField1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-8);
  background-color: var(--Containers-Default-170-Fill-default);
  border: 1px solid var(--Containers-Default-170-Stroke-default);
  box-sizing: border-box;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-6) var(--padding-16);
  gap: var(--gap-8);
  z-index: 1;
`;
const DropdownSell1111111 = styled.div`
  width: 313px;
  border-radius: var(--br-6);
  background-color: var(--Containers-Default-170-Fill-default);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-8);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 6;
`;
const TextDdR1 = styled.div`
  width: 329px;
  box-shadow: var(--General-shadow);
  border-radius: var(--DD-menu-180-Radius);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: var(--DD-menu-180-Stroke) solid var(--Tooltip-190-Tooltip-stroke);
  box-sizing: border-box;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--DD-menu-180-H-padding);
  gap: var(--DD-menu-180-Spacing);
  opacity: 0;
  z-index: 0;
  color: var(--Items-Default-Items-170-Text-default);
`;
const Option = styled.div`
  width: 90px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--Containers-Default-170-Placeholder-txt-default);
`;
const ChoseOptions = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12);
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  color: var(--Containers-Default-170-Selected-entered-txt-default);
  font-family: var(--Inter);
`;
const Rules = styled.div`
  width: 1043px;
  border-radius: var(--br-8);
  background-color: var(--Tooltip-190-Tooltip-fill);
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-16);
  box-sizing: border-box;
  gap: var(--gap-8);
  font-size: var(--font-size-14);
  color: var(--Default-290-Text);
  font-family: Inter;
`;
const ApproveInvoiceEditComp = styled.div`
  align-self: stretch;
  border-radius: var(--br-8);
  background-color: var(--Default-290-Stoke);
  border: 1px solid var(--Tooltip-190-Tooltip-stroke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-20) var(--padding-16);
  gap: var(--gap-12);
  z-index: 1;
`;
const RadioButton1 = styled.div`
  width: var(--Height-Width-CB-RB);
  border-radius: var(--Radius-RB);
  background-color: var(--Disabled-Default-310-CB-RB-fill);
  border: var(--Stroke-CB-RB) solid var(--Disabled-Default-310-CB-RB-stroke);
  box-sizing: border-box;
  height: var(--Height-Width-CB-RB);
`;
const ManuallyApproveEach = styled.li`
  margin: 0;
`;
const IfThisOption = styled.p`
  margin: 0;
`;
const ManuallyApproveEachBankAcc = styled.ul`
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  padding-left: var(--padding-16);
`;
const Title11 = styled.div`
  width: 51px;
  position: relative;
  font-size: var(--font-size-12);
  line-height: 20px;
  font-weight: 500;
  font-family: Inter;
  color: var(--Disabled-Default-310-Subtitle);
  display: none;
`;
const Title111 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-8);
`;
const Rb = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8);
`;
const Btnicon = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
`;
const Disable = styled.div`
  align-self: stretch;
  border-radius: var(--Radius-CB-RB-bgselector);
  background-color: var(--Disabled-Default-310-CB-RB-fill);
  border: var(--Stroke-CB-RB-bgselector) solid
    var(--Disabled-Default-310-Stroke);
  box-sizing: border-box;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--V-padding-CB-RB-bgselector) var(--H-padding-CB-RB-bgselector);
  gap: var(--Spacing-CB-RB-bgselector);
  z-index: 0;
`;
const Content = styled.div`
  width: 1123px;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-16) var(--padding-24) var(--padding-24);
  box-sizing: border-box;
  gap: var(--gap-8);
  z-index: 0;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  font-family: var(--Inter);
`;
const ApprovePayoutsEditAdvancRoot = styled.div`
  align-self: stretch;
  border-radius: var(--br-10);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--font-size-16);
  color: var(--Toggles-Active-310-toogle-active-stroke);
  font-family: Inter;
`;

const ApproveInvoiceEditAdvanc: FunctionComponent<
  ApproveInvoiceEditAdvancType
> = ({
  className = "",
  type = "authorized",
  title = "Who can Approve Payouts?",
  tooltipText = "If disabled, payouts will be automatically approved and executed on their due date, according to your payout cycle settings. No manual approval required.\nIf a payout requires approval for any reason, any user with payout approval permissions will be able to approve it.",
  state,
  switch1,
  type1,
  editOffText,
  editONText,
  disableAlign,
  labelButtonAlign,
  disableIconWithLabel,
  labelButtonIconWith,
  disableOrientation,
  labelButtonOrientation,
  disableSize,
  labelButtonSize,
  disableType,
  labelButtonType,
  disableHeight,
  labelButtonDisableHeight,
  disableWidth,
  labelButtonDisableWidth,
  tooltipiconpendingHoverClick,
  tooltipiconpendingHoverClick1,
  tooltipiconpendingHoverClick2,
  tooltipiconpendingHoverClick3,
  tooltipiconpendingHoverClick4,
  tooltipiconpendingHoverClick5,
  tooltipiconpendingHoverClick6,
  tooltipiconpendingHoverClick7,
  tooltipiconpendingHoverClick8,
  tooltipiconpendingHoverClick9,
  tooltipiconpendingHoverClick10,
  tooltipiconpendingHoverClick11,
  tooltipiconpendingHoverClick12,
  tooltipiconpendingHoverClick13,
  tooltipiconpendingHoverClick14,
  tooltipiconpendingHoverClick15,
  tooltipiconpendingHoverClick16,
  tooltipiconpendingHoverClick17,
  tooltipiconpendingHoverClick18,
  tooltipiconpendingHoverClick19,
  tooltipiconpendingHoverClick20,
  tooltipiconpendingHoverClick21,
  tooltipiconpendingHoverClick22,
  tooltipiconpendingHoverClick23,
  tooltipiconpendingHoverClick24,
  tooltipiconpendingHoverClick25,
  tooltipiconpendingHoverClick26,
  tooltipiconpendingHoverClick27,
  tooltipiconpendingHoverClick28,
  tooltipiconpendingHoverClick29,
  tooltipIconHoverClick,
  tooltipiconpendingIconSize,
  tooltipiconpendingIconSize1,
  tooltipiconpendingIconSize2,
  tooltipiconpendingIconSize3,
  tooltipiconpendingIconSize4,
  tooltipiconpendingIconSize5,
  tooltipiconpendingIconSize6,
  tooltipiconpendingIconSize7,
  tooltipiconpendingIconSize8,
  tooltipiconpendingIconSize9,
  tooltipiconpendingIconSize10,
  tooltipiconpendingIconSize11,
  tooltipiconpendingIconSize12,
  tooltipiconpendingIconSize13,
  tooltipiconpendingIconSize14,
  tooltipiconpendingIconSize15,
  tooltipiconpendingIconSize16,
  tooltipiconpendingIconSize17,
  tooltipiconpendingIconSize18,
  tooltipiconpendingIconSize19,
  tooltipiconpendingIconSize20,
  tooltipiconpendingIconSize21,
  tooltipiconpendingIconSize22,
  tooltipiconpendingIconSize23,
  tooltipiconpendingIconSize24,
  tooltipiconpendingIconSize25,
  tooltipiconpendingIconSize26,
  tooltipiconpendingIconSize27,
  tooltipiconpendingIconSize28,
  tooltipiconpendingIconSize29,
  tooltipIconSize,
  tooltipiconpendingOrientation,
  tooltipiconpendingOrientation1,
  tooltipiconpendingOrientation2,
  tooltipiconpendingOrientation3,
  tooltipiconpendingOrientation4,
  tooltipiconpendingOrientation5,
  tooltipiconpendingOrientation6,
  tooltipiconpendingOrientation7,
  tooltipiconpendingOrientation8,
  tooltipiconpendingOrientation9,
  tooltipiconpendingOrientation10,
  tooltipiconpendingOrientation11,
  tooltipiconpendingOrientation12,
  tooltipiconpendingOrientation13,
  tooltipiconpendingOrientation14,
  tooltipiconpendingOrientation15,
  tooltipiconpendingOrientation16,
  tooltipiconpendingOrientation17,
  tooltipiconpendingOrientation18,
  tooltipiconpendingOrientation19,
  tooltipiconpendingOrientation20,
  tooltipiconpendingOrientation21,
  tooltipiconpendingOrientation22,
  tooltipiconpendingOrientation23,
  tooltipiconpendingOrientation24,
  tooltipiconpendingOrientation25,
  tooltipiconpendingOrientation26,
  tooltipiconpendingOrientation27,
  tooltipiconpendingOrientation28,
  tooltipiconpendingOrientation29,
  tooltipIconOrientation,
  tooltipiconpendingState,
  tooltipiconpendingState1,
  tooltipiconpendingState2,
  tooltipiconpendingState3,
  tooltipiconpendingState4,
  tooltipiconpendingState5,
  tooltipiconpendingState6,
  tooltipiconpendingState7,
  tooltipiconpendingState8,
  tooltipiconpendingState9,
  tooltipiconpendingState10,
  tooltipiconpendingState11,
  tooltipiconpendingState12,
  tooltipiconpendingState13,
  tooltipiconpendingState14,
  tooltipiconpendingState15,
  tooltipiconpendingState16,
  tooltipiconpendingState17,
  tooltipiconpendingState18,
  tooltipiconpendingState19,
  tooltipiconpendingState20,
  tooltipiconpendingState21,
  tooltipiconpendingState22,
  tooltipiconpendingState23,
  tooltipiconpendingState24,
  tooltipiconpendingState25,
  tooltipiconpendingState26,
  tooltipiconpendingState27,
  tooltipiconpendingState28,
  tooltipiconpendingState29,
  tooltipIconState,
  tooltipiconpendingShowTooltip,
  tooltipiconpendingShowTooltip1,
  tooltipiconpendingShowTooltip2,
  tooltipiconpendingShowTooltip3,
  tooltipiconpendingShowTooltip4,
  tooltipiconpendingShowTooltip5,
  tooltipiconpendingShowTooltip6,
  tooltipiconpendingShowTooltip7,
  tooltipiconpendingShowTooltip8,
  tooltipiconpendingShowTooltip9,
  tooltipiconpendingShowTooltip10,
  tooltipiconpendingShowTooltip11,
  tooltipiconpendingShowTooltip12,
  tooltipiconpendingShowTooltip13,
  tooltipiconpendingShowTooltip14,
  tooltipiconpendingShowTooltip15,
  tooltipiconpendingShowTooltip16,
  tooltipiconpendingShowTooltip17,
  tooltipiconpendingShowTooltip18,
  tooltipiconpendingShowTooltip19,
  tooltipiconpendingShowTooltip20,
  tooltipiconpendingShowTooltip21,
  tooltipiconpendingShowTooltip22,
  tooltipiconpendingShowTooltip23,
  tooltipiconpendingShowTooltip24,
  tooltipiconpendingShowTooltip25,
  tooltipiconpendingShowTooltip26,
  tooltipiconpendingShowTooltip27,
  tooltipiconpendingShowTooltip28,
  tooltipiconpendingShowTooltip29,
  tooltipIconShow,
  size,
  state1,
  type2,
  editBtnText,
  editBadgeText,
  upload,
  iconarrowRight,
  showBadge,
  showLIcon,
  showRIcon,
  showBtnText,
  showTooltipBtn,
  tooltipBtnHeight,
  tooltipBtnWidth,
  tooltipiconpendingEditInfo,
  tooltipiconpendingEditInfo1,
  tooltipiconpendingEditInfo2,
  tooltipiconpendingEditInfo3,
  tooltipiconpendingEditInfo4,
  tooltipiconpendingEditInfo5,
  tooltipiconpendingEditInfo6,
  tooltipiconpendingEditInfo7,
  tooltipiconpendingEditInfo8,
  tooltipiconpendingEditInfo9,
  tooltipiconpendingEditInfo10,
  tooltipiconpendingEditInfo11,
  tooltipiconpendingEditInfo12,
  tooltipiconpendingEditInfo13,
  tooltipiconpendingEditInfo14,
  tooltipiconpendingEditInfo15,
  tooltipiconpendingEditInfo16,
  tooltipiconpendingEditInfo17,
  tooltipiconpendingEditInfo18,
  tooltipiconpendingEditInfo19,
  tooltipiconpendingEditInfo20,
  tooltipiconpendingEditInfo21,
  tooltipiconpendingEditInfo22,
  tooltipiconpendingEditInfo23,
  tooltipiconpendingEditInfo24,
  tooltipiconpendingEditInfo25,
  tooltipiconpendingEditInfo26,
  tooltipiconpendingEditInfo27,
  tooltipiconpendingEditInfo28,
  tooltipiconpendingEditInfo29,
  tooltipIconEditInfoText,
}) => {
  const navigate = useNavigate();

  const onOnContainerClick = useCallback(() => {
    navigate("/api-connection-payouts-settings-default");
  }, [navigate]);

  return (
    <ApprovePayoutsEditAdvancRoot data-type={type} className={className}>
      <Title>
        <Tooltip>
          <Text>{title}</Text>
          <TotalBalanceFromContainer>{tooltipText}</TotalBalanceFromContainer>
        </Tooltip>
        <OnOffSwitch
          state={state}
          switch1={switch1}
          type={type1}
          editOffText={editOffText}
          editONText={editONText}
          onOnContainerClick={onOnContainerClick}
        />
        <LabelButton button="/button.svg" />
      </Title>
      <Content>
        <TotalBalanceFromContainer1>
          <AssignTeamMembers>{`Assign team members or roles authorized to `}</AssignTeamMembers>
          <AssignTeamMembers>Approve Invoices</AssignTeamMembers>
          <AssignTeamMembers>.</AssignTeamMembers>
        </TotalBalanceFromContainer1>
        <ApproveInvoiceEditComp>
          <Headline>
            <Rbtext>
              <RadioButton />
              <Monthly>
                Select team members or roles authorized to approve invoices of
                any amount
              </Monthly>
            </Rbtext>
          </Headline>
          <Rules>
            <CaptionTitle>
              <TotalBalanceFrom>Caption Title</TotalBalanceFrom>
              <TotalBalanceFrom1>Condition</TotalBalanceFrom1>
            </CaptionTitle>
            <ChoseOptions>
              <WhoEditUserRole>
                <RoleSelector>
                  <TextField>
                    <FlagsIcon alt="" src="/flags.svg" />
                    <ConnectorIcon alt="" src="/connector@2x.png" />
                    <Iconsearch alt="" src="/iconsearch.svg" />
                    <FieldContent>
                      <ActiveLabel>System admin</ActiveLabel>
                      <StatusesComp>
                        <Title1>Pending</Title1>
                        <TooltipIcon
                          hoverClick={tooltipiconpendingHoverClick}
                          iconSize={tooltipiconpendingIconSize}
                          orientation={tooltipiconpendingOrientation}
                          state={tooltipiconpendingState}
                          editInfoText={tooltipiconpendingEditInfo}
                          showTooltipIcon={tooltipiconpendingShowTooltip}
                          iconHelp="/iconhelp-1.svg"
                        />
                      </StatusesComp>
                    </FieldContent>
                    <IconarrowDown alt="" src="/iconarrow-down-1.svg" />
                  </TextField>
                  <TextDdR>
                    <DropdownSell>
                      <FlagsIcon alt="" src="/flags.svg" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>System admin</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick1}
                            iconSize={tooltipiconpendingIconSize1}
                            orientation={tooltipiconpendingOrientation1}
                            state={tooltipiconpendingState1}
                            editInfoText={tooltipiconpendingEditInfo1}
                            showTooltipIcon={tooltipiconpendingShowTooltip1}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </DropdownSell>
                    <DropdownSell1>
                      <FlagsIcon alt="" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>Finance admin</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick2}
                            iconSize={tooltipiconpendingIconSize2}
                            orientation={tooltipiconpendingOrientation2}
                            state={tooltipiconpendingState2}
                            editInfoText={tooltipiconpendingEditInfo2}
                            showTooltipIcon={tooltipiconpendingShowTooltip2}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </DropdownSell1>
                    <DropdownSell11>
                      <FlagsIcon alt="" src="/flags.svg" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>Connector admin</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick3}
                            iconSize={tooltipiconpendingIconSize3}
                            orientation={tooltipiconpendingOrientation3}
                            state={tooltipiconpendingState3}
                            editInfoText={tooltipiconpendingEditInfo3}
                            showTooltipIcon={tooltipiconpendingShowTooltip3}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </DropdownSell11>
                    <DropdownSell111>
                      <FlagsIcon alt="" src="/flags.svg" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>Finance viewer</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick4}
                            iconSize={tooltipiconpendingIconSize4}
                            orientation={tooltipiconpendingOrientation4}
                            state={tooltipiconpendingState4}
                            editInfoText={tooltipiconpendingEditInfo4}
                            showTooltipIcon={tooltipiconpendingShowTooltip4}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </DropdownSell111>
                    <DropdownSell1111>
                      <FlagsIcon alt="" src="/flags.svg" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>Connector viewer</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick5}
                            iconSize={tooltipiconpendingIconSize5}
                            orientation={tooltipiconpendingOrientation5}
                            state={tooltipiconpendingState5}
                            editInfoText={tooltipiconpendingEditInfo5}
                            showTooltipIcon={tooltipiconpendingShowTooltip5}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </DropdownSell1111>
                    <DropdownSell11111>
                      <FlagsIcon alt="" src="/flags.svg" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>Transaction executor</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick6}
                            iconSize={tooltipiconpendingIconSize6}
                            orientation={tooltipiconpendingOrientation6}
                            state={tooltipiconpendingState6}
                            editInfoText={tooltipiconpendingEditInfo6}
                            showTooltipIcon={tooltipiconpendingShowTooltip6}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </DropdownSell11111>
                    <DropdownSell111111>
                      <Iconsearch alt="" src="/flags.svg" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>Expencess</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick7}
                            iconSize={tooltipiconpendingIconSize7}
                            orientation={tooltipiconpendingOrientation7}
                            state={tooltipiconpendingState7}
                            editInfoText={tooltipiconpendingEditInfo7}
                            showTooltipIcon={tooltipiconpendingShowTooltip7}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </DropdownSell111111>
                    <DropdownSell7Red>
                      <FlagsIcon1 alt="" src="/flags.svg" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>Cards</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick8}
                            iconSize={tooltipiconpendingIconSize8}
                            orientation={tooltipiconpendingOrientation8}
                            state={tooltipiconpendingState8}
                            editInfoText={tooltipiconpendingEditInfo8}
                            showTooltipIcon={tooltipiconpendingShowTooltip8}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </DropdownSell7Red>
                    <DropdownSell8Disabled>
                      <FlagsIcon1 alt="" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>Cards</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick9}
                            iconSize={tooltipiconpendingIconSize9}
                            orientation={tooltipiconpendingOrientation9}
                            state={tooltipiconpendingState9}
                            editInfoText={tooltipiconpendingEditInfo9}
                            showTooltipIcon={tooltipiconpendingShowTooltip9}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </DropdownSell8Disabled>
                  </TextDdR>
                </RoleSelector>
                <RoleSelector1>
                  <Field>
                    <FieldContent1>
                      <FlagsIcon alt="" src="/flags.svg" />
                      <Monthly>Role</Monthly>
                    </FieldContent1>
                    <ArrowDownIcon alt="" src="/iconarrow-down-1.svg" />
                  </Field>
                  <CheckboxesDdR>
                    <Currency>
                      <FlagsIcon alt="" src="/flags.svg" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>User</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick10}
                            iconSize={tooltipiconpendingIconSize10}
                            orientation={tooltipiconpendingOrientation10}
                            state={tooltipiconpendingState10}
                            editInfoText={tooltipiconpendingEditInfo10}
                            showTooltipIcon={tooltipiconpendingShowTooltip10}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </Currency>
                    <Currency1>
                      <FlagsIcon alt="" src="/flags.svg" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>Role</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick11}
                            iconSize={tooltipiconpendingIconSize11}
                            orientation={tooltipiconpendingOrientation11}
                            state={tooltipiconpendingState11}
                            editInfoText={tooltipiconpendingEditInfo11}
                            showTooltipIcon={tooltipiconpendingShowTooltip11}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </Currency1>
                    <Currency11>
                      <FlagsIcon1 alt="" src="/flags.svg" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>Content</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick12}
                            iconSize={tooltipiconpendingIconSize12}
                            orientation={tooltipiconpendingOrientation12}
                            state={tooltipiconpendingState12}
                            editInfoText={tooltipiconpendingEditInfo12}
                            showTooltipIcon={tooltipiconpendingShowTooltip12}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </Currency11>
                    <Currency111>
                      <FlagsIcon1 alt="" src="/flags.svg" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>Content</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick13}
                            iconSize={tooltipiconpendingIconSize13}
                            orientation={tooltipiconpendingOrientation13}
                            state={tooltipiconpendingState13}
                            editInfoText={tooltipiconpendingEditInfo13}
                            showTooltipIcon={tooltipiconpendingShowTooltip13}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </Currency111>
                    <Currency1111>
                      <FlagsIcon1 alt="" src="/flags.svg" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>Content</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick14}
                            iconSize={tooltipiconpendingIconSize14}
                            orientation={tooltipiconpendingOrientation14}
                            state={tooltipiconpendingState14}
                            editInfoText={tooltipiconpendingEditInfo14}
                            showTooltipIcon={tooltipiconpendingShowTooltip14}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </Currency1111>
                    <Currency11111>
                      <FlagsIcon1 alt="" src="/flags.svg" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>Content</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick15}
                            iconSize={tooltipiconpendingIconSize15}
                            orientation={tooltipiconpendingOrientation15}
                            state={tooltipiconpendingState15}
                            editInfoText={tooltipiconpendingEditInfo15}
                            showTooltipIcon={tooltipiconpendingShowTooltip15}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </Currency11111>
                    <Currency111111>
                      <FlagsIcon1 alt="" src="/flags.svg" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>Content</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick16}
                            iconSize={tooltipiconpendingIconSize16}
                            orientation={tooltipiconpendingOrientation16}
                            state={tooltipiconpendingState16}
                            editInfoText={tooltipiconpendingEditInfo16}
                            showTooltipIcon={tooltipiconpendingShowTooltip16}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </Currency111111>
                    <DropdownSell111111>
                      <FlagsIcon1 alt="" src="/flags.svg" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>Content</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick17}
                            iconSize={tooltipiconpendingIconSize17}
                            orientation={tooltipiconpendingOrientation17}
                            state={tooltipiconpendingState17}
                            editInfoText={tooltipiconpendingEditInfo17}
                            showTooltipIcon={tooltipiconpendingShowTooltip17}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </DropdownSell111111>
                    <Currency1111111>
                      <FlagsIcon1 alt="" src="/flags.svg" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>Content</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick18}
                            iconSize={tooltipiconpendingIconSize18}
                            orientation={tooltipiconpendingOrientation18}
                            state={tooltipiconpendingState18}
                            editInfoText={tooltipiconpendingEditInfo18}
                            showTooltipIcon={tooltipiconpendingShowTooltip18}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </Currency1111111>
                    <Currency11111111>
                      <FlagsIcon1 alt="" src="/flags.svg" />
                      <ConnectorIcon1 alt="" />
                      <FlagsIcon alt="" />
                      <Text1>
                        <SecondaryText>Content</SecondaryText>
                      </Text1>
                      <Status>
                        <StatusesComp1>
                          <Title1>Pending</Title1>
                          <TooltipIcon
                            hoverClick={tooltipiconpendingHoverClick19}
                            iconSize={tooltipiconpendingIconSize19}
                            orientation={tooltipiconpendingOrientation19}
                            state={tooltipiconpendingState19}
                            editInfoText={tooltipiconpendingEditInfo19}
                            showTooltipIcon={tooltipiconpendingShowTooltip19}
                            iconHelp="/iconhelp-1.svg"
                          />
                        </StatusesComp1>
                      </Status>
                    </Currency11111111>
                  </CheckboxesDdR>
                </RoleSelector1>
              </WhoEditUserRole>
              <Option>
                <TextField1>
                  <FlagsIcon alt="" src="/iconglobal-account.svg" />
                  <ConnectorIcon alt="" src="/connector@2x.png" />
                  <FlagsIcon alt="" src="/iconadd-funds1.svg" />
                  <WhoEditUserRole>
                    <ActiveLabel>none</ActiveLabel>
                    <StatusesComp11>
                      <Title1>Pending</Title1>
                      <TooltipIcon
                        hoverClick={tooltipiconpendingHoverClick20}
                        iconSize={tooltipiconpendingIconSize20}
                        orientation={tooltipiconpendingOrientation20}
                        state={tooltipiconpendingState20}
                        editInfoText={tooltipiconpendingEditInfo20}
                        showTooltipIcon={tooltipiconpendingShowTooltip20}
                        iconHelp="/iconhelp-1.svg"
                      />
                    </StatusesComp11>
                  </WhoEditUserRole>
                  <IconarrowDown alt="" src="/iconarrow-down-1.svg" />
                </TextField1>
                <TextDdR1>
                  <Currency1>
                    <FlagsIcon alt="" src="/flags.svg" />
                    <ConnectorIcon1 alt="" />
                    <FlagsIcon alt="" />
                    <Text1>
                      <SecondaryText>and</SecondaryText>
                    </Text1>
                    <Status>
                      <StatusesComp1>
                        <Title1>Pending</Title1>
                        <TooltipIcon
                          hoverClick={tooltipiconpendingHoverClick21}
                          iconSize={tooltipiconpendingIconSize21}
                          orientation={tooltipiconpendingOrientation21}
                          state={tooltipiconpendingState21}
                          editInfoText={tooltipiconpendingEditInfo21}
                          showTooltipIcon={tooltipiconpendingShowTooltip21}
                          iconHelp="/iconhelp-1.svg"
                        />
                      </StatusesComp1>
                    </Status>
                  </Currency1>
                  <DropdownSell1>
                    <FlagsIcon alt="" src="/flags.svg" />
                    <ConnectorIcon1 alt="" />
                    <FlagsIcon alt="" />
                    <Text1>
                      <SecondaryText>or</SecondaryText>
                    </Text1>
                    <Status>
                      <StatusesComp1>
                        <Title1>Pending</Title1>
                        <TooltipIcon
                          hoverClick={tooltipiconpendingHoverClick22}
                          iconSize={tooltipiconpendingIconSize22}
                          orientation={tooltipiconpendingOrientation22}
                          state={tooltipiconpendingState22}
                          editInfoText={tooltipiconpendingEditInfo22}
                          showTooltipIcon={tooltipiconpendingShowTooltip22}
                          iconHelp="/iconhelp-1.svg"
                        />
                      </StatusesComp1>
                    </Status>
                  </DropdownSell1>
                  <DropdownSell1111111>
                    <FlagsIcon1 alt="" src="/flags.svg" />
                    <ConnectorIcon1 alt="" />
                    <FlagsIcon alt="" />
                    <Text1>
                      <SecondaryText>Transfers</SecondaryText>
                    </Text1>
                    <Status>
                      <StatusesComp1>
                        <Title1>Pending</Title1>
                        <TooltipIcon
                          hoverClick={tooltipiconpendingHoverClick23}
                          iconSize={tooltipiconpendingIconSize23}
                          orientation={tooltipiconpendingOrientation23}
                          state={tooltipiconpendingState23}
                          editInfoText={tooltipiconpendingEditInfo23}
                          showTooltipIcon={tooltipiconpendingShowTooltip23}
                          iconHelp="/iconhelp-1.svg"
                        />
                      </StatusesComp1>
                    </Status>
                  </DropdownSell1111111>
                  <Currency1111>
                    <FlagsIcon1 alt="" src="/flags.svg" />
                    <ConnectorIcon1 alt="" />
                    <FlagsIcon alt="" />
                    <Text1>
                      <SecondaryText>Payments</SecondaryText>
                    </Text1>
                    <Status>
                      <StatusesComp1>
                        <Title1>Pending</Title1>
                        <TooltipIcon
                          hoverClick={tooltipiconpendingHoverClick24}
                          iconSize={tooltipiconpendingIconSize24}
                          orientation={tooltipiconpendingOrientation24}
                          state={tooltipiconpendingState24}
                          editInfoText={tooltipiconpendingEditInfo24}
                          showTooltipIcon={tooltipiconpendingShowTooltip24}
                          iconHelp="/iconhelp-1.svg"
                        />
                      </StatusesComp1>
                    </Status>
                  </Currency1111>
                  <Currency11111>
                    <FlagsIcon1 alt="" src="/flags.svg" />
                    <ConnectorIcon1 alt="" />
                    <FlagsIcon alt="" />
                    <Text1>
                      <SecondaryText>Get Paid</SecondaryText>
                    </Text1>
                    <Status>
                      <StatusesComp1>
                        <Title1>Pending</Title1>
                        <TooltipIcon
                          hoverClick={tooltipiconpendingHoverClick25}
                          iconSize={tooltipiconpendingIconSize25}
                          orientation={tooltipiconpendingOrientation25}
                          state={tooltipiconpendingState25}
                          editInfoText={tooltipiconpendingEditInfo25}
                          showTooltipIcon={tooltipiconpendingShowTooltip25}
                          iconHelp="/iconhelp-1.svg"
                        />
                      </StatusesComp1>
                    </Status>
                  </Currency11111>
                  <Currency111111>
                    <FlagsIcon1 alt="" src="/flags.svg" />
                    <ConnectorIcon1 alt="" />
                    <FlagsIcon alt="" />
                    <Text1>
                      <SecondaryText>Expencess</SecondaryText>
                    </Text1>
                    <Status>
                      <StatusesComp1>
                        <Title1>Pending</Title1>
                        <TooltipIcon
                          hoverClick={tooltipiconpendingHoverClick26}
                          iconSize={tooltipiconpendingIconSize26}
                          orientation={tooltipiconpendingOrientation26}
                          state={tooltipiconpendingState26}
                          editInfoText={tooltipiconpendingEditInfo26}
                          showTooltipIcon={tooltipiconpendingShowTooltip26}
                          iconHelp="/iconhelp-1.svg"
                        />
                      </StatusesComp1>
                    </Status>
                  </Currency111111>
                  <DropdownSell111111>
                    <FlagsIcon1 alt="" src="/flags.svg" />
                    <ConnectorIcon1 alt="" />
                    <FlagsIcon alt="" />
                    <Text1>
                      <SecondaryText>Expencess</SecondaryText>
                    </Text1>
                    <Status>
                      <StatusesComp1>
                        <Title1>Pending</Title1>
                        <TooltipIcon
                          hoverClick={tooltipiconpendingHoverClick27}
                          iconSize={tooltipiconpendingIconSize27}
                          orientation={tooltipiconpendingOrientation27}
                          state={tooltipiconpendingState27}
                          editInfoText={tooltipiconpendingEditInfo27}
                          showTooltipIcon={tooltipiconpendingShowTooltip27}
                          iconHelp="/iconhelp-1.svg"
                        />
                      </StatusesComp1>
                    </Status>
                  </DropdownSell111111>
                  <DropdownSell7Red>
                    <FlagsIcon1 alt="" src="/flags.svg" />
                    <ConnectorIcon1 alt="" />
                    <FlagsIcon alt="" />
                    <Text1>
                      <SecondaryText>Cards</SecondaryText>
                    </Text1>
                    <Status>
                      <StatusesComp1>
                        <Title1>Pending</Title1>
                        <TooltipIcon
                          hoverClick={tooltipiconpendingHoverClick28}
                          iconSize={tooltipiconpendingIconSize28}
                          orientation={tooltipiconpendingOrientation28}
                          state={tooltipiconpendingState28}
                          editInfoText={tooltipiconpendingEditInfo28}
                          showTooltipIcon={tooltipiconpendingShowTooltip28}
                          iconHelp="/iconhelp-1.svg"
                        />
                      </StatusesComp1>
                    </Status>
                  </DropdownSell7Red>
                  <DropdownSell8Disabled>
                    <FlagsIcon1 alt="" />
                    <ConnectorIcon1 alt="" />
                    <FlagsIcon alt="" />
                    <Text1>
                      <SecondaryText>Cards</SecondaryText>
                    </Text1>
                    <Status>
                      <StatusesComp1>
                        <Title1>Pending</Title1>
                        <TooltipIcon
                          hoverClick={tooltipiconpendingHoverClick29}
                          iconSize={tooltipiconpendingIconSize29}
                          orientation={tooltipiconpendingOrientation29}
                          state={tooltipiconpendingState29}
                          editInfoText={tooltipiconpendingEditInfo29}
                          showTooltipIcon={tooltipiconpendingShowTooltip29}
                          iconHelp="/iconhelp-1.svg"
                        />
                      </StatusesComp1>
                    </Status>
                  </DropdownSell8Disabled>
                </TextDdR1>
              </Option>
              <LabelButton button="/button-3.svg" />
            </ChoseOptions>
          </Rules>
        </ApproveInvoiceEditComp>
        <Disable>
          <Rb>
            <RadioButton1 />
            <Title111>
              <Monthly>Set advanced permissions for invoice approvals</Monthly>
              <Title11>
                <ManuallyApproveEachBankAcc>
                  <ManuallyApproveEach>
                    Manually approve each Bank Account Verification.
                  </ManuallyApproveEach>
                  <IfThisOption>
                    If this option is selected, manual approval of each Bank
                    Account Verification is required.
                  </IfThisOption>
                </ManuallyApproveEachBankAcc>
              </Title11>
            </Title111>
          </Rb>
          <Btnicon>
            <GenericInteractiveBtnsText
              size={size}
              state={state1}
              type={type2}
              showBadge={showBadge}
              showLIcon={showLIcon}
              showRIcon={showRIcon}
              editBtnText={editBtnText}
              editBadgeText={editBadgeText}
              showBtnText={showBtnText}
              showTooltipBtn={showTooltipBtn}
              tooltipBtnHeight={tooltipBtnHeight}
              tooltipBtnWidth={tooltipBtnWidth}
              upload={upload}
              iconarrowRight={iconarrowRight}
            />
            <TooltipIcon
              hoverClick={tooltipIconHoverClick}
              iconSize={tooltipIconSize}
              orientation={tooltipIconOrientation}
              state={tooltipIconState}
              editInfoText={tooltipIconEditInfoText}
              showTooltipIcon={tooltipIconShow}
              iconHelp="/iconhelp-1.svg"
            />
          </Btnicon>
        </Disable>
      </Content>
    </ApprovePayoutsEditAdvancRoot>
  );
};

export default ApproveInvoiceEditAdvanc;
