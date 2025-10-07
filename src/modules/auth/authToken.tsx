let inMemoryToken = null;

export class AuthToken {
  static get() {
    const storageToken = localStorage.getItem('jwt');
    console.log('🔍 AuthToken.get() called');
    console.log('  📱 inMemoryToken:', inMemoryToken);
    console.log('  💾 storageToken:', storageToken);
    
    const result = (
      inMemoryToken || 
      (storageToken && storageToken !== 'null' && storageToken !== '' ? storageToken : null) || 
      null
    );
    
    console.log('  🎯 Final result:', result);
    console.log('  📏 Result length:', result ? result.length : 'null');
    
    return result;
  }

  static set(token, rememberMe) {
    if (rememberMe) {
      if (token) {
        localStorage.setItem('jwt', token);
      } else {
        localStorage.removeItem('jwt');
      }
      inMemoryToken = null;
    } else {
      inMemoryToken = token;
      localStorage.removeItem('jwt');
    }
  }

  static clear() {
    inMemoryToken = null;
    localStorage.removeItem('jwt');
    // Also clear any potential old formats
    localStorage.removeItem('authToken');
    localStorage.removeItem('token');
    sessionStorage.clear();
  }

  static applyFromLocationUrlIfExists() {
    const urlParams = new URLSearchParams(
      window.location.search,
    );
    const authToken = urlParams.get('authToken');

    if (!authToken) {
      return;
    }

    this.set(authToken, true);
    window.history.replaceState(
      {},
      document.title,
      window.location.origin,
    );
  }
}
