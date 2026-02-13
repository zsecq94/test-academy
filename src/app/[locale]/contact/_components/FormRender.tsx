'use client'

import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import type { ContactFormValues, FormFields, Field } from '../types'
import { SvgIcon } from '@/components'
import clsx from 'clsx'

function FieldLabel({
  label,
  required,
}: {
  label: string
  required?: boolean
}) {
  return (
    <div className="flex items-start gap-4">
      {required ? (
        <span
          className="1024:text-lg translate-y-2 text-sm text-red-500"
          aria-hidden="true"
        >
          *
        </span>
      ) : null}
      <span className="1024:text-lg text-base font-medium">{label}</span>
    </div>
  )
}

function FieldDesc({
  required,
  description,
}: {
  required?: boolean
  description?: string | null
}) {
  if (!description) return null
  return (
    <p
      className={clsx([
        '1024:text-base text-xs text-[#7C7C8D]',
        required ? 'pl-7' : '',
      ])}
    >
      {description}
    </p>
  )
}

function ErrorText({ message }: { message?: string }) {
  if (!message) return null
  return <p className="text-xs text-red-600">{message}</p>
}

function TextInput({
  id,
  placeholder,
  register,
  error,
}: {
  id: keyof ContactFormValues
  placeholder?: string
  register: ReturnType<typeof useForm<ContactFormValues>>['register']
  error?: string
}) {
  return (
    <>
      <input
        {...register(id)}
        placeholder={placeholder}
        className="v1024:text-base rounded-[12px] border border-gray-200 bg-white px-8 py-9 text-base text-sm outline-none focus:border-gray-400"
      />
      <ErrorText message={error} />
    </>
  )
}

function TextArea({
  id,
  placeholder,
  register,
  error,
}: {
  id: keyof ContactFormValues
  placeholder?: string
  register: ReturnType<typeof useForm<ContactFormValues>>['register']
  error?: string
}) {
  return (
    <>
      <textarea
        {...register(id)}
        placeholder={placeholder}
        rows={6}
        className="w-full resize-none rounded-[12px] border border-gray-200 bg-white px-8 py-9 text-base outline-none focus:border-gray-400"
      />
      <ErrorText message={error} />
    </>
  )
}

function RadioGroupMulti({
  options,
  value,
  onChange,
  error,
}: {
  options: { label: string; value: string }[]
  value: string[]
  onChange: (v: string[]) => void
  error?: string
}) {
  // "one or more" => 실제론 multi-select이므로 checkbox list로 구현
  const toggle = (v: string) => {
    if (value.includes(v)) onChange(value.filter((x) => x !== v))
    else onChange([...value, v])
  }

  return (
    <>
      <div className="flex flex-col items-start gap-3">
        {options.map((opt) => {
          const checked = value.includes(opt.value)
          return (
            <label key={opt.value} className="flex cursor-pointer gap-4">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggle(opt.value)}
                className="h-9 w-9 shrink-0 translate-y-2"
                aria-label={opt.label}
              />
              <span className="v1024:text-lg text-base">{opt.label}</span>
            </label>
          )
        })}
      </div>
      <ErrorText message={error} />
    </>
  )
}

function AgreeCheckbox({
  checked,
  onChange,
  label,
  error,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  label: string
  error?: string
}) {
  return (
    <>
      <label className="flex cursor-pointer items-start gap-4">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="h-9 w-9 shrink-0 translate-y-2"
        />
        <span className="v1024:text-lg text-base">{label}</span>
      </label>
      <ErrorText message={error} />
    </>
  )
}

function buildDefaultValues(formFields: FormFields): ContactFormValues {
  // 이 폼은 구조가 고정되어 있으니 안전한 기본값 세팅
  const defaults: ContactFormValues = {
    name: '',
    nationality: '',
    email: '',
    contactable: '',
    area: [],
    inquiry: '',
    agree: false,
  }

  // 혹시 나중에 필드가 늘어날 수 있으니 formFields 기반으로 보정
  for (const f of formFields) {
    if (f.type === 'checkbox') {
      const key = f.id as keyof ContactFormValues
      if (key in defaults) (defaults[key] as any) = false
    } else if (f.type === 'radio-group') {
      const key = f.id as keyof ContactFormValues
      if (key in defaults) (defaults[key] as any) = []
    } else {
      const key = f.id as keyof ContactFormValues
      if (key in defaults) (defaults[key] as any) = ''
    }
  }

  return defaults
}

export function FormRender({
  formFields,
  buttonText,
}: {
  formFields: FormFields
  buttonText: string
}) {
  const defaultValues = React.useMemo(
    () => buildDefaultValues(formFields),
    [formFields]
  )

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues,
    mode: 'onSubmit',
  })

  const submit = handleSubmit(async (values) => {
    console.log('SUBMIT', values)
  })

  const renderField = (field: Field) => {
    const common = (
      <div>
        <FieldLabel
          label={field.label}
          required={'required' in field ? field.required : false}
        />
        {'description' in field ? (
          <FieldDesc
            required={'required' in field ? field.required : false}
            description={field.description ?? null}
          />
        ) : null}
      </div>
    )

    switch (field.type) {
      case 'input': {
        const id = field.id as keyof ContactFormValues
        return (
          <div key={field.id} className="flex flex-col gap-4">
            {common}
            <TextInput
              id={id}
              placeholder={field.placeholder}
              register={(name) =>
                register(name as any, {
                  required: field.required ? 'Required field' : false,
                })
              }
              error={(errors as any)?.[field.id]?.message}
            />
          </div>
        )
      }

      case 'textarea': {
        const id = field.id as keyof ContactFormValues
        return (
          <div key={field.id} className="flex flex-col gap-4">
            {common}
            <TextArea
              id={id}
              placeholder={field.placeholder}
              register={(name) =>
                register(name as any, {
                  required: field.required ? 'Required field' : false,
                })
              }
              error={(errors as any)?.[field.id]?.message}
            />
          </div>
        )
      }

      case 'radio-group': {
        // 현재 데이터는 "one or more" => multi-select로 처리 (area: string[])
        if (field.id !== 'area') {
          // 다른 radio-group이 추가될 때를 대비한 안전장치
          return (
            <div key={field.id} className="flex flex-col gap-4">
              {common}
              <p className="text-sm text-red-600">
                Unsupported radio-group id: {field.id}
              </p>
            </div>
          )
        }

        return (
          <div key={field.id} className="flex flex-col gap-4">
            {common}
            <Controller
              name="area"
              control={control}
              rules={{
                validate: (v) =>
                  field.required && v.length === 0
                    ? 'Select at least one'
                    : true,
              }}
              render={({ field: rhf }) => (
                <RadioGroupMulti
                  options={field.options}
                  value={rhf.value}
                  onChange={rhf.onChange}
                  error={(errors as any)?.[field.id]?.message}
                />
              )}
            />
          </div>
        )
      }

      case 'checkbox': {
        return (
          <div key={field.id} className="flex flex-col items-start gap-4">
            <Controller
              name="agree"
              control={control}
              rules={{
                validate: (v) => (field.required && !v ? 'Required' : true),
              }}
              render={({ field: rhf }) => (
                <AgreeCheckbox
                  checked={!!rhf.value}
                  onChange={rhf.onChange}
                  label={field.label}
                  error={(errors as any)?.[field.id]?.message}
                />
              )}
            />
          </div>
        )
      }

      default:
        return null
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-13">
      {formFields.map(renderField)}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-secondary v1024:px-16 v1024:py-9 mx-auto flex items-center gap-5 rounded-full px-13 py-5 text-2xl font-semibold text-white disabled:opacity-50"
      >
        <SvgIcon name="check" className="h-15 w-15" />
        {buttonText}
      </button>
    </form>
  )
}
