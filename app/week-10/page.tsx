"use client";

import Link from "next/link";
import { useUserAuth } from "./utils/auth-context";

export default function Week10Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("GitHub sign-in error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Week 10 Shopping List</h1>

      {!user ? (
        <div className="space-y-4">
          <p>Please sign in with GitHub to continue.</p>
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Sign in with GitHub
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>

          <div className="flex gap-4">
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>

            <Link
              href="/week-10/shopping-list"
              className="text-blue-600 underline"
            >
              Go to Shopping List
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}