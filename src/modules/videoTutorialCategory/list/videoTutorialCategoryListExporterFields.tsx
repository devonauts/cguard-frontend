import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.videoTutorialCategory.fields.id'),
  },
  {
    name: 'categoryName',
    label: i18n('entities.videoTutorialCategory.fields.categoryName'),
  },
  {
    name: 'videosInCategory',
    label: i18n('entities.videoTutorialCategory.fields.videosInCategory'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.videoTutorialCategory.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.videoTutorialCategory.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
