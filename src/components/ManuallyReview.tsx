import { FunctionComponent } from "react";
import styled from "styled-components";

export type ManuallyReviewType = {
  className?: string;
  monthly?: string;
  totalBalanceFromA?: string;
};

const Rbtext = styled.input`
  cursor: pointer;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Monthly = styled.b`
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
`;
const Rbtext1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 7px;
`;
const WithholdTheFull = styled.li`
  margin: 0;
`;
const WithholdTheFull1 = styled.p`
  margin: 0;
`;
const WithholdTheFullTaxAmount = styled.ul`
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  padding-left: var(--padding-16);
`;
const Title = styled.div`
  align-self: stretch;
  width: 935px;
  position: relative;
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
  display: flex;
  align-items: center;
`;
const Content = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-28);
  font-size: var(--Others-12-Button-medium-Font-Size);
`;
const Headline = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8);
  z-index: 1;
`;
const TotalBalanceFrom = styled.div`
  position: relative;
`;
const Iconsearch = styled.img`
  height: 20px;
  width: var(--Icon-Input-size-Icon-left-size-H-40);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Tag = styled.div`
  flex: 1;
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
`;
const FieldContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-width: 468px;
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const XRayAnimatedIcon = styled.img`
  height: 20px;
  width: 20px;
  border-radius: var(--br-4);
`;
const IconarrowDown = styled.img`
  height: var(--Containers-Cont-Input-Arrow-size);
  width: var(--Containers-Cont-Input-Arrow-size);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-8);
`;
const Input1 = styled.div`
  height: 40px;
  flex: 1;
  border-radius: var(--Containers-Cont-Input-radius) 0px 0px
    var(--Containers-Cont-Input-radius);
  border: var(--Containers-Cont-Input-stroke) solid
    var(--Containers-Default-170-Stroke-default);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-15);
  gap: var(--Containers-Cont-Input-spacing);
  z-index: 0;
  @media screen and (max-width: 900px) {
    height: auto;
    flex-wrap: wrap;
  }
`;
const TextField = styled.div`
  align-self: stretch;
  height: var(--Containers-Cont-Input-heigh);
  border-radius: var(--br-8);
  background-color: var(--Containers-Hover-170-Fill-hover);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-1) 0px;
  box-sizing: border-box;
  z-index: 0;
  @media screen and (max-width: 900px) {
    height: auto;
  }
`;
const Selector = styled.div`
  height: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 541px;
  @media screen and (max-width: 900px) {
    height: auto;
    min-width: 100%;
  }
`;
const FieldContent1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-16) 0px 0px;
`;
const IconarrowDown1 = styled.img`
  width: var(--Containers-Cont-Input-Arrow-size);
  position: relative;
  height: var(--Containers-Cont-Input-Arrow-size);
  overflow: hidden;
  flex-shrink: 0;
`;
const Field = styled.div`
  align-self: stretch;
  height: var(--Containers-Cont-Input-heigh);
  border-radius: 0px var(--Containers-Cont-Input-radius)
    var(--Containers-Cont-Input-radius) 0px;
  background-color: var(--Containers-Default-170-Fill-Prefix-DD-default);
  border: var(--Containers-Cont-Input-stroke) solid
    var(--Containers-Default-170-Stroke-default);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px var(--padding-15);
  gap: 0px;
  z-index: 0;
`;
const DdR = styled.div`
  height: 40px;
  width: 180px;
  border-radius: 0px var(--br-8) var(--br-8) 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: -1px;
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  color: var(--Containers-Default-170-Placeholder-txt-Prefix-DD-default);
  @media screen and (max-width: 450px) {
    margin-left: 0;
  }
`;
const WhoApprovesUser = styled.div`
  align-self: stretch;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  row-gap: 20px;
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  color: var(--Containers-Hover-170-Selected-entered-txt-hover);
  font-family: var(--Inter);
  @media screen and (max-width: 1725px) {
    height: auto;
    flex-wrap: wrap;
  }
`;
const Q = styled.div`
  align-self: stretch;
  border-radius: var(--br-8);
  background-color: var(--Tooltip-190-Tooltip-fill);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-16) 13px var(--padding-16) var(--padding-16);
  gap: var(--gap-1);
  z-index: 0;
  font-size: var(--font-size-14);
  color: var(--Default-290-Text);
  font-family: Inter;
`;
const ManuallyReviewRoot = styled.section`
  align-self: stretch;
  border-radius: var(--br-12);
  background-color: var(--Current-390-Stroke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-16);
  gap: var(--gap-12);
  z-index: 7;
  text-align: left;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  color: var(--Toolbar-icons-T-Back-default);
  font-family: var(--Inter);
`;

const ManuallyReview: FunctionComponent<ManuallyReviewType> = ({
  className = "",
  monthly,
  totalBalanceFromA,
}) => {
  return (
    <ManuallyReviewRoot className={className}>
      <Headline>
        <Rbtext1>
          <Rbtext type="radio" />
          <Monthly>{monthly}</Monthly>
        </Rbtext1>
        <Content>
          <Title>
            <WithholdTheFullTaxAmount>
              <WithholdTheFull>
                Withhold the full tax amount (24%) from all payouts.
              </WithholdTheFull>
              <WithholdTheFull1>
                Require each tax form to be manually approved before any
                withholding is applied.
              </WithholdTheFull1>
            </WithholdTheFullTaxAmount>
          </Title>
        </Content>
      </Headline>
      <Q>
        <TotalBalanceFrom>{totalBalanceFromA}</TotalBalanceFrom>
        <WhoApprovesUser>
          <Selector>
            <TextField>
              <Input1>
                <Iconsearch loading="lazy" alt="" src="/iconsearch.svg" />
                <FieldContent>
                  <Tag>Ross Meyer, Maggie Buckley, Teresa Tate</Tag>
                </FieldContent>
                <Icons>
                  <XRayAnimatedIcon
                    loading="lazy"
                    alt=""
                    src="/xray-animated.svg"
                  />
                  <IconarrowDown
                    loading="lazy"
                    alt=""
                    src="/iconarrow-down-1.svg"
                  />
                </Icons>
              </Input1>
            </TextField>
          </Selector>
          <DdR>
            <Field>
              <FieldContent1>
                <Monthly>User</Monthly>
              </FieldContent1>
              <IconarrowDown1 alt="" src="/arrow-down.svg" />
            </Field>
          </DdR>
        </WhoApprovesUser>
      </Q>
    </ManuallyReviewRoot>
  );
};

export default ManuallyReview;
