import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import notificationRecipientEnumerators from 'src/modules/notificationRecipient/notificationRecipientEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import NotificationAutocompleteFormItem from 'src/view/notification/autocomplete/NotificationAutocompleteFormItem';

const schema = yup.object().shape({
  notification: yupFormSchemas.relationToOne(
    i18n('entities.notificationRecipient.fields.notification'),
    {},
  ),
  recipientId: yupFormSchemas.string(
    i18n('entities.notificationRecipient.fields.recipientId'),
    {},
  ),
  readStatus: yupFormSchemas.boolean(
    i18n('entities.notificationRecipient.fields.readStatus'),
    {},
  ),
  deliveryStatus: yupFormSchemas.enumerator(
    i18n('entities.notificationRecipient.fields.deliveryStatus'),
    {
      "options": notificationRecipientEnumerators.deliveryStatus
    },
  ),
  dateDelivered: yupFormSchemas.datetime(
    i18n('entities.notificationRecipient.fields.dateDelivered'),
    {},
  ),
});

function NotificationRecipientForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      notification: record.notification,
      recipientId: record.recipientId,
      readStatus: record.readStatus,
      deliveryStatus: record.deliveryStatus,
      dateDelivered: record.dateDelivered ? moment(record.dateDelivered).toDate() : null,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-7 col-md-8 col-12">
              <NotificationAutocompleteFormItem  
                name="notification"
                label={i18n('entities.notificationRecipient.fields.notification')}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="recipientId"
                label={i18n('entities.notificationRecipient.fields.recipientId')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SwitchFormItem
                name="readStatus"
                label={i18n('entities.notificationRecipient.fields.readStatus')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
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
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="dateDelivered"
                label={i18n('entities.notificationRecipient.fields.dateDelivered')}
                required={false}
                showTimeInput
              />
            </div>
          </div>

          <div className="form-buttons">
            <button
              className="btn btn-primary"
              disabled={props.saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              <ButtonIcon
                loading={props.saveLoading}
                iconClass="far fa-save"
              />{' '}
              {i18n('common.save')}
            </button>

            <button
              className="btn btn-light"
              type="button"
              disabled={props.saveLoading}
              onClick={onReset}
            >
              <i className="fas fa-undo"></i>{' '}
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                className="btn btn-light"
                type="button"
                disabled={props.saveLoading}
                onClick={() => props.onCancel()}
              >
                <i className="fas fa-times"></i>{' '}
                {i18n('common.cancel')}
              </button>
            ) : null}
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default NotificationRecipientForm;
