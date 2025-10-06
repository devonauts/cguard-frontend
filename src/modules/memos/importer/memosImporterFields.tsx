import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'dateTime',
    label: i18n('entities.memos.fields.dateTime'),
    schema: schemas.datetime(
      i18n('entities.memos.fields.dateTime'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'guardName',
    label: i18n('entities.memos.fields.guardName'),
    schema: schemas.relationToOne(
      i18n('entities.memos.fields.guardName'),
      {},
    ),
  },
  {
    name: 'subject',
    label: i18n('entities.memos.fields.subject'),
    schema: schemas.string(
      i18n('entities.memos.fields.subject'),
      {
        "max": 200
      },
    ),
  },
  {
    name: 'content',
    label: i18n('entities.memos.fields.content'),
    schema: schemas.string(
      i18n('entities.memos.fields.content'),
      {
        "max": 800
      },
    ),
  },
  {
    name: 'wasAccepted',
    label: i18n('entities.memos.fields.wasAccepted'),
    schema: schemas.boolean(
      i18n('entities.memos.fields.wasAccepted'),
      {},
    ),
  },
  {
    name: 'memoDocumentPdf',
    label: i18n('entities.memos.fields.memoDocumentPdf'),
    schema: schemas.files(
      i18n('entities.memos.fields.memoDocumentPdf'),
      {},
    ),
  },
];