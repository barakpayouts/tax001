import { FunctionComponent } from "react";
import styled from "styled-components";

export type BadgeType = {
  className?: string;
  edit?: string;

  /** Variant props */
  hight?: 14;
  mode?: string;
};

const Link = styled.b`
  position: relative;
  line-height: var(--Others-10-Bold-Bundle-titles-Font-Line-Height);
`;
const BadgeRoot = styled.div`
  border-radius: var(--Radius-badge);
  background-color: var(--Default-290-Fill);
  border: var(--Stroke-badge) solid var(--Default-290-Text);
  box-sizing: border-box;
  height: var(--Height-badge);
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--H-padding-badge);
  min-width: 14px;
  text-align: center;
  font-size: var(--Others-10-Bold-Bundle-titles-Font-Size);
  color: var(--Default-290-Text);
  font-family: var(--Inter);
`;

const Badge: FunctionComponent<BadgeType> = ({
  className = "",
  hight = 14,
  mode = "Dark",
  edit = "3",
}) => {
  return (
    <BadgeRoot data-hight={hight} data-mode={mode} className={className}>
      <Link>{edit}</Link>
    </BadgeRoot>
  );
};

export default Badge;
