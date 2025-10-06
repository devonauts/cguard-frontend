import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import VideoTutorialCategoryAutocompleteFormItem from 'src/view/videoTutorialCategory/autocomplete/VideoTutorialCategoryAutocompleteFormItem';

const schema = yup.object().shape({
  videoTutorialName: yupFormSchemas.string(
    i18n('entities.videoTutorial.fields.videoTutorialName'),
    {
      "required": true,
      "max": 200
    },
  ),
  videoTutorialLink: yupFormSchemas.string(
    i18n('entities.videoTutorial.fields.videoTutorialLink'),
    {
      "max": 800
    },
  ),
  videoTutorialCategory: yupFormSchemas.relationToOne(
    i18n('entities.videoTutorial.fields.videoTutorialCategory'),
    {},
  ),
});

function VideoTutorialForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      videoTutorialName: record.videoTutorialName,
      videoTutorialLink: record.videoTutorialLink,
      videoTutorialCategory: record.videoTutorialCategory,
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
              <InputFormItem
                name="videoTutorialName"
                label={i18n('entities.videoTutorial.fields.videoTutorialName')}
                required={true}
              autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="videoTutorialLink"
                label={i18n('entities.videoTutorial.fields.videoTutorialLink')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <VideoTutorialCategoryAutocompleteFormItem  
                name="videoTutorialCategory"
                label={i18n('entities.videoTutorial.fields.videoTutorialCategory')}
                required={false}
                showCreate={!props.modal}
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

export default VideoTutorialForm;
