import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';

function TextAreaFormItem({
  label,
  name,
  hint,
  size,
  placeholder,
  autoFocus = false,
  autoComplete,
  externalErrorMessage,
  required = false,
  onChange,
  onBlur,
}) {
  const sizeLabelClassName =
    ({ small: 'col-form-label-sm', large: 'col-form-label-lg' }[size]) || '';

  const sizeInputClassName =
    ({ small: 'form-control-sm', large: 'form-control-lg' }[size]) || '';

  const {
    register,
    formState: { errors, touchedFields, isSubmitted },
  } = useFormContext();

  // RHF v7: registra el campo
  const reg = register(name);

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,          // ahora viene de formState.errors
    touchedFields,   // en v7 es touchedFields (no "touched")
    isSubmitted,
    externalErrorMessage,
  );

  return (
    <div className="form-group">
      {Boolean(label) && (
        <label
          className={`col-form-label ${required ? 'required' : ''} ${sizeLabelClassName}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}

      <textarea
        id={name}
        placeholder={placeholder || undefined}
        autoFocus={autoFocus || undefined}
        autoComplete={autoComplete || undefined}
        className={`form-control ${sizeInputClassName} ${errorMessage ? 'is-invalid' : ''}`}
        // RHF v7: esparce register y encadena onChange/onBlur custom
        {...reg}
        onChange={(e) => {
          reg.onChange(e);           // mantiene RHF en sync
          onChange?.(e.target.value);
        }}
        onBlur={(e) => {
          reg.onBlur(e);             // mantiene RHF en sync
          onBlur?.(e);
        }}
        name={name}                  // explícito por claridad
      />

      <div className="invalid-feedback">{errorMessage}</div>

      {Boolean(hint) && (
        <small className="form-text text-muted">{hint}</small>
      )}
    </div>
  );
}

TextAreaFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default TextAreaFormItem;
