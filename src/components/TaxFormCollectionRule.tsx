import { FunctionComponent, useState, ChangeEvent } from "react";
import styled from "styled-components";
import CBRBSelector from "./CBRBSelector";
import CBRBSelector1 from "./CBRBSelector1";

/* ——— Types ——— */
export type RuleOption = "always" | "threshold";

export interface TaxFormCollectionRuleState {
  rule: RuleOption;
  includeOneTime: boolean;
  blockPayouts: boolean;
  autoEmail: boolean;
  portalBanner: boolean;
  auditLog: boolean;
}

export interface TaxFormCollectionRuleProps {
  onChange?: (state: TaxFormCollectionRuleState) => void;
}

/* ——— Styled components ——— */
const Section = styled.section`
  align-self: stretch;
  border-radius: var(--br-12);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--Headline-16-Headline-bold-Font-Size);
  color: var(--Default-290-Text);
  font-family: var(--Inter);
`;

const Header = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-12) var(--padding-24) var(--padding-10);
  gap: var(--gap-8);
`;

const Title = styled.b`
  flex: 1;
  position: relative;
  line-height: var(--Headline-16-Headline-bold-Font-Line-Height);
`;

const Content = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-24);
  gap: var(--gap-8);
`;

const SubOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-8);
  margin-left: 24px;
`;

/* ——— Component ——— */
const TaxFormCollectionRule: FunctionComponent<TaxFormCollectionRuleProps> = ({
  onChange,
}) => {
  const [state, setState] = useState<TaxFormCollectionRuleState>({
    rule: "always",
    includeOneTime: true,
    blockPayouts: true,
    autoEmail: true,
    portalBanner: true,
    auditLog: true,
  });

  const update = (newState: TaxFormCollectionRuleState) => {
    setState(newState);
    onChange?.(newState);
  };

  const handleRuleChange = (value: RuleOption) => {
    update({ ...state, rule: value });
  };

  const handleBooleanChange =
    (key: keyof Omit<TaxFormCollectionRuleState, "rule">) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      update({ ...state, [key]: e.target.checked });
    };

  const renderRadioOption = (
    value: RuleOption,
    label: string,
    testId: string,
  ) => {
    const Selected = state.rule === value ? CBRBSelector1 : CBRBSelector;
    return (
      <Selected
        title={label}
        inputProps={{
          name: "tax-rule",
          value,
          checked: state.rule === value,
          onChange: () => handleRuleChange(value),
          "data-testid": testId,
        }}
      />
    );
  };

  return (
    <Section data-testid="tax-form-rule">
      <Header>
        <Title>Tax Form Collection Rules</Title>
      </Header>
      <Content>
        {renderRadioOption(
          "always",
          "Always collect – Require from all vendors upon onboarding.",
          "rule-always",
        )}
        {renderRadioOption(
          "threshold",
          "Trigger after $600 – Require once total payments to a vendor ≥ $600.",
          "rule-threshold",
        )}

        {state.rule === "threshold" && (
          <SubOptions>
            <label>
              <input
                type="checkbox"
                checked={state.includeOneTime}
                onChange={handleBooleanChange("includeOneTime")}
                data-testid="rule-include-one-time"
              />
              Include one-time payments over $600
            </label>
            <label>
              <input
                type="checkbox"
                checked={state.blockPayouts}
                onChange={handleBooleanChange("blockPayouts")}
                data-testid="rule-block-payouts"
              />
              Block payouts until form is completed
            </label>
            <label>
              <input
                type="checkbox"
                checked={state.autoEmail}
                onChange={handleBooleanChange("autoEmail")}
                data-testid="rule-auto-email"
              />
              Auto-email notification to vendor
            </label>
            <label>
              <input
                type="checkbox"
                checked={state.portalBanner}
                onChange={handleBooleanChange("portalBanner")}
                data-testid="rule-portal-banner"
              />
              Vendor portal warning/banner
            </label>
            <label>
              <input
                type="checkbox"
                checked={state.auditLog}
                onChange={handleBooleanChange("auditLog")}
                data-testid="rule-audit-log"
              />
              Audit log per vendor
            </label>
          </SubOptions>
        )}
      </Content>
    </Section>
  );
};

export default TaxFormCollectionRule;
