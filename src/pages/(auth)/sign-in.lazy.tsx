import type { z } from "zod";

import { useAuthActions } from "@convex-dev/auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createLazyRoute, Link, useNavigate } from "@tanstack/react-router";
import { FormProvider, useForm } from "react-hook-form";

import { AuthCardFooter } from "@/lib/components/auth/card-footer";
import { AuthCardHeader } from "@/lib/components/auth/card-header";
import { SignInForm } from "@/lib/components/auth/sign-in.form";
import {
  Card,
  CardContent,
} from "@/lib/components/ui/card";
// import { delay } from "@/lib/utils";
import { signInFormSchema } from "@/pages/(auth)/schema.js";

export const Route = createLazyRoute("/sign-in")({
  component: SignInPage,
});

export function SignInPage() {
  const navigate = useNavigate();
  const { signIn } = useAuthActions();

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
      flow: "signIn",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: z.infer<typeof signInFormSchema>) {
    try {
      await signIn("password", values);
      // This delay seems to be necessary to prevent the user
      // from being redirected before the sign-in is complete
      // await delay(1000);
      navigate({ to: `/protected-${Math.floor(Math.random() * (3) + 1).toString()}` });
    }
    catch (error) {
      console.error("Sign-in failed:", error);
    }
  }

  return (
    <div className="flex flex-col gap-6 mx-auto mt-2 md:mt-12 mb-12 w-full max-w-sm">
      <Link to="/" className="flex items-center self-center gap-2 font-medium text-xl">
        CONVEX AUTH
      </Link>
      <div className="flex flex-col gap-6">
        <Card>
          <AuthCardHeader
            title="Welcome back"
            description="Sign in or create an account"
          />
          <CardContent>
            <FormProvider {...form}>
              <SignInForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
            </FormProvider>
          </CardContent>
          <AuthCardFooter
            message="Don't have an account?"
            linkTitle="Sign up"
            linkHref="/sign-up"
          />
        </Card>
      </div>
    </div>
  );
}
