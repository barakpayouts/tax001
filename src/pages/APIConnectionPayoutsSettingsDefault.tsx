import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopbarGeneral from "../components/TopbarGeneral";
import SidebarWizard from "../components/SidebarWizard";
import styled from "styled-components";
import OnOffSwitch1 from "../components/OnOffSwitch1";
import TextLinkActionComp from "../components/TextLinkActionComp";
import CreatedWorkflow from "../components/CreatedWorkflow";

const Title = styled.h3`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  line-height: var(--Paragraph-20-Paragraph-bold-Font-Line-Height);
  font-weight: var(--Paragraph-20-Paragraph-bold-Font-Weight);
  font-family: inherit;
  display: inline-block;
  min-width: 131px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-16);
    line-height: 22px;
  }
`;
const TextBtn28px = styled.div`
  position: relative;
  font-size: var(--Others-12-Button-medium-Font-Size);
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
  font-family: var(--Inter);
  color: var(--Default-290-Text);
  text-align: center;
`;
const TooltipBtn = styled.div`
  height: 28px;
  border-radius: var(--br-6);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Toggles-Active-310-toogle-active-stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-2) var(--padding-11);
  z-index: 0;
`;
const TooltipButtonRestore1 = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-12);
  z-index: 2;
  @media screen and (max-width: 975px) {
    flex-wrap: wrap;
  }
`;
const Link = styled.b`
  align-self: stretch;
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
`;
const Link1 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--Others-12-Button-medium-Font-Size);
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
`;
const Title11 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-2);
  min-width: 519px;
  @media screen and (max-width: 725px) {
    min-width: 100%;
  }
`;
const Text = styled.b`
  flex: 1;
  position: relative;
  line-height: var(--Headline-12-Headline-bold-Font-Line-Height);
`;
const TooltipIcon1 = styled.img`
  height: 20px;
  width: 20px;
  border-radius: var(--br-4);
`;
const Toogle = styled.div`
  width: 260px;
  border-radius: var(--br-10);
  background-color: var(--Default-290-Text);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-12);
  box-sizing: border-box;
  gap: var(--gap-8);
  font-size: var(--Headline-12-Headline-bold-Font-Size);
  color: var(--Default-290-Stoke);
`;
const Headline = styled.div`
  align-self: stretch;
  border-radius: 0px 0px var(--br-12) var(--br-12);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-16);
  z-index: 1;
  @media screen and (max-width: 975px) {
    flex-wrap: wrap;
  }
`;
const TooltipCycle = styled.b`
  position: relative;
`;
const Iconinfo = styled.img`
  height: 16px;
  width: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Tooltip = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
  min-width: 216px;
`;
const Subtitle = styled.div`
  position: relative;
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
`;
const Off = styled.div`
  align-self: stretch;
  border-radius: var(--Radius-inner-toggle);
  background-color: var(--Toggles-Active-310-toogle-active-off);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--V-padding-inner-toggle) var(--H-padding-inner-toggle);
`;
const On = styled.div`
  height: var(--Height-weight-inner-toggle-default);
  border-radius: var(--Radius-inner-toggle);
  background-color: var(--Toggles-Active-310-toogle-active-on);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--V-padding-inner-toggle) var(--H-padding-inner-toggle);
  box-sizing: border-box;
  color: var(--Toggles-Active-310-toogle-active-text-on);
`;
const Enable11 = styled.div`
  height: var(--Height-outer-toggle);
  border-radius: var(--Radius-outer-toggle);
  background-color: var(--Toggles-Active-310-toogle-active-back);
  border: var(--Stroke-toggle) solid
    var(--Toggles-Active-310-toogle-active-stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-1) var(--padding-2);
  text-align: center;
  font-size: var(--Others-12-Button-medium-Font-Size);
  color: var(--Toggles-Active-310-toogle-active-text-off);
  font-family: var(--Inter);
`;
const ButtonIcon = styled.img`
  height: 28px;
  width: 28px;
  border-radius: var(--br-6);
`;
const Title111 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-12) var(--padding-24) var(--padding-10);
  gap: var(--gap-12);
  z-index: 1;
  @media screen and (max-width: 975px) {
    flex-wrap: wrap;
  }
`;
const TotalBalanceFrom = styled.div`
  align-self: stretch;
  position: relative;
  z-index: 1;
`;
const RadioButton = styled.input`
  cursor: pointer;
  margin: 0;
  height: 20px;
  width: 20px;
  border-radius: var(--br-12);
  background-color: var(--Toolbar-icons-T-Back-default);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Monthly = styled.b`
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
`;
const Title1111 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
`;
const Title11111 = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
  display: flex;
  align-items: center;
`;
const Content1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-28);
  font-size: var(--Others-12-Button-medium-Font-Size);
`;
const RbContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8);
  z-index: 0;
`;
const RbEomNetComp = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: var(--br-8);
  background-color: var(--Current-390-Stroke);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-16);
`;
const FieldContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const IconarrowDown = styled.img`
  width: 14px;
  position: relative;
  height: 14px;
  overflow: hidden;
  flex-shrink: 0;
`;
const TextField = styled.div`
  height: 28px;
  width: 181px;
  border-radius: var(--br-6);
  background-color: var(--Containers-Default-170-Fill-default);
  border: 1px solid var(--Containers-Default-170-Stroke-default);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-2) var(--padding-11);
  gap: var(--gap-4);
`;
const NetForPayment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-12) var(--padding-12) var(--padding-12) 0px;
  margin-left: -200px;
  position: relative;
  font-size: var(--Others-12-Button-medium-Font-Size);
  color: var(--Containers-Default-170-Selected-entered-txt-default);
`;
const Net = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;
`;
const RadioButton1 = styled.input`
  cursor: pointer;
  margin: 0;
  height: 20px;
  width: 20px;
  border-radius: var(--br-100);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Toggles-Active-310-toogle-active-text-off);
  box-sizing: border-box;
`;
const Content11 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-28);
  font-size: var(--Others-12-Button-medium-Font-Size);
  color: var(--Toggles-Active-310-toogle-active-text-off);
`;
const RbEomNetComp1 = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: var(--br-8);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Tooltip-190-Tooltip-stroke);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-14) var(--padding-15);
`;
const Tag = styled.div`
  flex: 1;
  position: relative;
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
`;
const IconarrowDown1 = styled.img`
  height: 14px;
  width: 14px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const TextField1 = styled.div`
  height: 28px;
  width: 181px;
  border-radius: var(--br-6);
  background-color: var(--Containers-Disable-170-Fill-disable);
  border: 1px solid var(--Containers-Disable-170-Stroke-disable);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-2) var(--padding-11);
  gap: var(--gap-4);
`;
const NetForPayment1 = styled.div`
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-12) var(--padding-12) var(--padding-12) 0px;
  box-sizing: border-box;
  margin-left: -200px;
  position: relative;
  font-size: var(--Others-12-Button-medium-Font-Size);
  color: var(--Containers-Disable-170-Placeholder-txt-disable);
`;
const Eom = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  z-index: 0;
  color: var(--Default-290-Text);
`;
const EomNet = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8);
  z-index: 0;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  color: var(--Toolbar-icons-T-Back-default);
  font-family: var(--Inter);
`;
const Content111 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-16) var(--padding-24) var(--padding-24);
  gap: var(--gap-12);
  z-index: 0;
  font-size: var(--font-size-14);
  color: var(--Toggles-Active-310-toogle-active-text-off);
`;
const RecipientPaymentTermsComp1 = styled.section`
  align-self: stretch;
  border-radius: var(--br-12);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--font-size-16);
  color: var(--Default-290-Text);
  font-family: Inter;
`;
const Tooltip1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
  min-width: 231px;
`;
const Subtitle1 = styled.div`
  position: relative;
  font-size: var(--Others-12-Button-medium-Font-Size);
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
  font-family: var(--Inter);
  color: var(--Toggles-Active-310-toogle-active-text-off);
  text-align: center;
`;
const Subtitle11 = styled.div`
  position: relative;
  font-size: var(--Others-12-Button-medium-Font-Size);
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
  font-family: var(--Inter);
  color: var(--Toggles-Active-310-toogle-active-text-on);
  text-align: center;
`;
const On1 = styled.div`
  height: var(--Height-weight-inner-toggle-default);
  border-radius: var(--Radius-inner-toggle);
  background-color: var(--Toggles-Active-310-toogle-active-on);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--V-padding-inner-toggle) var(--H-padding-inner-toggle);
  box-sizing: border-box;
`;
const Enable111 = styled.button`
  cursor: pointer;
  border: var(--Stroke-toggle) solid
    var(--Toggles-Active-310-toogle-active-stroke);
  padding: var(--padding-1) var(--padding-2);
  background-color: var(--Toggles-Active-310-toogle-active-back);
  height: var(--Height-outer-toggle);
  border-radius: var(--Radius-outer-toggle);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Title111111 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 7px;
  z-index: 5;
`;
const HintMessage = styled.div`
  align-self: stretch;
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
`;
const ActiveLabel = styled.div`
  flex: 1;
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
`;
const FieldContent1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-width: 631px;
  @media screen and (max-width: 975px) {
    min-width: 100%;
  }
`;
const ArrowDownIcon = styled.img`
  height: var(--Containers-Cont-Input-Arrow-size);
  width: var(--Containers-Cont-Input-Arrow-size);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const TextField11 = styled.div`
  align-self: stretch;
  height: var(--Containers-Cont-Input-heigh);
  border-radius: var(--br-8);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: var(--Containers-Cont-Input-stroke) solid
    var(--Containers-Default-170-Stroke-default);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--Containers-Cont-Input-V-padding) var(--padding-15);
  gap: var(--Containers-Cont-Input-spacing);
  color: var(--Containers-Default-170-Selected-entered-txt-default);
  @media screen and (max-width: 975px) {
    height: auto;
    flex-wrap: wrap;
  }
`;
const Title1111111 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-4);
  z-index: 0;
`;
const Daily = styled.div`
  align-self: stretch;
  border-radius: var(--br-12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 4;
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
`;
const Separator = styled.div`
  align-self: stretch;
  height: 1px;
  background-color: var(--Inactive-390-Line);
`;
const Spread = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8) 0px;
  z-index: 3;
`;
const Title11111111 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-6);
  z-index: 2;
`;
const Title111111111 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Iconclock = styled.img`
  width: 20px;
  position: relative;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const FieldContent11 = styled.input`
  width: calc(100% - 66px);
  border: none;
  outline: none;
  background-color: transparent;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-family: Inter;
  font-size: var(--font-size-14);
  color: var(--Default-290-Text);
  min-width: 300px;
`;
const TextField111 = styled.div`
  align-self: stretch;
  height: var(--Containers-Cont-Input-heigh);
  border-radius: var(--br-8);
  background-color: var(--Containers-Default-170-Fill-default);
  border: var(--Containers-Cont-Input-stroke) solid
    var(--Containers-Default-170-Stroke-default);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--Containers-Cont-Input-V-padding) var(--padding-15);
  gap: var(--Containers-Cont-Input-spacing);
  z-index: 0;
  @media screen and (max-width: 975px) {
    height: auto;
    flex-wrap: wrap;
  }
`;
const DropdownsSelectors = styled.div`
  align-self: stretch;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 975px) {
    height: auto;
  }
`;
const TimeGenerate = styled.div`
  align-self: stretch;
  height: 62px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-4);
  z-index: 1;
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  @media screen and (max-width: 975px) {
    height: auto;
  }
`;
const Separator1 = styled.div`
  align-self: stretch;
  height: 1px;
`;
const Spread1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
`;
const Content1111 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-16) var(--padding-24) var(--padding-24);
  gap: var(--gap-12);
  z-index: 0;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  font-family: var(--Inter);
`;
const Tooltip11 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 7px;
`;
const Title1111111111 = styled.div`
  width: 1123px;
  border-bottom: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-12) var(--padding-24) var(--padding-10);
  gap: var(--gap-12);
  z-index: 1;
`;
const AssignTeamMembers = styled.span`
  font-family: Inter;
`;
const TotalBalanceFromContainer = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-14);
  color: var(--Toggles-Active-310-toogle-active-text-off);
  text-align: left;
  z-index: 2;
`;
const Point = styled.div`
  width: 8px;
  position: relative;
  border-radius: var(--br-10);
  background-color: var(--Active-Checked-Undertemined-310-CB-RB-V);
  height: 8px;
`;
const RadioButton11 = styled.div`
  height: var(--Height-Width-CB-RB);
  width: var(--Height-Width-CB-RB);
  border-radius: var(--br-12);
  background-color: var(--Active-Checked-Undertemined-310-CB-RB-fill);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--H-padding-CB-RB);
  box-sizing: border-box;
`;
const Rbtext = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Monthly1 = styled.b`
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
  font-family: var(--Inter);
  color: var(--Toolbar-icons-T-Back-default);
  text-align: left;
`;
const Rbtext1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8);
`;
const TotalBalanceFrom1 = styled.b`
  flex: 1;
  position: relative;
  font-size: var(--font-size-14);
  display: inline-block;
  font-family: Inter;
  color: var(--Default-290-Text);
  text-align: left;
  min-width: 129px;
`;
const ActiveLabel1 = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
  font-family: var(--Inter);
  color: var(--Containers-Default-170-Selected-entered-txt-default);
  text-align: left;
`;
const FieldContent111 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-width: 362px;
  @media screen and (max-width: 725px) {
    min-width: 100%;
  }
`;
const TextField1111 = styled.div`
  align-self: stretch;
  height: var(--Containers-Cont-Input-heigh);
  border-radius: var(--br-8) 0px 0px var(--br-8);
  background-color: var(--Containers-Default-170-Fill-default);
  border: var(--Containers-Cont-Input-stroke) solid
    var(--Containers-Default-170-Stroke-default);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--Containers-Cont-Input-V-padding) var(--padding-15);
  gap: var(--Containers-Cont-Input-spacing);
  z-index: 0;
  @media screen and (max-width: 725px) {
    height: auto;
    flex-wrap: wrap;
  }
`;
const UserRoleApproval = styled.div`
  height: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 725px) {
    height: auto;
  }
`;
const Tag1 = styled.b`
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
  font-family: var(--Inter);
  color: var(--Containers-Default-170-Placeholder-txt-Prefix-DD-default);
  text-align: left;
`;
const ArrowDownIcon1 = styled.img`
  width: var(--Containers-Cont-Input-Arrow-size);
  position: relative;
  height: var(--Containers-Cont-Input-Arrow-size);
  overflow: hidden;
  flex-shrink: 0;
`;
const Field = styled.div`
  align-self: stretch;
  height: var(--Containers-Cont-Input-heigh);
  border-radius: 0px var(--Containers-Cont-Input-radius)
    var(--Containers-Cont-Input-radius) 0px;
  background-color: var(--Containers-Default-170-Fill-Prefix-DD-default);
  border: var(--Containers-Cont-Input-stroke) solid
    var(--Containers-Default-170-Stroke-default);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px var(--Containers-Cont-Input-H-padding);
  gap: 0px;
  z-index: 0;
`;
const PrefixSelectedDdR = styled.div`
  height: 40px;
  width: 140px;
  border-radius: 0px var(--br-8) var(--br-8) 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: -1px;
  position: relative;
`;
const WhoApprovesRole = styled.div`
  width: 752px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
`;
const From = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-12);
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 975px) {
    flex-wrap: wrap;
  }
`;
const ActionBtn = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  z-index: 0;
`;
const Group = styled.div`
  align-self: stretch;
  border-radius: var(--br-8);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-12);
  max-width: 100%;
  z-index: 1;
`;
const RequireAnotherApprover = styled.div`
  height: 28px;
  border-radius: var(--br-6);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Toggles-Active-310-toogle-active-stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-2) var(--padding-11);
  gap: var(--gap-4);
`;
const Save1 = styled.button`
  cursor: pointer;
  border: 1px solid var(--Toggles-Active-310-toogle-active-stroke);
  padding: var(--padding-2) var(--padding-10);
  background-color: var(--Tooltip-190-Tooltip-fill);
  height: 28px;
  border-radius: var(--br-6);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--color-gainsboro-100);
    border: 1px solid var(--color-gray-100);
    box-sizing: border-box;
  }
`;
const Save11 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: var(--padding-24) 0px 0px;
  gap: 0px;
  z-index: 0;
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
  }
`;
const Rules = styled.div`
  align-self: stretch;
  border-radius: var(--br-8);
  background-color: var(--Tooltip-190-Tooltip-fill);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-16);
  box-sizing: border-box;
  gap: var(--gap-8);
  max-width: 100%;
`;
const ApproveInvoiceEditComp = styled.div`
  align-self: stretch;
  border-radius: var(--br-8);
  background-color: var(--Current-390-Stroke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-20) var(--padding-16);
  box-sizing: border-box;
  gap: var(--gap-12);
  max-width: 100%;
  z-index: 1;
`;
const Content11111 = styled.form`
  margin: 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-16) var(--padding-24) var(--padding-24);
  box-sizing: border-box;
  gap: var(--gap-8);
  max-width: 100%;
  z-index: 0;
`;
const ApprovePayoutsEditAdvanc = styled.section`
  align-self: stretch;
  border-radius: var(--br-10);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-16);
  color: var(--Default-290-Text);
  font-family: Inter;
`;
const List = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8);
  max-width: 100%;
  z-index: 0;
`;
const OnDemand = styled.div`
  align-self: stretch;
  border-radius: var(--br-12);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-22) 23px;
  gap: var(--gap-16);
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    padding-top: var(--padding-20);
    padding-bottom: var(--padding-20);
    box-sizing: border-box;
  }
`;
const Separator11 = styled.div`
  align-self: stretch;
  height: 1px;
  flex-shrink: 0;
  z-index: 0;
`;
const Scroll = styled.div`
  align-self: stretch;
  flex: 1;
  border-bottom: 2px solid var(--Tooltip-190-Tooltip-stroke);
  box-sizing: border-box;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-16);
  max-width: 100%;
  z-index: 1;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
`;
const ButtonIcon1 = styled.img`
  height: 40px;
  width: 40px;
  border-radius: var(--br-8);
`;
const UploadDataSource = styled.b`
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
  font-family: var(--Inter);
  color: var(--Default-290-Text);
  text-align: center;
`;
const Back1 = styled.button`
  cursor: pointer;
  border: 1px solid var(--Toggles-Active-310-toogle-active-stroke);
  padding: var(--padding-6) var(--padding-15);
  background-color: var(--Tooltip-190-Tooltip-fill);
  height: 40px;
  border-radius: var(--br-8);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--color-gainsboro-100);
    border: 1px solid var(--color-gray-100);
    box-sizing: border-box;
  }
`;
const UploadDataSource1 = styled.b`
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
  font-family: var(--Inter);
  color: var(--Default-290-Stoke);
  text-align: center;
`;
const Next1 = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-gray-200);
  padding: var(--padding-6) var(--padding-16);
  background-color: var(--Toolbar-icons-T-Back-default);
  height: 40px;
  width: 160px;
  border-radius: var(--br-8);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray-100);
    box-sizing: border-box;
  }
`;
const R = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  gap: var(--gap-12);
`;
const ActionBtn1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0px;
  z-index: 0;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const Wrapped1 = styled.section`
  align-self: stretch;
  flex: 1;
  border-radius: var(--br-12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-16);
  min-width: 730px;
  max-width: 100%;
  text-align: left;
  font-size: var(--Paragraph-20-Paragraph-bold-Font-Size);
  color: var(--Current-390-Line);
  font-family: var(--Inter);
  @media screen and (max-width: 975px) {
    min-width: 100%;
  }
`;
const Wrapping1 = styled.main`
  align-self: stretch;
  height: 1334px;
  border-radius: var(--br-12);
  background-color: var(--Inactive-390-Line);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-16);
  box-sizing: border-box;
  gap: var(--gap-32);
  max-width: 100%;
  @media screen and (max-width: 1000px) {
    height: auto;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 725px) {
    gap: var(--gap-16);
  }
`;
const ApiConnectionPayoutsSettiRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--Tooltip-190-Tooltip-fill);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-18);
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
`;

const APIConnectionPayoutsSettingsDefault: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHugTextContainerClick = useCallback(() => {
    navigate("/api-connection-payouts-eligibility");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/api-connection-self-invoice-settings-default");
  }, [navigate]);

  return (
    <ApiConnectionPayoutsSettiRoot>
      <TopbarGeneral />
      <Wrapping1>
        <SidebarWizard
          sidebarWizardAlignSelf="unset"
          sidebarWizardHeight="853px"
          icon="/icon-3.svg"
          lineBackgroundColor="#41ba52"
          icon1="/icon-3.svg"
          recoverPasswordColor="#41ba52"
          lineBackgroundColor1="#41ba52"
          onHugTextContainerClick={onHugTextContainerClick}
          icon2="/icon-3.svg"
          recoverPasswordColor1="#41ba52"
          lineBackgroundColor2="#2f2e2c"
          onHugTextContainerClick1={onHugTextContainerClick}
          hugTextWidth="unset"
          hugTextAlignSelf="stretch"
          icon3="/icon-6.svg"
          icon4="/icon-4@2x.png"
          icon5="/icon-8.svg"
          icon6="/icon-9.svg"
          icon7="/icon-10.svg"
          icon8="/icon-11.svg"
        />
        <Wrapped1>
          <Title1>
            <Title>Payouts Settings</Title>
            <TooltipButtonRestore1>
              <TooltipBtn>
                <TextBtn28px>Restore Default</TextBtn28px>
              </TooltipBtn>
            </TooltipButtonRestore1>
          </Title1>
          <Scroll>
            <OnDemand>
              <Headline>
                <Title11>
                  <Link>On-Demand Payouts</Link>
                  <Link1>
                    When enabled, all payouts will be executed on demand -
                    payout approval permissions, and payout cycle settings will
                    be disabled.
                  </Link1>
                </Title11>
                <Toogle>
                  <OnOffSwitch1 state="default" switch1="OFF" />
                  <Text>On-Demand Mode Disabled</Text>
                  <TooltipIcon1 loading="lazy" alt="" src="/tooltip-icon.svg" />
                </Toogle>
              </Headline>
              <List>
                <RecipientPaymentTermsComp1>
                  <Title111>
                    <Tooltip>
                      <TooltipCycle>Recipient Payment Terms</TooltipCycle>
                      <Iconinfo loading="lazy" alt="" src="/iconinfo.svg" />
                    </Tooltip>
                    <Enable11>
                      <Off>
                        <Subtitle>Disable</Subtitle>
                      </Off>
                      <On>
                        <Subtitle>Enable</Subtitle>
                      </On>
                    </Enable11>
                    <ButtonIcon loading="lazy" alt="" src="/button1.svg" />
                  </Title111>
                  <Content111>
                    <TotalBalanceFrom>
                      When should the payment countdown begin after an invoice
                      or payout is issued?
                    </TotalBalanceFrom>
                    <EomNet>
                      <Net>
                        <RbEomNetComp>
                          <RbContent>
                            <Title1111>
                              <RadioButton type="radio" />
                              <Monthly>Net Days from Issue Date</Monthly>
                            </Title1111>
                            <Content1>
                              <Title11111>
                                Start counting payment terms from the exact date
                                the invoice or payout is issued
                              </Title11111>
                            </Content1>
                          </RbContent>
                        </RbEomNetComp>
                        <NetForPayment>
                          <TextField>
                            <FieldContent>
                              <Subtitle>Net 30 (Default)</Subtitle>
                            </FieldContent>
                            <IconarrowDown alt="" src="/iconarrow-down1.svg" />
                          </TextField>
                        </NetForPayment>
                      </Net>
                      <Eom>
                        <RbEomNetComp1>
                          <RbContent>
                            <Title1111>
                              <RadioButton1 type="radio" />
                              <Monthly>Net Days from End of Month</Monthly>
                            </Title1111>
                            <Content11>
                              <Title11111>
                                Start counting payment terms from the last day
                                of the month in which the invoice or payout is
                                issued
                              </Title11111>
                            </Content11>
                          </RbContent>
                        </RbEomNetComp1>
                        <NetForPayment1>
                          <TextField1>
                            <FieldContent>
                              <Tag>120</Tag>
                            </FieldContent>
                            <IconarrowDown1
                              alt=""
                              src="/iconarrow-down-11.svg"
                            />
                          </TextField1>
                        </NetForPayment1>
                      </Eom>
                    </EomNet>
                  </Content111>
                </RecipientPaymentTermsComp1>
                <RecipientPaymentTermsComp1>
                  <Title111>
                    <Tooltip1>
                      <TooltipCycle>Payout Cycle Configuration</TooltipCycle>
                      <Iconinfo alt="" src="/iconinfo.svg" />
                    </Tooltip1>
                    <Enable111>
                      <Off>
                        <Subtitle1>Disable</Subtitle1>
                      </Off>
                      <On1>
                        <Subtitle11>Enable</Subtitle11>
                      </On1>
                    </Enable111>
                    <ButtonIcon alt="" src="/button1.svg" />
                  </Title111>
                  <Content1111>
                    <Title111111>
                      <Monthly>
                        Define the frequency at which your payout cycles occur
                      </Monthly>
                      <TooltipIcon1 alt="" src="/tooltip-icon-1.svg" />
                    </Title111111>
                    <Daily>
                      <Title1111111>
                        <HintMessage>Payouts Cycle - Time Interval</HintMessage>
                        <TextField11>
                          <FieldContent1>
                            <ActiveLabel>Daily</ActiveLabel>
                          </FieldContent1>
                          <ArrowDownIcon alt="" src="/iconarrow-down-1.svg" />
                        </TextField11>
                      </Title1111111>
                    </Daily>
                    <Spread>
                      <Separator />
                    </Spread>
                    <Title11111111>
                      <Monthly>Set the date to auto generate invoices</Monthly>
                      <TooltipIcon1 alt="" src="/tooltip-icon-1.svg" />
                    </Title11111111>
                    <TimeGenerate>
                      <Title111111111>
                        <ActiveLabel>Time</ActiveLabel>
                      </Title111111111>
                      <DropdownsSelectors>
                        <TextField111>
                          <Iconclock alt="" src="/iconclock.svg" />
                          <FieldContent11 placeholder="14 : 00" type="text" />
                          <ArrowDownIcon alt="" src="/iconarrow-down-1.svg" />
                        </TextField111>
                      </DropdownsSelectors>
                    </TimeGenerate>
                    <Spread1>
                      <Separator1 />
                    </Spread1>
                  </Content1111>
                </RecipientPaymentTermsComp1>
                <ApprovePayoutsEditAdvanc>
                  <Title1111111111>
                    <Tooltip11>
                      <TooltipCycle>Who can Approve Payouts?</TooltipCycle>
                      <Iconinfo alt="" src="/iconinfo.svg" />
                    </Tooltip11>
                    <Enable111>
                      <Off>
                        <Subtitle1>Disable</Subtitle1>
                      </Off>
                      <On1>
                        <Subtitle11>Enable</Subtitle11>
                      </On1>
                    </Enable111>
                    <ButtonIcon alt="" src="/button1.svg" />
                  </Title1111111111>
                  <Content11111>
                    <TotalBalanceFromContainer>
                      <AssignTeamMembers>{`Assign team members or roles authorized to `}</AssignTeamMembers>
                      <AssignTeamMembers>Approve Payouts</AssignTeamMembers>
                      <AssignTeamMembers>.</AssignTeamMembers>
                    </TotalBalanceFromContainer>
                    <ApproveInvoiceEditComp>
                      <Rbtext1>
                        <Rbtext>
                          <RadioButton11>
                            <Point />
                          </RadioButton11>
                        </Rbtext>
                        <Monthly1>
                          Select team members or roles authorized to approve
                          invoices of any amount
                        </Monthly1>
                      </Rbtext1>
                      <Rules>
                        <Group>
                          <From>
                            <TotalBalanceFrom1>
                              Approval required from:
                            </TotalBalanceFrom1>
                            <WhoApprovesRole>
                              <UserRoleApproval>
                                <TextField1111>
                                  <FieldContent111>
                                    <ActiveLabel1>System Admin</ActiveLabel1>
                                  </FieldContent111>
                                  <ArrowDownIcon
                                    alt=""
                                    src="/iconarrow-down-1.svg"
                                  />
                                </TextField1111>
                              </UserRoleApproval>
                              <PrefixSelectedDdR>
                                <Field>
                                  <Tag1>Role</Tag1>
                                  <ArrowDownIcon1
                                    alt=""
                                    src="/iconarrow-down-1.svg"
                                  />
                                </Field>
                              </PrefixSelectedDdR>
                            </WhoApprovesRole>
                          </From>
                          <ActionBtn>
                            <TextLinkActionComp
                              state="off"
                              type="label"
                              editText="+ Add Condition"
                            />
                          </ActionBtn>
                        </Group>
                        <Save11>
                          <RequireAnotherApprover>
                            <Iconinfo
                              loading="lazy"
                              alt=""
                              src="/iconadd-funds.svg"
                            />
                            <TextBtn28px>Require another Approver</TextBtn28px>
                          </RequireAnotherApprover>
                          <Save1>
                            <TextBtn28px>Save</TextBtn28px>
                          </Save1>
                        </Save11>
                      </Rules>
                    </ApproveInvoiceEditComp>
                    <CreatedWorkflow
                      rBMinWidth="540px"
                      titleMinWidth="522px"
                      title="Set advanced permissions for invoice approvals"
                    />
                  </Content11111>
                </ApprovePayoutsEditAdvanc>
              </List>
            </OnDemand>
            <Separator11 />
          </Scroll>
          <ActionBtn1>
            <ButtonIcon1 alt="" src="/button-4.svg" />
            <R>
              <Back1 onClick={onBackClick}>
                <UploadDataSource>Back</UploadDataSource>
              </Back1>
              <Next1>
                <UploadDataSource1>{`Save & Continue`}</UploadDataSource1>
              </Next1>
            </R>
          </ActionBtn1>
        </Wrapped1>
      </Wrapping1>
    </ApiConnectionPayoutsSettiRoot>
  );
};

export default APIConnectionPayoutsSettingsDefault;
