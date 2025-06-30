import { FunctionComponent, useState } from "react";
import styled from "styled-components";

export type ReportingPreferenceOption = "auto" | "manual" | "none";

export interface ReportingPreferenceState {
  preference: ReportingPreferenceOption;
}

export interface ReportingPreferencesProps {
  onChange?: (state: ReportingPreferenceState) => void;
}

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

const Row = styled.label`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
`;

const ReportingPreferences: FunctionComponent<ReportingPreferencesProps> = ({
  onChange,
}) => {
  const [state, setState] = useState<ReportingPreferenceState>({
    preference: "auto",
  });

  const change = (value: ReportingPreferenceOption) => {
    const newState = { preference: value };
    setState(newState);
    onChange?.(newState);
  };

  return (
    <Section data-testid="reporting-preferences">
      <Header>
        <Title>1099 Reporting Preferences</Title>
      </Header>
      <Content>
        <Row>
          <input
            type="radio"
            name="reporting"
            value="auto"
            checked={state.preference === "auto"}
            onChange={() => change("auto")}
            data-testid="reporting-auto"
          />
          <span>
            Auto-file 1099s for all eligible vendors – fully automated tracking,
            filing and delivery.
          </span>
        </Row>
        <Row>
          <input
            type="radio"
            name="reporting"
            value="manual"
            checked={state.preference === "manual"}
            onChange={() => change("manual")}
            data-testid="reporting-manual"
          />
          <span>
            Manual selection – review and choose vendors to include at year-end
          </span>
        </Row>
        <Row>
          <input
            type="radio"
            name="reporting"
            value="none"
            checked={state.preference === "none"}
            onChange={() => change("none")}
            data-testid="reporting-none"
          />
          <span>
            No filing – you handle 1099s externally; payout summaries only
          </span>
        </Row>
      </Content>
    </Section>
  );
};

export default ReportingPreferences;
