import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.videoTutorial.fields.id'),
  },
  {
    name: 'videoTutorialName',
    label: i18n('entities.videoTutorial.fields.videoTutorialName'),
  },
  {
    name: 'videoTutorialLink',
    label: i18n('entities.videoTutorial.fields.videoTutorialLink'),
  },
  {
    name: 'videoTutorialCategory',
    label: i18n('entities.videoTutorial.fields.videoTutorialCategory'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.videoTutorial.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.videoTutorial.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
