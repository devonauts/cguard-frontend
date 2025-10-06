import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.bannerSuperiorApp.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.bannerSuperiorApp.fields.title'),
  },
  {
    name: 'imageUrl',
    label: i18n('entities.bannerSuperiorApp.fields.imageUrl'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'link',
    label: i18n('entities.bannerSuperiorApp.fields.link'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.bannerSuperiorApp.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.bannerSuperiorApp.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
