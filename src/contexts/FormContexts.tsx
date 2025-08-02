import { createContext } from 'react'
import type { FieldPath, FieldValues } from 'react-hook-form'

interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName
}

export const FormFieldContext = createContext<FormFieldContextValue>({
  name: '',
})

interface FormItemContextValue {
  id: string
}

export const FormItemContext = createContext<FormItemContextValue>({
  id: '',
})
