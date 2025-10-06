import React from 'react';
import PropTypes from 'prop-types';
import { useController, useFormContext } from 'react-hook-form';

export function InputFormItem(props) {
  const {
    label,
    name,
    hint,
    type = 'text',
    placeholder,
    autoFocus,
    autoComplete,
    required = false,
    externalErrorMessage,
    disabled,
    endAdornment,
    onChange,
    defaultValue = '',
  } = props;

  const fieldName = name && typeof name === 'string' ? name : 'defaultField';

  // Try to get form context - if available, use React Hook Form
  // If not available, fall back to regular input with onChange
  let formContext;
  try {
    formContext = useFormContext();
  } catch (error) {
    // Form context not available - will use regular input
    formContext = null;
  }

  let fieldProps = {};
  let errorMessage = externalErrorMessage;

  if (formContext && fieldName !== 'defaultField') {
    // Use React Hook Form's useController for proper integration
    const {
      field,
      fieldState: { error },
    } = useController({
      name: fieldName,
      control: formContext.control,
      defaultValue: defaultValue,
    });

    fieldProps = {
      ...field,
      onChange: (e) => {
        field.onChange(e);
        if (onChange) onChange(e);
      },
    };

    errorMessage = error?.message || externalErrorMessage;
  } else {
    // Fallback to regular input when no form context
    fieldProps = {
      name: fieldName,
      onChange: onChange,
      defaultValue: defaultValue,
    };
  }

  return (
    <div className="form-group">
      <div className={endAdornment ? 'input-group' : ''}>
        {Boolean(label) && (
          <label
            className={`col-form-label ${
              required ? 'required' : null
            }`}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        <input
          {...fieldProps}
          id={fieldName}
          type={type}
          placeholder={placeholder || undefined}
          autoFocus={autoFocus || undefined}
          autoComplete={autoComplete || undefined}
          disabled={disabled}
          className={`form-control ${
            errorMessage ? 'is-invalid' : ''
          }`}
        />
        {endAdornment && (
          <div className="input-group-append">
            <span className="input-group-text">
              {endAdornment}
            </span>
          </div>
        )}
      </div>
      <div className="invalid-feedback">{errorMessage}</div>
      {Boolean(hint) && (
        <small className="form-text text-muted">
          {hint}
        </small>
      )}
    </div>
  );
}

InputFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  endAdornment: PropTypes.any,
  onChange: PropTypes.any,
  defaultValue: PropTypes.string,
};

export default InputFormItem;
