import { FunctionComponent } from "react";
import styled from "styled-components";

export type NotesTypesType = {
  className?: string;
  alert1?: string;
};

const AlertIcon = styled.img`
  width: 16px;
  position: relative;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
`;
const ImportantDisclaimer = styled.p`
  margin: 0;
  line-height: 20px;
`;
const WhilePayoutscomStrives = styled.p`
  margin: 0;
  font-size: var(--font-size-12);
  line-height: 16px;
`;
const LinkTxt = styled.span``;
const Link = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  min-width: 662px;
  @media screen and (max-width: 900px) {
    min-width: 100%;
  }
`;
const IconText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
  @media screen and (max-width: 1725px) {
    flex-wrap: wrap;
  }
`;
const NotesTypesRoot = styled.div`
  width: 100%;
  position: relative;
  border-radius: var(--Notes-240-N-Radius);
  background-color: var(--Notes-Statuses-Note-Alert-250-Fill-notes-statuses);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--Notes-240-N-V-padding);
  box-sizing: border-box;
  text-align: left;
  font-size: var(--font-size-14);
  color: var(--Notes-Statuses-Note-Alert-250-Text-notes-statuses);
  font-family: Inter;
`;

const NotesTypes: FunctionComponent<NotesTypesType> = ({
  className = "",
  alert1,
}) => {
  return (
    <NotesTypesRoot className={className}>
      <IconText>
        <AlertIcon alt="" src={alert1} />
        <Link>
          <LinkTxt>
            <ImportantDisclaimer>Important Disclaimer:</ImportantDisclaimer>
            <WhilePayoutscomStrives>
              While Payouts.com strives to provide best-practice recommendations
              for VAT, Sales Tax, and GST calculations, the ultimate
              responsibility for tax compliance lies with the client. We
              strongly recommend consulting a qualified tax professional to
              ensure your specific business activities and invoicing practices
              align with current regulations.
            </WhilePayoutscomStrives>
          </LinkTxt>
        </Link>
      </IconText>
    </NotesTypesRoot>
  );
};

export default NotesTypes;
