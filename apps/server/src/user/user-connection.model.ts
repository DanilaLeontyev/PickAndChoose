import { ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/generics/paginated';
import { User } from './user.model';

@ObjectType()
export class UserConnection extends Paginated(User) { }