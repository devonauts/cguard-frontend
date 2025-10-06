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
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import patrolLogEnumerators from 'src/modules/patrolLog/patrolLogEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import PatrolAutocompleteFormItem from 'src/view/patrol/autocomplete/PatrolAutocompleteFormItem';

const schema = yup.object().shape({
  patrol: yupFormSchemas.relationToOne(
    i18n('entities.patrolLog.fields.patrol'),
    {
      "required": true
    },
  ),
  scannedBy: yupFormSchemas.relationToOne(
    i18n('entities.patrolLog.fields.scannedBy'),
    {
      "required": true
    },
  ),
  scanTime: yupFormSchemas.datetime(
    i18n('entities.patrolLog.fields.scanTime'),
    {
      "required": true
    },
  ),
  latitude: yupFormSchemas.string(
    i18n('entities.patrolLog.fields.latitude'),
    {
      "required": true
    },
  ),
  longitude: yupFormSchemas.string(
    i18n('entities.patrolLog.fields.longitude'),
    {
      "required": true
    },
  ),
  validLocation: yupFormSchemas.boolean(
    i18n('entities.patrolLog.fields.validLocation'),
    {},
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.patrolLog.fields.status'),
    {
      "required": true,
      "options": patrolLogEnumerators.status
    },
  ),
});

function PatrolLogForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      patrol: record.patrol,
      scannedBy: record.scannedBy,
      scanTime: record.scanTime ? moment(record.scanTime).toDate() : null,
      latitude: record.latitude,
      longitude: record.longitude,
      validLocation: record.validLocation,
      status: record.status,
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
              <PatrolAutocompleteFormItem  
                name="patrol"
                label={i18n('entities.patrolLog.fields.patrol')}
                required={true}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <UserAutocompleteFormItem  
                name="scannedBy"
                label={i18n('entities.patrolLog.fields.scannedBy')}
                required={true}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="scanTime"
                label={i18n('entities.patrolLog.fields.scanTime')}
                required={true}
                showTimeInput
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="latitude"
                label={i18n('entities.patrolLog.fields.latitude')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="longitude"
                label={i18n('entities.patrolLog.fields.longitude')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <RadioFormItem
                name="validLocation"
                label={i18n('entities.patrolLog.fields.validLocation')}
                options={[
                  {
                    value: true,
                    label: i18n('common.yes'),
                  },
                  {
                    value: false,
                    label: i18n('common.no'),
                  },
                ]}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="status"
                label={i18n('entities.patrolLog.fields.status')}
                options={patrolLogEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.patrolLog.enumerators.status.${value}`,
                    ),
                  }),
                )}
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

export default PatrolLogForm;
