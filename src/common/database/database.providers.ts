import { Provider } from '@nestjs/common';
import { getConfig } from 'src/utils';
import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from 'src/user/user.entity';
const MYSQL_CONFIG: DataSourceOptions = {
  ...getConfig().MYSQL_CONFIG,
  type: 'mysql',
  entities: [User],
  synchronize: true,
};

const MYSQL_DATA_SOURCE = new DataSource(MYSQL_CONFIG);

export const DatabaseProviders: Provider[] = [
  {
    provide: 'MYSQL_DATA_SOURCE',
    useFactory: async () => {
      await MYSQL_DATA_SOURCE.initialize();
      return MYSQL_DATA_SOURCE;
    },
  },
];
