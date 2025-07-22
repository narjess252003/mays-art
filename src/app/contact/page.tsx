"use client"
import Navbar from "@/components/Navbar"
import { SessionProvider } from "next-auth/react"
import Image from 'next/image';

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
            <Image
  src="/1.jpg"
  alt="Mayssa"
  width={192}  // same as w-48 (48 * 4 = 192px)
  height={192} // same as h-48
  className="object-cover rounded-2xl shadow-lg border-4 border-white bg-[#f7e9d2]"
/>


<div className="w-full space-y-3">
  {/* Instagram */}
  <a
    href="https://www.instagram.com/maysart__?igsh=MTdmcHpobWl4NDlxcw%3D%3D&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition"
  >
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f7e9d2] text-[#c97e6d] font-bold text-lg">
      IG
    </div>
    <div>
      <p className="font-semibold text-gray-700">Instagram</p>
      <p className="text-gray-600 text-sm">@maysart</p>
    </div>
  </a>

  {/* Email */}
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=maysart@email.com"
    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition"
  >
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f7e9d2] text-[#c97e6d] font-bold text-lg">
      @
    </div>
    <div>
      <p className="font-semibold text-gray-700">Email</p>
      <p className="text-gray-600 text-sm break-all">maysart@email.com</p>
    </div>
  </a>

  {/* Phone */}
  <a
    href="tel:+21626156190"
    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition"
  >
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f7e9d2] text-[#c97e6d] font-bold text-lg">
      ☎
    </div>
    <div>
      <p className="font-semibold text-gray-700">Phone</p>
      <p className="text-gray-600 text-sm">+216 26 156 190</p>
    </div>
  </a>

  {/* Location */}
  <a
    href="https://maps.google.com/?q=Medenine, Tunisia"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition"
  >
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f7e9d2] text-[#c97e6d] font-bold text-lg">
      📍
    </div>
    <div>
      <p className="font-semibold text-gray-700">Location</p>
      <p className="text-gray-600 text-sm">Medenine, Tunisia</p>
    </div>
  </a>
</div>


          </div>
        </div>
      </div>
    </div>
  )
}