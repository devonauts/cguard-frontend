import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.completionOfTutorial.fields.id'),
  },
  {
    name: 'guardName',
    label: i18n('entities.completionOfTutorial.fields.guardName'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'dateTutorialStarted',
    label: i18n('entities.completionOfTutorial.fields.dateTutorialStarted'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'tutorialStarted',
    label: i18n('entities.completionOfTutorial.fields.tutorialStarted'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'checkedTutorial',
    label: i18n('entities.completionOfTutorial.fields.checkedTutorial'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'wasCompleted',
    label: i18n('entities.completionOfTutorial.fields.wasCompleted'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'dateEndedTutorial',
    label: i18n('entities.completionOfTutorial.fields.dateEndedTutorial'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.completionOfTutorial.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.completionOfTutorial.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
