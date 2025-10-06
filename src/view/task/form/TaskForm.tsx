import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import CheckboxFormItem from 'src/view/shared/form/items/CheckboxFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/modules/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import StationAutocompleteFormItem from 'src/view/station/autocomplete/StationAutocompleteFormItem';

const schema = yup.object().shape({
  taskBelongsToStation: yupFormSchemas.relationToOne(
    i18n('entities.task.fields.taskBelongsToStation'),
    {},
  ),
  taskToDo: yupFormSchemas.string(
    i18n('entities.task.fields.taskToDo'),
    {
      "required": true,
      "max": 300
    },
  ),
  wasItDone: yupFormSchemas.boolean(
    i18n('entities.task.fields.wasItDone'),
    {},
  ),
  imageOptional: yupFormSchemas.images(
    i18n('entities.task.fields.imageOptional'),
    {
      "max": 1
    },
  ),
  dateToDoTheTask: yupFormSchemas.datetime(
    i18n('entities.task.fields.dateToDoTheTask'),
    {
      "required": true
    },
  ),
  dateCompletedTask: yupFormSchemas.datetime(
    i18n('entities.task.fields.dateCompletedTask'),
    {},
  ),
  taskCompletedImage: yupFormSchemas.images(
    i18n('entities.task.fields.taskCompletedImage'),
    {
      "max": 5
    },
  ),
});

function TaskForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      taskBelongsToStation: record.taskBelongsToStation,
      taskToDo: record.taskToDo,
      wasItDone: record.wasItDone,
      imageOptional: record.imageOptional || [],
      dateToDoTheTask: record.dateToDoTheTask ? moment(record.dateToDoTheTask).toDate() : null,
      dateCompletedTask: record.dateCompletedTask ? moment(record.dateCompletedTask).toDate() : null,
      taskCompletedImage: record.taskCompletedImage || [],
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
              <StationAutocompleteFormItem  
                name="taskBelongsToStation"
                label={i18n('entities.task.fields.taskBelongsToStation')}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="taskToDo"
                label={i18n('entities.task.fields.taskToDo')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <CheckboxFormItem
                name="wasItDone"
                label={i18n('entities.task.fields.wasItDone')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="imageOptional"
                label={i18n('entities.task.fields.imageOptional')}
                required={false}
                storage={Storage.values.taskImageOptional}
                max={1}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="dateToDoTheTask"
                label={i18n('entities.task.fields.dateToDoTheTask')}
                required={true}
                showTimeInput
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="dateCompletedTask"
                label={i18n('entities.task.fields.dateCompletedTask')}
                required={false}
                showTimeInput
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="taskCompletedImage"
                label={i18n('entities.task.fields.taskCompletedImage')}
                required={false}
                storage={Storage.values.taskTaskCompletedImage}
                max={5}
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

export default TaskForm;
