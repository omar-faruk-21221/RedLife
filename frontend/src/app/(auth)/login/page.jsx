"use client";
import { useRouter, useSearchParams } from "next/navigation";
import useAuth from "@/context/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import GoogleLogIn from "@/components/GoogleLogIn";
import Link from "next/link";

export default function LoginPage() {
  const { loginUser } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/"; // যদি না থাকে, home

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const handleLogIn = async (data) => {
    try {
      await loginUser(data.email, data.password);
      toast.success("Logged in successfully!");
      router.push(redirectPath); // login শেষে আগের route এ পাঠানো
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold uppercase mb-4">
            Log In
          </h1>

          <form onSubmit={handleSubmit(handleLogIn)}>
            <fieldset className="space-y-3">
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input w-full"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input w-full"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-full mt-2" disabled={isSubmitting}>
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </fieldset>
          </form>

          <div className="text-accent text-center my-3">
            Don't have an account? <Link href="/register" className="text-red-500 font-medium">Register</Link>
          </div>

          {/* Google Login */}
          <GoogleLogIn redirectPath={redirectPath} />
        </div>
      </div>
    </div>
  );
}
