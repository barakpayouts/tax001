import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type LockerTooltipType = {
  className?: string;
  editText?: string;
  prop?: string;

  /** Variant props */
  state?: string;

  /** Style props */
  lockerTooltipTop?: CSSProperties["top"];
  lockerTooltipRight?: CSSProperties["right"];
  lockerTooltipLeft?: CSSProperties["left"];
};

const Monthly = styled.div`
  position: relative;
  line-height: 140%;
  font-weight: 500;
`;
const Tooltip = styled.div`
  box-shadow: var(--General-shadow);
  border-radius: var(--br-8);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Tooltip-190-Tooltip-stroke);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-8) var(--padding-12);
  opacity: 0;
`;
const Icon1 = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 500px;
  margin-top: -8px;
  position: relative;
`;
const LockerTooltipRoot = styled.div<{
  lockerTooltipTop?: CSSProperties["top"];
  lockerTooltipRight?: CSSProperties["right"];
  lockerTooltipLeft?: CSSProperties["left"];
}>`
  width: 20px;
  height: 20px;
  margin: 0 !important;
  position: absolute;
  top: 242px;
  right: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 9;
  text-align: left;
  font-size: var(--font-size-12);
  color: var(--Default-290-Text);
  font-family: Inter;
  top: ${(p) => p.lockerTooltipTop};
  right: ${(p) => p.lockerTooltipRight};
  left: ${(p) => p.lockerTooltipLeft};
`;

const LockerTooltip: FunctionComponent<LockerTooltipType> = ({
  className = "",
  state = "off",
  editText = "The connection is still in progress,\npermission is required.",
  lockerTooltipTop,
  lockerTooltipRight,
  lockerTooltipLeft,
  prop,
}) => {
  return (
    <LockerTooltipRoot
      data-state={state}
      lockerTooltipTop={lockerTooltipTop}
      lockerTooltipRight={lockerTooltipRight}
      lockerTooltipLeft={lockerTooltipLeft}
      className={className}
    >
      <Tooltip>
        <Monthly>{editText}</Monthly>
      </Tooltip>
      <Icon1 loading="lazy" alt="" src={prop} />
    </LockerTooltipRoot>
  );
};

export default LockerTooltip;
