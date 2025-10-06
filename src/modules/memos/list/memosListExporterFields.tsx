import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.memos.fields.id'),
  },
  {
    name: 'dateTime',
    label: i18n('entities.memos.fields.dateTime'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'guardName',
    label: i18n('entities.memos.fields.guardName'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'subject',
    label: i18n('entities.memos.fields.subject'),
  },
  {
    name: 'content',
    label: i18n('entities.memos.fields.content'),
  },
  {
    name: 'wasAccepted',
    label: i18n('entities.memos.fields.wasAccepted'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'memoDocumentPdf',
    label: i18n('entities.memos.fields.memoDocumentPdf'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.memos.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.memos.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
