export interface UserI {
  username: string;
  phone: string;
  email: string;
  fullname: string;
  image: string;
  birthday: string;
  job: string;
  gender: string;
  married: string;
  address: unknown[];
  billing: unknown[];
  admin: boolean;
}

export interface LoginResponse {
  token: string;
  user: UserI;
}

export interface AuthState {
  user: UserI | null;
  token: string | null;
  isFormLoading: boolean;
  showPassword: boolean;
  formError: string;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
  setShowPassword: (show: boolean) => void;
  setFormError: (error: string) => void;
}
