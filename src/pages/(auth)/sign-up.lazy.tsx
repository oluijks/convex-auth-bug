import type { z } from "zod";

import { useAuthActions } from "@convex-dev/auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createLazyRoute, Link, useNavigate } from "@tanstack/react-router";
import { FormProvider, useForm } from "react-hook-form";

import { AuthCardFooter } from "@/lib/components/auth/card-footer";
import { AuthCardHeader } from "@/lib/components/auth/card-header";
import { SignUpForm } from "@/lib/components/auth/sign-up.form";
import {
  Card,
  CardContent,
} from "@/lib/components/ui/card";
// import { delay } from "@/lib/utils";
import { signUpFormSchema } from "@/pages/(auth)/schema.js";

export const Route = createLazyRoute("/sign-up")({
  component: SignUpPage,
});

export function SignUpPage() {
  const navigate = useNavigate();
  const { signIn } = useAuthActions();

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      isSiteAdmin: false,
      flow: "signUp",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    try {
      await signIn("password", values);
      // This delay seems to be necessary to prevent the user
      // from being redirected before the sign-in is complete
      // await delay(1000);
      navigate({ to: `/protected-${Math.floor(Math.random() * (3) + 1).toString()}` });
    }
    catch (error) {
      console.error("Sign-up error:", error);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-6 mx-auto mt-1 md:mt-12 mb-12 w-full max-w-sm">
        <Link to="/" className="flex items-center self-center gap-2 font-medium text-xl">
          CONVEX AUTH
        </Link>
        <div className="flex flex-col gap-6">
          <Card>
            <AuthCardHeader
              title="Welcome"
              description="Sign up or login to your account"
            />
            <CardContent>
              <FormProvider {...form}>
                <SignUpForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
              </FormProvider>
            </CardContent>
            <AuthCardFooter
              message="Already have an account?"
              linkTitle="Sign in"
              linkHref="/sign-in"
            />
          </Card>
        </div>
      </div>
    </>
  );
}
