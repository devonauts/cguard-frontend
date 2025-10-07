import { i18n } from 'src/i18n';
import actions from 'src/modules/inquiries/list/inquiriesListActions';
import selectors from 'src/modules/inquiries/list/inquiriesListSelectors';
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
import ServiceAutocompleteFormItem from 'src/view/service/autocomplete/ServiceAutocompleteFormItem';

const schema = yup.object().shape({
  names: yupFilterSchemas.string(
    i18n('entities.inquiries.fields.names'),
  ),
  city: yupFilterSchemas.string(
    i18n('entities.inquiries.fields.city'),
  ),
  email: yupFilterSchemas.string(
    i18n('entities.inquiries.fields.email'),
  ),
  phoneNumber: yupFilterSchemas.string(
    i18n('entities.inquiries.fields.phoneNumber'),
  ),
  message: yupFilterSchemas.string(
    i18n('entities.inquiries.fields.message'),
  ),
  serviceOfInterest: yupFilterSchemas.relationToOne(
    i18n('entities.inquiries.fields.serviceOfInterest'),
  ),
});

const emptyValues = {
  names: '',
  city: '',
  email: '',
  phoneNumber: '',
  message: '',
  // serviceOfInterest: omitted (relation field)
}

const previewRenders = {
  names: {
    label: i18n('entities.inquiries.fields.names'),
    render: filterRenders.generic(),
  },
  city: {
    label: i18n('entities.inquiries.fields.city'),
    render: filterRenders.generic(),
  },
  email: {
    label: i18n('entities.inquiries.fields.email'),
    render: filterRenders.generic(),
  },
  phoneNumber: {
    label: i18n('entities.inquiries.fields.phoneNumber'),
    render: filterRenders.generic(),
  },
  message: {
    label: i18n('entities.inquiries.fields.message'),
    render: filterRenders.generic(),
  },
  serviceOfInterest: {
      label: i18n('entities.inquiries.fields.serviceOfInterest'),
      render: filterRenders.relationToOne(),
    },
}

function InquiriesListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    const combined = {
      ...emptyValues,
      ...rawFilter,
    };
    
    // Clean up relation field stored null values
    if (combined.serviceOfInterest === null || combined.serviceOfInterest === '') {
      delete combined.serviceOfInterest;
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
                        name="names"
                        label={i18n('entities.inquiries.fields.names')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="city"
                        label={i18n('entities.inquiries.fields.city')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="email"
                        label={i18n('entities.inquiries.fields.email')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="phoneNumber"
                        label={i18n('entities.inquiries.fields.phoneNumber')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="message"
                        label={i18n('entities.inquiries.fields.message')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <ServiceAutocompleteFormItem  
                        name="serviceOfInterest"
                        label={i18n('entities.inquiries.fields.serviceOfInterest')}        
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

export default InquiriesListFilter;