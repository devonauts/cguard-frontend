import { i18n } from 'src/i18n';

class Roles {
  static get values() {
    return {
      admin: 'admin',
      operationsManager: 'operationsManager',
      securitySupervisor: 'securitySupervisor',
      clientAccountManager: 'clientAccountManager',
      hrManager: 'hrManager',
      dispatcher: 'dispatcher',
      securityGuard: 'securityGuard',
      customer: 'customer',
      custom: 'custom',
    };
  }

  static labelOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.label`);
  }

  static descriptionOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.description`);
  }
}

export default Roles;
