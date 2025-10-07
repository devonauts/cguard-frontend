import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import FormErrors from 'src/view/shared/form/formErrors'
import Select from 'react-select'
import { i18n } from 'src/i18n'
import { useFormContext } from 'react-hook-form'
import _uniqBy from 'lodash/uniqBy'

function AutocompleteInMemoryFormItem({
  label = '',
  name,
  hint,
  placeholder = '',
  autoFocus = false,
  externalErrorMessage,
  mode = 'single',
  required = false,
  isClearable = true,
  mapper,
  fetchFn,
  showCreate = false,
  hasPermissionToCreate = false,
  ...props
}) {
  const {
    watch,
    setValue,
    register,
    formState: { errors, isSubmitted, touchedFields },
  } = useFormContext()

  const originalValue = watch(name)

  const [fullDataSource, setFullDataSource] = useState<Array<any>>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    register(name)
  }, [register, name])

  useEffect(() => {
    const fetchAllResults = async () => {
      setLoading(true)
      try {
        let ds = await fetchFn()
        ds = ds.map((data) => mapper.toAutocomplete(data))
        setFullDataSource(ds)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setFullDataSource([])
        setLoading(false)
        return []
      }
    }
    fetchAllResults().then(() => {})
  }, [])

  const prioritizeFromDataSource = (selected) => {
    return (fullDataSource || []).find((item) => item.value === selected.value) || selected
  }

  const value = () => {
    if (mode === 'multiple') return valueMultiple()
    return valueOne()
  }

  const valueMultiple = () => {
    if (originalValue && Array.isArray(originalValue) && originalValue.length > 0) {
      return originalValue.map((v) => prioritizeFromDataSource(mapper.toAutocomplete(v)))
    }
    return []
  }

  const valueOne = () => {
    if (originalValue && originalValue !== '' && typeof originalValue === 'object') {
      return prioritizeFromDataSource(mapper.toAutocomplete(originalValue))
    }
    return null
  }

  const handleSelect = (val) => {
    if (mode === 'multiple') return handleSelectMultiple(val)
    return handleSelectOne(val)
  }

  const handleSelectMultiple = (vals) => {
    if (!vals) {
      setValue(name, [], { shouldValidate: true, shouldDirty: true })
      props.onChange && props.onChange([])
      return
    }
    const newValue = vals.map((v) => mapper.toValue(v))
    setValue(name, newValue, { shouldValidate: true, shouldDirty: true })
    props.onChange && props.onChange(newValue)
  }

  const handleSelectOne = (val) => {
    if (!val) {
      setValue(name, null, { shouldValidate: true, shouldDirty: true })
      props.onChange && props.onChange(null)
      return
    }
    const newValue = mapper.toValue(val)
    setValue(name, newValue, { shouldValidate: true, shouldDirty: true })
    props.onChange && props.onChange(newValue)
  }

  const options = () => {
    if (!fullDataSource) return []
    if (value()) {
      if (mode === 'multiple') return _uniqBy([...fullDataSource, ...value()], 'value')
      return _uniqBy([...fullDataSource, value()], 'value')
    }
    return fullDataSource
  }

  const hintOrLoading = loading ? i18n('autocomplete.loading') : hint

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touchedFields,
    isSubmitted,
    externalErrorMessage,
  )

  const isInvalid = Boolean(errorMessage)

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      minHeight: 38,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: isInvalid ? '#dc3545' : state.isFocused ? '#80bdff' : '#ced4da',
      boxShadow: state.isFocused
        ? isInvalid
          ? '0 0 0 .2rem rgba(220,53,69,.25)'
          : '0 0 0 .2rem rgba(0,123,255,.25)'
        : 'none',
      '&:hover': {
        borderColor: isInvalid ? '#dc3545' : state.isFocused ? '#80bdff' : '#adb5bd',
      },
    }),
    placeholder: (base) => ({ ...base, color: '#6c757d' }),
    valueContainer: (base) => ({ ...base, padding: '2px 8px' }),
    indicatorsContainer: (base) => ({ ...base, paddingRight: 6 }),
  }

  return (
    <div className="form-group">
      {Boolean(label) && (
        <label className={`col-form-label ${required ? 'required' : ''}`} htmlFor={name}>
          {label}
        </label>
      )}

      <div style={{ display: 'flex' }}>
        <Select
          className="w-100"
          styles={selectStyles}
          inputId={name}
          name={name}
          isMulti={mode === 'multiple'}
          placeholder={placeholder}
          autoFocus={autoFocus || undefined}
          onChange={handleSelect}
          value={value()}
          isClearable={isClearable}
          options={options()}
          onBlur={(event) => {
            props.onBlur && props.onBlur(event)
          }}
          aria-invalid={isInvalid}
          loadingMessage={() => i18n('autocomplete.loading')}
          noOptionsMessage={() => i18n('autocomplete.noOptions')}
        />

        {showCreate && hasPermissionToCreate ? (
          <button
            style={{ marginLeft: '16px', flexShrink: 0 }}
            className="btn btn-primary"
            type="button"
            onClick={props.onOpenModal}
          >
            <i className="fas fa-plus"></i>
          </button>
        ) : null}
      </div>

      <div className="invalid-feedback">{errorMessage}</div>
      {Boolean(hintOrLoading) && (
        <small className="form-text text-muted">{hintOrLoading}</small>
      )}
    </div>
  )
}

AutocompleteInMemoryFormItem.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  externalErrorMessage: PropTypes.string,
  mode: PropTypes.oneOf(['single', 'multiple']),
  required: PropTypes.bool,
  isClearable: PropTypes.bool,
  mapper: PropTypes.shape({
    toAutocomplete: PropTypes.func.isRequired,
    toValue: PropTypes.func.isRequired,
  }).isRequired,
  fetchFn: PropTypes.func.isRequired,
  showCreate: PropTypes.bool,
  hasPermissionToCreate: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onOpenModal: PropTypes.func,
}

export default AutocompleteInMemoryFormItem
