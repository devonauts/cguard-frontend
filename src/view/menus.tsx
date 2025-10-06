import Permissions from 'src/modules/security/permissions';
import { i18n } from 'src/i18n';
import config from 'src/config';

const permissions = Permissions.values;

export default [
  // 📊 CORE DASHBOARD & SYSTEM
  {
    path: '/',
    exact: true,
    icon: 'fas fa-tachometer-alt',
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: 'fas fa-credit-card',
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: 'fas fa-users-cog',
  },

  {
    path: '/audit-logs',
    icon: 'fas fa-clipboard-list',
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: 'fas fa-cogs',
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  // 🏢 BUSINESS & CLIENT MANAGEMENT
  {
    path: '/business-info',
    permissionRequired: permissions.businessInfoRead,
    icon: 'fas fa-building',
    label: i18n('entities.businessInfo.menu'),
  },

  {
    path: '/client-account',
    permissionRequired: permissions.clientAccountRead,
    icon: 'fas fa-user-tie',
    label: i18n('entities.clientAccount.menu'),
  },

  {
    path: '/representante-empresa',
    permissionRequired: permissions.representanteEmpresaRead,
    icon: 'fas fa-handshake',
    label: i18n('entities.representanteEmpresa.menu'),
  },

  // 🛡️ SECURITY OPERATIONS
  {
    path: '/security-guard',
    permissionRequired: permissions.securityGuardRead,
    icon: 'fas fa-user-shield',
    label: i18n('entities.securityGuard.menu'),
  },

  {
    path: '/guard-shift',
    permissionRequired: permissions.guardShiftRead,
    icon: 'fas fa-clock',
    label: i18n('entities.guardShift.menu'),
  },

  {
    path: '/shift',
    permissionRequired: permissions.shiftRead,
    icon: 'fas fa-calendar-check',
    label: i18n('entities.shift.menu'),
  },

  {
    path: '/station',
    permissionRequired: permissions.stationRead,
    icon: 'fas fa-map-marker-alt',
    label: i18n('entities.station.menu'),
  },

  // 🚨 PATROL & MONITORING
  {
    path: '/patrol',
    permissionRequired: permissions.patrolRead,
    icon: 'fas fa-route',
    label: i18n('entities.patrol.menu'),
  },

  {
    path: '/patrol-checkpoint',
    permissionRequired: permissions.patrolCheckpointRead,
    icon: 'fas fa-map-pin',
    label: i18n('entities.patrolCheckpoint.menu'),
  },

  {
    path: '/patrol-log',
    permissionRequired: permissions.patrolLogRead,
    icon: 'fas fa-clipboard-check',
    label: i18n('entities.patrolLog.menu'),
  },

  {
    path: '/incident',
    permissionRequired: permissions.incidentRead,
    icon: 'fas fa-exclamation-triangle',
    label: i18n('entities.incident.menu'),
  },

  // 📋 DOCUMENTATION & COMPLIANCE
  {
    path: '/certification',
    permissionRequired: permissions.certificationRead,
    icon: 'fas fa-certificate',
    label: i18n('entities.certification.menu'),
  },

  {
    path: '/insurance',
    permissionRequired: permissions.insuranceRead,
    icon: 'fas fa-shield-alt',
    label: i18n('entities.insurance.menu'),
  },

  {
    path: '/report',
    permissionRequired: permissions.reportRead,
    icon: 'fas fa-chart-line',
    label: i18n('entities.report.menu'),
  },

  // 📦 INVENTORY & EQUIPMENT
  {
    path: '/inventory',
    permissionRequired: permissions.inventoryRead,
    icon: 'fas fa-boxes',
    label: i18n('entities.inventory.menu'),
  },

  {
    path: '/inventory-history',
    permissionRequired: permissions.inventoryHistoryRead,
    icon: 'fas fa-history',
    label: i18n('entities.inventoryHistory.menu'),
  },

  {
    path: '/device-id-information',
    permissionRequired: permissions.deviceIdInformationRead,
    icon: 'fas fa-mobile-alt',
    label: i18n('entities.deviceIdInformation.menu'),
  },

  // 💼 SERVICES & BILLING
  {
    path: '/service',
    permissionRequired: permissions.serviceRead,
    icon: 'fas fa-concierge-bell',
    label: i18n('entities.service.menu'),
  },

  {
    path: '/additional-service',
    permissionRequired: permissions.additionalServiceRead,
    icon: 'fas fa-plus-circle',
    label: i18n('entities.additionalService.menu'),
  },

  {
    path: '/billing',
    permissionRequired: permissions.billingRead,
    icon: 'fas fa-file-invoice-dollar',
    label: i18n('entities.billing.menu'),
  },

  // 📞 COMMUNICATION & SUPPORT
  {
    path: '/notification',
    permissionRequired: permissions.notificationRead,
    icon: 'fas fa-bell',
    label: i18n('entities.notification.menu'),
  },

  {
    path: '/notification-recipient',
    permissionRequired: permissions.notificationRecipientRead,
    icon: 'fas fa-users',
    label: i18n('entities.notificationRecipient.menu'),
  },

  {
    path: '/inquiries',
    permissionRequired: permissions.inquiriesRead,
    icon: 'fas fa-question-circle',
    label: i18n('entities.inquiries.menu'),
  },

  {
    path: '/request',
    permissionRequired: permissions.requestRead,
    icon: 'fas fa-paper-plane',
    label: i18n('entities.request.menu'),
  },

  // 📝 TASKS & MEMOS
  {
    path: '/task',
    permissionRequired: permissions.taskRead,
    icon: 'fas fa-tasks',
    label: i18n('entities.task.menu'),
  },

  {
    path: '/memos',
    permissionRequired: permissions.memosRead,
    icon: 'fas fa-sticky-note',
    label: i18n('entities.memos.menu'),
  },

  // 🎓 TRAINING & TUTORIALS
  {
    path: '/video-tutorial-category',
    permissionRequired: permissions.videoTutorialCategoryRead,
    icon: 'fas fa-folder-open',
    label: i18n('entities.videoTutorialCategory.menu'),
  },

  {
    path: '/video-tutorial',
    permissionRequired: permissions.videoTutorialRead,
    icon: 'fas fa-play-circle',
    label: i18n('entities.videoTutorial.menu'),
  },

  {
    path: '/tutorial',
    permissionRequired: permissions.tutorialRead,
    icon: 'fas fa-graduation-cap',
    label: i18n('entities.tutorial.menu'),
  },

  {
    path: '/completion-of-tutorial',
    permissionRequired: permissions.completionOfTutorialRead,
    icon: 'fas fa-check-circle',
    label: i18n('entities.completionOfTutorial.menu'),
  },

  // 🎨 APP CUSTOMIZATION
  {
    path: '/banner-superior-app',
    permissionRequired: permissions.bannerSuperiorAppRead,
    icon: 'fas fa-image',
    label: i18n('entities.bannerSuperiorApp.menu'),
  },
].filter(Boolean);
