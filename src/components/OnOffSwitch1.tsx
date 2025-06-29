import { FunctionComponent } from "react";
import styled from "styled-components";

export type OnOffSwitch1Type = {
  className?: string;

  /** Variant props */
  state?: string;
  switch1?: string;
};

const OnChild = styled.div`
  width: 12px;
  position: relative;
  border-radius: 999px;
  background-color: var(--Toggles-Active-Circule-310-toogle-circule-active-on);
  height: 12px;
`;
const Root = styled.div`
  height: 16px;
  width: 30px;
  border-radius: var(--br-100);
  background-color: var(
    --Toggles-Active-Circule-310-toogle-active-circule-on-back-switch-2
  );
  border: 1px solid
    var(--Toggles-Active-Circule-310-toogle-active-circule-stroke-on);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-2);
  &[data-state="default"][data-switch="OFF"] {
    background-color: var(
      --Toggles-Active-Circule-310-toogle-active-circule-off-back-switch-2
    );
    border: 1px solid
      var(--Toggles-Active-Circule-310-toogle-active-circule-stroke-off);
    justify-content: flex-start;
  }
  &[data-state="default"][data-switch="OFF"] .onChild {
    background-color: var(
      --Toggles-Active-Circule-310-toogle-circule-active-off
    );
  }
`;

const OnOffSwitch1: FunctionComponent<OnOffSwitch1Type> = ({
  className = "",
  state = "default",
  switch1 = "ON",
}) => {
  return (
    <Root data-state={state} data-switch={switch1} className={className}>
      <OnChild className="onChild" />
    </Root>
  );
};

export default OnOffSwitch1;
