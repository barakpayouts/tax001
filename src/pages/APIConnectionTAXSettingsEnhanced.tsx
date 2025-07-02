import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

// Components
import Header from '../components/Header';
import Wizard from '../components/Wizard';
import FormField from '../components/forms/FormField';
import RadioGroup from '../components/forms/RadioGroup';
import Button from '../components/forms/Button';
import FormSection from '../components/forms/FormSection';
import StatusIndicator from '../components/forms/StatusIndicator';

// Hooks and utilities
import { useTaxSettings } from '../hooks/useTaxSettings';

/* ——— Layout Components ——— */
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--Tooltip-190-Tooltip-fill);
  display: flex;
  flex-direction: column;
  padding: 0 var(--padding-18);
  box-sizing: border-box;
`;

const MainWrapper = styled.main`
  flex: 1;
  background-color: var(--Inactive-390-Line);
  border-radius: var(--br-12);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--gap-32);
  padding: var(--padding-16);
  box-sizing: border-box;
  
  @media screen and (max-width: 450px) {
    gap: var(--gap-16);
  }
`;

const SidebarContainer = styled.div`
  width: 334px;
  flex-shrink: 0;
  
  @media screen and (max-width: 1200px) {
    width: 280px;
  }
  
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const ContentContainer = styled.section`
  flex: 1;
  min-width: 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--gap-16);
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-16);
  margin-bottom: var(--gap-8);
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--gap-12);
  }
`;

const PageTitle = styled.h1`
  margin: 0;
  font-size: var(--Paragraph-20-Paragraph-bold-Font-Size);
  font-weight: var(--Paragraph-20-Paragraph-bold-Font-Weight);
  line-height: var(--Paragraph-20-Paragraph-bold-Font-Line-Height);
  color: var(--Current-390-Line);
  font-family: var(--Inter);
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-12);
`;

const FormContainer = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: var(--gap-16);
`;

const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-16);
  padding: var(--padding-16) 0;
  border-top: 2px solid var(--Tooltip-190-Tooltip-stroke);
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: var(--gap-12);
  }
`;

const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-12);
  
  @media screen and (max-width: 768px) {
    flex: 1;
    justify-content: space-between;
  }
`;

/* ——— Error Fallback Component ——— */
const ErrorFallback: React.FC<{ error: Error; resetErrorBoundary: () => void }> = ({
  error,
  resetErrorBoundary,
}) => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h2>Something went wrong:</h2>
    <pre style={{ color: 'red' }}>{error.message}</pre>
    <Button onClick={resetErrorBoundary}>Try again</Button>
  </div>
);

/* ——— Form Option Definitions ——— */
const taxFormOptions = [
  {
    value: 'us-international',
    label: 'W-9, W-8BEN and W-8BEN-E Forms (US and International)',
    description: '* Recommended - Supports both US and international vendors',
  },
  {
    value: 'us-only',
    label: 'W-9 Forms (US Only)',
    description: 'Only select this if you will only use the Vendor Portal for US recipients',
  },
];

const w9ReviewOptions = [
  {
    value: 'manual-review',
    label: 'Manually Review and Approve',
    description: 'All W9 submissions require manual approval',
  },
  {
    value: 'auto-approve-tin',
    label: 'Automatically Approve if TIN matches',
    description: 'Auto-approve when Tax ID Number matches existing records',
  },
  {
    value: 'auto-approve',
    label: 'Automatically Approve',
    description: 'All W9 submissions are automatically approved',
  },
];

const w8ReviewOptions = [
  {
    value: 'manual-review',
    label: 'Manually Review and Approve',
    description: 'All W8 submissions require manual approval',
  },
  {
    value: 'auto-approve-treaty',
    label: 'Automatically Approve claimed tax treaty benefits',
    description: 'Auto-approve when valid tax treaty benefits are claimed',
  },
  {
    value: 'auto-approve',
    label: 'Automatically Approve',
    description: 'All W8 submissions are automatically approved',
  },
];

const paymentWithoutTaxFormOptions = [
  {
    value: 'true',
    label: 'Approved Tax Form Required',
    description: 'Vendor is not payable until an approved tax form is provided',
  },
  {
    value: 'false',
    label: 'Tax Form Not Required',
    description: 'Allow payments to recipients with no tax form on file',
  },
];

/* ——— Main Component ——— */
const APIConnectionTAXSettingsEnhanced: React.FC = () => {
  const navigate = useNavigate();
  const {
    form,
    formData,
    isLoading,
    isSaving,
    hasUnsavedChanges,
    lastSaved,
    handleSave,
    handleReset,
    handleRestoreDefaults,
    enableAutoSave,
    setEnableAutoSave,
  } = useTaxSettings();

  const {
    control,
    formState: { errors },
    watch,
  } = form;

  const requireTaxForm = watch('requireTaxForm');

  const handleBack = () => {
    if (hasUnsavedChanges) {
      const confirmLeave = window.confirm(
        'You have unsaved changes. Are you sure you want to leave?'
      );
      if (!confirmLeave) return;
    }
    navigate('/api-connection-self-invoice-settings-default');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSave();
  };

  if (isLoading) {
    return (
      <PageContainer>
        <Header />
        <MainWrapper>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '400px',
            width: '100%' 
          }}>
            <Button isLoading disabled>
              Loading...
            </Button>
          </div>
        </MainWrapper>
      </PageContainer>
    );
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <PageContainer>
        <Header />
        
        <MainWrapper>
          <SidebarContainer>
            <Wizard />
          </SidebarContainer>
          
          <ContentContainer>
            <PageHeader>
              <PageTitle>TAX Settings</PageTitle>
              
              <HeaderActions>
                <StatusIndicator
                  isVisible={hasUnsavedChanges || isSaving || !!lastSaved}
                  type={
                    isSaving ? 'saving' : 
                    hasUnsavedChanges ? 'unsaved' : 
                    'saved'
                  }
                  lastSaved={lastSaved}
                />
                
                <Button
                  variant="ghost"
                  size="small"
                  onClick={handleRestoreDefaults}
                  aria-label="Restore default settings"
                >
                  Restore Default
                </Button>
              </HeaderActions>
            </PageHeader>

            <FormContainer
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Tax Form Selection */}
              <FormSection
                title="Tax Form Collection"
                description="Select the tax forms you wish to collect from your vendors"
                icon="📋"
              >
                <Controller
                  name="taxFormType"
                  control={control}
                  render={({ field }) => (
                    <FormField
                      id="taxFormType"
                      label="Tax Form Type"
                      error={errors.taxFormType?.message}
                      required
                    >
                      <RadioGroup
                        name="taxFormType"
                        options={taxFormOptions}
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.taxFormType?.message}
                      />
                    </FormField>
                  )}
                />
              </FormSection>

              {/* W9 Review Actions */}
              <FormSection
                title="W9 Form Review Process"
                description="Configure how W9 form submissions are handled"
                icon="🇺🇸"
              >
                <Controller
                  name="w9ReviewAction"
                  control={control}
                  render={({ field }) => (
                    <FormField
                      id="w9ReviewAction"
                      label="Action to take when a new W9 form is submitted"
                      error={errors.w9ReviewAction?.message}
                      required
                    >
                      <RadioGroup
                        name="w9ReviewAction"
                        options={w9ReviewOptions}
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.w9ReviewAction?.message}
                      />
                    </FormField>
                  )}
                />
              </FormSection>

              {/* W8 Review Actions */}
              <FormSection
                title="W8 Form Review Process"
                description="Configure how W8 form submissions are handled"
                icon="🌍"
              >
                <Controller
                  name="w8ReviewAction"
                  control={control}
                  render={({ field }) => (
                    <FormField
                      id="w8ReviewAction"
                      label="Action to take when a new W8 form is submitted"
                      error={errors.w8ReviewAction?.message}
                      required
                    >
                      <RadioGroup
                        name="w8ReviewAction"
                        options={w8ReviewOptions}
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.w8ReviewAction?.message}
                      />
                    </FormField>
                  )}
                />
              </FormSection>

              {/* Payment Without Tax Form */}
              <FormSection
                title="Payments Without Tax Form"
                description="Configure how to handle payments to vendors without tax forms"
                icon="💰"
              >
                <Controller
                  name="requireTaxForm"
                  control={control}
                  render={({ field }) => (
                    <FormField
                      id="requireTaxForm"
                      label="Tax Form Requirements"
                      error={errors.requireTaxForm?.message}
                      required
                    >
                      <RadioGroup
                        name="requireTaxForm"
                        options={paymentWithoutTaxFormOptions}
                        value={field.value ? 'true' : 'false'}
                        onChange={(value) => field.onChange(value === 'true')}
                        error={errors.requireTaxForm?.message}
                      />
                    </FormField>
                  )}
                />

                {!requireTaxForm && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Controller
                      name="applyRestriction"
                      control={control}
                      render={({ field }) => (
                        <FormField
                          id="applyRestriction"
                          label="Withholding Restrictions"
                          error={errors.applyRestriction?.message}
                          helpText="Choose whether to apply tax withholding for vendors without tax forms"
                        >
                          <RadioGroup
                            name="applyRestriction"
                            options={[
                              {
                                value: 'true',
                                label: 'Apply Restriction',
                                description: 'Apply 24.0% Backup Withholding for US Persons and 30.0% Non-Resident Alien Withholding for Non-US Persons',
                              },
                              {
                                value: 'false',
                                label: 'Do Not Apply Restriction',
                                description: 'Do not withhold any tax amount from any payouts',
                              },
                            ]}
                            value={field.value ? 'true' : 'false'}
                            onChange={(value) => field.onChange(value === 'true')}
                            error={errors.applyRestriction?.message}
                          />
                        </FormField>
                      )}
                    />
                  </motion.div>
                )}
              </FormSection>

              {/* Advanced Settings */}
              <FormSection
                title="Advanced Settings"
                description="Additional configuration options"
                icon="⚙️"
                collapsible
                defaultExpanded={false}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-16)' }}>
                  <label style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 'var(--gap-8)',
                    cursor: 'pointer',
                    padding: 'var(--padding-8)',
                    borderRadius: 'var(--br-6)',
                    transition: 'background-color 0.2s',
                  }}>
                    <input
                      type="checkbox"
                      checked={enableAutoSave}
                      onChange={(e) => setEnableAutoSave(e.target.checked)}
                      style={{ width: '16px', height: '16px' }}
                    />
                    <span style={{ 
                      fontSize: 'var(--Paragraph-14-Paragraph-bold-Font-Size)',
                      fontFamily: 'var(--Inter)',
                      color: 'var(--Default-290-Text)'
                    }}>
                      Enable Auto-save
                    </span>
                  </label>
                </div>
              </FormSection>

              {/* Action Bar */}
              <ActionBar>
                <StatusIndicator
                  isVisible={hasUnsavedChanges || isSaving}
                  type={isSaving ? 'saving' : 'unsaved'}
                  lastSaved={lastSaved}
                />
                
                <ActionGroup>
                  <Button
                    variant="secondary"
                    onClick={handleBack}
                    leftIcon="←"
                  >
                    Back
                  </Button>
                  
                  {hasUnsavedChanges && (
                    <Button
                      variant="ghost"
                      onClick={handleReset}
                    >
                      Discard Changes
                    </Button>
                  )}
                  
                  <Button
                    type="submit"
                    variant="primary"
                    isLoading={isSaving}
                    rightIcon="→"
                  >
                    Save & Continue
                  </Button>
                </ActionGroup>
              </ActionBar>
            </FormContainer>
          </ContentContainer>
        </MainWrapper>
      </PageContainer>
    </ErrorBoundary>
  );
};

export default APIConnectionTAXSettingsEnhanced;