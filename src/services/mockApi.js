const users = [
    { 
        id: 1, 
        name: "Recursos Humanos", 
        message: "Por favor guardar todos los cv",
        email: "rrhh@empresa.com",      // <--- Agregado
        password: "admin.rrhh"          // <--- Agregado
    },
    { 
        id: 2, 
        name: "Ventas", 
        message: "Esperame afuera...",
        email: "ventas@empresa.com",
        password: "ventas.2026"
    },
    { 
        id: 3, 
        name: "Lilian Omentari", 
        message: "La presentacion ha estado..",
        email: "lilian.o@mail.com",
        password: "lilian.dev"
    },
    { 
        id: 4, 
        name: "Nelson Juarez", 
        message: "Quien esta reunido...",
        email: "nelson.j@mail.com",
        password: "nelson.pass"
    },
    { 
        id: 5, 
        name: "Teresa Amoblamientos", 
        message: "Esperando la respuesta",
        email: "teresa.a@mail.com",
        password: "teresa.admin"
    },
    { 
        id: 6, 
        name: "Miguel Angel", 
        message: "Cristian volverá desde",
        email: "m.angel@mail.com",
        password: "miguel.pass"
    },
    { 
        id: 7, 
        name: "Pablo Trataglia", 
        message: "Los casos tiene un nuevo",
        email: "pablo.t@mail.com",
        password: "pablo.dev"
    },
    { 
        id: 8, 
        name: "Ricardo Garcia", 
        message: "En un momento tengo que",
        email: "ricardo.g@mail.com",
        password: "ricardo.pass"
    },
];

const messages = [
    { id: 1, author: "Recursos Humanos", text: "A que hora empieza la reunion?", time: "12:00 pm" },
    { id: 2, author: "Sandra Garcia", receiver: "Recursos Humanos", text: "Faltan sillas", time: "14:19 pm" },
    { id: 3, author: "Ventas", text: "Ya llegaron los invitados", time: "13:58 pm" },
    { id: 4, author: "Sandra Garcia", receiver: "Ventas", text: "Voy en 5 minutos", time: "14:05 pm" },
];

export { users, messages }