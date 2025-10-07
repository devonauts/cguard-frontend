import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerFormItem({
  label,
  name,
  hint,
  placeholder = '',
  autoFocus = false,
  externalErrorMessage,
  required = false,
  showTimeInput = false,
  onChange,
  onBlur,
}) {
  const {
    control,
    formState: { errors, touchedFields, isSubmitted },
  } = useFormContext();

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touchedFields,
    isSubmitted,
    externalErrorMessage,
  );

  return (
    <div className="form-group">
      {Boolean(label) && (
        <label
          className={`col-form-label ${required ? 'required' : ''}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <br />

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            id={name}
            className={`form-control ${errorMessage ? 'is-invalid' : ''}`}
            selected={field.value || null}
            onChange={(value) => {
              field.onChange(value);
              onChange && onChange(value);
            }}
            onBlur={(event) => {
              field.onBlur();
              onBlur && onBlur(event);
            }}
            showTimeInput={showTimeInput}
            popperModifiers={{
              preventOverflow: { enabled: true, escapeWithReference: false },
            }}
            placeholderText={placeholder}
            autoFocus={autoFocus || undefined}
            autoComplete="off"
            dateFormat={showTimeInput ? 'yyyy-MM-dd HH:mm' : 'yyyy-MM-dd'}
            timeIntervals={15}
          />
        )}
      />

      <div className="invalid-feedback">{errorMessage}</div>

      {Boolean(hint) && (
        <small className="form-text text-muted">{hint}</small>
      )}
    </div>
  );
}

DatePickerFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  showTimeInput: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

// export default requerido si importas por default o usas React.lazy
export default DatePickerFormItem;
