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
  iconImage: yupFormSchemas.images(
    i18n('entities.service.fields.iconImage'),
    {
      "max": 1
    },
  ),
  title: yupFormSchemas.string(
    i18n('entities.service.fields.title'),
    {},
  ),
  description: yupFormSchemas.string(
    i18n('entities.service.fields.description'),
    {
      "required": true,
      "max": 800
    },
  ),
  price: yupFormSchemas.decimal(
    i18n('entities.service.fields.price'),
    {
      "required": true
    },
  ),
  serviceImages: yupFormSchemas.images(
    i18n('entities.service.fields.serviceImages'),
    {
      "max": 10
    },
  ),
  specifications: yupFormSchemas.string(
    i18n('entities.service.fields.specifications'),
    {
      "max": 800,
      "required": true
    },
  ),
  subtitle: yupFormSchemas.string(
    i18n('entities.service.fields.subtitle'),
    {
      "max": 150
    },
  ),
});

function ServiceForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      iconImage: record.iconImage || [],
      title: record.title,
      description: record.description,
      price: record.price,
      serviceImages: record.serviceImages || [],
      specifications: record.specifications,
      subtitle: record.subtitle,
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
              <ImagesFormItem
                name="iconImage"
                label={i18n('entities.service.fields.iconImage')}
                required={false}
                storage={Storage.values.serviceIconImage}
                max={1}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="title"
                label={i18n('entities.service.fields.title')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TextAreaFormItem
                name="description"
                label={i18n('entities.service.fields.description')}  
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="price"
                label={i18n('entities.service.fields.price')}  
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="serviceImages"
                label={i18n('entities.service.fields.serviceImages')}
                required={false}
                storage={Storage.values.serviceServiceImages}
                max={10}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="specifications"
                label={i18n('entities.service.fields.specifications')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="subtitle"
                label={i18n('entities.service.fields.subtitle')}
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

export default ServiceForm;
