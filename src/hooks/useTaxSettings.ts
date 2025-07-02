import { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { taxSettingsSchema, TaxSettingsFormData } from '../schemas/tax-settings.schema';

const STORAGE_KEY = 'tax-settings-draft';
const AUTO_SAVE_DELAY = 2000; // 2 seconds

interface UseTaxSettingsReturn {
  // Form state
  form: ReturnType<typeof useForm<TaxSettingsFormData>>;
  formData: Partial<TaxSettingsFormData>;
  
  // UI state
  isLoading: boolean;
  isSaving: boolean;
  hasUnsavedChanges: boolean;
  lastSaved: Date | null;
  
  // Actions
  handleSave: () => Promise<void>;
  handleReset: () => void;
  handleRestoreDefaults: () => void;
  
  // Auto-save
  enableAutoSave: boolean;
  setEnableAutoSave: (enabled: boolean) => void;
}

const defaultValues: TaxSettingsFormData = {
  taxFormType: 'us-international',
  w9ReviewAction: 'manual-review',
  w8ReviewAction: 'manual-review',
  requireTaxForm: true,
  applyRestriction: false,
  reportingFrequency: 'monthly',
  enableBackupWithholding: false,
  enableNonResidentWithholding: false,
};

export const useTaxSettings = (): UseTaxSettingsReturn => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [enableAutoSave, setEnableAutoSave] = useState(true);
  const [autoSaveTimeout, setAutoSaveTimeout] = useState<NodeJS.Timeout | null>(null);

  const form = useForm<TaxSettingsFormData>({
    resolver: zodResolver(taxSettingsSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { watch, reset, getValues, trigger } = form;
  const formData = watch();

  // Load saved draft on mount
  useEffect(() => {
    const loadDraft = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsedData = JSON.parse(saved);
          // Validate the loaded data
          const result = taxSettingsSchema.safeParse(parsedData.data);
          if (result.success) {
            reset(result.data);
            setLastSaved(new Date(parsedData.timestamp));
            toast.success('Draft loaded', { duration: 2000 });
          }
        }
      } catch (error) {
        console.warn('Failed to load draft:', error);
        localStorage.removeItem(STORAGE_KEY);
      } finally {
        setIsLoading(false);
      }
    };

    loadDraft();
  }, [reset]);

  // Watch for changes to set unsaved state
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name && type === 'change') {
        setHasUnsavedChanges(true);
        
        // Auto-save logic
        if (enableAutoSave && !isSaving) {
          if (autoSaveTimeout) {
            clearTimeout(autoSaveTimeout);
          }
          
          const timeout = setTimeout(() => {
            handleAutoSave();
          }, AUTO_SAVE_DELAY);
          
          setAutoSaveTimeout(timeout);
        }
      }
    });
    
    return () => subscription.unsubscribe();
  }, [watch, enableAutoSave, isSaving, autoSaveTimeout]);

  // Auto-save function
  const handleAutoSave = useCallback(async () => {
    const isValid = await trigger();
    if (isValid) {
      const currentData = getValues();
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          data: currentData,
          timestamp: new Date().toISOString(),
        }));
        setHasUnsavedChanges(false);
        setLastSaved(new Date());
      } catch (error) {
        console.error('Auto-save failed:', error);
      }
    }
  }, [trigger, getValues]);

  // Manual save function
  const handleSave = useCallback(async () => {
    setIsSaving(true);
    
    try {
      const isValid = await trigger();
      if (!isValid) {
        toast.error('Please fix the errors before saving');
        return;
      }

      const currentData = getValues();
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Save to localStorage as backup
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        data: currentData,
        timestamp: new Date().toISOString(),
      }));
      
      setHasUnsavedChanges(false);
      setLastSaved(new Date());
      
      toast.success('Tax settings saved successfully!', {
        duration: 3000,
        icon: '✅',
      });
      
    } catch (error) {
      console.error('Save failed:', error);
      toast.error('Failed to save settings. Please try again.');
    } finally {
      setIsSaving(false);
    }
  }, [trigger, getValues]);

  // Reset to last saved
  const handleReset = useCallback(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsedData = JSON.parse(saved);
        const result = taxSettingsSchema.safeParse(parsedData.data);
        if (result.success) {
          reset(result.data);
          setHasUnsavedChanges(false);
          toast.success('Changes discarded');
        }
      } else {
        reset(defaultValues);
        setHasUnsavedChanges(false);
        toast.success('Reset to default values');
      }
    } catch (error) {
      console.error('Reset failed:', error);
      reset(defaultValues);
      toast.error('Reset failed, using default values');
    }
  }, [reset]);

  // Restore defaults
  const handleRestoreDefaults = useCallback(() => {
    reset(defaultValues);
    setHasUnsavedChanges(true);
    toast.success('Default values restored');
  }, [reset]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (autoSaveTimeout) {
        clearTimeout(autoSaveTimeout);
      }
    };
  }, [autoSaveTimeout]);

  return {
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
  };
};