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
import CheckboxFormItem from 'src/view/shared/form/items/CheckboxFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import inventoryEnumerators from 'src/modules/inventory/inventoryEnumerators';
import StationAutocompleteFormItem from 'src/view/station/autocomplete/StationAutocompleteFormItem';

const schema = yup.object().shape({
  belongsTo: yupFormSchemas.relationToOne(
    i18n('entities.inventory.fields.belongsTo'),
    {},
  ),
  belongsToStation: yupFormSchemas.string(
    i18n('entities.inventory.fields.belongsToStation'),
    {},
  ),
  radio: yupFormSchemas.boolean(
    i18n('entities.inventory.fields.radio'),
    {},
  ),
  radioType: yupFormSchemas.string(
    i18n('entities.inventory.fields.radioType'),
    {
      "max": 90
    },
  ),
  radioSerialNumber: yupFormSchemas.string(
    i18n('entities.inventory.fields.radioSerialNumber'),
    {
      "max": 255
    },
  ),
  gun: yupFormSchemas.boolean(
    i18n('entities.inventory.fields.gun'),
    {},
  ),
  gunType: yupFormSchemas.enumerator(
    i18n('entities.inventory.fields.gunType'),
    {
      "options": inventoryEnumerators.gunType
    },
  ),
  gunSerialNumber: yupFormSchemas.string(
    i18n('entities.inventory.fields.gunSerialNumber'),
    {
      "max": 255
    },
  ),
  armor: yupFormSchemas.boolean(
    i18n('entities.inventory.fields.armor'),
    {},
  ),
  armorType: yupFormSchemas.string(
    i18n('entities.inventory.fields.armorType'),
    {
      "max": 90
    },
  ),
  armorSerialNumber: yupFormSchemas.string(
    i18n('entities.inventory.fields.armorSerialNumber'),
    {
      "max": 255
    },
  ),
  tolete: yupFormSchemas.boolean(
    i18n('entities.inventory.fields.tolete'),
    {},
  ),
  pito: yupFormSchemas.boolean(
    i18n('entities.inventory.fields.pito'),
    {},
  ),
  linterna: yupFormSchemas.boolean(
    i18n('entities.inventory.fields.linterna'),
    {},
  ),
  vitacora: yupFormSchemas.boolean(
    i18n('entities.inventory.fields.vitacora'),
    {},
  ),
  cintoCompleto: yupFormSchemas.boolean(
    i18n('entities.inventory.fields.cintoCompleto'),
    {},
  ),
  ponchoDeAguas: yupFormSchemas.boolean(
    i18n('entities.inventory.fields.ponchoDeAguas'),
    {},
  ),
  detectorDeMetales: yupFormSchemas.boolean(
    i18n('entities.inventory.fields.detectorDeMetales'),
    {},
  ),
  caseta: yupFormSchemas.boolean(
    i18n('entities.inventory.fields.caseta'),
    {},
  ),
  observations: yupFormSchemas.string(
    i18n('entities.inventory.fields.observations'),
    {
      "required": true,
      "max": 800
    },
  ),
  transportation: yupFormSchemas.enumerator(
    i18n('entities.inventory.fields.transportation'),
    {
      "required": true,
      "options": inventoryEnumerators.transportation
    },
  ),
});

function InventoryForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      belongsTo: record.belongsTo,
      belongsToStation: record.belongsToStation,
      radio: record.radio,
      radioType: record.radioType,
      radioSerialNumber: record.radioSerialNumber,
      gun: record.gun,
      gunType: record.gunType,
      gunSerialNumber: record.gunSerialNumber,
      armor: record.armor,
      armorType: record.armorType,
      armorSerialNumber: record.armorSerialNumber,
      tolete: record.tolete,
      pito: record.pito,
      linterna: record.linterna,
      vitacora: record.vitacora,
      cintoCompleto: record.cintoCompleto,
      ponchoDeAguas: record.ponchoDeAguas,
      detectorDeMetales: record.detectorDeMetales,
      caseta: record.caseta,
      observations: record.observations,
      transportation: record.transportation,
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
                name="belongsTo"
                label={i18n('entities.inventory.fields.belongsTo')}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="belongsToStation"
                label={i18n('entities.inventory.fields.belongsToStation')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <CheckboxFormItem
                name="radio"
                label={i18n('entities.inventory.fields.radio')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="radioType"
                label={i18n('entities.inventory.fields.radioType')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="radioSerialNumber"
                label={i18n('entities.inventory.fields.radioSerialNumber')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <CheckboxFormItem
                name="gun"
                label={i18n('entities.inventory.fields.gun')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="gunType"
                label={i18n('entities.inventory.fields.gunType')}
                options={inventoryEnumerators.gunType.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.inventory.enumerators.gunType.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="gunSerialNumber"
                label={i18n('entities.inventory.fields.gunSerialNumber')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <CheckboxFormItem
                name="armor"
                label={i18n('entities.inventory.fields.armor')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="armorType"
                label={i18n('entities.inventory.fields.armorType')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="armorSerialNumber"
                label={i18n('entities.inventory.fields.armorSerialNumber')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <CheckboxFormItem
                name="tolete"
                label={i18n('entities.inventory.fields.tolete')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <CheckboxFormItem
                name="pito"
                label={i18n('entities.inventory.fields.pito')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <CheckboxFormItem
                name="linterna"
                label={i18n('entities.inventory.fields.linterna')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <CheckboxFormItem
                name="vitacora"
                label={i18n('entities.inventory.fields.vitacora')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <CheckboxFormItem
                name="cintoCompleto"
                label={i18n('entities.inventory.fields.cintoCompleto')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <CheckboxFormItem
                name="ponchoDeAguas"
                label={i18n('entities.inventory.fields.ponchoDeAguas')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <CheckboxFormItem
                name="detectorDeMetales"
                label={i18n('entities.inventory.fields.detectorDeMetales')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <CheckboxFormItem
                name="caseta"
                label={i18n('entities.inventory.fields.caseta')}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TextAreaFormItem
                name="observations"
                label={i18n('entities.inventory.fields.observations')}  
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="transportation"
                label={i18n('entities.inventory.fields.transportation')}
                options={inventoryEnumerators.transportation.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.inventory.enumerators.transportation.${value}`,
                    ),
                  }),
                )}
                required={true}
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

export default InventoryForm;
