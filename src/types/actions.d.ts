// Temporary action type fixes for migration
declare module 'src/modules/*/view/*Actions' {
  const actions: {
    doFind: (id: string) => any;
    [key: string]: any;
  };
  export default actions;
}

declare module 'src/modules/*/form/*Actions' {
  const actions: {
    doInit: (id?: string) => any;
    doCreate: (data: any) => any;
    doUpdate: (id: string, data: any) => any;
    [key: string]: any;
  };
  export default actions;
}

declare module 'src/modules/*/list/*Actions' {
  const actions: {
    doFetch: (filter?: any, rawFilter?: any) => any;
    doReset: () => any;
    doChangeSort: (params: any) => any;
    doChangePagination: (pagination: any) => any;
    doExport: () => any;
    [key: string]: any;
  };
  export default actions;
}

declare module 'src/modules/*/destroy/*Actions' {
  const actions: {
    doDestroy: (id: string) => any;
    doDestroyAll: (ids: string[]) => any;
    [key: string]: any;
  };
  export default actions;
}