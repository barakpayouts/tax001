import { FunctionComponent, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export type WizardType = {
  className?: string;
};

const Icon11 = styled.img`
  height: var(--380-Height);
  width: var(--380-Width);
  border-radius: 99px;
`;
const RecoverPassword = styled.b`
  position: relative;
  line-height: 20px;
  white-space: nowrap;
`;
const ApiConfiguration = styled.div`
  width: var(--380-Width);
  height: var(--380-Height);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
  font-size: var(--font-size-14);
  font-family: var(--Fonts-General-Font-family-font-family1);
`;
const Line = styled.div`
  width: var(--380-Line-Width);
  flex: 1;
  background-color: var(--Success-390-Line);
  transform: rotate(180deg);
`;
const RecoverPassword1 = styled.b`
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
  white-space: nowrap;
`;
const HugText = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
  cursor: pointer;
`;
const PayoutsEligibility = styled.div`
  width: 48px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
const Line1 = styled.div`
  width: var(--380-Line-Width);
  flex: 1;
  background-color: var(--Current-390-Line);
  transform: rotate(180deg);
`;
const PayoutsSettings = styled.div`
  width: 48px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: var(--Current-390-Text);
`;
const Line11 = styled.div`
  width: var(--380-Line-Width);
  flex: 1;
  background-color: var(--Inactive-390-Line);
  transform: rotate(180deg);
`;
const HugText1 = styled.div`
  width: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
`;
const TriggersSettings = styled.div`
  width: 48px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: var(--Inactive-390-Text);
`;
const WizardRoot = styled.div`
  align-self: stretch;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 42px 0px 0px 50px;
  box-sizing: border-box;
  z-index: 0;
  text-align: left;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  color: var(--Success-390-Text);
  font-family: var(--Inter);
  @media screen and (max-width: 450px) {
    padding-top: 27px;
    box-sizing: border-box;
  }
`;

const Wizard: FunctionComponent<WizardType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHugTextContainerClick = useCallback(() => {
    navigate("/api-connection-payouts-eligibility");
  }, [navigate]);

  return (
    <WizardRoot className={className}>
      <ApiConfiguration>
        <Icon11 loading="lazy" alt="" src="/icon-3.svg" />
        <RecoverPassword>API Configuration</RecoverPassword>
      </ApiConfiguration>
      <PayoutsEligibility>
        <Line />
        <HugText onClick={onHugTextContainerClick}>
          <Icon11 loading="lazy" alt="" src="/icon-3.svg" />
          <RecoverPassword1>Payouts Eligibility</RecoverPassword1>
        </HugText>
      </PayoutsEligibility>
      <PayoutsEligibility>
        <Line />
        <HugText onClick={onHugTextContainerClick}>
          <Icon11 loading="lazy" alt="" src="/icon-3.svg" />
          <RecoverPassword1>Invoice Settings</RecoverPassword1>
        </HugText>
      </PayoutsEligibility>
      <PayoutsEligibility>
        <Line />
        <HugText onClick={onHugTextContainerClick}>
          <Icon11 loading="lazy" alt="" src="/icon-3.svg" />
          <RecoverPassword1>Payouts Settings</RecoverPassword1>
        </HugText>
      </PayoutsEligibility>
      <PayoutsEligibility>
        <Line />
        <HugText onClick={onHugTextContainerClick}>
          <Icon11 loading="lazy" alt="" src="/icon-3.svg" />
          <RecoverPassword1>Payment Types</RecoverPassword1>
        </HugText>
      </PayoutsEligibility>
      <PayoutsEligibility>
        <Line />
        <HugText onClick={onHugTextContainerClick}>
          <Icon11 loading="lazy" alt="" src="/icon-3.svg" />
          <RecoverPassword1>Payout Preferences</RecoverPassword1>
        </HugText>
      </PayoutsEligibility>
      <PayoutsSettings>
        <Line1 />
        <HugText onClick={onHugTextContainerClick}>
          <Icon11 loading="lazy" alt="" src="/icon-61.svg" />
          <RecoverPassword1>TAX Settings</RecoverPassword1>
        </HugText>
      </PayoutsSettings>
      <TriggersSettings>
        <Line11 />
        <HugText1>
          <Icon11 loading="lazy" alt="" src="/icon-10.svg" />
          <RecoverPassword1>Triggers Settings</RecoverPassword1>
        </HugText1>
      </TriggersSettings>
      <TriggersSettings>
        <Line11 />
        <HugText1>
          <Icon11 loading="lazy" alt="" src="/icon-11.svg" />
          <RecoverPassword1>Connector Summary</RecoverPassword1>
        </HugText1>
      </TriggersSettings>
    </WizardRoot>
  );
};

export default Wizard;
