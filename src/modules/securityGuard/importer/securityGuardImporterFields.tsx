import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import securityGuardEnumerators from 'src/modules/securityGuard/securityGuardEnumerators';
import moment from 'moment';

export default [
  {
    name: 'governmentId',
    label: i18n('entities.securityGuard.fields.governmentId'),
    schema: schemas.string(
      i18n('entities.securityGuard.fields.governmentId'),
      {
        "required": true,
        "max": 10
      },
    ),
  },
  {
    name: 'fullName',
    label: i18n('entities.securityGuard.fields.fullName'),
    schema: schemas.string(
      i18n('entities.securityGuard.fields.fullName'),
      {
        "max": 200,
        "required": true
      },
    ),
  },
  {
    name: 'guard',
    label: i18n('entities.securityGuard.fields.guard'),
    schema: schemas.relationToOne(
      i18n('entities.securityGuard.fields.guard'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'hiringContractDate',
    label: i18n('entities.securityGuard.fields.hiringContractDate'),
    schema: schemas.date(
      i18n('entities.securityGuard.fields.hiringContractDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'gender',
    label: i18n('entities.securityGuard.fields.gender'),
    schema: schemas.enumerator(
      i18n('entities.securityGuard.fields.gender'),
      {
        "required": true,
        "options": securityGuardEnumerators.gender
      },
    ),
  },
  {
    name: 'isOnDuty',
    label: i18n('entities.securityGuard.fields.isOnDuty'),
    schema: schemas.boolean(
      i18n('entities.securityGuard.fields.isOnDuty'),
      {},
    ),
  },
  {
    name: 'bloodType',
    label: i18n('entities.securityGuard.fields.bloodType'),
    schema: schemas.enumerator(
      i18n('entities.securityGuard.fields.bloodType'),
      {
        "required": true,
        "options": securityGuardEnumerators.bloodType
      },
    ),
  },
  {
    name: 'guardCredentials',
    label: i18n('entities.securityGuard.fields.guardCredentials'),
    schema: schemas.string(
      i18n('entities.securityGuard.fields.guardCredentials'),
      {
        "max": 255
      },
    ),
  },
  {
    name: 'birthDate',
    label: i18n('entities.securityGuard.fields.birthDate'),
    schema: schemas.date(
      i18n('entities.securityGuard.fields.birthDate'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'birthPlace',
    label: i18n('entities.securityGuard.fields.birthPlace'),
    schema: schemas.string(
      i18n('entities.securityGuard.fields.birthPlace'),
      {
        "max": 50
      },
    ),
  },
  {
    name: 'profileImage',
    label: i18n('entities.securityGuard.fields.profileImage'),
    schema: schemas.images(
      i18n('entities.securityGuard.fields.profileImage'),
      {
        "max": 2
      },
    ),
  },
  {
    name: 'maritalStatus',
    label: i18n('entities.securityGuard.fields.maritalStatus'),
    schema: schemas.enumerator(
      i18n('entities.securityGuard.fields.maritalStatus'),
      {
        "required": true,
        "options": securityGuardEnumerators.maritalStatus
      },
    ),
  },
  {
    name: 'credentialImage',
    label: i18n('entities.securityGuard.fields.credentialImage'),
    schema: schemas.images(
      i18n('entities.securityGuard.fields.credentialImage'),
      {
        "max": 1
      },
    ),
  },
  {
    name: 'academicInstruction',
    label: i18n('entities.securityGuard.fields.academicInstruction'),
    schema: schemas.enumerator(
      i18n('entities.securityGuard.fields.academicInstruction'),
      {
        "required": true,
        "options": securityGuardEnumerators.academicInstruction
      },
    ),
  },
  {
    name: 'recordPolicial',
    label: i18n('entities.securityGuard.fields.recordPolicial'),
    schema: schemas.images(
      i18n('entities.securityGuard.fields.recordPolicial'),
      {
        "max": 1
      },
    ),
  },
  {
    name: 'address',
    label: i18n('entities.securityGuard.fields.address'),
    schema: schemas.string(
      i18n('entities.securityGuard.fields.address'),
      {
        "max": 200
      },
    ),
  },
  {
    name: 'memos',
    label: i18n('entities.securityGuard.fields.memos'),
    schema: schemas.relationToMany(
      i18n('entities.securityGuard.fields.memos'),
      {},
    ),
  },
  {
    name: 'requests',
    label: i18n('entities.securityGuard.fields.requests'),
    schema: schemas.relationToMany(
      i18n('entities.securityGuard.fields.requests'),
      {},
    ),
  },
  {
    name: 'tutoriales',
    label: i18n('entities.securityGuard.fields.tutoriales'),
    schema: schemas.relationToMany(
      i18n('entities.securityGuard.fields.tutoriales'),
      {},
    ),
  },
];