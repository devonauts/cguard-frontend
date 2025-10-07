const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
    filters: 'Filters',
  },

  app: {
    title: 'Application',
  },

  api: {
    menu: 'API',
  },

  entities: {
    bannerSuperiorApp: {
        name: 'bannerSuperiorApp',
        label: 'Banners Superiores',
        menu: 'Banners Superiores',
        exporterFileName: 'bannerSuperiorApp_export',
        list: {
          menu: 'Banners Superiores',
          title: 'Banners Superiores',
        },
        create: {
          success: 'Banner Superior successfully saved',
        },
        update: {
          success: 'Banner Superior successfully saved',
        },
        destroy: {
          success: 'Banner Superior successfully deleted',
        },
        destroyAll: {
          success: 'Banner Superior(s) successfully deleted',
        },
        edit: {
          title: 'Edit Banner Superior',
        },
        fields: {
          id: 'Id',
          'title': 'Titulo',
          'imageUrl': 'Imagen debe ser 2 x 1',
          'link': 'Link',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'link': 'Link',
        },
        hints: {

        },
        new: {
          title: 'New Banner Superior',
        },
        view: {
          title: 'View Banner Superior',
        },
        importer: {
          title: 'Import Banners Superiores',
          fileName: 'bannerSuperiorApp_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    service: {
        name: 'service',
        label: 'Servicios a Brindar',
        menu: 'Servicios a Brindar',
        exporterFileName: 'service_export',
        list: {
          menu: 'Servicios a Brindar',
          title: 'Servicios a Brindar',
        },
        create: {
          success: 'Servicio a Brindar successfully saved',
        },
        update: {
          success: 'Servicio a Brindar successfully saved',
        },
        destroy: {
          success: 'Servicio a Brindar successfully deleted',
        },
        destroyAll: {
          success: 'Servicio a Brindar(s) successfully deleted',
        },
        edit: {
          title: 'Edit Servicio a Brindar',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Servicio a Brindar',
        },
        view: {
          title: 'View Servicio a Brindar',
        },
        importer: {
          title: 'Import Servicios a Brindar',
          fileName: 'service_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    certification: {
        name: 'certification',
        label: 'Certificaciones',
        menu: 'Certificaciones',
        exporterFileName: 'certification_export',
        list: {
          menu: 'Certificaciones',
          title: 'Certificaciones',
        },
        create: {
          success: 'Certificación successfully saved',
        },
        update: {
          success: 'Certificación successfully saved',
        },
        destroy: {
          success: 'Certificación successfully deleted',
        },
        destroyAll: {
          success: 'Certificación(s) successfully deleted',
        },
        edit: {
          title: 'Edit Certificación',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Certificación',
        },
        view: {
          title: 'View Certificación',
        },
        importer: {
          title: 'Import Certificaciones',
          fileName: 'certification_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    securityGuard: {
        name: 'securityGuard',
        label: 'Guardias de Seguridad',
        menu: 'Guardias de Seguridad',
        exporterFileName: 'securityGuard_export',
        list: {
          menu: 'Guardias de Seguridad',
          title: 'Guardias de Seguridad',
        },
        create: {
          success: 'Guardia de Seguridad successfully saved',
        },
        update: {
          success: 'Guardia de Seguridad successfully saved',
        },
        destroy: {
          success: 'Guardia de Seguridad successfully deleted',
        },
        destroyAll: {
          success: 'Guardia de Seguridad(s) successfully deleted',
        },
        edit: {
          title: 'Edit Guardia de Seguridad',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Guardia de Seguridad',
        },
        view: {
          title: 'View Guardia de Seguridad',
        },
        importer: {
          title: 'Import Guardias de Seguridad',
          fileName: 'securityGuard_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    clientAccount: {
        name: 'clientAccount',
        label: 'Cuenta de Clientes',
        menu: 'Cuenta de Clientes',
        exporterFileName: 'clientAccount_export',
        list: {
          menu: 'Cuenta de Clientes',
          title: 'Cuenta de Clientes',
        },
        create: {
          success: 'Cuenta de Cliente successfully saved',
        },
        update: {
          success: 'Cuenta de Cliente successfully saved',
        },
        destroy: {
          success: 'Cuenta de Cliente successfully deleted',
        },
        destroyAll: {
          success: 'Cuenta de Cliente(s) successfully deleted',
        },
        edit: {
          title: 'Edit Cuenta de Cliente',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Cuenta de Cliente',
        },
        view: {
          title: 'View Cuenta de Cliente',
        },
        importer: {
          title: 'Import Cuenta de Clientes',
          fileName: 'clientAccount_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    representanteEmpresa: {
        name: 'representanteEmpresa',
        label: 'Representantes',
        menu: 'Representantes',
        exporterFileName: 'representanteEmpresa_export',
        list: {
          menu: 'Representantes',
          title: 'Representantes',
        },
        create: {
          success: 'Representante successfully saved',
        },
        update: {
          success: 'Representante successfully saved',
        },
        destroy: {
          success: 'Representante successfully deleted',
        },
        destroyAll: {
          success: 'Representante(s) successfully deleted',
        },
        edit: {
          title: 'Edit Representante',
        },
        fields: {
          id: 'Id',
          'personInCharge': 'Datos del Representante',
          'governmentId': 'Número de Cédula',
          'jobTitle': 'Posición Laboral',
          'assignedCompany': 'Compania Representada',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Representante',
        },
        view: {
          title: 'View Representante',
        },
        importer: {
          title: 'Import Representantes',
          fileName: 'representanteEmpresa_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    incident: {
        name: 'incident',
        label: 'Novedades',
        menu: 'Novedades',
        exporterFileName: 'incident_export',
        list: {
          menu: 'Novedades',
          title: 'Novedades',
        },
        create: {
          success: 'Novedad successfully saved',
        },
        update: {
          success: 'Novedad successfully saved',
        },
        destroy: {
          success: 'Novedad successfully deleted',
        },
        destroyAll: {
          success: 'Novedad(s) successfully deleted',
        },
        edit: {
          title: 'Edit Novedad',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Novedad',
        },
        view: {
          title: 'View Novedad',
        },
        importer: {
          title: 'Import Novedades',
          fileName: 'incident_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    inventory: {
        name: 'inventory',
        label: 'Dotaciones',
        menu: 'Dotaciones',
        exporterFileName: 'inventory_export',
        list: {
          menu: 'Dotaciones',
          title: 'Dotaciones',
        },
        create: {
          success: 'Dotación successfully saved',
        },
        update: {
          success: 'Dotación successfully saved',
        },
        destroy: {
          success: 'Dotación successfully deleted',
        },
        destroyAll: {
          success: 'Dotación(s) successfully deleted',
        },
        edit: {
          title: 'Edit Dotación',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Dotación',
        },
        view: {
          title: 'View Dotación',
        },
        importer: {
          title: 'Import Dotaciones',
          fileName: 'inventory_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    additionalService: {
        name: 'additionalService',
        label: 'Servicios Adicionales',
        menu: 'Servicios Adicionales',
        exporterFileName: 'additionalService_export',
        list: {
          menu: 'Servicios Adicionales',
          title: 'Servicios Adicionales',
        },
        create: {
          success: 'Servicio Adicional successfully saved',
        },
        update: {
          success: 'Servicio Adicional successfully saved',
        },
        destroy: {
          success: 'Servicio Adicional successfully deleted',
        },
        destroyAll: {
          success: 'Servicio Adicional(s) successfully deleted',
        },
        edit: {
          title: 'Edit Servicio Adicional',
        },
        fields: {
          id: 'Id',
          'stationAditionalServiceName': 'Nombre de Punto de Vigilancia',
          'dvr': 'Dvr',
          'dvrSerialCode': 'No de Serie',
          'juegoDeCamarasInteriores': 'Juego de Cámaras Interiores',
          'juegoDeCamarasExteriores': 'Juego de Cámaras Exteriores',
          'stations': 'Stations',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Servicio Adicional',
        },
        view: {
          title: 'View Servicio Adicional',
        },
        importer: {
          title: 'Import Servicios Adicionales',
          fileName: 'additionalService_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    patrolCheckpoint: {
        name: 'patrolCheckpoint',
        label: 'PatrolCheckpoints',
        menu: 'PatrolCheckpoints',
        exporterFileName: 'patrolCheckpoint_export',
        list: {
          menu: 'PatrolCheckpoints',
          title: 'PatrolCheckpoints',
        },
        create: {
          success: 'PatrolCheckpoint successfully saved',
        },
        update: {
          success: 'PatrolCheckpoint successfully saved',
        },
        destroy: {
          success: 'PatrolCheckpoint successfully deleted',
        },
        destroyAll: {
          success: 'PatrolCheckpoint(s) successfully deleted',
        },
        edit: {
          title: 'Edit PatrolCheckpoint',
        },
        fields: {
          id: 'Id',
          'station': 'Station',
          'name': 'Name',
          'latitud': 'Latitud',
          'longitud': 'Longitud',
          'assignedQrImage': 'AssignedQrImage',
          'patrols': 'Patrols',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'assignedQrImage': 'QR code unique identifier',
        },
        new: {
          title: 'New PatrolCheckpoint',
        },
        view: {
          title: 'View PatrolCheckpoint',
        },
        importer: {
          title: 'Import PatrolCheckpoints',
          fileName: 'patrolCheckpoint_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    patrolLog: {
        name: 'patrolLog',
        label: 'Patrol Logs',
        menu: 'Patrol Logs',
        exporterFileName: 'patrolLog_export',
        list: {
          menu: 'Patrol Logs',
          title: 'Patrol Logs',
        },
        create: {
          success: 'Patrol Log successfully saved',
        },
        update: {
          success: 'Patrol Log successfully saved',
        },
        destroy: {
          success: 'Patrol Log successfully deleted',
        },
        destroyAll: {
          success: 'Patrol Log(s) successfully deleted',
        },
        edit: {
          title: 'Edit Patrol Log',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Patrol Log',
        },
        view: {
          title: 'View Patrol Log',
        },
        importer: {
          title: 'Import Patrol Logs',
          fileName: 'patrolLog_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    patrol: {
        name: 'patrol',
        label: 'Patrols',
        menu: 'Patrols',
        exporterFileName: 'patrol_export',
        list: {
          menu: 'Patrols',
          title: 'Patrols',
        },
        create: {
          success: 'Patrol successfully saved',
        },
        update: {
          success: 'Patrol successfully saved',
        },
        destroy: {
          success: 'Patrol successfully deleted',
        },
        destroyAll: {
          success: 'Patrol(s) successfully deleted',
        },
        edit: {
          title: 'Edit Patrol',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Patrol',
        },
        view: {
          title: 'View Patrol',
        },
        importer: {
          title: 'Import Patrols',
          fileName: 'patrol_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    station: {
        name: 'station',
        label: 'Puntos de Vigilancia',
        menu: 'Puntos de Vigilancia',
        exporterFileName: 'station_export',
        list: {
          menu: 'Puntos de Vigilancia',
          title: 'Puntos de Vigilancia',
        },
        create: {
          success: 'Punto de Vigilancia successfully saved',
        },
        update: {
          success: 'Punto de Vigilancia successfully saved',
        },
        destroy: {
          success: 'Punto de Vigilancia successfully deleted',
        },
        destroyAll: {
          success: 'Punto de Vigilancia(s) successfully deleted',
        },
        edit: {
          title: 'Edit Punto de Vigilancia',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Punto de Vigilancia',
        },
        view: {
          title: 'View Punto de Vigilancia',
        },
        importer: {
          title: 'Import Puntos de Vigilancia',
          fileName: 'station_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    billing: {
        name: 'billing',
        label: 'Facturaciones',
        menu: 'Facturaciones',
        exporterFileName: 'billing_export',
        list: {
          menu: 'Facturaciones',
          title: 'Facturaciones',
        },
        create: {
          success: 'Facturación successfully saved',
        },
        update: {
          success: 'Facturación successfully saved',
        },
        destroy: {
          success: 'Facturación successfully deleted',
        },
        destroyAll: {
          success: 'Facturación(s) successfully deleted',
        },
        edit: {
          title: 'Edit Facturación',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Facturación',
        },
        view: {
          title: 'View Facturación',
        },
        importer: {
          title: 'Import Facturaciones',
          fileName: 'billing_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    inquiries: {
        name: 'inquiries',
        label: 'Cotizaciones',
        menu: 'Cotizaciones',
        exporterFileName: 'inquiries_export',
        list: {
          menu: 'Cotizaciones',
          title: 'Cotizaciones',
        },
        create: {
          success: 'Cotización successfully saved',
        },
        update: {
          success: 'Cotización successfully saved',
        },
        destroy: {
          success: 'Cotización successfully deleted',
        },
        destroyAll: {
          success: 'Cotización(s) successfully deleted',
        },
        edit: {
          title: 'Edit Cotización',
        },
        fields: {
          id: 'Id',
          'names': 'Nombres',
          'city': 'Ciudad',
          'email': 'Correo Electrónico',
          'phoneNumber': 'Teléfono',
          'message': 'Comentario:',
          'serviceOfInterest': 'Servicio de Interes',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Cotización',
        },
        view: {
          title: 'View Cotización',
        },
        importer: {
          title: 'Import Cotizaciones',
          fileName: 'inquiries_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    task: {
        name: 'task',
        label: 'Consignas',
        menu: 'Consignas',
        exporterFileName: 'task_export',
        list: {
          menu: 'Consignas',
          title: 'Consignas',
        },
        create: {
          success: 'Consigna successfully saved',
        },
        update: {
          success: 'Consigna successfully saved',
        },
        destroy: {
          success: 'Consigna successfully deleted',
        },
        destroyAll: {
          success: 'Consigna(s) successfully deleted',
        },
        edit: {
          title: 'Edit Consigna',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Consigna',
        },
        view: {
          title: 'View Consigna',
        },
        importer: {
          title: 'Import Consignas',
          fileName: 'task_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    notification: {
        name: 'notification',
        label: 'Notificaciones Push',
        menu: 'Notificaciones Push',
        exporterFileName: 'notification_export',
        list: {
          menu: 'Notificaciones Push',
          title: 'Notificaciones Push',
        },
        create: {
          success: 'Notificación Push successfully saved',
        },
        update: {
          success: 'Notificación Push successfully saved',
        },
        destroy: {
          success: 'Notificación Push successfully deleted',
        },
        destroyAll: {
          success: 'Notificación Push(s) successfully deleted',
        },
        edit: {
          title: 'Edit Notificación Push',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Notificación Push',
        },
        view: {
          title: 'View Notificación Push',
        },
        importer: {
          title: 'Import Notificaciones Push',
          fileName: 'notification_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    deviceIdInformation: {
        name: 'deviceIdInformation',
        label: 'Ids de Dispositivos de Usuarios',
        menu: 'Ids de Dispositivos de Usuarios',
        exporterFileName: 'deviceIdInformation_export',
        list: {
          menu: 'Ids de Dispositivos de Usuarios',
          title: 'Ids de Dispositivos de Usuarios',
        },
        create: {
          success: 'Id de Dispositivo de Usuario successfully saved',
        },
        update: {
          success: 'Id de Dispositivo de Usuario successfully saved',
        },
        destroy: {
          success: 'Id de Dispositivo de Usuario successfully deleted',
        },
        destroyAll: {
          success: 'Id de Dispositivo de Usuario(s) successfully deleted',
        },
        edit: {
          title: 'Edit Id de Dispositivo de Usuario',
        },
        fields: {
          id: 'Id',
          'deviceId': 'Id del dispositivo',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Id de Dispositivo de Usuario',
        },
        view: {
          title: 'View Id de Dispositivo de Usuario',
        },
        importer: {
          title: 'Import Ids de Dispositivos de Usuarios',
          fileName: 'deviceIdInformation_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    guardShift: {
        name: 'guardShift',
        label: 'Turnos Laborales',
        menu: 'Turnos Laborales',
        exporterFileName: 'guardShift_export',
        list: {
          menu: 'Turnos Laborales',
          title: 'Turnos Laborales',
        },
        create: {
          success: 'Turno Laboral successfully saved',
        },
        update: {
          success: 'Turno Laboral successfully saved',
        },
        destroy: {
          success: 'Turno Laboral successfully deleted',
        },
        destroyAll: {
          success: 'Turno Laboral(s) successfully deleted',
        },
        edit: {
          title: 'Edit Turno Laboral',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Turno Laboral',
        },
        view: {
          title: 'View Turno Laboral',
        },
        importer: {
          title: 'Import Turnos Laborales',
          fileName: 'guardShift_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    memos: {
        name: 'memos',
        label: 'Memos',
        menu: 'Memos',
        exporterFileName: 'memos_export',
        list: {
          menu: 'Memos',
          title: 'Memos',
        },
        create: {
          success: 'Memos successfully saved',
        },
        update: {
          success: 'Memos successfully saved',
        },
        destroy: {
          success: 'Memos successfully deleted',
        },
        destroyAll: {
          success: 'Memos(s) successfully deleted',
        },
        edit: {
          title: 'Edit Memos',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Memos',
        },
        view: {
          title: 'View Memos',
        },
        importer: {
          title: 'Import Memos',
          fileName: 'memos_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    request: {
        name: 'request',
        label: 'Solicitudes',
        menu: 'Solicitudes',
        exporterFileName: 'request_export',
        list: {
          menu: 'Solicitudes',
          title: 'Solicitudes',
        },
        create: {
          success: 'Solicitud successfully saved',
        },
        update: {
          success: 'Solicitud successfully saved',
        },
        destroy: {
          success: 'Solicitud successfully deleted',
        },
        destroyAll: {
          success: 'Solicitud(s) successfully deleted',
        },
        edit: {
          title: 'Edit Solicitud',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Solicitud',
        },
        view: {
          title: 'View Solicitud',
        },
        importer: {
          title: 'Import Solicitudes',
          fileName: 'request_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    videoTutorialCategory: {
        name: 'videoTutorialCategory',
        label: 'Categorías de los videos tutoriales',
        menu: 'Categorías de los videos tutoriales',
        exporterFileName: 'videoTutorialCategory_export',
        list: {
          menu: 'Categorías de los videos tutoriales',
          title: 'Categorías de los videos tutoriales',
        },
        create: {
          success: 'Categoria del video tutorial successfully saved',
        },
        update: {
          success: 'Categoria del video tutorial successfully saved',
        },
        destroy: {
          success: 'Categoria del video tutorial successfully deleted',
        },
        destroyAll: {
          success: 'Categoria del video tutorial(s) successfully deleted',
        },
        edit: {
          title: 'Edit Categoria del video tutorial',
        },
        fields: {
          id: 'Id',
          'categoryName': 'Nombre de la categoria',
          'videosInCategory': 'Videos en la Categoría',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Categoria del video tutorial',
        },
        view: {
          title: 'View Categoria del video tutorial',
        },
        importer: {
          title: 'Import Categorías de los videos tutoriales',
          fileName: 'videoTutorialCategory_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    videoTutorial: {
        name: 'videoTutorial',
        label: 'Videos Tutoriales',
        menu: 'Videos Tutoriales',
        exporterFileName: 'videoTutorial_export',
        list: {
          menu: 'Videos Tutoriales',
          title: 'Videos Tutoriales',
        },
        create: {
          success: 'Video Tutorial successfully saved',
        },
        update: {
          success: 'Video Tutorial successfully saved',
        },
        destroy: {
          success: 'Video Tutorial successfully deleted',
        },
        destroyAll: {
          success: 'Video Tutorial(s) successfully deleted',
        },
        edit: {
          title: 'Edit Video Tutorial',
        },
        fields: {
          id: 'Id',
          'videoTutorialName': 'Nombre del video Tutorial',
          'videoTutorialLink': 'Link del video Tutorial',
          'videoTutorialCategory': 'VideoTutorialCategory',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Video Tutorial',
        },
        view: {
          title: 'View Video Tutorial',
        },
        importer: {
          title: 'Import Videos Tutoriales',
          fileName: 'videoTutorial_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    tutorial: {
        name: 'tutorial',
        label: 'Tutoriales',
        menu: 'Tutoriales',
        exporterFileName: 'tutorial_export',
        list: {
          menu: 'Tutoriales',
          title: 'Tutoriales',
        },
        create: {
          success: 'Tutorial successfully saved',
        },
        update: {
          success: 'Tutorial successfully saved',
        },
        destroy: {
          success: 'Tutorial successfully deleted',
        },
        destroyAll: {
          success: 'Tutorial(s) successfully deleted',
        },
        edit: {
          title: 'Edit Tutorial',
        },
        fields: {
          id: 'Id',
          'tutorialName': 'Nombre del tutorial',
          'tutorialCategory': 'TutorialCategory',
          'tutorialVideos': 'TutorialVideos',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Tutorial',
        },
        view: {
          title: 'View Tutorial',
        },
        importer: {
          title: 'Import Tutoriales',
          fileName: 'tutorial_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    completionOfTutorial: {
        name: 'completionOfTutorial',
        label: 'Lista de vistas de tutoriales',
        menu: 'Lista de vistas de tutoriales',
        exporterFileName: 'completionOfTutorial_export',
        list: {
          menu: 'Lista de vistas de tutoriales',
          title: 'Lista de vistas de tutoriales',
        },
        create: {
          success: 'Lista de vista de tutorial successfully saved',
        },
        update: {
          success: 'Lista de vista de tutorial successfully saved',
        },
        destroy: {
          success: 'Lista de vista de tutorial successfully deleted',
        },
        destroyAll: {
          success: 'Lista de vista de tutorial(s) successfully deleted',
        },
        edit: {
          title: 'Edit Lista de vista de tutorial',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Lista de vista de tutorial',
        },
        view: {
          title: 'View Lista de vista de tutorial',
        },
        importer: {
          title: 'Import Lista de vistas de tutoriales',
          fileName: 'completionOfTutorial_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    inventoryHistory: {
        name: 'inventoryHistory',
        label: 'Historial de dotaciones',
        menu: 'Historial de dotaciones',
        exporterFileName: 'inventoryHistory_export',
        list: {
          menu: 'Historial de dotaciones',
          title: 'Historial de dotaciones',
        },
        create: {
          success: 'Historial de dotación successfully saved',
        },
        update: {
          success: 'Historial de dotación successfully saved',
        },
        destroy: {
          success: 'Historial de dotación successfully deleted',
        },
        destroyAll: {
          success: 'Historial de dotación(s) successfully deleted',
        },
        edit: {
          title: 'Edit Historial de dotación',
        },
        fields: {
          id: 'Id',
          'shiftOrigin': 'Turno de origen',
          'inventoryCheckedDateRange': 'Fecha de Dotación revisada',
          'inventoryCheckedDate': 'Fecha de Dotación revisada',
          'inventoryOrigin': 'Inventario Registrado',
          'isComplete': 'Está el Inventario Completo?',
          'observation': 'Observación',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Historial de dotación',
        },
        view: {
          title: 'View Historial de dotación',
        },
        importer: {
          title: 'Import Historial de dotaciones',
          fileName: 'inventoryHistory_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    businessInfo: {
        name: 'businessInfo',
        label: 'Business Information',
        menu: 'Business Information',
        exporterFileName: 'businessInfo_export',
        list: {
          menu: 'Business Information',
          title: 'Business Information',
        },
        create: {
          success: 'BusinessInfo successfully saved',
        },
        update: {
          success: 'BusinessInfo successfully saved',
        },
        destroy: {
          success: 'BusinessInfo successfully deleted',
        },
        destroyAll: {
          success: 'BusinessInfo(s) successfully deleted',
        },
        edit: {
          title: 'Edit BusinessInfo',
        },
        fields: {
          id: 'Id',
          'companyName': 'CompanyName',
          'description': 'Description',
          'logo': 'Logo',
          'contactPhone': 'ContactPhone',
          'contactEmail': 'ContactEmail',
          'address': 'Address',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New BusinessInfo',
        },
        view: {
          title: 'View BusinessInfo',
        },
        importer: {
          title: 'Import Business Information',
          fileName: 'businessInfo_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    insurance: {
        name: 'insurance',
        label: 'Insurances',
        menu: 'Insurances',
        exporterFileName: 'insurance_export',
        list: {
          menu: 'Insurances',
          title: 'Insurances',
        },
        create: {
          success: 'Insurance successfully saved',
        },
        update: {
          success: 'Insurance successfully saved',
        },
        destroy: {
          success: 'Insurance successfully deleted',
        },
        destroyAll: {
          success: 'Insurance(s) successfully deleted',
        },
        edit: {
          title: 'Edit Insurance',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Insurance',
        },
        view: {
          title: 'View Insurance',
        },
        importer: {
          title: 'Import Insurances',
          fileName: 'insurance_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    notificationRecipient: {
        name: 'notificationRecipient',
        label: 'NotificationRecipients',
        menu: 'NotificationRecipients',
        exporterFileName: 'notificationRecipient_export',
        list: {
          menu: 'NotificationRecipients',
          title: 'NotificationRecipients',
        },
        create: {
          success: 'NotificationRecipient successfully saved',
        },
        update: {
          success: 'NotificationRecipient successfully saved',
        },
        destroy: {
          success: 'NotificationRecipient successfully deleted',
        },
        destroyAll: {
          success: 'NotificationRecipient(s) successfully deleted',
        },
        edit: {
          title: 'Edit NotificationRecipient',
        },
        fields: {
          id: 'Id',
          'notification': 'Notification',
          'recipientId': 'RecipientId',
          'readStatus': 'ReadStatus',
          'deliveryStatus': 'DeliveryStatus',
          'dateDeliveredRange': 'DateDelivered',
          'dateDelivered': 'DateDelivered',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New NotificationRecipient',
        },
        view: {
          title: 'View NotificationRecipient',
        },
        importer: {
          title: 'Import NotificationRecipients',
          fileName: 'notificationRecipient_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    report: {
        name: 'report',
        label: 'Reports',
        menu: 'Reports',
        exporterFileName: 'report_export',
        list: {
          menu: 'Reports',
          title: 'Reports',
        },
        create: {
          success: 'Report successfully saved',
        },
        update: {
          success: 'Report successfully saved',
        },
        destroy: {
          success: 'Report successfully deleted',
        },
        destroyAll: {
          success: 'Report(s) successfully deleted',
        },
        edit: {
          title: 'Edit Report',
        },
        fields: {
          id: 'Id',
          'title': 'Title',
          'station': 'Station',
          'generatedDateRange': 'GeneratedDate',
          'generatedDate': 'GeneratedDate',
          'content': 'Content',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Report',
        },
        view: {
          title: 'View Report',
        },
        importer: {
          title: 'Import Reports',
          fileName: 'report_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    shift: {
        name: 'shift',
        label: 'Shifts',
        menu: 'Shifts',
        exporterFileName: 'shift_export',
        list: {
          menu: 'Shifts',
          title: 'Shifts',
        },
        create: {
          success: 'Shift successfully saved',
        },
        update: {
          success: 'Shift successfully saved',
        },
        destroy: {
          success: 'Shift successfully deleted',
        },
        destroyAll: {
          success: 'Shift(s) successfully deleted',
        },
        edit: {
          title: 'Edit Shift',
        },
        fields: {
          id: 'Id',
          'startTimeRange': 'StartTime',
          'startTime': 'StartTime',
          'endTimeRange': 'EndTime',
          'endTime': 'EndTime',
          'station': 'Station',
          'guard': 'Guard',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Shift',
        },
        view: {
          title: 'View Shift',
        },
        importer: {
          title: 'Import Shifts',
          fileName: 'shift_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Administrator',
      description: 'Full system access and administration',
    },
    operationsManager: {
      label: 'Operations Manager',
      description: 'Manages overall security operations and strategy',
    },
    securitySupervisor: {
      label: 'Security Supervisor',
      description: 'Supervises security guards and field operations',
    },
    clientAccountManager: {
      label: 'Client Account Manager',
      description: 'Manages client relationships and accounts',
    },
    hrManager: {
      label: 'HR Manager',
      description: 'Manages human resources and staff administration',
    },
    dispatcher: {
      label: 'Dispatcher',
      description: 'Coordinates and schedules security guard assignments',
    },
    securityGuard: {
      label: 'Security Guard',
      description: 'Field security personnel',
    },
    customer: {
      label: 'Customer',
      description: 'Client user with limited access to their account',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom role with specific permissions',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Dark',
      light: 'Light',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    items_per_page: '/ page',
    jump_to: 'Goto',
    jump_to_confirm: 'confirm',
    page: '',

    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
  },
};

export default en;
