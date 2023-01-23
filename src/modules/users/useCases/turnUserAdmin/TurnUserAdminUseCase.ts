import { AppError } from "../../error/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[] | undefined;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User doesn't exist", 404);
    }

    const admin_user = this.usersRepository.turnAdmin(user);
    return admin_user;
  }
}

export { TurnUserAdminUseCase };
