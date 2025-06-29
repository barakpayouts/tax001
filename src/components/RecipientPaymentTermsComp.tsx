import { FunctionComponent } from "react";
import styled from "styled-components";
import OnOffSwitch from "./OnOffSwitch";
import LabelButton from "./LabelButton";

export type RecipientPaymentTermsCompType = {
  className?: string;
  disableTooltip?: string;
  title?: string;
  state1?: string;
  switch1?: string;
  type?: string;
  editOffText?: string;
  editONText?: string;
  align?: "none ⛔" | "center";
  iconWithLabel?: string;
  orientation?: "none ⛔" | "label ⬆️";
  size?: "28px" | "40px";
  type1?: "disable no border" | "disable" | "sub action";
  disableHeight?: string;
  disableWidth?: string;

  /** Variant props */
  state?: string;
};

const Text = styled.b`
  position: relative;
`;
const TotalBalanceFromContainer = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
  font-family: var(--Inter);
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
const RecipientPaymentTermsCompRoot = styled.div`
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

const RecipientPaymentTermsComp: FunctionComponent<
  RecipientPaymentTermsCompType
> = ({
  className = "",
  state = "NET",
  disableTooltip = "If disabled, recipient payment terms will not apply - payout or invoice due dates will default to the issue date.\nPayouts will be executed on the due date once approved, based on your payout cycle settings.",
  title = "Recipient Payment Terms",
  state1,
  switch1,
  type,
  editOffText,
  editONText,
  align,
  iconWithLabel,
  orientation,
  size,
  type1,
  disableHeight,
  disableWidth,
}) => {
  return (
    <RecipientPaymentTermsCompRoot data-state={state} className={className}>
      <Title>
        <Tooltip>
          <Text>{title}</Text>
          <TotalBalanceFromContainer>
            {disableTooltip}
          </TotalBalanceFromContainer>
        </Tooltip>
        <OnOffSwitch
          state={state1}
          switch1={switch1}
          type={type}
          editOffText={editOffText}
          editONText={editONText}
        />
        <LabelButton button="/button.svg" />
      </Title>
    </RecipientPaymentTermsCompRoot>
  );
};

export default RecipientPaymentTermsComp;
