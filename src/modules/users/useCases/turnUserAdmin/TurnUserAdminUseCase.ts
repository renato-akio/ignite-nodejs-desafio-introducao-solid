import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userAlreadyexists = this.usersRepository.findById(user_id);

    if (!userAlreadyexists) throw new Error("Mensagem do erro");

    const user = this.usersRepository.turnAdmin(userAlreadyexists);

    return user;
  }
}

export { TurnUserAdminUseCase };
