"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { signIn, signOut, useSession } from "next-auth/react";

const HeroSection = () => {
  const { data: session, status } = useSession();

  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="lightblue" />
      {status === "authenticated" && (
        <div className="absolute top-4 right-4 text-xs text-neutral-500">
          @{session?.user?.name}
        </div>
      )}
      <div className="p-4 relative z-15 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-neutral-700">
          Master art of English
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Unlock your potential with our English classes, where learning meets
          opportunity. Whether you're looking to sharpen your communication skills, ace interviews, or connect confidently on a global scale, our tailored courses ensure you master the language step by step. Join us to transform your fluency, boost your confidence, and open doors to a brighter future.
        </p>

        <div className="mt-4">
          {status === "authenticated" ? (
            <Button
              onClick={() => signOut({ callbackUrl: "/" }).catch((error) => console.error("Sign-out error:", error))}
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Unsubscribe
            </Button>
          ) : (
            <Button
              onClick={() => signIn().catch((error) => console.error("Sign-in error:", error))}
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Subscribe
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
