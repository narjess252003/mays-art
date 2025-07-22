"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { SessionProvider, signIn } from "next-auth/react"
import Image from 'next/image';

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email || !password) {
      setError("All fields are required.")
      return
    }
    // Save user to localStorage (for demo only)
    localStorage.setItem("maysart-user", JSON.stringify({ name, email, password }))
    router.push("/login")
  }

  return (
    <div className="bg-stone-50 min-h-screen font-mono">
      <SessionProvider>
      <Navbar />
</SessionProvider>
      <div className="max-w-md mx-auto py-20 px-6">
        <div className="bg-white/80 rounded-2xl shadow-xl p-10 border border-[#e7d8c2]">
          <h1 className="text-3xl font-bold mb-8 text-[#4b3e34] text-center">Create Account</h1>
          <form className="space-y-6" onSubmit={handleRegister}>
            <div>
              <label className="block text-[#4b3e34] mb-2 font-semibold">Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full border border-[#e7d8c2] rounded-xl px-4 py-3 focus:outline-none focus:border-[#c97e6d] bg-white/70"
              />
            </div>
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
              Create Account
            </button>
            <div className="mb-6">
  <button
  type="button"
  className="w-full flex items-center justify-center gap-3 bg-white border border-[#e7d8c2] rounded-xl py-3 px-4 shadow hover:shadow-md transition-all font-semibold text-[#4b3e34] hover:bg-[#f7e9d2]"
  onClick={() => signIn("google")}
>
  <Image src="https://www.svgrepo.com/show/475656/google-color.svg" width={800} height={600} alt="Google" className="w-5 h-5" />
  Continue with Google
</button>
  <div className="my-6 flex items-center">
    <div className="flex-1 h-px bg-[#e7d8c2]" />
    <span className="mx-4 text-[#bfae9b] text-xs">or</span>
    <div className="flex-1 h-px bg-[#e7d8c2]" />
  </div>
</div>
          </form>
          <div className="mt-6 text-center">
            <span className="text-[#6d5c4d]">I have an account? </span>
            <Link href="/login" className="text-[#c97e6d] font-semibold hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}