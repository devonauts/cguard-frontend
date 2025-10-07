import { i18n } from 'src/i18n';
import actions from 'src/modules/businessInfo/list/businessInfoListActions';
import selectors from 'src/modules/businessInfo/list/businessInfoListSelectors';
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

const schema = yup.object().shape({
  companyName: yupFilterSchemas.string(
    i18n('entities.businessInfo.fields.companyName'),
  ),
  description: yupFilterSchemas.string(
    i18n('entities.businessInfo.fields.description'),
  ),
  contactPhone: yupFilterSchemas.string(
    i18n('entities.businessInfo.fields.contactPhone'),
  ),
  contactEmail: yupFilterSchemas.string(
    i18n('entities.businessInfo.fields.contactEmail'),
  ),
  address: yupFilterSchemas.string(
    i18n('entities.businessInfo.fields.address'),
  ),
});

const emptyValues = {
  companyName: '',
  description: '',
  contactPhone: '',
  contactEmail: '',
  address: '',
}

const previewRenders = {
  companyName: {
    label: i18n('entities.businessInfo.fields.companyName'),
    render: filterRenders.generic(),
  },
  description: {
    label: i18n('entities.businessInfo.fields.description'),
    render: filterRenders.generic(),
  },
  contactPhone: {
    label: i18n('entities.businessInfo.fields.contactPhone'),
    render: filterRenders.generic(),
  },
  contactEmail: {
    label: i18n('entities.businessInfo.fields.contactEmail'),
    render: filterRenders.generic(),
  },
  address: {
    label: i18n('entities.businessInfo.fields.address'),
    render: filterRenders.generic(),
  },
}

function BusinessInfoListFilter(props) {
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
                        name="companyName"
                        label={i18n('entities.businessInfo.fields.companyName')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="description"
                        label={i18n('entities.businessInfo.fields.description')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="contactPhone"
                        label={i18n('entities.businessInfo.fields.contactPhone')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="contactEmail"
                        label={i18n('entities.businessInfo.fields.contactEmail')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="address"
                        label={i18n('entities.businessInfo.fields.address')}      
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

export default BusinessInfoListFilter;