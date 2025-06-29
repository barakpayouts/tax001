import { FunctionComponent } from "react";
import styled from "styled-components";

export type TooltipIconType = {
  className?: string;
  editInfoText?: string;
  showTooltipIcon?: boolean;
  iconHelp?: string;

  /** Variant props */
  hoverClick?: string;
  iconSize?: string;
  orientation?: "tooltip ⬇️⬅️" | "tooltip ⬆️⬆️";
  state?: string;
};

const Iconhelp = styled.img`
  width: 16px;
  height: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 0;
`;
const Monthly = styled.div`
  position: relative;
  line-height: var(--Others-12-Paragraph-regular-Font-Line-Height);
`;
const Tooltip = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 8px;
  right: 0px;
  box-shadow: var(--General-shadow);
  border-radius: var(--br-6);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Tooltip-190-Tooltip-stroke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--Paddings-TooltipDD-V-padding-Tooltip-font-12)
    var(--Paddings-TooltipDD-H-padding-Tooltip-font-12);
  opacity: 0;
  z-index: 1;
`;
const Root = styled.div`
  height: 20px;
  width: 20px;
  border-radius: var(--br-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-2) var(--padding-8);
  box-sizing: border-box;
  position: relative;
  text-align: left;
  font-size: var(--Others-12-Paragraph-regular-Font-Size);
  color: var(--Tooltip-190-Tooltip-Text);
  font-family: var(--Inter);
  &[data-hoverClick="off"][data-iconSize="20px"][data-orientation="tooltip ⬆️⬆️"][data-state="default"]
    .iconhelp {
    filter: brightness(0) saturate(100%) invert(24%) sepia(97%) saturate(11%)
      hue-rotate(327deg) brightness(98%) contrast(102%);
  }
  &[data-hoverClick="off"][data-iconSize="20px"][data-orientation="tooltip ⬆️⬆️"][data-state="default"]
    .tooltip20 {
    top: unset;
    right: unset;
    bottom: 11px;
    left: calc(50% - 74.5px);
  }
`;

const TooltipIcon: FunctionComponent<TooltipIconType> = ({
  className = "",
  hoverClick = "on",
  iconSize = "20px",
  orientation = "tooltip ⬅️⬇️",
  state = "hover",
  editInfoText = "This mode overrides scheduled payout logic and manual approval settings,\nallowing payouts to be executed immediately once approved and due.",
  showTooltipIcon,
  iconHelp,
}) => {
  return (
    !!showTooltipIcon && (
      <Root
        data-hoverClick={hoverClick}
        data-iconSize={iconSize}
        data-orientation={orientation}
        data-state={state}
        className={className}
      >
        <Iconhelp className="iconhelp" loading="lazy" alt="" src={iconHelp} />
        <Tooltip className="tooltip20">
          <Monthly>{editInfoText}</Monthly>
        </Tooltip>
      </Root>
    )
  );
};

export default TooltipIcon;
