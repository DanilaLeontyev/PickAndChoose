import { Args, ID, Query, Resolver } from "@nestjs/graphql";
import { Paginated } from "src/generics/paginated";
import { User } from "./user.model";
import { UserConnection } from "./user-connection.model";
import { UserService } from "./user.service";

@Resolver(of => User)
export class UserResolver {
  constructor(
    private userService: UserService,
  ) {

  }

  @Query(returns => User)
  async user(
    @Args('id', { type: () => ID })
    id: string
  ): Promise<User | null> {
    return this.userService.findOne(id).then(
      ({
        id,
        age,
        email,
        first_name,
        last_name
      }) => ({
        id,
        age,
        email,
        firstName: first_name,
        lastName: last_name
      }));
  }

  @Query(returns => UserConnection)
  async users(): Promise<UserConnection> {
    return this.userService.findAll().then((users) => {
      const usersMapToModel: User[] = users.map((
        {
          id,
          age,
          email,
          first_name,
          last_name
        }
      ) => ({
        id,
        age,
        email,
        firstName: first_name,
        lastName: last_name,
      }));
      return {
        edges: usersMapToModel.map((u) => ({
          cursor: u.id,
          node: u,
        })),
        totalCount: users.length,
        nodes: usersMapToModel,
        hasNextPage: true,
      }
    })
  }
}