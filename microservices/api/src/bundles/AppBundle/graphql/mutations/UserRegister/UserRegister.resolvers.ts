import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";

import { UserRegisterInput } from "../../../services/inputs/UserRegister.input";
import { UserRegistrationService } from "../../../services/UserRegistration.service";

export default {
  Mutation: {
    UserRegister: [
      X.ToModel(UserRegisterInput),
      X.Validate(),
      X.ToService(UserRegistrationService, "register"),
    ],
  },
} as IResolverMap;
