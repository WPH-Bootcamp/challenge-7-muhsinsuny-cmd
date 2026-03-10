'use client';

import { api } from '@/services/api/axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import {
  registerSchema,
  RegisterSchema,
} from '@/services/validation/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthTabs } from './AuthTabs';

interface ErrorResponse {
  message: string;
}

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const onSubmit = async (data: RegisterSchema) => {
    setErrorMessage(null);
    if (data.password !== data.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      await api.post('/api/auth/register', {
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
      });
      console.log('Registration successful');
      router.push('/api/auth/login');
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError?.message) {
        console.error('Registration error:', axiosError.message);
      }
      setErrorMessage(
        (axiosError.response?.data as ErrorResponse)?.message ||
          'Registration failed. Please try again.'
      );
    }
  };

  return (
    <>
      <AuthTabs />
      <div>
        {errorMessage && (
          <div className='mb-4 text-sm text-red-600 bg-red-50 p-3 rounded'>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          <input
            {...register('name', { required: 'Nama wajib diisi' })}
            placeholder='Name'
            className='w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none'
          />

          <input
            {...register('email', { required: 'Email wajib diisi' })}
            type='email'
            placeholder='Email'
            className='w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none'
          />
          {errors.email && (
            <p className='text-xs text-red-600'>{errors.email.message}</p>
          )}

          <input
            {...register('phone', { required: 'Nomor telepon wajib diisi' })}
            type='tel'
            placeholder='Phone Number'
            className='w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none'
          />
          {errors.phone && (
            <p className='text-xs text-red-600'>{errors.phone.message}</p>
          )}

          <input
            {...register('password', { required: 'Password wajib diisi' })}
            type='password'
            placeholder='Password'
            className='w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none'
          />

          <input
            {...register('confirmPassword', {
              required: 'Konfirmasi password wajib diisi',
            })}
            type='password'
            placeholder='Confirm Password'
            className='w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none'
          />

          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-full font-medium transition'
          >
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </form>

        <p className='text-sm text-center mt-6'>
          Already have an account?{' '}
          <a href='/auth/login' className='text-red-600 font-medium'>
            Sign in
          </a>
        </p>
      </div>
    </>
  );
}
