import { FunctionComponent } from "react";
import styled from "styled-components";

export type GenericSubtitleType = {
  className?: string;
  showRIcon?: boolean;
  show?: boolean;
  subtitleText?: string;
  showIntegration?: boolean;

  /** Variant props */
  state?: string;
  type?: string;
};

const Integrationicon = styled.img`
  width: 18px;
  position: relative;
  height: 18px;
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
const Icon1 = styled.img`
  width: 18.4px;
  border-radius: var(--br-4);
  height: 16px;
`;
const ArrowIcon = styled.img`
  width: 14px;
  position: relative;
  height: 14px;
  overflow: hidden;
  flex-shrink: 0;
`;
const PendingInvoicesRoot = styled.div`
  align-self: stretch;
  border-radius: var(--br-6);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-6) var(--padding-4) var(--padding-6) var(--padding-8);
  gap: var(--gap-10);
  text-align: left;
  font-size: var(--Paragraph-14-Paragraph-regular-Font-Size);
  color: var(--Default-290-Text);
  font-family: var(--Inter);
`;

const GenericSubtitle: FunctionComponent<GenericSubtitleType> = ({
  className = "",
  state = "default",
  type = "default",
  showRIcon = false,
  show = false,
  subtitleText = "Pending Invoices",
  showIntegration = false,
}) => {
  return (
    <PendingInvoicesRoot
      data-state={state}
      data-type={type}
      className={className}
    >
      <L>
        {!!showIntegration && (
          <Integrationicon alt="" src="/integrationicon.svg" />
        )}
        <Link>{subtitleText}</Link>
      </L>
      {!!show && <Icon1 alt="" src="/1.svg" />}
      {!!showRIcon && <ArrowIcon alt="" src="/arrow1.svg" />}
    </PendingInvoicesRoot>
  );
};

export default GenericSubtitle;
