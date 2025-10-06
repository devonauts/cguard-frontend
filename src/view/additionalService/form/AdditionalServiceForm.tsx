import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import additionalServiceEnumerators from 'src/modules/additionalService/additionalServiceEnumerators';
import StationAutocompleteFormItem from 'src/view/station/autocomplete/StationAutocompleteFormItem';

const schema = yup.object().shape({
  stationAditionalServiceName: yupFormSchemas.string(
    i18n('entities.additionalService.fields.stationAditionalServiceName'),
    {
      "required": true,
      "max": 250
    },
  ),
  dvr: yupFormSchemas.enumerator(
    i18n('entities.additionalService.fields.dvr'),
    {
      "options": additionalServiceEnumerators.dvr
    },
  ),
  dvrSerialCode: yupFormSchemas.string(
    i18n('entities.additionalService.fields.dvrSerialCode'),
    {
      "required": true,
      "max": 100
    },
  ),
  juegoDeCamarasInteriores: yupFormSchemas.enumerator(
    i18n('entities.additionalService.fields.juegoDeCamarasInteriores'),
    {
      "options": additionalServiceEnumerators.juegoDeCamarasInteriores
    },
  ),
  juegoDeCamarasExteriores: yupFormSchemas.enumerator(
    i18n('entities.additionalService.fields.juegoDeCamarasExteriores'),
    {
      "options": additionalServiceEnumerators.juegoDeCamarasExteriores
    },
  ),
  stations: yupFormSchemas.relationToOne(
    i18n('entities.additionalService.fields.stations'),
    {},
  ),
});

function AdditionalServiceForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      stationAditionalServiceName: record.stationAditionalServiceName,
      dvr: record.dvr,
      dvrSerialCode: record.dvrSerialCode,
      juegoDeCamarasInteriores: record.juegoDeCamarasInteriores,
      juegoDeCamarasExteriores: record.juegoDeCamarasExteriores,
      stations: record.stations,
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
                name="stationAditionalServiceName"
                label={i18n('entities.additionalService.fields.stationAditionalServiceName')}
                required={true}
              autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="dvr"
                label={i18n('entities.additionalService.fields.dvr')}
                options={additionalServiceEnumerators.dvr.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.additionalService.enumerators.dvr.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="dvrSerialCode"
                label={i18n('entities.additionalService.fields.dvrSerialCode')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="juegoDeCamarasInteriores"
                label={i18n('entities.additionalService.fields.juegoDeCamarasInteriores')}
                options={additionalServiceEnumerators.juegoDeCamarasInteriores.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.additionalService.enumerators.juegoDeCamarasInteriores.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="juegoDeCamarasExteriores"
                label={i18n('entities.additionalService.fields.juegoDeCamarasExteriores')}
                options={additionalServiceEnumerators.juegoDeCamarasExteriores.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.additionalService.enumerators.juegoDeCamarasExteriores.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <StationAutocompleteFormItem  
                name="stations"
                label={i18n('entities.additionalService.fields.stations')}
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

export default AdditionalServiceForm;
