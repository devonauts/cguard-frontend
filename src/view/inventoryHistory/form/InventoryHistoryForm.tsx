import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import GuardShiftAutocompleteFormItem from 'src/view/guardShift/autocomplete/GuardShiftAutocompleteFormItem';
import InventoryAutocompleteFormItem from 'src/view/inventory/autocomplete/InventoryAutocompleteFormItem';

const schema = yup.object().shape({
  shiftOrigin: yupFormSchemas.relationToOne(
    i18n('entities.inventoryHistory.fields.shiftOrigin'),
    {},
  ),
  inventoryCheckedDate: yupFormSchemas.date(
    i18n('entities.inventoryHistory.fields.inventoryCheckedDate'),
    {},
  ),
  inventoryOrigin: yupFormSchemas.relationToOne(
    i18n('entities.inventoryHistory.fields.inventoryOrigin'),
    {},
  ),
  isComplete: yupFormSchemas.boolean(
    i18n('entities.inventoryHistory.fields.isComplete'),
    {},
  ),
  observation: yupFormSchemas.string(
    i18n('entities.inventoryHistory.fields.observation'),
    {
      "max": 500
    },
  ),
});

function InventoryHistoryForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      shiftOrigin: record.shiftOrigin,
      inventoryCheckedDate: record.inventoryCheckedDate ? moment(record.inventoryCheckedDate, 'YYYY-MM-DD').toDate() : null,
      inventoryOrigin: record.inventoryOrigin,
      isComplete: record.isComplete,
      observation: record.observation,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-7 col-md-8 col-12">
              <GuardShiftAutocompleteFormItem  
                name="shiftOrigin"
                label={i18n('entities.inventoryHistory.fields.shiftOrigin')}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="inventoryCheckedDate"
                label={i18n('entities.inventoryHistory.fields.inventoryCheckedDate')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InventoryAutocompleteFormItem  
                name="inventoryOrigin"
                label={i18n('entities.inventoryHistory.fields.inventoryOrigin')}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SwitchFormItem
                name="isComplete"
                label={i18n('entities.inventoryHistory.fields.isComplete')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="observation"
                label={i18n('entities.inventoryHistory.fields.observation')}
                required={false}
              />
            </div>
          </div>

          <div className="form-buttons">
            <button
              className="btn btn-primary"
              disabled={props.saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              <ButtonIcon
                loading={props.saveLoading}
                iconClass="far fa-save"
              />{' '}
              {i18n('common.save')}
            </button>

            <button
              className="btn btn-light"
              type="button"
              disabled={props.saveLoading}
              onClick={onReset}
            >
              <i className="fas fa-undo"></i>{' '}
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                className="btn btn-light"
                type="button"
                disabled={props.saveLoading}
                onClick={() => props.onCancel()}
              >
                <i className="fas fa-times"></i>{' '}
                {i18n('common.cancel')}
              </button>
            ) : null}
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default InventoryHistoryForm;
