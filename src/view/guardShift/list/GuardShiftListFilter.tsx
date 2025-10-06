import { i18n } from 'src/i18n';
import actions from 'src/modules/guardShift/list/guardShiftListActions';
import selectors from 'src/modules/guardShift/list/guardShiftListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FilterWrapper from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import guardShiftEnumerators from 'src/modules/guardShift/guardShiftEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import StationAutocompleteFormItem from 'src/view/station/autocomplete/StationAutocompleteFormItem';
import SecurityGuardAutocompleteFormItem from 'src/view/securityGuard/autocomplete/SecurityGuardAutocompleteFormItem';
import InventoryHistoryAutocompleteFormItem from 'src/view/inventoryHistory/autocomplete/InventoryHistoryAutocompleteFormItem';

const schema = yup.object().shape({
  punchInTimeRange: yupFilterSchemas.datetimeRange(
    i18n('entities.guardShift.fields.punchInTimeRange'),
  ),
  shiftSchedule: yupFilterSchemas.enumerator(
    i18n('entities.guardShift.fields.shiftSchedule'),
  ),
  stationName: yupFilterSchemas.relationToOne(
    i18n('entities.guardShift.fields.stationName'),
  ),
  guardName: yupFilterSchemas.relationToOne(
    i18n('entities.guardShift.fields.guardName'),
  ),
  completeInventoryCheck: yupFilterSchemas.relationToOne(
    i18n('entities.guardShift.fields.completeInventoryCheck'),
  ),
  numberOfPatrolsDuringShiftRange: yupFilterSchemas.integerRange(
    i18n('entities.guardShift.fields.numberOfPatrolsDuringShiftRange'),
  ),
  numberOfIncidentsDurindShiftRange: yupFilterSchemas.integerRange(
    i18n('entities.guardShift.fields.numberOfIncidentsDurindShiftRange'),
  ),
  observations: yupFilterSchemas.string(
    i18n('entities.guardShift.fields.observations'),
  ),
  punchOutTimeRange: yupFilterSchemas.datetimeRange(
    i18n('entities.guardShift.fields.punchOutTimeRange'),
  ),
});

const emptyValues = {
  punchInTimeRange: [],
  shiftSchedule: null,
  stationName: null,
  guardName: null,
  completeInventoryCheck: null,
  numberOfPatrolsDuringShiftRange: [],
  numberOfIncidentsDurindShiftRange: [],
  observations: null,
  punchOutTimeRange: [],
}

const previewRenders = {
  punchInTimeRange: {
    label: i18n('entities.guardShift.fields.punchInTimeRange'),
    render: filterRenders.datetimeRange(),
  },
  shiftSchedule: {
    label: i18n('entities.guardShift.fields.shiftSchedule'),
    render: filterRenders.enumerator('entities.guardShift.enumerators.shiftSchedule',),
  },
  stationName: {
      label: i18n('entities.guardShift.fields.stationName'),
      render: filterRenders.relationToOne(),
    },
  guardName: {
      label: i18n('entities.guardShift.fields.guardName'),
      render: filterRenders.relationToOne(),
    },
  completeInventoryCheck: {
      label: i18n('entities.guardShift.fields.completeInventoryCheck'),
      render: filterRenders.relationToOne(),
    },
  numberOfPatrolsDuringShiftRange: {
    label: i18n('entities.guardShift.fields.numberOfPatrolsDuringShiftRange'),
    render: filterRenders.range(),
  },
  numberOfIncidentsDurindShiftRange: {
    label: i18n('entities.guardShift.fields.numberOfIncidentsDurindShiftRange'),
    render: filterRenders.range(),
  },
  observations: {
    label: i18n('entities.guardShift.fields.observations'),
    render: filterRenders.generic(),
  },
  punchOutTimeRange: {
    label: i18n('entities.guardShift.fields.punchOutTimeRange'),
    render: filterRenders.datetimeRange(),
  },
}

function GuardShiftListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  return (
    <FilterWrapper>
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className="container">
        <div
          className={`collapse ${expanded ? 'show' : ''}`}
        >
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="row">
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="punchInTimeRange"
                        label={i18n('entities.guardShift.fields.punchInTimeRange')}    
                        showTimeInput
                      />
                    </div>
                    <div className="col-lg-6 col-12">
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
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <StationAutocompleteFormItem  
                        name="stationName"
                        label={i18n('entities.guardShift.fields.stationName')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SecurityGuardAutocompleteFormItem  
                        name="guardName"
                        label={i18n('entities.guardShift.fields.guardName')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InventoryHistoryAutocompleteFormItem  
                        name="completeInventoryCheck"
                        label={i18n('entities.guardShift.fields.completeInventoryCheck')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputNumberRangeFormItem
                        name="numberOfPatrolsDuringShiftRange"
                        label={i18n('entities.guardShift.fields.numberOfPatrolsDuringShiftRange')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputNumberRangeFormItem
                        name="numberOfIncidentsDurindShiftRange"
                        label={i18n('entities.guardShift.fields.numberOfIncidentsDurindShiftRange')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="observations"
                        label={i18n('entities.guardShift.fields.observations')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="punchOutTimeRange"
                        label={i18n('entities.guardShift.fields.punchOutTimeRange')}    
                        showTimeInput
                      />
                    </div>
              </div>

              <div className="row">
                <div className="col-12 filter-buttons">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-search"
                    />{' '}
                    {i18n('common.search')}
                  </button>
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={onReset}
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-undo"
                    />{' '}
                    {i18n('common.reset')}
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </FilterWrapper>
  );
}

export default GuardShiftListFilter;