import { useContext } from 'react'
import { useFormContext, useFormState } from 'react-hook-form'

import { FormFieldContext, FormItemContext } from '@/contexts'

export const useFormField = () => {
  const { getFieldState } = useFormContext()
  const { id } = useContext(FormItemContext)
  const fieldContext = useContext(FormFieldContext)

  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  return {
    formDescriptionId: `${id}-form-item-description`,
    formItemId: `${id}-form-item`,
    formMessageId: `${id}-form-item-message`,
    id,
    name: fieldContext.name,
    ...fieldState,
  }
}
