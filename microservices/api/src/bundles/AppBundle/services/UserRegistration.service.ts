import {
  Service,
  Inject,
  EventManager,
  ContainerInstance,
} from "@bluelibs/core";
import { PermissionService } from "@bluelibs/security-bundle";
import { XPasswordService } from "@bluelibs/x-password-bundle";
import { UserRegisterInput } from "./inputs";

@Service()
export class UserRegistrationService {
  constructor(protected readonly container: ContainerInstance) {}

  public async register(input: UserRegisterInput) {
    const passwordService = this.container.get(XPasswordService);
    const permissionService = this.container.get(PermissionService);

    const { userId } = await passwordService.register(input);

    await permissionService.add({
      userId,
      permission: "USER",
      domain: "app",
    });

    // any other logic
  }
}
