import { i18n } from 'src/i18n';
import actions from 'src/modules/additionalService/list/additionalServiceListActions';
import selectors from 'src/modules/additionalService/list/additionalServiceListSelectors';
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
import additionalServiceEnumerators from 'src/modules/additionalService/additionalServiceEnumerators';
import StationAutocompleteFormItem from 'src/view/station/autocomplete/StationAutocompleteFormItem';

const schema = yup.object().shape({
  stationAditionalServiceName: yupFilterSchemas.string(
    i18n('entities.additionalService.fields.stationAditionalServiceName'),
  ),
  dvr: yupFilterSchemas.enumerator(
    i18n('entities.additionalService.fields.dvr'),
  ),
  dvrSerialCode: yupFilterSchemas.string(
    i18n('entities.additionalService.fields.dvrSerialCode'),
  ),
  juegoDeCamarasInteriores: yupFilterSchemas.enumerator(
    i18n('entities.additionalService.fields.juegoDeCamarasInteriores'),
  ),
  juegoDeCamarasExteriores: yupFilterSchemas.enumerator(
    i18n('entities.additionalService.fields.juegoDeCamarasExteriores'),
  ),
  stations: yupFilterSchemas.relationToOne(
    i18n('entities.additionalService.fields.stations'),
  ),
});

const emptyValues = {
  stationAditionalServiceName: '',
  dvr: '',
  dvrSerialCode: '',
  juegoDeCamarasInteriores: '',
  juegoDeCamarasExteriores: '',
  // stations: omitted (relation field)
}

const previewRenders = {
  stationAditionalServiceName: {
    label: i18n('entities.additionalService.fields.stationAditionalServiceName'),
    render: filterRenders.generic(),
  },
  dvr: {
    label: i18n('entities.additionalService.fields.dvr'),
    render: filterRenders.enumerator('entities.additionalService.enumerators.dvr',),
  },
  dvrSerialCode: {
    label: i18n('entities.additionalService.fields.dvrSerialCode'),
    render: filterRenders.generic(),
  },
  juegoDeCamarasInteriores: {
    label: i18n('entities.additionalService.fields.juegoDeCamarasInteriores'),
    render: filterRenders.enumerator('entities.additionalService.enumerators.juegoDeCamarasInteriores',),
  },
  juegoDeCamarasExteriores: {
    label: i18n('entities.additionalService.fields.juegoDeCamarasExteriores'),
    render: filterRenders.enumerator('entities.additionalService.enumerators.juegoDeCamarasExteriores',),
  },
  stations: {
      label: i18n('entities.additionalService.fields.stations'),
      render: filterRenders.relationToOne(),
    },
}

function AdditionalServiceListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    const combined = {
      ...emptyValues,
      ...rawFilter,
    };
    
    // Clean up relation field stored null values
    if (combined.stations === null || combined.stations === '') {
      delete combined.stations;
    }
    
    return combined;
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
                      <InputFormItem
                        name="stationAditionalServiceName"
                        label={i18n('entities.additionalService.fields.stationAditionalServiceName')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="dvr"
                        label={i18n('entities.additionalService.fields.dvr')}
                        options={additionalServiceEnumerators.dvr.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.additionalService.enumerators.dvr.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="dvrSerialCode"
                        label={i18n('entities.additionalService.fields.dvrSerialCode')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="juegoDeCamarasInteriores"
                        label={i18n('entities.additionalService.fields.juegoDeCamarasInteriores')}
                        options={additionalServiceEnumerators.juegoDeCamarasInteriores.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.additionalService.enumerators.juegoDeCamarasInteriores.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="juegoDeCamarasExteriores"
                        label={i18n('entities.additionalService.fields.juegoDeCamarasExteriores')}
                        options={additionalServiceEnumerators.juegoDeCamarasExteriores.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.additionalService.enumerators.juegoDeCamarasExteriores.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <StationAutocompleteFormItem  
                        name="stations"
                        label={i18n('entities.additionalService.fields.stations')}        
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

export default AdditionalServiceListFilter;