import { FunctionComponent } from "react";
import styled from "styled-components";
import Badge from "./Badge";

export type ProfileTitlesType = {
  className?: string;
  showR1Icon?: boolean;
  showBadge?: boolean;
  showAlert?: boolean;
  editTitle?: string;
  showLIcon?: boolean;
  showConnector?: boolean;
  hight?: 14;
  mode?: string;
  edit?: string;

  /** Variant props */
  state?: string;
  variants?: string;
};

const Integrationicon = styled.img`
  height: 18px;
  width: 18px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const IntegrationpayoutsDarkIcon = styled.img`
  width: 18px;
  position: relative;
  height: 18px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
`;
const Monthly = styled.b`
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
`;
const L = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-6);
`;
const IconarrowDown = styled.img`
  width: 14px;
  position: relative;
  height: 14px;
  overflow: hidden;
  flex-shrink: 0;
`;
const AlertIcon = styled.img`
  width: 22.3px;
  position: relative;
  height: 16px;
  object-fit: cover;
  mix-blend-mode: darken;
`;
const EmailRoot = styled.div`
  align-self: stretch;
  border-radius: var(--br-6);
  background-color: var(--Current-390-Stroke);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-6) var(--padding-8);
  gap: 0px;
  text-align: left;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  color: var(--Toolbar-icons-T-Back-default);
  font-family: var(--Inter);
`;

const ProfileTitles: FunctionComponent<ProfileTitlesType> = ({
  className = "",
  state = "default",
  variants = "regular",
  showR1Icon = true,
  showBadge = false,
  showAlert = false,
  editTitle = "Vanilla (Email)",
  showLIcon = true,
  showConnector = false,
  hight,
  mode,
  edit,
}) => {
  return (
    <EmailRoot
      data-state={state}
      data-variants={variants}
      className={className}
    >
      <L>
        {!!showLIcon && (
          <Integrationicon loading="lazy" alt="" src="/integrationicon.svg" />
        )}
        {!!showConnector && (
          <IntegrationpayoutsDarkIcon
            alt=""
            src="/integrationpayouts-dark@2x.png"
          />
        )}
        <Monthly>{editTitle}</Monthly>
      </L>
      {!!showR1Icon && <IconarrowDown alt="" src="/iconarrow-down.svg" />}
      {!!showAlert && <AlertIcon alt="" src="/alert@2x.png" />}
      <Badge hight={hight} mode={mode} edit={edit} />
    </EmailRoot>
  );
};

export default ProfileTitles;
