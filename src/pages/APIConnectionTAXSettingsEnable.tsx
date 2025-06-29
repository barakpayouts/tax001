import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import Wizard from "../components/Wizard";
import styled from "styled-components";
import CBRBSelector from "../components/CBRBSelector";
import CBRBSelector1 from "../components/CBRBSelector1";
import ManuallyReview from "../components/ManuallyReview";
import AutomaticallyApprove from "../components/AutomaticallyApprove";
import TaxFormCollectionRule from "../components/TaxFormCollectionRule";
import ReportingPreferences from "../components/ReportingPreferences";
import { useNavigate } from "react-router-dom";

const SidebarWizard1 = styled.div`
  align-self: stretch;
  width: 334px;
  border-radius: var(--br-12);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const Title = styled.h3`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  line-height: var(--Paragraph-20-Paragraph-bold-Font-Line-Height);
  font-weight: var(--Paragraph-20-Paragraph-bold-Font-Weight);
  font-family: inherit;
  display: inline-block;
  min-width: 101px;
  @media screen and (max-width: 1325px) {
    font-size: var(--font-size-16);
    line-height: 22px;
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
const TooltipBtn = styled.div`
  height: 28px;
  border-radius: var(--br-6);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Toggles-Active-310-toogle-active-stroke);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-2) var(--padding-11);
  z-index: 0;
`;
const TooltipButtonRestore1 = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-12);
  z-index: 2;
  @media screen and (max-width: 1725px) {
    flex-wrap: wrap;
  }
`;
const HintMessage = styled.b`
  flex: 1;
  position: relative;
  line-height: var(--Headline-16-Headline-bold-Font-Line-Height);
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
  gap: var(--gap-8);
`;
const Content1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-24);
  gap: var(--gap-8);
`;
const VendorTaxFormSectionComp = styled.section`
  align-self: stretch;
  border-radius: var(--br-12);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 3;
  text-align: left;
  font-size: var(--Headline-16-Headline-bold-Font-Size);
  color: var(--Default-290-Text);
  font-family: var(--Inter);
`;
const Title111 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-8);
  gap: var(--gap-8);
  z-index: 8;
`;
const Separator = styled.div`
  align-self: stretch;
  height: 1px;
  background-color: var(--Inactive-390-Line);
`;
const Spread = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-16) 0px var(--padding-12);
  z-index: 4;
`;
const Title1111 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-8);
  z-index: 3;
`;
const W9W8FormsSectionComp = styled.div`
  align-self: stretch;
  border-radius: var(--br-12);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-22) 23px;
  gap: var(--gap-8);
  z-index: 2;
  @media screen and (max-width: 900px) {
    padding-top: var(--padding-20);
    padding-bottom: var(--padding-20);
    box-sizing: border-box;
  }
`;
const RadioButton = styled.input`
  cursor: pointer;
  margin: 0;
  height: var(--Height-Width-CB-RB);
  width: var(--Height-Width-CB-RB);
  border-radius: var(--br-100);
  background-color: var(--Disabled-Default-310-CB-RB-fill);
  border: var(--Stroke-CB-RB) solid var(--Disabled-Default-310-CB-RB-stroke);
  box-sizing: border-box;
`;
const Monthly = styled.b`
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
`;
const Rbtext = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
  z-index: 1;
`;
const VendorIsNot = styled.b`
  align-self: stretch;
  flex: 1;
  position: relative;
  line-height: 140%;
`;
const Content11 = styled.div`
  align-self: stretch;
  border-radius: var(--br-8);
  background-color: var(--Tooltip-190-Tooltip-fill);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-16);
  z-index: 0;
  font-size: var(--font-size-14);
  font-family: Inter;
`;
const ApprovedTaxFormRequired = styled.div`
  align-self: stretch;
  border-radius: var(--br-12);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-14) var(--padding-15);
  gap: var(--gap-8);
`;
const RadioButton1 = styled.input`
  cursor: pointer;
  margin: 0;
  height: var(--Height-Width-CB-RB);
  width: var(--Height-Width-CB-RB);
  border-radius: var(--br-12);
  background-color: var(--Active-Checked-Undertemined-310-CB-RB-fill);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--H-padding-CB-RB);
  box-sizing: border-box;
`;
const Rbtext1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 7px;
  z-index: 1;
`;
const AllowPaymentsTo = styled.b`
  align-self: stretch;
  position: relative;
  line-height: 140%;
`;
const Cb = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-8);
`;
const Content111 = styled.div`
  align-self: stretch;
  border-radius: var(--br-8);
  background-color: var(--Tooltip-190-Tooltip-fill);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-16);
  gap: var(--gap-8);
  z-index: 0;
  font-size: var(--font-size-14);
  color: var(--Toggles-Active-310-toogle-active-text-off);
  font-family: Inter;
`;
const TaxFormNotRequired = styled.div`
  align-self: stretch;
  border-radius: var(--br-12);
  background-color: var(--Default-290-Stoke);
  border: 1px solid var(--Toggles-Active-310-toogle-active-text-off);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-14) var(--padding-15);
  gap: var(--gap-8);
  color: var(--Toolbar-icons-T-Back-default);
`;
const Content1111 = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-24);
  gap: var(--gap-8);
  text-align: left;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  color: var(--Toggles-Active-310-toogle-active-stroke);
  font-family: var(--Inter);
  @media screen and (max-width: 1325px) {
    padding-top: var(--padding-20);
    padding-bottom: var(--padding-20);
    box-sizing: border-box;
  }
`;
const TaxFormSectionComp = styled.div`
  align-self: stretch;
  border-radius: var(--br-8);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
`;
const Separator1 = styled.div`
  align-self: stretch;
  height: 1px;
  z-index: 0;
`;
const Scroll = styled.div`
  align-self: stretch;
  flex: 1;
  border-bottom: 2px solid var(--Tooltip-190-Tooltip-stroke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-16);
  z-index: 1;
  font-size: var(--Headline-16-Headline-bold-Font-Size);
  color: var(--Default-290-Text);
`;
const ButtonIcon1 = styled.img`
  height: 40px;
  width: 40px;
  border-radius: var(--br-8);
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
const ActionBtn = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0px;
  z-index: 0;
  @media screen and (max-width: 1325px) {
    flex-wrap: wrap;
  }
`;
const Wrapped1 = styled.section`
  align-self: stretch;
  flex: 1;
  border-radius: var(--br-12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-16);
  min-width: 730px;
  text-align: left;
  font-size: var(--Paragraph-20-Paragraph-bold-Font-Size);
  color: var(--Current-390-Line);
  font-family: var(--Inter);
  @media screen and (max-width: 900px) {
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
  @media screen and (max-width: 450px) {
    gap: var(--gap-16);
  }
`;
const ApiConnectionTaxSettingsRoot = styled.div`
  width: 100%;
  height: 2300px;
  position: relative;
  background-color: var(--Tooltip-190-Tooltip-fill);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-18);
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
`;

const APIConnectionTAXSettingsEnable: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackClick = useCallback(() => {
    navigate("/api-connection-self-invoice-settings-default");
  }, [navigate]);

  return (
    <ApiConnectionTaxSettingsRoot>
      <Header />
      <Wrapping1>
        <SidebarWizard1>
          <Wizard />
        </SidebarWizard1>
        <Wrapped1>
          <Title1>
            <Title>TAX Settings</Title>
            <TooltipButtonRestore1>
              <TooltipBtn>
                <TextBtn28px>Restore Default</TextBtn28px>
              </TooltipBtn>
            </TooltipButtonRestore1>
          </Title1>
          <Scroll>
            <VendorTaxFormSectionComp>
              <Title11>
                <HintMessage>
                  Select the tax forms you wish to collect from your Vendors
                </HintMessage>
                <ButtonIcon loading="lazy" alt="" src="/button2.svg" />
              </Title11>
              <Content1>
                <CBRBSelector
                  title="W-9, W-8BEN and W-8BEN-E Forms (US and International)"
                  title1="* Recommended"
                />
                <CBRBSelector1
                  title="W-9 Forms (US Only)"
                  title1="Only select this setting if you will only be using the Vendor Portal for recipients located in the United States."
                />
              </Content1>
            </VendorTaxFormSectionComp>
            <W9W8FormsSectionComp>
              <Title111>
                <HintMessage>
                  Action to take when a new W9 form is submitted
                </HintMessage>
                <ButtonIcon loading="lazy" alt="" src="/button2.svg" />
              </Title111>
              <ManuallyReview
                monthly="Manually Review and Approve"
                totalBalanceFromA="Who can approve a W9 form submission?"
              />
              <AutomaticallyApprove monthly="Automatically Approve if the TIN matches" />
              <CBRBSelector
                rBAlignItems="flex-start"
                titleMinWidth="660px"
                title="Automatically Approve"
              />
              <Spread>
                <Separator />
              </Spread>
              <Title1111>
                <HintMessage>
                  Action to take when a new W8 form is submitted
                </HintMessage>
              </Title1111>
              <AutomaticallyApprove
                headlineJustifyContent="flex-start"
                monthly="Manually review and Approve"
              />
              <ManuallyReview
                monthly="Automatically Approve claimed tax treaty benefits"
                totalBalanceFromA="Who can approve a W8 form submission?"
              />
              <CBRBSelector
                rBAlignItems="flex-start"
                titleMinWidth="660px"
                title="Automatically Approve"
              />
            </W9W8FormsSectionComp>
            <TaxFormSectionComp>
              <Title11>
                <HintMessage>
                  How would you like to handle payments to Vendors without a Tax
                  Form on file?
                </HintMessage>
                <ButtonIcon loading="lazy" alt="" src="/button2.svg" />
              </Title11>
              <Content1111>
                <ApprovedTaxFormRequired>
                  <Rbtext>
                    <RadioButton type="radio" />
                    <Monthly>Approved Tax Form Required</Monthly>
                  </Rbtext>
                  <Content11>
                    <VendorIsNot>
                      Vendor is not Payable until an approved tax form is
                      provided
                    </VendorIsNot>
                  </Content11>
                </ApprovedTaxFormRequired>
                <TaxFormNotRequired>
                  <Rbtext1>
                    <RadioButton1 type="radio" />
                    <Monthly>Tax Form Not Required</Monthly>
                  </Rbtext1>
                  <Content111>
                    <AllowPaymentsTo>
                      Allow payments to recipients with no tax form on file
                    </AllowPaymentsTo>
                    <Cb>
                      <CBRBSelector1
                        rBAlignItems="flex-start"
                        titleMinWidth="618px"
                        title="Apply Restriction"
                        title1="Apply 24.0% Backup Withholding for US Persons and 30.0% Non-Resident Alien Withholding for Non-US Persons."
                      />
                      <CBRBSelector
                        rBAlignItems="flex-start"
                        titleMinWidth="618px"
                        title="Do Not Apply Restriction"
                        title1="Do not withhold any tax amount from any payouts."
                      />
                    </Cb>
                  </Content111>
                </TaxFormNotRequired>
              </Content1111>
              </TaxFormSectionComp>
            <TaxFormCollectionRule />
            <ReportingPreferences />
            <Separator1 />
          </Scroll>
          <ActionBtn>
            <ButtonIcon1 loading="lazy" alt="" src="/button-4.svg" />
            <R>
              <Back1 onClick={onBackClick}>
                <UploadDataSource>Back</UploadDataSource>
              </Back1>
              <Next1>
                <UploadDataSource1>{`Save & Continue`}</UploadDataSource1>
              </Next1>
            </R>
          </ActionBtn>
        </Wrapped1>
      </Wrapping1>
    </ApiConnectionTaxSettingsRoot>
  );
};

export default APIConnectionTAXSettingsEnable;
