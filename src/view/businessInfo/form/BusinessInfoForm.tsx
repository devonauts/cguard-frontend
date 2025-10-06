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
import Storage from 'src/modules/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';

const schema = yup.object().shape({
  companyName: yupFormSchemas.string(
    i18n('entities.businessInfo.fields.companyName'),
    {
      "required": true
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.businessInfo.fields.description'),
    {
      "required": true,
      "max": 5000
    },
  ),
  logo: yupFormSchemas.images(
    i18n('entities.businessInfo.fields.logo'),
    {
      "required": true
    },
  ),
  contactPhone: yupFormSchemas.string(
    i18n('entities.businessInfo.fields.contactPhone'),
    {
      "required": true
    },
  ),
  contactEmail: yupFormSchemas.string(
    i18n('entities.businessInfo.fields.contactEmail'),
    {
      "required": true
    },
  ),
  address: yupFormSchemas.string(
    i18n('entities.businessInfo.fields.address'),
    {
      "required": true
    },
  ),
});

function BusinessInfoForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      companyName: record.companyName,
      description: record.description,
      logo: record.logo || [],
      contactPhone: record.contactPhone,
      contactEmail: record.contactEmail,
      address: record.address,
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
                name="companyName"
                label={i18n('entities.businessInfo.fields.companyName')}
                required={true}
              autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TextAreaFormItem
                name="description"
                label={i18n('entities.businessInfo.fields.description')}  
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="logo"
                label={i18n('entities.businessInfo.fields.logo')}
                required={true}
                storage={Storage.values.businessInfoLogo}
                max={undefined}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="contactPhone"
                label={i18n('entities.businessInfo.fields.contactPhone')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="contactEmail"
                label={i18n('entities.businessInfo.fields.contactEmail')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="address"
                label={i18n('entities.businessInfo.fields.address')}
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

export default BusinessInfoForm;
