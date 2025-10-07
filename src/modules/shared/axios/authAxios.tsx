import { AuthToken } from 'src/modules/auth/authToken';
import Axios from 'axios';
import config from 'src/config';
import { getLanguageCode } from 'src/i18n';
import Qs from 'qs';
import { dateUtils } from 'src/utils/dateUtils';

const authAxios = Axios.create({
  baseURL: config.backendUrl,
  paramsSerializer: function (params) {
    return Qs.stringify(params, {
      arrayFormat: 'brackets',
      filter: (prefix, value) => {
        if (
          dateUtils.isDate(value) ||
          value instanceof Date
        ) {
          return value.toISOString();
        }

        return value;
      },
    });
  },
});

authAxios.interceptors.request.use((options) => {
  const authToken = AuthToken.get();
  console.log('🔍 Request interceptor - token from AuthToken.get():', authToken);
  console.log('🔍 Token type:', typeof authToken);
  console.log('🔍 Token length:', authToken ? authToken.length : 'null');
  
  if (authToken) {
    options.headers.Authorization = `Bearer ${authToken}`;
    console.log('✅ Added Authorization header:', options.headers.Authorization);
  } else {
    console.log('❌ No token available for request');
  }
  
  console.log('🌐 Request URL:', options.url);
  console.log('📋 Full headers:', options.headers);
  
  return options;
});

export default authAxios;
