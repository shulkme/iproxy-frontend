export interface UserRecord {
  username: string;
  nickname: string;
  email: string;
  avatar: string;
  id: number;
  uuid: string;
  status: number;
}

export interface UserData {
  email: string;
  email_code: string;
  password: string;
}

export interface ChangePasswordData {
  old_password: string;
  new_password: string;
  confirm_password: string;
}

export interface ResetPasswordData {
  email: string;
  code: string;
  new_password: string;
  confirm_password: string;
}
