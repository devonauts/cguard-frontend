import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.inventory.fields.id'),
  },
  {
    name: 'belongsTo',
    label: i18n('entities.inventory.fields.belongsTo'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'belongsToStation',
    label: i18n('entities.inventory.fields.belongsToStation'),
  },
  {
    name: 'radio',
    label: i18n('entities.inventory.fields.radio'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'radioType',
    label: i18n('entities.inventory.fields.radioType'),
  },
  {
    name: 'radioSerialNumber',
    label: i18n('entities.inventory.fields.radioSerialNumber'),
  },
  {
    name: 'gun',
    label: i18n('entities.inventory.fields.gun'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'gunType',
    label: i18n('entities.inventory.fields.gunType'),
  },
  {
    name: 'gunSerialNumber',
    label: i18n('entities.inventory.fields.gunSerialNumber'),
  },
  {
    name: 'armor',
    label: i18n('entities.inventory.fields.armor'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'armorType',
    label: i18n('entities.inventory.fields.armorType'),
  },
  {
    name: 'armorSerialNumber',
    label: i18n('entities.inventory.fields.armorSerialNumber'),
  },
  {
    name: 'tolete',
    label: i18n('entities.inventory.fields.tolete'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'pito',
    label: i18n('entities.inventory.fields.pito'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'linterna',
    label: i18n('entities.inventory.fields.linterna'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'vitacora',
    label: i18n('entities.inventory.fields.vitacora'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'cintoCompleto',
    label: i18n('entities.inventory.fields.cintoCompleto'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'ponchoDeAguas',
    label: i18n('entities.inventory.fields.ponchoDeAguas'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'detectorDeMetales',
    label: i18n('entities.inventory.fields.detectorDeMetales'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'caseta',
    label: i18n('entities.inventory.fields.caseta'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'observations',
    label: i18n('entities.inventory.fields.observations'),
  },
  {
    name: 'transportation',
    label: i18n('entities.inventory.fields.transportation'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.inventory.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.inventory.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
