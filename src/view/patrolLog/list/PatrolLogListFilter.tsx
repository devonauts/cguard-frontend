import { i18n } from 'src/i18n';
import actions from 'src/modules/patrolLog/list/patrolLogListActions';
import selectors from 'src/modules/patrolLog/list/patrolLogListSelectors';
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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import patrolLogEnumerators from 'src/modules/patrolLog/patrolLogEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import PatrolAutocompleteFormItem from 'src/view/patrol/autocomplete/PatrolAutocompleteFormItem';

const schema = yup.object().shape({
  patrol: yupFilterSchemas.relationToOne(
    i18n('entities.patrolLog.fields.patrol'),
  ),
  scannedBy: yupFilterSchemas.relationToOne(
    i18n('entities.patrolLog.fields.scannedBy'),
  ),
  scanTimeRange: yupFilterSchemas.datetimeRange(
    i18n('entities.patrolLog.fields.scanTimeRange'),
  ),
  latitude: yupFilterSchemas.string(
    i18n('entities.patrolLog.fields.latitude'),
  ),
  longitude: yupFilterSchemas.string(
    i18n('entities.patrolLog.fields.longitude'),
  ),
  validLocation: yupFilterSchemas.boolean(
    i18n('entities.patrolLog.fields.validLocation'),
  ),
  status: yupFilterSchemas.enumerator(
    i18n('entities.patrolLog.fields.status'),
  ),
});

const emptyValues = {
  patrol: null,
  scannedBy: null,
  scanTimeRange: [],
  latitude: null,
  longitude: null,
  validLocation: null,
  status: null,
}

const previewRenders = {
  patrol: {
      label: i18n('entities.patrolLog.fields.patrol'),
      render: filterRenders.relationToOne(),
    },
  scannedBy: {
    label: i18n('entities.patrolLog.fields.scannedBy'),
    render: filterRenders.relationToOne(),
  },
  scanTimeRange: {
    label: i18n('entities.patrolLog.fields.scanTimeRange'),
    render: filterRenders.datetimeRange(),
  },
  latitude: {
    label: i18n('entities.patrolLog.fields.latitude'),
    render: filterRenders.generic(),
  },
  longitude: {
    label: i18n('entities.patrolLog.fields.longitude'),
    render: filterRenders.generic(),
  },
  validLocation: {
    label: i18n('entities.patrolLog.fields.validLocation'),
    render: filterRenders.boolean(),
  },
  status: {
    label: i18n('entities.patrolLog.fields.status'),
    render: filterRenders.enumerator('entities.patrolLog.enumerators.status',),
  },
}

function PatrolLogListFilter(props) {
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
                      <PatrolAutocompleteFormItem  
                        name="patrol"
                        label={i18n('entities.patrolLog.fields.patrol')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <UserAutocompleteFormItem  
                        name="scannedBy"
                        label={i18n('entities.patrolLog.fields.scannedBy')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="scanTimeRange"
                        label={i18n('entities.patrolLog.fields.scanTimeRange')}    
                        showTimeInput
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="latitude"
                        label={i18n('entities.patrolLog.fields.latitude')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="longitude"
                        label={i18n('entities.patrolLog.fields.longitude')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
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
                    <div className="col-lg-6 col-12">
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

export default PatrolLogListFilter;