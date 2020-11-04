import { ConnectionOptions, createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: process.env.DATABASE_TYPE,
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      schema: process.env.DATABASE_SCHEMA,
      uuidExtension: process.env.DATABASE_UUID_EXTENSION,
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
      logging: 'all',
      logger: 'simple-console',
    } as ConnectionOptions),
  },
];
