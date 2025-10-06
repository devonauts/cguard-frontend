import React from 'react';
import { createRoot } from 'react-dom/client';
import { i18n, init as i18nInit } from 'src/i18n';
import { AuthToken } from './modules/auth/authToken';
import TenantService from './modules/tenant/tenantService';
import SettingsService from './modules/settings/settingsService';
import AuthService from 'src/modules/auth/authService';

// Register Chart.js components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

console.log('Starting application initialization...');

(async function () {
  try {
    console.log('1. Checking social onboard...');
    const isSocialOnboardRequested = AuthService.isSocialOnboardRequested();
    
    console.log('2. Applying auth token...');
    AuthToken.applyFromLocationUrlIfExists();
    
    console.log('3. Fetching tenant...');
    await TenantService.fetchAndApply();
    
    if (isSocialOnboardRequested) {
      console.log('4. Social onboard...');
      await AuthService.socialOnboard();
    }
    
    console.log('5. Applying theme...');
    SettingsService.applyThemeFromTenant();
    
    console.log('6. Initializing i18n...');
    await i18nInit();

    console.log('7. Loading App component...');
    const App = (await import('./App')).default;
    
    console.log('8. Setting document title...');
    document.title = i18n('app.title');
    
    console.log('9. Rendering app...');
    const container = document.getElementById('root');
    const root = createRoot(container!);
    root.render(<App />);
    
    console.log('✅ Application initialized successfully!');
  } catch (error) {
    console.error('❌ Application initialization failed:', error);
    
    // Render error message
    const container = document.getElementById('root');
    const root = createRoot(container!);
    root.render(
      <div style={{ padding: '20px', color: 'red', fontFamily: 'Arial, sans-serif' }}>
        <h1>Application Initialization Error</h1>
        <p>The application failed to start. Please check the console for more details.</p>
        <details>
          <summary>Error Details:</summary>
          <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', overflow: 'auto' }}>
            {error?.toString() || 'Unknown error'}
          </pre>
        </details>
      </div>
    );
  }
})();
