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

const TaxFormCollectionRule: FunctionComponent = () => {
  return (
    <Section>
      <Header>
        <Title>Tax Form Collection Rules</Title>
      </Header>
      <Content>
        <CBRBSelector1
          title="Always collect"
          title1="Require from all vendors upon onboarding."
        />
        <CBRBSelector
          title="Trigger after $600"
          title1="Require once total payments to a vendor ≥ $600."
        />
        <CBRBSelector
          title="Include one-time payments over $600"
        />
        <CBRBSelector title="Block payouts until form is completed" />
        <CBRBSelector title="Auto-email notification to vendor" />
        <CBRBSelector title="Vendor portal warning/banner" />
        <CBRBSelector title="Audit log per vendor" />
      </Content>
    </Section>
  );
};

export default TaxFormCollectionRule;
