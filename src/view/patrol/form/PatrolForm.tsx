import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import patrolEnumerators from 'src/modules/patrol/patrolEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import StationAutocompleteFormItem from 'src/view/station/autocomplete/StationAutocompleteFormItem';
import PatrolCheckpointAutocompleteFormItem from 'src/view/patrolCheckpoint/autocomplete/PatrolCheckpointAutocompleteFormItem';
import PatrolLogAutocompleteFormItem from 'src/view/patrolLog/autocomplete/PatrolLogAutocompleteFormItem';

const schema = yup.object().shape({
  assignedGuard: yupFormSchemas.relationToOne(
    i18n('entities.patrol.fields.assignedGuard'),
    {
      "required": true
    },
  ),
  station: yupFormSchemas.relationToOne(
    i18n('entities.patrol.fields.station'),
    {
      "required": true
    },
  ),
  scheduledTime: yupFormSchemas.datetime(
    i18n('entities.patrol.fields.scheduledTime'),
    {
      "required": true
    },
  ),
  completed: yupFormSchemas.boolean(
    i18n('entities.patrol.fields.completed'),
    {},
  ),
  checkpoints: yupFormSchemas.relationToMany(
    i18n('entities.patrol.fields.checkpoints'),
    {},
  ),
  completionTime: yupFormSchemas.datetime(
    i18n('entities.patrol.fields.completionTime'),
    {},
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.patrol.fields.status'),
    {
      "options": patrolEnumerators.status
    },
  ),
  logs: yupFormSchemas.relationToMany(
    i18n('entities.patrol.fields.logs'),
    {},
  ),
});

function PatrolForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      assignedGuard: record.assignedGuard,
      station: record.station,
      scheduledTime: record.scheduledTime ? moment(record.scheduledTime).toDate() : null,
      completed: record.completed,
      checkpoints: record.checkpoints || [],
      completionTime: record.completionTime ? moment(record.completionTime).toDate() : null,
      status: record.status,
      logs: record.logs || [],
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
              <UserAutocompleteFormItem  
                name="assignedGuard"
                label={i18n('entities.patrol.fields.assignedGuard')}
                required={true}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <StationAutocompleteFormItem  
                name="station"
                label={i18n('entities.patrol.fields.station')}
                required={true}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="scheduledTime"
                label={i18n('entities.patrol.fields.scheduledTime')}
                required={true}
                showTimeInput
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SwitchFormItem
                name="completed"
                label={i18n('entities.patrol.fields.completed')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <PatrolCheckpointAutocompleteFormItem  
                name="checkpoints"
                label={i18n('entities.patrol.fields.checkpoints')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="completionTime"
                label={i18n('entities.patrol.fields.completionTime')}
                required={false}
                showTimeInput
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="status"
                label={i18n('entities.patrol.fields.status')}
                options={patrolEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.patrol.enumerators.status.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <PatrolLogAutocompleteFormItem  
                name="logs"
                label={i18n('entities.patrol.fields.logs')}
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

export default PatrolForm;
