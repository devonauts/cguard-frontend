import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import guardShiftEnumerators from 'src/modules/guardShift/guardShiftEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import StationAutocompleteFormItem from 'src/view/station/autocomplete/StationAutocompleteFormItem';
import SecurityGuardAutocompleteFormItem from 'src/view/securityGuard/autocomplete/SecurityGuardAutocompleteFormItem';
import InventoryHistoryAutocompleteFormItem from 'src/view/inventoryHistory/autocomplete/InventoryHistoryAutocompleteFormItem';
import PatrolLogAutocompleteFormItem from 'src/view/patrolLog/autocomplete/PatrolLogAutocompleteFormItem';
import IncidentAutocompleteFormItem from 'src/view/incident/autocomplete/IncidentAutocompleteFormItem';

const schema = yup.object().shape({
  punchInTime: yupFormSchemas.datetime(
    i18n('entities.guardShift.fields.punchInTime'),
    {
      "required": true
    },
  ),
  shiftSchedule: yupFormSchemas.enumerator(
    i18n('entities.guardShift.fields.shiftSchedule'),
    {
      "required": true,
      "options": guardShiftEnumerators.shiftSchedule
    },
  ),
  stationName: yupFormSchemas.relationToOne(
    i18n('entities.guardShift.fields.stationName'),
    {
      "required": true
    },
  ),
  guardName: yupFormSchemas.relationToOne(
    i18n('entities.guardShift.fields.guardName'),
    {
      "required": true
    },
  ),
  completeInventoryCheck: yupFormSchemas.relationToOne(
    i18n('entities.guardShift.fields.completeInventoryCheck'),
    {},
  ),
  numberOfPatrolsDuringShift: yupFormSchemas.integer(
    i18n('entities.guardShift.fields.numberOfPatrolsDuringShift'),
    {},
  ),
  patrolsDone: yupFormSchemas.relationToMany(
    i18n('entities.guardShift.fields.patrolsDone'),
    {},
  ),
  numberOfIncidentsDurindShift: yupFormSchemas.integer(
    i18n('entities.guardShift.fields.numberOfIncidentsDurindShift'),
    {
      "required": true
    },
  ),
  dailyIncidents: yupFormSchemas.relationToMany(
    i18n('entities.guardShift.fields.dailyIncidents'),
    {},
  ),
  observations: yupFormSchemas.string(
    i18n('entities.guardShift.fields.observations'),
    {
      "max": 500,
      "required": true
    },
  ),
  punchOutTime: yupFormSchemas.datetime(
    i18n('entities.guardShift.fields.punchOutTime'),
    {},
  ),
});

function GuardShiftForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      punchInTime: record.punchInTime ? moment(record.punchInTime).toDate() : null,
      shiftSchedule: record.shiftSchedule,
      stationName: record.stationName,
      guardName: record.guardName,
      completeInventoryCheck: record.completeInventoryCheck,
      numberOfPatrolsDuringShift: record.numberOfPatrolsDuringShift,
      patrolsDone: record.patrolsDone || [],
      numberOfIncidentsDurindShift: record.numberOfIncidentsDurindShift,
      dailyIncidents: record.dailyIncidents || [],
      observations: record.observations,
      punchOutTime: record.punchOutTime ? moment(record.punchOutTime).toDate() : null,
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
                name="punchInTime"
                label={i18n('entities.guardShift.fields.punchInTime')}
                required={true}
                showTimeInput
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="shiftSchedule"
                label={i18n('entities.guardShift.fields.shiftSchedule')}
                options={guardShiftEnumerators.shiftSchedule.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.guardShift.enumerators.shiftSchedule.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <StationAutocompleteFormItem  
                name="stationName"
                label={i18n('entities.guardShift.fields.stationName')}
                required={true}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SecurityGuardAutocompleteFormItem  
                name="guardName"
                label={i18n('entities.guardShift.fields.guardName')}
                required={true}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InventoryHistoryAutocompleteFormItem  
                name="completeInventoryCheck"
                label={i18n('entities.guardShift.fields.completeInventoryCheck')}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputNumberFormItem
                name="numberOfPatrolsDuringShift"
                label={i18n('entities.guardShift.fields.numberOfPatrolsDuringShift')}  
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <PatrolLogAutocompleteFormItem  
                name="patrolsDone"
                label={i18n('entities.guardShift.fields.patrolsDone')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputNumberFormItem
                name="numberOfIncidentsDurindShift"
                label={i18n('entities.guardShift.fields.numberOfIncidentsDurindShift')}  
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <IncidentAutocompleteFormItem  
                name="dailyIncidents"
                label={i18n('entities.guardShift.fields.dailyIncidents')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="observations"
                label={i18n('entities.guardShift.fields.observations')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="punchOutTime"
                label={i18n('entities.guardShift.fields.punchOutTime')}
                required={false}
                showTimeInput
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

export default GuardShiftForm;
