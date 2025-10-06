import { i18n } from 'src/i18n';
import actions from 'src/modules/notificationRecipient/list/notificationRecipientListActions';
import selectors from 'src/modules/notificationRecipient/list/notificationRecipientListSelectors';
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
import notificationRecipientEnumerators from 'src/modules/notificationRecipient/notificationRecipientEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import NotificationAutocompleteFormItem from 'src/view/notification/autocomplete/NotificationAutocompleteFormItem';

const schema = yup.object().shape({
  notification: yupFilterSchemas.relationToOne(
    i18n('entities.notificationRecipient.fields.notification'),
  ),
  recipientId: yupFilterSchemas.string(
    i18n('entities.notificationRecipient.fields.recipientId'),
  ),
  readStatus: yupFilterSchemas.boolean(
    i18n('entities.notificationRecipient.fields.readStatus'),
  ),
  deliveryStatus: yupFilterSchemas.enumerator(
    i18n('entities.notificationRecipient.fields.deliveryStatus'),
  ),
  dateDeliveredRange: yupFilterSchemas.datetimeRange(
    i18n('entities.notificationRecipient.fields.dateDeliveredRange'),
  ),
});

const emptyValues = {
  notification: null,
  recipientId: null,
  readStatus: null,
  deliveryStatus: null,
  dateDeliveredRange: [],
}

const previewRenders = {
  notification: {
      label: i18n('entities.notificationRecipient.fields.notification'),
      render: filterRenders.relationToOne(),
    },
  recipientId: {
    label: i18n('entities.notificationRecipient.fields.recipientId'),
    render: filterRenders.generic(),
  },
  readStatus: {
    label: i18n('entities.notificationRecipient.fields.readStatus'),
    render: filterRenders.boolean(),
  },
  deliveryStatus: {
    label: i18n('entities.notificationRecipient.fields.deliveryStatus'),
    render: filterRenders.enumerator('entities.notificationRecipient.enumerators.deliveryStatus',),
  },
  dateDeliveredRange: {
    label: i18n('entities.notificationRecipient.fields.dateDeliveredRange'),
    render: filterRenders.datetimeRange(),
  },
}

function NotificationRecipientListFilter(props) {
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
                      <NotificationAutocompleteFormItem  
                        name="notification"
                        label={i18n('entities.notificationRecipient.fields.notification')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="recipientId"
                        label={i18n('entities.notificationRecipient.fields.recipientId')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="readStatus"
                        label={i18n('entities.notificationRecipient.fields.readStatus')}
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
                        name="deliveryStatus"
                        label={i18n('entities.notificationRecipient.fields.deliveryStatus')}
                        options={notificationRecipientEnumerators.deliveryStatus.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.notificationRecipient.enumerators.deliveryStatus.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="dateDeliveredRange"
                        label={i18n('entities.notificationRecipient.fields.dateDeliveredRange')}    
                        showTimeInput
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

export default NotificationRecipientListFilter;