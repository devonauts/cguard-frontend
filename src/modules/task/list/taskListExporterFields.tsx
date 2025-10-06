import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.task.fields.id'),
  },
  {
    name: 'taskBelongsToStation',
    label: i18n('entities.task.fields.taskBelongsToStation'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'taskToDo',
    label: i18n('entities.task.fields.taskToDo'),
  },
  {
    name: 'wasItDone',
    label: i18n('entities.task.fields.wasItDone'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'imageOptional',
    label: i18n('entities.task.fields.imageOptional'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'dateToDoTheTask',
    label: i18n('entities.task.fields.dateToDoTheTask'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'dateCompletedTask',
    label: i18n('entities.task.fields.dateCompletedTask'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'taskCompletedImage',
    label: i18n('entities.task.fields.taskCompletedImage'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.task.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.task.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
