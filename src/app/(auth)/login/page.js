"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();

  const [step, setStep] = useState("EMAIL"); // EMAIL | OTP
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // SEND OTP
  const sendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post("/api/auth/send-otp", {
        identifier,
      });
      setStep("OTP");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.response?.data?.detail?.[0]?.msg ||
          "OTP send failed"
      );
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP
  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post("/api/auth/verify-otp", {
        identifier,
        otp,
      });
      router.replace("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.response?.data?.detail?.[0]?.msg ||
          "Invalid OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-full bg-red-700 flex items-center justify-center text-white text-xl font-semibold">
            P
          </div>
          <h1 className="mt-3 text-lg font-semibold">Party Member App</h1>
          <p className="text-sm text-gray-500">Official Voting Platform</p>
        </div>

        {/* Card */}
        <form
          onSubmit={step === "EMAIL" ? sendOtp : verifyOtp}
          className="bg-white rounded-xl border shadow-sm px-6 py-7 space-y-4"
        >
          <h2 className="text-lg font-semibold">Welcome Back</h2>
          <p className="text-sm text-gray-500">
            Sign in with your registered email
          </p>

          {step === "EMAIL" && (
            <div className="space-y-1 text-left">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter email address"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-400"
              />
            </div>
          )}

          {step === "OTP" && (
            <div className="space-y-1 text-left">
              <label className="text-sm font-medium">OTP</label>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-400"
              />
            </div>
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md py-2 font-medium text-white bg-red-300 hover:bg-red-400 disabled:opacity-60 transition"
          >
            {loading
              ? "Please wait..."
              : step === "EMAIL"
              ? "Send OTP"
              : "Verify OTP"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-4 text-xs text-gray-500 flex items-center justify-center gap-1">
          🔒 Secure & Encrypted • Official Party Platform
        </p>
      </div>
    </div>
  );
}
