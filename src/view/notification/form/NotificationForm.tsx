import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import notificationEnumerators from 'src/modules/notification/notificationEnumerators';
import Storage from 'src/modules/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import DeviceIdInformationAutocompleteFormItem from 'src/view/deviceIdInformation/autocomplete/DeviceIdInformationAutocompleteFormItem';

const schema = yup.object().shape({
  deviceId: yupFormSchemas.relationToMany(
    i18n('entities.notification.fields.deviceId'),
    {},
  ),
  title: yupFormSchemas.string(
    i18n('entities.notification.fields.title'),
    {
      "max": 100
    },
  ),
  body: yupFormSchemas.string(
    i18n('entities.notification.fields.body'),
    {
      "max": 200
    },
  ),
  imageUrl: yupFormSchemas.images(
    i18n('entities.notification.fields.imageUrl'),
    {
      "max": 1
    },
  ),
  targetType: yupFormSchemas.enumerator(
    i18n('entities.notification.fields.targetType'),
    {
      "options": notificationEnumerators.targetType
    },
  ),
  targetId: yupFormSchemas.string(
    i18n('entities.notification.fields.targetId'),
    {},
  ),
  whoCreatedTheNotification: yupFormSchemas.relationToOne(
    i18n('entities.notification.fields.whoCreatedTheNotification'),
    {},
  ),
  deliveryStatus: yupFormSchemas.enumerator(
    i18n('entities.notification.fields.deliveryStatus'),
    {
      "options": notificationEnumerators.deliveryStatus
    },
  ),
  readStatus: yupFormSchemas.boolean(
    i18n('entities.notification.fields.readStatus'),
    {},
  ),
});

function NotificationForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      deviceId: record.deviceId || [],
      title: record.title,
      body: record.body,
      imageUrl: record.imageUrl || [],
      targetType: record.targetType,
      targetId: record.targetId,
      whoCreatedTheNotification: record.whoCreatedTheNotification,
      deliveryStatus: record.deliveryStatus,
      readStatus: record.readStatus,
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
              <DeviceIdInformationAutocompleteFormItem  
                name="deviceId"
                label={i18n('entities.notification.fields.deviceId')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="title"
                label={i18n('entities.notification.fields.title')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TextAreaFormItem
                name="body"
                label={i18n('entities.notification.fields.body')}  
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="imageUrl"
                label={i18n('entities.notification.fields.imageUrl')}
                required={false}
                storage={Storage.values.notificationImageUrl}
                max={1}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="targetType"
                label={i18n('entities.notification.fields.targetType')}
                options={notificationEnumerators.targetType.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.notification.enumerators.targetType.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="targetId"
                label={i18n('entities.notification.fields.targetId')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <UserAutocompleteFormItem  
                name="whoCreatedTheNotification"
                label={i18n('entities.notification.fields.whoCreatedTheNotification')}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="deliveryStatus"
                label={i18n('entities.notification.fields.deliveryStatus')}
                options={notificationEnumerators.deliveryStatus.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.notification.enumerators.deliveryStatus.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SwitchFormItem
                name="readStatus"
                label={i18n('entities.notification.fields.readStatus')}
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

export default NotificationForm;
