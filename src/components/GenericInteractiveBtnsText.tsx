import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type GenericInteractiveBtnsTextType = {
  className?: string;
  showBadge?: boolean;
  showLIcon?: boolean;
  showRIcon?: boolean;
  editBtnText?: string;
  editBadgeText?: string;
  showBtnText?: boolean;
  showTooltipBtn?: boolean;
  upload?: string;
  iconarrowRight?: string;

  /** Variant props */
  size?: "28px" | "40px";
  state?: string;
  type?: "sub action" | "action";

  /** Style props */
  tooltipBtnHeight?: CSSProperties["height"];
  tooltipBtnWidth?: CSSProperties["width"];
};

const UploadIcon = styled.img`
  width: 16px;
  position: relative;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
`;
const TextBtn28px = styled.div`
  position: relative;
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
`;
const Link = styled.b`
  position: relative;
  line-height: var(--Others-10-Bold-Bundle-titles-Font-Line-Height);
`;
const Badge1 = styled.div`
  border-radius: var(--br-4);
  border: 1px solid var(--Default-290-Text);
  box-sizing: border-box;
  height: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-4);
  font-size: var(--Others-10-Bold-Bundle-titles-Font-Size);
`;
const IconarrowRight = styled.img`
  width: 14px;
  position: relative;
  height: 14px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Root = styled.div<{
  tooltipBtnHeight?: CSSProperties["height"];
  tooltipBtnWidth?: CSSProperties["width"];
}>`
  height: 28px;
  border-radius: var(--br-6);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Toggles-Active-310-toogle-active-stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-2) var(--padding-12);
  gap: var(--gap-4);
  z-index: 1;
  text-align: center;
  font-size: var(--Others-12-Button-medium-Font-Size);
  color: var(--Default-290-Text);
  font-family: var(--Inter);
  &[data-size="40px"][data-state="default"][data-type="sub action"] {
    border-radius: var(--br-8);
    padding: var(--padding-6) var(--padding-16);
    gap: var(--gap-8);
    z-index: unset;
  }
  &[data-size="40px"][data-state="default"][data-type="action"] {
    border-radius: var(--br-8);
    background-color: var(--Toolbar-icons-T-Back-default);
    border: 1px solid var(--color-gray-200);
    padding: var(--padding-6) var(--padding-16);
    gap: var(--gap-8);
    z-index: unset;
  }
  &[data-size="40px"][data-state="default"][data-type="sub action"]
    .uploadIcon {
    width: 20px;
    height: 20px;
    display: none;
  }
  &[data-size="40px"][data-state="default"][data-type="action"] .uploadIcon {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%)
      hue-rotate(103deg) brightness(88%) contrast(112%);
    width: 20px;
    height: 20px;
    display: none;
  }
  &[data-size="40px"][data-state="default"][data-type="sub action"]
    .textBtn28px {
    font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
    line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
    font-weight: bold;
  }
  &[data-size="40px"][data-state="default"][data-type="action"] .textBtn28px {
    font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
    line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
    font-weight: bold;
    color: var(--Default-290-Stoke);
  }
  &[data-size="40px"][data-state="default"][data-type="sub action"] .badge {
    height: 16px;
    display: none;
  }
  &[data-size="40px"][data-state="default"][data-type="action"] .badge {
    border: 1px solid var(--Default-290-Stoke);
    height: 16px;
    display: none;
  }
  &[data-size="40px"][data-state="default"][data-type="action"] .link {
    color: var(--Default-290-Stoke);
  }
  &[data-size="40px"][data-state="default"][data-type="sub action"]
    .iconarrowRight {
    width: 16px;
    height: 16px;
    display: none;
  }
  &[data-size="40px"][data-state="default"][data-type="action"]
    .iconarrowRight {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%)
      hue-rotate(103deg) brightness(88%) contrast(112%);
    width: 16px;
    height: 16px;
    display: none;
  }
  height: ${(p) => p.tooltipBtnHeight};
  width: ${(p) => p.tooltipBtnWidth};
`;

const GenericInteractiveBtnsText: FunctionComponent<
  GenericInteractiveBtnsTextType
> = ({
  className = "",
  size = "52px",
  state = "default",
  type = "animated action",
  showBadge = false,
  showLIcon = false,
  showRIcon = false,
  editBtnText = "Restore Default",
  editBadgeText = "28",
  showBtnText = true,
  showTooltipBtn,
  tooltipBtnHeight,
  tooltipBtnWidth,
  upload,
  iconarrowRight,
}) => {
  return (
    !!showTooltipBtn && (
      <Root
        data-size={size}
        data-state={state}
        data-type={type}
        tooltipBtnHeight={tooltipBtnHeight}
        tooltipBtnWidth={tooltipBtnWidth}
        className={className}
      >
        {!!showLIcon && (
          <UploadIcon className="uploadIcon" alt="" src={upload} />
        )}
        {!!showBtnText && (
          <TextBtn28px className="textBtn28px">{editBtnText}</TextBtn28px>
        )}
        {!!showBadge && (
          <Badge1 className="badge">
            <Link className="link">{editBadgeText}</Link>
          </Badge1>
        )}
        {!!showRIcon && (
          <IconarrowRight
            className="iconarrowRight"
            alt=""
            src={iconarrowRight}
          />
        )}
      </Root>
    )
  );
};

export default GenericInteractiveBtnsText;
