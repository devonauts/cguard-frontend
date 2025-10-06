import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'title',
    label: i18n('entities.report.fields.title'),
    schema: schemas.string(
      i18n('entities.report.fields.title'),
      {},
    ),
  },
  {
    name: 'station',
    label: i18n('entities.report.fields.station'),
    schema: schemas.relationToOne(
      i18n('entities.report.fields.station'),
      {},
    ),
  },
  {
    name: 'generatedDate',
    label: i18n('entities.report.fields.generatedDate'),
    schema: schemas.datetime(
      i18n('entities.report.fields.generatedDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'content',
    label: i18n('entities.report.fields.content'),
    schema: schemas.string(
      i18n('entities.report.fields.content'),
      {},
    ),
  },
];