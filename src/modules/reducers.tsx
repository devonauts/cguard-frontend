import { combineReducers } from '@reduxjs/toolkit';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import bannerSuperiorApp from 'src/modules/bannerSuperiorApp/bannerSuperiorAppReducers';
import service from 'src/modules/service/serviceReducers';
import certification from 'src/modules/certification/certificationReducers';
import securityGuard from 'src/modules/securityGuard/securityGuardReducers';
import clientAccount from 'src/modules/clientAccount/clientAccountReducers';
import representanteEmpresa from 'src/modules/representanteEmpresa/representanteEmpresaReducers';
import incident from 'src/modules/incident/incidentReducers';
import inventory from 'src/modules/inventory/inventoryReducers';
import additionalService from 'src/modules/additionalService/additionalServiceReducers';
import patrolCheckpoint from 'src/modules/patrolCheckpoint/patrolCheckpointReducers';
import patrolLog from 'src/modules/patrolLog/patrolLogReducers';
import patrol from 'src/modules/patrol/patrolReducers';
import station from 'src/modules/station/stationReducers';
import billing from 'src/modules/billing/billingReducers';
import inquiries from 'src/modules/inquiries/inquiriesReducers';
import task from 'src/modules/task/taskReducers';
import notification from 'src/modules/notification/notificationReducers';
import deviceIdInformation from 'src/modules/deviceIdInformation/deviceIdInformationReducers';
import guardShift from 'src/modules/guardShift/guardShiftReducers';
import memos from 'src/modules/memos/memosReducers';
import request from 'src/modules/request/requestReducers';
import videoTutorialCategory from 'src/modules/videoTutorialCategory/videoTutorialCategoryReducers';
import videoTutorial from 'src/modules/videoTutorial/videoTutorialReducers';
import tutorial from 'src/modules/tutorial/tutorialReducers';
import completionOfTutorial from 'src/modules/completionOfTutorial/completionOfTutorialReducers';
import inventoryHistory from 'src/modules/inventoryHistory/inventoryHistoryReducers';
import businessInfo from 'src/modules/businessInfo/businessInfoReducers';
import insurance from 'src/modules/insurance/insuranceReducers';
import notificationRecipient from 'src/modules/notificationRecipient/notificationRecipientReducers';
import report from 'src/modules/report/reportReducers';
import shift from 'src/modules/shift/shiftReducers';

export default () =>
  combineReducers({
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    bannerSuperiorApp,
    service,
    certification,
    securityGuard,
    clientAccount,
    representanteEmpresa,
    incident,
    inventory,
    additionalService,
    patrolCheckpoint,
    patrolLog,
    patrol,
    station,
    billing,
    inquiries,
    task,
    notification,
    deviceIdInformation,
    guardShift,
    memos,
    request,
    videoTutorialCategory,
    videoTutorial,
    tutorial,
    completionOfTutorial,
    inventoryHistory,
    businessInfo,
    insurance,
    notificationRecipient,
    report,
    shift,
  });
