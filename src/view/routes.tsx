import Permissions from 'src/modules/security/permissions';
import config from 'src/config';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/banner-superior-app',
    loader: () =>
      import('src/view/bannerSuperiorApp/list/BannerSuperiorAppListPage'),
    permissionRequired: permissions.bannerSuperiorAppRead,
    exact: true,
  },
  {
    path: '/banner-superior-app/new',
    loader: () =>
      import('src/view/bannerSuperiorApp/form/BannerSuperiorAppFormPage'),
    permissionRequired: permissions.bannerSuperiorAppCreate,
    exact: true,
  },
  {
    path: '/banner-superior-app/importer',
    loader: () =>
      import(
        'src/view/bannerSuperiorApp/importer/BannerSuperiorAppImporterPage'
      ),
    permissionRequired: permissions.bannerSuperiorAppImport,
    exact: true,
  },
  {
    path: '/banner-superior-app/:id/edit',
    loader: () =>
      import('src/view/bannerSuperiorApp/form/BannerSuperiorAppFormPage'),
    permissionRequired: permissions.bannerSuperiorAppEdit,
    exact: true,
  },
  {
    path: '/banner-superior-app/:id',
    loader: () =>
      import('src/view/bannerSuperiorApp/view/BannerSuperiorAppViewPage'),
    permissionRequired: permissions.bannerSuperiorAppRead,
    exact: true,
  },

  {
    path: '/service',
    loader: () =>
      import('src/view/service/list/ServiceListPage'),
    permissionRequired: permissions.serviceRead,
    exact: true,
  },
  {
    path: '/service/new',
    loader: () =>
      import('src/view/service/form/ServiceFormPage'),
    permissionRequired: permissions.serviceCreate,
    exact: true,
  },
  {
    path: '/service/importer',
    loader: () =>
      import(
        'src/view/service/importer/ServiceImporterPage'
      ),
    permissionRequired: permissions.serviceImport,
    exact: true,
  },
  {
    path: '/service/:id/edit',
    loader: () =>
      import('src/view/service/form/ServiceFormPage'),
    permissionRequired: permissions.serviceEdit,
    exact: true,
  },
  {
    path: '/service/:id',
    loader: () =>
      import('src/view/service/view/ServiceViewPage'),
    permissionRequired: permissions.serviceRead,
    exact: true,
  },

  {
    path: '/certification',
    loader: () =>
      import('src/view/certification/list/CertificationListPage'),
    permissionRequired: permissions.certificationRead,
    exact: true,
  },
  {
    path: '/certification/new',
    loader: () =>
      import('src/view/certification/form/CertificationFormPage'),
    permissionRequired: permissions.certificationCreate,
    exact: true,
  },
  {
    path: '/certification/importer',
    loader: () =>
      import(
        'src/view/certification/importer/CertificationImporterPage'
      ),
    permissionRequired: permissions.certificationImport,
    exact: true,
  },
  {
    path: '/certification/:id/edit',
    loader: () =>
      import('src/view/certification/form/CertificationFormPage'),
    permissionRequired: permissions.certificationEdit,
    exact: true,
  },
  {
    path: '/certification/:id',
    loader: () =>
      import('src/view/certification/view/CertificationViewPage'),
    permissionRequired: permissions.certificationRead,
    exact: true,
  },

  {
    path: '/security-guard',
    loader: () =>
      import('src/view/securityGuard/list/SecurityGuardListPage'),
    permissionRequired: permissions.securityGuardRead,
    exact: true,
  },
  {
    path: '/security-guard/new',
    loader: () =>
      import('src/view/securityGuard/form/SecurityGuardFormPage'),
    permissionRequired: permissions.securityGuardCreate,
    exact: true,
  },
  {
    path: '/security-guard/importer',
    loader: () =>
      import(
        'src/view/securityGuard/importer/SecurityGuardImporterPage'
      ),
    permissionRequired: permissions.securityGuardImport,
    exact: true,
  },
  {
    path: '/security-guard/:id/edit',
    loader: () =>
      import('src/view/securityGuard/form/SecurityGuardFormPage'),
    permissionRequired: permissions.securityGuardEdit,
    exact: true,
  },
  {
    path: '/security-guard/:id',
    loader: () =>
      import('src/view/securityGuard/view/SecurityGuardViewPage'),
    permissionRequired: permissions.securityGuardRead,
    exact: true,
  },

  {
    path: '/client-account',
    loader: () =>
      import('src/view/clientAccount/list/ClientAccountListPage'),
    permissionRequired: permissions.clientAccountRead,
    exact: true,
  },
  {
    path: '/client-account/new',
    loader: () =>
      import('src/view/clientAccount/form/ClientAccountFormPage'),
    permissionRequired: permissions.clientAccountCreate,
    exact: true,
  },
  {
    path: '/client-account/importer',
    loader: () =>
      import(
        'src/view/clientAccount/importer/ClientAccountImporterPage'
      ),
    permissionRequired: permissions.clientAccountImport,
    exact: true,
  },
  {
    path: '/client-account/:id/edit',
    loader: () =>
      import('src/view/clientAccount/form/ClientAccountFormPage'),
    permissionRequired: permissions.clientAccountEdit,
    exact: true,
  },
  {
    path: '/client-account/:id',
    loader: () =>
      import('src/view/clientAccount/view/ClientAccountViewPage'),
    permissionRequired: permissions.clientAccountRead,
    exact: true,
  },

  {
    path: '/representante-empresa',
    loader: () =>
      import('src/view/representanteEmpresa/list/RepresentanteEmpresaListPage'),
    permissionRequired: permissions.representanteEmpresaRead,
    exact: true,
  },
  {
    path: '/representante-empresa/new',
    loader: () =>
      import('src/view/representanteEmpresa/form/RepresentanteEmpresaFormPage'),
    permissionRequired: permissions.representanteEmpresaCreate,
    exact: true,
  },
  {
    path: '/representante-empresa/importer',
    loader: () =>
      import(
        'src/view/representanteEmpresa/importer/RepresentanteEmpresaImporterPage'
      ),
    permissionRequired: permissions.representanteEmpresaImport,
    exact: true,
  },
  {
    path: '/representante-empresa/:id/edit',
    loader: () =>
      import('src/view/representanteEmpresa/form/RepresentanteEmpresaFormPage'),
    permissionRequired: permissions.representanteEmpresaEdit,
    exact: true,
  },
  {
    path: '/representante-empresa/:id',
    loader: () =>
      import('src/view/representanteEmpresa/view/RepresentanteEmpresaViewPage'),
    permissionRequired: permissions.representanteEmpresaRead,
    exact: true,
  },

  {
    path: '/incident',
    loader: () =>
      import('src/view/incident/list/IncidentListPage'),
    permissionRequired: permissions.incidentRead,
    exact: true,
  },
  {
    path: '/incident/new',
    loader: () =>
      import('src/view/incident/form/IncidentFormPage'),
    permissionRequired: permissions.incidentCreate,
    exact: true,
  },
  {
    path: '/incident/importer',
    loader: () =>
      import(
        'src/view/incident/importer/IncidentImporterPage'
      ),
    permissionRequired: permissions.incidentImport,
    exact: true,
  },
  {
    path: '/incident/:id/edit',
    loader: () =>
      import('src/view/incident/form/IncidentFormPage'),
    permissionRequired: permissions.incidentEdit,
    exact: true,
  },
  {
    path: '/incident/:id',
    loader: () =>
      import('src/view/incident/view/IncidentViewPage'),
    permissionRequired: permissions.incidentRead,
    exact: true,
  },

  {
    path: '/inventory',
    loader: () =>
      import('src/view/inventory/list/InventoryListPage'),
    permissionRequired: permissions.inventoryRead,
    exact: true,
  },
  {
    path: '/inventory/new',
    loader: () =>
      import('src/view/inventory/form/InventoryFormPage'),
    permissionRequired: permissions.inventoryCreate,
    exact: true,
  },
  {
    path: '/inventory/importer',
    loader: () =>
      import(
        'src/view/inventory/importer/InventoryImporterPage'
      ),
    permissionRequired: permissions.inventoryImport,
    exact: true,
  },
  {
    path: '/inventory/:id/edit',
    loader: () =>
      import('src/view/inventory/form/InventoryFormPage'),
    permissionRequired: permissions.inventoryEdit,
    exact: true,
  },
  {
    path: '/inventory/:id',
    loader: () =>
      import('src/view/inventory/view/InventoryViewPage'),
    permissionRequired: permissions.inventoryRead,
    exact: true,
  },

  {
    path: '/additional-service',
    loader: () =>
      import('src/view/additionalService/list/AdditionalServiceListPage'),
    permissionRequired: permissions.additionalServiceRead,
    exact: true,
  },
  {
    path: '/additional-service/new',
    loader: () =>
      import('src/view/additionalService/form/AdditionalServiceFormPage'),
    permissionRequired: permissions.additionalServiceCreate,
    exact: true,
  },
  {
    path: '/additional-service/importer',
    loader: () =>
      import(
        'src/view/additionalService/importer/AdditionalServiceImporterPage'
      ),
    permissionRequired: permissions.additionalServiceImport,
    exact: true,
  },
  {
    path: '/additional-service/:id/edit',
    loader: () =>
      import('src/view/additionalService/form/AdditionalServiceFormPage'),
    permissionRequired: permissions.additionalServiceEdit,
    exact: true,
  },
  {
    path: '/additional-service/:id',
    loader: () =>
      import('src/view/additionalService/view/AdditionalServiceViewPage'),
    permissionRequired: permissions.additionalServiceRead,
    exact: true,
  },

  {
    path: '/patrol-checkpoint',
    loader: () =>
      import('src/view/patrolCheckpoint/list/PatrolCheckpointListPage'),
    permissionRequired: permissions.patrolCheckpointRead,
    exact: true,
  },
  {
    path: '/patrol-checkpoint/new',
    loader: () =>
      import('src/view/patrolCheckpoint/form/PatrolCheckpointFormPage'),
    permissionRequired: permissions.patrolCheckpointCreate,
    exact: true,
  },
  {
    path: '/patrol-checkpoint/importer',
    loader: () =>
      import(
        'src/view/patrolCheckpoint/importer/PatrolCheckpointImporterPage'
      ),
    permissionRequired: permissions.patrolCheckpointImport,
    exact: true,
  },
  {
    path: '/patrol-checkpoint/:id/edit',
    loader: () =>
      import('src/view/patrolCheckpoint/form/PatrolCheckpointFormPage'),
    permissionRequired: permissions.patrolCheckpointEdit,
    exact: true,
  },
  {
    path: '/patrol-checkpoint/:id',
    loader: () =>
      import('src/view/patrolCheckpoint/view/PatrolCheckpointViewPage'),
    permissionRequired: permissions.patrolCheckpointRead,
    exact: true,
  },

  {
    path: '/patrol-log',
    loader: () =>
      import('src/view/patrolLog/list/PatrolLogListPage'),
    permissionRequired: permissions.patrolLogRead,
    exact: true,
  },
  {
    path: '/patrol-log/new',
    loader: () =>
      import('src/view/patrolLog/form/PatrolLogFormPage'),
    permissionRequired: permissions.patrolLogCreate,
    exact: true,
  },
  {
    path: '/patrol-log/importer',
    loader: () =>
      import(
        'src/view/patrolLog/importer/PatrolLogImporterPage'
      ),
    permissionRequired: permissions.patrolLogImport,
    exact: true,
  },
  {
    path: '/patrol-log/:id/edit',
    loader: () =>
      import('src/view/patrolLog/form/PatrolLogFormPage'),
    permissionRequired: permissions.patrolLogEdit,
    exact: true,
  },
  {
    path: '/patrol-log/:id',
    loader: () =>
      import('src/view/patrolLog/view/PatrolLogViewPage'),
    permissionRequired: permissions.patrolLogRead,
    exact: true,
  },

  {
    path: '/patrol',
    loader: () =>
      import('src/view/patrol/list/PatrolListPage'),
    permissionRequired: permissions.patrolRead,
    exact: true,
  },
  {
    path: '/patrol/new',
    loader: () =>
      import('src/view/patrol/form/PatrolFormPage'),
    permissionRequired: permissions.patrolCreate,
    exact: true,
  },
  {
    path: '/patrol/importer',
    loader: () =>
      import(
        'src/view/patrol/importer/PatrolImporterPage'
      ),
    permissionRequired: permissions.patrolImport,
    exact: true,
  },
  {
    path: '/patrol/:id/edit',
    loader: () =>
      import('src/view/patrol/form/PatrolFormPage'),
    permissionRequired: permissions.patrolEdit,
    exact: true,
  },
  {
    path: '/patrol/:id',
    loader: () =>
      import('src/view/patrol/view/PatrolViewPage'),
    permissionRequired: permissions.patrolRead,
    exact: true,
  },

  {
    path: '/station',
    loader: () =>
      import('src/view/station/list/StationListPage'),
    permissionRequired: permissions.stationRead,
    exact: true,
  },
  {
    path: '/station/new',
    loader: () =>
      import('src/view/station/form/StationFormPage'),
    permissionRequired: permissions.stationCreate,
    exact: true,
  },
  {
    path: '/station/importer',
    loader: () =>
      import(
        'src/view/station/importer/StationImporterPage'
      ),
    permissionRequired: permissions.stationImport,
    exact: true,
  },
  {
    path: '/station/:id/edit',
    loader: () =>
      import('src/view/station/form/StationFormPage'),
    permissionRequired: permissions.stationEdit,
    exact: true,
  },
  {
    path: '/station/:id',
    loader: () =>
      import('src/view/station/view/StationViewPage'),
    permissionRequired: permissions.stationRead,
    exact: true,
  },

  {
    path: '/billing',
    loader: () =>
      import('src/view/billing/list/BillingListPage'),
    permissionRequired: permissions.billingRead,
    exact: true,
  },
  {
    path: '/billing/new',
    loader: () =>
      import('src/view/billing/form/BillingFormPage'),
    permissionRequired: permissions.billingCreate,
    exact: true,
  },
  {
    path: '/billing/importer',
    loader: () =>
      import(
        'src/view/billing/importer/BillingImporterPage'
      ),
    permissionRequired: permissions.billingImport,
    exact: true,
  },
  {
    path: '/billing/:id/edit',
    loader: () =>
      import('src/view/billing/form/BillingFormPage'),
    permissionRequired: permissions.billingEdit,
    exact: true,
  },
  {
    path: '/billing/:id',
    loader: () =>
      import('src/view/billing/view/BillingViewPage'),
    permissionRequired: permissions.billingRead,
    exact: true,
  },

  {
    path: '/inquiries',
    loader: () =>
      import('src/view/inquiries/list/InquiriesListPage'),
    permissionRequired: permissions.inquiriesRead,
    exact: true,
  },
  {
    path: '/inquiries/new',
    loader: () =>
      import('src/view/inquiries/form/InquiriesFormPage'),
    permissionRequired: permissions.inquiriesCreate,
    exact: true,
  },
  {
    path: '/inquiries/importer',
    loader: () =>
      import(
        'src/view/inquiries/importer/InquiriesImporterPage'
      ),
    permissionRequired: permissions.inquiriesImport,
    exact: true,
  },
  {
    path: '/inquiries/:id/edit',
    loader: () =>
      import('src/view/inquiries/form/InquiriesFormPage'),
    permissionRequired: permissions.inquiriesEdit,
    exact: true,
  },
  {
    path: '/inquiries/:id',
    loader: () =>
      import('src/view/inquiries/view/InquiriesViewPage'),
    permissionRequired: permissions.inquiriesRead,
    exact: true,
  },

  {
    path: '/task',
    loader: () =>
      import('src/view/task/list/TaskListPage'),
    permissionRequired: permissions.taskRead,
    exact: true,
  },
  {
    path: '/task/new',
    loader: () =>
      import('src/view/task/form/TaskFormPage'),
    permissionRequired: permissions.taskCreate,
    exact: true,
  },
  {
    path: '/task/importer',
    loader: () =>
      import(
        'src/view/task/importer/TaskImporterPage'
      ),
    permissionRequired: permissions.taskImport,
    exact: true,
  },
  {
    path: '/task/:id/edit',
    loader: () =>
      import('src/view/task/form/TaskFormPage'),
    permissionRequired: permissions.taskEdit,
    exact: true,
  },
  {
    path: '/task/:id',
    loader: () =>
      import('src/view/task/view/TaskViewPage'),
    permissionRequired: permissions.taskRead,
    exact: true,
  },

  {
    path: '/notification',
    loader: () =>
      import('src/view/notification/list/NotificationListPage'),
    permissionRequired: permissions.notificationRead,
    exact: true,
  },
  {
    path: '/notification/new',
    loader: () =>
      import('src/view/notification/form/NotificationFormPage'),
    permissionRequired: permissions.notificationCreate,
    exact: true,
  },
  {
    path: '/notification/importer',
    loader: () =>
      import(
        'src/view/notification/importer/NotificationImporterPage'
      ),
    permissionRequired: permissions.notificationImport,
    exact: true,
  },
  {
    path: '/notification/:id/edit',
    loader: () =>
      import('src/view/notification/form/NotificationFormPage'),
    permissionRequired: permissions.notificationEdit,
    exact: true,
  },
  {
    path: '/notification/:id',
    loader: () =>
      import('src/view/notification/view/NotificationViewPage'),
    permissionRequired: permissions.notificationRead,
    exact: true,
  },

  {
    path: '/device-id-information',
    loader: () =>
      import('src/view/deviceIdInformation/list/DeviceIdInformationListPage'),
    permissionRequired: permissions.deviceIdInformationRead,
    exact: true,
  },
  {
    path: '/device-id-information/new',
    loader: () =>
      import('src/view/deviceIdInformation/form/DeviceIdInformationFormPage'),
    permissionRequired: permissions.deviceIdInformationCreate,
    exact: true,
  },
  {
    path: '/device-id-information/importer',
    loader: () =>
      import(
        'src/view/deviceIdInformation/importer/DeviceIdInformationImporterPage'
      ),
    permissionRequired: permissions.deviceIdInformationImport,
    exact: true,
  },
  {
    path: '/device-id-information/:id/edit',
    loader: () =>
      import('src/view/deviceIdInformation/form/DeviceIdInformationFormPage'),
    permissionRequired: permissions.deviceIdInformationEdit,
    exact: true,
  },
  {
    path: '/device-id-information/:id',
    loader: () =>
      import('src/view/deviceIdInformation/view/DeviceIdInformationViewPage'),
    permissionRequired: permissions.deviceIdInformationRead,
    exact: true,
  },

  {
    path: '/guard-shift',
    loader: () =>
      import('src/view/guardShift/list/GuardShiftListPage'),
    permissionRequired: permissions.guardShiftRead,
    exact: true,
  },
  {
    path: '/guard-shift/new',
    loader: () =>
      import('src/view/guardShift/form/GuardShiftFormPage'),
    permissionRequired: permissions.guardShiftCreate,
    exact: true,
  },
  {
    path: '/guard-shift/importer',
    loader: () =>
      import(
        'src/view/guardShift/importer/GuardShiftImporterPage'
      ),
    permissionRequired: permissions.guardShiftImport,
    exact: true,
  },
  {
    path: '/guard-shift/:id/edit',
    loader: () =>
      import('src/view/guardShift/form/GuardShiftFormPage'),
    permissionRequired: permissions.guardShiftEdit,
    exact: true,
  },
  {
    path: '/guard-shift/:id',
    loader: () =>
      import('src/view/guardShift/view/GuardShiftViewPage'),
    permissionRequired: permissions.guardShiftRead,
    exact: true,
  },

  {
    path: '/memos',
    loader: () =>
      import('src/view/memos/list/MemosListPage'),
    permissionRequired: permissions.memosRead,
    exact: true,
  },
  {
    path: '/memos/new',
    loader: () =>
      import('src/view/memos/form/MemosFormPage'),
    permissionRequired: permissions.memosCreate,
    exact: true,
  },
  {
    path: '/memos/importer',
    loader: () =>
      import(
        'src/view/memos/importer/MemosImporterPage'
      ),
    permissionRequired: permissions.memosImport,
    exact: true,
  },
  {
    path: '/memos/:id/edit',
    loader: () =>
      import('src/view/memos/form/MemosFormPage'),
    permissionRequired: permissions.memosEdit,
    exact: true,
  },
  {
    path: '/memos/:id',
    loader: () =>
      import('src/view/memos/view/MemosViewPage'),
    permissionRequired: permissions.memosRead,
    exact: true,
  },

  {
    path: '/request',
    loader: () =>
      import('src/view/request/list/RequestListPage'),
    permissionRequired: permissions.requestRead,
    exact: true,
  },
  {
    path: '/request/new',
    loader: () =>
      import('src/view/request/form/RequestFormPage'),
    permissionRequired: permissions.requestCreate,
    exact: true,
  },
  {
    path: '/request/importer',
    loader: () =>
      import(
        'src/view/request/importer/RequestImporterPage'
      ),
    permissionRequired: permissions.requestImport,
    exact: true,
  },
  {
    path: '/request/:id/edit',
    loader: () =>
      import('src/view/request/form/RequestFormPage'),
    permissionRequired: permissions.requestEdit,
    exact: true,
  },
  {
    path: '/request/:id',
    loader: () =>
      import('src/view/request/view/RequestViewPage'),
    permissionRequired: permissions.requestRead,
    exact: true,
  },

  {
    path: '/video-tutorial-category',
    loader: () =>
      import('src/view/videoTutorialCategory/list/VideoTutorialCategoryListPage'),
    permissionRequired: permissions.videoTutorialCategoryRead,
    exact: true,
  },
  {
    path: '/video-tutorial-category/new',
    loader: () =>
      import('src/view/videoTutorialCategory/form/VideoTutorialCategoryFormPage'),
    permissionRequired: permissions.videoTutorialCategoryCreate,
    exact: true,
  },
  {
    path: '/video-tutorial-category/importer',
    loader: () =>
      import(
        'src/view/videoTutorialCategory/importer/VideoTutorialCategoryImporterPage'
      ),
    permissionRequired: permissions.videoTutorialCategoryImport,
    exact: true,
  },
  {
    path: '/video-tutorial-category/:id/edit',
    loader: () =>
      import('src/view/videoTutorialCategory/form/VideoTutorialCategoryFormPage'),
    permissionRequired: permissions.videoTutorialCategoryEdit,
    exact: true,
  },
  {
    path: '/video-tutorial-category/:id',
    loader: () =>
      import('src/view/videoTutorialCategory/view/VideoTutorialCategoryViewPage'),
    permissionRequired: permissions.videoTutorialCategoryRead,
    exact: true,
  },

  {
    path: '/video-tutorial',
    loader: () =>
      import('src/view/videoTutorial/list/VideoTutorialListPage'),
    permissionRequired: permissions.videoTutorialRead,
    exact: true,
  },
  {
    path: '/video-tutorial/new',
    loader: () =>
      import('src/view/videoTutorial/form/VideoTutorialFormPage'),
    permissionRequired: permissions.videoTutorialCreate,
    exact: true,
  },
  {
    path: '/video-tutorial/importer',
    loader: () =>
      import(
        'src/view/videoTutorial/importer/VideoTutorialImporterPage'
      ),
    permissionRequired: permissions.videoTutorialImport,
    exact: true,
  },
  {
    path: '/video-tutorial/:id/edit',
    loader: () =>
      import('src/view/videoTutorial/form/VideoTutorialFormPage'),
    permissionRequired: permissions.videoTutorialEdit,
    exact: true,
  },
  {
    path: '/video-tutorial/:id',
    loader: () =>
      import('src/view/videoTutorial/view/VideoTutorialViewPage'),
    permissionRequired: permissions.videoTutorialRead,
    exact: true,
  },

  {
    path: '/tutorial',
    loader: () =>
      import('src/view/tutorial/list/TutorialListPage'),
    permissionRequired: permissions.tutorialRead,
    exact: true,
  },
  {
    path: '/tutorial/new',
    loader: () =>
      import('src/view/tutorial/form/TutorialFormPage'),
    permissionRequired: permissions.tutorialCreate,
    exact: true,
  },
  {
    path: '/tutorial/importer',
    loader: () =>
      import(
        'src/view/tutorial/importer/TutorialImporterPage'
      ),
    permissionRequired: permissions.tutorialImport,
    exact: true,
  },
  {
    path: '/tutorial/:id/edit',
    loader: () =>
      import('src/view/tutorial/form/TutorialFormPage'),
    permissionRequired: permissions.tutorialEdit,
    exact: true,
  },
  {
    path: '/tutorial/:id',
    loader: () =>
      import('src/view/tutorial/view/TutorialViewPage'),
    permissionRequired: permissions.tutorialRead,
    exact: true,
  },

  {
    path: '/completion-of-tutorial',
    loader: () =>
      import('src/view/completionOfTutorial/list/CompletionOfTutorialListPage'),
    permissionRequired: permissions.completionOfTutorialRead,
    exact: true,
  },
  {
    path: '/completion-of-tutorial/new',
    loader: () =>
      import('src/view/completionOfTutorial/form/CompletionOfTutorialFormPage'),
    permissionRequired: permissions.completionOfTutorialCreate,
    exact: true,
  },
  {
    path: '/completion-of-tutorial/importer',
    loader: () =>
      import(
        'src/view/completionOfTutorial/importer/CompletionOfTutorialImporterPage'
      ),
    permissionRequired: permissions.completionOfTutorialImport,
    exact: true,
  },
  {
    path: '/completion-of-tutorial/:id/edit',
    loader: () =>
      import('src/view/completionOfTutorial/form/CompletionOfTutorialFormPage'),
    permissionRequired: permissions.completionOfTutorialEdit,
    exact: true,
  },
  {
    path: '/completion-of-tutorial/:id',
    loader: () =>
      import('src/view/completionOfTutorial/view/CompletionOfTutorialViewPage'),
    permissionRequired: permissions.completionOfTutorialRead,
    exact: true,
  },

  {
    path: '/inventory-history',
    loader: () =>
      import('src/view/inventoryHistory/list/InventoryHistoryListPage'),
    permissionRequired: permissions.inventoryHistoryRead,
    exact: true,
  },
  {
    path: '/inventory-history/new',
    loader: () =>
      import('src/view/inventoryHistory/form/InventoryHistoryFormPage'),
    permissionRequired: permissions.inventoryHistoryCreate,
    exact: true,
  },
  {
    path: '/inventory-history/importer',
    loader: () =>
      import(
        'src/view/inventoryHistory/importer/InventoryHistoryImporterPage'
      ),
    permissionRequired: permissions.inventoryHistoryImport,
    exact: true,
  },
  {
    path: '/inventory-history/:id/edit',
    loader: () =>
      import('src/view/inventoryHistory/form/InventoryHistoryFormPage'),
    permissionRequired: permissions.inventoryHistoryEdit,
    exact: true,
  },
  {
    path: '/inventory-history/:id',
    loader: () =>
      import('src/view/inventoryHistory/view/InventoryHistoryViewPage'),
    permissionRequired: permissions.inventoryHistoryRead,
    exact: true,
  },

  {
    path: '/business-info',
    loader: () =>
      import('src/view/businessInfo/list/BusinessInfoListPage'),
    permissionRequired: permissions.businessInfoRead,
    exact: true,
  },
  {
    path: '/business-info/new',
    loader: () =>
      import('src/view/businessInfo/form/BusinessInfoFormPage'),
    permissionRequired: permissions.businessInfoCreate,
    exact: true,
  },
  {
    path: '/business-info/importer',
    loader: () =>
      import(
        'src/view/businessInfo/importer/BusinessInfoImporterPage'
      ),
    permissionRequired: permissions.businessInfoImport,
    exact: true,
  },
  {
    path: '/business-info/:id/edit',
    loader: () =>
      import('src/view/businessInfo/form/BusinessInfoFormPage'),
    permissionRequired: permissions.businessInfoEdit,
    exact: true,
  },
  {
    path: '/business-info/:id',
    loader: () =>
      import('src/view/businessInfo/view/BusinessInfoViewPage'),
    permissionRequired: permissions.businessInfoRead,
    exact: true,
  },

  {
    path: '/insurance',
    loader: () =>
      import('src/view/insurance/list/InsuranceListPage'),
    permissionRequired: permissions.insuranceRead,
    exact: true,
  },
  {
    path: '/insurance/new',
    loader: () =>
      import('src/view/insurance/form/InsuranceFormPage'),
    permissionRequired: permissions.insuranceCreate,
    exact: true,
  },
  {
    path: '/insurance/importer',
    loader: () =>
      import(
        'src/view/insurance/importer/InsuranceImporterPage'
      ),
    permissionRequired: permissions.insuranceImport,
    exact: true,
  },
  {
    path: '/insurance/:id/edit',
    loader: () =>
      import('src/view/insurance/form/InsuranceFormPage'),
    permissionRequired: permissions.insuranceEdit,
    exact: true,
  },
  {
    path: '/insurance/:id',
    loader: () =>
      import('src/view/insurance/view/InsuranceViewPage'),
    permissionRequired: permissions.insuranceRead,
    exact: true,
  },

  {
    path: '/notification-recipient',
    loader: () =>
      import('src/view/notificationRecipient/list/NotificationRecipientListPage'),
    permissionRequired: permissions.notificationRecipientRead,
    exact: true,
  },
  {
    path: '/notification-recipient/new',
    loader: () =>
      import('src/view/notificationRecipient/form/NotificationRecipientFormPage'),
    permissionRequired: permissions.notificationRecipientCreate,
    exact: true,
  },
  {
    path: '/notification-recipient/importer',
    loader: () =>
      import(
        'src/view/notificationRecipient/importer/NotificationRecipientImporterPage'
      ),
    permissionRequired: permissions.notificationRecipientImport,
    exact: true,
  },
  {
    path: '/notification-recipient/:id/edit',
    loader: () =>
      import('src/view/notificationRecipient/form/NotificationRecipientFormPage'),
    permissionRequired: permissions.notificationRecipientEdit,
    exact: true,
  },
  {
    path: '/notification-recipient/:id',
    loader: () =>
      import('src/view/notificationRecipient/view/NotificationRecipientViewPage'),
    permissionRequired: permissions.notificationRecipientRead,
    exact: true,
  },

  {
    path: '/report',
    loader: () =>
      import('src/view/report/list/ReportListPage'),
    permissionRequired: permissions.reportRead,
    exact: true,
  },
  {
    path: '/report/new',
    loader: () =>
      import('src/view/report/form/ReportFormPage'),
    permissionRequired: permissions.reportCreate,
    exact: true,
  },
  {
    path: '/report/importer',
    loader: () =>
      import(
        'src/view/report/importer/ReportImporterPage'
      ),
    permissionRequired: permissions.reportImport,
    exact: true,
  },
  {
    path: '/report/:id/edit',
    loader: () =>
      import('src/view/report/form/ReportFormPage'),
    permissionRequired: permissions.reportEdit,
    exact: true,
  },
  {
    path: '/report/:id',
    loader: () =>
      import('src/view/report/view/ReportViewPage'),
    permissionRequired: permissions.reportRead,
    exact: true,
  },

  {
    path: '/shift',
    loader: () =>
      import('src/view/shift/list/ShiftListPage'),
    permissionRequired: permissions.shiftRead,
    exact: true,
  },
  {
    path: '/shift/new',
    loader: () =>
      import('src/view/shift/form/ShiftFormPage'),
    permissionRequired: permissions.shiftCreate,
    exact: true,
  },
  {
    path: '/shift/importer',
    loader: () =>
      import(
        'src/view/shift/importer/ShiftImporterPage'
      ),
    permissionRequired: permissions.shiftImport,
    exact: true,
  },
  {
    path: '/shift/:id/edit',
    loader: () =>
      import('src/view/shift/form/ShiftFormPage'),
    permissionRequired: permissions.shiftEdit,
    exact: true,
  },
  {
    path: '/shift/:id',
    loader: () =>
      import('src/view/shift/view/ShiftViewPage'),
    permissionRequired: permissions.shiftRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
