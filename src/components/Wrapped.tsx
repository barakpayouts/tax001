import { FunctionComponent } from "react";
import styled from "styled-components";
import TooltipButtonRestore from "./TooltipButtonRestore";
import OnOffSwitch1 from "./OnOffSwitch1";
import TooltipIcon from "./TooltipIcon";
import RecipientPaymentTermsComp from "./RecipientPaymentTermsComp";
import PayoutCycleConfigurationCom from "./PayoutCycleConfigurationCom";
import ApproveInvoiceEditAdvanc from "./ApproveInvoiceEditAdvanc";
import LabelButton from "./LabelButton";
import GenericInteractiveBtnsText from "./GenericInteractiveBtnsText";

export type WrappedType = {
  className?: string;
};

const Title = styled.h3`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  line-height: var(--Paragraph-20-Paragraph-bold-Font-Line-Height);
  font-weight: var(--Paragraph-20-Paragraph-bold-Font-Weight);
  font-family: inherit;
  display: inline-block;
  min-width: 131px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-16);
    line-height: 22px;
  }
`;
const Title1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-12);
  z-index: 2;
  @media screen and (max-width: 1325px) {
    flex-wrap: wrap;
  }
`;
const Link = styled.b`
  align-self: stretch;
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
`;
const Link1 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--Others-12-Button-medium-Font-Size);
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
`;
const Title11 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-2);
  min-width: 519px;
  @media screen and (max-width: 900px) {
    min-width: 100%;
  }
`;
const Text = styled.b`
  flex: 1;
  position: relative;
  line-height: var(--Headline-12-Headline-bold-Font-Line-Height);
`;
const Toogle = styled.div`
  width: 260px;
  border-radius: var(--br-10);
  background-color: var(--Default-290-Text);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-12);
  box-sizing: border-box;
  gap: var(--gap-8);
  font-size: var(--Headline-12-Headline-bold-Font-Size);
  color: var(--Default-290-Stoke);
`;
const Headline = styled.div`
  align-self: stretch;
  border-radius: 0px 0px var(--br-12) var(--br-12);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-16);
  z-index: 1;
  @media screen and (max-width: 1325px) {
    flex-wrap: wrap;
  }
`;
const List1 = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8);
  z-index: 0;
  text-align: left;
  font-size: var(--font-size-16);
  color: var(--Toggles-Active-310-toogle-active-stroke);
  font-family: Inter;
`;
const OnDemand = styled.div`
  align-self: stretch;
  border-radius: var(--br-12);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-22) 23px;
  gap: var(--gap-16);
  z-index: 1;
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-20);
    padding-bottom: var(--padding-20);
    box-sizing: border-box;
  }
`;
const Separator = styled.div`
  align-self: stretch;
  height: 1px;
  flex-shrink: 0;
  z-index: 0;
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
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
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
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const WrappedRoot = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: var(--br-12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-16);
  text-align: left;
  font-size: var(--Paragraph-20-Paragraph-bold-Font-Size);
  color: var(--Current-390-Line);
  font-family: var(--Inter);
  @media screen and (max-width: 900px) {
    min-width: 100%;
  }
`;

const Wrapped: FunctionComponent<WrappedType> = ({ className = "" }) => {
  return (
    <WrappedRoot className={className}>
      <Title1>
        <Title>Payouts Settings</Title>
        <TooltipButtonRestore
          state="off"
          editText={`Restore <section_title> default Setting.`}
          size="28px"
          state1="default"
          type="sub action"
          editBtnText="Restore Default"
          editBadgeText="28"
          upload="/upload.svg"
          iconarrowRight="/arrow-2.svg"
          showBadge={false}
          showLIcon={false}
          showRIcon={false}
          showBtnText
          showTooltipBtn
        />
      </Title1>
      <Scroll>
        <OnDemand>
          <Headline>
            <Title11>
              <Link>On-Demand Payouts</Link>
              <Link1>
                When enabled, all payouts will be executed on demand - payout
                approval permissions, and payout cycle settings will be
                disabled.
              </Link1>
            </Title11>
            <Toogle>
              <OnOffSwitch1 state="default" switch1="ON" />
              <Text>On-Demand Mode Enabled</Text>
              <TooltipIcon
                hoverClick="off"
                iconSize="20px"
                orientation="tooltip ⬇️⬅️"
                state="default"
                editInfoText={`This mode overrides scheduled payout logic and manual approval settings,
allowing payouts to be executed immediately once approved and due.`}
                showTooltipIcon
                iconHelp="/iconhelp.svg"
              />
            </Toogle>
          </Headline>
          <List1>
            <RecipientPaymentTermsComp
              state="disable"
              disableTooltip={`If disabled, recipient payment terms will not apply - payout or invoice due dates will default to the issue date.
Payouts will be executed on the due date once approved, based on your payout cycle settings.`}
              title="Recipient Payment Terms"
              state1="default"
              switch1="off"
              type="active type"
              editOffText="Disable"
              editONText="Enable"
              align="none ⛔"
              iconWithLabel="off"
              orientation="none ⛔"
              size="28px"
              type1="disable no border"
              disableHeight="28px"
              disableWidth="28px"
            />
            <PayoutCycleConfigurationCom
              type="disable"
              disableTooltip="If disabled, payment cycle settings will not apply payouts or invoices will default to their due dates. Payouts will be executed once approved."
              title="Payout Cycle Configuration"
              state="default"
              switch1="off"
              type1="active type"
              editOffText="Disable"
              editONText="Enable"
              align="none ⛔"
              iconWithLabel="off"
              orientation="none ⛔"
              size="28px"
              type2="disable no border"
            />
            <ApproveInvoiceEditAdvanc
              type="authorized disable"
              title="Who can Approve Payouts?"
              tooltipText={`If disabled, payouts will be automatically approved and executed on their due date, according to your payout cycle settings. No manual approval required.
If a payout requires approval for any reason, any user with payout approval permissions will be able to approve it.`}
              state="default"
              switch1="off"
              type1="active type"
              editOffText="Disable"
              editONText="Enable"
              disableAlign="none ⛔"
              labelButtonAlign="none ⛔"
              disableIconWithLabel="off"
              labelButtonIconWith="off"
              disableOrientation="none ⛔"
              labelButtonOrientation="none ⛔"
              disableSize="28px"
              labelButtonSize="40px"
              disableType="disable no border"
              labelButtonType="disable"
              labelButtonDisableHeight="40px"
              labelButtonDisableWidth="40px"
              tooltipiconpendingHoverClick="off"
              tooltipiconpendingHoverClick1="off"
              tooltipiconpendingHoverClick2="off"
              tooltipiconpendingHoverClick3="off"
              tooltipiconpendingHoverClick4="off"
              tooltipiconpendingHoverClick5="off"
              tooltipiconpendingHoverClick6="off"
              tooltipiconpendingHoverClick7="off"
              tooltipiconpendingHoverClick8="off"
              tooltipiconpendingHoverClick9="off"
              tooltipiconpendingHoverClick10="off"
              tooltipiconpendingHoverClick11="off"
              tooltipiconpendingHoverClick12="off"
              tooltipiconpendingHoverClick13="off"
              tooltipiconpendingHoverClick14="off"
              tooltipiconpendingHoverClick15="off"
              tooltipiconpendingHoverClick16="off"
              tooltipiconpendingHoverClick17="off"
              tooltipiconpendingHoverClick18="off"
              tooltipiconpendingHoverClick19="off"
              tooltipiconpendingHoverClick20="off"
              tooltipiconpendingHoverClick21="off"
              tooltipiconpendingHoverClick22="off"
              tooltipiconpendingHoverClick23="off"
              tooltipiconpendingHoverClick24="off"
              tooltipiconpendingHoverClick25="off"
              tooltipiconpendingHoverClick26="off"
              tooltipiconpendingHoverClick27="off"
              tooltipiconpendingHoverClick28="off"
              tooltipiconpendingHoverClick29="off"
              tooltipIconHoverClick="off"
              tooltipiconpendingIconSize="20px"
              tooltipiconpendingIconSize1="20px"
              tooltipiconpendingIconSize2="20px"
              tooltipiconpendingIconSize3="20px"
              tooltipiconpendingIconSize4="20px"
              tooltipiconpendingIconSize5="20px"
              tooltipiconpendingIconSize6="20px"
              tooltipiconpendingIconSize7="20px"
              tooltipiconpendingIconSize8="20px"
              tooltipiconpendingIconSize9="20px"
              tooltipiconpendingIconSize10="20px"
              tooltipiconpendingIconSize11="20px"
              tooltipiconpendingIconSize12="20px"
              tooltipiconpendingIconSize13="20px"
              tooltipiconpendingIconSize14="20px"
              tooltipiconpendingIconSize15="20px"
              tooltipiconpendingIconSize16="20px"
              tooltipiconpendingIconSize17="20px"
              tooltipiconpendingIconSize18="20px"
              tooltipiconpendingIconSize19="20px"
              tooltipiconpendingIconSize20="20px"
              tooltipiconpendingIconSize21="20px"
              tooltipiconpendingIconSize22="20px"
              tooltipiconpendingIconSize23="20px"
              tooltipiconpendingIconSize24="20px"
              tooltipiconpendingIconSize25="20px"
              tooltipiconpendingIconSize26="20px"
              tooltipiconpendingIconSize27="20px"
              tooltipiconpendingIconSize28="20px"
              tooltipiconpendingIconSize29="20px"
              tooltipIconSize="20px"
              tooltipiconpendingOrientation="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation1="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation2="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation3="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation4="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation5="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation6="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation7="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation8="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation9="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation10="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation11="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation12="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation13="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation14="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation15="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation16="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation17="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation18="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation19="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation20="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation21="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation22="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation23="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation24="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation25="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation26="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation27="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation28="tooltip ⬆️⬆️"
              tooltipiconpendingOrientation29="tooltip ⬆️⬆️"
              tooltipIconOrientation="tooltip ⬆️⬆️"
              tooltipiconpendingState="default"
              tooltipiconpendingState1="default"
              tooltipiconpendingState2="default"
              tooltipiconpendingState3="default"
              tooltipiconpendingState4="default"
              tooltipiconpendingState5="default"
              tooltipiconpendingState6="default"
              tooltipiconpendingState7="default"
              tooltipiconpendingState8="default"
              tooltipiconpendingState9="default"
              tooltipiconpendingState10="default"
              tooltipiconpendingState11="default"
              tooltipiconpendingState12="default"
              tooltipiconpendingState13="default"
              tooltipiconpendingState14="default"
              tooltipiconpendingState15="default"
              tooltipiconpendingState16="default"
              tooltipiconpendingState17="default"
              tooltipiconpendingState18="default"
              tooltipiconpendingState19="default"
              tooltipiconpendingState20="default"
              tooltipiconpendingState21="default"
              tooltipiconpendingState22="default"
              tooltipiconpendingState23="default"
              tooltipiconpendingState24="default"
              tooltipiconpendingState25="default"
              tooltipiconpendingState26="default"
              tooltipiconpendingState27="default"
              tooltipiconpendingState28="default"
              tooltipiconpendingState29="default"
              tooltipIconState="default"
              tooltipiconpendingShowTooltip
              tooltipiconpendingShowTooltip1
              tooltipiconpendingShowTooltip2
              tooltipiconpendingShowTooltip3
              tooltipiconpendingShowTooltip4
              tooltipiconpendingShowTooltip5
              tooltipiconpendingShowTooltip6
              tooltipiconpendingShowTooltip7
              tooltipiconpendingShowTooltip8
              tooltipiconpendingShowTooltip9
              tooltipiconpendingShowTooltip10
              tooltipiconpendingShowTooltip11
              tooltipiconpendingShowTooltip12
              tooltipiconpendingShowTooltip13
              tooltipiconpendingShowTooltip14
              tooltipiconpendingShowTooltip15
              tooltipiconpendingShowTooltip16
              tooltipiconpendingShowTooltip17
              tooltipiconpendingShowTooltip18
              tooltipiconpendingShowTooltip19
              tooltipiconpendingShowTooltip20
              tooltipiconpendingShowTooltip21
              tooltipiconpendingShowTooltip22
              tooltipiconpendingShowTooltip23
              tooltipiconpendingShowTooltip24
              tooltipiconpendingShowTooltip25
              tooltipiconpendingShowTooltip26
              tooltipiconpendingShowTooltip27
              tooltipiconpendingShowTooltip28
              tooltipiconpendingShowTooltip29
              tooltipIconShow={false}
              size="28px"
              state1="default"
              type2="sub action"
              editBtnText="Create Workflow"
              editBadgeText="28"
              upload="/upload.svg"
              iconarrowRight="/arrow-2.svg"
              showBadge={false}
              showLIcon={false}
              showRIcon={false}
              showBtnText
              showTooltipBtn={false}
              tooltipBtnHeight="28px"
              tooltipBtnWidth="unset"
              tooltipiconpendingEditInfo="tooltip demo message"
              tooltipiconpendingEditInfo1="tooltip demo message"
              tooltipiconpendingEditInfo2="tooltip demo message"
              tooltipiconpendingEditInfo3="tooltip demo message"
              tooltipiconpendingEditInfo4="tooltip demo message"
              tooltipiconpendingEditInfo5="tooltip demo message"
              tooltipiconpendingEditInfo6="tooltip demo message"
              tooltipiconpendingEditInfo7="tooltip demo message"
              tooltipiconpendingEditInfo8="tooltip demo message"
              tooltipiconpendingEditInfo9="tooltip demo message"
              tooltipiconpendingEditInfo10="tooltip demo message"
              tooltipiconpendingEditInfo11="tooltip demo message"
              tooltipiconpendingEditInfo12="tooltip demo message"
              tooltipiconpendingEditInfo13="tooltip demo message"
              tooltipiconpendingEditInfo14="tooltip demo message"
              tooltipiconpendingEditInfo15="tooltip demo message"
              tooltipiconpendingEditInfo16="tooltip demo message"
              tooltipiconpendingEditInfo17="tooltip demo message"
              tooltipiconpendingEditInfo18="tooltip demo message"
              tooltipiconpendingEditInfo19="tooltip demo message"
              tooltipiconpendingEditInfo20="tooltip demo message"
              tooltipiconpendingEditInfo21="tooltip demo message"
              tooltipiconpendingEditInfo22="tooltip demo message"
              tooltipiconpendingEditInfo23="tooltip demo message"
              tooltipiconpendingEditInfo24="tooltip demo message"
              tooltipiconpendingEditInfo25="tooltip demo message"
              tooltipiconpendingEditInfo26="tooltip demo message"
              tooltipiconpendingEditInfo27="tooltip demo message"
              tooltipiconpendingEditInfo28="tooltip demo message"
              tooltipiconpendingEditInfo29="tooltip demo message"
            />
          </List1>
        </OnDemand>
        <Separator />
      </Scroll>
      <ActionBtn>
        <LabelButton button="/button-4.svg" />
        <R>
          <GenericInteractiveBtnsText
            size="40px"
            state="default"
            type="sub action"
            showBadge={false}
            showLIcon={false}
            showRIcon={false}
            editBtnText="Back"
            editBadgeText="28"
            showBtnText
            showTooltipBtn
            tooltipBtnHeight="40px"
            tooltipBtnWidth="unset"
            upload="/upload1.svg"
            iconarrowRight="/iconarrow-right1.svg"
          />
          <GenericInteractiveBtnsText
            size="40px"
            state="default"
            type="action"
            showBadge={false}
            showLIcon={false}
            showRIcon={false}
            editBtnText={`Save & Continue`}
            editBadgeText="28"
            showBtnText
            showTooltipBtn
            tooltipBtnHeight="40px"
            tooltipBtnWidth="160px"
            upload="/upload2.svg"
            iconarrowRight="/iconarrow-right2.svg"
          />
        </R>
      </ActionBtn>
    </WrappedRoot>
  );
};

export default Wrapped;
