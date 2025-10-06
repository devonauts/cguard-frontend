import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.certification.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.certification.fields.title'),
  },
  {
    name: 'code',
    label: i18n('entities.certification.fields.code'),
  },
  {
    name: 'image',
    label: i18n('entities.certification.fields.image'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'icon',
    label: i18n('entities.certification.fields.icon'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'description',
    label: i18n('entities.certification.fields.description'),
  },
  {
    name: 'acquisitionDate',
    label: i18n('entities.certification.fields.acquisitionDate'),
  },
  {
    name: 'expirationDate',
    label: i18n('entities.certification.fields.expirationDate'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.certification.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.certification.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
