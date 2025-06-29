import { FunctionComponent } from "react";
import styled from "styled-components";

export type TooltipButtonType = {
  className?: string;
  showBtnText?: boolean;
  editBadgeText?: string;
  editTooltipText?: string;
  showRIcon?: boolean;
  showLIcon?: boolean;
  editBtnText?: string;
  showBadge?: boolean;

  /** Variant props */
  size?: string;
  state?: string;
  type?: string;
};

const IconaddAccount = styled.img`
  width: 20px;
  position: relative;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const UploadDataSource = styled.b`
  position: relative;
  font-size: var(--font-size-14);
  line-height: 20px;
  font-family: var(--Fonts-General-Font-family-font-family);
  color: var(--Default-290-Text);
  text-align: left;
`;
const Link = styled.b`
  position: relative;
  font-size: var(--Others-10-Bold-Bundle-titles-Font-Size);
  line-height: var(--Others-10-Bold-Bundle-titles-Font-Line-Height);
  font-family: var(--Inter);
  color: var(--Default-150-Default-budgets);
  text-align: center;
`;
const Badge1 = styled.div`
  border-radius: var(--br-4);
  border: 1px solid var(--Default-150-Default-budgets);
  box-sizing: border-box;
  height: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-4);
`;
const IconarrowRight = styled.img`
  width: 16px;
  position: relative;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
`;
const ButtonContent = styled.div`
  align-self: stretch;
  height: 40px;
  border-radius: var(--br-8);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Toggles-Active-310-toogle-active-stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-6) var(--padding-16);
  gap: var(--gap-8);
  z-index: 1;
`;
const Monthly = styled.div`
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
  font-family: var(--Inter);
  color: var(--Tooltip-190-Tooltip-Text);
  text-align: left;
  @media screen and (max-width: 1325px) {
    display: none;
  }
`;
const Tooltip = styled.div`
  box-shadow: var(--General-shadow);
  border-radius: var(--Tooltip-180-Radius);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: var(--DD-menu-180-Stroke) solid var(--Tooltip-190-Tooltip-stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--Paddings-TooltipDD-V-padding-Tooltip-font-14)
    var(--Paddings-TooltipDD-H-padding-Tooltip-font-14);
  opacity: 0;
  min-width: 240px;
  z-index: 0;
  margin-top: -4px;
  position: relative;
  @media screen and (max-width: 1725px) {
    display: none;
  }
`;
const InviteManageRoot = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  height: 40px;
  width: 170px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  @media screen and (max-width: 1725px) {
    width: -346px;
  }
`;

const TooltipButton: FunctionComponent<TooltipButtonType> = ({
  className = "",
  size = "40px",
  state = "default",
  type = "action",
  showBtnText = true,
  editBadgeText = "28",
  editTooltipText = "Would you like to invite a colleague who is authorized to fill out this form?",
  showRIcon = false,
  showLIcon = true,
  editBtnText = "Invite & Manage",
  showBadge = false,
}) => {
  return (
    <InviteManageRoot
      data-size={size}
      data-state={state}
      data-type={type}
      className={className}
    >
      <ButtonContent>
        {!!showLIcon && <IconaddAccount alt="" src="/iconadd-account.svg" />}
        {!!showBtnText && <UploadDataSource>{editBtnText}</UploadDataSource>}
        {!!showBadge && (
          <Badge1>
            <Link>{editBadgeText}</Link>
          </Badge1>
        )}
        {!!showRIcon && <IconarrowRight alt="" src="/iconarrow-right1.svg" />}
      </ButtonContent>
      <Tooltip>
        <Monthly>{editTooltipText}</Monthly>
      </Tooltip>
    </InviteManageRoot>
  );
};

export default TooltipButton;
