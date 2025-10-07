import { i18n } from 'src/i18n';
import actions from 'src/modules/incident/list/incidentListActions';
import selectors from 'src/modules/incident/list/incidentListSelectors';
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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import StationAutocompleteFormItem from 'src/view/station/autocomplete/StationAutocompleteFormItem';

const schema = yup.object().shape({
  dateRange: yupFilterSchemas.datetimeRange(
    i18n('entities.incident.fields.dateRange'),
  ),
  title: yupFilterSchemas.string(
    i18n('entities.incident.fields.title'),
  ),
  description: yupFilterSchemas.string(
    i18n('entities.incident.fields.description'),
  ),
  wasRead: yupFilterSchemas.boolean(
    i18n('entities.incident.fields.wasRead'),
  ),
  stationIncidents: yupFilterSchemas.relationToOne(
    i18n('entities.incident.fields.stationIncidents'),
  ),
});

const emptyValues = {
  dateRange: [],
  title: '',
  description: '',
  // wasRead omitted - boolean field will be undefined by default
  // stationIncidents omitted - relation field will be undefined by default
}

const previewRenders = {
  dateRange: {
    label: i18n('entities.incident.fields.dateRange'),
    render: filterRenders.datetimeRange(),
  },
  title: {
    label: i18n('entities.incident.fields.title'),
    render: filterRenders.generic(),
  },
  description: {
    label: i18n('entities.incident.fields.description'),
    render: filterRenders.generic(),
  },
  wasRead: {
    label: i18n('entities.incident.fields.wasRead'),
    render: filterRenders.boolean(),
  },
  stationIncidents: {
      label: i18n('entities.incident.fields.stationIncidents'),
      render: filterRenders.relationToOne(),
    },
}

function IncidentListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    const baseValues = {
      ...emptyValues,
      ...rawFilter,
    };
    
    // Clean up any relation/boolean fields that have null or empty string values
    // which would cause Yup casting errors
    if (baseValues.wasRead === null || baseValues.wasRead === '') {
      delete baseValues.wasRead;
    }
    if (baseValues.stationIncidents === null || baseValues.stationIncidents === '') {
      delete baseValues.stationIncidents;
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
                      <DatePickerRangeFormItem
                        name="dateRange"
                        label={i18n('entities.incident.fields.dateRange')}    
                        showTimeInput
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="title"
                        label={i18n('entities.incident.fields.title')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="description"
                        label={i18n('entities.incident.fields.description')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="wasRead"
                        label={i18n('entities.incident.fields.wasRead')}
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
                      <StationAutocompleteFormItem  
                        name="stationIncidents"
                        label={i18n('entities.incident.fields.stationIncidents')}        
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

export default IncidentListFilter;