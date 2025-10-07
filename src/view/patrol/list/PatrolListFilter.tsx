import { i18n } from 'src/i18n';
import actions from 'src/modules/patrol/list/patrolListActions';
import selectors from 'src/modules/patrol/list/patrolListSelectors';
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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import patrolEnumerators from 'src/modules/patrol/patrolEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import StationAutocompleteFormItem from 'src/view/station/autocomplete/StationAutocompleteFormItem';

const schema = yup.object().shape({
  assignedGuard: yupFilterSchemas.relationToOne(
    i18n('entities.patrol.fields.assignedGuard'),
  ),
  station: yupFilterSchemas.relationToOne(
    i18n('entities.patrol.fields.station'),
  ),
  scheduledTimeRange: yupFilterSchemas.datetimeRange(
    i18n('entities.patrol.fields.scheduledTimeRange'),
  ),
  completed: yupFilterSchemas.boolean(
    i18n('entities.patrol.fields.completed'),
  ),
  completionTimeRange: yupFilterSchemas.datetimeRange(
    i18n('entities.patrol.fields.completionTimeRange'),
  ),
  status: yupFilterSchemas.enumerator(
    i18n('entities.patrol.fields.status'),
  ),
});

const emptyValues = {
  // assignedGuard omitted - relation field will be undefined by default
  // station omitted - relation field will be undefined by default
  scheduledTimeRange: [],
  // completed omitted - boolean field will be undefined by default
  completionTimeRange: [],
  status: '', // enumerator - empty string gets transformed to null
}

const previewRenders = {
  assignedGuard: {
    label: i18n('entities.patrol.fields.assignedGuard'),
    render: filterRenders.relationToOne(),
  },
  station: {
      label: i18n('entities.patrol.fields.station'),
      render: filterRenders.relationToOne(),
    },
  scheduledTimeRange: {
    label: i18n('entities.patrol.fields.scheduledTimeRange'),
    render: filterRenders.datetimeRange(),
  },
  completed: {
    label: i18n('entities.patrol.fields.completed'),
    render: filterRenders.boolean(),
  },
  completionTimeRange: {
    label: i18n('entities.patrol.fields.completionTimeRange'),
    render: filterRenders.datetimeRange(),
  },
  status: {
    label: i18n('entities.patrol.fields.status'),
    render: filterRenders.enumerator('entities.patrol.enumerators.status',),
  },
}

function PatrolListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    const baseValues = {
      ...emptyValues,
      ...rawFilter,
    };
    
    // Clean up any relation/boolean fields that have null values
    // which would cause Yup casting errors
    if (baseValues.assignedGuard === null) {
      delete baseValues.assignedGuard;
    }
    if (baseValues.station === null) {
      delete baseValues.station;
    }
    if (baseValues.completed === null) {
      delete baseValues.completed;
    }
    
    return baseValues;
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
                      <UserAutocompleteFormItem  
                        name="assignedGuard"
                        label={i18n('entities.patrol.fields.assignedGuard')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <StationAutocompleteFormItem  
                        name="station"
                        label={i18n('entities.patrol.fields.station')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="scheduledTimeRange"
                        label={i18n('entities.patrol.fields.scheduledTimeRange')}    
                        showTimeInput
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="completed"
                        label={i18n('entities.patrol.fields.completed')}
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
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="completionTimeRange"
                        label={i18n('entities.patrol.fields.completionTimeRange')}    
                        showTimeInput
                      />
                    </div>
                    <div className="col-lg-6 col-12">
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

export default PatrolListFilter;