"use client";

import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Page({ handleGoogleLogIn, hangleLogIn }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold uppercase mb-4">Log In</h1>

          {/* Login Form */}
          <form onSubmit={hangleLogIn}>
            <fieldset className="fieldset space-y-3">
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="text-right">
                <a className="link link-hover text-sm">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-primary w-full mt-2">
                Login
              </button>
            </fieldset>
          </form>

          {/* Register Link */}
          <div className="text-accent text-center my-3">
            Don't have an account?{" "}
            <Link href="/register" className="text-red-500 font-medium">
              Register
            </Link>
          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogIn}
            className="btn btn-secondary w-full p-4 flex items-center justify-center gap-2"
          >
            <FcGoogle className="text-2xl" /> Log In With Google
          </button>
        </div>
      </div>
    </div>
  );
}
