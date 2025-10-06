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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import stationEnumerators from 'src/modules/station/stationEnumerators';
import ClientAccountAutocompleteFormItem from 'src/view/clientAccount/autocomplete/ClientAccountAutocompleteFormItem';
import TaskAutocompleteFormItem from 'src/view/task/autocomplete/TaskAutocompleteFormItem';
import ReportAutocompleteFormItem from 'src/view/report/autocomplete/ReportAutocompleteFormItem';
import IncidentAutocompleteFormItem from 'src/view/incident/autocomplete/IncidentAutocompleteFormItem';
import PatrolCheckpointAutocompleteFormItem from 'src/view/patrolCheckpoint/autocomplete/PatrolCheckpointAutocompleteFormItem';
import PatrolAutocompleteFormItem from 'src/view/patrol/autocomplete/PatrolAutocompleteFormItem';
import ShiftAutocompleteFormItem from 'src/view/shift/autocomplete/ShiftAutocompleteFormItem';

const schema = yup.object().shape({
  stationOrigin: yupFormSchemas.relationToOne(
    i18n('entities.station.fields.stationOrigin'),
    {},
  ),
  stationName: yupFormSchemas.string(
    i18n('entities.station.fields.stationName'),
    {
      "max": 250,
      "required": true
    },
  ),
  latitud: yupFormSchemas.string(
    i18n('entities.station.fields.latitud'),
    {
      "required": true,
      "max": 100
    },
  ),
  longitud: yupFormSchemas.string(
    i18n('entities.station.fields.longitud'),
    {
      "required": true,
      "max": 100
    },
  ),
  numberOfGuardsInStation: yupFormSchemas.enumerator(
    i18n('entities.station.fields.numberOfGuardsInStation'),
    {
      "options": stationEnumerators.numberOfGuardsInStation
    },
  ),
  assignedGuards: yupFormSchemas.relationToMany(
    i18n('entities.station.fields.assignedGuards'),
    {},
  ),
  stationSchedule: yupFormSchemas.enumerator(
    i18n('entities.station.fields.stationSchedule'),
    {
      "required": true,
      "options": stationEnumerators.stationSchedule
    },
  ),
  startingTimeInDay: yupFormSchemas.string(
    i18n('entities.station.fields.startingTimeInDay'),
    {},
  ),
  finishTimeInDay: yupFormSchemas.string(
    i18n('entities.station.fields.finishTimeInDay'),
    {},
  ),
  tasks: yupFormSchemas.relationToMany(
    i18n('entities.station.fields.tasks'),
    {},
  ),
  reports: yupFormSchemas.relationToMany(
    i18n('entities.station.fields.reports'),
    {},
  ),
  incidents: yupFormSchemas.relationToMany(
    i18n('entities.station.fields.incidents'),
    {},
  ),
  checkpoints: yupFormSchemas.relationToMany(
    i18n('entities.station.fields.checkpoints'),
    {},
  ),
  patrol: yupFormSchemas.relationToMany(
    i18n('entities.station.fields.patrol'),
    {},
  ),
  shift: yupFormSchemas.relationToMany(
    i18n('entities.station.fields.shift'),
    {},
  ),
});

function StationForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      stationOrigin: record.stationOrigin,
      stationName: record.stationName,
      latitud: record.latitud,
      longitud: record.longitud,
      numberOfGuardsInStation: record.numberOfGuardsInStation,
      assignedGuards: record.assignedGuards || [],
      stationSchedule: record.stationSchedule,
      startingTimeInDay: record.startingTimeInDay,
      finishTimeInDay: record.finishTimeInDay,
      tasks: record.tasks || [],
      reports: record.reports || [],
      incidents: record.incidents || [],
      checkpoints: record.checkpoints || [],
      patrol: record.patrol || [],
      shift: record.shift || [],
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
              <ClientAccountAutocompleteFormItem  
                name="stationOrigin"
                label={i18n('entities.station.fields.stationOrigin')}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="stationName"
                label={i18n('entities.station.fields.stationName')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="latitud"
                label={i18n('entities.station.fields.latitud')}
              hint={i18n('entities.station.hints.latitud')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="longitud"
                label={i18n('entities.station.fields.longitud')}
              hint={i18n('entities.station.hints.longitud')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="numberOfGuardsInStation"
                label={i18n('entities.station.fields.numberOfGuardsInStation')}
                options={stationEnumerators.numberOfGuardsInStation.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.station.enumerators.numberOfGuardsInStation.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <UserAutocompleteFormItem  
                name="assignedGuards"
                label={i18n('entities.station.fields.assignedGuards')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="stationSchedule"
                label={i18n('entities.station.fields.stationSchedule')}
                options={stationEnumerators.stationSchedule.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.station.enumerators.stationSchedule.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="startingTimeInDay"
                label={i18n('entities.station.fields.startingTimeInDay')}
              placeholder={i18n('entities.station.placeholders.startingTimeInDay')}
              hint={i18n('entities.station.hints.startingTimeInDay')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="finishTimeInDay"
                label={i18n('entities.station.fields.finishTimeInDay')}
              placeholder={i18n('entities.station.placeholders.finishTimeInDay')}
              hint={i18n('entities.station.hints.finishTimeInDay')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TaskAutocompleteFormItem  
                name="tasks"
                label={i18n('entities.station.fields.tasks')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ReportAutocompleteFormItem  
                name="reports"
                label={i18n('entities.station.fields.reports')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <IncidentAutocompleteFormItem  
                name="incidents"
                label={i18n('entities.station.fields.incidents')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <PatrolCheckpointAutocompleteFormItem  
                name="checkpoints"
                label={i18n('entities.station.fields.checkpoints')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <PatrolAutocompleteFormItem  
                name="patrol"
                label={i18n('entities.station.fields.patrol')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ShiftAutocompleteFormItem  
                name="shift"
                label={i18n('entities.station.fields.shift')}
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

export default StationForm;
