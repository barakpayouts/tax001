import { FunctionComponent } from "react";
import styled from "styled-components";
import OnOffSwitch from "./OnOffSwitch";
import LabelButton from "./LabelButton";

export type PayoutCycleConfigurationComType = {
  className?: string;
  disableTooltip?: string;
  title?: string;
  state?: string;
  switch1?: string;
  type1?: string;
  editOffText?: string;
  editONText?: string;
  align?: "none ⛔" | "center";
  iconWithLabel?: string;
  orientation?: "none ⛔" | "label ⬆️";
  size?: "28px" | "40px";
  type2?: "disable no border" | "disable" | "sub action";
  disableHeight?: string;
  disableWidth?: string;

  /** Variant props */
  type?: string;
};

const Text = styled.b`
  position: relative;
`;
const TotalBalanceFrom = styled.div`
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
  z-index: 0;
`;
const PayoutCycleConfigurationComRoot = styled.div`
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
  color: var(--Toggles-Active-310-toogle-active-stroke);
  font-family: Inter;
`;

const PayoutCycleConfigurationCom: FunctionComponent<
  PayoutCycleConfigurationComType
> = ({
  className = "",
  type = "daily",
  disableTooltip = "If disabled, payment cycle settings will not apply payouts or invoices will default to their due dates. Payouts will be executed once approved.",
  title = "Payout Cycle Configuration",
  state,
  switch1,
  type1,
  editOffText,
  editONText,
  align,
  iconWithLabel,
  orientation,
  size,
  type2,
  disableHeight,
  disableWidth,
}) => {
  return (
    <PayoutCycleConfigurationComRoot data-type={type} className={className}>
      <Title>
        <Tooltip>
          <Text>{title}</Text>
          <TotalBalanceFrom>{disableTooltip}</TotalBalanceFrom>
        </Tooltip>
        <OnOffSwitch
          state={state}
          switch1={switch1}
          type={type1}
          editOffText={editOffText}
          editONText={editONText}
        />
        <LabelButton button="/button.svg" />
      </Title>
    </PayoutCycleConfigurationComRoot>
  );
};

export default PayoutCycleConfigurationCom;
