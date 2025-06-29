import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type LabelButtonType = {
  className?: string;
  button?: string;

  /** Variant props */
  align?: "none ⛔" | "center";
  iconWithLabel?: string;
  orientation?: "none ⛔" | "label ⬆️";
  size?: "28px" | "40px";
  type?: "disable no border" | "disable" | "sub action";

  /** Style props */
  disableHeight?: CSSProperties["height"];
  disableWidth?: CSSProperties["width"];
};

const ButtonIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: var(--br-8);
  z-index: 0;
`;
const Root = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  &[data-align="none ⛔"][data-iconWithLabel="off"][data-orientation="none ⛔"][data-size="28px"][data-type="disable no border"] {
    justify-content: flex-start;
  }
  &[data-align="none ⛔"][data-iconWithLabel="off"][data-orientation="none ⛔"][data-size="40px"][data-type="disable"] {
    justify-content: flex-start;
  }
  &[data-align="none ⛔"][data-iconWithLabel="off"][data-orientation="none ⛔"][data-size="28px"][data-type="disable no border"]
    .buttonIcon {
    width: 28px;
    height: 28px;
    border-radius: var(--br-6);
    z-index: unset;
  }
  &[data-align="none ⛔"][data-iconWithLabel="off"][data-orientation="none ⛔"][data-size="40px"][data-type="disable"]
    .buttonIcon {
    z-index: unset;
  }
`;

const LabelButton: FunctionComponent<LabelButtonType> = ({
  className = "",
  align = "center",
  iconWithLabel = "off",
  orientation = "label ⬆️",
  size = "52px",
  type = "action",
  disableHeight,
  disableWidth,
  button,
}) => {
  return (
    <Root className={className}>
      <ButtonIcon className="buttonIcon" loading="lazy" alt="" src={button} />
    </Root>
  );
};

export default LabelButton;
