import { FunctionComponent } from "react";
import styled from "styled-components";

export type AVATARType = {
  className?: string;
  aVATARText?: string;

  /** Variant props */
  avatarVariants?: string;
};

const Js = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  letter-spacing: 0.29px;
  line-height: 22.9px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AvatarRoot = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 1141.7px;
  background-color: var(--Toolbar-icons-T-Back-default);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 9.1px;
  box-sizing: border-box;
  z-index: 0;
  text-align: center;
  font-size: var(--font-size-14);
  color: var(--Default-290-Stoke);
  font-family: Inter;
`;

const AVATAR: FunctionComponent<AVATARType> = ({
  className = "",
  avatarVariants = "avatar icon",
  aVATARText = "AC",
}) => {
  return (
    <AvatarRoot data-avatarVariants={avatarVariants} className={className}>
      <Js>{aVATARText}</Js>
    </AvatarRoot>
  );
};

export default AVATAR;
