import { i18n } from 'src/i18n';
import actions from 'src/modules/inventoryHistory/list/inventoryHistoryListActions';
import selectors from 'src/modules/inventoryHistory/list/inventoryHistoryListSelectors';
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
import GuardShiftAutocompleteFormItem from 'src/view/guardShift/autocomplete/GuardShiftAutocompleteFormItem';
import InventoryAutocompleteFormItem from 'src/view/inventory/autocomplete/InventoryAutocompleteFormItem';

const schema = yup.object().shape({
  shiftOrigin: yupFilterSchemas.relationToOne(
    i18n('entities.inventoryHistory.fields.shiftOrigin'),
  ),
  inventoryCheckedDateRange: yupFilterSchemas.dateRange(
    i18n('entities.inventoryHistory.fields.inventoryCheckedDateRange'),
  ),
  inventoryOrigin: yupFilterSchemas.relationToOne(
    i18n('entities.inventoryHistory.fields.inventoryOrigin'),
  ),
  isComplete: yupFilterSchemas.boolean(
    i18n('entities.inventoryHistory.fields.isComplete'),
  ),
  observation: yupFilterSchemas.string(
    i18n('entities.inventoryHistory.fields.observation'),
  ),
});

const emptyValues = {
  // shiftOrigin: omitted (relation field)
  inventoryCheckedDateRange: [],
  // inventoryOrigin: omitted (relation field)
  // isComplete: omitted (boolean field)
  observation: '',
}

const previewRenders = {
  shiftOrigin: {
      label: i18n('entities.inventoryHistory.fields.shiftOrigin'),
      render: filterRenders.relationToOne(),
    },
  inventoryCheckedDateRange: {
    label: i18n('entities.inventoryHistory.fields.inventoryCheckedDateRange'),
    render: filterRenders.dateRange(),
  },
  inventoryOrigin: {
      label: i18n('entities.inventoryHistory.fields.inventoryOrigin'),
      render: filterRenders.relationToOne(),
    },
  isComplete: {
    label: i18n('entities.inventoryHistory.fields.isComplete'),
    render: filterRenders.boolean(),
  },
  observation: {
    label: i18n('entities.inventoryHistory.fields.observation'),
    render: filterRenders.generic(),
  },
}

function InventoryHistoryListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    const combined = {
      ...emptyValues,
      ...rawFilter,
    };
    
    // Clean up relation field stored null values
    if (combined.shiftOrigin === null || combined.shiftOrigin === '') {
      delete combined.shiftOrigin;
    }
    if (combined.inventoryOrigin === null || combined.inventoryOrigin === '') {
      delete combined.inventoryOrigin;
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
                      <GuardShiftAutocompleteFormItem  
                        name="shiftOrigin"
                        label={i18n('entities.inventoryHistory.fields.shiftOrigin')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="inventoryCheckedDateRange"
                        label={i18n('entities.inventoryHistory.fields.inventoryCheckedDateRange')}    
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InventoryAutocompleteFormItem  
                        name="inventoryOrigin"
                        label={i18n('entities.inventoryHistory.fields.inventoryOrigin')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="isComplete"
                        label={i18n('entities.inventoryHistory.fields.isComplete')}
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
                      <InputFormItem
                        name="observation"
                        label={i18n('entities.inventoryHistory.fields.observation')}      
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

export default InventoryHistoryListFilter;