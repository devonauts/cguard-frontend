import { i18n } from 'src/i18n';
import actions from 'src/modules/certification/list/certificationListActions';
import selectors from 'src/modules/certification/list/certificationListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import Button from 'src/components/ui/Button';
import FilterWrapper from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  title: yupFilterSchemas.string(
    i18n('entities.certification.fields.title'),
  ),
  code: yupFilterSchemas.string(
    i18n('entities.certification.fields.code'),
  ),
  description: yupFilterSchemas.string(
    i18n('entities.certification.fields.description'),
  ),
  acquisitionDateRange: yupFilterSchemas.dateRange(
    i18n('entities.certification.fields.acquisitionDateRange'),
  ),
  expirationDateRange: yupFilterSchemas.dateRange(
    i18n('entities.certification.fields.expirationDateRange'),
  ),
});

const emptyValues = {
  title: '',
  code: '',
  description: '',
  acquisitionDateRange: [],
  expirationDateRange: [],
}

const previewRenders = {
  title: {
    label: i18n('entities.certification.fields.title'),
    render: filterRenders.generic(),
  },
  code: {
    label: i18n('entities.certification.fields.code'),
    render: filterRenders.generic(),
  },
  description: {
    label: i18n('entities.certification.fields.description'),
    render: filterRenders.generic(),
  },
  acquisitionDateRange: {
    label: i18n('entities.certification.fields.acquisitionDateRange'),
    render: filterRenders.dateRange(),
  },
  expirationDateRange: {
    label: i18n('entities.certification.fields.expirationDateRange'),
    render: filterRenders.dateRange(),
  },
}

function CertificationListFilter(props) {
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
                        name="title"
                        label={i18n('entities.certification.fields.title')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="code"
                        label={i18n('entities.certification.fields.code')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="description"
                        label={i18n('entities.certification.fields.description')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="acquisitionDateRange"
                        label={i18n('entities.certification.fields.acquisitionDateRange')}    
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="expirationDateRange"
                        label={i18n('entities.certification.fields.expirationDateRange')}    
                      />
                    </div>
              </div>

              <div className="row">
                <div className="col-12 filter-buttons">
                  <Button
                    variant="primary"
                    size="sm"
                    type="submit"
                    disabled={props.loading}
                    loading={props.loading}
                  >
                    <MagnifyingGlassIcon className="h-4 w-4" />
                    {i18n('common.search')}
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    type="button"
                    onClick={onReset}
                    disabled={props.loading}
                  >
                    <XMarkIcon className="h-4 w-4" />
                    {i18n('common.reset')}
                  </Button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </FilterWrapper>
  );
}

export default CertificationListFilter;