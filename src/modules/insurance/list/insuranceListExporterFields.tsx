import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.insurance.fields.id'),
  },
  {
    name: 'provider',
    label: i18n('entities.insurance.fields.provider'),
  },
  {
    name: 'policyNumber',
    label: i18n('entities.insurance.fields.policyNumber'),
  },
  {
    name: 'validFrom',
    label: i18n('entities.insurance.fields.validFrom'),
  },
  {
    name: 'validUntil',
    label: i18n('entities.insurance.fields.validUntil'),
  },
  {
    name: 'document',
    label: i18n('entities.insurance.fields.document'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.insurance.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.insurance.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
