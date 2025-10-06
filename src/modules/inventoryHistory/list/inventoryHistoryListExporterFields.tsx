import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.inventoryHistory.fields.id'),
  },
  {
    name: 'shiftOrigin',
    label: i18n('entities.inventoryHistory.fields.shiftOrigin'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'inventoryCheckedDate',
    label: i18n('entities.inventoryHistory.fields.inventoryCheckedDate'),
  },
  {
    name: 'inventoryOrigin',
    label: i18n('entities.inventoryHistory.fields.inventoryOrigin'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'isComplete',
    label: i18n('entities.inventoryHistory.fields.isComplete'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'observation',
    label: i18n('entities.inventoryHistory.fields.observation'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.inventoryHistory.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.inventoryHistory.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
