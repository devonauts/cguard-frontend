import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import ServiceAutocompleteFormItem from 'src/view/service/autocomplete/ServiceAutocompleteFormItem';

const schema = yup.object().shape({
  names: yupFormSchemas.string(
    i18n('entities.inquiries.fields.names'),
    {
      "max": 200,
      "required": true
    },
  ),
  city: yupFormSchemas.string(
    i18n('entities.inquiries.fields.city'),
    {
      "max": 70,
      "required": true
    },
  ),
  email: yupFormSchemas.string(
    i18n('entities.inquiries.fields.email'),
    {
      "max": 200,
      "required": true
    },
  ),
  phoneNumber: yupFormSchemas.string(
    i18n('entities.inquiries.fields.phoneNumber'),
    {
      "max": 10,
      "required": true
    },
  ),
  message: yupFormSchemas.string(
    i18n('entities.inquiries.fields.message'),
    {
      "max": 300,
      "required": true
    },
  ),
  serviceOfInterest: yupFormSchemas.relationToOne(
    i18n('entities.inquiries.fields.serviceOfInterest'),
    {
      "required": true
    },
  ),
});

function InquiriesForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      names: record.names,
      city: record.city,
      email: record.email,
      phoneNumber: record.phoneNumber,
      message: record.message,
      serviceOfInterest: record.serviceOfInterest,
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
                name="names"
                label={i18n('entities.inquiries.fields.names')}
                required={true}
              autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="city"
                label={i18n('entities.inquiries.fields.city')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="email"
                label={i18n('entities.inquiries.fields.email')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="phoneNumber"
                label={i18n('entities.inquiries.fields.phoneNumber')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TextAreaFormItem
                name="message"
                label={i18n('entities.inquiries.fields.message')}  
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ServiceAutocompleteFormItem  
                name="serviceOfInterest"
                label={i18n('entities.inquiries.fields.serviceOfInterest')}
                required={true}
                showCreate={!props.modal}
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

export default InquiriesForm;
