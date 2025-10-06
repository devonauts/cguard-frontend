import { i18n } from 'src/i18n';
import actions from 'src/modules/insurance/list/insuranceListActions';
import selectors from 'src/modules/insurance/list/insuranceListSelectors';
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
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  provider: yupFilterSchemas.string(
    i18n('entities.insurance.fields.provider'),
  ),
  policyNumber: yupFilterSchemas.string(
    i18n('entities.insurance.fields.policyNumber'),
  ),
  validFromRange: yupFilterSchemas.dateRange(
    i18n('entities.insurance.fields.validFromRange'),
  ),
  validUntilRange: yupFilterSchemas.dateRange(
    i18n('entities.insurance.fields.validUntilRange'),
  ),
});

const emptyValues = {
  provider: null,
  policyNumber: null,
  validFromRange: [],
  validUntilRange: [],
}

const previewRenders = {
  provider: {
    label: i18n('entities.insurance.fields.provider'),
    render: filterRenders.generic(),
  },
  policyNumber: {
    label: i18n('entities.insurance.fields.policyNumber'),
    render: filterRenders.generic(),
  },
  validFromRange: {
    label: i18n('entities.insurance.fields.validFromRange'),
    render: filterRenders.dateRange(),
  },
  validUntilRange: {
    label: i18n('entities.insurance.fields.validUntilRange'),
    render: filterRenders.dateRange(),
  },
}

function InsuranceListFilter(props) {
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
                        name="provider"
                        label={i18n('entities.insurance.fields.provider')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="policyNumber"
                        label={i18n('entities.insurance.fields.policyNumber')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="validFromRange"
                        label={i18n('entities.insurance.fields.validFromRange')}    
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="validUntilRange"
                        label={i18n('entities.insurance.fields.validUntilRange')}    
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

export default InsuranceListFilter;