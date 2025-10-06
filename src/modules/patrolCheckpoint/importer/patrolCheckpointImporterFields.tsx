import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'station',
    label: i18n('entities.patrolCheckpoint.fields.station'),
    schema: schemas.relationToOne(
      i18n('entities.patrolCheckpoint.fields.station'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'name',
    label: i18n('entities.patrolCheckpoint.fields.name'),
    schema: schemas.string(
      i18n('entities.patrolCheckpoint.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'latitud',
    label: i18n('entities.patrolCheckpoint.fields.latitud'),
    schema: schemas.string(
      i18n('entities.patrolCheckpoint.fields.latitud'),
      {},
    ),
  },
  {
    name: 'longitud',
    label: i18n('entities.patrolCheckpoint.fields.longitud'),
    schema: schemas.string(
      i18n('entities.patrolCheckpoint.fields.longitud'),
      {
        "max": 200
      },
    ),
  },
  {
    name: 'assignedQrImage',
    label: i18n('entities.patrolCheckpoint.fields.assignedQrImage'),
    schema: schemas.images(
      i18n('entities.patrolCheckpoint.fields.assignedQrImage'),
      {
        "max": 1,
        "required": true
      },
    ),
  },
  {
    name: 'patrols',
    label: i18n('entities.patrolCheckpoint.fields.patrols'),
    schema: schemas.relationToMany(
      i18n('entities.patrolCheckpoint.fields.patrols'),
      {},
    ),
  },
];