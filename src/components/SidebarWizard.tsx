import { FunctionComponent, useCallback, type CSSProperties } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export type SidebarWizardType = {
  className?: string;
  icon?: string;
  icon1?: string;
  icon2?: string;
  icon3?: string;
  icon4?: string;
  icon5?: string;
  icon6?: string;
  icon7?: string;
  icon8?: string;

  /** Style props */
  sidebarWizardAlignSelf?: CSSProperties["alignSelf"];
  sidebarWizardHeight?: CSSProperties["height"];
  lineBackgroundColor?: CSSProperties["backgroundColor"];
  recoverPasswordColor?: CSSProperties["color"];
  lineBackgroundColor1?: CSSProperties["backgroundColor"];
  recoverPasswordColor1?: CSSProperties["color"];
  lineBackgroundColor2?: CSSProperties["backgroundColor"];
  hugTextWidth?: CSSProperties["width"];
  hugTextAlignSelf?: CSSProperties["alignSelf"];

  /** Action props */
  onHugTextContainerClick?: () => void;
  onHugTextContainerClick1?: () => void;
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
  color: var(--Success-390-Text);
  font-family: var(--Fonts-General-Font-family-font-family1);
`;
const Line1 = styled.div<{
  lineBackgroundColor?: CSSProperties["backgroundColor"];
}>`
  width: var(--380-Line-Width);
  flex: 1;
  background-color: var(--Success-390-Line);
  transform: rotate(180deg);
  background-color: ${(p) => p.lineBackgroundColor};
`;
const RecoverPassword1 = styled.b<{
  recoverPasswordColor?: CSSProperties["color"];
}>`
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
  white-space: nowrap;
  color: ${(p) => p.recoverPasswordColor};
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
  color: var(--Success-390-Text);
`;
const Line11 = styled.div<{
  lineBackgroundColor1?: CSSProperties["backgroundColor"];
}>`
  width: var(--380-Line-Width);
  flex: 1;
  background-color: var(--Current-390-Line);
  transform: rotate(180deg);
  background-color: ${(p) => p.lineBackgroundColor1};
`;
const RecoverPassword11 = styled.b<{
  recoverPasswordColor1?: CSSProperties["color"];
}>`
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
  white-space: nowrap;
  color: ${(p) => p.recoverPasswordColor1};
`;
const InvoiceSettings = styled.div`
  width: 48px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: var(--Current-390-Text);
`;
const Line111 = styled.div<{
  lineBackgroundColor2?: CSSProperties["backgroundColor"];
}>`
  width: var(--380-Line-Width);
  flex: 1;
  background-color: var(--Inactive-390-Line);
  transform: rotate(180deg);
  background-color: ${(p) => p.lineBackgroundColor2};
`;
const RecoverPassword111 = styled.b`
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
  white-space: nowrap;
`;
const HugText1 = styled.div<{
  hugTextWidth?: CSSProperties["width"];
  hugTextAlignSelf?: CSSProperties["alignSelf"];
}>`
  width: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
  cursor: pointer;
  width: ${(p) => p.hugTextWidth};
  align-self: ${(p) => p.hugTextAlignSelf};
`;
const PayoutsSettings = styled.div`
  width: 48px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
const Line1111 = styled.div`
  width: var(--380-Line-Width);
  flex: 1;
  background-color: var(--Inactive-390-Line);
  transform: rotate(180deg);
`;
const Icon111 = styled.img`
  height: var(--380-Height);
  width: var(--380-Width);
  border-radius: 99px;
  object-fit: cover;
`;
const HugText11 = styled.div`
  width: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
`;
const Wizard1 = styled.div`
  align-self: stretch;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 42px 0px 0px 50px;
  box-sizing: border-box;
  z-index: 0;
  @media screen and (max-width: 450px) {
    padding-top: 27px;
    box-sizing: border-box;
  }
`;
const SidebarWizardRoot = styled.div<{
  sidebarWizardAlignSelf?: CSSProperties["alignSelf"];
  sidebarWizardHeight?: CSSProperties["height"];
}>`
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: var(--br-12);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  text-align: left;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  color: var(--Inactive-390-Text);
  font-family: var(--Inter);
  align-self: ${(p) => p.sidebarWizardAlignSelf};
  height: ${(p) => p.sidebarWizardHeight};
`;

const SidebarWizard: FunctionComponent<SidebarWizardType> = ({
  className = "",
  sidebarWizardAlignSelf,
  sidebarWizardHeight,
  icon,
  lineBackgroundColor,
  icon1,
  recoverPasswordColor,
  lineBackgroundColor1,
  onHugTextContainerClick,
  icon2,
  recoverPasswordColor1,
  lineBackgroundColor2,
  onHugTextContainerClick1,
  hugTextWidth,
  hugTextAlignSelf,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
}) => {
  const navigate = useNavigate();

  const onHugTextContainerClick2 = useCallback(() => {
    navigate("/api-connection-payouts-eligibility");
  }, [navigate]);

  const onHugTextContainerClick3 = useCallback(() => {
    navigate("/api-connection-payouts-settings-default");
  }, [navigate]);

  return (
    <SidebarWizardRoot
      sidebarWizardAlignSelf={sidebarWizardAlignSelf}
      sidebarWizardHeight={sidebarWizardHeight}
      className={className}
    >
      <Wizard1>
        <ApiConfiguration>
          <Icon11 loading="lazy" alt="" src={icon} />
          <RecoverPassword>API Configuration</RecoverPassword>
        </ApiConfiguration>
        <PayoutsEligibility>
          <Line1 lineBackgroundColor={lineBackgroundColor} />
          <HugText onClick={onHugTextContainerClick2}>
            <Icon11 alt="" src={icon1} />
            <RecoverPassword1 recoverPasswordColor={recoverPasswordColor}>
              Payouts Eligibility
            </RecoverPassword1>
          </HugText>
        </PayoutsEligibility>
        <InvoiceSettings>
          <Line11 lineBackgroundColor1={lineBackgroundColor1} />
          <HugText onClick={onHugTextContainerClick}>
            <Icon11 alt="" src={icon2} />
            <RecoverPassword11 recoverPasswordColor1={recoverPasswordColor1}>
              Invoice Settings
            </RecoverPassword11>
          </HugText>
        </InvoiceSettings>
        <PayoutsSettings>
          <Line111 lineBackgroundColor2={lineBackgroundColor2} />
          <HugText1
            onClick={onHugTextContainerClick1}
            hugTextWidth={hugTextWidth}
            hugTextAlignSelf={hugTextAlignSelf}
          >
            <Icon11 alt="" src={icon3} />
            <RecoverPassword111>Payouts Settings</RecoverPassword111>
          </HugText1>
        </PayoutsSettings>
        <PayoutsSettings>
          <Line1111 />
          <HugText11>
            <Icon111 alt="" src={icon4} />
            <RecoverPassword111>Payment Types</RecoverPassword111>
          </HugText11>
        </PayoutsSettings>
        <PayoutsSettings>
          <Line1111 />
          <HugText11>
            <Icon11 alt="" src={icon5} />
            <RecoverPassword111>Payout Preferences</RecoverPassword111>
          </HugText11>
        </PayoutsSettings>
        <PayoutsSettings>
          <Line1111 />
          <HugText11>
            <Icon11 alt="" src={icon6} />
            <RecoverPassword111>TAX Settings</RecoverPassword111>
          </HugText11>
        </PayoutsSettings>
        <PayoutsSettings>
          <Line1111 />
          <HugText11>
            <Icon11 alt="" src={icon7} />
            <RecoverPassword111>Triggers Settings</RecoverPassword111>
          </HugText11>
        </PayoutsSettings>
        <PayoutsSettings>
          <Line1111 />
          <HugText11>
            <Icon11 alt="" src={icon8} />
            <RecoverPassword111>Connector Summary</RecoverPassword111>
          </HugText11>
        </PayoutsSettings>
      </Wizard1>
    </SidebarWizardRoot>
  );
};

export default SidebarWizard;
