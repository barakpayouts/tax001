import { FunctionComponent } from "react";
import styled from "styled-components";

export type ContentTogglesType = {
  className?: string;
  text?: string;
  totalBalanceFromA?: string;
};

const Text = styled.b`
  position: relative;
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
`;
const Iconinfo = styled.img`
  height: 16px;
  width: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
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
const TotalBalanceFrom = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  line-height: var(--Paragraph-14-Paragraph-regular-Font-Line-Height);
  color: var(--Toggles-Active-310-toogle-active-text-off);
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
const OnChild = styled.div`
  width: 12px;
  position: relative;
  border-radius: 999px;
  background-color: var(--Toggles-Active-Circule-310-toogle-circule-active-on);
  height: 12px;
`;
const On1 = styled.div`
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
const ContentTogglesRoot = styled.div`
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
  z-index: 2;
  text-align: left;
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  color: var(--Default-290-Text);
  font-family: var(--Inter);
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

const ContentToggles: FunctionComponent<ContentTogglesType> = ({
  className = "",
  text,
  totalBalanceFromA,
}) => {
  return (
    <ContentTogglesRoot className={className}>
      <TitleToogle>
        <Tooltip>
          <Text>{text}</Text>
          <Iconinfo loading="lazy" alt="" src="/iconinfo1.svg" />
        </Tooltip>
        <TotalBalanceFrom>{totalBalanceFromA}</TotalBalanceFrom>
      </TitleToogle>
      <On1>
        <OnChild />
      </On1>
    </ContentTogglesRoot>
  );
};

export default ContentToggles;
