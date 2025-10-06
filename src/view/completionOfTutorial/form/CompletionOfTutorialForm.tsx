import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import SecurityGuardAutocompleteFormItem from 'src/view/securityGuard/autocomplete/SecurityGuardAutocompleteFormItem';
import TutorialAutocompleteFormItem from 'src/view/tutorial/autocomplete/TutorialAutocompleteFormItem';

const schema = yup.object().shape({
  guardName: yupFormSchemas.relationToOne(
    i18n('entities.completionOfTutorial.fields.guardName'),
    {
      "required": true
    },
  ),
  dateTutorialStarted: yupFormSchemas.datetime(
    i18n('entities.completionOfTutorial.fields.dateTutorialStarted'),
    {},
  ),
  tutorialStarted: yupFormSchemas.boolean(
    i18n('entities.completionOfTutorial.fields.tutorialStarted'),
    {},
  ),
  checkedTutorial: yupFormSchemas.relationToOne(
    i18n('entities.completionOfTutorial.fields.checkedTutorial'),
    {},
  ),
  wasCompleted: yupFormSchemas.boolean(
    i18n('entities.completionOfTutorial.fields.wasCompleted'),
    {},
  ),
  dateEndedTutorial: yupFormSchemas.datetime(
    i18n('entities.completionOfTutorial.fields.dateEndedTutorial'),
    {},
  ),
});

function CompletionOfTutorialForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      guardName: record.guardName,
      dateTutorialStarted: record.dateTutorialStarted ? moment(record.dateTutorialStarted).toDate() : null,
      tutorialStarted: record.tutorialStarted,
      checkedTutorial: record.checkedTutorial,
      wasCompleted: record.wasCompleted,
      dateEndedTutorial: record.dateEndedTutorial ? moment(record.dateEndedTutorial).toDate() : null,
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
              <SecurityGuardAutocompleteFormItem  
                name="guardName"
                label={i18n('entities.completionOfTutorial.fields.guardName')}
                required={true}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="dateTutorialStarted"
                label={i18n('entities.completionOfTutorial.fields.dateTutorialStarted')}
                required={false}
                showTimeInput
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SwitchFormItem
                name="tutorialStarted"
                label={i18n('entities.completionOfTutorial.fields.tutorialStarted')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TutorialAutocompleteFormItem  
                name="checkedTutorial"
                label={i18n('entities.completionOfTutorial.fields.checkedTutorial')}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SwitchFormItem
                name="wasCompleted"
                label={i18n('entities.completionOfTutorial.fields.wasCompleted')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="dateEndedTutorial"
                label={i18n('entities.completionOfTutorial.fields.dateEndedTutorial')}
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

export default CompletionOfTutorialForm;
