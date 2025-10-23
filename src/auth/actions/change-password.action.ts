import { cloudShopApi } from '@/api/cloudShopApi';
import type { AuthResponse } from '../interfaces/auth.response';

export const changePasswordAction = async (
  newPassword: string,
): Promise<AuthResponse> => {
  try {
    const { data } = await cloudShopApi.post<AuthResponse>('/auth/change-password', {      
      newPassword,
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
