import { Icons } from "../icons";
import { ClientButton } from "./client-button";
import { ClientEmail } from "./client-email";
import { SignIn } from "./server-wrap";

export const AuthForm = () => {
  // TODO: best practice is to use a form
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        <div className="grid gap-6">
          <ClientEmail />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <SignIn provider="github">
            <ClientButton
              text="Github"
              icon={<Icons.github className="mr-2 h-4 w-4" />}
            />
          </SignIn>
          <SignIn provider="google">
            <ClientButton
              text="Google"
              icon={<Icons.google className="mr-2 h-4 w-4" />}
            />
          </SignIn>
        </div>
      </div>
    </div>
  );
};
