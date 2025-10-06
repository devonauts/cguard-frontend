import localhost from './localhost';
import production from './production';
import staging from './staging';
import testenv from './testenv';

// Get environment from Vite env vars
const environment = (import.meta as any).env?.VITE_ENVIRONMENT || 'localhost';

const configs = {
  localhost,
  production,
  staging,
  testenv,
};

const config = configs[environment] || configs.localhost;

export default config;
