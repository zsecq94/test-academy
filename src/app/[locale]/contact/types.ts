export type TabType = {
  title: string
  subTitle: string | null
  items: ContactItem[]
}

export type TabListType = {
  title: string
  subTitle: string | null
}

type ContactItem =
  | { key: string; render: 'text'; value: string }
  | { key: string; render: 'list'; value: string[] }

type InputField = {
  type: 'input' | 'textarea'
  id: string
  label: string
  description: string | null
  required: boolean
  placeholder: string
}

type RadioGroupField = {
  type: 'radio-group'
  id: string
  label: string
  description: string | null
  required: boolean
  options: { label: string; value: string }[]
}

type CheckboxField = {
  type: 'checkbox'
  id: string
  label: string
  required: boolean
}

export type Field = InputField | RadioGroupField | CheckboxField
export type FormFields = Field[]

export type ConfirmForm = {
  title: string
  subTitle: string | null
  description: string
  display: { key: string; value: string }
  formFields: FormFields
  buttonText: string
  footerText: string
}

export type ContactFormValues = {
  name: string
  nationality: string
  email: string
  contactable: string
  area: string[]
  inquiry: string
  agree: boolean
}
