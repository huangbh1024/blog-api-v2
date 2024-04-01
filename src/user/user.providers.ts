import { Provider } from '@nestjs/common';
import { User } from './user.entity';

export const UserProviders: Provider[] = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: async (AppDataSource) =>
      await AppDataSource.getRepository(User),
    inject: ['MYSQL_DATA_SOURCE'],
  },
];
