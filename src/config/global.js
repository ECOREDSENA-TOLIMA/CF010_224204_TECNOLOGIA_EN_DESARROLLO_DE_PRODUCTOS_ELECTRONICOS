export default {
  global: {
    componenteFormativo:
      'Generar prototipo según las técnicas y especificaciones de producto',
    descripcionCurso:
      'En este componente formativo se tratan conceptos relacionados con la generación de prototipos, parámetros de fabricación, clasificación de materiales y los procesos asociados a la fabricación mecánica y las técnicas de prototipado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Establecer parámetros del prototipo electrónico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Materiales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnicas de uso',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Procesos de fabricación mecánica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas de fabricación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Características de fabricación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Prototipos electrónicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Técnicas de modelado',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Control numérico computarizado en la fabricación de prototipos electrónicos',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_010_224204.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Requisitos de Ensambles Eléctricos y Electrónicos Soldados',
      referencia:
        'IPC (2016). <em>Requisitos de Ensambles Eléctricos y Electrónicos Soldados.</em> https://www.ipc.org/TOC/J-STD-001G-Spanish-toc.pdf',
      tipo: 'Norma',
      link: 'https://www.ipc.org/TOC/J-STD-001G-Spanish-toc.pdf',
    },
    {
      tema: 'Simulación de Productos',
      referencia:
        'EasyEda(s.f.) <em>An Easier and Powerful Online PCB Design Tool.</em>',
      tipo: 'Página web',
      link: 'https://easyeda.com/',
    },
    {
      tema: 'Simulación de Circuitos',
      referencia:
        'Autodesk, INC. (2021). <em>Tinkercad, Diseño 3D.</em> https://www.tinkercad.com/',
      tipo: 'Página web',
      link: 'https://www.tinkercad.com/',
    },
    {
      tema: 'Hojas de Datos técnicos',
      referencia:
        'Alldatasheet. (2021). <em>Electronic Components Datasheet Search.</em> www.alldatasheet.com',
      tipo: 'Página web',
      link: 'https://alldatasheet.com',
    },
    {
      tema: 'Fabricacion de PCB',
      referencia:
        'Strange Parts. (Junio 12, 2018). <em>Dentro de una gran fábrica de Circuitos Impresos - en China.</em> [Archivo de video]. Youtube. https://www.youtube.com/watch?v=ljOoGyCso8s',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ljOoGyCso8s',
    },
    {
      tema: 'Fabricación de placas de circuitos electrónicos',
      referencia:
        'Javi Eternal. (Septiembre 6, 2012). <em>Fabricación de placas de circuitos electrónicos.</em> [Archivo de video]. Youtube. https://www.youtube.com/watch?v=ljOoGyCso8s',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LqaRELYZ1yE',
    },
    {
      tema: 'Quiero Mi CNC',
      referencia:
        'El profe García (Julio 13, 2016). <em>Quiero Mi CNC.</em> [Archivo de video]. Youtube. https://www.youtube.com/watch?v=X4BLydtpllo',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=X4BLydtpllo',
    },
  ],
  glosario: [
    {
      termino: '<em>Software</em>',
      significado:
        'Conjunto de programas, instrucciones y reglas informáticas para ejecutar ciertas tareas en una computadora.',
    },
    {
      termino: 'Serigrafía',
      significado:
        'Procedimiento de estampación mediante estarcido a través de un tejido, originariamente seda.',
    },
    {
      termino: 'Indeleble',
      significado: 'Que no se puede borrar o quitar.',
    },
    {
      termino: 'Biometría',
      significado:
        'Estudio mensurativo o estadístico de los fenómenos o procesos biológicos.',
    },
    {
      termino: 'Fotograbado',
      significado:
        'Procedimiento de grabar un cliché fotográfico sobre planchas de cinc, cobre, etc. ',
    },
    {
      termino: 'Viruta',
      significado:
        'Hoja delgada que se saca con el cepillo u otras herramientas al labrar la madera o los metales, y que sale, por lo común, arrollada en espiral.',
    },
    {
      termino: 'Mecanizado',
      significado: 'Proceso de elaboración mecánica.',
    },
  ],
  referencias: [
    {
      referencia:
        'NTE Electronics, INC(2005). Manual de reemplazos. 14th edición, ',
      link: 'https://www.nteinc.com/',
    },
    {
      referencia: 'RAE. (2020) <em>Real academia de la Lengua Española.</em> ',
      link: 'https://dle.rae.es/software',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gewin Alfonso Fernández Cáceres ',
          cargo: 'Instructor',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Miroslava González Hernández ',
          cargo: 'Diseñador y Evaluador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Sergio Ausguto Ardila Ortix',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Carolina Coca Salazar ',
          cargo: 'Revisora Metodológica y Pedagógica ',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda ',
          cargo: 'Revisión y Corrección de Estilo',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesora Metodológiva',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
