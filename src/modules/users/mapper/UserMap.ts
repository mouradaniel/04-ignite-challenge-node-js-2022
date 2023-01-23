import { IUserResponseDTO } from "../dto/IUserResponseDTO";
import { User } from "../model/User";

class UserMap {
  static toDTO({ name, email, admin }: User): IUserResponseDTO {
    return { name, email, admin };
  }
}

export { UserMap };
