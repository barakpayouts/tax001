import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { UseFormRegisterReturn } from 'react-hook-form';

interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  register?: UseFormRegisterReturn;
  error?: string;
}

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-12);
`;

const RadioOption = styled.label<{ $disabled?: boolean; $hasError?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-12);
  padding: var(--padding-16);
  border-radius: var(--br-12);
  border: 1px solid ${({ $hasError }) => 
    $hasError ? 'var(--Items-Error-default-Items-170-Text-Error-default)' : 'var(--Disabled-Default-310-CB-RB-stroke)'};
  background-color: var(--Tooltip-190-Tooltip-fill);
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease-in-out;
  opacity: ${({ $disabled }) => $disabled ? 0.6 : 1};

  &:hover {
    ${({ $disabled, $hasError }) => !$disabled && `
      border-color: ${$hasError ? 'var(--Items-Error-default-Items-170-Text-Error-default)' : 'var(--Toggles-Active-310-toogle-active-stroke)'};
      background-color: var(--Active-Checked-hover-310-CB-RB-V);
    `}
  }

  &:has(input:checked) {
    border-color: var(--Toggles-Active-310-toogle-active-stroke);
    background-color: var(--Active-Checked-hover-310-CB-RB-V);
  }

  &:has(input:focus-visible) {
    outline: 2px solid var(--Toggles-Active-310-toogle-active-stroke);
    outline-offset: 2px;
  }
`;

const RadioInput = styled.input`
  appearance: none;
  width: var(--Height-Width-CB-RB);
  height: var(--Height-Width-CB-RB);
  border-radius: var(--Radius-RB);
  border: var(--Stroke-CB-RB) solid var(--Disabled-Default-310-CB-RB-stroke);
  background-color: var(--Default-310-CB-RB-fill);
  position: relative;
  margin: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:checked {
    border-color: var(--Toggles-Active-310-toogle-active-stroke);
    background-color: var(--Active-Checked-Undertemined-310-CB-RB-fill);
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--Tooltip-190-Tooltip-fill);
  }

  &:disabled {
    cursor: not-allowed;
    border-color: var(--Disabled-Default-310-CB-RB-stroke);
    background-color: var(--Disabled-Default-310-CB-RB-fill);
  }

  &:focus-visible {
    outline: none; // Handled by parent label
  }
`;

const RadioContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--gap-4);
`;

const RadioLabel = styled.div<{ $disabled?: boolean }>`
  font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
  font-weight: var(--Paragraph-14-Paragraph-bold-Font-Weight);
  line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
  color: ${({ $disabled }) => 
    $disabled ? 'var(--Disabled-Default-310-Subtitle)' : 'var(--Active-Checked-Undertemined-310-Title)'};
  font-family: var(--Inter);
`;

const RadioDescription = styled.div<{ $disabled?: boolean }>`
  font-size: var(--Others-12-Paragraph-regular-Font-Size);
  line-height: var(--Others-12-Paragraph-regular-Font-Line-Height);
  color: ${({ $disabled }) => 
    $disabled ? 'var(--Disabled-Default-310-Subtitle)' : 'var(--Default-310-Subtitle)'};
  font-family: var(--Inter);
`;

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  disabled,
  register,
  error,
}) => {
  return (
    <RadioContainer role="radiogroup" aria-label={name}>
      {options.map((option, index) => (
        <motion.div
          key={option.value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <RadioOption 
            $disabled={disabled || option.disabled}
            $hasError={!!error}
          >
            <RadioInput
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange?.(e.target.value)}
              disabled={disabled || option.disabled}
              aria-describedby={option.description ? `${name}-${option.value}-desc` : undefined}
              {...register}
            />
            <RadioContent>
              <RadioLabel $disabled={disabled || option.disabled}>
                {option.label}
              </RadioLabel>
              {option.description && (
                <RadioDescription 
                  id={`${name}-${option.value}-desc`}
                  $disabled={disabled || option.disabled}
                >
                  {option.description}
                </RadioDescription>
              )}
            </RadioContent>
          </RadioOption>
        </motion.div>
      ))}
    </RadioContainer>
  );
};

export default RadioGroup;