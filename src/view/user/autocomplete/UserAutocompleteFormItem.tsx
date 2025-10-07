import React, { useState } from 'react'
import UserService from 'src/modules/user/userService'
import UserNewFormModal from 'src/view/user/new/UserNewFormModal'
import AutocompleteInMemoryFormItem from 'src/view/shared/form/items/AutocompleteInMemoryFormItem'
import { useFormContext } from 'react-hook-form'
import { useSelector } from 'react-redux'
import selectors from 'src/modules/user/userSelectors'

function UserAutocompleteFormItem(props) {
  const { name, mode, label = 'Usuario', placeholder = 'Buscar usuario…' } = props
  const { setValue, getValues } = useFormContext()
  const [modalVisible, setModalVisible] = useState(false)

  const hasPermissionToCreate = useSelector(
    selectors.selectPermissionToCreate,
  )

  const doCreateSuccess = (record) => {
    if (mode === 'multiple') {
      setValue(
        name,
        [ ...(getValues()[name] || []), record ],
        { shouldValidate: true, shouldDirty: true },
      )
    } else {
      setValue(name, record, { shouldValidate: true, shouldDirty: true })
    }
    setModalVisible(false)
  }

  const fetchFn = (value, limit) => {
    return UserService.fetchUserAutocomplete(value, limit)
  }

  const mapper = {
    toAutocomplete(originalValue) {
      if (!originalValue) return null

      if (originalValue.fullName || originalValue.email) {
        let _label = originalValue.email
        if (originalValue.fullName) {
          _label = `${originalValue.fullName} <${originalValue.email}>`
        }
        return { value: originalValue.id, label: _label }
      }

      return { value: originalValue.id, label: originalValue.label }
    },
    toValue(originalValue) {
      if (!originalValue) return null
      return { id: originalValue.value, label: originalValue.label }
    },
  }

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      minHeight: 38,
      borderColor: state.isFocused ? '#80bdff' : '#ced4da',
      boxShadow: state.isFocused ? '0 0 0 .2rem rgba(0,123,255,.25)' : 'none',
      '&:hover': { borderColor: state.isFocused ? '#80bdff' : '#adb5bd' },
    }),
  }

  return (
    <>
      <AutocompleteInMemoryFormItem
        {...props}
        label={label}
        placeholder={placeholder}
        fetchFn={fetchFn}
        mapper={mapper}
        onOpenModal={() => setModalVisible(true)}
        hasPermissionToCreate={hasPermissionToCreate}
        selectProps={{
          styles: selectStyles,
        }}
      />

      {modalVisible && (
        <UserNewFormModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSuccess={doCreateSuccess}
        />
      )}
    </>
  )
}

export default UserAutocompleteFormItem
