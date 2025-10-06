import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.tutorial.fields.id'),
  },
  {
    name: 'tutorialName',
    label: i18n('entities.tutorial.fields.tutorialName'),
  },
  {
    name: 'tutorialCategory',
    label: i18n('entities.tutorial.fields.tutorialCategory'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'tutorialVideos',
    label: i18n('entities.tutorial.fields.tutorialVideos'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.tutorial.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.tutorial.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
