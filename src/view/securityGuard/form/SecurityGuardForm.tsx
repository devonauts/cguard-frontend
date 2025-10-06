import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import securityGuardEnumerators from 'src/modules/securityGuard/securityGuardEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/modules/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import MemosAutocompleteFormItem from 'src/view/memos/autocomplete/MemosAutocompleteFormItem';
import RequestAutocompleteFormItem from 'src/view/request/autocomplete/RequestAutocompleteFormItem';
import CompletionOfTutorialAutocompleteFormItem from 'src/view/completionOfTutorial/autocomplete/CompletionOfTutorialAutocompleteFormItem';

const schema = yup.object().shape({
  governmentId: yupFormSchemas.string(
    i18n('entities.securityGuard.fields.governmentId'),
    {
      "required": true,
      "max": 10
    },
  ),
  fullName: yupFormSchemas.string(
    i18n('entities.securityGuard.fields.fullName'),
    {
      "max": 200,
      "required": true
    },
  ),
  guard: yupFormSchemas.relationToOne(
    i18n('entities.securityGuard.fields.guard'),
    {
      "required": true
    },
  ),
  hiringContractDate: yupFormSchemas.date(
    i18n('entities.securityGuard.fields.hiringContractDate'),
    {},
  ),
  gender: yupFormSchemas.enumerator(
    i18n('entities.securityGuard.fields.gender'),
    {
      "required": true,
      "options": securityGuardEnumerators.gender
    },
  ),
  isOnDuty: yupFormSchemas.boolean(
    i18n('entities.securityGuard.fields.isOnDuty'),
    {},
  ),
  bloodType: yupFormSchemas.enumerator(
    i18n('entities.securityGuard.fields.bloodType'),
    {
      "required": true,
      "options": securityGuardEnumerators.bloodType
    },
  ),
  guardCredentials: yupFormSchemas.string(
    i18n('entities.securityGuard.fields.guardCredentials'),
    {
      "max": 255
    },
  ),
  birthDate: yupFormSchemas.date(
    i18n('entities.securityGuard.fields.birthDate'),
    {
      "required": true
    },
  ),
  birthPlace: yupFormSchemas.string(
    i18n('entities.securityGuard.fields.birthPlace'),
    {
      "max": 50
    },
  ),
  profileImage: yupFormSchemas.images(
    i18n('entities.securityGuard.fields.profileImage'),
    {
      "max": 2
    },
  ),
  maritalStatus: yupFormSchemas.enumerator(
    i18n('entities.securityGuard.fields.maritalStatus'),
    {
      "required": true,
      "options": securityGuardEnumerators.maritalStatus
    },
  ),
  credentialImage: yupFormSchemas.images(
    i18n('entities.securityGuard.fields.credentialImage'),
    {
      "max": 1
    },
  ),
  academicInstruction: yupFormSchemas.enumerator(
    i18n('entities.securityGuard.fields.academicInstruction'),
    {
      "required": true,
      "options": securityGuardEnumerators.academicInstruction
    },
  ),
  recordPolicial: yupFormSchemas.images(
    i18n('entities.securityGuard.fields.recordPolicial'),
    {
      "max": 1
    },
  ),
  address: yupFormSchemas.string(
    i18n('entities.securityGuard.fields.address'),
    {
      "max": 200
    },
  ),
  memos: yupFormSchemas.relationToMany(
    i18n('entities.securityGuard.fields.memos'),
    {},
  ),
  requests: yupFormSchemas.relationToMany(
    i18n('entities.securityGuard.fields.requests'),
    {},
  ),
  tutoriales: yupFormSchemas.relationToMany(
    i18n('entities.securityGuard.fields.tutoriales'),
    {},
  ),
});

function SecurityGuardForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      governmentId: record.governmentId,
      fullName: record.fullName,
      guard: record.guard,
      hiringContractDate: record.hiringContractDate ? moment(record.hiringContractDate, 'YYYY-MM-DD').toDate() : null,
      gender: record.gender,
      isOnDuty: record.isOnDuty,
      bloodType: record.bloodType,
      guardCredentials: record.guardCredentials,
      birthDate: record.birthDate ? moment(record.birthDate, 'YYYY-MM-DD').toDate() : null,
      birthPlace: record.birthPlace,
      profileImage: record.profileImage || [],
      maritalStatus: record.maritalStatus,
      credentialImage: record.credentialImage || [],
      academicInstruction: record.academicInstruction,
      recordPolicial: record.recordPolicial || [],
      address: record.address,
      memos: record.memos || [],
      requests: record.requests || [],
      tutoriales: record.tutoriales || [],
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
                name="governmentId"
                label={i18n('entities.securityGuard.fields.governmentId')}
                required={true}
              autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="fullName"
                label={i18n('entities.securityGuard.fields.fullName')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <UserAutocompleteFormItem  
                name="guard"
                label={i18n('entities.securityGuard.fields.guard')}
                required={true}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="hiringContractDate"
                label={i18n('entities.securityGuard.fields.hiringContractDate')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="gender"
                label={i18n('entities.securityGuard.fields.gender')}
                options={securityGuardEnumerators.gender.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.securityGuard.enumerators.gender.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SwitchFormItem
                name="isOnDuty"
                label={i18n('entities.securityGuard.fields.isOnDuty')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="bloodType"
                label={i18n('entities.securityGuard.fields.bloodType')}
                options={securityGuardEnumerators.bloodType.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.securityGuard.enumerators.bloodType.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="guardCredentials"
                label={i18n('entities.securityGuard.fields.guardCredentials')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="birthDate"
                label={i18n('entities.securityGuard.fields.birthDate')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="birthPlace"
                label={i18n('entities.securityGuard.fields.birthPlace')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="profileImage"
                label={i18n('entities.securityGuard.fields.profileImage')}
                required={false}
                storage={Storage.values.securityGuardProfileImage}
                max={2}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="maritalStatus"
                label={i18n('entities.securityGuard.fields.maritalStatus')}
                options={securityGuardEnumerators.maritalStatus.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.securityGuard.enumerators.maritalStatus.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="credentialImage"
                label={i18n('entities.securityGuard.fields.credentialImage')}
                required={false}
                storage={Storage.values.securityGuardCredentialImage}
                max={1}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="academicInstruction"
                label={i18n('entities.securityGuard.fields.academicInstruction')}
                options={securityGuardEnumerators.academicInstruction.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.securityGuard.enumerators.academicInstruction.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="recordPolicial"
                label={i18n('entities.securityGuard.fields.recordPolicial')}
                required={false}
                storage={Storage.values.securityGuardRecordPolicial}
                max={1}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="address"
                label={i18n('entities.securityGuard.fields.address')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <MemosAutocompleteFormItem  
                name="memos"
                label={i18n('entities.securityGuard.fields.memos')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <RequestAutocompleteFormItem  
                name="requests"
                label={i18n('entities.securityGuard.fields.requests')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <CompletionOfTutorialAutocompleteFormItem  
                name="tutoriales"
                label={i18n('entities.securityGuard.fields.tutoriales')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
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

export default SecurityGuardForm;
