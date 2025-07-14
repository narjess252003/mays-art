"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { SessionProvider, signIn } from "next-auth/react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem("maysart-user") || "{}")
    if (user.email === email && user.password === password) {
      localStorage.setItem("maysart-auth", "true")
      router.push("/")
    } else {
      setError("Invalid email or password.")
    }
  }

  return (
    <div className="bg-stone-50 min-h-screen font-mono">
      <SessionProvider> 
      <Navbar />
      </SessionProvider>
      <div className="max-w-md mx-auto py-20 px-6">
        <div className="bg-white/80 rounded-2xl shadow-xl p-10 border border-[#e7d8c2]">
          <h1 className="text-3xl font-bold mb-8 text-[#4b3e34] text-center">Log In</h1>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-[#4b3e34] mb-2 font-semibold">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full border border-[#e7d8c2] rounded-xl px-4 py-3 focus:outline-none focus:border-[#c97e6d] bg-white/70"
              />
            </div>
            <div>
              <label className="block text-[#4b3e34] mb-2 font-semibold">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full border border-[#e7d8c2] rounded-xl px-4 py-3 focus:outline-none focus:border-[#c97e6d] bg-white/70"
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button type="submit" className="w-full bg-gradient-to-r from-[#4b3e34] to-[#c97e6d] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all text-lg tracking-wide">
              Log In
            </button>
            <button
  type="button"
  className="w-full flex items-center justify-center gap-3 bg-white border border-[#e7d8c2] rounded-xl py-3 px-4 shadow hover:shadow-md transition-all font-semibold text-[#4b3e34] hover:bg-[#f7e9d2]"
  onClick={() => signIn("google", { callbackUrl: "/" })}
>
  <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
  Continue with Google
</button>
          </form>
          <div className="mt-6 text-center">
            <span className="text-[#6d5c4d]">Don't have an account? </span>
            <Link href="/register" className="text-[#c97e6d] font-semibold hover:underline">
              Create one
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}