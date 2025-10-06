import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import inventoryEnumerators from 'src/modules/inventory/inventoryEnumerators';

export default [
  {
    name: 'belongsTo',
    label: i18n('entities.inventory.fields.belongsTo'),
    schema: schemas.relationToOne(
      i18n('entities.inventory.fields.belongsTo'),
      {},
    ),
  },
  {
    name: 'belongsToStation',
    label: i18n('entities.inventory.fields.belongsToStation'),
    schema: schemas.string(
      i18n('entities.inventory.fields.belongsToStation'),
      {},
    ),
  },
  {
    name: 'radio',
    label: i18n('entities.inventory.fields.radio'),
    schema: schemas.boolean(
      i18n('entities.inventory.fields.radio'),
      {},
    ),
  },
  {
    name: 'radioType',
    label: i18n('entities.inventory.fields.radioType'),
    schema: schemas.string(
      i18n('entities.inventory.fields.radioType'),
      {
        "max": 90
      },
    ),
  },
  {
    name: 'radioSerialNumber',
    label: i18n('entities.inventory.fields.radioSerialNumber'),
    schema: schemas.string(
      i18n('entities.inventory.fields.radioSerialNumber'),
      {
        "max": 255
      },
    ),
  },
  {
    name: 'gun',
    label: i18n('entities.inventory.fields.gun'),
    schema: schemas.boolean(
      i18n('entities.inventory.fields.gun'),
      {},
    ),
  },
  {
    name: 'gunType',
    label: i18n('entities.inventory.fields.gunType'),
    schema: schemas.enumerator(
      i18n('entities.inventory.fields.gunType'),
      {
        "options": inventoryEnumerators.gunType
      },
    ),
  },
  {
    name: 'gunSerialNumber',
    label: i18n('entities.inventory.fields.gunSerialNumber'),
    schema: schemas.string(
      i18n('entities.inventory.fields.gunSerialNumber'),
      {
        "max": 255
      },
    ),
  },
  {
    name: 'armor',
    label: i18n('entities.inventory.fields.armor'),
    schema: schemas.boolean(
      i18n('entities.inventory.fields.armor'),
      {},
    ),
  },
  {
    name: 'armorType',
    label: i18n('entities.inventory.fields.armorType'),
    schema: schemas.string(
      i18n('entities.inventory.fields.armorType'),
      {
        "max": 90
      },
    ),
  },
  {
    name: 'armorSerialNumber',
    label: i18n('entities.inventory.fields.armorSerialNumber'),
    schema: schemas.string(
      i18n('entities.inventory.fields.armorSerialNumber'),
      {
        "max": 255
      },
    ),
  },
  {
    name: 'tolete',
    label: i18n('entities.inventory.fields.tolete'),
    schema: schemas.boolean(
      i18n('entities.inventory.fields.tolete'),
      {},
    ),
  },
  {
    name: 'pito',
    label: i18n('entities.inventory.fields.pito'),
    schema: schemas.boolean(
      i18n('entities.inventory.fields.pito'),
      {},
    ),
  },
  {
    name: 'linterna',
    label: i18n('entities.inventory.fields.linterna'),
    schema: schemas.boolean(
      i18n('entities.inventory.fields.linterna'),
      {},
    ),
  },
  {
    name: 'vitacora',
    label: i18n('entities.inventory.fields.vitacora'),
    schema: schemas.boolean(
      i18n('entities.inventory.fields.vitacora'),
      {},
    ),
  },
  {
    name: 'cintoCompleto',
    label: i18n('entities.inventory.fields.cintoCompleto'),
    schema: schemas.boolean(
      i18n('entities.inventory.fields.cintoCompleto'),
      {},
    ),
  },
  {
    name: 'ponchoDeAguas',
    label: i18n('entities.inventory.fields.ponchoDeAguas'),
    schema: schemas.boolean(
      i18n('entities.inventory.fields.ponchoDeAguas'),
      {},
    ),
  },
  {
    name: 'detectorDeMetales',
    label: i18n('entities.inventory.fields.detectorDeMetales'),
    schema: schemas.boolean(
      i18n('entities.inventory.fields.detectorDeMetales'),
      {},
    ),
  },
  {
    name: 'caseta',
    label: i18n('entities.inventory.fields.caseta'),
    schema: schemas.boolean(
      i18n('entities.inventory.fields.caseta'),
      {},
    ),
  },
  {
    name: 'observations',
    label: i18n('entities.inventory.fields.observations'),
    schema: schemas.string(
      i18n('entities.inventory.fields.observations'),
      {
        "required": true,
        "max": 800
      },
    ),
  },
  {
    name: 'transportation',
    label: i18n('entities.inventory.fields.transportation'),
    schema: schemas.enumerator(
      i18n('entities.inventory.fields.transportation'),
      {
        "required": true,
        "options": inventoryEnumerators.transportation
      },
    ),
  },
];