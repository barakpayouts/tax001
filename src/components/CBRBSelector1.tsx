import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type CBRBSelector1Type = {
  className?: string;
  title?: string;
  title1?: string;

  /** Style props */
  rBAlignItems?: CSSProperties["alignItems"];
  titleMinWidth?: CSSProperties["minWidth"];
};

const Shape1 = styled.input`
  cursor: pointer;
  margin: 0;
  height: var(--Height-Width-CB-RB);
  width: var(--Height-Width-CB-RB);
  border-radius: var(--Radius-RB);
  background-color: var(--Active-Checked-Undertemined-310-CB-RB-fill);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--H-padding-CB-RB);
  box-sizing: border-box;
`;
const Title1 = styled.b`
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
`;
const Title11 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--Others-12-Button-medium-Font-Size);
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
  color: var(--Active-Checked-Undertemined-310-Subtitle);
`;
const Title111 = styled.div<{ titleMinWidth?: CSSProperties["minWidth"] }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-8);
  min-width: 660px;
  @media screen and (max-width: 900px) {
    min-width: 100%;
  }
  min-width: ${(p) => p.titleMinWidth};
`;
const Rb = styled.div<{ rBAlignItems?: CSSProperties["alignItems"] }>`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
  @media screen and (max-width: 1725px) {
    flex-wrap: wrap;
  }
  align-items: ${(p) => p.rBAlignItems};
`;
const CbRbSelectorRoot = styled.div`
  align-self: stretch;
  border-radius: var(--Radius-CB-RB-bgselector);
  background-color: var(--Active-Checked-Undertemined-310-Fill);
  border: var(--Stroke-CB-RB-bgselector) solid
    var(--Active-Checked-Undertemined-310-Stroke);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10) var(--padding-15);
  z-index: 0;
  text-align: left;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  color: var(--Active-Checked-Undertemined-310-Title);
  font-family: var(--Inter);
`;

const CBRBSelector1: FunctionComponent<CBRBSelector1Type> = ({
  className = "",
  rBAlignItems,
  titleMinWidth,
  title,
  title1,
}) => {
  return (
    <CbRbSelectorRoot className={className}>
      <Rb rBAlignItems={rBAlignItems}>
        <Shape1 type="radio" />
        <Title111 titleMinWidth={titleMinWidth}>
          <Title1>{title}</Title1>
          <Title11>{title1}</Title11>
        </Title111>
      </Rb>
    </CbRbSelectorRoot>
  );
};

export default CBRBSelector1;
