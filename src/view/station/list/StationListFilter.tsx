import { i18n } from 'src/i18n';
import actions from 'src/modules/station/list/stationListActions';
import selectors from 'src/modules/station/list/stationListSelectors';
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
import stationEnumerators from 'src/modules/station/stationEnumerators';
import ClientAccountAutocompleteFormItem from 'src/view/clientAccount/autocomplete/ClientAccountAutocompleteFormItem';

const schema = yup.object().shape({
  stationOrigin: yupFilterSchemas.relationToOne(
    i18n('entities.station.fields.stationOrigin'),
  ),
  stationName: yupFilterSchemas.string(
    i18n('entities.station.fields.stationName'),
  ),
  stationSchedule: yupFilterSchemas.enumerator(
    i18n('entities.station.fields.stationSchedule'),
  ),
  startingTimeInDay: yupFilterSchemas.string(
    i18n('entities.station.fields.startingTimeInDay'),
  ),
  finishTimeInDay: yupFilterSchemas.string(
    i18n('entities.station.fields.finishTimeInDay'),
  ),
});

const emptyValues = {
  // stationOrigin omitted - relation field will be undefined by default
  stationName: '',
  stationSchedule: '', // enumerator - empty string gets transformed to null
  startingTimeInDay: '',
  finishTimeInDay: '',
}

const previewRenders = {
  stationOrigin: {
      label: i18n('entities.station.fields.stationOrigin'),
      render: filterRenders.relationToOne(),
    },
  stationName: {
    label: i18n('entities.station.fields.stationName'),
    render: filterRenders.generic(),
  },
  stationSchedule: {
    label: i18n('entities.station.fields.stationSchedule'),
    render: filterRenders.enumerator('entities.station.enumerators.stationSchedule',),
  },
  startingTimeInDay: {
    label: i18n('entities.station.fields.startingTimeInDay'),
    render: filterRenders.generic(),
  },
  finishTimeInDay: {
    label: i18n('entities.station.fields.finishTimeInDay'),
    render: filterRenders.generic(),
  },
}

function StationListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    const baseValues = {
      ...emptyValues,
      ...rawFilter,
    };
    
    // Clean up any relation fields that have null values
    // which would cause Yup casting errors
    if (baseValues.stationOrigin === null) {
      delete baseValues.stationOrigin;
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
                      <ClientAccountAutocompleteFormItem  
                        name="stationOrigin"
                        label={i18n('entities.station.fields.stationOrigin')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="stationName"
                        label={i18n('entities.station.fields.stationName')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
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
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="startingTimeInDay"
                        label={i18n('entities.station.fields.startingTimeInDay')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="finishTimeInDay"
                        label={i18n('entities.station.fields.finishTimeInDay')}      
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

export default StationListFilter;