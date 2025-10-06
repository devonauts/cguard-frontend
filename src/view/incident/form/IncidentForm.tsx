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
import CheckboxFormItem from 'src/view/shared/form/items/CheckboxFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/modules/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import StationAutocompleteFormItem from 'src/view/station/autocomplete/StationAutocompleteFormItem';

const schema = yup.object().shape({
  date: yupFormSchemas.datetime(
    i18n('entities.incident.fields.date'),
    {
      "required": true
    },
  ),
  title: yupFormSchemas.string(
    i18n('entities.incident.fields.title'),
    {
      "required": true,
      "max": 255
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.incident.fields.description'),
    {
      "max": 2500,
      "required": true
    },
  ),
  imageUrl: yupFormSchemas.images(
    i18n('entities.incident.fields.imageUrl'),
    {
      "min": 1,
      "max": 20
    },
  ),
  wasRead: yupFormSchemas.boolean(
    i18n('entities.incident.fields.wasRead'),
    {},
  ),
  stationIncidents: yupFormSchemas.relationToOne(
    i18n('entities.incident.fields.stationIncidents'),
    {},
  ),
});

function IncidentForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      date: record.date ? moment(record.date).toDate() : null,
      title: record.title,
      description: record.description,
      imageUrl: record.imageUrl || [],
      wasRead: record.wasRead,
      stationIncidents: record.stationIncidents,
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
                name="date"
                label={i18n('entities.incident.fields.date')}
                required={true}
                showTimeInput
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="title"
                label={i18n('entities.incident.fields.title')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TextAreaFormItem
                name="description"
                label={i18n('entities.incident.fields.description')}  
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="imageUrl"
                label={i18n('entities.incident.fields.imageUrl')}
                required={false}
                storage={Storage.values.incidentImageUrl}
                max={20}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <CheckboxFormItem
                name="wasRead"
                label={i18n('entities.incident.fields.wasRead')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <StationAutocompleteFormItem  
                name="stationIncidents"
                label={i18n('entities.incident.fields.stationIncidents')}
                required={false}
                showCreate={!props.modal}
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

export default IncidentForm;
