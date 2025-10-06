import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'personInCharge',
    label: i18n('entities.representanteEmpresa.fields.personInCharge'),
    schema: schemas.relationToOne(
      i18n('entities.representanteEmpresa.fields.personInCharge'),
      {},
    ),
  },
  {
    name: 'governmentId',
    label: i18n('entities.representanteEmpresa.fields.governmentId'),
    schema: schemas.string(
      i18n('entities.representanteEmpresa.fields.governmentId'),
      {
        "required": true,
        "max": 10
      },
    ),
  },
  {
    name: 'jobTitle',
    label: i18n('entities.representanteEmpresa.fields.jobTitle'),
    schema: schemas.string(
      i18n('entities.representanteEmpresa.fields.jobTitle'),
      {
        "max": 90,
        "required": true
      },
    ),
  },
  {
    name: 'assignedCompany',
    label: i18n('entities.representanteEmpresa.fields.assignedCompany'),
    schema: schemas.relationToOne(
      i18n('entities.representanteEmpresa.fields.assignedCompany'),
      {
        "required": true
      },
    ),
  },
];