import { FunctionComponent } from "react";
import AVATAR from "./AVATAR";
import styled from "styled-components";
import LockerTooltip from "./LockerTooltip";
import ProfileTitles from "./ProfileTitles";
import GenericSubtitle from "./GenericSubtitle";

export type SidebarNavComponentType = {
  className?: string;
};

const Placeholder = styled.b`
  position: relative;
`;
const TotalBalanceFrom = styled.div`
  position: relative;
  font-size: var(--Others-12-Paragraph-regular-Font-Size);
  line-height: var(--Others-12-Paragraph-regular-Font-Line-Height);
  font-family: var(--Inter);
  color: var(--Toggles-Active-310-toogle-active-text-off);
`;
const CompanyName = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-6);
  z-index: 1;
  text-align: left;
  font-size: var(--font-size-16);
  color: var(--Toolbar-icons-T-Back-default);
`;
const ArrowIcon = styled.img`
  width: 14px;
  max-height: 100%;
  z-index: 2;
`;
const BulletColors = styled.div`
  height: 10px;
  width: 10px;
  margin: 0 !important;
  position: absolute;
  top: 42px;
  left: 41px;
  border-radius: 125px;
  background-color: var(--Black);
  z-index: 3;
`;
const CompanyProfileComp = styled.div`
  align-self: stretch;
  border-radius: var(--br-8);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Inactive-390-Line);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: center;
  padding: var(--padding-12);
  position: relative;
  gap: 0px var(--gap-8);
`;
const CompanyProfile = styled.div`
  align-self: stretch;
  background-color: var(--Default-290-Stoke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-16) var(--padding-16) 0px;
  z-index: 2;
`;
const SubtractIcon = styled.img`
  height: 58px;
  width: 256px;
  position: relative;
  border-radius: var(--br-12);
`;
const FunctionIcon = styled.img`
  height: 28px;
  width: 28px;
  border-radius: 999px;
  margin-left: -13px;
  position: relative;
`;
const MenuTop = styled.div`
  width: 255px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;
`;
const Icon11 = styled.img`
  height: 26px;
  width: 26px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const DashNum = styled.div`
  align-self: stretch;
  border-radius: var(--br-4);
  background-color: var(---nfu-purple-org);
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-4);
  text-align: center;
  font-size: var(--font-size-12);
  color: var(--Tooltip-190-Tooltip-fill);
`;
const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
  z-index: 0;
`;
const ArrowIcon1 = styled.img`
  height: 14px;
  width: 14px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
  z-index: 1;
`;
const HoverSignIcon = styled.img`
  height: 50px;
  width: 6px;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  z-index: 2;
`;
const TitleCategory = styled.div`
  width: 256px;
  background-color: var(--Current-390-Stroke);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-12) var(--padding-16);
  box-sizing: border-box;
  position: relative;
  gap: 0px;
`;
const Links = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4) 0px var(--padding-4) var(--padding-24);
  gap: var(--gap-4);
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  color: var(--Default-290-Text);
`;
const Connector = styled.div`
  width: 209px;
  border-radius: var(--br-8);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4);
  z-index: 6;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  color: var(--Toolbar-icons-T-Back-default);
`;
const Integrationicon = styled.img`
  height: 18px;
  width: 18px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Link = styled.div`
  flex: 1;
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
`;
const L = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-6);
`;
const EmailConectorInProgress = styled.div`
  align-self: stretch;
  border-radius: var(--br-6);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-6) var(--padding-4) var(--padding-6) var(--padding-8);
  z-index: 5;
`;
const EmailConectorInProgress1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-6);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-6) var(--padding-4) var(--padding-6) var(--padding-8);
  z-index: 4;
`;
const EmailConectorInProgress11 = styled.div`
  align-self: stretch;
  border-radius: var(--br-6);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-6) var(--padding-4) var(--padding-6) var(--padding-8);
  z-index: 3;
`;
const IntegrationtuneIcon = styled.img`
  width: 18px;
  position: relative;
  height: 18px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
`;
const IntegrationpayoutsDarkIcon = styled.img`
  width: 18px;
  position: relative;
  height: 18px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
  display: none;
`;
const Monthly = styled.div`
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
`;
const L1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5);
`;
const IconarrowRight = styled.img`
  width: 14px;
  position: relative;
  height: 14px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Tune = styled.div`
  align-self: stretch;
  border-radius: var(--br-6);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-6) var(--padding-8);
  gap: 0px;
  z-index: 2;
`;
const IconarrowRight1 = styled.img`
  height: 14px;
  width: 14px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Manual = styled.div`
  align-self: stretch;
  border-radius: var(--br-6);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-6) var(--padding-8);
  gap: 0px;
  z-index: 1;
`;
const IconaddFunds = styled.img`
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
const AddNewConnector = styled.div`
  width: 209px;
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
  z-index: 0;
  text-align: center;
  font-size: var(--Others-12-Button-medium-Font-Size);
`;
const Options = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: var(--gap-8);
`;
const MenuOptions = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-10) 0px 37px;
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  color: var(--Default-290-Text);
  font-family: var(--Inter);
`;
const MenuCategoriesActive = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-12);
`;
const ArrowIcon11 = styled.img`
  height: 14px;
  width: 14px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const HoverSignIcon1 = styled.img`
  height: 50px;
  width: 6px;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  left: 255px;
  z-index: 2;
`;
const TitleCategory1 = styled.div`
  width: 256px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-12) var(--padding-16);
  box-sizing: border-box;
  position: relative;
  gap: 0px;
`;
const Payments = styled.div`
  width: 256px;
  background-color: var(--Default-290-Stoke);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const HoverSignIcon11 = styled.img`
  height: 50px;
  width: 6px;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  left: 256px;
  z-index: 2;
`;
const CategoriesSidebarClipConte = styled.div`
  flex: 1;
  background-color: var(--Default-290-Stoke);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-12);
  z-index: 0;
  text-align: left;
  color: var(--Toolbar-icons-T-Back-default);
`;
const SidebarNavComponentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 0;
  text-align: center;
  font-size: var(--font-size-14);
  color: var(--Default-290-Stoke);
  font-family: Inter;
`;

const SidebarNavComponent: FunctionComponent<SidebarNavComponentType> = ({
  className = "",
}) => {
  return (
    <SidebarNavComponentRoot className={className}>
      <CompanyProfile>
        <CompanyProfileComp>
          <AVATAR avatarVariants="Brown Dark" aVATARText="AC" />
          <CompanyName>
            <Placeholder>nick_1</Placeholder>
            <TotalBalanceFrom>ACME Inc.</TotalBalanceFrom>
          </CompanyName>
          <ArrowIcon alt="" src="/arrow.svg" />
          <BulletColors />
        </CompanyProfileComp>
      </CompanyProfile>
      <MenuTop>
        <SubtractIcon alt="" src="/subtract.svg" />
        <FunctionIcon loading="lazy" alt="" src="/function-icon.svg" />
      </MenuTop>
      <CategoriesSidebarClipConte>
        <MenuCategoriesActive>
          <TitleCategory>
            <Text>
              <Icon11 loading="lazy" alt="" src="/icon.svg" />
              <Placeholder>Connectors</Placeholder>
              <DashNum>
                <Placeholder>2</Placeholder>
              </DashNum>
            </Text>
            <ArrowIcon1 alt="" src />
            <HoverSignIcon loading="lazy" alt="" src="/hover-sign.svg" />
          </TitleCategory>
          <MenuOptions>
            <Options>
              <LockerTooltip
                state="off"
                editText={`The connection is still in progress,
permission is required.`}
                prop="/.svg"
              />
              <LockerTooltip
                state="off"
                lockerTooltipTop="202px"
                lockerTooltipRight="5px"
                lockerTooltipLeft="unset"
                prop="/.svg"
              />
              <LockerTooltip
                state="off"
                lockerTooltipTop="162px"
                lockerTooltipRight="5px"
                lockerTooltipLeft="unset"
                prop="/.svg"
              />
              <Connector>
                <ProfileTitles
                  state="default"
                  variants="regular"
                  showR1Icon
                  showBadge={false}
                  showAlert={false}
                  editTitle="Vanilla (Email)"
                  showLIcon
                  showConnector={false}
                  hight="14"
                  mode="Light"
                  edit="3"
                />
                <Links>
                  <GenericSubtitle
                    state="default"
                    type="default"
                    showRIcon={false}
                    show={false}
                    subtitleText="Pending Invoices"
                    showIntegration={false}
                  />
                  <GenericSubtitle
                    state="default"
                    type="default"
                    showRIcon={false}
                    show={false}
                    subtitleText="Vendor Management"
                    showIntegration={false}
                  />
                  <GenericSubtitle
                    state="default"
                    type="default"
                    showRIcon={false}
                    show={false}
                    subtitleText="Connector Settings"
                    showIntegration={false}
                  />
                </Links>
              </Connector>
              <EmailConectorInProgress>
                <L>
                  <Integrationicon
                    loading="lazy"
                    alt=""
                    src="/integrationicon.svg"
                  />
                  <Link>Nick (Email)</Link>
                </L>
              </EmailConectorInProgress>
              <EmailConectorInProgress1>
                <L>
                  <Integrationicon
                    loading="lazy"
                    alt=""
                    src="/integrationicon.svg"
                  />
                  <Link>John (Email)</Link>
                </L>
              </EmailConectorInProgress1>
              <EmailConectorInProgress11>
                <L>
                  <Integrationicon alt="" src="/integrationicon.svg" />
                  <Link>Smily (Email)</Link>
                </L>
              </EmailConectorInProgress11>
              <Tune>
                <L1>
                  <IntegrationtuneIcon alt="" src="/integrationtune@2x.png" />
                  <IntegrationpayoutsDarkIcon
                    alt=""
                    src="/integrationpayouts-dark@2x.png"
                  />
                  <Monthly>David (Tune)</Monthly>
                </L1>
                <IconarrowRight alt="" src="/iconarrow-right.svg" />
              </Tune>
              <Manual>
                <L1>
                  <Integrationicon
                    loading="lazy"
                    alt=""
                    src="/integrationicon-4.svg"
                  />
                  <IntegrationpayoutsDarkIcon
                    alt=""
                    src="/integrationpayouts-dark@2x.png"
                  />
                  <Monthly>Alina (Manual)</Monthly>
                </L1>
                <IconarrowRight1 alt="" src="/iconarrow-right.svg" />
              </Manual>
              <AddNewConnector>
                <IconaddFunds alt="" src="/iconadd-funds.svg" />
                <TextBtn28px>Add New Connector</TextBtn28px>
              </AddNewConnector>
            </Options>
          </MenuOptions>
        </MenuCategoriesActive>
        <Payments>
          <TitleCategory1>
            <Text>
              <Icon11 loading="lazy" alt="" src="/icon-1.svg" />
              <Placeholder>Smart Payouts</Placeholder>
            </Text>
            <ArrowIcon11 alt="" src="/arrow-2.svg" />
            <HoverSignIcon1 loading="lazy" alt="" src="/hover-sign.svg" />
            <LockerTooltip
              state="off"
              lockerTooltipTop="15px"
              lockerTooltipRight="unset"
              lockerTooltipLeft="194px"
              prop="/-3.svg"
            />
          </TitleCategory1>
        </Payments>
        <Payments>
          <TitleCategory1>
            <Text>
              <Icon11 loading="lazy" alt="" src="/icon-2.svg" />
              <Placeholder>Banking</Placeholder>
            </Text>
            <ArrowIcon11 alt="" src="/arrow-2.svg" />
            <HoverSignIcon11 alt="" src="/hover-sign.svg" />
            <LockerTooltip
              state="off"
              lockerTooltipTop="15px"
              lockerTooltipRight="unset"
              lockerTooltipLeft="194px"
              prop="/-3.svg"
            />
          </TitleCategory1>
        </Payments>
      </CategoriesSidebarClipConte>
    </SidebarNavComponentRoot>
  );
};

export default SidebarNavComponent;
