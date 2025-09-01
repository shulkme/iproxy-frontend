import request from '@/apis/request';
import { HttpResponse } from '@/apis/types';
import {
  ChangePasswordData,
  ResetPasswordData,
  UserData,
  UserRecord,
} from '@/apis/user/types';

export async function getUserProfile(): Promise<HttpResponse<UserRecord>> {
  return await request.get('/sys/users/me');
}

export async function registerUser(data: UserData) {
  return await request.post('/sys/users/register', data);
}

export async function changePassword(data: ChangePasswordData) {
  return await request.put('/sys/users/password', data);
}

export async function resetPassword(data: ResetPasswordData) {
  return await request.post('/sys/users/reset-forgot-password', data);
}
