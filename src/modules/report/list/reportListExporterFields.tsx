import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.report.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.report.fields.title'),
  },
  {
    name: 'station',
    label: i18n('entities.report.fields.station'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'generatedDate',
    label: i18n('entities.report.fields.generatedDate'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'content',
    label: i18n('entities.report.fields.content'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.report.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.report.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
