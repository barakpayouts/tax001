import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface StatusIndicatorProps {
  isVisible: boolean;
  type: 'saving' | 'saved' | 'error' | 'unsaved';
  message?: string;
  lastSaved?: Date | null;
}

const StatusContainer = styled(motion.div)<{ $type: string }>`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  padding: var(--padding-8) var(--padding-12);
  border-radius: var(--br-6);
  font-size: var(--Others-12-Paragraph-regular-Font-Size);
  line-height: var(--Others-12-Paragraph-regular-Font-Line-Height);
  font-family: var(--Inter);
  border: 1px solid;
  
  ${({ $type }) => {
    switch ($type) {
      case 'saving':
        return `
          background-color: var(--Notes-Statuses-Info-250-Fill-notes-statuses);
          color: var(--Notes-Statuses-Info-250-Text-notes-statuses);
          border-color: var(--Toggles-Active-310-toogle-active-stroke);
        `;
      case 'saved':
        return `
          background-color: var(--Notes-Statuses-Sucsess-250-Fill-notes-statuses);
          color: var(--Notes-Statuses-Sucsess-250-Text-statuses);
          border-color: var(--Notes-Statuses-Sucsess-250-Stroke-statuses);
        `;
      case 'error':
        return `
          background-color: #fef2f2;
          color: var(--Items-Error-default-Items-170-Text-Error-default);
          border-color: var(--Items-Error-default-Items-170-Text-Error-default);
        `;
      case 'unsaved':
        return `
          background-color: var(--Notes-Statuses-Note-Alert-250-Fill-notes-statuses);
          color: var(--Notes-Statuses-Note-Alert-250-Text-notes-statuses);
          border-color: var(--Notes-Statuses-Note-Alert-250-Text-notes-statuses);
        `;
      default:
        return '';
    }
  }}
`;

const StatusIcon = styled.div<{ $type: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  
  ${({ $type }) => {
    if ($type === 'saving') {
      return `
        animation: spin 1s linear infinite;
        
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `;
    }
    return '';
  }}
`;

const StatusText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const StatusMessage = styled.div`
  font-weight: var(--Others-12-Button-medium-Font-Weight);
`;

const StatusTime = styled.div`
  font-size: 10px;
  opacity: 0.8;
`;

const getStatusIcon = (type: string): string => {
  switch (type) {
    case 'saving':
      return '⟳';
    case 'saved':
      return '✓';
    case 'error':
      return '⚠';
    case 'unsaved':
      return '○';
    default:
      return '';
  }
};

const getStatusMessage = (type: string, customMessage?: string): string => {
  if (customMessage) return customMessage;
  
  switch (type) {
    case 'saving':
      return 'Saving changes...';
    case 'saved':
      return 'All changes saved';
    case 'error':
      return 'Failed to save';
    case 'unsaved':
      return 'Unsaved changes';
    default:
      return '';
  }
};

const formatTime = (date: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMinutes = Math.floor(diffMs / 60000);
  
  if (diffMinutes < 1) {
    return 'just now';
  } else if (diffMinutes < 60) {
    return `${diffMinutes}m ago`;
  } else if (diffMinutes < 1440) {
    const hours = Math.floor(diffMinutes / 60);
    return `${hours}h ago`;
  } else {
    return date.toLocaleDateString();
  }
};

const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  isVisible,
  type,
  message,
  lastSaved,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <StatusContainer
          $type={type}
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <StatusIcon $type={type}>
            {getStatusIcon(type)}
          </StatusIcon>
          
          <StatusText>
            <StatusMessage>
              {getStatusMessage(type, message)}
            </StatusMessage>
            
            {lastSaved && type === 'saved' && (
              <StatusTime>
                Last saved {formatTime(lastSaved)}
              </StatusTime>
            )}
          </StatusText>
        </StatusContainer>
      )}
    </AnimatePresence>
  );
};

export default StatusIndicator;