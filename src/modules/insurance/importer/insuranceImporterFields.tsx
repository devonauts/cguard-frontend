import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'provider',
    label: i18n('entities.insurance.fields.provider'),
    schema: schemas.string(
      i18n('entities.insurance.fields.provider'),
      {},
    ),
  },
  {
    name: 'policyNumber',
    label: i18n('entities.insurance.fields.policyNumber'),
    schema: schemas.string(
      i18n('entities.insurance.fields.policyNumber'),
      {},
    ),
  },
  {
    name: 'validFrom',
    label: i18n('entities.insurance.fields.validFrom'),
    schema: schemas.date(
      i18n('entities.insurance.fields.validFrom'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'validUntil',
    label: i18n('entities.insurance.fields.validUntil'),
    schema: schemas.date(
      i18n('entities.insurance.fields.validUntil'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'document',
    label: i18n('entities.insurance.fields.document'),
    schema: schemas.files(
      i18n('entities.insurance.fields.document'),
      {},
    ),
  },
];