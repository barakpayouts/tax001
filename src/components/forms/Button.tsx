import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  'aria-label'?: string;
}

const getVariantStyles = (variant: string, disabled: boolean, isLoading: boolean) => {
  const baseStyles = `
    transition: all 0.2s ease-in-out;
    cursor: ${disabled || isLoading ? 'not-allowed' : 'pointer'};
    opacity: ${disabled ? 0.6 : 1};
  `;

  switch (variant) {
    case 'primary':
      return `
        ${baseStyles}
        background-color: var(--Toolbar-icons-T-Back-default);
        color: var(--Default-290-Stoke);
        border: 1px solid var(--color-gray-200);
        
        &:hover:not(:disabled) {
          background-color: var(--color-darkslategray);
          border-color: var(--color-dimgray-100);
        }
        
        &:focus-visible {
          outline: 2px solid var(--Toggles-Active-310-toogle-active-stroke);
          outline-offset: 2px;
        }
      `;
    
    case 'secondary':
      return `
        ${baseStyles}
        background-color: var(--Tooltip-190-Tooltip-fill);
        color: var(--Default-290-Text);
        border: 1px solid var(--Toggles-Active-310-toogle-active-stroke);
        
        &:hover:not(:disabled) {
          background-color: var(--color-gainsboro-100);
          border-color: var(--color-gray-100);
        }
        
        &:focus-visible {
          outline: 2px solid var(--Toggles-Active-310-toogle-active-stroke);
          outline-offset: 2px;
        }
      `;
    
    case 'ghost':
      return `
        ${baseStyles}
        background-color: transparent;
        color: var(--Default-290-Text);
        border: 1px solid transparent;
        
        &:hover:not(:disabled) {
          background-color: var(--Active-Checked-hover-310-CB-RB-V);
          color: var(--Active-Checked-Undertemined-310-Title);
        }
        
        &:focus-visible {
          outline: 2px solid var(--Toggles-Active-310-toogle-active-stroke);
          outline-offset: 2px;
        }
      `;
    
    default:
      return baseStyles;
  }
};

const getSizeStyles = (size: string) => {
  switch (size) {
    case 'small':
      return `
        height: 32px;
        padding: var(--padding-4) var(--padding-12);
        font-size: var(--Others-12-Button-medium-Font-Size);
        line-height: var(--Others-12-Button-medium-Font-Line-Height);
      `;
    
    case 'medium':
      return `
        height: 40px;
        padding: var(--padding-6) var(--padding-16);
        font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
        line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
      `;
    
    case 'large':
      return `
        height: 48px;
        padding: var(--padding-8) var(--padding-24);
        font-size: var(--Paragraph-14-Paragraph-bold-Font-Size);
        line-height: var(--Paragraph-14-Paragraph-bold-Font-Line-Height);
      `;
    
    default:
      return '';
  }
};

const StyledButton = styled(motion.button)<{
  $variant: string;
  $size: string;
  $fullWidth: boolean;
  $disabled: boolean;
  $isLoading: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-8);
  border-radius: var(--br-8);
  font-family: var(--Inter);
  font-weight: var(--Paragraph-14-Paragraph-bold-Font-Weight);
  text-align: center;
  border: none;
  position: relative;
  overflow: hidden;
  
  ${({ $variant, $disabled, $isLoading }) => getVariantStyles($variant, $disabled, $isLoading)}
  ${({ $size }) => getSizeStyles($size)}
  ${({ $fullWidth }) => $fullWidth && 'width: 100%;'}
`;

const ButtonContent = styled.div<{ $isLoading: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-8);
  opacity: ${({ $isLoading }) => $isLoading ? 0 : 1};
  transition: opacity 0.2s ease-in-out;
`;

const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  disabled = false,
  type = 'button',
  onClick,
  fullWidth = false,
  leftIcon,
  rightIcon,
  'aria-label': ariaLabel,
  ...props
}) => {
  const handleClick = () => {
    if (!disabled && !isLoading && onClick) {
      onClick();
    }
  };

  return (
    <StyledButton
      type={type}
      onClick={handleClick}
      disabled={disabled || isLoading}
      aria-label={ariaLabel}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $disabled={disabled}
      $isLoading={isLoading}
      whileHover={!disabled && !isLoading ? { scale: 1.02 } : undefined}
      whileTap={!disabled && !isLoading ? { scale: 0.98 } : undefined}
      {...props}
    >
      {isLoading && <LoadingSpinner />}
      
      <ButtonContent $isLoading={isLoading}>
        {leftIcon && <span>{leftIcon}</span>}
        {children}
        {rightIcon && <span>{rightIcon}</span>}
      </ButtonContent>
    </StyledButton>
  );
};

export default Button;