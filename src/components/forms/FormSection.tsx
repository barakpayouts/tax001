import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  collapsible?: boolean;
  defaultExpanded?: boolean;
}

const SectionContainer = styled(motion.section)`
  border-radius: var(--br-12);
  background-color: var(--Tooltip-190-Tooltip-fill);
  border: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  overflow: hidden;
  margin-bottom: var(--gap-16);
`;

const SectionHeader = styled.div<{ $collapsible?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-24);
  border-bottom: 1px solid var(--Disabled-Default-310-CB-RB-stroke);
  cursor: ${({ $collapsible }) => $collapsible ? 'pointer' : 'default'};
  transition: background-color 0.2s ease-in-out;
  
  ${({ $collapsible }) => $collapsible && `
    &:hover {
      background-color: var(--Active-Checked-hover-310-CB-RB-V);
    }
  `}
`;

const SectionHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-12);
  flex: 1;
`;

const SectionIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: var(--br-6);
  background-color: var(--Active-Checked-Undertemined-310-Fill);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--Active-Checked-Undertemined-310-Title);
  font-size: 14px;
  flex-shrink: 0;
`;

const SectionTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-4);
`;

const SectionTitle = styled.h3`
  margin: 0;
  font-size: var(--Headline-16-Headline-bold-Font-Size);
  font-weight: var(--Headline-16-Headline-bold-Font-Weight);
  line-height: var(--Headline-16-Headline-bold-Font-Line-Height);
  color: var(--Default-290-Text);
  font-family: var(--Inter);
`;

const SectionDescription = styled.p`
  margin: 0;
  font-size: var(--Others-12-Paragraph-regular-Font-Size);
  line-height: var(--Others-12-Paragraph-regular-Font-Line-Height);
  color: var(--Default-310-Subtitle);
  font-family: var(--Inter);
`;

const CollapseIcon = styled(motion.div)`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--br-4);
  background-color: var(--Inactive-390-Fill);
  color: var(--Default-290-Text);
  font-size: 12px;
  font-weight: bold;
`;

const SectionContent = styled(motion.div)`
  padding: var(--padding-24);
  display: flex;
  flex-direction: column;
  gap: var(--gap-16);
`;

const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  children,
  icon,
  collapsible = false,
  defaultExpanded = true,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);

  const toggleExpanded = () => {
    if (collapsible) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <SectionContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SectionHeader 
        $collapsible={collapsible}
        onClick={toggleExpanded}
        role={collapsible ? 'button' : undefined}
        aria-expanded={collapsible ? isExpanded : undefined}
        tabIndex={collapsible ? 0 : undefined}
        onKeyDown={collapsible ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleExpanded();
          }
        } : undefined}
      >
        <SectionHeaderContent>
          {icon && (
            <SectionIcon>
              {icon}
            </SectionIcon>
          )}
          
          <SectionTitleGroup>
            <SectionTitle>{title}</SectionTitle>
            {description && (
              <SectionDescription>{description}</SectionDescription>
            )}
          </SectionTitleGroup>
        </SectionHeaderContent>
        
        {collapsible && (
          <CollapseIcon
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ▼
          </CollapseIcon>
        )}
      </SectionHeader>
      
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
      >
        <SectionContent>
          {children}
        </SectionContent>
      </motion.div>
    </SectionContainer>
  );
};

export default FormSection;