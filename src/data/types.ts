export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserRegisterData extends UserCredentials {
  email: string;
}
