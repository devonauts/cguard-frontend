import { i18n } from 'src/i18n';
import actions from 'src/modules/request/list/requestListActions';
import selectors from 'src/modules/request/list/requestListSelectors';
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
import requestEnumerators from 'src/modules/request/requestEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import SecurityGuardAutocompleteFormItem from 'src/view/securityGuard/autocomplete/SecurityGuardAutocompleteFormItem';

const schema = yup.object().shape({
  dateTimeRange: yupFilterSchemas.datetimeRange(
    i18n('entities.request.fields.dateTimeRange'),
  ),
  guardName: yupFilterSchemas.relationToOne(
    i18n('entities.request.fields.guardName'),
  ),
  subject: yupFilterSchemas.string(
    i18n('entities.request.fields.subject'),
  ),
  content: yupFilterSchemas.string(
    i18n('entities.request.fields.content'),
  ),
  action: yupFilterSchemas.enumerator(
    i18n('entities.request.fields.action'),
  ),
});

const emptyValues = {
  dateTimeRange: [],
  guardName: null,
  subject: null,
  content: null,
  action: null,
}

const previewRenders = {
  dateTimeRange: {
    label: i18n('entities.request.fields.dateTimeRange'),
    render: filterRenders.datetimeRange(),
  },
  guardName: {
      label: i18n('entities.request.fields.guardName'),
      render: filterRenders.relationToOne(),
    },
  subject: {
    label: i18n('entities.request.fields.subject'),
    render: filterRenders.generic(),
  },
  content: {
    label: i18n('entities.request.fields.content'),
    render: filterRenders.generic(),
  },
  action: {
    label: i18n('entities.request.fields.action'),
    render: filterRenders.enumerator('entities.request.enumerators.action',),
  },
}

function RequestListFilter(props) {
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
                        name="dateTimeRange"
                        label={i18n('entities.request.fields.dateTimeRange')}    
                        showTimeInput
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SecurityGuardAutocompleteFormItem  
                        name="guardName"
                        label={i18n('entities.request.fields.guardName')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="subject"
                        label={i18n('entities.request.fields.subject')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="content"
                        label={i18n('entities.request.fields.content')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="action"
                        label={i18n('entities.request.fields.action')}
                        options={requestEnumerators.action.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.request.enumerators.action.${value}`,
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

export default RequestListFilter;