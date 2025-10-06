import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.representanteEmpresa.fields.id'),
  },
  {
    name: 'personInCharge',
    label: i18n('entities.representanteEmpresa.fields.personInCharge'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'governmentId',
    label: i18n('entities.representanteEmpresa.fields.governmentId'),
  },
  {
    name: 'jobTitle',
    label: i18n('entities.representanteEmpresa.fields.jobTitle'),
  },
  {
    name: 'assignedCompany',
    label: i18n('entities.representanteEmpresa.fields.assignedCompany'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.representanteEmpresa.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.representanteEmpresa.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
