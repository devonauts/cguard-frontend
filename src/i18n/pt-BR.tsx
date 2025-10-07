const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
    select: 'Selecionar',
    continue: 'Continuar',
    filters: 'Filtros',
  },

  app: {
    title: 'Aplicação',
  },

  api: {
    menu: 'API',
  },

  entities: {
    bannerSuperiorApp: {
        name: 'Banner Superior',
        label: 'Banners Superiores',
        menu: 'Banners Superiores',
        exporterFileName: 'Banner Superior_exportados',
        list: {
          menu: 'Banners Superiores',
          title: 'Banners Superiores',
        },
        create: {
          success: 'Banner Superior salvo com sucesso',
        },
        update: {
          success: 'Banner Superior salvo com sucesso',
        },
        destroy: {
          success: 'Banner Superior deletado com sucesso',
        },
        destroyAll: {
          success: 'Banner Superior(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Banner Superior',
        },
        fields: {
          id: 'Id',
          'title': 'Titulo',
          'imageUrl': 'Imagen debe ser 2 x 1',
          'link': 'Link',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {
          'link': 'Link',
        },
        hints: {

        },
        new: {
          title: 'Novo Banner Superior',
        },
        view: {
          title: 'Visualizar Banner Superior',
        },
        importer: {
          title: 'Importar Banners Superiores',
          fileName: 'bannerSuperiorApp_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    service: {
        name: 'Servicio a Brindar',
        label: 'Servicios a Brindar',
        menu: 'Servicios a Brindar',
        exporterFileName: 'Servicio a Brindar_exportados',
        list: {
          menu: 'Servicios a Brindar',
          title: 'Servicios a Brindar',
        },
        create: {
          success: 'Servicio a Brindar salvo com sucesso',
        },
        update: {
          success: 'Servicio a Brindar salvo com sucesso',
        },
        destroy: {
          success: 'Servicio a Brindar deletado com sucesso',
        },
        destroyAll: {
          success: 'Servicio a Brindar(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Servicio a Brindar',
        },
        view: {
          title: 'Visualizar Servicio a Brindar',
        },
        importer: {
          title: 'Importar Servicios a Brindar',
          fileName: 'service_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    certification: {
        name: 'Certificación',
        label: 'Certificaciones',
        menu: 'Certificaciones',
        exporterFileName: 'Certificación_exportados',
        list: {
          menu: 'Certificaciones',
          title: 'Certificaciones',
        },
        create: {
          success: 'Certificación salvo com sucesso',
        },
        update: {
          success: 'Certificación salvo com sucesso',
        },
        destroy: {
          success: 'Certificación deletado com sucesso',
        },
        destroyAll: {
          success: 'Certificación(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Certificación',
        },
        view: {
          title: 'Visualizar Certificación',
        },
        importer: {
          title: 'Importar Certificaciones',
          fileName: 'certification_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    securityGuard: {
        name: 'Guardia de Seguridad',
        label: 'Guardias de Seguridad',
        menu: 'Guardias de Seguridad',
        exporterFileName: 'Guardia de Seguridad_exportados',
        list: {
          menu: 'Guardias de Seguridad',
          title: 'Guardias de Seguridad',
        },
        create: {
          success: 'Guardia de Seguridad salvo com sucesso',
        },
        update: {
          success: 'Guardia de Seguridad salvo com sucesso',
        },
        destroy: {
          success: 'Guardia de Seguridad deletado com sucesso',
        },
        destroyAll: {
          success: 'Guardia de Seguridad(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Guardia de Seguridad',
        },
        view: {
          title: 'Visualizar Guardia de Seguridad',
        },
        importer: {
          title: 'Importar Guardias de Seguridad',
          fileName: 'securityGuard_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    clientAccount: {
        name: 'Cuenta de Cliente',
        label: 'Cuenta de Clientes',
        menu: 'Cuenta de Clientes',
        exporterFileName: 'Cuenta de Cliente_exportados',
        list: {
          menu: 'Cuenta de Clientes',
          title: 'Cuenta de Clientes',
        },
        create: {
          success: 'Cuenta de Cliente salvo com sucesso',
        },
        update: {
          success: 'Cuenta de Cliente salvo com sucesso',
        },
        destroy: {
          success: 'Cuenta de Cliente deletado com sucesso',
        },
        destroyAll: {
          success: 'Cuenta de Cliente(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Cuenta de Cliente',
        },
        view: {
          title: 'Visualizar Cuenta de Cliente',
        },
        importer: {
          title: 'Importar Cuenta de Clientes',
          fileName: 'clientAccount_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    representanteEmpresa: {
        name: 'Representante',
        label: 'Representantes',
        menu: 'Representantes',
        exporterFileName: 'Representante_exportados',
        list: {
          menu: 'Representantes',
          title: 'Representantes',
        },
        create: {
          success: 'Representante salvo com sucesso',
        },
        update: {
          success: 'Representante salvo com sucesso',
        },
        destroy: {
          success: 'Representante deletado com sucesso',
        },
        destroyAll: {
          success: 'Representante(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Representante',
        },
        view: {
          title: 'Visualizar Representante',
        },
        importer: {
          title: 'Importar Representantes',
          fileName: 'representanteEmpresa_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    incident: {
        name: 'Novedad',
        label: 'Novedades',
        menu: 'Novedades',
        exporterFileName: 'Novedad_exportados',
        list: {
          menu: 'Novedades',
          title: 'Novedades',
        },
        create: {
          success: 'Novedad salvo com sucesso',
        },
        update: {
          success: 'Novedad salvo com sucesso',
        },
        destroy: {
          success: 'Novedad deletado com sucesso',
        },
        destroyAll: {
          success: 'Novedad(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Novedad',
        },
        view: {
          title: 'Visualizar Novedad',
        },
        importer: {
          title: 'Importar Novedades',
          fileName: 'incident_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    inventory: {
        name: 'Dotación',
        label: 'Dotaciones',
        menu: 'Dotaciones',
        exporterFileName: 'Dotación_exportados',
        list: {
          menu: 'Dotaciones',
          title: 'Dotaciones',
        },
        create: {
          success: 'Dotación salvo com sucesso',
        },
        update: {
          success: 'Dotación salvo com sucesso',
        },
        destroy: {
          success: 'Dotación deletado com sucesso',
        },
        destroyAll: {
          success: 'Dotación(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Dotación',
        },
        view: {
          title: 'Visualizar Dotación',
        },
        importer: {
          title: 'Importar Dotaciones',
          fileName: 'inventory_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    additionalService: {
        name: 'Servicio Adicional',
        label: 'Servicios Adicionales',
        menu: 'Servicios Adicionales',
        exporterFileName: 'Servicio Adicional_exportados',
        list: {
          menu: 'Servicios Adicionales',
          title: 'Servicios Adicionales',
        },
        create: {
          success: 'Servicio Adicional salvo com sucesso',
        },
        update: {
          success: 'Servicio Adicional salvo com sucesso',
        },
        destroy: {
          success: 'Servicio Adicional deletado com sucesso',
        },
        destroyAll: {
          success: 'Servicio Adicional(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Servicio Adicional',
        },
        view: {
          title: 'Visualizar Servicio Adicional',
        },
        importer: {
          title: 'Importar Servicios Adicionales',
          fileName: 'additionalService_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    patrolCheckpoint: {
        name: 'PatrolCheckpoint',
        label: 'PatrolCheckpoints',
        menu: 'PatrolCheckpoints',
        exporterFileName: 'PatrolCheckpoint_exportados',
        list: {
          menu: 'PatrolCheckpoints',
          title: 'PatrolCheckpoints',
        },
        create: {
          success: 'PatrolCheckpoint salvo com sucesso',
        },
        update: {
          success: 'PatrolCheckpoint salvo com sucesso',
        },
        destroy: {
          success: 'PatrolCheckpoint deletado com sucesso',
        },
        destroyAll: {
          success: 'PatrolCheckpoint(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'assignedQrImage': 'QR code unique identifier',
        },
        new: {
          title: 'Novo PatrolCheckpoint',
        },
        view: {
          title: 'Visualizar PatrolCheckpoint',
        },
        importer: {
          title: 'Importar PatrolCheckpoints',
          fileName: 'patrolCheckpoint_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    patrolLog: {
        name: 'Patrol Log',
        label: 'Patrol Logs',
        menu: 'Patrol Logs',
        exporterFileName: 'Patrol Log_exportados',
        list: {
          menu: 'Patrol Logs',
          title: 'Patrol Logs',
        },
        create: {
          success: 'Patrol Log salvo com sucesso',
        },
        update: {
          success: 'Patrol Log salvo com sucesso',
        },
        destroy: {
          success: 'Patrol Log deletado com sucesso',
        },
        destroyAll: {
          success: 'Patrol Log(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Patrol Log',
        },
        view: {
          title: 'Visualizar Patrol Log',
        },
        importer: {
          title: 'Importar Patrol Logs',
          fileName: 'patrolLog_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    patrol: {
        name: 'Patrol',
        label: 'Patrols',
        menu: 'Patrols',
        exporterFileName: 'Patrol_exportados',
        list: {
          menu: 'Patrols',
          title: 'Patrols',
        },
        create: {
          success: 'Patrol salvo com sucesso',
        },
        update: {
          success: 'Patrol salvo com sucesso',
        },
        destroy: {
          success: 'Patrol deletado com sucesso',
        },
        destroyAll: {
          success: 'Patrol(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Patrol',
        },
        view: {
          title: 'Visualizar Patrol',
        },
        importer: {
          title: 'Importar Patrols',
          fileName: 'patrol_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    station: {
        name: 'Punto de Vigilancia',
        label: 'Puntos de Vigilancia',
        menu: 'Puntos de Vigilancia',
        exporterFileName: 'Punto de Vigilancia_exportados',
        list: {
          menu: 'Puntos de Vigilancia',
          title: 'Puntos de Vigilancia',
        },
        create: {
          success: 'Punto de Vigilancia salvo com sucesso',
        },
        update: {
          success: 'Punto de Vigilancia salvo com sucesso',
        },
        destroy: {
          success: 'Punto de Vigilancia deletado com sucesso',
        },
        destroyAll: {
          success: 'Punto de Vigilancia(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Punto de Vigilancia',
        },
        view: {
          title: 'Visualizar Punto de Vigilancia',
        },
        importer: {
          title: 'Importar Puntos de Vigilancia',
          fileName: 'station_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    billing: {
        name: 'Facturación',
        label: 'Facturaciones',
        menu: 'Facturaciones',
        exporterFileName: 'Facturación_exportados',
        list: {
          menu: 'Facturaciones',
          title: 'Facturaciones',
        },
        create: {
          success: 'Facturación salvo com sucesso',
        },
        update: {
          success: 'Facturación salvo com sucesso',
        },
        destroy: {
          success: 'Facturación deletado com sucesso',
        },
        destroyAll: {
          success: 'Facturación(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Facturación',
        },
        view: {
          title: 'Visualizar Facturación',
        },
        importer: {
          title: 'Importar Facturaciones',
          fileName: 'billing_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    inquiries: {
        name: 'Cotización',
        label: 'Cotizaciones',
        menu: 'Cotizaciones',
        exporterFileName: 'Cotización_exportados',
        list: {
          menu: 'Cotizaciones',
          title: 'Cotizaciones',
        },
        create: {
          success: 'Cotización salvo com sucesso',
        },
        update: {
          success: 'Cotización salvo com sucesso',
        },
        destroy: {
          success: 'Cotización deletado com sucesso',
        },
        destroyAll: {
          success: 'Cotización(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Cotización',
        },
        view: {
          title: 'Visualizar Cotización',
        },
        importer: {
          title: 'Importar Cotizaciones',
          fileName: 'inquiries_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    task: {
        name: 'Consigna',
        label: 'Consignas',
        menu: 'Consignas',
        exporterFileName: 'Consigna_exportados',
        list: {
          menu: 'Consignas',
          title: 'Consignas',
        },
        create: {
          success: 'Consigna salvo com sucesso',
        },
        update: {
          success: 'Consigna salvo com sucesso',
        },
        destroy: {
          success: 'Consigna deletado com sucesso',
        },
        destroyAll: {
          success: 'Consigna(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Consigna',
        },
        view: {
          title: 'Visualizar Consigna',
        },
        importer: {
          title: 'Importar Consignas',
          fileName: 'task_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    notification: {
        name: 'Notificación Push',
        label: 'Notificaciones Push',
        menu: 'Notificaciones Push',
        exporterFileName: 'Notificación Push_exportados',
        list: {
          menu: 'Notificaciones Push',
          title: 'Notificaciones Push',
        },
        create: {
          success: 'Notificación Push salvo com sucesso',
        },
        update: {
          success: 'Notificación Push salvo com sucesso',
        },
        destroy: {
          success: 'Notificación Push deletado com sucesso',
        },
        destroyAll: {
          success: 'Notificación Push(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Notificación Push',
        },
        view: {
          title: 'Visualizar Notificación Push',
        },
        importer: {
          title: 'Importar Notificaciones Push',
          fileName: 'notification_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    deviceIdInformation: {
        name: 'Id de Dispositivo de Usuario',
        label: 'Ids de Dispositivos de Usuarios',
        menu: 'Ids de Dispositivos de Usuarios',
        exporterFileName: 'Id de Dispositivo de Usuario_exportados',
        list: {
          menu: 'Ids de Dispositivos de Usuarios',
          title: 'Ids de Dispositivos de Usuarios',
        },
        create: {
          success: 'Id de Dispositivo de Usuario salvo com sucesso',
        },
        update: {
          success: 'Id de Dispositivo de Usuario salvo com sucesso',
        },
        destroy: {
          success: 'Id de Dispositivo de Usuario deletado com sucesso',
        },
        destroyAll: {
          success: 'Id de Dispositivo de Usuario(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Id de Dispositivo de Usuario',
        },
        fields: {
          id: 'Id',
          'deviceId': 'Id del dispositivo',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Id de Dispositivo de Usuario',
        },
        view: {
          title: 'Visualizar Id de Dispositivo de Usuario',
        },
        importer: {
          title: 'Importar Ids de Dispositivos de Usuarios',
          fileName: 'deviceIdInformation_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    guardShift: {
        name: 'Turno Laboral',
        label: 'Turnos Laborales',
        menu: 'Turnos Laborales',
        exporterFileName: 'Turno Laboral_exportados',
        list: {
          menu: 'Turnos Laborales',
          title: 'Turnos Laborales',
        },
        create: {
          success: 'Turno Laboral salvo com sucesso',
        },
        update: {
          success: 'Turno Laboral salvo com sucesso',
        },
        destroy: {
          success: 'Turno Laboral deletado com sucesso',
        },
        destroyAll: {
          success: 'Turno Laboral(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Turno Laboral',
        },
        view: {
          title: 'Visualizar Turno Laboral',
        },
        importer: {
          title: 'Importar Turnos Laborales',
          fileName: 'guardShift_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    memos: {
        name: 'Memos',
        label: 'Memos',
        menu: 'Memos',
        exporterFileName: 'Memos_exportados',
        list: {
          menu: 'Memos',
          title: 'Memos',
        },
        create: {
          success: 'Memos salvo com sucesso',
        },
        update: {
          success: 'Memos salvo com sucesso',
        },
        destroy: {
          success: 'Memos deletado com sucesso',
        },
        destroyAll: {
          success: 'Memos(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Memos',
        },
        view: {
          title: 'Visualizar Memos',
        },
        importer: {
          title: 'Importar Memos',
          fileName: 'memos_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    request: {
        name: 'Solicitud',
        label: 'Solicitudes',
        menu: 'Solicitudes',
        exporterFileName: 'Solicitud_exportados',
        list: {
          menu: 'Solicitudes',
          title: 'Solicitudes',
        },
        create: {
          success: 'Solicitud salvo com sucesso',
        },
        update: {
          success: 'Solicitud salvo com sucesso',
        },
        destroy: {
          success: 'Solicitud deletado com sucesso',
        },
        destroyAll: {
          success: 'Solicitud(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Solicitud',
        },
        view: {
          title: 'Visualizar Solicitud',
        },
        importer: {
          title: 'Importar Solicitudes',
          fileName: 'request_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    videoTutorialCategory: {
        name: 'Categoria del video tutorial',
        label: 'Categorías de los videos tutoriales',
        menu: 'Categorías de los videos tutoriales',
        exporterFileName: 'Categoria del video tutorial_exportados',
        list: {
          menu: 'Categorías de los videos tutoriales',
          title: 'Categorías de los videos tutoriales',
        },
        create: {
          success: 'Categoria del video tutorial salvo com sucesso',
        },
        update: {
          success: 'Categoria del video tutorial salvo com sucesso',
        },
        destroy: {
          success: 'Categoria del video tutorial deletado com sucesso',
        },
        destroyAll: {
          success: 'Categoria del video tutorial(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Categoria del video tutorial',
        },
        fields: {
          id: 'Id',
          'categoryName': 'Nombre de la categoria',
          'videosInCategory': 'Videos en la Categoría',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Categoria del video tutorial',
        },
        view: {
          title: 'Visualizar Categoria del video tutorial',
        },
        importer: {
          title: 'Importar Categorías de los videos tutoriales',
          fileName: 'videoTutorialCategory_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    videoTutorial: {
        name: 'Video Tutorial',
        label: 'Videos Tutoriales',
        menu: 'Videos Tutoriales',
        exporterFileName: 'Video Tutorial_exportados',
        list: {
          menu: 'Videos Tutoriales',
          title: 'Videos Tutoriales',
        },
        create: {
          success: 'Video Tutorial salvo com sucesso',
        },
        update: {
          success: 'Video Tutorial salvo com sucesso',
        },
        destroy: {
          success: 'Video Tutorial deletado com sucesso',
        },
        destroyAll: {
          success: 'Video Tutorial(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Video Tutorial',
        },
        fields: {
          id: 'Id',
          'videoTutorialName': 'Nombre del video Tutorial',
          'videoTutorialLink': 'Link del video Tutorial',
          'videoTutorialCategory': 'VideoTutorialCategory',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Video Tutorial',
        },
        view: {
          title: 'Visualizar Video Tutorial',
        },
        importer: {
          title: 'Importar Videos Tutoriales',
          fileName: 'videoTutorial_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    tutorial: {
        name: 'Tutorial',
        label: 'Tutoriales',
        menu: 'Tutoriales',
        exporterFileName: 'Tutorial_exportados',
        list: {
          menu: 'Tutoriales',
          title: 'Tutoriales',
        },
        create: {
          success: 'Tutorial salvo com sucesso',
        },
        update: {
          success: 'Tutorial salvo com sucesso',
        },
        destroy: {
          success: 'Tutorial deletado com sucesso',
        },
        destroyAll: {
          success: 'Tutorial(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Tutorial',
        },
        fields: {
          id: 'Id',
          'tutorialName': 'Nombre del tutorial',
          'tutorialCategory': 'TutorialCategory',
          'tutorialVideos': 'TutorialVideos',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Tutorial',
        },
        view: {
          title: 'Visualizar Tutorial',
        },
        importer: {
          title: 'Importar Tutoriales',
          fileName: 'tutorial_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    completionOfTutorial: {
        name: 'Lista de vista de tutorial',
        label: 'Lista de vistas de tutoriales',
        menu: 'Lista de vistas de tutoriales',
        exporterFileName: 'Lista de vista de tutorial_exportados',
        list: {
          menu: 'Lista de vistas de tutoriales',
          title: 'Lista de vistas de tutoriales',
        },
        create: {
          success: 'Lista de vista de tutorial salvo com sucesso',
        },
        update: {
          success: 'Lista de vista de tutorial salvo com sucesso',
        },
        destroy: {
          success: 'Lista de vista de tutorial deletado com sucesso',
        },
        destroyAll: {
          success: 'Lista de vista de tutorial(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Lista de vista de tutorial',
        },
        view: {
          title: 'Visualizar Lista de vista de tutorial',
        },
        importer: {
          title: 'Importar Lista de vistas de tutoriales',
          fileName: 'completionOfTutorial_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    inventoryHistory: {
        name: 'Historial de dotación',
        label: 'Historial de dotaciones',
        menu: 'Historial de dotaciones',
        exporterFileName: 'Historial de dotación_exportados',
        list: {
          menu: 'Historial de dotaciones',
          title: 'Historial de dotaciones',
        },
        create: {
          success: 'Historial de dotación salvo com sucesso',
        },
        update: {
          success: 'Historial de dotación salvo com sucesso',
        },
        destroy: {
          success: 'Historial de dotación deletado com sucesso',
        },
        destroyAll: {
          success: 'Historial de dotación(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Historial de dotación',
        },
        view: {
          title: 'Visualizar Historial de dotación',
        },
        importer: {
          title: 'Importar Historial de dotaciones',
          fileName: 'inventoryHistory_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    businessInfo: {
        name: 'BusinessInfo',
        label: 'Business Information',
        menu: 'Business Information',
        exporterFileName: 'BusinessInfo_exportados',
        list: {
          menu: 'Business Information',
          title: 'Business Information',
        },
        create: {
          success: 'BusinessInfo salvo com sucesso',
        },
        update: {
          success: 'BusinessInfo salvo com sucesso',
        },
        destroy: {
          success: 'BusinessInfo deletado com sucesso',
        },
        destroyAll: {
          success: 'BusinessInfo(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo BusinessInfo',
        },
        view: {
          title: 'Visualizar BusinessInfo',
        },
        importer: {
          title: 'Importar Business Information',
          fileName: 'businessInfo_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    insurance: {
        name: 'Insurance',
        label: 'Insurances',
        menu: 'Insurances',
        exporterFileName: 'Insurance_exportados',
        list: {
          menu: 'Insurances',
          title: 'Insurances',
        },
        create: {
          success: 'Insurance salvo com sucesso',
        },
        update: {
          success: 'Insurance salvo com sucesso',
        },
        destroy: {
          success: 'Insurance deletado com sucesso',
        },
        destroyAll: {
          success: 'Insurance(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Insurance',
        },
        view: {
          title: 'Visualizar Insurance',
        },
        importer: {
          title: 'Importar Insurances',
          fileName: 'insurance_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    notificationRecipient: {
        name: 'NotificationRecipient',
        label: 'NotificationRecipients',
        menu: 'NotificationRecipients',
        exporterFileName: 'NotificationRecipient_exportados',
        list: {
          menu: 'NotificationRecipients',
          title: 'NotificationRecipients',
        },
        create: {
          success: 'NotificationRecipient salvo com sucesso',
        },
        update: {
          success: 'NotificationRecipient salvo com sucesso',
        },
        destroy: {
          success: 'NotificationRecipient deletado com sucesso',
        },
        destroyAll: {
          success: 'NotificationRecipient(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo NotificationRecipient',
        },
        view: {
          title: 'Visualizar NotificationRecipient',
        },
        importer: {
          title: 'Importar NotificationRecipients',
          fileName: 'notificationRecipient_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    report: {
        name: 'Report',
        label: 'Reports',
        menu: 'Reports',
        exporterFileName: 'Report_exportados',
        list: {
          menu: 'Reports',
          title: 'Reports',
        },
        create: {
          success: 'Report salvo com sucesso',
        },
        update: {
          success: 'Report salvo com sucesso',
        },
        destroy: {
          success: 'Report deletado com sucesso',
        },
        destroyAll: {
          success: 'Report(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Report',
        },
        view: {
          title: 'Visualizar Report',
        },
        importer: {
          title: 'Importar Reports',
          fileName: 'report_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    shift: {
        name: 'Shift',
        label: 'Shifts',
        menu: 'Shifts',
        exporterFileName: 'Shift_exportados',
        list: {
          menu: 'Shifts',
          title: 'Shifts',
        },
        create: {
          success: 'Shift salvo com sucesso',
        },
        update: {
          success: 'Shift salvo com sucesso',
        },
        destroy: {
          success: 'Shift deletado com sucesso',
        },
        destroyAll: {
          success: 'Shift(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Shift',
        },
        view: {
          title: 'Visualizar Shift',
        },
        importer: {
          title: 'Importar Shifts',
          fileName: 'shift_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },
    
  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    social: {
      errors: {
        'auth-invalid-provider':
          'Este email está registrado para outro provedor.',
        'auth-no-email': `O email associado a esta conta é privado ou não existe.`,
      },
    },
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo ao sistema e administração',
    },
    operationsManager: {
      label: 'Gerente de Operações',
      description: 'Gerencia operações de segurança gerais e estratégia',
    },
    securitySupervisor: {
      label: 'Supervisor de Segurança',
      description: 'Supervisiona guardas de segurança e operações de campo',
    },
    clientAccountManager: {
      label: 'Gerente de Contas de Clientes',
      description: 'Gerencia relacionamentos e contas de clientes',
    },
    hrManager: {
      label: 'Gerente de Recursos Humanos',
      description: 'Gerencia recursos humanos e administração de pessoal',
    },
    dispatcher: {
      label: 'Despachante',
      description: 'Coordena e agenda atribuições de guardas de segurança',
    },
    securityGuard: {
      label: 'Guarda de Segurança',
      description: 'Pessoal de segurança de campo',
    },
    customer: {
      label: 'Cliente',
      description: 'Usuário cliente com acesso limitado à sua conta',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Perfil personalizado com permissões específicas',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists: 'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
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

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success: 'Configurações salvas com sucesso.',
    },
    fields: {
      theme: 'Tema',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
    colors: {
      default: 'Escuro',
      light: 'Claro',
      cyan: 'Ciano',
      'geek-blue': 'Azul escuro',
      gold: 'Ouro',
      lime: 'Limão',
      magenta: 'Magenta',
      orange: 'Laranja',
      'polar-green': 'Verde polar',
      purple: 'Roxo',
      red: 'Vermelho',
      volcano: 'Vúlcão',
      yellow: 'Amarelo',
    },
  },
  dashboard: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },

  preview: {
    error:
      'Desculpe, esta operação não é permitida em modo de demonstração.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} é obrigatório`
          : `'${path} deve possuir ao menos ${min} itens`,
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    items_per_page: '/ página',
    jump_to: 'Vá até',
    jump_to_confirm: 'confirme',
    page: '',

    prev_page: 'Página anterior',
    next_page: 'Próxima página',
    prev_5: '5 páginas anteriores',
    next_5: '5 próximas páginas',
    prev_3: '3 páginas anteriores',
    next_3: '3 próximas páginas',
  },
};

export default ptBR;
