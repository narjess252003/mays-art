"use client"
import Navbar from "@/components/Navbar"
import { SessionProvider } from "next-auth/react"

export default function Contact() {
  return (
    <div className="bg-stone-50 min-h-screen font-mono">
      <SessionProvider  >
      <Navbar />
      </SessionProvider>
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-10 text-[#4b3e34] text-center">Contact</h1>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Contact Form */}
          <div className="flex-1 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/80 rounded-2xl shadow-2xl p-10 border border-[#e7d8c2]">
  <form className="space-y-8">
    <div>
      <label className="block text-[#4b3e34] mb-2 font-semibold tracking-wide text-lg">Name</label>
      <input
        type="text"
        className="w-full border border-[#e7d8c2] rounded-xl px-5 py-3 focus:outline-none focus:border-[#c97e6d] bg-white/70 text-[#4b3e34] placeholder-[#bfae9b] transition-all"
        placeholder="Your name"
      />
    </div>
    <div>
      <label className="block text-[#4b3e34] mb-2 font-semibold tracking-wide text-lg">Email</label>
      <input
        type="email"
        className="w-full border border-[#e7d8c2] rounded-xl px-5 py-3 focus:outline-none focus:border-[#c97e6d] bg-white/70 text-[#4b3e34] placeholder-[#bfae9b] transition-all"
        placeholder="you@email.com"
      />
    </div>
    <div>
      <label className="block text-[#4b3e34] mb-2 font-semibold tracking-wide text-lg">Message</label>
      <textarea
        className="w-full border border-[#e7d8c2] rounded-xl px-5 py-3 focus:outline-none focus:border-[#c97e6d] bg-white/70 text-[#4b3e34] placeholder-[#bfae9b] transition-all"
        rows={5}
        placeholder="Type your message here..."
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-[#4b3e34] to-[#c97e6d] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all text-lg tracking-wide"
    >
      Send Message
    </button>
  </form>
</div>
          {/* Picture and Contact Infos */}
          <div className="flex-1 flex flex-col items-center gap-8">
            {/* Picture */}
            <img
              src="/profi.jpeg"
              alt="Mayssa"
              className="w-48 h-48 object-cover rounded-2xl shadow-lg border-4 border-white bg-[#f7e9d2]"
            />
            {/* Contact Infos in cards */}
<div className="w-full space-y-4">
  <div className="bg-gradient-to-r from-amber-50 to-orange-50/60 rounded-2xl shadow-lg p-6 flex items-center gap-4 border border-[#e7d8c2] hover:scale-105 transition-transform duration-300">
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#f7e9d2] text-[#c97e6d] text-xl font-bold shadow">
      📧
    </span>
    <div>
      <div className="font-bold text-[#4b3e34] text-sm uppercase tracking-wider">Email</div>
      <div className="text-[#6d5c4d] break-all text-base">maysart@email.com</div>
    </div>
  </div>
  <div className="bg-gradient-to-r from-amber-50 to-orange-50/60 rounded-2xl shadow-lg p-6 flex items-center gap-4 border border-[#e7d8c2] hover:scale-105 transition-transform duration-300">
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#f7e9d2] text-[#c97e6d] text-xl font-bold shadow">
      📞
    </span>
    <div>
      <div className="font-bold text-[#4b3e34] text-sm uppercase tracking-wider">Phone</div>
      <div className="text-[#6d5c4d] text-base">+216 26 156 190</div>
    </div>
  </div>
  <div className="bg-gradient-to-r from-amber-50 to-orange-50/60 rounded-2xl shadow-lg p-6 flex items-center gap-4 border border-[#e7d8c2] hover:scale-105 transition-transform duration-300">
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#f7e9d2] text-[#c97e6d] text-xl font-bold shadow">
      📍
    </span>
    <div>
      <div className="font-bold text-[#4b3e34] text-sm uppercase tracking-wider">Location</div>
      <div className="text-[#6d5c4d] text-base">Medenine, Tunisia</div>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  )
}