import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidetool from "../components/Sidetool";
import SidebarNavComponent from "../components/SidebarNavComponent";
import styled from "styled-components";
import IntegrationAPI from "../components/IntegrationAPI";
import TooltipButton from "../components/TooltipButton";
import WizardVertical from "../components/WizardVertical";
import Wrapped from "../components/Wrapped";

const ClientMainMenu = styled.section`
  height: 1067px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: calc(100% - 1554px);
  z-index: 2;
  @media screen and (max-width: 1725px) {
    max-width: 100%;
  }
  @media screen and (max-width: 1325px) {
    display: none;
  }
`;
const TotalBalanceFrom = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: var(--Headline-34-Headline-bold-Font-Line-Height);
  font-weight: var(--Headline-34-Headline-bold-Font-Weight);
  font-family: inherit;
`;
const Nickname = styled.div`
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
  color: var(--Toggles-Active-310-toogle-active-text-off);
`;
const CompanyName = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const ConnectorLogo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
`;
const TopbarGeneral11 = styled.header`
  align-self: stretch;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
  z-index: 2;
  text-align: left;
  font-size: var(--Headline-28-Headline-bold-Font-Size);
  color: var(--Current-390-Line);
  font-family: var(--Inter);
`;
const SidebarWizard1 = styled.section`
  align-self: stretch;
  width: 334px;
  border-radius: var(--br-12);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px 0px 148px 50px;
  max-width: 100%;
  @media screen and (max-width: 900px) {
    padding-top: 26px;
    padding-bottom: 96px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-20);
    padding-bottom: 62px;
    box-sizing: border-box;
  }
`;
const Wrapping1 = styled.section`
  align-self: stretch;
  flex: 1;
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
  z-index: 1;
  @media screen and (max-width: 900px) {
    gap: var(--gap-16);
  }
`;
const TopbarGeneralParent = styled.main`
  height: 975px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: calc(100% - 381px);
  @media screen and (max-width: 1725px) {
    display: none;
  }
  @media screen and (max-width: 1325px) {
    max-width: 100%;
  }
`;
const ApiConnectionPayoutsSettiRoot = styled.div`
  width: 100%;
  height: 1000px;
  position: relative;
  background-color: var(--Tooltip-190-Tooltip-fill);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-18) 25px 0px;
  box-sizing: border-box;
  gap: 33px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 1725px) {
    padding-left: var(--padding-20);
    padding-right: var(--padding-20);
    box-sizing: border-box;
  }
  @media screen and (max-width: 1325px) {
    height: auto;
  }
  @media screen and (max-width: 900px) {
    gap: var(--gap-16);
  }
`;

const APIConnectionPayoutsSettingsEditDisabled: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHugTextContainerClick = useCallback(() => {
    navigate("/api-connection-payouts-eligibility");
  }, [navigate]);

  const onHugTextContainerClick1 = useCallback(() => {
    navigate("/api-connection-self-invoice-settings-default");
  }, [navigate]);

  return (
    <ApiConnectionPayoutsSettiRoot>
      <ClientMainMenu>
        <Sidetool />
        <SidebarNavComponent />
      </ClientMainMenu>
      <TopbarGeneralParent>
        <TopbarGeneral11>
          <ConnectorLogo>
            <IntegrationAPI />
            <CompanyName>
              <TotalBalanceFrom>API Connector</TotalBalanceFrom>
              <Nickname>Barak</Nickname>
            </CompanyName>
          </ConnectorLogo>
          <TooltipButton
            size="40px"
            state="default"
            type="sub action"
            showBtnText
            editBadgeText="28"
            editTooltipText="Would you like to invite a colleague who is authorized to fill out this form?"
            showRIcon={false}
            showLIcon
            editBtnText={`Invite & Manage`}
            showBadge={false}
          />
        </TopbarGeneral11>
        <Wrapping1>
          <SidebarWizard1>
            <WizardVertical
              state="Success"
              showText
              stepNumber="API Configuration"
              showLine
              icon="/icon-3.svg"
            />
            <WizardVertical
              state="Success"
              showText
              stepNumber="Payouts Eligibility"
              showLine
              aPIConfigurationHeight="unset"
              aPIConfigurationFlex="1"
              onHugTextContainerClick={onHugTextContainerClick}
              icon="/icon-3.svg"
            />
            <WizardVertical
              state="Success"
              showText
              stepNumber="Invoice Settings"
              showLine
              aPIConfigurationHeight="unset"
              aPIConfigurationFlex="1"
              onHugTextContainerClick={onHugTextContainerClick1}
              icon="/icon-3.svg"
            />
            <WizardVertical
              state="Default"
              showText
              stepNumber="Payouts Settings"
              showLine
              aPIConfigurationHeight="unset"
              aPIConfigurationFlex="1"
              icon="/icon-6.svg"
            />
            <WizardVertical
              state="Inactive"
              showText
              stepNumber="Payment Types"
              showLine
              aPIConfigurationHeight="unset"
              aPIConfigurationFlex="1"
              icon="/icon-7@2x.png"
            />
            <WizardVertical
              state="Inactive"
              showText
              stepNumber="Payout Preferences"
              showLine
              aPIConfigurationHeight="unset"
              aPIConfigurationFlex="1"
              icon="/icon-8.svg"
            />
            <WizardVertical
              state="Inactive"
              showText
              stepNumber="TAX Settings"
              showLine
              aPIConfigurationHeight="unset"
              aPIConfigurationFlex="1"
              icon="/icon-9.svg"
            />
            <WizardVertical
              state="Inactive"
              showText
              stepNumber="Triggers Settings"
              showLine
              aPIConfigurationHeight="unset"
              aPIConfigurationFlex="1"
              icon="/icon-10.svg"
            />
            <WizardVertical
              state="Inactive"
              showText
              stepNumber="Connector Summary"
              showLine
              aPIConfigurationHeight="unset"
              aPIConfigurationFlex="1"
              icon="/icon-11.svg"
            />
          </SidebarWizard1>
          <Wrapped />
        </Wrapping1>
      </TopbarGeneralParent>
    </ApiConnectionPayoutsSettiRoot>
  );
};

export default APIConnectionPayoutsSettingsEditDisabled;
