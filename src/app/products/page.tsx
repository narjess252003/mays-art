import Navbar from "@/components/Navbar"
import { SessionProvider } from "next-auth/react"

export default function Products() {
  return (
    <div className="bg-stone-50 min-h-screen font-mono">
      <SessionProvider>
        <Navbar />
      </SessionProvider>
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-extrabold text-[#4b3e34] mb-10 text-center tracking-tight">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Example product cards, copy your product card design here */}
          {/* ... */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-3xl border border-stone-200 shadow-md">
            <img src="/1.jpg" alt="Mug" className="w-full h-48 object-cover rounded-2xl mb-4" />
            <h3 className="text-lg font-semibold text-[#3d322a] mb-2">CLASSIC</h3>
            <p className="text-[#6d5c4d] mb-2">$24.00</p>
            <button className="bg-gradient-to-r from-[#4b3e34] to-[#3d322a] text-white px-4 py-2 rounded-xl text-xs transition-all duration-300 hover:scale-105 shadow-md">
              ADD
            </button>
          </div>
          {/* ...repeat for all products... */}
        </div>
      </div>
    </div>
  )
}