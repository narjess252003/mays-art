"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })

    if (result?.error) {
      setError("Invalid email or password")
    } else {
      router.push("/")
    }
  }

  return (
    <div className="bg-stone-50 min-h-screen font-mono flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full bg-white/80 rounded-2xl shadow-xl p-10 border border-[#e7d8c2]">
        <h1 className="text-3xl font-bold mb-8 text-[#4b3e34] text-center">Log In</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[#4b3e34] mb-2 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-[#e7d8c2] rounded-xl px-4 py-3 focus:outline-none focus:border-[#c97e6d] bg-white/70"
              required
            />
          </div>
          <div>
            <label className="block text-[#4b3e34] mb-2 font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-[#e7d8c2] rounded-xl px-4 py-3 focus:outline-none focus:border-[#c97e6d] bg-white/70"
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#4b3e34] to-[#c97e6d] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all text-lg tracking-wide"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 flex flex-col items-center gap-4">
          <button
            onClick={() => signIn("google")}
            className="flex items-center justify-center w-full border border-[#c97e6d] rounded-xl px-4 py-3 text-[#4b3e34] hover:bg-[#c97e6d] hover:text-white transition"
          >
            <Image src="/google-icon.svg" alt="Google icon" width={24} height={24} />
            <span className="ml-2 font-semibold">Continue with Google</span>
          </button>
          <p className="text-sm text-[#6d5c4d]">
            Don't have an account?{" "}
            <Link href="/register" className="text-[#c97e6d] font-semibold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
