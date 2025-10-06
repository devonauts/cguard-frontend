import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import stationEnumerators from 'src/modules/station/stationEnumerators';

export default [
  {
    name: 'stationOrigin',
    label: i18n('entities.station.fields.stationOrigin'),
    schema: schemas.relationToOne(
      i18n('entities.station.fields.stationOrigin'),
      {},
    ),
  },
  {
    name: 'stationName',
    label: i18n('entities.station.fields.stationName'),
    schema: schemas.string(
      i18n('entities.station.fields.stationName'),
      {
        "max": 250,
        "required": true
      },
    ),
  },
  {
    name: 'latitud',
    label: i18n('entities.station.fields.latitud'),
    schema: schemas.string(
      i18n('entities.station.fields.latitud'),
      {
        "required": true,
        "max": 100
      },
    ),
  },
  {
    name: 'longitud',
    label: i18n('entities.station.fields.longitud'),
    schema: schemas.string(
      i18n('entities.station.fields.longitud'),
      {
        "required": true,
        "max": 100
      },
    ),
  },
  {
    name: 'numberOfGuardsInStation',
    label: i18n('entities.station.fields.numberOfGuardsInStation'),
    schema: schemas.enumerator(
      i18n('entities.station.fields.numberOfGuardsInStation'),
      {
        "options": stationEnumerators.numberOfGuardsInStation
      },
    ),
  },
  {
    name: 'assignedGuards',
    label: i18n('entities.station.fields.assignedGuards'),
    schema: schemas.relationToMany(
      i18n('entities.station.fields.assignedGuards'),
      {},
    ),
  },
  {
    name: 'stationSchedule',
    label: i18n('entities.station.fields.stationSchedule'),
    schema: schemas.enumerator(
      i18n('entities.station.fields.stationSchedule'),
      {
        "required": true,
        "options": stationEnumerators.stationSchedule
      },
    ),
  },
  {
    name: 'startingTimeInDay',
    label: i18n('entities.station.fields.startingTimeInDay'),
    schema: schemas.string(
      i18n('entities.station.fields.startingTimeInDay'),
      {},
    ),
  },
  {
    name: 'finishTimeInDay',
    label: i18n('entities.station.fields.finishTimeInDay'),
    schema: schemas.string(
      i18n('entities.station.fields.finishTimeInDay'),
      {},
    ),
  },
  {
    name: 'tasks',
    label: i18n('entities.station.fields.tasks'),
    schema: schemas.relationToMany(
      i18n('entities.station.fields.tasks'),
      {},
    ),
  },
  {
    name: 'reports',
    label: i18n('entities.station.fields.reports'),
    schema: schemas.relationToMany(
      i18n('entities.station.fields.reports'),
      {},
    ),
  },
  {
    name: 'incidents',
    label: i18n('entities.station.fields.incidents'),
    schema: schemas.relationToMany(
      i18n('entities.station.fields.incidents'),
      {},
    ),
  },
  {
    name: 'checkpoints',
    label: i18n('entities.station.fields.checkpoints'),
    schema: schemas.relationToMany(
      i18n('entities.station.fields.checkpoints'),
      {},
    ),
  },
  {
    name: 'patrol',
    label: i18n('entities.station.fields.patrol'),
    schema: schemas.relationToMany(
      i18n('entities.station.fields.patrol'),
      {},
    ),
  },
  {
    name: 'shift',
    label: i18n('entities.station.fields.shift'),
    schema: schemas.relationToMany(
      i18n('entities.station.fields.shift'),
      {},
    ),
  },
];