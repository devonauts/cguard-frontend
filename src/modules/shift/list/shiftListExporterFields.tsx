import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.shift.fields.id'),
  },
  {
    name: 'startTime',
    label: i18n('entities.shift.fields.startTime'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'endTime',
    label: i18n('entities.shift.fields.endTime'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'station',
    label: i18n('entities.shift.fields.station'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'guard',
    label: i18n('entities.shift.fields.guard'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.shift.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.shift.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
