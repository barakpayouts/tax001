import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopbarGeneral1 from "../components/TopbarGeneral1";
import SidebarWizard from "../components/SidebarWizard";
import styled from "styled-components";
import ContentToggles from "../components/ContentToggles";

const Title = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: var(--Paragraph-20-Paragraph-bold-Font-Line-Height);
  font-weight: var(--Paragraph-20-Paragraph-bold-Font-Weight);
  font-family: inherit;
  z-index: 1;
  @media screen and (max-width: 975px) {
    font-size: var(--font-size-16);
    line-height: 22px;
  }
`;
const Iconinfo = styled.img`
  height: 16px;
  width: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 0;
`;
const Tooltip = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
  z-index: 1;
`;
const Link = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
  color: var(--Notes-Statuses-Info-250-Text-notes-statuses);
  z-index: 0;
`;
const Title1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 649px;
  @media screen and (max-width: 725px) {
    min-width: 100%;
  }
`;
const TextBtn28px = styled.div`
  position: relative;
  font-size: var(--Others-12-Button-medium-Font-Size);
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
  font-family: var(--Inter);
  color: var(--Default-290-Text);
  text-align: center;
`;
const TooltipBtn = styled.button`
  cursor: pointer;
  border: 1px solid var(--Toggles-Active-310-toogle-active-stroke);
  padding: var(--padding-2) var(--padding-11);
  background-color: var(--Tooltip-190-Tooltip-fill);
  height: 28px;
  border-radius: var(--br-6);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--color-gainsboro-100);
    border: 1px solid var(--color-gray-100);
    box-sizing: border-box;
  }
`;
const Headline = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-12);
  z-index: 2;
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
  }
`;
const Text = styled.b`
  position: relative;
`;
const Iconinfo1 = styled.img`
  height: 16px;
  width: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Tooltip1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
  min-width: 137px;
`;
const Subtitle = styled.div`
  position: relative;
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
`;
const Off1 = styled.div`
  align-self: stretch;
  border-radius: var(--Radius-inner-toggle);
  background-color: var(--Toggles-Active-310-toogle-active-off);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--V-padding-inner-toggle) var(--H-padding-inner-toggle);
`;
const On1 = styled.div`
  height: var(--Height-weight-inner-toggle-default);
  border-radius: var(--Radius-inner-toggle);
  background-color: var(--Toggles-Active-310-toogle-active-on);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--V-padding-inner-toggle) var(--H-padding-inner-toggle);
  box-sizing: border-box;
  color: var(--Toggles-Active-310-toogle-active-text-on);
`;
const Enable11 = styled.div`
  height: var(--Height-outer-toggle);
  border-radius: var(--Radius-outer-toggle);
  background-color: var(--Toggles-Active-310-toogle-active-back);
  border: var(--Stroke-toggle) solid
    var(--Toggles-Active-310-toogle-active-stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--V-padding-outer-toggle) var(--H-padding-outer-toggle);
  text-align: center;
  font-size: var(--Others-12-Button-medium-Font-Size);
  color: var(--Toggles-Active-310-toogle-active-text-off);
  font-family: var(--Inter);
`;
const ButtonIcon = styled.img`
  height: 28px;
  width: 28px;
  border-radius: var(--br-6);
`;
const Title11 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-12) var(--padding-24) var(--padding-10);
  gap: var(--gap-12);
  z-index: 1;
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
  }
`;
const Optional = styled.span`
  white-space: pre-wrap;
`;
const Span = styled.span``;
const TotalBalanceFromContainer = styled.div`
  flex: 1;
  position: relative;
  line-height: var(--Headline-12-Headline-bold-Font-Line-Height);
`;
const Columns = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  z-index: 3;
`;
const Content1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-24);
  gap: var(--gap-8);
  z-index: 0;
  text-align: right;
  font-size: var(--Headline-12-Headline-bold-Font-Size);
`;
const AccountProfile = styled.section`
  align-self: stretch;
  border-radius: var(--br-12);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--font-size-16);
  color: var(--Default-290-Text);
  font-family: Inter;
`;
const Tooltip11 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
  min-width: 150px;
`;
const Subtitle1 = styled.div`
  position: relative;
  font-size: var(--Others-12-Button-medium-Font-Size);
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
  font-family: var(--Inter);
  color: var(--Toggles-Active-310-toogle-active-text-off);
  text-align: center;
`;
const Subtitle11 = styled.div`
  position: relative;
  font-size: var(--Others-12-Button-medium-Font-Size);
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
  font-family: var(--Inter);
  color: var(--Toggles-Active-310-toogle-active-text-on);
  text-align: center;
`;
const On11 = styled.div`
  height: var(--Height-weight-inner-toggle-default);
  border-radius: var(--Radius-inner-toggle);
  background-color: var(--Toggles-Active-310-toogle-active-on);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--V-padding-inner-toggle) var(--H-padding-inner-toggle);
  box-sizing: border-box;
`;
const Enable111 = styled.button`
  cursor: pointer;
  border: var(--Stroke-toggle) solid
    var(--Toggles-Active-310-toogle-active-stroke);
  padding: var(--padding-1) var(--padding-2);
  background-color: var(--Toggles-Active-310-toogle-active-back);
  height: var(--Height-outer-toggle);
  border-radius: var(--Radius-outer-toggle);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Columns1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;
`;
const Text1 = styled.b`
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
`;
const TotalBalanceFrom = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
  z-index: 0;
`;
const TitleToogle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4);
  min-width: 648px;
  z-index: 1;
  @media screen and (max-width: 725px) {
    min-width: 100%;
  }
`;
const OffChild = styled.div`
  width: 12px;
  position: relative;
  border-radius: 999px;
  background-color: var(--Toggles-Active-Circule-310-toogle-circule-active-off);
  height: 12px;
`;
const Off11 = styled.div`
  height: 16px;
  width: 30px;
  border-radius: var(--br-100);
  background-color: var(
    --Toggles-Active-Circule-310-toogle-active-circule-off-back-switch-2
  );
  border: 1px solid
    var(--Toggles-Active-Circule-310-toogle-active-circule-stroke-off);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-2);
  z-index: 0;
`;
const RequiredOptionalSectionCo = styled.div`
  align-self: stretch;
  border-radius: var(--br-8);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-14) var(--padding-15);
  gap: var(--gap-16);
  z-index: 0;
  text-align: left;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  font-family: var(--Inter);
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;
const Content11 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-24);
  gap: var(--gap-8);
  z-index: 0;
  text-align: right;
  font-size: var(--Headline-12-Headline-bold-Font-Size);
  color: var(--Toggles-Active-310-toogle-active-stroke);
`;
const Tooltip111 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
  min-width: 140px;
`;
const TotalBalanceFrom1 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
  color: var(--Toggles-Active-310-toogle-active-text-off);
  z-index: 0;
`;
const OnChild = styled.div`
  width: 12px;
  position: relative;
  border-radius: 999px;
  background-color: var(--Toggles-Active-Circule-310-toogle-circule-active-on);
  height: 12px;
`;
const On111 = styled.div`
  height: 16px;
  width: 30px;
  border-radius: var(--br-100);
  background-color: var(
    --Toggles-Active-Circule-310-toogle-active-circule-on-back-switch-2
  );
  border: 1px solid
    var(--Toggles-Active-Circule-310-toogle-active-circule-stroke-on);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-2);
  z-index: 0;
`;
const Separator = styled.div`
  align-self: stretch;
  height: 1px;
  flex-shrink: 0;
`;
const Scroll = styled.div`
  align-self: stretch;
  flex: 1;
  border-bottom: 2px solid var(--Tooltip-190-Tooltip-stroke);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-16);
  z-index: 1;
`;
const ResetIcon = styled.img`
  height: 40px;
  width: 40px;
`;
const UploadDataSource = styled.b`
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
  font-family: var(--Inter);
  color: var(--Default-290-Text);
  text-align: center;
`;
const Back1 = styled.button`
  cursor: pointer;
  border: 1px solid var(--Toggles-Active-310-toogle-active-stroke);
  padding: var(--padding-6) var(--padding-15);
  background-color: var(--Tooltip-190-Tooltip-fill);
  height: 40px;
  border-radius: var(--br-8);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--color-gainsboro-100);
    border: 1px solid var(--color-gray-100);
    box-sizing: border-box;
  }
`;
const UploadDataSource1 = styled.b`
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
  font-family: var(--Inter);
  color: var(--Default-290-Stoke);
  text-align: center;
`;
const Next1 = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-gray-200);
  padding: var(--padding-6) var(--padding-16);
  background-color: var(--Toolbar-icons-T-Back-default);
  height: 40px;
  width: 160px;
  border-radius: var(--br-8);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray-100);
    box-sizing: border-box;
  }
`;
const R = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  gap: var(--gap-12);
`;
const ActionBtn = styled.footer`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0px;
  z-index: 0;
  @media screen and (max-width: 975px) {
    flex-wrap: wrap;
  }
`;
const Wrapped1 = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: var(--br-12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-16);
  min-width: 730px;
  @media screen and (max-width: 725px) {
    min-width: 100%;
  }
`;
const Wrapping1 = styled.main`
  align-self: stretch;
  flex: 1;
  border-radius: var(--br-12);
  background-color: var(--Inactive-390-Line);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: var(--padding-16);
  box-sizing: border-box;
  gap: var(--gap-32);
  max-width: 100%;
  text-align: left;
  font-size: var(--Paragraph-20-Paragraph-bold-Font-Size);
  color: var(--Current-390-Line);
  font-family: var(--Inter);
  @media screen and (max-width: 975px) {
    gap: var(--gap-16);
  }
`;
const Content111 = styled.main`
  align-self: stretch;
  width: 1521px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const ApiConnectionPayoutsEligiRoot = styled.div`
  height: 1067px;
  position: relative;
  background-color: var(--Tooltip-190-Tooltip-fill);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 975px) {
    gap: var(--gap-16);
  }
`;

const APIConnectionPayoutsEligibility: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHugTextContainerClick = useCallback(() => {
    navigate("/api-connection-self-invoice-settings-default");
  }, [navigate]);

  const onHugTextContainerClick1 = useCallback(() => {
    navigate("/api-connection-payouts-settings-default");
  }, [navigate]);

  return (
    <ApiConnectionPayoutsEligiRoot>
      <Content111>
        <TopbarGeneral1
          topbarGeneralHeight="90px"
          integrationAPI="/integrationapi@2x.png"
          iconAddAccount="/iconadd-account.svg"
        />
        <Wrapping1>
          <SidebarWizard
            sidebarWizardAlignSelf="stretch"
            sidebarWizardHeight="unset"
            icon="/icon-3.svg"
            lineBackgroundColor="#2f2e2c"
            icon1="/icon-12.svg"
            recoverPasswordColor="#2f2e2c"
            lineBackgroundColor1="#f1eee9"
            onHugTextContainerClick={onHugTextContainerClick}
            icon2="/icon-22.svg"
            recoverPasswordColor1="#cfc5b5"
            lineBackgroundColor2="#f1eee9"
            onHugTextContainerClick1={onHugTextContainerClick1}
            hugTextWidth="48px"
            hugTextAlignSelf="unset"
            icon3="/icon-31.svg"
            icon4="/icon-4@2x.png"
            icon5="/icon-8.svg"
            icon6="/icon-9.svg"
            icon7="/icon-10.svg"
            icon8="/icon-11.svg"
          />
          <Wrapped1>
            <Headline>
              <Title1>
                <Tooltip>
                  <Title>Requirements for Payout Eligibility</Title>
                  <Iconinfo loading="lazy" alt="" src="/iconinfo1.svg" />
                </Tooltip>
                <Link>
                  Define which recipient information must be completed and saved
                  before any payments can be issued.
                </Link>
              </Title1>
              <TooltipBtn>
                <TextBtn28px>Restore Default</TextBtn28px>
              </TooltipBtn>
            </Headline>
            <Scroll>
              <AccountProfile>
                <Title11>
                  <Tooltip1>
                    <Text>Account Profile</Text>
                    <Iconinfo1 loading="lazy" alt="" src="/iconinfo1.svg" />
                  </Tooltip1>
                  <Enable11>
                    <Off1>
                      <Subtitle>Disable</Subtitle>
                    </Off1>
                    <On1>
                      <Subtitle>Enable</Subtitle>
                    </On1>
                  </Enable11>
                  <ButtonIcon loading="lazy" alt="" src="/button1.svg" />
                </Title11>
                <Content1>
                  <Columns>
                    <TotalBalanceFromContainer>
                      <Optional>{`Optional  `}</Optional>
                      <Span>|</Span>
                      <Optional> Required</Optional>
                    </TotalBalanceFromContainer>
                  </Columns>
                  <ContentToggles
                    text="Account Information"
                    totalBalanceFromA="Basic account details must be completed under the recipient before any payments can be issued."
                  />
                  <ContentToggles
                    text="Contact Information"
                    totalBalanceFromA="Valid contact details must be saved under the recipient before any payments can be issued."
                  />
                  <ContentToggles
                    text="Account Address"
                    totalBalanceFromA="A valid address must be provided under the recipient before any payments can be issued."
                  />
                </Content1>
              </AccountProfile>
              <AccountProfile>
                <Title11>
                  <Tooltip11>
                    <Text>Payment Method</Text>
                    <Iconinfo1 loading="lazy" alt="" src="/iconinfo1.svg" />
                  </Tooltip11>
                  <Enable111>
                    <Off1>
                      <Subtitle1>Disable</Subtitle1>
                    </Off1>
                    <On11>
                      <Subtitle11>Enable</Subtitle11>
                    </On11>
                  </Enable111>
                  <ButtonIcon loading="lazy" alt="" src="/button1.svg" />
                </Title11>
                <Content11>
                  <Columns1>
                    <TotalBalanceFromContainer>
                      <Optional>{`Optional  `}</Optional>
                      <Span>|</Span>
                      <Optional> Required</Optional>
                    </TotalBalanceFromContainer>
                  </Columns1>
                  <RequiredOptionalSectionCo>
                    <TitleToogle>
                      <Tooltip>
                        <Text1>Payment Method Details</Text1>
                        <Iconinfo1 loading="lazy" alt="" src="/iconinfo1.svg" />
                      </Tooltip>
                      <TotalBalanceFrom>
                        A payout method must be saved under the recipient before
                        any payments can be issued.
                      </TotalBalanceFrom>
                    </TitleToogle>
                    <Off11>
                      <OffChild />
                    </Off11>
                  </RequiredOptionalSectionCo>
                </Content11>
              </AccountProfile>
              <AccountProfile>
                <Title11>
                  <Tooltip111>
                    <Text>Tax Submission</Text>
                    <Iconinfo1 loading="lazy" alt="" src="/iconinfo1.svg" />
                  </Tooltip111>
                  <Enable111>
                    <Off1>
                      <Subtitle1>Disable</Subtitle1>
                    </Off1>
                    <On11>
                      <Subtitle11>Enable</Subtitle11>
                    </On11>
                  </Enable111>
                  <ButtonIcon loading="lazy" alt="" src="/button1.svg" />
                </Title11>
                <Content1>
                  <Columns1>
                    <TotalBalanceFromContainer>
                      <Optional>{`Optional  `}</Optional>
                      <Span>|</Span>
                      <Optional> Required</Optional>
                    </TotalBalanceFromContainer>
                  </Columns1>
                  <RequiredOptionalSectionCo>
                    <TitleToogle>
                      <Tooltip>
                        <Text1>Tax Documentation</Text1>
                        <Iconinfo1 loading="lazy" alt="" src="/iconinfo1.svg" />
                      </Tooltip>
                      <TotalBalanceFrom1>
                        Valid tax documentation must be submitted under the
                        recipient before any payments can be issued.
                      </TotalBalanceFrom1>
                    </TitleToogle>
                    <On111>
                      <OnChild />
                    </On111>
                  </RequiredOptionalSectionCo>
                </Content1>
              </AccountProfile>
              <Separator />
            </Scroll>
            <ActionBtn>
              <ResetIcon loading="lazy" alt="" src="/reset.svg" />
              <R>
                <Back1>
                  <UploadDataSource>Back</UploadDataSource>
                </Back1>
                <Next1 onClick={onHugTextContainerClick1}>
                  <UploadDataSource1>{`Save & Continue`}</UploadDataSource1>
                </Next1>
              </R>
            </ActionBtn>
          </Wrapped1>
        </Wrapping1>
      </Content111>
    </ApiConnectionPayoutsEligiRoot>
  );
};

export default APIConnectionPayoutsEligibility;
