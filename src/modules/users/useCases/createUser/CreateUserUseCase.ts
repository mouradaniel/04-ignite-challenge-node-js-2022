import { User } from "modules/users/model/User";

import { AppError } from "../../error/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const user = {
      name,
      email,
    };

    const userAlreadyExist = this.usersRepository.findByEmail(email);

    if (userAlreadyExist) {
      throw new AppError("User already exist");
    }

    const createdUser = this.usersRepository.create(user);

    return createdUser;
  }
}

export { CreateUserUseCase };
