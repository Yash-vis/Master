"use client";
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const Login = () => {
  const { data: session, status } = useSession();

  return (
    <span className="bg-green-700 rounded-full inline-flex items-center justify-center p-4">
    {status === "authenticated" ? (
      <>
        <p className="text-white mr-4">
          Signed in as {session?.user?.name || session?.user?.email}
        </p>
        <button
          className="px-4 py-2 text-sm md:text-base bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          Sign Out
        </button>
      </>
    ) : status === "loading" ? (
      <span className="px-4 py-2 text-sm md:text-base text-white">Loading...</span>
    ) : (
      <button
        className="px-4 py-2 text-sm md:text-base bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    )}
  </span>
  
  );
};

export default Login;
