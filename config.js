require("dotenv").config(); //no olvidar importar
const configs = {
  api: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || "http://localhost:3000",
    nodeEnv: process.env.NODE_ENV || "development",
    secretOrKey: process.env.JWT_SECRET,
  },
  db: {
    development: {
      //? Aqui deberan estar las configuraciones para la conexion con sequelize
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "moviejled-bd",
      define: {
        timestamps: true, //? Nos obliga a que todas las tablas tengan la propiedad createdAt y upadtedAt
        underscored: true,
        underscoredAll: true,
      },
    },
    production: {
      //? Aqui deberan estar las configuraciones para la conexion con sequelize
      dialect: "postgres",
      host: process.env.BD_HOST,
      port: process.env.BD_PORT,
      username: process.env.BD_USER,
      password: process.env.BD_PASSWORD,
      database: process.env.BD_NAME,
      define: {
        timestamps: true, //? Nos obliga a que todas las tablas tengan la propiedad createdAt y upadtedAt
        underscored: true,
        underscoredAll: true,
      },
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    },
    testing: {
      //? Aqui deberan estar las configuraciones para la conexion con sequelize
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "chat-db",
      define: {
        timestamps: true, //? Nos obliga a que todas las tablas tengan la propiedad createdAt y upadtedAt
        underscored: true,
        underscoredAll: true,
      },
    },
  },
};

module.exports = configs;
