import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type TopbarGeneral1Type = {
  className?: string;
  integrationAPI?: string;
  iconAddAccount?: string;

  /** Style props */
  topbarGeneralHeight?: CSSProperties["height"];
};

const IntegrationapiIcon = styled.img`
  height: 60px;
  width: 60px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const TotalBalanceFrom = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: var(--Headline-34-Headline-bold-Font-Line-Height);
  font-weight: var(--Headline-34-Headline-bold-Font-Weight);
  font-family: inherit;
`;
const Nickname = styled.div`
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
  color: var(--Toggles-Active-310-toogle-active-text-off);
`;
const CompanyName = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const ConnectorLogo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
`;
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
  padding: var(--padding-6) var(--padding-15);
  gap: var(--gap-8);
  z-index: 1;
`;
const InviteManage = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-20) 0px;
  background-color: transparent;
  width: 170px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  box-sizing: border-box;
`;
const TopbarGeneralRoot = styled.header<{
  topbarGeneralHeight?: CSSProperties["height"];
}>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
  text-align: left;
  font-size: var(--Headline-28-Headline-bold-Font-Size);
  color: var(--Current-390-Line);
  font-family: var(--Inter);
  height: ${(p) => p.topbarGeneralHeight};
`;

const TopbarGeneral1: FunctionComponent<TopbarGeneral1Type> = ({
  className = "",
  topbarGeneralHeight,
  integrationAPI,
  iconAddAccount,
}) => {
  return (
    <TopbarGeneralRoot
      topbarGeneralHeight={topbarGeneralHeight}
      className={className}
    >
      <ConnectorLogo>
        <IntegrationapiIcon loading="lazy" alt="" src={integrationAPI} />
        <CompanyName>
          <TotalBalanceFrom>API Connector</TotalBalanceFrom>
          <Nickname>Barak</Nickname>
        </CompanyName>
      </ConnectorLogo>
      <InviteManage>
        <ButtonContent>
          <IconaddAccount alt="" src={iconAddAccount} />
          <UploadDataSource>{`Invite & Manage`}</UploadDataSource>
        </ButtonContent>
      </InviteManage>
    </TopbarGeneralRoot>
  );
};

export default TopbarGeneral1;
