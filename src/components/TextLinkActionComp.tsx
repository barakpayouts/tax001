import { FunctionComponent } from "react";
import styled from "styled-components";

export type TextLinkActionCompType = {
  className?: string;
  editText?: string;

  /** Variant props */
  state?: string;
  type?: string;
};

const Label = styled.div`
  position: relative;
  line-height: var(--Others-12-Button-medium-Font-Line-Height);
  font-weight: var(--Others-12-Button-medium-Font-Weight);
`;
const AddConditionRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--Others-12-Button-medium-Font-Size);
  color: var(--Notes-Statuses-Tag-status-250-Fill-statuses);
  font-family: var(--Inter);
`;

const TextLinkActionComp: FunctionComponent<TextLinkActionCompType> = ({
  className = "",
  state = "off",
  type = "tooltip",
  editText = "+ Add Condition",
}) => {
  return (
    <AddConditionRoot data-state={state} data-type={type} className={className}>
      <Label>{editText}</Label>
    </AddConditionRoot>
  );
};

export default TextLinkActionComp;
