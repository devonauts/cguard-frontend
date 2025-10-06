import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/modules/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import ServiceAutocompleteFormItem from 'src/view/service/autocomplete/ServiceAutocompleteFormItem';
import StationAutocompleteFormItem from 'src/view/station/autocomplete/StationAutocompleteFormItem';
import BillingAutocompleteFormItem from 'src/view/billing/autocomplete/BillingAutocompleteFormItem';
import NotificationRecipientAutocompleteFormItem from 'src/view/notificationRecipient/autocomplete/NotificationRecipientAutocompleteFormItem';

const schema = yup.object().shape({
  contractDate: yupFormSchemas.date(
    i18n('entities.clientAccount.fields.contractDate'),
    {},
  ),
  rucNumber: yupFormSchemas.string(
    i18n('entities.clientAccount.fields.rucNumber'),
    {
      "max": 13
    },
  ),
  commercialName: yupFormSchemas.string(
    i18n('entities.clientAccount.fields.commercialName'),
    {
      "max": 200
    },
  ),
  address: yupFormSchemas.string(
    i18n('entities.clientAccount.fields.address'),
    {
      "max": 200,
      "required": true
    },
  ),
  phoneNumber: yupFormSchemas.string(
    i18n('entities.clientAccount.fields.phoneNumber'),
    {
      "max": 10,
      "required": true
    },
  ),
  faxNumber: yupFormSchemas.string(
    i18n('entities.clientAccount.fields.faxNumber'),
    {
      "max": 10
    },
  ),
  email: yupFormSchemas.string(
    i18n('entities.clientAccount.fields.email'),
    {
      "required": true,
      "max": 150
    },
  ),
  logoUrl: yupFormSchemas.images(
    i18n('entities.clientAccount.fields.logoUrl'),
    {
      "max": 1
    },
  ),
  placePictureUrl: yupFormSchemas.images(
    i18n('entities.clientAccount.fields.placePictureUrl'),
    {
      "max": 1
    },
  ),
  representante: yupFormSchemas.relationToOne(
    i18n('entities.clientAccount.fields.representante'),
    {},
  ),
  purchasedServices: yupFormSchemas.relationToMany(
    i18n('entities.clientAccount.fields.purchasedServices'),
    {},
  ),
  stations: yupFormSchemas.relationToMany(
    i18n('entities.clientAccount.fields.stations'),
    {},
  ),
  billingInvoices: yupFormSchemas.relationToMany(
    i18n('entities.clientAccount.fields.billingInvoices'),
    {},
  ),
  pushNotifications: yupFormSchemas.relationToMany(
    i18n('entities.clientAccount.fields.pushNotifications'),
    {},
  ),
});

function ClientAccountForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      contractDate: record.contractDate ? moment(record.contractDate, 'YYYY-MM-DD').toDate() : null,
      rucNumber: record.rucNumber,
      commercialName: record.commercialName,
      address: record.address,
      phoneNumber: record.phoneNumber,
      faxNumber: record.faxNumber,
      email: record.email,
      logoUrl: record.logoUrl || [],
      placePictureUrl: record.placePictureUrl || [],
      representante: record.representante,
      purchasedServices: record.purchasedServices || [],
      stations: record.stations || [],
      billingInvoices: record.billingInvoices || [],
      pushNotifications: record.pushNotifications || [],
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
              <DatePickerFormItem
                name="contractDate"
                label={i18n('entities.clientAccount.fields.contractDate')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="rucNumber"
                label={i18n('entities.clientAccount.fields.rucNumber')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="commercialName"
                label={i18n('entities.clientAccount.fields.commercialName')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="address"
                label={i18n('entities.clientAccount.fields.address')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="phoneNumber"
                label={i18n('entities.clientAccount.fields.phoneNumber')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="faxNumber"
                label={i18n('entities.clientAccount.fields.faxNumber')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="email"
                label={i18n('entities.clientAccount.fields.email')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="logoUrl"
                label={i18n('entities.clientAccount.fields.logoUrl')}
                required={false}
                storage={Storage.values.clientAccountLogoUrl}
                max={1}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="placePictureUrl"
                label={i18n('entities.clientAccount.fields.placePictureUrl')}
                required={false}
                storage={Storage.values.clientAccountPlacePictureUrl}
                max={1}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <UserAutocompleteFormItem  
                name="representante"
                label={i18n('entities.clientAccount.fields.representante')}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ServiceAutocompleteFormItem  
                name="purchasedServices"
                label={i18n('entities.clientAccount.fields.purchasedServices')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <StationAutocompleteFormItem  
                name="stations"
                label={i18n('entities.clientAccount.fields.stations')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <BillingAutocompleteFormItem  
                name="billingInvoices"
                label={i18n('entities.clientAccount.fields.billingInvoices')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <NotificationRecipientAutocompleteFormItem  
                name="pushNotifications"
                label={i18n('entities.clientAccount.fields.pushNotifications')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
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

export default ClientAccountForm;
