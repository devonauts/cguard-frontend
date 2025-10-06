import { i18n } from 'src/i18n';
import actions from 'src/modules/billing/list/billingListActions';
import selectors from 'src/modules/billing/list/billingListSelectors';
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
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import billingEnumerators from 'src/modules/billing/billingEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import ClientAccountAutocompleteFormItem from 'src/view/clientAccount/autocomplete/ClientAccountAutocompleteFormItem';

const schema = yup.object().shape({
  invoiceNumber: yupFilterSchemas.string(
    i18n('entities.billing.fields.invoiceNumber'),
  ),
  status: yupFilterSchemas.enumerator(
    i18n('entities.billing.fields.status'),
  ),
  clientsInvoiced: yupFilterSchemas.relationToOne(
    i18n('entities.billing.fields.clientsInvoiced'),
  ),
  montoPorPagarRange: yupFilterSchemas.decimalRange(
    i18n('entities.billing.fields.montoPorPagarRange'),
  ),
  lastPaymentDateRange: yupFilterSchemas.dateRange(
    i18n('entities.billing.fields.lastPaymentDateRange'),
  ),
  nextPaymentDateRange: yupFilterSchemas.dateRange(
    i18n('entities.billing.fields.nextPaymentDateRange'),
  ),
  description: yupFilterSchemas.string(
    i18n('entities.billing.fields.description'),
  ),
});

const emptyValues = {
  invoiceNumber: null,
  status: null,
  clientsInvoiced: null,
  montoPorPagarRange: [],
  lastPaymentDateRange: [],
  nextPaymentDateRange: [],
  description: null,
}

const previewRenders = {
  invoiceNumber: {
    label: i18n('entities.billing.fields.invoiceNumber'),
    render: filterRenders.generic(),
  },
  status: {
    label: i18n('entities.billing.fields.status'),
    render: filterRenders.enumerator('entities.billing.enumerators.status',),
  },
  clientsInvoiced: {
      label: i18n('entities.billing.fields.clientsInvoiced'),
      render: filterRenders.relationToOne(),
    },
  montoPorPagarRange: {
    label: i18n('entities.billing.fields.montoPorPagarRange'),
    render: filterRenders.decimalRange(),
  },
  lastPaymentDateRange: {
    label: i18n('entities.billing.fields.lastPaymentDateRange'),
    render: filterRenders.dateRange(),
  },
  nextPaymentDateRange: {
    label: i18n('entities.billing.fields.nextPaymentDateRange'),
    render: filterRenders.dateRange(),
  },
  description: {
    label: i18n('entities.billing.fields.description'),
    render: filterRenders.generic(),
  },
}

function BillingListFilter(props) {
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
                      <InputFormItem
                        name="invoiceNumber"
                        label={i18n('entities.billing.fields.invoiceNumber')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="status"
                        label={i18n('entities.billing.fields.status')}
                        options={billingEnumerators.status.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.billing.enumerators.status.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <ClientAccountAutocompleteFormItem  
                        name="clientsInvoiced"
                        label={i18n('entities.billing.fields.clientsInvoiced')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputRangeFormItem
                        name="montoPorPagarRange"
                        label={i18n('entities.billing.fields.montoPorPagarRange')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="lastPaymentDateRange"
                        label={i18n('entities.billing.fields.lastPaymentDateRange')}    
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="nextPaymentDateRange"
                        label={i18n('entities.billing.fields.nextPaymentDateRange')}    
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="description"
                        label={i18n('entities.billing.fields.description')}      
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

export default BillingListFilter;