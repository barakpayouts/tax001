import { FunctionComponent } from "react";
import styled from "styled-components";
import CBRBSelector from "./CBRBSelector";
import CBRBSelector1 from "./CBRBSelector1";

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

const ReportingPreferences: FunctionComponent = () => {
  return (
    <Section>
      <Header>
        <Title>1099 Reporting Preferences</Title>
      </Header>
      <Content>
        <CBRBSelector1
          title="Auto-file 1099s for all eligible vendors"
          title1="Fully automated: system tracks, generates, files, and delivers"
        />
        <CBRBSelector
          title="Manual selection"
          title1="Client reviews & selects which vendors to include at year-end"
        />
        <CBRBSelector
          title="No filing (client handles it externally)"
          title1="System provides payout summaries but does not file"
        />
      </Content>
    </Section>
  );
};

export default ReportingPreferences;
