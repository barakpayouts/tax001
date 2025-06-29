import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopbarGeneral1 from "../components/TopbarGeneral1";
import SidebarWizard from "../components/SidebarWizard";
import styled from "styled-components";
import NotesTypes from "../components/NotesTypes";
import TextLinkActionComp from "../components/TextLinkActionComp";
import CreatedWorkflow from "../components/CreatedWorkflow";
import LabelButton from "../components/LabelButton";

const Title = styled.h3`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  line-height: var(--Paragraph-20-Paragraph-bold-Font-Line-Height);
  font-weight: var(--Paragraph-20-Paragraph-bold-Font-Weight);
  font-family: inherit;
  display: inline-block;
  min-width: 124px;
  @media screen and (max-width: 1325px) {
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
const TooltipBtn = styled.button`
  cursor: pointer;
  border: 1px solid var(--Toggles-Active-310-toogle-active-stroke);
  padding: var(--padding-2) var(--padding-11);
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
const Title1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-12);
  z-index: 2;
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
const Text = styled.b`
  position: relative;
`;
const Iconinfo = styled.img`
  width: 16px;
  position: relative;
  height: 16px;
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
`;
const Subtitle = styled.div`
  position: relative;
  font-size: var(--Others-12-Button-medium-Font-Size);
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
  font-family: var(--Inter);
  color: var(--Toggles-Active-310-toogle-active-text-off);
  text-align: center;
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
const Subtitle1 = styled.div`
  position: relative;
  font-size: var(--Others-12-Button-medium-Font-Size);
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
  font-family: var(--Inter);
  color: var(--Toggles-Active-310-toogle-active-text-on);
  text-align: center;
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
`;
const Enable11 = styled.button`
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
const ButtonIcon = styled.img`
  height: 28px;
  width: 28px;
  border-radius: var(--br-6);
`;
const Title11 = styled.div`
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
const TotalBalanceFrom = styled.b`
  align-self: stretch;
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
`;
const TotalBalanceFrom1 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
`;
const Title111 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-4);
`;
const Description = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  z-index: 4;
  @media screen and (max-width: 450px) {
    gap: var(--gap-16);
  }
`;
const FieldContent = styled.input`
  width: calc(100% - 46px);
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
const CloseIcon = styled.img`
  width: 12px;
  position: relative;
  height: 12px;
  overflow: hidden;
  flex-shrink: 0;
`;
const IconarrowDown = styled.img`
  width: var(--Containers-Cont-Input-Arrow-size);
  position: relative;
  height: var(--Containers-Cont-Input-Arrow-size);
  overflow: hidden;
  flex-shrink: 0;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-8);
`;
const TextField = styled.div`
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
  justify-content: flex-start;
  padding: var(--Containers-Cont-Input-V-padding) var(--padding-15);
  gap: var(--Containers-Cont-Input-spacing);
  z-index: 0;
  @media screen and (max-width: 900px) {
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
  z-index: 3;
  @media screen and (max-width: 900px) {
    height: auto;
  }
`;
const FlagsIcon = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const ActiveLabel = styled.b`
  flex: 1;
  position: relative;
  line-height: 20px;
  display: inline-block;
  min-width: 122px;
`;
const Title1111 = styled.div`
  position: relative;
  font-size: var(--Others-12-Button-medium-Font-Size);
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
  font-family: var(--Inter);
  color: var(--Notes-Statuses-Sucsess-250-Text-statuses);
  text-align: center;
`;
const StatusesComp = styled.button`
  cursor: pointer;
  border: 1px solid var(--Notes-Statuses-Sucsess-250-Stroke-statuses);
  padding: 0px var(--Statuses-240-S-Status-H-padding);
  background-color: var(--Notes-Statuses-Sucsess-250-Fill-notes-statuses);
  align-self: stretch;
  border-radius: var(--Statuses-240-S-Status-radius);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  &:hover {
    background-color: var(--color-honeydew);
    border: 1px solid var(--color-seagreen);
    box-sizing: border-box;
  }
`;
const RemoveIcon = styled.img`
  height: 20px;
  width: 20px;
`;
const Raw = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-8) 0px var(--padding-6);
  gap: var(--gap-8);
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
const ActiveLabel1 = styled.b`
  flex: 1;
  position: relative;
  line-height: 20px;
  display: inline-block;
  min-width: 49px;
`;
const ActiveLabel11 = styled.b`
  flex: 1;
  position: relative;
  line-height: 20px;
  display: inline-block;
  min-width: 108px;
`;
const List = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 2;
  font-size: var(--font-size-12);
  color: var(--Default-290-Text);
  font-family: var(--Fonts-General-Font-family-font-family1);
`;
const Separator = styled.div`
  align-self: stretch;
  height: 1px;
  border: 1px solid var(--Tooltip-190-Tooltip-fill);
  box-sizing: border-box;
`;
const Spread = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8) 0px 0px;
  z-index: 1;
`;
const Disclaimer = styled.span``;
const Link = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  display: flex;
  align-items: center;
`;
const IconText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const NotesTypes1 = styled.div`
  align-self: stretch;
  border-radius: var(--Notes-240-N-Radius);
  background-color: var(--Tooltip-190-Tooltip-fill);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  z-index: 0;
  font-size: var(--Others-12-Button-medium-Font-Size);
  color: var(--Notes-Statuses-Info-250-Text-notes-statuses);
  font-family: Inter;
`;
const Content1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-16) var(--padding-24) var(--padding-24);
  gap: var(--gap-8);
  z-index: 0;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  color: var(--Toggles-Active-310-toogle-active-text-off);
  font-family: var(--Inter);
`;
const AcceptedCurrenciesComp = styled.section`
  align-self: stretch;
  border-radius: var(--br-12);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 4;
  text-align: left;
  font-size: var(--font-size-16);
  color: var(--Default-290-Text);
  font-family: Inter;
`;
const Iconinfo1 = styled.img`
  height: 16px;
  width: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Subtitle11 = styled.div`
  position: relative;
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
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
  color: var(--Toggles-Active-310-toogle-active-text-on);
`;
const Enable111 = styled.div`
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
  padding: var(--V-padding-outer-toggle) var(--H-padding-outer-toggle);
  text-align: center;
  font-size: var(--Others-12-Button-medium-Font-Size);
  color: var(--Toggles-Active-310-toogle-active-text-off);
  font-family: var(--Inter);
`;
const TotalBalanceFrom11 = styled.div`
  align-self: stretch;
  position: relative;
  z-index: 3;
`;
const Separator1 = styled.div`
  align-self: stretch;
  flex: 1;
  background-color: var(--Disabled-Default-310-CB-RB-stroke);
`;
const Spread1 = styled.div`
  align-self: stretch;
  height: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
`;
const TotalBalanceFrom111 = styled.b`
  width: 720px;
  position: relative;
  font-size: var(--font-size-14);
  display: inline-block;
  font-family: Inter;
`;
const Shape11 = styled.input`
  cursor: pointer;
  margin: 0;
  height: var(--Height-Width-CB-RB);
  width: var(--Height-Width-CB-RB);
  border-radius: var(--Radius-RB);
  background-color: var(--Active-Checked-Undertemined-310-CB-RB-fill);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--H-padding-CB-RB);
  box-sizing: border-box;
`;
const Title11111 = styled.b`
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
`;
const Title111111 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 631px;
  @media screen and (max-width: 900px) {
    min-width: 100%;
  }
`;
const Rb = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
  min-width: 649px;
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    min-width: 100%;
  }
`;
const Btnicon11 = styled.img`
  width: 20px;
  max-height: 100%;
`;
const CbRbSelector11 = styled.div`
  align-self: stretch;
  border-radius: var(--Radius-CB-RB-bgselector);
  background-color: var(--Active-Checked-Undertemined-310-Fill);
  border: var(--Stroke-CB-RB-bgselector) solid
    var(--Active-Checked-Undertemined-310-Stroke);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-10) var(--padding-15);
  gap: var(--Spacing-CB-RB-bgselector);
  color: var(--Active-Checked-Undertemined-310-Title);
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
const Shape111 = styled.input`
  cursor: pointer;
  margin: 0;
  height: var(--Height-Width-CB-RB);
  width: var(--Height-Width-CB-RB);
  border-radius: var(--Radius-RB);
  background-color: var(--Default-310-CB-RB-fill);
  border: var(--Stroke-CB-RB) solid var(--Default-310-CB-RB-stroke);
  box-sizing: border-box;
`;
const CbRbSelector111 = styled.div`
  align-self: stretch;
  border-radius: var(--Radius-CB-RB-bgselector);
  background-color: var(--Default-310-Fill);
  border: var(--Stroke-CB-RB-bgselector) solid var(--Default-310-Stroke);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-10) var(--padding-15);
  gap: var(--Spacing-CB-RB-bgselector);
  color: var(--Default-310-Title);
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
const Rb1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8);
  z-index: 0;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  font-family: var(--Inter);
`;
const Content11 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-16) var(--padding-24) var(--padding-24);
  gap: var(--gap-16);
  z-index: 0;
  font-size: var(--font-size-14);
  color: var(--Toggles-Active-310-toogle-active-text-off);
`;
const VatSalesTaxGstCalculat = styled.section`
  width: 1123px;
  border-radius: var(--br-12);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 3;
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
  gap: 7px;
`;
const DefineWhichTeam = styled.span`
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
const Rbtext = styled.input`
  cursor: pointer;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Monthly = styled.b`
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
const Headline = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const TotalBalanceFrom1111 = styled.b`
  flex: 1;
  position: relative;
  font-size: var(--font-size-14);
  display: inline-block;
  font-family: Inter;
  color: var(--Default-290-Text);
  text-align: left;
  min-width: 101px;
`;
const ActiveLabel111 = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
  font-family: var(--Inter);
  color: var(--Containers-Default-170-Selected-entered-txt-default);
  text-align: left;
`;
const FieldContent1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-width: 362px;
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const IconarrowDown1 = styled.img`
  height: var(--Containers-Cont-Input-Arrow-size);
  width: var(--Containers-Cont-Input-Arrow-size);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const TextField1 = styled.div`
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
  @media screen and (max-width: 450px) {
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
  @media screen and (max-width: 450px) {
    height: auto;
  }
`;
const Tag = styled.b`
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
  font-family: var(--Inter);
  color: var(--Containers-Default-170-Placeholder-txt-Prefix-DD-default);
  text-align: left;
`;
const FieldContent11 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-16) 0px 0px;
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
  padding: 0px var(--padding-15);
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
  @media screen and (max-width: 900px) {
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
const Save11 = styled.button`
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
const Save111 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  padding: var(--padding-24) 0px 0px;
  z-index: 0;
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
const EditInvoiceEditComp = styled.div`
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
const Content111 = styled.form`
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
const EditInvoiceEditAdvanced = styled.section`
  width: 1123px;
  border-radius: var(--br-12);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  z-index: 2;
  text-align: left;
  font-size: var(--font-size-16);
  color: var(--Default-290-Text);
  font-family: Inter;
`;
const Enable1111 = styled.div`
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
const TotalBalanceFromContainer1 = styled.div`
  align-self: stretch;
  position: relative;
  z-index: 2;
`;
const Point = styled.div`
  width: 8px;
  position: relative;
  border-radius: var(--br-10);
  background-color: var(--Active-Checked-Undertemined-310-CB-RB-V);
  height: 8px;
`;
const RadioButton = styled.div`
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
const Rbtext11 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const TotalBalanceFrom11111 = styled.b`
  flex: 1;
  position: relative;
  display: inline-block;
  min-width: 129px;
`;
const ActiveLabel1111 = styled.div`
  flex: 1;
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
`;
const PrefixSelectedDdR1 = styled.div`
  height: 40px;
  width: 140px;
  border-radius: 0px var(--br-8) var(--br-8) 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: -1px;
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  color: var(--Containers-Default-170-Placeholder-txt-Prefix-DD-default);
`;
const WhoApprovesRole1 = styled.div`
  width: 752px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  color: var(--Containers-Default-170-Selected-entered-txt-default);
  font-family: var(--Inter);
`;
const RequireAnotherApprover = styled.button`
  cursor: pointer;
  border: 1px solid var(--Toggles-Active-310-toogle-active-stroke);
  padding: var(--padding-2) var(--padding-11);
  background-color: var(--Tooltip-190-Tooltip-fill);
  height: 28px;
  border-radius: var(--br-6);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-4);
  &:hover {
    background-color: var(--color-gainsboro-100);
    border: 1px solid var(--color-gray-100);
    box-sizing: border-box;
  }
`;
const Save1111 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: var(--padding-24) 0px 0px;
  gap: 0px;
  z-index: 0;
  @media screen and (max-width: 1325px) {
    flex-wrap: wrap;
  }
`;
const Rules1 = styled.div`
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
  font-size: var(--font-size-14);
  color: var(--Default-290-Text);
  font-family: Inter;
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
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  color: var(--Toolbar-icons-T-Back-default);
  font-family: var(--Inter);
`;
const Content1111 = styled.div`
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
  font-size: var(--font-size-14);
  color: var(--Toggles-Active-310-toogle-active-text-off);
`;
const ApproveInvoiceEditAdvanc1 = styled.section`
  width: 1123px;
  border-radius: var(--br-12);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  z-index: 1;
  text-align: left;
  font-size: var(--font-size-16);
  color: var(--Default-290-Text);
  font-family: Inter;
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
  @media screen and (max-width: 1325px) {
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
  @media screen and (max-width: 900px) {
    min-width: 100%;
  }
`;
const Wrapping1 = styled.main`
  align-self: stretch;
  height: 1739px;
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
  @media screen and (max-width: 1725px) {
    height: auto;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-16);
  }
`;
const ApiConnectionSelfInvoiceRoot = styled.div`
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

const APIConnectionSelfInvoiceSettingsDefault: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHugTextContainerClick = useCallback(() => {
    navigate("/api-connection-payouts-eligibility");
  }, [navigate]);

  const onHugTextContainerClick1 = useCallback(() => {
    navigate("/api-connection-payouts-settings-default");
  }, [navigate]);

  return (
    <ApiConnectionSelfInvoiceRoot>
      <TopbarGeneral1
        topbarGeneralHeight="90px"
        integrationAPI="/integrationapi@2x.png"
        iconAddAccount="/iconadd-account.svg"
      />
      <Wrapping1>
        <SidebarWizard
          sidebarWizardAlignSelf="stretch"
          sidebarWizardHeight="unset"
          icon="/icon-3.svg"
          lineBackgroundColor="#41ba52"
          icon1="/icon-3.svg"
          recoverPasswordColor="#41ba52"
          lineBackgroundColor1="#2f2e2c"
          onHugTextContainerClick={onHugTextContainerClick}
          icon2="/icon-21.svg"
          recoverPasswordColor1="#2f2e2c"
          lineBackgroundColor2="#f1eee9"
          onHugTextContainerClick1={onHugTextContainerClick1}
          hugTextWidth="48px"
          hugTextAlignSelf="unset"
          icon3="/icon-31.svg"
          icon4="/icon-4@2x.png"
          icon5="/icon-8.svg"
          icon6="/icon-9.svg"
          icon7="/icon-10.svg"
          icon8="/icon-11.svg"
        />
        <Wrapped1>
          <Title1>
            <Title>Invoice Settings</Title>
            <TooltipBtn>
              <TextBtn28px>Restore Default</TextBtn28px>
            </TooltipBtn>
          </Title1>
          <Scroll>
            <AcceptedCurrenciesComp>
              <Title11>
                <Tooltip>
                  <Text>Accepted Currencies for Incoming Invoices</Text>
                  <Iconinfo alt="" src="/iconinfo.svg" />
                </Tooltip>
                <Enable11>
                  <Off>
                    <Subtitle>Disable</Subtitle>
                  </Off>
                  <On>
                    <Subtitle1>Enable</Subtitle1>
                  </On>
                </Enable11>
                <ButtonIcon loading="lazy" alt="" src="/button1.svg" />
              </Title11>
              <Content1>
                <Description>
                  <Title111>
                    <TotalBalanceFrom>Accepted Currencies</TotalBalanceFrom>
                    <TotalBalanceFrom1>
                      Select which currencies are accepted for receiving
                      invoices. Invoices in other currencies will not be
                      eligible for payment.
                    </TotalBalanceFrom1>
                  </Title111>
                </Description>
                <DropdownsSelectors>
                  <TextField>
                    <FieldContent placeholder="USD, EUR, ILS" type="text" />
                    <Icons>
                      <CloseIcon alt="" src="/close.svg" />
                      <IconarrowDown alt="" src="/iconarrow-down-1.svg" />
                    </Icons>
                  </TextField>
                </DropdownsSelectors>
                <List>
                  <Raw>
                    <FlagsIcon loading="lazy" alt="" src="/flags.svg" />
                    <ActiveLabel>USD - United States Dollar</ActiveLabel>
                    <StatusesComp>
                      <Title1111>Base</Title1111>
                    </StatusesComp>
                    <RemoveIcon alt="" src="/remove.svg" />
                  </Raw>
                  <Raw>
                    <FlagsIcon alt="" src="/flags.svg" />
                    <ActiveLabel1>EUR - Euro</ActiveLabel1>
                    <RemoveIcon alt="" src="/remove.svg" />
                  </Raw>
                  <Raw>
                    <FlagsIcon alt="" src="/flags.svg" />
                    <ActiveLabel11>ILS - Israeli New Shekel</ActiveLabel11>
                    <RemoveIcon alt="" src="/remove.svg" />
                  </Raw>
                </List>
                <Spread>
                  <Separator />
                </Spread>
                <NotesTypes1>
                  <IconText>
                    <Link>
                      <Disclaimer>
                        <Disclaimer>Disclaimer:</Disclaimer>
                        <Disclaimer>
                          {" "}
                          Invoices must be issued in the selected currencies to
                          be eligible for payment.
                        </Disclaimer>
                      </Disclaimer>
                    </Link>
                  </IconText>
                </NotesTypes1>
              </Content1>
            </AcceptedCurrenciesComp>
            <VatSalesTaxGstCalculat>
              <Title11>
                <Tooltip>
                  <Text>VAT / Sales Tax / GST Calculation</Text>
                  <Iconinfo1 alt="" src="/iconinfo.svg" />
                </Tooltip>
                <Enable111>
                  <Off>
                    <Subtitle11>Disable</Subtitle11>
                  </Off>
                  <On1>
                    <Subtitle11>Enable</Subtitle11>
                  </On1>
                </Enable111>
                <ButtonIcon alt="" src="/button1.svg" />
              </Title11>
              <Content11>
                <TotalBalanceFrom11>
                  Turning this on will automatically apply the appropriate tax
                  rates based on your settings. Disabling it will remove
                  VAT/Sales Tax from applicable transactions.
                </TotalBalanceFrom11>
                <NotesTypes alert1="/alert.svg" />
                <Spread1>
                  <Separator1 />
                </Spread1>
                <Rb1>
                  <TotalBalanceFrom111>
                    Choose whether to include or exclude VAT (Value Added Tax)
                    from your invoices.
                  </TotalBalanceFrom111>
                  <CbRbSelector11>
                    <Rb>
                      <Shape11 type="radio" />
                      <Title111111>
                        <Title11111>
                          Select 'VAT Inclusive' if the invoice amounts already
                          include VAT
                        </Title11111>
                      </Title111111>
                    </Rb>
                    <Btnicon11 loading="lazy" alt="" src="/btnicon.svg" />
                  </CbRbSelector11>
                  <CbRbSelector111>
                    <Rb>
                      <Shape111 type="radio" />
                      <Title111111>
                        <Title11111>
                          Select 'VAT Exclusive' if VAT should be added on top
                          of the invoice amounts
                        </Title11111>
                      </Title111111>
                    </Rb>
                    <Btnicon11 alt="" src="/btnicon.svg" />
                  </CbRbSelector111>
                </Rb1>
              </Content11>
            </VatSalesTaxGstCalculat>
            <EditInvoiceEditAdvanced>
              <Title11>
                <Tooltip1>
                  <Text>Who can Edit Invoices?</Text>
                  <Iconinfo1 alt="" src="/iconinfo.svg" />
                </Tooltip1>
                <Enable111>
                  <Off>
                    <Subtitle11>Disable</Subtitle11>
                  </Off>
                  <On1>
                    <Subtitle11>Enable</Subtitle11>
                  </On1>
                </Enable111>
                <ButtonIcon alt="" src="/button1.svg" />
              </Title11>
              <Content111>
                <TotalBalanceFromContainer>
                  <DefineWhichTeam>{`Define which team members or roles are authorized to `}</DefineWhichTeam>
                  <DefineWhichTeam>Edit Invoices</DefineWhichTeam>
                  <DefineWhichTeam>.</DefineWhichTeam>
                </TotalBalanceFromContainer>
                <EditInvoiceEditComp>
                  <Headline>
                    <Rbtext1>
                      <Rbtext type="radio" />
                      <Monthly>
                        Select authorized team members or roles to edit invoices
                        of any amount
                      </Monthly>
                    </Rbtext1>
                  </Headline>
                  <Rules>
                    <Group>
                      <From>
                        <TotalBalanceFrom1111>
                          Authorized to Edit:
                        </TotalBalanceFrom1111>
                        <WhoApprovesRole>
                          <UserRoleApproval>
                            <TextField1>
                              <FieldContent1>
                                <ActiveLabel111>System Admin</ActiveLabel111>
                              </FieldContent1>
                              <IconarrowDown1
                                alt=""
                                src="/iconarrow-down-1.svg"
                              />
                            </TextField1>
                          </UserRoleApproval>
                          <PrefixSelectedDdR>
                            <Field>
                              <FieldContent11>
                                <Tag>Role</Tag>
                              </FieldContent11>
                              <IconarrowDown
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
                    <Save111>
                      <Save11>
                        <TextBtn28px>Save</TextBtn28px>
                      </Save11>
                    </Save111>
                  </Rules>
                </EditInvoiceEditComp>
                <CreatedWorkflow title="Set advanced permissions for invoice editing" />
              </Content111>
            </EditInvoiceEditAdvanced>
            <ApproveInvoiceEditAdvanc1>
              <Title11>
                <Tooltip1>
                  <Text>Who can Approve Invoices?</Text>
                  <Iconinfo1 alt="" src="/iconinfo.svg" />
                </Tooltip1>
                <Enable1111>
                  <Off>
                    <Subtitle11>Disable</Subtitle11>
                  </Off>
                  <On1>
                    <Subtitle11>Enable</Subtitle11>
                  </On1>
                </Enable1111>
                <ButtonIcon alt="" src="/button1.svg" />
              </Title11>
              <Content1111>
                <TotalBalanceFromContainer1>
                  <Disclaimer>{`Assign team members or roles authorized to `}</Disclaimer>
                  <Disclaimer>Approve Invoices</Disclaimer>
                  <Disclaimer>.</Disclaimer>
                </TotalBalanceFromContainer1>
                <ApproveInvoiceEditComp>
                  <Headline>
                    <Rbtext1>
                      <Rbtext11>
                        <RadioButton>
                          <Point />
                        </RadioButton>
                      </Rbtext11>
                      <Title11111>
                        Select team members or roles authorized to approve
                        invoices of any amount
                      </Title11111>
                    </Rbtext1>
                  </Headline>
                  <Rules1>
                    <Group>
                      <From>
                        <TotalBalanceFrom11111>
                          Approval required from:
                        </TotalBalanceFrom11111>
                        <WhoApprovesRole1>
                          <UserRoleApproval>
                            <TextField1>
                              <FieldContent1>
                                <ActiveLabel1111>System Admin</ActiveLabel1111>
                              </FieldContent1>
                              <IconarrowDown1
                                alt=""
                                src="/iconarrow-down-1.svg"
                              />
                            </TextField1>
                          </UserRoleApproval>
                          <PrefixSelectedDdR1>
                            <Field>
                              <FieldContent11>
                                <Title11111>Role</Title11111>
                              </FieldContent11>
                              <IconarrowDown1
                                alt=""
                                src="/iconarrow-down-1.svg"
                              />
                            </Field>
                          </PrefixSelectedDdR1>
                        </WhoApprovesRole1>
                      </From>
                      <ActionBtn>
                        <TextLinkActionComp
                          state="off"
                          type="label"
                          editText="+ Add Condition"
                        />
                      </ActionBtn>
                    </Group>
                    <Save1111>
                      <RequireAnotherApprover>
                        <Iconinfo alt="" src="/iconadd-funds.svg" />
                        <TextBtn28px>Require another Approver</TextBtn28px>
                      </RequireAnotherApprover>
                      <Save11>
                        <TextBtn28px>Save</TextBtn28px>
                      </Save11>
                    </Save1111>
                  </Rules1>
                </ApproveInvoiceEditComp>
                <CreatedWorkflow
                  rBMinWidth="571px"
                  titleMinWidth="553px"
                  title="Set advanced permissions for invoice approvals"
                />
              </Content1111>
            </ApproveInvoiceEditAdvanc1>
            <Separator11 />
          </Scroll>
          <ActionBtn1>
            <LabelButton button="/button-4.svg" />
            <R>
              <Back1>
                <UploadDataSource>Back</UploadDataSource>
              </Back1>
              <Next1 onClick={onHugTextContainerClick1}>
                <UploadDataSource1>{`Save & Continue`}</UploadDataSource1>
              </Next1>
            </R>
          </ActionBtn1>
        </Wrapped1>
      </Wrapping1>
    </ApiConnectionSelfInvoiceRoot>
  );
};

export default APIConnectionSelfInvoiceSettingsDefault;
