"use client"
import Navbar from "@/components/Navbar"
import { SessionProvider } from "next-auth/react"

export default function Categories() {
  return (
    <div className="bg-stone-50 min-h-screen font-mono">
      <SessionProvider>
      <Navbar />
      </SessionProvider>
      <div className="max-w-4xl mx-auto py-16 px-4">
        <nav className="mb-8 text-sm text-[#4b3e34]">
          <span className="mr-2">Accueil</span>
          <span className="mx-2">{'>'}</span>
          <span className="font-bold">Catégories</span>
        </nav>
        <h1 className="text-3xl font-bold mb-8 text-[#4b3e34]">Catégories</h1>
        <ul className="space-y-4 text-lg">
            <li className="bg-white rounded-xl shadow p-4">
                <span className="text-[#4b3e34]">Mugs</span>
            </li>
          
          {/* Add more categories as needed */}
        </ul>
      </div>
    </div>
  )
}