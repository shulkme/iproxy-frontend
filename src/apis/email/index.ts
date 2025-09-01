import { SendEmailCodeData } from '@/apis/email/types';
import request from '@/apis/request';

export async function getEmailCode(data: SendEmailCodeData) {
  return await request.post('/sys/email/code', data);
}
