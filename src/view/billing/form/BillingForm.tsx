import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import billingEnumerators from 'src/modules/billing/billingEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/modules/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import ClientAccountAutocompleteFormItem from 'src/view/clientAccount/autocomplete/ClientAccountAutocompleteFormItem';

const schema = yup.object().shape({
  invoiceNumber: yupFormSchemas.string(
    i18n('entities.billing.fields.invoiceNumber'),
    {
      "max": 50,
      "required": true
    },
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.billing.fields.status'),
    {
      "required": true,
      "options": billingEnumerators.status
    },
  ),
  clientsInvoiced: yupFormSchemas.relationToOne(
    i18n('entities.billing.fields.clientsInvoiced'),
    {},
  ),
  montoPorPagar: yupFormSchemas.decimal(
    i18n('entities.billing.fields.montoPorPagar'),
    {},
  ),
  lastPaymentDate: yupFormSchemas.date(
    i18n('entities.billing.fields.lastPaymentDate'),
    {},
  ),
  nextPaymentDate: yupFormSchemas.date(
    i18n('entities.billing.fields.nextPaymentDate'),
    {},
  ),
  bill: yupFormSchemas.files(
    i18n('entities.billing.fields.bill'),
    {
      "required": true
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.billing.fields.description'),
    {
      "max": 100,
      "required": true
    },
  ),
});

function BillingForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      invoiceNumber: record.invoiceNumber,
      status: record.status,
      clientsInvoiced: record.clientsInvoiced,
      montoPorPagar: record.montoPorPagar,
      lastPaymentDate: record.lastPaymentDate ? moment(record.lastPaymentDate, 'YYYY-MM-DD').toDate() : null,
      nextPaymentDate: record.nextPaymentDate ? moment(record.nextPaymentDate, 'YYYY-MM-DD').toDate() : null,
      bill: record.bill || [],
      description: record.description,
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
              <InputFormItem
                name="invoiceNumber"
                label={i18n('entities.billing.fields.invoiceNumber')}
                required={true}
              autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="status"
                label={i18n('entities.billing.fields.status')}
                options={billingEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.billing.enumerators.status.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ClientAccountAutocompleteFormItem  
                name="clientsInvoiced"
                label={i18n('entities.billing.fields.clientsInvoiced')}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="montoPorPagar"
                label={i18n('entities.billing.fields.montoPorPagar')}  
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="lastPaymentDate"
                label={i18n('entities.billing.fields.lastPaymentDate')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="nextPaymentDate"
                label={i18n('entities.billing.fields.nextPaymentDate')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <FilesFormItem
                name="bill"
                label={i18n('entities.billing.fields.bill')}
                required={true}
                storage={Storage.values.billingBill}
                max={undefined}
                formats={["doc","jpg","png","pdf","csv","jpeg"]}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="description"
                label={i18n('entities.billing.fields.description')}
                required={true}
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

export default BillingForm;
