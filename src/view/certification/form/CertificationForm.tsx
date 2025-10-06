import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { CheckIcon } from '@heroicons/react/24/outline';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import Button from 'src/components/ui/Button';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/modules/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';

const schema = yup.object().shape({
  title: yupFormSchemas.string(
    i18n('entities.certification.fields.title'),
    {
      "max": 255,
      "required": true
    },
  ),
  code: yupFormSchemas.string(
    i18n('entities.certification.fields.code'),
    {
      "required": true,
      "max": 255
    },
  ),
  image: yupFormSchemas.images(
    i18n('entities.certification.fields.image'),
    {
      "max": 1
    },
  ),
  icon: yupFormSchemas.images(
    i18n('entities.certification.fields.icon'),
    {
      "required": true,
      "max": 1
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.certification.fields.description'),
    {
      "required": true,
      "max": 800
    },
  ),
  acquisitionDate: yupFormSchemas.date(
    i18n('entities.certification.fields.acquisitionDate'),
    {
      "required": true
    },
  ),
  expirationDate: yupFormSchemas.date(
    i18n('entities.certification.fields.expirationDate'),
    {
      "required": true
    },
  ),
});

function CertificationForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      title: record.title,
      code: record.code,
      image: record.image || [],
      icon: record.icon || [],
      description: record.description,
      acquisitionDate: record.acquisitionDate ? moment(record.acquisitionDate, 'YYYY-MM-DD').toDate() : null,
      expirationDate: record.expirationDate ? moment(record.expirationDate, 'YYYY-MM-DD').toDate() : null,
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
                name="title"
                label={i18n('entities.certification.fields.title')}
                required={true}
              autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="code"
                label={i18n('entities.certification.fields.code')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="image"
                label={i18n('entities.certification.fields.image')}
                required={false}
                storage={Storage.values.certificationImage}
                max={1}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="icon"
                label={i18n('entities.certification.fields.icon')}
                required={true}
                storage={Storage.values.certificationIcon}
                max={1}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TextAreaFormItem
                name="description"
                label={i18n('entities.certification.fields.description')}  
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="acquisitionDate"
                label={i18n('entities.certification.fields.acquisitionDate')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="expirationDate"
                label={i18n('entities.certification.fields.expirationDate')}
                required={true}
              />
            </div>
          </div>

          <div className="form-buttons">
            <Button
              variant="primary"
              size="md"
              disabled={props.saveLoading}
              loading={props.saveLoading}
              onClick={form.handleSubmit(onSubmit)}
            >
              <CheckIcon className="h-4 w-4" />
              {i18n('common.save')}
            </Button>

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

export default CertificationForm;
