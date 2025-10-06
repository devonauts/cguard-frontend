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
import ClientAccountAutocompleteFormItem from 'src/view/clientAccount/autocomplete/ClientAccountAutocompleteFormItem';

const schema = yup.object().shape({
  personInCharge: yupFormSchemas.relationToOne(
    i18n('entities.representanteEmpresa.fields.personInCharge'),
    {},
  ),
  governmentId: yupFormSchemas.string(
    i18n('entities.representanteEmpresa.fields.governmentId'),
    {
      "required": true,
      "max": 10
    },
  ),
  jobTitle: yupFormSchemas.string(
    i18n('entities.representanteEmpresa.fields.jobTitle'),
    {
      "max": 90,
      "required": true
    },
  ),
  assignedCompany: yupFormSchemas.relationToOne(
    i18n('entities.representanteEmpresa.fields.assignedCompany'),
    {
      "required": true
    },
  ),
});

function RepresentanteEmpresaForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      personInCharge: record.personInCharge,
      governmentId: record.governmentId,
      jobTitle: record.jobTitle,
      assignedCompany: record.assignedCompany,
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
              <UserAutocompleteFormItem  
                name="personInCharge"
                label={i18n('entities.representanteEmpresa.fields.personInCharge')}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="governmentId"
                label={i18n('entities.representanteEmpresa.fields.governmentId')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="jobTitle"
                label={i18n('entities.representanteEmpresa.fields.jobTitle')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ClientAccountAutocompleteFormItem  
                name="assignedCompany"
                label={i18n('entities.representanteEmpresa.fields.assignedCompany')}
                required={true}
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

export default RepresentanteEmpresaForm;
