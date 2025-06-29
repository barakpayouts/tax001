import { FunctionComponent } from "react";
import styled from "styled-components";

export type SidetoolType = {
  className?: string;
};

const PayoutsGmailAvatar = styled.img`
  width: 48px;
  height: 48px;
  position: relative;
  object-fit: cover;
  mix-blend-mode: lighten;
`;
const Title = styled.i`
  position: relative;
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
`;
const Beta = styled.div`
  border-radius: var(--Statuses-240-S-Status-radius);
  background-color: var(--Notes-Statuses-Tag-status-250-Fill-statuses);
  border: 1px solid var(--252-Stroke-statuses-notes);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 7px;
`;
const Logo = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-10);
`;
const ToolbarIcons = styled.img`
  width: 52px;
  max-height: 100%;
`;
const Iconsettings = styled.img`
  height: 26px;
  width: 26px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 0;
`;
const CounterNotification = styled.div`
  width: var(--Menu-categories-Counter-Counter-weight-no-text);
  position: absolute;
  margin: 0 !important;
  top: 2px;
  left: 37px;
  border-radius: var(--Menu-categories-Counter-Counter-radius);
  background-color: var(--292-Fill);
  height: var(--Menu-categories-Counter-Counter-high-no-text);
  display: none;
  z-index: 1;
`;
const ToolbarIcons1 = styled.div`
  width: 52px;
  border-radius: var(--Size-Radius);
  background-color: var(--Toolbar-icons-T-Back-default);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10) 13px;
  box-sizing: border-box;
  position: relative;
  gap: var(--Size-Spacing);
`;
const ToolbarIcons11 = styled.div`
  width: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Icons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-4);
`;
const Separator1 = styled.div`
  width: 60px;
  height: 1px;
  background-color: var(--Default-290-Text);
`;
const ClientProfileAvatarComp = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;
const SidetoolRoot = styled.div`
  align-self: stretch;
  width: 92px;
  background-color: var(--Toolbar-icons-T-Back-default);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-16) 0px var(--padding-24);
  box-sizing: border-box;
  gap: var(--gap-16);
  z-index: 1;
  text-align: center;
  font-size: var(--Others-12-Button-medium-Font-Size);
  color: var(--Notes-Statuses-Tag-status-250-Text-statuses);
  font-family: var(--Inter);
  @media screen and (max-width: 450px) {
    width: calc(100% - 40px);
  }
`;

const Sidetool: FunctionComponent<SidetoolType> = ({ className = "" }) => {
  return (
    <SidetoolRoot className={className}>
      <Logo>
        <PayoutsGmailAvatar
          loading="lazy"
          alt=""
          src="/payouts-gmail-avatar-4@2x.png"
        />
        <Beta>
          <Title>Beta 1.0</Title>
        </Beta>
      </Logo>
      <Icons>
        <ToolbarIcons loading="lazy" alt="" src="/toolbar-icons.svg" />
        <ToolbarIcons11>
          <ToolbarIcons1>
            <Iconsettings loading="lazy" alt="" src="/iconsettings.svg" />
            <CounterNotification />
          </ToolbarIcons1>
        </ToolbarIcons11>
        <ToolbarIcons11>
          <ToolbarIcons1>
            <Iconsettings loading="lazy" alt="" src="/iconhelp-2.svg" />
            <CounterNotification />
          </ToolbarIcons1>
        </ToolbarIcons11>
      </Icons>
      <Separator1 />
      <ClientProfileAvatarComp
        loading="lazy"
        alt=""
        src="/client-profile-avatar-comp@2x.png"
      />
    </SidetoolRoot>
  );
};

export default Sidetool;
