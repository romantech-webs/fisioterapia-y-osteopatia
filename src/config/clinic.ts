export const clinic = {
  name: "Fisioterapia y Osteopatia Rodríguez Pardo",
  logo: "/images/logo.png",
  tagline: "Tu recuperación en manos expertas en Asturias",
  description: "Fisioterapia y Osteopatía Rodríguez Pardo es tu centro de referencia en Asturias con más de 10 años de experiencia. Tres hermanos fisioterapeutas especializados en tratamiento manual avanzado, fisioterapia deportiva y osteopatía. Con 5 estrellas en Google y 25 reseñas, ofrecemos un servicio profesional donde combinamos técnicas manuales expertas con tecnología de última generación. Ubicados en los bajos del gimnasio Go Fit con parking disponible.",
  colors: {
    primary: "#2563EB",
    secondary: "#1E293B",
    accent: "#06B6D4",
    neutral: "#F8FAFC"
  },
  phone: "984 18 66 95",
  whatsapp: "+34984186695",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "C. Álvaro Flórez Estrada, nº 24, 33006 Oviedo, Asturias, España",
    city: "Asturias",
    province: "Álava",
    postalCode: "33006",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=900424019404545507&g_mp=Cilnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaE5lYXJieRACGAQgAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Fisioterapia%20y%20Osteopatia%20Rodr%C3%ADguez%20Pardo%20%4043.3567%2C-5.86236&z=16&output=embed",
  coordinates: {
    lat: 43.3567,
    lng: -5.86236
  },
  schedule: [
    {
      days: "lunes",
      hours: "16:00–20:00"
    },
    {
      days: "martes - viernes",
      hours: "10:00–20:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 25,
    url: "https://maps.google.com/?cid=900424019404545507&g_mp=Cilnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaE5lYXJieRACGAQgAA",
    featured: [
      {
        author: "alejandro vazquez alvarez",
        rating: 5,
        text: "Últimamente he ido a su nuevo centro que está muy bien, está en los bajos del gimnasio go fit y está genial para aparcar si vas al.fisio porque te dejan entrar al parking. Pero antes iba a su centro de la calle Álvaro Flórez Estrada y en los dos sitios me atienden genial. Son 3 hermanos fisioterapeutas 2 chicas y un chico y trabajan muy bien tanto con las manos como con las maquinas. Buenos precios y buen servicio. Totalmente recomendable",
        date: "Hace un año"
      },
      {
        author: "Diana Baquerizo",
        rating: 5,
        text: "Muy satisfecha con mi experiencia. Han sido muy profesionales e incluso me dieron varios consejos para recuperarme más rápido, no en cualquier negocio te tienen así en cuenta.\nEl trato del personal te ayuda a estar cómoda en todo momento, además siempre con buena cara y una personalidad positiva te ayuda a pasar  la consulta de la forma más divertida. Muchas gracias por la atención.",
        date: "Hace 3 años"
      },
      {
        author: "Andoni",
        rating: 5,
        text: "Fui a traves de un amigo, no podia ni moverme casi, y vaya cambio. Unos profesionales como la copa de un pino, no solo por el trato y por el tratamiento sino porque ademas te aconsejan y explican maneras para evitar que se repita. Siempre fui un poco esceptico con respecto a los fisios y ahora no creo que lo deje.",
        date: "Hace 6 años"
      },
      {
        author: "marcos Marc",
        rating: 5,
        text: "Son más de 10 años pasando por este centro con unos resultados impresionantes, tienen un gran conocimiento que comparten contigo para que conozcas tu cuerpo y a ti mismo, una manipulación efectiva y a fondo, sientes una entrega máxima cada vez que vas y eso marca la diferencia.",
        date: "Hace 1 mes"
      },
      {
        author: "Felix de Uña Bedoya",
        rating: 5,
        text: "Tanto yo, como mi mujer, hemos ido ya en varias ocasiones y la verdad es que nos dejan perfectos incluso en una sesión. Manos top!",
        date: "Hace 1 mes"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual Avanzada",
      description: "Nuestra especialidad estrella. Técnicas manuales expertas aplicadas por tres fisioterapeutas con más de 10 años de experiencia. Tratamiento profundo y efectivo que muchos de nuestros pacientes describen como 'manos top'. Ideal para dolores crónicos, contracturas y problemas de movilidad que no han respondido a otros tratamientos.",
      benefits: [
        "Resultados visibles desde la primera sesión",
        "Manipulación efectiva y a fondo personalizada",
        "Recuperación completa incluso en casos complejos"
      ],
      icon: "Hand"
    },
    {
      id: "osteopatia",
      name: "Osteopatía",
      description: "Tratamiento osteopático integral que aborda el origen de tu dolencia. Combinamos técnicas estructurales, viscerales y craneales para restaurar el equilibrio de tu cuerpo. Nuestro enfoque osteopático te ayuda a conocer tu cuerpo y comprender las causas de tus molestias para prevenir recaídas.",
      benefits: [
        "Visión global del cuerpo y sus disfunciones",
        "Tratamiento de la causa, no solo del síntoma",
        "Prevención efectiva de futuras lesiones"
      ],
      icon: "Activity"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Recuperación especializada para deportistas de todos los niveles. Tratamos lesiones deportivas con técnicas avanzadas y te ayudamos a volver a tu actividad en el menor tiempo posible. Te enseñamos ejercicios y pautas específicas para evitar que la lesión se repita.",
      benefits: [
        "Vuelta rápida y segura a tu deporte",
        "Prevención de recaídas con consejos personalizados",
        "Mejora del rendimiento deportivo"
      ],
      icon: "Dumbbell"
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación Personalizada",
      description: "Programas de rehabilitación diseñados específicamente para tu caso. Te acompañamos en todo el proceso de recuperación con seguimiento continuo hasta que recuperes completamente tu funcionalidad. Incluye educación sobre tu lesión y ejercicios adaptados a tu evolución.",
      benefits: [
        "Seguimiento continuo de tu evolución",
        "Ejercicios progresivos adaptados a ti",
        "Consejos para acelerar tu recuperación"
      ],
      icon: "Target"
    },
    {
      id: "electroterapia",
      name: "Electroterapia y Tecnología Avanzada",
      description: "Complementamos nuestro tratamiento manual con tecnología de última generación. Utilizamos equipos avanzados de electroterapia para acelerar la recuperación, reducir la inflamación y aliviar el dolor. La combinación perfecta entre manos expertas y tecnología moderna.",
      benefits: [
        "Aceleración del proceso de curación",
        "Reducción efectiva del dolor y la inflamación",
        "Resultados potenciados con tecnología avanzada"
      ],
      icon: "Zap"
    },
    {
      id: "tratamiento-dolor-cronico",
      name: "Tratamiento del Dolor Crónico",
      description: "Especialistas en resolver casos complejos de dolor crónico que no han mejorado con otros tratamientos. Nuestros pacientes llegan sin apenas poder moverse y experimentan cambios significativos. Identificamos el origen del problema y aplicamos las técnicas más efectivas para eliminarlo.",
      benefits: [
        "Soluciones para dolores persistentes",
        "Enfoque integral del problema",
        "Mejora notable incluso en casos difíciles"
      ],
      icon: "Heart"
    },
    {
      id: "valoracion-personalizada",
      name: "Valoración y Diagnóstico",
      description: "Evaluación exhaustiva de tu estado físico en la primera consulta. Te explicamos detalladamente qué te ocurre, por qué y cómo vamos a tratarlo. Compartimos nuestro conocimiento contigo para que conozcas tu cuerpo y entiendas tu proceso de recuperación.",
      benefits: [
        "Diagnóstico preciso de tu problema",
        "Explicación clara y comprensible",
        "Plan de tratamiento personalizado"
      ],
      icon: "Activity"
    },
    {
      id: "prevencion-lesiones",
      name: "Prevención y Asesoramiento",
      description: "No solo te tratamos, te enseñamos. Te damos consejos prácticos y ejercicios para evitar que tu lesión se repita. Nuestro objetivo es que entiendas tu cuerpo y sepas cuidarlo para mantener los resultados a largo plazo.",
      benefits: [
        "Consejos personalizados para tu caso",
        "Ejercicios preventivos específicos",
        "Conocimiento para cuidar tu salud"
      ],
      icon: "Target"
    }
  ],
  process: [
    {
      step: 1,
      title: "Solicita tu Cita",
      description: "Llámanos al 984 18 66 95 o contacta por WhatsApp. Te ofrecemos facilidades de parking en nuestro centro ubicado en los bajos del gimnasio Go Fit. Horarios flexibles para adaptarnos a tu disponibilidad."
    },
    {
      step: 2,
      title: "Valoración Completa",
      description: "En tu primera visita realizamos una evaluación exhaustiva de tu problema. Te explicamos con detalle qué te ocurre, por qué y cómo vamos a abordarlo. Diseñamos un plan de tratamiento personalizado y compartimos contigo el conocimiento sobre tu lesión."
    },
    {
      step: 3,
      title: "Tratamiento Experto",
      description: "Aplicamos las técnicas manuales y tecnológicas más adecuadas para tu caso. Nuestros tres fisioterapeutas trabajan con entrega máxima para lograr resultados desde la primera sesión. Combinamos manipulación experta con equipos avanzados para potenciar tu recuperación."
    },
    {
      step: 4,
      title: "Recuperación y Prevención",
      description: "Seguimiento continuo hasta tu completa recuperación. Te enseñamos ejercicios y consejos específicos para evitar recaídas. No solo te dejamos perfecto, te ayudamos a que sigas estándolo con pautas personalizadas para tu día a día."
    }
  ],
  whyUs: [
    {
      title: "5 Estrellas en Google con 25 Reseñas",
      description: "Nuestros pacientes avalan nuestro trabajo con una valoración perfecta de 5 estrellas. Destacan nuestros resultados desde la primera sesión, el trato profesional y cercano, y nuestra capacidad para resolver casos complejos. La confianza de quienes ya nos han elegido es nuestra mejor carta de presentación.",
      icon: "Heart"
    },
    {
      title: "Más de 10 Años de Experiencia",
      description: "Tres hermanos fisioterapeutas con más de una década trabajando juntos. Nuestra experiencia nos permite abordar desde lesiones deportivas hasta dolores crónicos complejos con resultados impresionantes. Pacientes que nos acompañan desde hace más de 10 años confirman la calidad y consistencia de nuestro servicio.",
      icon: "Target"
    },
    {
      title: "Manos Expertas y Tecnología Avanzada",
      description: "Nuestros pacientes destacan especialmente nuestra habilidad manual, con manipulaciones efectivas y profundas que marcan la diferencia. Combinamos estas técnicas manuales expertas con equipos tecnológicos modernos para potenciar tu recuperación. La mezcla perfecta entre experiencia humana y tecnología de vanguardia.",
      icon: "Hand"
    },
    {
      title: "Te Educamos para Prevenir Recaídas",
      description: "No solo te tratamos, te enseñamos. Compartimos nuestro conocimiento contigo para que conozcas tu cuerpo y entiendas qué te ocurre. Te damos consejos prácticos, ejercicios específicos y pautas personalizadas para evitar que tu problema se repita. Tu recuperación duradera es nuestro objetivo.",
      icon: "Activity"
    }
  ],
  team: [
    {
      name: "Equipo de Fisioterapia y Osteopatia Rodríguez Pardo",
      role: "Fisioterapeutas Colegiados",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Fisioterapia y Osteopatia Rodríguez Pardo nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "Fisioterapia y Osteopatia Rodríguez Pardo - Imagen 1"
    },
    {
      src: "/images/hero.webp",
      alt: "Fisioterapia y Osteopatia Rodríguez Pardo - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Fisioterapia y Osteopatia Rodríguez Pardo - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Fisioterapia y Osteopatia Rodríguez Pardo - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "Fisioterapia y Osteopatia Rodríguez Pardo - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "Fisioterapia y Osteopatia Rodríguez Pardo - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "Fisioterapia y Osteopatia Rodríguez Pardo - Imagen 7"
    }
  ],
  faq: [
    {
      question: "¿Cuántas sesiones necesitaré para recuperarme?",
      answer: "En Fisioterapia y Osteopatía Rodríguez Pardo muchos de nuestros pacientes experimentan mejoras significativas desde la primera sesión, e incluso algunos quedan perfectos en una sola visita. Sin embargo, el número de sesiones depende de tu caso particular, el tiempo de evolución de la lesión y tu capacidad de recuperación. Durante la valoración inicial te explicaremos con detalle cuántas sesiones estimamos necesarias y te daremos consejos para acelerar tu recuperación."
    },
    {
      question: "¿Dónde están ubicados y hay facilidades de parking?",
      answer: "Nuestro centro está ubicado en los bajos del gimnasio Go Fit en Asturias, con excelentes facilidades de parking para nuestros pacientes. Puedes acceder al parking del gimnasio cuando vienes al fisioterapeuta, lo que hace muy cómodo tu visita. Anteriormente estábamos en la calle Álvaro Flórez Estrada, pero ahora disfrutamos de unas instalaciones más amplias y modernas con mejor acceso."
    },
    {
      question: "¿Qué diferencia a Fisioterapia y Osteopatía Rodríguez Pardo de otros centros?",
      answer: "Somos tres hermanos fisioterapeutas con más de 10 años de experiencia trabajando juntos. Nuestros pacientes destacan nuestra manipulación efectiva y profunda, el trato cercano y profesional, y nuestra capacidad para resolver casos complejos que no han mejorado en otros sitios. Contamos con 5 estrellas en Google con 25 reseñas que avalan nuestro trabajo. Además, no solo te tratamos: te explicamos, aconsejamos y enseñamos para que conozcas tu cuerpo y evites futuras lesiones."
    },
    {
      question: "¿Tratáis lesiones deportivas y dolores crónicos?",
      answer: "Sí, somos especialistas tanto en fisioterapia deportiva como en el tratamiento de dolores crónicos complejos. Hemos ayudado a pacientes que llegaban sin apenas poder moverse y han experimentado cambios notables. Combinamos técnicas manuales avanzadas con tecnología moderna para abordar tanto lesiones agudas deportivas como problemas persistentes que no han respondido a otros tratamientos. Te damos además pautas específicas para prevenir recaídas."
    },
    {
      question: "¿Qué técnicas utilizáis en los tratamientos?",
      answer: "En Fisioterapia y Osteopatía Rodríguez Pardo combinamos lo mejor de ambos mundos: técnicas manuales expertas con tecnología avanzada. Aplicamos terapia manual especializada, osteopatía, manipulaciones articulares y tratamientos con equipos modernos de electroterapia. Nuestros pacientes destacan especialmente nuestra habilidad manual, describiéndonos como profesionales con 'manos top'. Cada tratamiento es personalizado según tu caso específico."
    },
    {
      question: "¿Cómo es el trato en la clínica?",
      answer: "Nuestros pacientes destacan constantemente nuestro trato cercano, profesional y positivo. Creemos que un ambiente cómodo y una actitud positiva son fundamentales para tu recuperación. Te explicamos todo con claridad, te escuchamos y te hacemos partícipe de tu tratamiento. Muchos pacientes comentan que las sesiones pasan de forma amena y que se sienten cuidados en todo momento, con una entrega máxima en cada visita."
    },
    {
      question: "¿Cuál es el precio de las sesiones?",
      answer: "Ofrecemos precios competitivos y un excelente servicio, como destacan nuestros pacientes en sus reseñas. El precio puede variar según el tipo de tratamiento y la duración de la sesión. Te recomendamos llamarnos al 984 18 66 95 para informarte sobre las tarifas específicas y cualquier promoción disponible. Lo que sí te garantizamos es una relación calidad-precio excepcional respaldada por más de 10 años de experiencia."
    },
    {
      question: "¿Puedo ir aunque sea escéptico con la fisioterapia?",
      answer: "¡Por supuesto! De hecho, varios de nuestros pacientes llegaron siendo escépticos y ahora son clientes habituales. Entendemos que puedas tener dudas, especialmente si has tenido malas experiencias previas. En Fisioterapia y Osteopatía Rodríguez Pardo nos tomamos el tiempo de explicarte exactamente qué hacemos y por qué funciona. Los resultados hablan por sí solos, y nuestra valoración de 5 estrellas refleja la satisfacción de quienes confiaron en nosotros."
    }
  ],
  seo: {
    titleTemplate: "%s | Fisioterapia y Osteopatia Rodríguez Pardo",
    defaultTitle: "Fisioterapia y Osteopatía Rodríguez Pardo | Asturias",
    defaultDescription: "Fisioterapia y Osteopatía en Asturias con 5★ en Google. Más de 10 años de experiencia en terapia manual, fisioterapia deportiva y rehabilitación. Pide cita: 984 18 66 95",
    keywords: [
      "fisioterapia Asturias",
      "osteopatía Asturias",
      "Fisioterapia y Osteopatia Rodríguez Pardo",
      "fisioterapeuta Asturias",
      "fisioterapia manual Asturias",
      "fisioterapia deportiva Asturias",
      "rehabilitación Asturias",
      "dolor crónico Asturias",
      "tratamiento lesiones Asturias",
      "fisio Go Fit Asturias",
      "mejor fisioterapeuta Asturias",
      "osteopata Asturias"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Fisioterapia y Osteopatia Rodríguez Pardo",
    cif: "",
    registeredAddress: "C. Álvaro Flórez Estrada, nº 24, 33006 Oviedo, Asturias, España, Asturias, Álava"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Asturias"
  ],
  heroDescription: "En Fisioterapia y Osteopatía Rodríguez Pardo te ofrecemos más de una década de experiencia con un equipo de tres hermanos fisioterapeutas altamente cualificados. Combinamos tratamiento manual experto con tecnología avanzada para lograr resultados desde la primera sesión. Nuestros pacientes destacan nuestra capacidad para resolver incluso los casos más complejos, con un trato cercano y profesional que marca la diferencia.",
  specialty: "Terapia Manual Avanzada",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para recuperar tu bienestar?",
  ctaDescription: "Solicita tu cita en Fisioterapia y Osteopatía Rodríguez Pardo. Te atenderemos con la profesionalidad y el trato cercano que nos caracteriza. Parking disponible para tu comodidad.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
