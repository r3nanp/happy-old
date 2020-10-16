import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { InputField, Span } from './styles'

interface InputProps {
  name: string
  [key: string]: any
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null)

  const { error, registerField, fieldName, defaultValue } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <>
      <InputField
        ref={inputRef}
        className={error ? 'has-error' : ''}
        defaultValue={defaultValue}
        {...rest}
      />
      { error && <Span className="error">{error}</Span> }
    </>
  )
}

export default Input
