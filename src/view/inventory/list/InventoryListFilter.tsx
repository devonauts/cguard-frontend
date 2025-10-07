import { i18n } from 'src/i18n';
import actions from 'src/modules/inventory/list/inventoryListActions';
import selectors from 'src/modules/inventory/list/inventoryListSelectors';
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
import inventoryEnumerators from 'src/modules/inventory/inventoryEnumerators';
import StationAutocompleteFormItem from 'src/view/station/autocomplete/StationAutocompleteFormItem';

const schema = yup.object().shape({
  belongsTo: yupFilterSchemas.relationToOne(
    i18n('entities.inventory.fields.belongsTo'),
  ),
  belongsToStation: yupFilterSchemas.string(
    i18n('entities.inventory.fields.belongsToStation'),
  ),
  radio: yupFilterSchemas.boolean(
    i18n('entities.inventory.fields.radio'),
  ),
  radioType: yupFilterSchemas.string(
    i18n('entities.inventory.fields.radioType'),
  ),
  radioSerialNumber: yupFilterSchemas.string(
    i18n('entities.inventory.fields.radioSerialNumber'),
  ),
  gun: yupFilterSchemas.boolean(
    i18n('entities.inventory.fields.gun'),
  ),
  gunType: yupFilterSchemas.enumerator(
    i18n('entities.inventory.fields.gunType'),
  ),
  gunSerialNumber: yupFilterSchemas.string(
    i18n('entities.inventory.fields.gunSerialNumber'),
  ),
  armor: yupFilterSchemas.boolean(
    i18n('entities.inventory.fields.armor'),
  ),
  armorType: yupFilterSchemas.string(
    i18n('entities.inventory.fields.armorType'),
  ),
  armorSerialNumber: yupFilterSchemas.string(
    i18n('entities.inventory.fields.armorSerialNumber'),
  ),
  tolete: yupFilterSchemas.boolean(
    i18n('entities.inventory.fields.tolete'),
  ),
  pito: yupFilterSchemas.boolean(
    i18n('entities.inventory.fields.pito'),
  ),
  linterna: yupFilterSchemas.boolean(
    i18n('entities.inventory.fields.linterna'),
  ),
  vitacora: yupFilterSchemas.boolean(
    i18n('entities.inventory.fields.vitacora'),
  ),
  cintoCompleto: yupFilterSchemas.boolean(
    i18n('entities.inventory.fields.cintoCompleto'),
  ),
  ponchoDeAguas: yupFilterSchemas.boolean(
    i18n('entities.inventory.fields.ponchoDeAguas'),
  ),
  detectorDeMetales: yupFilterSchemas.boolean(
    i18n('entities.inventory.fields.detectorDeMetales'),
  ),
  caseta: yupFilterSchemas.boolean(
    i18n('entities.inventory.fields.caseta'),
  ),
  observations: yupFilterSchemas.string(
    i18n('entities.inventory.fields.observations'),
  ),
  transportation: yupFilterSchemas.enumerator(
    i18n('entities.inventory.fields.transportation'),
  ),
});

const emptyValues = {
  // belongsTo: omitted (relation field)
  belongsToStation: '',
  // radio: omitted (boolean field)
  radioType: '',
  radioSerialNumber: '',
  // gun: omitted (boolean field)
  gunType: '',
  gunSerialNumber: '',
  // armor: omitted (boolean field)
  armorType: '',
  armorSerialNumber: '',
  // tolete: omitted (boolean field)
  // pito: omitted (boolean field)
  // linterna: omitted (boolean field)
  // vitacora: omitted (boolean field)
  // cintoCompleto: omitted (boolean field)
  // ponchoDeAguas: omitted (boolean field)
  // detectorDeMetales: omitted (boolean field)
  // caseta: omitted (boolean field)
  observations: '',
  transportation: '',
}

const previewRenders = {
  belongsTo: {
      label: i18n('entities.inventory.fields.belongsTo'),
      render: filterRenders.relationToOne(),
    },
  belongsToStation: {
    label: i18n('entities.inventory.fields.belongsToStation'),
    render: filterRenders.generic(),
  },
  radio: {
    label: i18n('entities.inventory.fields.radio'),
    render: filterRenders.boolean(),
  },
  radioType: {
    label: i18n('entities.inventory.fields.radioType'),
    render: filterRenders.generic(),
  },
  radioSerialNumber: {
    label: i18n('entities.inventory.fields.radioSerialNumber'),
    render: filterRenders.generic(),
  },
  gun: {
    label: i18n('entities.inventory.fields.gun'),
    render: filterRenders.boolean(),
  },
  gunType: {
    label: i18n('entities.inventory.fields.gunType'),
    render: filterRenders.enumerator('entities.inventory.enumerators.gunType',),
  },
  gunSerialNumber: {
    label: i18n('entities.inventory.fields.gunSerialNumber'),
    render: filterRenders.generic(),
  },
  armor: {
    label: i18n('entities.inventory.fields.armor'),
    render: filterRenders.boolean(),
  },
  armorType: {
    label: i18n('entities.inventory.fields.armorType'),
    render: filterRenders.generic(),
  },
  armorSerialNumber: {
    label: i18n('entities.inventory.fields.armorSerialNumber'),
    render: filterRenders.generic(),
  },
  tolete: {
    label: i18n('entities.inventory.fields.tolete'),
    render: filterRenders.boolean(),
  },
  pito: {
    label: i18n('entities.inventory.fields.pito'),
    render: filterRenders.boolean(),
  },
  linterna: {
    label: i18n('entities.inventory.fields.linterna'),
    render: filterRenders.boolean(),
  },
  vitacora: {
    label: i18n('entities.inventory.fields.vitacora'),
    render: filterRenders.boolean(),
  },
  cintoCompleto: {
    label: i18n('entities.inventory.fields.cintoCompleto'),
    render: filterRenders.boolean(),
  },
  ponchoDeAguas: {
    label: i18n('entities.inventory.fields.ponchoDeAguas'),
    render: filterRenders.boolean(),
  },
  detectorDeMetales: {
    label: i18n('entities.inventory.fields.detectorDeMetales'),
    render: filterRenders.boolean(),
  },
  caseta: {
    label: i18n('entities.inventory.fields.caseta'),
    render: filterRenders.boolean(),
  },
  observations: {
    label: i18n('entities.inventory.fields.observations'),
    render: filterRenders.generic(),
  },
  transportation: {
    label: i18n('entities.inventory.fields.transportation'),
    render: filterRenders.enumerator('entities.inventory.enumerators.transportation',),
  },
}

function InventoryListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    const combined = {
      ...emptyValues,
      ...rawFilter,
    };
    
    // Clean up relation field stored null values
    if (combined.belongsTo === null || combined.belongsTo === '') {
      delete combined.belongsTo;
    }
    
    return combined;
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
                      <StationAutocompleteFormItem  
                        name="belongsTo"
                        label={i18n('entities.inventory.fields.belongsTo')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="belongsToStation"
                        label={i18n('entities.inventory.fields.belongsToStation')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="radio"
                        label={i18n('entities.inventory.fields.radio')}
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
                      <InputFormItem
                        name="radioType"
                        label={i18n('entities.inventory.fields.radioType')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="radioSerialNumber"
                        label={i18n('entities.inventory.fields.radioSerialNumber')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="gun"
                        label={i18n('entities.inventory.fields.gun')}
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
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="gunSerialNumber"
                        label={i18n('entities.inventory.fields.gunSerialNumber')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="armor"
                        label={i18n('entities.inventory.fields.armor')}
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
                      <InputFormItem
                        name="armorType"
                        label={i18n('entities.inventory.fields.armorType')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="armorSerialNumber"
                        label={i18n('entities.inventory.fields.armorSerialNumber')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="tolete"
                        label={i18n('entities.inventory.fields.tolete')}
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
                        name="pito"
                        label={i18n('entities.inventory.fields.pito')}
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
                        name="linterna"
                        label={i18n('entities.inventory.fields.linterna')}
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
                        name="vitacora"
                        label={i18n('entities.inventory.fields.vitacora')}
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
                        name="cintoCompleto"
                        label={i18n('entities.inventory.fields.cintoCompleto')}
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
                        name="ponchoDeAguas"
                        label={i18n('entities.inventory.fields.ponchoDeAguas')}
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
                        name="detectorDeMetales"
                        label={i18n('entities.inventory.fields.detectorDeMetales')}
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
                        name="caseta"
                        label={i18n('entities.inventory.fields.caseta')}
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
                      <InputFormItem
                        name="observations"
                        label={i18n('entities.inventory.fields.observations')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
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

export default InventoryListFilter;