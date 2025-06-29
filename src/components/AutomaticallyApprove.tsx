import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type AutomaticallyApproveType = {
  className?: string;
  monthly?: string;

  /** Style props */
  headlineJustifyContent?: CSSProperties["justifyContent"];
};

const Rbtext = styled.input`
  cursor: pointer;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Monthly = styled.b`
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
`;
const Rbtext1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
`;
const DoNotWithhold = styled.li`
  margin: 0;
`;
const DoNotWithhold1 = styled.p`
  margin: 0;
`;
const DoNotWithholdAnyTaxAmount = styled.ul`
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  padding-left: var(--padding-16);
`;
const Title = styled.div`
  align-self: stretch;
  width: 935px;
  position: relative;
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
  display: flex;
  align-items: center;
`;
const Content = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-28);
  font-size: var(--Others-12-Button-medium-Font-Size);
  color: var(--Toggles-Active-310-toogle-active-text-off);
`;
const Headline1 = styled.div<{
  headlineJustifyContent?: CSSProperties["justifyContent"];
}>`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-8);
  z-index: 0;
  justify-content: ${(p) => p.headlineJustifyContent};
`;
const AutomaticallyApproveRoot = styled.div`
  align-self: stretch;
  border-radius: var(--br-12);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Tooltip-190-Tooltip-stroke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-14) var(--padding-15);
  z-index: 6;
  text-align: left;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  color: var(--Default-290-Text);
  font-family: var(--Inter);
`;

const AutomaticallyApprove: FunctionComponent<AutomaticallyApproveType> = ({
  className = "",
  headlineJustifyContent,
  monthly,
}) => {
  return (
    <AutomaticallyApproveRoot className={className}>
      <Headline1 headlineJustifyContent={headlineJustifyContent}>
        <Rbtext1>
          <Rbtext type="radio" />
          <Monthly>{monthly}</Monthly>
        </Rbtext1>
        <Content>
          <Title>
            <DoNotWithholdAnyTaxAmount>
              <DoNotWithhold>
                Do not withhold any tax amount (0%) for matched TINs. Withhold
                the full tax amount (24%) for mismatched TINs.
              </DoNotWithhold>
              <DoNotWithhold1>
                Forms with mismatched TINs will require manual approval before
                any withholding is applied.
              </DoNotWithhold1>
            </DoNotWithholdAnyTaxAmount>
          </Title>
        </Content>
      </Headline1>
    </AutomaticallyApproveRoot>
  );
};

export default AutomaticallyApprove;
