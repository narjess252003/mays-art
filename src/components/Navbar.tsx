"use client"

import { useSession, signOut } from "next-auth/react"
import {  Heart, ShoppingBag, Menu, X } from "lucide-react"
import { useState,useRef } from "react"
import Link from "next/link"
import Image from 'next/image';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showAccount, setShowAccount] = useState(false)
  const { data: session } = useSession()
  const accountBtnRef = useRef<HTMLButtonElement>(null)

  return (
    <nav
      className="bg-gradient-to-br from-amber-50 to-orange-50"
    >
      {/* Main Navigation */}
      <div className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Search */}
            

            {/* Logo */}
            <div className="text-center group">
              <h1 className="text-3xl text-[#4b3e34] hover:scale-105 transition-transform duration-300 cursor-pointer">
                𝗠𝗔𝗬𝗦𝗔𝗥𝗧
              </h1>
              <p className="text-x text-[#6d5844] tracking-wider">Ceramic</p>
              
            </div>

            {/* Icons */}
           <div className="flex items-center space-x-4 ml-auto justify-end">
          <button className="text-[#4b3e34] hover:text-[#4b3e34] transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-white/10">
            <Heart className="w-5 h-5" />
          </button>

          <button className="text-[#4b3e34] hover:text-[#4b3e34] transition-all duration-300 hover:scale-110 relative p-2 rounded-full hover:bg-white/10">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 bg-[#c97e6d] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center shadow-md animate-pulse">
              2
            </span>
          </button>

          {session ? (
          <div className="relative">
            <button
              ref={accountBtnRef}
              className="w-9 h-9 rounded-full bg-[#f7e9d2] flex items-center justify-center border-2 border-[#e7d8c2]"
              onClick={() => setShowAccount((v) => !v)}
              aria-label="Account"
            >
              {session.user?.image ? (
                <Image src={session.user.image} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
              ) : (
                <svg className="w-6 h-6 text-[#c97e6d]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
                </svg>
              )}
            </button>
            {showAccount && (
  <div className="absolute right-0 mt-4 w-96 bg-white rounded-3xl shadow-2xl z-40 border border-[#e7d8c2] p-8 flex gap-7 items-center animate-fade-in">
    <div className="w-24 h-24 rounded-full bg-[#f7e9d2] flex items-center justify-center border-2 border-[#e7d8c2] shadow-lg">
      {session.user?.image ? (
        <Image src={session.user.image} alt="Profile" className="w-22 h-22 rounded-full object-cover" />
      ) : (
        <svg className="w-16 h-16 text-[#c97e6d]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
        </svg>
      )}
    </div>
    <div className="flex-1 min-w-0">
      <div className="font-extrabold text-2xl text-[#4b3e34] truncate mb-2">{session.user?.name || "Account"}</div>
      <div className="text-sm text-[#bfae9b] break-all mb-6">{session.user?.email}</div>
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="w-full bg-gradient-to-r from-[#c97e6d] to-[#4b3e34] text-white py-3 rounded-2xl font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all text-lg tracking-wide"
      >
        Log out
      </button>
    </div>
  </div>
)}
          </div>
        ) : (
          <Link
            href="/login"
            className="text-[#4b3e34] font-bold hover:text-[#4b3e34] transition-all duration-300 hover:scale-110 py-2 text-sm rounded-full hover:bg-white/10"
          >
            log in
          </Link>
        )}


          <button
            className="md:hidden text-[#4b3e34] hover:text-[#4b3e34] transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div
        className="py-3 bg-center border-t border-[#d8cfc2]/30"
        style={{
          backgroundImage: "url('/44.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "40% auto",
          backgroundColor: "rgba(230, 223, 195, 0.9)",
          
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
  <div
    className={`${
      isMenuOpen
        ? "flex flex-col space-y-4 md:flex-row md:space-y-0"
        : "hidden md:flex"
    } justify-center md:space-x-12 text-s text-[#f1f2d9]`}
  >
    <Link
      href="/"
      className="tracking-widest hover:text-[#f1f2d9] transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-white/20"
    >
      HOME
    </Link>
    <Link
      href="/#collections"
      className="tracking-widest hover:text-[#f1f2d9] transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-white/20"
    >
      COLLECTIONS
    </Link>
    <Link
      href="/categories"
      className="tracking-widest hover:text-[#f1f2d9] transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-white/20"
    >
      CATEGORIES
    </Link>
    <Link
      href="/#about"
      className=" tracking-widest hover:text-[#f1f2d9] transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-white/20"
    >
      ABOUT
    </Link>
    <Link
      href="/contact"
      className="tracking-widest hover:text-[#f1f2d9] transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-white/20"
    >
      CONTACT
    </Link>
  </div>
</div>

      </div>
    </nav>
  )
}
