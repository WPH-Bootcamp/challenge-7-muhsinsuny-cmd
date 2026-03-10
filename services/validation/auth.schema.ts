import { z } from 'zod';

export const registerSchema = z
  .object({
    name: z.string().min(1, 'Nama wajib diisi'),
    email: z.string().email('Email tidak valid'),
    phone: z.string().min(10, 'Nomor tidak valid'),
    password: z.string().min(6, 'Password minimal 6 karakter'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password tidak sama',
    path: ['confirmPassword'],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email('Email tidak valid'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
  remember: z.boolean().optional(),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const forgotPasswordSchema = z.object({
  email: z.string().email('Email tidak valid'),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z.object({
  password: z.string().min(6, 'Password minimal 6 karakter'),
  confirmPassword: z.string(),
});

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

export const changePasswordSchema = z.object({
  oldPassword: z.string().min(6, 'Password minimal 6 karakter'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
  confirmPassword: z.string(),
});

export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;
export const updateProfileSchema = z.object({
  name: z.string().min(1, 'Nama wajib diisi'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().min(10, 'Nomor tidak valid'),
});

export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>;

export const updatePasswordSchema = z.object({
  password: z.string().min(6, 'Password minimal 6 karakter'),
  confirmPassword: z.string(),
});

export type UpdatePasswordSchema = z.infer<typeof updatePasswordSchema>;
