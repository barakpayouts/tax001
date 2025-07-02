import { z } from 'zod';

export const taxSettingsSchema = z.object({
  taxFormType: z.enum(['us-international', 'us-only'], {
    required_error: 'Please select a tax form type',
  }),
  w9ReviewAction: z.enum(['manual-review', 'auto-approve-tin', 'auto-approve'], {
    required_error: 'Please select a W9 review action',
  }),
  w8ReviewAction: z.enum(['manual-review', 'auto-approve-treaty', 'auto-approve'], {
    required_error: 'Please select a W8 review action',
  }),
  requireTaxForm: z.boolean(),
  applyRestriction: z.boolean().optional(),
  reportingFrequency: z.enum(['monthly', 'quarterly', 'annually']).default('monthly'),
  enableBackupWithholding: z.boolean().default(false),
  enableNonResidentWithholding: z.boolean().default(false),
}).refine((data) => {
  // If tax form is not required, we need to know about restrictions
  if (!data.requireTaxForm) {
    return data.applyRestriction !== undefined;
  }
  return true;
}, {
  message: 'Please specify whether to apply restrictions when tax form is not required',
  path: ['applyRestriction'],
});

export type TaxSettingsFormData = z.infer<typeof taxSettingsSchema>;