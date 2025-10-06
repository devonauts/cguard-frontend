import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.deviceIdInformation.fields.id'),
  },
  {
    name: 'deviceId',
    label: i18n('entities.deviceIdInformation.fields.deviceId'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.deviceIdInformation.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.deviceIdInformation.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
