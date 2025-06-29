import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type CreatedWorkflowType = {
  className?: string;
  title?: string;

  /** Style props */
  rBMinWidth?: CSSProperties["minWidth"];
  titleMinWidth?: CSSProperties["minWidth"];
};

const Shape1 = styled.input`
  cursor: pointer;
  margin: 0;
  height: var(--Height-Width-CB-RB);
  width: var(--Height-Width-CB-RB);
  border-radius: var(--Radius-RB);
  background-color: var(--Default-310-CB-RB-fill);
  border: var(--Stroke-CB-RB) solid var(--Default-310-CB-RB-stroke);
  box-sizing: border-box;
`;
const Title1 = styled.b`
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
`;
const Title11 = styled.div<{ titleMinWidth?: CSSProperties["minWidth"] }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 553px;
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
  min-width: ${(p) => p.titleMinWidth};
`;
const Rb = styled.div<{ rBMinWidth?: CSSProperties["minWidth"] }>`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8);
  min-width: 571px;
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
  min-width: ${(p) => p.rBMinWidth};
`;
const IconsingleConnector = styled.img`
  width: 16px;
  position: relative;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
`;
const TextBtn28px = styled.div`
  position: relative;
  font-size: var(--Others-12-Button-medium-Font-Size);
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
  font-family: var(--Inter);
  color: var(--Default-290-Text);
  text-align: center;
`;
const Cta = styled.div`
  height: 28px;
  border-radius: var(--br-6);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Toggles-Active-310-toogle-active-stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-2) var(--padding-11);
  gap: var(--gap-3);
`;
const Btnicon1 = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const CreatedWorkflowRoot = styled.div`
  align-self: stretch;
  height: 60px;
  border-radius: var(--Radius-CB-RB-bgselector);
  background-color: var(--Default-310-Fill);
  border: var(--Stroke-CB-RB-bgselector) solid var(--Default-310-Stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--V-padding-CB-RB-bgselector) var(--padding-15);
  gap: var(--Spacing-CB-RB-bgselector);
  z-index: 0;
  text-align: left;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  color: var(--Default-310-Title);
  font-family: var(--Inter);
  @media screen and (max-width: 900px) {
    height: auto;
    flex-wrap: wrap;
  }
`;

const CreatedWorkflow: FunctionComponent<CreatedWorkflowType> = ({
  className = "",
  rBMinWidth,
  titleMinWidth,
  title,
}) => {
  return (
    <CreatedWorkflowRoot className={className}>
      <Rb rBMinWidth={rBMinWidth}>
        <Shape1 type="radio" />
        <Title11 titleMinWidth={titleMinWidth}>
          <Title1>{title}</Title1>
        </Title11>
      </Rb>
      <Btnicon1>
        <Cta>
          <IconsingleConnector alt="" src="/iconsingle-connector.svg" />
          <TextBtn28px>Create Workflow</TextBtn28px>
        </Cta>
      </Btnicon1>
    </CreatedWorkflowRoot>
  );
};

export default CreatedWorkflow;
