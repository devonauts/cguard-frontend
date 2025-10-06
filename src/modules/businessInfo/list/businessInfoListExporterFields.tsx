import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.businessInfo.fields.id'),
  },
  {
    name: 'companyName',
    label: i18n('entities.businessInfo.fields.companyName'),
  },
  {
    name: 'description',
    label: i18n('entities.businessInfo.fields.description'),
  },
  {
    name: 'logo',
    label: i18n('entities.businessInfo.fields.logo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'contactPhone',
    label: i18n('entities.businessInfo.fields.contactPhone'),
  },
  {
    name: 'contactEmail',
    label: i18n('entities.businessInfo.fields.contactEmail'),
  },
  {
    name: 'address',
    label: i18n('entities.businessInfo.fields.address'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.businessInfo.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.businessInfo.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
