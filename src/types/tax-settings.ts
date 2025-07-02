export interface TaxFormType {
  formType: 'us-international' | 'us-only';
}

export interface W9ReviewAction {
  action: 'manual-review' | 'auto-approve-tin' | 'auto-approve';
}

export interface W8ReviewAction {
  action: 'manual-review' | 'auto-approve-treaty' | 'auto-approve';
}

export interface PaymentWithoutTaxForm {
  requireTaxForm: boolean;
  applyRestriction?: boolean;
}

export interface TaxSettingsFormData {
  taxFormType: TaxFormType['formType'];
  w9ReviewAction: W9ReviewAction['action'];
  w8ReviewAction: W8ReviewAction['action'];
  requireTaxForm: boolean;
  applyRestriction?: boolean;
  reportingFrequency: 'monthly' | 'quarterly' | 'annually';
  enableBackupWithholding: boolean;
  enableNonResidentWithholding: boolean;
}

export interface TaxSettingsState {
  isLoading: boolean;
  isSaving: boolean;
  hasUnsavedChanges: boolean;
  lastSaved?: Date;
  errors: Record<string, string>;
}