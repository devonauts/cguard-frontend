import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/modules/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';

const schema = yup.object().shape({
  provider: yupFormSchemas.string(
    i18n('entities.insurance.fields.provider'),
    {},
  ),
  policyNumber: yupFormSchemas.string(
    i18n('entities.insurance.fields.policyNumber'),
    {},
  ),
  validFrom: yupFormSchemas.date(
    i18n('entities.insurance.fields.validFrom'),
    {},
  ),
  validUntil: yupFormSchemas.date(
    i18n('entities.insurance.fields.validUntil'),
    {},
  ),
  document: yupFormSchemas.files(
    i18n('entities.insurance.fields.document'),
    {},
  ),
});

function InsuranceForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      provider: record.provider,
      policyNumber: record.policyNumber,
      validFrom: record.validFrom ? moment(record.validFrom, 'YYYY-MM-DD').toDate() : null,
      validUntil: record.validUntil ? moment(record.validUntil, 'YYYY-MM-DD').toDate() : null,
      document: record.document || [],
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
                name="provider"
                label={i18n('entities.insurance.fields.provider')}
                required={false}
              autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="policyNumber"
                label={i18n('entities.insurance.fields.policyNumber')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="validFrom"
                label={i18n('entities.insurance.fields.validFrom')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="validUntil"
                label={i18n('entities.insurance.fields.validUntil')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <FilesFormItem
                name="document"
                label={i18n('entities.insurance.fields.document')}
                required={false}
                storage={Storage.values.insuranceDocument}
                max={undefined}
                formats={undefined}
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

export default InsuranceForm;
