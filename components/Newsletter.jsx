"use client";

import { useState, useRef, useEffect } from "react";

export default function Newsletter({ variant = "inline" }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const emailInputRef = useRef(null);

  // Auto-dismiss status messages after 5 seconds
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // Simple client validation
    if (!email || !email.includes("@")) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: data.message || "You're subscribed! 🎉" });
        setIsSuccess(true);
        setEmail("");
        setName("");
        // Optionally redirect to a thank-you page after a delay
        // setTimeout(() => window.location.href = "/thank-you", 2000);
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection.",
      });
    } finally {
      setLoading(false);
      // Focus back on email input if error
      if (status.type === "error" && emailInputRef.current) {
        emailInputRef.current.focus();
      }
    }
  };

  // Shared input styles
  const inputStyles =
    "flex-1 rounded-xl border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500";
  const darkInputStyles =
    "flex-1 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-blue-500";

  // ─── Inline Variant ────────────────────────────────────────────
  if (variant === "inline") {
    return (
      <div className="my-8 rounded-2xl bg-blue-50 p-6">
        <h3 className="text-lg font-bold">📬 Stay in the loop</h3>
        <p className="mt-1 text-sm text-slate-600">
          Get the latest reviews and deals straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputStyles}
            aria-label="Your name"
          />
          <input
            ref={emailInputRef}
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputStyles}
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-blue-600 px-6 py-2 text-sm font-bold text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Subscribing..." : "Subscribe →"}
          </button>
        </form>
        {status.message && (
          <p
            className={`mt-3 text-sm ${
              status.type === "success" ? "text-green-700" : "text-red-700"
            }`}
          >
            {status.message}
          </p>
        )}
        {isSuccess && (
          <div className="mt-3 rounded-lg bg-green-100 p-3 text-sm text-green-800">
            <p>✅ Thanks for subscribing! You'll hear from us soon.</p>
            {/* Optional lead magnet: */}
            {/* <a href="/free-guide" className="mt-2 inline-block font-bold text-blue-600">Download our free VPN guide →</a> */}
          </div>
        )}
      </div>
    );
  }

  // ─── Hero Variant ──────────────────────────────────────────────
  return (
    <section className="bg-slate-900 px-6 py-16 text-center text-white">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold">📫 Join the NorthSky Newsletter</h2>
        <p className="mt-3 text-slate-400">
          Get exclusive deals, honest reviews, and travel tech tips – delivered weekly.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={darkInputStyles}
            aria-label="Your name"
          />
          <input
            ref={emailInputRef}
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={darkInputStyles}
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-blue-600 px-8 py-3 font-bold transition hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Joining..." : "Join Free →"}
          </button>
        </form>
        <p className="mt-3 text-sm text-slate-500">
          No spam. Unsubscribe anytime.
        </p>
        {status.message && (
          <p
            className={`mt-3 text-sm ${
              status.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {status.message}
          </p>
        )}
        {isSuccess && (
          <div className="mt-4 rounded-lg bg-green-800/30 p-3 text-sm text-green-300">
            🎉 You're in! Check your inbox for a welcome message.
          </div>
        )}
      </div>
    </section>
  );
}