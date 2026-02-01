import { NextResponse } from 'next/server';
import { api } from '@/services/api/axios';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // 1️⃣ Validasi sederhana
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email dan password wajib diisi' },
        { status: 400 }
      );
    }

    const res = await fetch(`${api}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { message: data.message ?? 'Login gagal' },
        { status: res.status }
      );
    }

    // 3️⃣ Kembalikan data user ke frontend
    return NextResponse.json({
      user: {
        name: data.user.name,
        avatarUrl: data.user.avatar,
      },
      token: data.token,
    });
  } catch {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
