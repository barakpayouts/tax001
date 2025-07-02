import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface FormFieldProps {
  label: string;
  error?: string;
  helpText?: string;
  required?: boolean;
  children: React.ReactNode;
  id: string;
}

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-8);
  margin-bottom: var(--gap-16);
`;

const Label = styled.label<{ $required?: boolean; $hasError?: boolean }>`
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  font-weight: var(--Paragraph-14-Paragraph-bold-Font-Weight);
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
  color: ${({ $hasError }) => 
    $hasError ? 'var(--Items-Error-default-Items-170-Text-Error-default)' : 'var(--Default-290-Text)'};
  font-family: var(--Inter);
  
  ${({ $required }) => $required && `
    &::after {
      content: ' *';
      color: var(--Items-Error-default-Items-170-Text-Error-default);
    }
  `}
`;

const HelpText = styled.div`
  font-size: var(--Others-12-Paragraph-regular-Font-Size);
  line-height: var(--Others-12-Paragraph-regular-Font-Line-Height);
  color: var(--Default-310-Subtitle);
  font-family: var(--Inter);
`;

const ErrorMessage = styled(motion.div)`
  font-size: var(--Others-12-Paragraph-regular-Font-Size);
  line-height: var(--Others-12-Paragraph-regular-Font-Line-Height);
  color: var(--Items-Error-default-Items-170-Text-Error-default);
  font-family: var(--Inter);
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  
  &::before {
    content: '⚠';
    font-size: 12px;
  }
`;

const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  helpText,
  required,
  children,
  id,
}) => {
  return (
    <FieldContainer>
      <Label htmlFor={id} $required={required} $hasError={!!error}>
        {label}
      </Label>
      
      {children}
      
      {helpText && !error && (
        <HelpText>{helpText}</HelpText>
      )}
      
      <AnimatePresence>
        {error && (
          <ErrorMessage
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </ErrorMessage>
        )}
      </AnimatePresence>
    </FieldContainer>
  );
};

export default FormField;