import { FunctionComponent } from "react";
import styled from "styled-components";

export type IntegrationAPIType = {
  className?: string;
};

const Api = styled.b`
  position: relative;
  line-height: 16.6px;
  display: none;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--Default-290-Stoke);
  border: 0px solid var(--Inactive-390-Line);
  box-sizing: border-box;
  width: 60px;
  height: 60px;
`;
const ApiIcon = styled.img`
  position: absolute;
  top: 21.6px;
  left: 9.8px;
  width: 39.6px;
  height: 16.8px;
`;
const EllipseParent = styled.div`
  height: 60px;
  width: 60px;
  position: relative;
`;
const IntegrationapiRoot = styled.div`
  height: 60px;
  width: 60px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  font-size: var(--font-size-24);
  color: var(--color-mediumslateblue);
  font-family: var(--font-inika);
`;

const IntegrationAPI: FunctionComponent<IntegrationAPIType> = ({
  className = "",
}) => {
  return (
    <IntegrationapiRoot className={className}>
      <Api>API</Api>
      <EllipseParent>
        <FrameChild />
        <ApiIcon loading="lazy" alt="" src="/api.svg" />
      </EllipseParent>
    </IntegrationapiRoot>
  );
};

export default IntegrationAPI;
