"use client";

import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Page({ handleRegister, handleGoogleLogIn }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="text-2xl text-center font-bold text-accent mb-4">
            Register your account
          </h1>

          <div className="divider"></div>

          <fieldset className="fieldset space-y-3">
            {/* User Name */}
            <div>
              <label className="label">User Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Your Name"
                name="name"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Your Photo URL"
                name="photo"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                name="email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                name="password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full mt-2">
              Register
            </button>
          </fieldset>

          {/* Login Link */}
          <div className="text-accent text-center mt-3">
            Have an account?{" "}
            <Link href="/auth-layout" className="text-green-500 font-medium">
              Log In
            </Link>
          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogIn}
            className="btn btn-secondary w-full p-4 flex items-center justify-center gap-2 mt-4"
          >
            <FcGoogle className="text-2xl" /> Log In With Google
          </button>
        </form>
      </div>
    </div>
  );
}
