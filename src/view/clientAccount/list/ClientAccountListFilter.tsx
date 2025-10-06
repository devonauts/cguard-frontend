import { i18n } from 'src/i18n';
import actions from 'src/modules/clientAccount/list/clientAccountListActions';
import selectors from 'src/modules/clientAccount/list/clientAccountListSelectors';
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
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  contractDateRange: yupFilterSchemas.dateRange(
    i18n('entities.clientAccount.fields.contractDateRange'),
  ),
  rucNumber: yupFilterSchemas.string(
    i18n('entities.clientAccount.fields.rucNumber'),
  ),
  commercialName: yupFilterSchemas.string(
    i18n('entities.clientAccount.fields.commercialName'),
  ),
  address: yupFilterSchemas.string(
    i18n('entities.clientAccount.fields.address'),
  ),
  phoneNumber: yupFilterSchemas.string(
    i18n('entities.clientAccount.fields.phoneNumber'),
  ),
  faxNumber: yupFilterSchemas.string(
    i18n('entities.clientAccount.fields.faxNumber'),
  ),
  email: yupFilterSchemas.string(
    i18n('entities.clientAccount.fields.email'),
  ),
  representante: yupFilterSchemas.relationToOne(
    i18n('entities.clientAccount.fields.representante'),
  ),
});

const emptyValues = {
  contractDateRange: [],
  rucNumber: null,
  commercialName: null,
  address: null,
  phoneNumber: null,
  faxNumber: null,
  email: null,
  representante: null,
}

const previewRenders = {
  contractDateRange: {
    label: i18n('entities.clientAccount.fields.contractDateRange'),
    render: filterRenders.dateRange(),
  },
  rucNumber: {
    label: i18n('entities.clientAccount.fields.rucNumber'),
    render: filterRenders.generic(),
  },
  commercialName: {
    label: i18n('entities.clientAccount.fields.commercialName'),
    render: filterRenders.generic(),
  },
  address: {
    label: i18n('entities.clientAccount.fields.address'),
    render: filterRenders.generic(),
  },
  phoneNumber: {
    label: i18n('entities.clientAccount.fields.phoneNumber'),
    render: filterRenders.generic(),
  },
  faxNumber: {
    label: i18n('entities.clientAccount.fields.faxNumber'),
    render: filterRenders.generic(),
  },
  email: {
    label: i18n('entities.clientAccount.fields.email'),
    render: filterRenders.generic(),
  },
  representante: {
    label: i18n('entities.clientAccount.fields.representante'),
    render: filterRenders.relationToOne(),
  },
}

function ClientAccountListFilter(props) {
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
                        name="contractDateRange"
                        label={i18n('entities.clientAccount.fields.contractDateRange')}    
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="rucNumber"
                        label={i18n('entities.clientAccount.fields.rucNumber')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="commercialName"
                        label={i18n('entities.clientAccount.fields.commercialName')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="address"
                        label={i18n('entities.clientAccount.fields.address')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="phoneNumber"
                        label={i18n('entities.clientAccount.fields.phoneNumber')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="faxNumber"
                        label={i18n('entities.clientAccount.fields.faxNumber')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="email"
                        label={i18n('entities.clientAccount.fields.email')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <UserAutocompleteFormItem  
                        name="representante"
                        label={i18n('entities.clientAccount.fields.representante')}        
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

export default ClientAccountListFilter;