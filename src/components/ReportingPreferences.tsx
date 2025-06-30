import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import CBRBSelector from "./CBRBSelector";
import CBRBSelector1 from "./CBRBSelector1";

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

  const renderOption = (
    value: ReportingPreferenceOption,
    title: string,
    subtitle: string,
    testId: string,
  ) => {
    const Selected = state.preference === value ? CBRBSelector1 : CBRBSelector;
    return (
      <Selected
        title={title}
        title1={subtitle}
        inputProps={{
          name: "reporting",
          value,
          checked: state.preference === value,
          onChange: () => change(value),
          "data-testid": testId,
        }}
      />
    );
  };

  return (
    <Section data-testid="reporting-preferences">
      <Header>
        <Title>1099 Reporting Preferences</Title>
      </Header>
      <Content>
        {renderOption(
          "auto",
          "Auto-file 1099s for all eligible vendors",
          "Fully automated: system tracks, generates, files, and delivers",
          "reporting-auto",
        )}
        {renderOption(
          "manual",
          "Manual selection",
          "Client reviews & selects which vendors to include at year-end",
          "reporting-manual",
        )}
        {renderOption(
          "none",
          "No filing (client handles it externally)",
          "System provides payout summaries but does not file",
          "reporting-none",
        )}
      </Content>
    </Section>
  );
};

export default ReportingPreferences;
