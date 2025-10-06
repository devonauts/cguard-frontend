import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.securityGuard.fields.id'),
  },
  {
    name: 'governmentId',
    label: i18n('entities.securityGuard.fields.governmentId'),
  },
  {
    name: 'fullName',
    label: i18n('entities.securityGuard.fields.fullName'),
  },
  {
    name: 'guard',
    label: i18n('entities.securityGuard.fields.guard'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'hiringContractDate',
    label: i18n('entities.securityGuard.fields.hiringContractDate'),
  },
  {
    name: 'gender',
    label: i18n('entities.securityGuard.fields.gender'),
  },
  {
    name: 'isOnDuty',
    label: i18n('entities.securityGuard.fields.isOnDuty'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'bloodType',
    label: i18n('entities.securityGuard.fields.bloodType'),
  },
  {
    name: 'guardCredentials',
    label: i18n('entities.securityGuard.fields.guardCredentials'),
  },
  {
    name: 'birthDate',
    label: i18n('entities.securityGuard.fields.birthDate'),
  },
  {
    name: 'birthPlace',
    label: i18n('entities.securityGuard.fields.birthPlace'),
  },
  {
    name: 'profileImage',
    label: i18n('entities.securityGuard.fields.profileImage'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'maritalStatus',
    label: i18n('entities.securityGuard.fields.maritalStatus'),
  },
  {
    name: 'credentialImage',
    label: i18n('entities.securityGuard.fields.credentialImage'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'academicInstruction',
    label: i18n('entities.securityGuard.fields.academicInstruction'),
  },
  {
    name: 'recordPolicial',
    label: i18n('entities.securityGuard.fields.recordPolicial'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'address',
    label: i18n('entities.securityGuard.fields.address'),
  },
  {
    name: 'memos',
    label: i18n('entities.securityGuard.fields.memos'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'requests',
    label: i18n('entities.securityGuard.fields.requests'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'tutoriales',
    label: i18n('entities.securityGuard.fields.tutoriales'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.securityGuard.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.securityGuard.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
