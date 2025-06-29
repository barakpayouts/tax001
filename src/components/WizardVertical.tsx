import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type WizardVerticalType = {
  className?: string;
  showText?: boolean;
  stepNumber?: string;
  showLine?: boolean;
  icon?: string;

  /** Variant props */
  state?: "Success" | "Inactive";

  /** Style props */
  aPIConfigurationHeight?: CSSProperties["height"];
  aPIConfigurationFlex?: CSSProperties["flex"];

  /** Action props */
  onHugTextContainerClick?: () => void;
};

const Line = styled.div`
  width: var(--380-Line-Width);
  flex: 1;
  background-color: var(--Success-390-Line);
  transform: rotate(180deg);
`;
const Icon1 = styled.img`
  height: var(--380-Height);
  width: var(--380-Width);
  border-radius: 99px;
`;
const RecoverPassword = styled.b`
  position: relative;
  line-height: 20px;
`;
const HugText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
`;
const Icontext = styled.div`
  align-self: stretch;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3) 0px;
  box-sizing: border-box;
  margin-top: -1px;
  position: relative;
`;
const Wrap = styled.div`
  width: var(--380-Width);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Root = styled.div<{
  aPIConfigurationHeight?: CSSProperties["height"];
  aPIConfigurationFlex?: CSSProperties["flex"];
}>`
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 8;
  text-align: left;
  font-size: var(--font-size-14);
  color: var(--Success-390-Text);
  font-family: var(--Fonts-General-Font-family-font-family1);
  &[data-state="Inactive"] {
    z-index: 4;
  }
  &[data-state="Inactive"] .line {
    background-color: var(--Inactive-390-Line);
  }
  &[data-state="Inactive"] .icon {
    object-fit: cover;
  }
  &[data-state="Inactive"] .recoverPassword {
    color: var(--Inactive-390-Text);
  }
  &[data-state="Default"]:active {
    z-index: 5;
  }
  &[data-state="Default"]:active .line {
    background-color: var(--Current-390-Line);
  }
  &[data-state="Default"]:active .recoverPassword {
    color: var(--Current-390-Text);
  }
  height: ${(p) => p.aPIConfigurationHeight};
  flex: ${(p) => p.aPIConfigurationFlex};
`;

const WizardVertical: FunctionComponent<WizardVerticalType> = ({
  className = "",
  state = "Default",
  showText = true,
  stepNumber = "API Configuration",
  showLine = true,
  aPIConfigurationHeight,
  aPIConfigurationFlex,
  onHugTextContainerClick,
  icon,
}) => {
  return (
    <Root
      data-state={state}
      aPIConfigurationHeight={aPIConfigurationHeight}
      aPIConfigurationFlex={aPIConfigurationFlex}
      className={className}
    >
      <Wrap>
        {!!showLine && <Line className="line" />}
        <Icontext>
          <HugText onClick={onHugTextContainerClick}>
            <Icon1 className="icon" loading="lazy" alt="" src={icon} />
            {!!showText && (
              <RecoverPassword className="recoverPassword">
                {stepNumber}
              </RecoverPassword>
            )}
          </HugText>
        </Icontext>
      </Wrap>
    </Root>
  );
};

export default WizardVertical;
