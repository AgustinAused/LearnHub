const coursesData = [
    {
        id: 1,
        title: "Curso de Desarrollo Web",
        responsable: {
            nombre: "Juan Pérez",
            experiencia: "Experto en desarrollo web con más de 10 años de experiencia."
        },
        description: "Aprende a crear sitios web modernos utilizando las últimas tecnologías web.",
        duracion: "8 semanas",
        frecuencia: "2 clases por semana",
        price: "199",
        comentarios: [
            {
                id: 1,
                autor: "María Rodríguez",
                comentario: "¡Excelente curso! Aprendí mucho y los materiales son muy útiles.",
            },
            {
                id: 2,
                autor: "Carlos López",
                comentario: "El profesor es muy claro en sus explicaciones. Lo recomiendo.",
            },
        ],
    },
    {
        id: 2,
        title: "Curso de Marketing Digital",
        responsable: {
            nombre: "Ana García",
            experiencia: "Especialista en marketing digital con amplia trayectoria en publicidad en línea."
        },
        description: "Descubre las estrategias efectivas para promocionar productos y servicios en internet.",
        duracion: "6 semanas",
        frecuencia: "3 clases por semana",
        price: "149",
        comentarios: [
            {
                id: 1,
                autor: "Pedro Martínez",
                comentario: "Muy informativo. Me ayudó a mejorar mi estrategia de marketing.",
            },
            {
                id: 2,
                autor: "Laura Sánchez",
                comentario: "El material complementario es excelente. ¡Valió la pena!",
            },
        ],
    },
    {
        id: 3,
        title: "Curso de Programación en Python",
        responsable: {
            nombre: "Laura Fernández",
            experiencia: "Desarrolladora Python con 8 años de experiencia."
        },
        description: "Aprende a programar en Python desde cero y construye aplicaciones prácticas.",
        duracion: "10 semanas",
        frecuencia: "1 clase por semana",
        price: "249",
        comentarios: [
            {
                id: 1,
                autor: "Carlos Pérez",
                comentario: "Muy buen curso para principiantes. Lo recomiendo.",
            },
            {
                id: 2,
                autor: "Sofía Gómez",
                comentario: "El contenido es completo y fácil de entender.",
            },
        ],
    },
    {
        id: 4,
        title: "Curso de Diseño Gráfico",
        responsable: {
            nombre: "David Ruiz",
            experiencia: "Diseñador gráfico profesional con amplia experiencia en diseño creativo."
        },
        description: "Domina las herramientas de diseño y crea gráficos impresionantes.",
        duracion: "12 semanas",
        frecuencia: "2 clases por semana",
        price: "299",
        comentarios: [
            {
                id: 1,
                autor: "Elena Martínez",
                comentario: "El instructor es un experto en diseño. Aprendí mucho.",
            },
            {
                id: 2,
                autor: "Javier López",
                comentario: "Los proyectos prácticos son geniales. ¡Lo disfruté mucho!",
            },
        ],
    },
    {
        id: 5,
        title: "Curso de Marketing de Redes Sociales",
        responsable: {
            nombre: "María Rodríguez",
            experiencia: "Especialista en redes sociales y estrategias de marketing en línea."
        },
        description: "Aprende a utilizar las redes sociales para promocionar tu negocio o marca personal.",
        duracion: "8 semanas",
        frecuencia: "3 clases por semana",
        price: "199",
        comentarios: [
            {
                id: 1,
                autor: "Lucía Pérez",
                comentario: "Me ayudó a mejorar mi presencia en redes sociales. Recomendado.",
            },
            {
                id: 2,
                autor: "Daniel Sánchez",
                comentario: "El material es actual y útil para cualquier emprendedor.",
            },
        ],
    },
    {
        id: 6,
        title: "Curso de Desarrollo de Aplicaciones Móviles",
        responsable: {
            nombre: "Alejandro Torres",
            experiencia: "Desarrollador de aplicaciones móviles con 7 años de experiencia."
        },
        description: "Crea tus propias aplicaciones móviles para Android e iOS.",
        duracion: "10 semanas",
        frecuencia: "2 clases por semana",
        price: "249",
        comentarios: [
            {
                id: 1,
                autor: "Andrea Martínez",
                comentario: "El curso me ayudó a dar vida a mi idea de aplicación.",
            },
            {
                id: 2,
                autor: "Miguel López",
                comentario: "El instructor tiene un gran conocimiento. Lo recomiendo.",
            },
        ],
    },
    {
        id: 7,
        title: "Curso de Fotografía Digital",
        responsable: {
            nombre: "Isabel García",
            experiencia: "Fotógrafa profesional con experiencia en retratos y paisajes."
        },
        description: "Domina la fotografía digital y captura momentos increíbles.",
        duracion: "6 semanas",
        frecuencia: "1 clase por semana",
        price: "149",
        comentarios: [
            {
                id: 1,
                autor: "Juan Pérez",
                comentario: "Aprendí a tomar fotos asombrosas. Excelente curso.",
            },
            {
                id: 2,
                autor: "Lucía Rodríguez",
                comentario: "Me encantó la parte práctica del curso. ¡Muy recomendado!",
            },
        ],
    },
    {
        id: 8,
        title: "Curso de Marketing de Contenidos",
        responsable: {
            nombre: "Andrés Martínez",
            experiencia: "Experto en marketing de contenidos con experiencia en estrategias digitales."
        },
        description: "Crea contenido atractivo y efectivo para tus proyectos en línea.",
        duracion: "8 semanas",
        frecuencia: "2 clases por semana",
        price: "199",
        comentarios: [
            {
                id: 1,
                autor: "Sofía Pérez",
                comentario: "Este curso me ayudó a mejorar mis habilidades de escritura.",
            },
            {
                id: 2,
                autor: "Carlos Sánchez",
                comentario: "El instructor es un profesional en marketing. ¡Lo disfruté!",
            },
        ],
    },
    {
        id: 9,
        title: "Curso de Diseño de Interfaz de Usuario (UI)",
        responsable: {
            nombre: "Ana López",
            experiencia: "Diseñadora de UI/UX con experiencia en diseño de interfaces atractivas."
        },
        description: "Crea interfaces de usuario impactantes y amigables.",
        duracion: "10 semanas",
        frecuencia: "3 clases por semana",
        price: "249",
        comentarios: [
            {
                id: 1,
                autor: "Pedro García",
                comentario: "Aprendí mucho sobre diseño de interfaces. ¡Gran curso!",
            },
            {
                id: 2,
                autor: "Elena Sánchez",
                comentario: "Los proyectos prácticos son muy útiles para mejorar las habilidades.",
            },
        ],
    },
    {
        id: 10,
        title: "Curso de Inteligencia Artificial",
        responsable: {
            nombre: "Luis Rodríguez",
            experiencia: "Científico de datos con experiencia en IA y aprendizaje automático."
        },
        description: "Descubre el mundo de la inteligencia artificial y sus aplicaciones.",
        duracion: "12 semanas",
        frecuencia: "2 clases por semana",
        price: "299",
        comentarios: [
            {
                id: 1,
                autor: "María López",
                comentario: "El curso es desafiante pero muy gratificante. ¡Lo recomiendo!",
            },
            {
                id: 2,
                autor: "Carlos Pérez",
                comentario: "Aprendí mucho sobre IA. El instructor es experto en el tema.",
            },
        ],
    }
]

export default coursesData;