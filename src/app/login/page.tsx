import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { signIn, signOut, auth } from "@/auth";

export default async function LoginPage() {
  const session = await auth();
  console.log(session);
  return session?.user ? (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">SignOut</button>
      </form>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-[#D9D9D9]">
      <Card className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              className="w-full"
              required
            />
            <Input
              type="password"
              placeholder="Password"
              className="w-full"
              required
            />
            <Link href="/frontend/EventOrganizer/Profile">
              <Button
                className="mt-4 w-full bg-red-950 hover:bg-red-700"
                type="submit"
              >
                Login
              </Button>
            </Link>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-500">or</p>
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <Button
                className="w-full flex items-center justify-center gap-2 mt-2"
                variant="outline"
                type="submit"
              >
                <FcGoogle size={20} /> Sign in with Google
              </Button>
            </form>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              New user?{" "}
              <Link
                href="/frontend/Signup/EventOrganizer"
                className="text-blue-600 hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
