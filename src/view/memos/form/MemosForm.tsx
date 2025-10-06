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
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/modules/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import SecurityGuardAutocompleteFormItem from 'src/view/securityGuard/autocomplete/SecurityGuardAutocompleteFormItem';

const schema = yup.object().shape({
  dateTime: yupFormSchemas.datetime(
    i18n('entities.memos.fields.dateTime'),
    {},
  ),
  guardName: yupFormSchemas.relationToOne(
    i18n('entities.memos.fields.guardName'),
    {},
  ),
  subject: yupFormSchemas.string(
    i18n('entities.memos.fields.subject'),
    {
      "max": 200
    },
  ),
  content: yupFormSchemas.string(
    i18n('entities.memos.fields.content'),
    {
      "max": 800
    },
  ),
  wasAccepted: yupFormSchemas.boolean(
    i18n('entities.memos.fields.wasAccepted'),
    {},
  ),
  memoDocumentPdf: yupFormSchemas.files(
    i18n('entities.memos.fields.memoDocumentPdf'),
    {},
  ),
});

function MemosForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      dateTime: record.dateTime ? moment(record.dateTime).toDate() : null,
      guardName: record.guardName,
      subject: record.subject,
      content: record.content,
      wasAccepted: record.wasAccepted,
      memoDocumentPdf: record.memoDocumentPdf || [],
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
                name="dateTime"
                label={i18n('entities.memos.fields.dateTime')}
                required={false}
                showTimeInput
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SecurityGuardAutocompleteFormItem  
                name="guardName"
                label={i18n('entities.memos.fields.guardName')}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="subject"
                label={i18n('entities.memos.fields.subject')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TextAreaFormItem
                name="content"
                label={i18n('entities.memos.fields.content')}  
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SwitchFormItem
                name="wasAccepted"
                label={i18n('entities.memos.fields.wasAccepted')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <FilesFormItem
                name="memoDocumentPdf"
                label={i18n('entities.memos.fields.memoDocumentPdf')}
                required={false}
                storage={Storage.values.memosMemoDocumentPdf}
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

export default MemosForm;
