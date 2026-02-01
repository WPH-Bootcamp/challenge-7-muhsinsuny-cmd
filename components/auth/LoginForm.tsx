'use client';

import { AuthTabs } from './AuthTabs';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchema } from '@/services/validation/auth.schema';
import { api } from '@/services/api/axios';
import { setToken } from '@/services/auth';
import { useAuth } from '../providers/AuthProvider';

interface Props {
  onSuccess?: () => void;
}

export default function LoginForm({ onSuccess }: Props) {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '', remember: false },
  });

  const onSubmit = async (data: LoginSchema) => {
    const res = await api.post('/api/auth/login', data);

    setToken(res.data.token, localStorage.getItem('remember') === 'on');
    login(res.data.user);

    onSuccess?.();
  };

  return (
    <>
      <AuthTabs />
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <input {...register('email')} placeholder='Email' className='input' />
        <p className='error'>{errors.email?.message}</p>

        <input
          type='password'
          {...register('password')}
          placeholder='Password'
          className='input'
        />
        <p className='error'>{errors.password?.message}</p>

        {/* Remember Me */}
        <div className='flex items-center justify-between text-sm'>
          <label className='flex items-center gap-2 cursor-pointer'>
            <input
              type='checkbox'
              {...register('remember')}
              className='accent-red-600'
            />
            Remember me
          </label>
          <a href='/auth/forgot-password' className='text-red-600'>
            Forgot Password?
          </a>
        </div>

        <button
          disabled={isSubmitting}
          className='btn-primary hover:cursor-pointer radius-full'
        >
          Sign In
        </button>
      </form>
    </>
  );
}
