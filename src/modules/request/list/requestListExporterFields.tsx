import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.request.fields.id'),
  },
  {
    name: 'dateTime',
    label: i18n('entities.request.fields.dateTime'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'guardName',
    label: i18n('entities.request.fields.guardName'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'subject',
    label: i18n('entities.request.fields.subject'),
  },
  {
    name: 'content',
    label: i18n('entities.request.fields.content'),
  },
  {
    name: 'action',
    label: i18n('entities.request.fields.action'),
  },
  {
    name: 'requestDocumentPDF',
    label: i18n('entities.request.fields.requestDocumentPDF'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.request.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.request.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
