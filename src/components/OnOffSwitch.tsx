import { FunctionComponent } from "react";
import styled from "styled-components";

export type OnOffSwitchType = {
  className?: string;
  editOffText?: string;
  editONText?: string;

  /** Variant props */
  state?: string;
  switch1?: string;
  type?: string;

  /** Action props */
  onOnContainerClick?: () => void;
};

const Subtitle = styled.div`
  position: relative;
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
`;
const Off = styled.div`
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
const On = styled.div`
  align-self: stretch;
  border-radius: var(--Radius-inner-toggle);
  background-color: var(--Toggles-Active-310-toogle-active-off);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--V-padding-inner-toggle) var(--H-padding-inner-toggle);
  color: var(--Toggles-Active-310-toogle-active-text-off);
`;
const DisableSwitchRoot = styled.div`
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
  color: var(--Toggles-Active-310-toogle-active-text-on);
  font-family: var(--Inter);
`;

const OnOffSwitch: FunctionComponent<OnOffSwitchType> = ({
  className = "",
  state = "default",
  switch1 = "on",
  type = "active type",
  editOffText = "Disable",
  editONText = "Enable",
  onOnContainerClick,
}) => {
  return (
    <DisableSwitchRoot
      data-state={state}
      data-switch={switch1}
      data-type={type}
      className={className}
    >
      <Off>
        <Subtitle>{editOffText}</Subtitle>
      </Off>
      <On onClick={onOnContainerClick}>
        <Subtitle>{editONText}</Subtitle>
      </On>
    </DisableSwitchRoot>
  );
};

export default OnOffSwitch;
