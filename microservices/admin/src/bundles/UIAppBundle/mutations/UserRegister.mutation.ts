import gql from "graphql-tag";

export const USER_REGISTER = gql`
  mutation ($input: UserRegisterInput!) {
    UserRegister(input: $input)
  }
`;
