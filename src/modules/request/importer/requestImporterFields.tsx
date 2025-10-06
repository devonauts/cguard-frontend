import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import requestEnumerators from 'src/modules/request/requestEnumerators';
import moment from 'moment';

export default [
  {
    name: 'dateTime',
    label: i18n('entities.request.fields.dateTime'),
    schema: schemas.datetime(
      i18n('entities.request.fields.dateTime'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'guardName',
    label: i18n('entities.request.fields.guardName'),
    schema: schemas.relationToOne(
      i18n('entities.request.fields.guardName'),
      {},
    ),
  },
  {
    name: 'subject',
    label: i18n('entities.request.fields.subject'),
    schema: schemas.string(
      i18n('entities.request.fields.subject'),
      {
        "max": 200
      },
    ),
  },
  {
    name: 'content',
    label: i18n('entities.request.fields.content'),
    schema: schemas.string(
      i18n('entities.request.fields.content'),
      {},
    ),
  },
  {
    name: 'action',
    label: i18n('entities.request.fields.action'),
    schema: schemas.enumerator(
      i18n('entities.request.fields.action'),
      {
        "options": requestEnumerators.action
      },
    ),
  },
  {
    name: 'requestDocumentPDF',
    label: i18n('entities.request.fields.requestDocumentPDF'),
    schema: schemas.files(
      i18n('entities.request.fields.requestDocumentPDF'),
      {},
    ),
  },
];