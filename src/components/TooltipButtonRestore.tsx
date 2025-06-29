import { FunctionComponent } from "react";
import GenericInteractiveBtnsText from "./GenericInteractiveBtnsText";
import styled from "styled-components";

export type TooltipButtonRestoreType = {
  className?: string;
  editText?: string;
  size?: "28px" | "40px";
  state1?: string;
  type?: "sub action" | "action";
  editBtnText?: string;
  editBadgeText?: string;
  upload?: string;
  iconarrowRight?: string;
  showBadge?: boolean;
  showLIcon?: boolean;
  showRIcon?: boolean;
  showBtnText?: boolean;
  showTooltipBtn?: boolean;
  tooltipBtnHeight?: string;
  tooltipBtnWidth?: string;

  /** Variant props */
  state?: string;
};

const Monthly = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-12);
  line-height: 20px;
  font-weight: 500;
  font-family: Inter;
  text-align: left;
`;
const Tooltip = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 22px;
  right: -4px;
  box-shadow: var(--General-shadow);
  border-radius: var(--br-8);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Tooltip-190-Tooltip-stroke);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-8) var(--padding-16);
  opacity: 0;
  z-index: 0;
`;
const TooltipButtonRestoreRoot = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TooltipButtonRestore: FunctionComponent<TooltipButtonRestoreType> = ({
  className = "",
  state = "off",
  editText = "Restore <section_title> default Setting.",
  size,
  state1,
  type,
  editBtnText,
  editBadgeText,
  upload,
  iconarrowRight,
  showBadge,
  showLIcon,
  showRIcon,
  showBtnText,
  showTooltipBtn,
  tooltipBtnHeight,
  tooltipBtnWidth,
}) => {
  return (
    <TooltipButtonRestoreRoot data-state={state} className={className}>
      <GenericInteractiveBtnsText
        size={size}
        state={state1}
        type={type}
        showBadge={showBadge}
        showLIcon={showLIcon}
        showRIcon={showRIcon}
        editBtnText={editBtnText}
        editBadgeText={editBadgeText}
        showBtnText={showBtnText}
        showTooltipBtn={showTooltipBtn}
        tooltipBtnHeight={tooltipBtnHeight}
        tooltipBtnWidth={tooltipBtnWidth}
        upload={upload}
        iconarrowRight={iconarrowRight}
      />
      <Tooltip>
        <Monthly>{editText}</Monthly>
      </Tooltip>
    </TooltipButtonRestoreRoot>
  );
};

export default TooltipButtonRestore;
