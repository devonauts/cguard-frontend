const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    start: 'Comienzo',
    end: 'Final',
    select: 'Seleccione',
    continue: 'Continúa',
    filters: 'Filtros',
  },
  app: {
    title: 'Aplicación',
  },

  api: {
    menu: 'API',
  },

  entities: {
    bannerSuperiorApp: {
        name: 'bannerSuperiorApp',
        label: 'Banners Superiores',
        menu: 'Banners Superiores',
        exporterFileName: 'exportacion_bannerSuperiorApp',
        list: {
          menu: 'Banners Superiores',
          title: 'Banners Superiores',
        },
        create: {
          success: 'Banner Superior guardado con éxito',
        },
        update: {
          success: 'Banner Superior guardado con éxito',
        },
        destroy: {
          success: 'Banner Superior eliminado con éxito',
        },
        destroyAll: {
          success: 'Banner Superior(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Banner Superior',
        },
        fields: {
          id: 'Id',
          'title': 'Titulo',
          'imageUrl': 'Imagen debe ser 2 x 1',
          'link': 'Link',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {
          'link': 'Link',
        },
        hints: {

        },
        new: {
          title: 'Nuevo Banner Superior',
        },
        view: {
          title: 'Ver Banner Superior',
        },
        importer: {
          title: 'Importar Banners Superiores',
          fileName: 'bannerSuperiorApp_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    service: {
        name: 'service',
        label: 'Servicios a Brindar',
        menu: 'Servicios a Brindar',
        exporterFileName: 'exportacion_service',
        list: {
          menu: 'Servicios a Brindar',
          title: 'Servicios a Brindar',
        },
        create: {
          success: 'Servicio a Brindar guardado con éxito',
        },
        update: {
          success: 'Servicio a Brindar guardado con éxito',
        },
        destroy: {
          success: 'Servicio a Brindar eliminado con éxito',
        },
        destroyAll: {
          success: 'Servicio a Brindar(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Servicio a Brindar',
        },
        fields: {
          id: 'Id',
          'iconImage': 'Ícono de servicio',
          'title': 'Título',
          'description': 'Descripción',
          'priceRange': 'Precio',
          'price': 'Precio',
          'serviceImages': 'Imágenes del Servicio',
          'specifications': 'Especificaciones:',
          'subtitle': 'Subtitle',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Servicio a Brindar',
        },
        view: {
          title: 'Ver Servicio a Brindar',
        },
        importer: {
          title: 'Importar Servicios a Brindar',
          fileName: 'service_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    certification: {
        name: 'certification',
        label: 'Certificaciones',
        menu: 'Certificaciones',
        exporterFileName: 'exportacion_certification',
        list: {
          menu: 'Certificaciones',
          title: 'Certificaciones',
        },
        create: {
          success: 'Certificación guardado con éxito',
        },
        update: {
          success: 'Certificación guardado con éxito',
        },
        destroy: {
          success: 'Certificación eliminado con éxito',
        },
        destroyAll: {
          success: 'Certificación(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Certificación',
        },
        fields: {
          id: 'Id',
          'title': 'Titulo',
          'code': 'Código de Permiso',
          'image': 'Escaneado o foto de la certificación',
          'icon': 'Icono 100x100',
          'description': 'Descripción',
          'acquisitionDateRange': 'Fecha de Adquisición',
          'acquisitionDate': 'Fecha de Adquisición',
          'expirationDateRange': 'Fecha de Expiración',
          'expirationDate': 'Fecha de Expiración',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Certificación',
        },
        view: {
          title: 'Ver Certificación',
        },
        importer: {
          title: 'Importar Certificaciones',
          fileName: 'certification_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    securityGuard: {
        name: 'securityGuard',
        label: 'Guardias de Seguridad',
        menu: 'Guardias de Seguridad',
        exporterFileName: 'exportacion_securityGuard',
        list: {
          menu: 'Guardias de Seguridad',
          title: 'Guardias de Seguridad',
        },
        create: {
          success: 'Guardia de Seguridad guardado con éxito',
        },
        update: {
          success: 'Guardia de Seguridad guardado con éxito',
        },
        destroy: {
          success: 'Guardia de Seguridad eliminado con éxito',
        },
        destroyAll: {
          success: 'Guardia de Seguridad(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Guardia de Seguridad',
        },
        fields: {
          id: 'Id',
          'governmentId': 'Cédula de Identidad',
          'fullName': 'Nombres Completos',
          'guard': 'Agente de Seguridad',
          'hiringContractDateRange': 'Fecha de Contrato',
          'hiringContractDate': 'Fecha de Contrato',
          'gender': 'Género',
          'isOnDuty': 'En Turno Laboral',
          'bloodType': 'Tipo de Sangre',
          'guardCredentials': 'Credencial de Guardias',
          'birthDateRange': 'Fecha de Nacimiento',
          'birthDate': 'Fecha de Nacimiento',
          'birthPlace': 'Lugar de Nacimiento',
          'profileImage': 'Imagen de Perfil',
          'maritalStatus': 'Estado Civil',
          'credentialImage': 'Imagen de la Credencial de Guardia',
          'academicInstruction': 'Instrucción Académica',
          'recordPolicial': 'Record Policial',
          'address': 'Dirección Domiciliaria:',
          'memos': 'Memos',
          'requests': 'Requests',
          'tutoriales': 'Tutoriales',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'gender': {
            'Masculino': 'Masculino',
            'Femenino': 'Femenino',
          },
          'bloodType': {
            'A+': 'A+',
            'A-': 'A-',
            'AB+': 'AB+',
            'AB-': 'AB-',
            'O+': 'O+',
            'O-': 'O-',
            'B+': 'B+',
            'B-': 'B-',
          },
          'maritalStatus': {
            'Soltero': 'Soltero',
            'Casado': 'Casado',
            'Unión libre': 'Unión libre',
            'Divorciado': 'Divorciado',
          },
          'academicInstruction': {
            'Secundaria': 'Secundaria',
            'Universitaria': 'Universitaria',
            'Especial': 'Especial',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Guardia de Seguridad',
        },
        view: {
          title: 'Ver Guardia de Seguridad',
        },
        importer: {
          title: 'Importar Guardias de Seguridad',
          fileName: 'securityGuard_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    clientAccount: {
        name: 'clientAccount',
        label: 'Cuenta de Clientes',
        menu: 'Cuenta de Clientes',
        exporterFileName: 'exportacion_clientAccount',
        list: {
          menu: 'Cuenta de Clientes',
          title: 'Cuenta de Clientes',
        },
        create: {
          success: 'Cuenta de Cliente guardado con éxito',
        },
        update: {
          success: 'Cuenta de Cliente guardado con éxito',
        },
        destroy: {
          success: 'Cuenta de Cliente eliminado con éxito',
        },
        destroyAll: {
          success: 'Cuenta de Cliente(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Cuenta de Cliente',
        },
        fields: {
          id: 'Id',
          'contractDateRange': 'Fecha de Contrato',
          'contractDate': 'Fecha de Contrato',
          'rucNumber': 'No. de cédula o RUC:',
          'commercialName': 'Nombre Comercial',
          'address': 'Dirección de Empresa',
          'phoneNumber': 'Número telefónico',
          'faxNumber': 'Número de Fax',
          'email': 'Correo Electrónico',
          'logoUrl': 'Logo de Empresa',
          'placePictureUrl': 'Imagen del Establecimiento',
          'representante': 'Representante',
          'purchasedServices': 'Servicios Adquiridos',
          'stations': 'Stations',
          'billingInvoices': 'BillingInvoices',
          'pushNotifications': 'PushNotifications',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Cuenta de Cliente',
        },
        view: {
          title: 'Ver Cuenta de Cliente',
        },
        importer: {
          title: 'Importar Cuenta de Clientes',
          fileName: 'clientAccount_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    representanteEmpresa: {
        name: 'representanteEmpresa',
        label: 'Representantes',
        menu: 'Representantes',
        exporterFileName: 'exportacion_representanteEmpresa',
        list: {
          menu: 'Representantes',
          title: 'Representantes',
        },
        create: {
          success: 'Representante guardado con éxito',
        },
        update: {
          success: 'Representante guardado con éxito',
        },
        destroy: {
          success: 'Representante eliminado con éxito',
        },
        destroyAll: {
          success: 'Representante(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Representante',
        },
        fields: {
          id: 'Id',
          'personInCharge': 'Datos del Representante',
          'governmentId': 'Número de Cédula',
          'jobTitle': 'Posición Laboral',
          'assignedCompany': 'Compania Representada',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Representante',
        },
        view: {
          title: 'Ver Representante',
        },
        importer: {
          title: 'Importar Representantes',
          fileName: 'representanteEmpresa_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    incident: {
        name: 'incident',
        label: 'Novedades',
        menu: 'Novedades',
        exporterFileName: 'exportacion_incident',
        list: {
          menu: 'Novedades',
          title: 'Novedades',
        },
        create: {
          success: 'Novedad guardado con éxito',
        },
        update: {
          success: 'Novedad guardado con éxito',
        },
        destroy: {
          success: 'Novedad eliminado con éxito',
        },
        destroyAll: {
          success: 'Novedad(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Novedad',
        },
        fields: {
          id: 'Id',
          'dateRange': 'Fecha y Hora',
          'date': 'Fecha y Hora',
          'title': 'Título',
          'description': 'Descripción',
          'imageUrl': 'Adjuntar imágenes',
          'wasRead': 'Revisado',
          'stationIncidents': 'Estación donde ocurrió la novedad',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Novedad',
        },
        view: {
          title: 'Ver Novedad',
        },
        importer: {
          title: 'Importar Novedades',
          fileName: 'incident_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    inventory: {
        name: 'inventory',
        label: 'Dotaciones',
        menu: 'Dotaciones',
        exporterFileName: 'exportacion_inventory',
        list: {
          menu: 'Dotaciones',
          title: 'Dotaciones',
        },
        create: {
          success: 'Dotación guardado con éxito',
        },
        update: {
          success: 'Dotación guardado con éxito',
        },
        destroy: {
          success: 'Dotación eliminado con éxito',
        },
        destroyAll: {
          success: 'Dotación(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Dotación',
        },
        fields: {
          id: 'Id',
          'belongsTo': 'Dotación de Punto de Vigilancia',
          'belongsToStation': 'Nombre único de dotación',
          'radio': 'Radio y cargador',
          'radioType': 'Tipo de Radio',
          'radioSerialNumber': 'No de Serie del Radio',
          'gun': 'Armamento',
          'gunType': 'Tipo de Armamento',
          'gunSerialNumber': 'Número de Serie de la Arma',
          'armor': 'Chaleco Antibalas',
          'armorType': 'Tipo de Chaleco',
          'armorSerialNumber': 'Número de Serie de Chaleco Antibalas',
          'tolete': 'Tolete',
          'pito': 'Pito',
          'linterna': 'Linterna',
          'vitacora': 'Vitacora',
          'cintoCompleto': 'Cinto Completo',
          'ponchoDeAguas': 'Poncho de Aguas',
          'detectorDeMetales': 'Detector de Metales',
          'caseta': 'Caseta',
          'observations': 'Observaciones',
          'transportation': 'Medio de transporte',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'gunType': {
            'revolver': 'Revolver',
            'pistola de fuego': 'Pistola de fuego',
            'pistola de fogeo': 'Pistola de fogeo',
            'mossberg': 'Mossberg',
            'otra arma.': 'Otra arma.',
          },
          'transportation': {
            'Ninguno': 'Ninguno',
            'Bicicleta': 'Bicicleta',
            'Moto': 'Moto',
            'Cuadrón': 'Cuadrón',
            'Segway': 'Segway',
            'Camioneta': 'Camioneta',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Dotación',
        },
        view: {
          title: 'Ver Dotación',
        },
        importer: {
          title: 'Importar Dotaciones',
          fileName: 'inventory_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    additionalService: {
        name: 'additionalService',
        label: 'Servicios Adicionales',
        menu: 'Servicios Adicionales',
        exporterFileName: 'exportacion_additionalService',
        list: {
          menu: 'Servicios Adicionales',
          title: 'Servicios Adicionales',
        },
        create: {
          success: 'Servicio Adicional guardado con éxito',
        },
        update: {
          success: 'Servicio Adicional guardado con éxito',
        },
        destroy: {
          success: 'Servicio Adicional eliminado con éxito',
        },
        destroyAll: {
          success: 'Servicio Adicional(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Servicio Adicional',
        },
        fields: {
          id: 'Id',
          'stationAditionalServiceName': 'Nombre de Punto de Vigilancia',
          'dvr': 'Dvr',
          'dvrSerialCode': 'No de Serie',
          'juegoDeCamarasInteriores': 'Juego de Cámaras Interiores',
          'juegoDeCamarasExteriores': 'Juego de Cámaras Exteriores',
          'stations': 'Stations',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'dvr': {
            'Dvr con disco duro 500 GB': 'Dvr con disco duro 500 GB',
            'Dvr con disco duro de 1 TB': 'Dvr con disco duro de 1 TB',
            'Dvr con disco duro de 2 TB': 'Dvr con disco duro de 2 TB',
          },
          'juegoDeCamarasInteriores': {
            '0': '0',
            '2': '2',
            '4': '4',
            '6': '6',
            '8': '8',
            '10': '10',
            '12': '12',
            '14': '14',
            '16': '16',
          },
          'juegoDeCamarasExteriores': {
            '0': '0',
            '2': '2',
            '4': '4',
            '6': '6',
            '8': '8',
            '10': '10',
            '12': '12',
            '14': '14',
            '16': '16',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Servicio Adicional',
        },
        view: {
          title: 'Ver Servicio Adicional',
        },
        importer: {
          title: 'Importar Servicios Adicionales',
          fileName: 'additionalService_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    patrolCheckpoint: {
        name: 'patrolCheckpoint',
        label: 'PatrolCheckpoints',
        menu: 'PatrolCheckpoints',
        exporterFileName: 'exportacion_patrolCheckpoint',
        list: {
          menu: 'PatrolCheckpoints',
          title: 'PatrolCheckpoints',
        },
        create: {
          success: 'PatrolCheckpoint guardado con éxito',
        },
        update: {
          success: 'PatrolCheckpoint guardado con éxito',
        },
        destroy: {
          success: 'PatrolCheckpoint eliminado con éxito',
        },
        destroyAll: {
          success: 'PatrolCheckpoint(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar PatrolCheckpoint',
        },
        fields: {
          id: 'Id',
          'station': 'Station',
          'name': 'Name',
          'latitud': 'Latitud',
          'longitud': 'Longitud',
          'assignedQrImage': 'AssignedQrImage',
          'patrols': 'Patrols',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'assignedQrImage': 'QR code unique identifier',
        },
        new: {
          title: 'Nuevo PatrolCheckpoint',
        },
        view: {
          title: 'Ver PatrolCheckpoint',
        },
        importer: {
          title: 'Importar PatrolCheckpoints',
          fileName: 'patrolCheckpoint_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    patrolLog: {
        name: 'patrolLog',
        label: 'Patrol Logs',
        menu: 'Patrol Logs',
        exporterFileName: 'exportacion_patrolLog',
        list: {
          menu: 'Patrol Logs',
          title: 'Patrol Logs',
        },
        create: {
          success: 'Patrol Log guardado con éxito',
        },
        update: {
          success: 'Patrol Log guardado con éxito',
        },
        destroy: {
          success: 'Patrol Log eliminado con éxito',
        },
        destroyAll: {
          success: 'Patrol Log(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Patrol Log',
        },
        fields: {
          id: 'Id',
          'patrol': 'Patrol',
          'scannedBy': 'ScannedBy',
          'scanTimeRange': 'ScanTime',
          'scanTime': 'ScanTime',
          'latitude': 'Latitude',
          'longitude': 'Longitude',
          'validLocation': 'ValidLocation',
          'status': 'Status',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'status': {
            '"Pending"': '"Pending"',
            '"Scanned"': '"Scanned"',
            '"Missed"': '"Missed"',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Patrol Log',
        },
        view: {
          title: 'Ver Patrol Log',
        },
        importer: {
          title: 'Importar Patrol Logs',
          fileName: 'patrolLog_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    patrol: {
        name: 'patrol',
        label: 'Patrols',
        menu: 'Patrols',
        exporterFileName: 'exportacion_patrol',
        list: {
          menu: 'Patrols',
          title: 'Patrols',
        },
        create: {
          success: 'Patrol guardado con éxito',
        },
        update: {
          success: 'Patrol guardado con éxito',
        },
        destroy: {
          success: 'Patrol eliminado con éxito',
        },
        destroyAll: {
          success: 'Patrol(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Patrol',
        },
        fields: {
          id: 'Id',
          'assignedGuard': 'AssignedGuard',
          'station': 'Station',
          'scheduledTimeRange': 'ScheduledTime',
          'scheduledTime': 'ScheduledTime',
          'completed': 'Completed',
          'checkpoints': 'Checkpoints',
          'completionTimeRange': 'CompletionTime',
          'completionTime': 'CompletionTime',
          'status': 'Status',
          'logs': 'Logs',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'status': {
            'Completed': 'Completed',
            'Incomplete': 'Incomplete',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Patrol',
        },
        view: {
          title: 'Ver Patrol',
        },
        importer: {
          title: 'Importar Patrols',
          fileName: 'patrol_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    station: {
        name: 'station',
        label: 'Puntos de Vigilancia',
        menu: 'Puntos de Vigilancia',
        exporterFileName: 'exportacion_station',
        list: {
          menu: 'Puntos de Vigilancia',
          title: 'Puntos de Vigilancia',
        },
        create: {
          success: 'Punto de Vigilancia guardado con éxito',
        },
        update: {
          success: 'Punto de Vigilancia guardado con éxito',
        },
        destroy: {
          success: 'Punto de Vigilancia eliminado con éxito',
        },
        destroyAll: {
          success: 'Punto de Vigilancia(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Punto de Vigilancia',
        },
        fields: {
          id: 'Id',
          'stationOrigin': 'Punto en la Empresa',
          'stationName': 'Nombre del Punto de Vigilancia',
          'latitud': 'Latitud',
          'longitud': 'Longitud',
          'numberOfGuardsInStation': 'Número de Guardias en el Punto de servicio',
          'assignedGuards': 'Guardias Asignados',
          'stationSchedule': 'Horario del Punto de Vigilancia',
          'startingTimeInDay': 'Hora de Entrada Referencial',
          'finishTimeInDay': 'Hora de Salida Referencial',
          'tasks': 'Tasks',
          'reports': 'Reports',
          'incidents': 'Incidents',
          'checkpoints': 'Checkpoints',
          'patrol': 'Patrol',
          'shift': 'Shift',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'numberOfGuardsInStation': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
          },
          'stationSchedule': {
            '1 hora': '1 hora',
            '4 horas': '4 horas',
            '8 horas': '8 horas',
            '10 horas': '10 horas',
            '12 horas': '12 horas',
            '14 horas': '14 horas',
            '16 horas': '16 horas',
            '24 horas': '24 horas',
          },
        },
        placeholders: {
          'startingTimeInDay': '07:00',
          'finishTimeInDay': '19:00',
        },
        hints: {
          'latitud': 'coordinates',
          'longitud': 'coordinates',
          'startingTimeInDay': 'Esta es la hora en la que generalmente debe estar ya empezando el turno laboral el agente de seguridad asignado. Por ejemplo, "07:00" significa que el agente de seguridad debe ya estar en turno a esa hora.',
          'finishTimeInDay': 'Escribe la hora referencial en la que se termina la jornada diaria del turno de trabajo. Por ejemplo: (19:00) significa que la jornada de cada agente de seguridad se termina a las 7 pm.',
        },
        new: {
          title: 'Nuevo Punto de Vigilancia',
        },
        view: {
          title: 'Ver Punto de Vigilancia',
        },
        importer: {
          title: 'Importar Puntos de Vigilancia',
          fileName: 'station_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    billing: {
        name: 'billing',
        label: 'Facturaciones',
        menu: 'Facturaciones',
        exporterFileName: 'exportacion_billing',
        list: {
          menu: 'Facturaciones',
          title: 'Facturaciones',
        },
        create: {
          success: 'Facturación guardado con éxito',
        },
        update: {
          success: 'Facturación guardado con éxito',
        },
        destroy: {
          success: 'Facturación eliminado con éxito',
        },
        destroyAll: {
          success: 'Facturación(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Facturación',
        },
        fields: {
          id: 'Id',
          'invoiceNumber': 'Número de Factura',
          'status': 'Status',
          'clientsInvoiced': 'Cuenta de Cliente',
          'montoPorPagarRange': 'Monto Por Pagar',
          'montoPorPagar': 'Monto Por Pagar',
          'lastPaymentDateRange': 'Fecha Última de pago',
          'lastPaymentDate': 'Fecha Última de pago',
          'nextPaymentDateRange': 'Siguiente Fecha de Pago',
          'nextPaymentDate': 'Siguiente Fecha de Pago',
          'bill': 'Factura',
          'description': 'Detalle de Factura:',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'status': {
            'Pendiente': 'Pendiente',
            'Aceptado': 'Aceptado',
            'Pagado': 'Pagado',
            'Rechazado': 'Rechazado',
            'En Mora': 'En Mora',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Facturación',
        },
        view: {
          title: 'Ver Facturación',
        },
        importer: {
          title: 'Importar Facturaciones',
          fileName: 'billing_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    inquiries: {
        name: 'inquiries',
        label: 'Cotizaciones',
        menu: 'Cotizaciones',
        exporterFileName: 'exportacion_inquiries',
        list: {
          menu: 'Cotizaciones',
          title: 'Cotizaciones',
        },
        create: {
          success: 'Cotización guardado con éxito',
        },
        update: {
          success: 'Cotización guardado con éxito',
        },
        destroy: {
          success: 'Cotización eliminado con éxito',
        },
        destroyAll: {
          success: 'Cotización(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Cotización',
        },
        fields: {
          id: 'Id',
          'names': 'Nombres',
          'city': 'Ciudad',
          'email': 'Correo Electrónico',
          'phoneNumber': 'Teléfono',
          'message': 'Comentario:',
          'serviceOfInterest': 'Servicio de Interes',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Cotización',
        },
        view: {
          title: 'Ver Cotización',
        },
        importer: {
          title: 'Importar Cotizaciones',
          fileName: 'inquiries_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    task: {
        name: 'task',
        label: 'Consignas',
        menu: 'Consignas',
        exporterFileName: 'exportacion_task',
        list: {
          menu: 'Consignas',
          title: 'Consignas',
        },
        create: {
          success: 'Consigna guardado con éxito',
        },
        update: {
          success: 'Consigna guardado con éxito',
        },
        destroy: {
          success: 'Consigna eliminado con éxito',
        },
        destroyAll: {
          success: 'Consigna(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Consigna',
        },
        fields: {
          id: 'Id',
          'taskBelongsToStation': 'Consigna en punto de vigilancia',
          'taskToDo': 'Tarea a Realizar',
          'wasItDone': 'Fue realizado?',
          'imageOptional': 'Imagen Opcional',
          'dateToDoTheTaskRange': 'Fecha para realizar la tarea',
          'dateToDoTheTask': 'Fecha para realizar la tarea',
          'dateCompletedTaskRange': 'Fecha en que se cumplió la tarea',
          'dateCompletedTask': 'Fecha en que se cumplió la tarea',
          'taskCompletedImage': 'Imagen de tarea Completa',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Consigna',
        },
        view: {
          title: 'Ver Consigna',
        },
        importer: {
          title: 'Importar Consignas',
          fileName: 'task_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    notification: {
        name: 'notification',
        label: 'Notificaciones Push',
        menu: 'Notificaciones Push',
        exporterFileName: 'exportacion_notification',
        list: {
          menu: 'Notificaciones Push',
          title: 'Notificaciones Push',
        },
        create: {
          success: 'Notificación Push guardado con éxito',
        },
        update: {
          success: 'Notificación Push guardado con éxito',
        },
        destroy: {
          success: 'Notificación Push eliminado con éxito',
        },
        destroyAll: {
          success: 'Notificación Push(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Notificación Push',
        },
        fields: {
          id: 'Id',
          'deviceId': 'Ids para enviar',
          'title': 'Titulo',
          'body': 'Mensaje',
          'imageUrl': 'Imagen',
          'targetType': 'TargetType',
          'targetId': 'TargetId',
          'whoCreatedTheNotification': 'WhoCreatedTheNotification',
          'deliveryStatus': 'DeliveryStatus',
          'readStatus': 'ReadStatus',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'targetType': {
            'All': 'All',
            'Client': 'Client',
            'User': 'User',
          },
          'deliveryStatus': {
            'Pending': 'Pending',
            'Delivered': 'Delivered',
            'Failed': 'Failed',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Notificación Push',
        },
        view: {
          title: 'Ver Notificación Push',
        },
        importer: {
          title: 'Importar Notificaciones Push',
          fileName: 'notification_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    deviceIdInformation: {
        name: 'deviceIdInformation',
        label: 'Ids de Dispositivos de Usuarios',
        menu: 'Ids de Dispositivos de Usuarios',
        exporterFileName: 'exportacion_deviceIdInformation',
        list: {
          menu: 'Ids de Dispositivos de Usuarios',
          title: 'Ids de Dispositivos de Usuarios',
        },
        create: {
          success: 'Id de Dispositivo de Usuario guardado con éxito',
        },
        update: {
          success: 'Id de Dispositivo de Usuario guardado con éxito',
        },
        destroy: {
          success: 'Id de Dispositivo de Usuario eliminado con éxito',
        },
        destroyAll: {
          success: 'Id de Dispositivo de Usuario(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Id de Dispositivo de Usuario',
        },
        fields: {
          id: 'Id',
          'deviceId': 'Id del dispositivo',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Id de Dispositivo de Usuario',
        },
        view: {
          title: 'Ver Id de Dispositivo de Usuario',
        },
        importer: {
          title: 'Importar Ids de Dispositivos de Usuarios',
          fileName: 'deviceIdInformation_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    guardShift: {
        name: 'guardShift',
        label: 'Turnos Laborales',
        menu: 'Turnos Laborales',
        exporterFileName: 'exportacion_guardShift',
        list: {
          menu: 'Turnos Laborales',
          title: 'Turnos Laborales',
        },
        create: {
          success: 'Turno Laboral guardado con éxito',
        },
        update: {
          success: 'Turno Laboral guardado con éxito',
        },
        destroy: {
          success: 'Turno Laboral eliminado con éxito',
        },
        destroyAll: {
          success: 'Turno Laboral(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Turno Laboral',
        },
        fields: {
          id: 'Id',
          'punchInTimeRange': 'Fecha y Hora de entrada',
          'punchInTime': 'Fecha y Hora de entrada',
          'shiftSchedule': 'Turno Laboral',
          'stationName': 'Nombre de Puesto',
          'guardName': 'Guardia de Turno',
          'completeInventoryCheck': 'Revisión de Inventario',
          'numberOfPatrolsDuringShiftRange': 'NumberOfPatrolsDuringShift',
          'numberOfPatrolsDuringShift': 'NumberOfPatrolsDuringShift',
          'patrolsDone': 'PatrolsDone',
          'numberOfIncidentsDurindShiftRange': 'Número de Novedades en el turno',
          'numberOfIncidentsDurindShift': 'Número de Novedades en el turno',
          'dailyIncidents': 'DailyIncidents',
          'observations': 'Observaciones',
          'punchOutTimeRange': 'Fecha y Hora de Salida',
          'punchOutTime': 'Fecha y Hora de Salida',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'shiftSchedule': {
            'Diurno': 'Diurno',
            'Nocturno': 'Nocturno',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Turno Laboral',
        },
        view: {
          title: 'Ver Turno Laboral',
        },
        importer: {
          title: 'Importar Turnos Laborales',
          fileName: 'guardShift_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    memos: {
        name: 'memos',
        label: 'Memos',
        menu: 'Memos',
        exporterFileName: 'exportacion_memos',
        list: {
          menu: 'Memos',
          title: 'Memos',
        },
        create: {
          success: 'Memos guardado con éxito',
        },
        update: {
          success: 'Memos guardado con éxito',
        },
        destroy: {
          success: 'Memos eliminado con éxito',
        },
        destroyAll: {
          success: 'Memos(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Memos',
        },
        fields: {
          id: 'Id',
          'dateTimeRange': 'Fecha y Hora',
          'dateTime': 'Fecha y Hora',
          'guardName': 'Nombre de Agente',
          'subject': 'Asunto',
          'content': 'Contenido',
          'wasAccepted': 'Aceptado',
          'memoDocumentPdf': 'Documento en PDF',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Memos',
        },
        view: {
          title: 'Ver Memos',
        },
        importer: {
          title: 'Importar Memos',
          fileName: 'memos_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    request: {
        name: 'request',
        label: 'Solicitudes',
        menu: 'Solicitudes',
        exporterFileName: 'exportacion_request',
        list: {
          menu: 'Solicitudes',
          title: 'Solicitudes',
        },
        create: {
          success: 'Solicitud guardado con éxito',
        },
        update: {
          success: 'Solicitud guardado con éxito',
        },
        destroy: {
          success: 'Solicitud eliminado con éxito',
        },
        destroyAll: {
          success: 'Solicitud(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Solicitud',
        },
        fields: {
          id: 'Id',
          'dateTimeRange': 'Fecha y Hora',
          'dateTime': 'Fecha y Hora',
          'guardName': 'Nombre de Agente',
          'subject': 'Asunto',
          'content': 'Contenido',
          'action': 'Accion realizada',
          'requestDocumentPDF': 'Solicitud de Documento en PDF',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'action': {
            'Recibido': 'Recibido',
            'En revisión': 'En revisión',
            'En Proceso': 'En Proceso',
            'Aceptado': 'Aceptado',
            'Rechazado': 'Rechazado',
            'Contacte a supervisor': 'Contacte a supervisor',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Solicitud',
        },
        view: {
          title: 'Ver Solicitud',
        },
        importer: {
          title: 'Importar Solicitudes',
          fileName: 'request_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    videoTutorialCategory: {
        name: 'videoTutorialCategory',
        label: 'Categorías de los videos tutoriales',
        menu: 'Categorías de los videos tutoriales',
        exporterFileName: 'exportacion_videoTutorialCategory',
        list: {
          menu: 'Categorías de los videos tutoriales',
          title: 'Categorías de los videos tutoriales',
        },
        create: {
          success: 'Categoria del video tutorial guardado con éxito',
        },
        update: {
          success: 'Categoria del video tutorial guardado con éxito',
        },
        destroy: {
          success: 'Categoria del video tutorial eliminado con éxito',
        },
        destroyAll: {
          success: 'Categoria del video tutorial(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Categoria del video tutorial',
        },
        fields: {
          id: 'Id',
          'categoryName': 'Nombre de la categoria',
          'videosInCategory': 'Videos en la Categoría',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Categoria del video tutorial',
        },
        view: {
          title: 'Ver Categoria del video tutorial',
        },
        importer: {
          title: 'Importar Categorías de los videos tutoriales',
          fileName: 'videoTutorialCategory_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    videoTutorial: {
        name: 'videoTutorial',
        label: 'Videos Tutoriales',
        menu: 'Videos Tutoriales',
        exporterFileName: 'exportacion_videoTutorial',
        list: {
          menu: 'Videos Tutoriales',
          title: 'Videos Tutoriales',
        },
        create: {
          success: 'Video Tutorial guardado con éxito',
        },
        update: {
          success: 'Video Tutorial guardado con éxito',
        },
        destroy: {
          success: 'Video Tutorial eliminado con éxito',
        },
        destroyAll: {
          success: 'Video Tutorial(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Video Tutorial',
        },
        fields: {
          id: 'Id',
          'videoTutorialName': 'Nombre del video Tutorial',
          'videoTutorialLink': 'Link del video Tutorial',
          'videoTutorialCategory': 'VideoTutorialCategory',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Video Tutorial',
        },
        view: {
          title: 'Ver Video Tutorial',
        },
        importer: {
          title: 'Importar Videos Tutoriales',
          fileName: 'videoTutorial_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    tutorial: {
        name: 'tutorial',
        label: 'Tutoriales',
        menu: 'Tutoriales',
        exporterFileName: 'exportacion_tutorial',
        list: {
          menu: 'Tutoriales',
          title: 'Tutoriales',
        },
        create: {
          success: 'Tutorial guardado con éxito',
        },
        update: {
          success: 'Tutorial guardado con éxito',
        },
        destroy: {
          success: 'Tutorial eliminado con éxito',
        },
        destroyAll: {
          success: 'Tutorial(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Tutorial',
        },
        fields: {
          id: 'Id',
          'tutorialName': 'Nombre del tutorial',
          'tutorialCategory': 'TutorialCategory',
          'tutorialVideos': 'TutorialVideos',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Tutorial',
        },
        view: {
          title: 'Ver Tutorial',
        },
        importer: {
          title: 'Importar Tutoriales',
          fileName: 'tutorial_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    completionOfTutorial: {
        name: 'completionOfTutorial',
        label: 'Lista de vistas de tutoriales',
        menu: 'Lista de vistas de tutoriales',
        exporterFileName: 'exportacion_completionOfTutorial',
        list: {
          menu: 'Lista de vistas de tutoriales',
          title: 'Lista de vistas de tutoriales',
        },
        create: {
          success: 'Lista de vista de tutorial guardado con éxito',
        },
        update: {
          success: 'Lista de vista de tutorial guardado con éxito',
        },
        destroy: {
          success: 'Lista de vista de tutorial eliminado con éxito',
        },
        destroyAll: {
          success: 'Lista de vista de tutorial(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Lista de vista de tutorial',
        },
        fields: {
          id: 'Id',
          'guardName': 'Nombre de Agente',
          'dateTutorialStartedRange': 'Fecha de inicio del tutorial',
          'dateTutorialStarted': 'Fecha de inicio del tutorial',
          'tutorialStarted': 'Empezó tutorial',
          'checkedTutorial': 'CheckedTutorial',
          'wasCompleted': 'Tutorial Completado',
          'dateEndedTutorialRange': 'Fecha de tutorial completado',
          'dateEndedTutorial': 'Fecha de tutorial completado',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Lista de vista de tutorial',
        },
        view: {
          title: 'Ver Lista de vista de tutorial',
        },
        importer: {
          title: 'Importar Lista de vistas de tutoriales',
          fileName: 'completionOfTutorial_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    inventoryHistory: {
        name: 'inventoryHistory',
        label: 'Historial de dotaciones',
        menu: 'Historial de dotaciones',
        exporterFileName: 'exportacion_inventoryHistory',
        list: {
          menu: 'Historial de dotaciones',
          title: 'Historial de dotaciones',
        },
        create: {
          success: 'Historial de dotación guardado con éxito',
        },
        update: {
          success: 'Historial de dotación guardado con éxito',
        },
        destroy: {
          success: 'Historial de dotación eliminado con éxito',
        },
        destroyAll: {
          success: 'Historial de dotación(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Historial de dotación',
        },
        fields: {
          id: 'Id',
          'shiftOrigin': 'Turno de origen',
          'inventoryCheckedDateRange': 'Fecha de Dotación revisada',
          'inventoryCheckedDate': 'Fecha de Dotación revisada',
          'inventoryOrigin': 'Inventario Registrado',
          'isComplete': 'Está el Inventario Completo?',
          'observation': 'Observación',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Historial de dotación',
        },
        view: {
          title: 'Ver Historial de dotación',
        },
        importer: {
          title: 'Importar Historial de dotaciones',
          fileName: 'inventoryHistory_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    businessInfo: {
        name: 'businessInfo',
        label: 'Business Information',
        menu: 'Business Information',
        exporterFileName: 'exportacion_businessInfo',
        list: {
          menu: 'Business Information',
          title: 'Business Information',
        },
        create: {
          success: 'BusinessInfo guardado con éxito',
        },
        update: {
          success: 'BusinessInfo guardado con éxito',
        },
        destroy: {
          success: 'BusinessInfo eliminado con éxito',
        },
        destroyAll: {
          success: 'BusinessInfo(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar BusinessInfo',
        },
        fields: {
          id: 'Id',
          'companyName': 'CompanyName',
          'description': 'Description',
          'logo': 'Logo',
          'contactPhone': 'ContactPhone',
          'contactEmail': 'ContactEmail',
          'address': 'Address',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo BusinessInfo',
        },
        view: {
          title: 'Ver BusinessInfo',
        },
        importer: {
          title: 'Importar Business Information',
          fileName: 'businessInfo_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    insurance: {
        name: 'insurance',
        label: 'Insurances',
        menu: 'Insurances',
        exporterFileName: 'exportacion_insurance',
        list: {
          menu: 'Insurances',
          title: 'Insurances',
        },
        create: {
          success: 'Insurance guardado con éxito',
        },
        update: {
          success: 'Insurance guardado con éxito',
        },
        destroy: {
          success: 'Insurance eliminado con éxito',
        },
        destroyAll: {
          success: 'Insurance(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Insurance',
        },
        fields: {
          id: 'Id',
          'provider': 'Provider',
          'policyNumber': 'PolicyNumber',
          'validFromRange': 'ValidFrom',
          'validFrom': 'ValidFrom',
          'validUntilRange': 'ValidUntil',
          'validUntil': 'ValidUntil',
          'document': 'Document',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Insurance',
        },
        view: {
          title: 'Ver Insurance',
        },
        importer: {
          title: 'Importar Insurances',
          fileName: 'insurance_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    notificationRecipient: {
        name: 'notificationRecipient',
        label: 'NotificationRecipients',
        menu: 'NotificationRecipients',
        exporterFileName: 'exportacion_notificationRecipient',
        list: {
          menu: 'NotificationRecipients',
          title: 'NotificationRecipients',
        },
        create: {
          success: 'NotificationRecipient guardado con éxito',
        },
        update: {
          success: 'NotificationRecipient guardado con éxito',
        },
        destroy: {
          success: 'NotificationRecipient eliminado con éxito',
        },
        destroyAll: {
          success: 'NotificationRecipient(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar NotificationRecipient',
        },
        fields: {
          id: 'Id',
          'notification': 'Notification',
          'recipientId': 'RecipientId',
          'readStatus': 'ReadStatus',
          'deliveryStatus': 'DeliveryStatus',
          'dateDeliveredRange': 'DateDelivered',
          'dateDelivered': 'DateDelivered',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'deliveryStatus': {
            'Pending': 'Pending',
            'Delivered': 'Delivered',
            'Failed': 'Failed',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo NotificationRecipient',
        },
        view: {
          title: 'Ver NotificationRecipient',
        },
        importer: {
          title: 'Importar NotificationRecipients',
          fileName: 'notificationRecipient_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    report: {
        name: 'report',
        label: 'Reports',
        menu: 'Reports',
        exporterFileName: 'exportacion_report',
        list: {
          menu: 'Reports',
          title: 'Reports',
        },
        create: {
          success: 'Report guardado con éxito',
        },
        update: {
          success: 'Report guardado con éxito',
        },
        destroy: {
          success: 'Report eliminado con éxito',
        },
        destroyAll: {
          success: 'Report(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Report',
        },
        fields: {
          id: 'Id',
          'title': 'Title',
          'station': 'Station',
          'generatedDateRange': 'GeneratedDate',
          'generatedDate': 'GeneratedDate',
          'content': 'Content',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Report',
        },
        view: {
          title: 'Ver Report',
        },
        importer: {
          title: 'Importar Reports',
          fileName: 'report_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    shift: {
        name: 'shift',
        label: 'Shifts',
        menu: 'Shifts',
        exporterFileName: 'exportacion_shift',
        list: {
          menu: 'Shifts',
          title: 'Shifts',
        },
        create: {
          success: 'Shift guardado con éxito',
        },
        update: {
          success: 'Shift guardado con éxito',
        },
        destroy: {
          success: 'Shift eliminado con éxito',
        },
        destroyAll: {
          success: 'Shift(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Shift',
        },
        fields: {
          id: 'Id',
          'startTimeRange': 'StartTime',
          'startTime': 'StartTime',
          'endTimeRange': 'EndTime',
          'endTime': 'EndTime',
          'station': 'Station',
          'guard': 'Guard',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Shift',
        },
        view: {
          title: 'Ver Shift',
        },
        importer: {
          title: 'Importar Shifts',
          fileName: 'shift_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },
  },
  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    createAnAccount: 'Crea una cuenta',
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url:
        'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },
  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acceso completo al sistema y administración',
    },
    operationsManager: {
      label: 'Gerente de Operaciones',
      description: 'Gestiona las operaciones de seguridad generales y la estrategia',
    },
    securitySupervisor: {
      label: 'Supervisor de Seguridad',
      description: 'Supervisa guardias de seguridad y operaciones de campo',
    },
    clientAccountManager: {
      label: 'Gerente de Cuentas de Clientes',
      description: 'Gestiona las relaciones y cuentas de clientes',
    },
    hrManager: {
      label: 'Gerente de Recursos Humanos',
      description: 'Gestiona recursos humanos y administración de personal',
    },
    dispatcher: {
      label: 'Despachador',
      description: 'Coordina y programa asignaciones de guardias de seguridad',
    },
    securityGuard: {
      label: 'Guardia de Seguridad',
      description: 'Personal de seguridad de campo',
    },
    customer: {
      label: 'Cliente',
      description: 'Usuario cliente con acceso limitado a su cuenta',
    },
    custom: {
      label: 'Rol personalizado',
      description: 'Rol personalizado con permisos específicos',
    },
  },
  user: {
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      role: 'Rol',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint:
        'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratis',
      price: '$0',
    },
    growth: {
      label: 'Crecimiento',
      price: '$10',
    },
    enterprise: {
      label: 'Empresa',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      theme: 'Tema',
      logos: 'Logo',
      backgroundImages: 'Imagen de fondo',
    },
    colors: {
      default: 'Oscuro',
      light: 'Claro',
      cyan: 'Cian',
      'geek-blue': 'Geek Blue',
      gold: 'Oro',
      lime: 'Lima',
      magenta: 'Magenta',
      orange: 'Naranja',
      'polar-green': 'Verde polar',
      purple: 'Púrpura',
      red: 'Rojo',
      volcano: 'Volcán',
      yellow: 'Amarillo',
    },
  },
  dashboard: {
    menu: 'Tablero',
    message:
      'Esta página utiliza datos falsos solo con fines de demostración. Puede editarlo en frontend/view/dashboard/DashboardPage.ts.',
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429':
      'Demasiadas solicitudes. Por favor, inténtelo de nuevo más tarde.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },

  preview: {
    error:
      'Lo sentimos, esta operación no está permitida en el modo de vista previa.',
  },
  
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max:
        '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} es obligatorio`
          : `'El campo ${path} debe tener al menos ${min} elementos`,
      max:
        'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size:
      'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint:
        'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },

  autocomplete: {
    loading: 'Cargando...',
    noOptions: 'Datos no encontrados',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
  table: {
    noData: 'No se encontraron registros',
    loading: 'Cargando...',
  },
  pagination: {
    items_per_page: '/ página',
    jump_to: 'Ir',
    jump_to_confirm: 'confirmar',
    page: '',

    prev_page: 'Pagina anterior',
    next_page: 'Siguiente página',
    prev_5: '5 páginas anteriores',
    next_5: '5 páginas siguientes',
    prev_3: '3 páginas anteriores',
    next_3: 'Siguientes 3 páginas',
  },
};

export default es;
