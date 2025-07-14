"use client"
import Navbar from "@/components/Navbar"
import { Star, Heart, Gift } from "lucide-react"
import { SessionProvider } from "next-auth/react"
import Link from "next/link"
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-stone-50 text-stone-800 min-h-screen font-mono">
      <SessionProvider>   
      <Navbar />
</SessionProvider>
      {/* Hero Section */}
      <section
  className="
             bg-gradient-to-br from-amber-50 to-orange-50 "
             
>

  {/* Floating decorative elements */}
  <div className="max-w-5xl mx-auto px-4 py-10 w-full flex flex-col lg:flex-row items-center lg:items-start gap-10">
  {/* Left side - Text */}
  <div className="lg:w-1/2 space-y-7 font-gillsans">
  

  <h1 className="text-3xl md:text-5xl leading-snug text-left space-y-2 uppercase">
    <div className="text-[#4b3e34] drop-shadow-sm">Handmade Ceramics</div>
    <div className="text-[#927e6c] drop-shadow-sm">By</div>
    <div className="text-[#4b3e34] text-5xl md:text-6xl drop-shadow-lg tracking-wider animate-bounce">
      𝗠𝗔𝗬𝗦𝗔𝗥𝗧
    </div>
  </h1>

  <p className="text-[#6d5c4d] leading-relaxed text-base bg-white/30 p-5 rounded-2xl backdrop-blur-sm border border-white/20 max-w-lg">
    Every piece is unique and made with love to bring joy to your daily routines.
  </p>

  <div className="flex gap-5">
    <Link href="/products">
  <button className="bg-gradient-to-r from-[#4b3e34] to-[#3d322a] text-[#fdf6ee] px-8 py-4 text-sm tracking-wider hover:from-[#3d322a] hover:to-[#2f251d] transition-all duration-300 rounded-xl shadow-md hover:shadow-lg hover:scale-105 flex items-center uppercase font-semibold">
    <Gift className="w-4 h-4 mr-2" />
    Shop Now
  </button>
</Link>
    <Link href="/#about">
  <button className="border-2 border-[#d8cfc2] text-[#6d5c4d] px-8 py-4 text-sm tracking-wider hover:bg-[#f2e9de] transition-all duration-300 rounded-xl hover:scale-105 hover:border-[#4b3e34] uppercase font-semibold">
    Our Story
  </button>
</Link>
  </div>
</div>

  <div className="lg:w-1/2 w-full max-w-md relative group -mt-10 lg:mt-1">
      <Image
        src="/art.jpg"
        alt="Ceramic mugs collection"
        className="w-full h-130 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
      />
    </div>
</div>

</section>
      {/* Product Grid Section */}
      <section 
      id="collections"
      className="py-20 px-4 bg-gradient-to-b from-stone-50 to-amber-50/30">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            
            <h2 className="text-5xl font-light mb-6">
              <span className="text-[#3d322a]">𝙾𝚄𝚁</span>
              <span className="bg-gradient-to-r  px-4 py-2 text-[#3d322a] ">
                COLLECTION
              </span>
            </h2>
            <style>
  {`
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  `}
</style>

<p
  className="text-base text-stone-600 mt-8 max-w-3xl mx-auto leading-relaxed  p-6"
  style={{ animation: 'float 3s ease-in-out infinite' }}
>
  Get the mug that matches your vibe now !
</p>

          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
  {[
    {
      name: "CLASSIC",
      price: "𝟸𝟺.𝟶𝟶dt",
      image: "1.jpg",
      color: "from-amber-50 to-orange-50",
    },
    {
      name: "ARTIST SERIES",
      price: "𝟸𝟾.𝟶𝟶dt",
      image: "2.jpg",
      color: "from-amber-50 to-orange-50",
    },
    {
      name: "PASTEL DREAMS",
      price: "𝟹𝟸.𝟶𝟶dt",
      image: "3.jpg",
      color: "from-amber-50 to-orange-50",
    },
    {
      name: "MINIMAL MODERN",
      price: "𝟸𝟼.𝟶𝟶dt",
      image: "4.jpg",
      color: "from-amber-50 to-orange-50",
    },
    {
      name: "VINTAGE CHARM",
      price: "𝟹𝟶.𝟶𝟶dt",
      image: "5.jpg",
      color: "from-amber-50 to-orange-50",
    },
    {
      name: "BOHEMIAN STYLE",
      price: "𝟸𝟿.𝟶𝟶dt",
      image: "6.jpg",
      color: "from-amber-50 to-orange-50",
    },
    {
      name: "EARTH TONES",
      price: "𝟸𝟽.𝟶𝟶dt",
      image: "7.jpg",
      color: "from-amber-50 to-orange-50",
    },
    {
      name: "OCEAN BREEZE",
      price: "𝟹𝟷.𝟶𝟶dt",
      image: "8.jpg",
      color: "from-amber-50 to-orange-50",
    },
  ].map((product, i) => (
    <div key={i} className="group">
      <div
        className={`bg-gradient-to-br ${product.color} p-6 rounded-3xl border border-stone-200 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-[#c97e6d]/30`}
      >
        <div className="relative overflow-hidden rounded-2xl mb-6">
          <Image
            src={`/${product.image}`}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Heart className="w-4 h-4 text-[#c97e6d]" />
          </div>
        </div>
        <div className="text-center space-y-3">
          <h3 className="text-xs tracking-widest text-[#3d322a] font-medium">
            {product.name}
          </h3>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold text-[#3d322a]">{product.price}</p>
            <button className="bg-gradient-to-r from-[#4b3e34] to-[#3d322a] text-white px-4 py-2 rounded-xl text-xs  transition-all duration-300 hover:scale-105 shadow-md">
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


          {/* View All Button */}
          <div className="text-center">
            <Link href="/products">
              <button className="font-bold bg-gradient-to-r from-amber-50 to-orange-50 text-[#3d322a] px-12 py-4 rounded-2xl text-sm tracking-widest hover:bg-[#f2e9de] hover:border-[#c97e6d] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                VIEW ALL 
              </button>
            </Link>
          </div>
        </div>
      </section>
    {/* About Section */}
<section
  id="about"
  className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 relative overflow-hidden"
>
  {/* Decorative moving shapes */}
  <div className="absolute top-0 left-0 w-40 h-40 bg-amber-200 rounded-full opacity-30 animate-pulse-slow blur-2xl" />
  <div className="absolute bottom-0 right-0 w-56 h-56 bg-orange-200 rounded-full opacity-20 animate-pulse-slow blur-2xl" />

  <div className="relative max-w-2xl mx-auto px-6 text-center animate-fade-in-up">
    {/* Optional: Profile image */}
    {/* <img src="/profile.jpg" alt="Mayssa" className="mx-auto mb-6 w-24 h-24 rounded-full shadow-lg object-cover border-4 border-white" /> */}
    <h3 className="text-3xl md:text-4xl font-extrabold text-[#4b3e34] mb-4 tracking-tight">
      About <span className="text-[#c97e6d]">MAYSART</span>
    </h3>
    <blockquote className="italic text-[#c97e6d] text-lg md:text-xl mb-6 font-medium">
      “Art is the journey of a free soul.”
    </blockquote>
    <p className="text-base md:text-lg text-[#6d5c4d] leading-relaxed mb-4">
      Hello, I’m Mayssa. MAYSART is my dream brought to life—each ceramic piece is shaped by my hands and heart, inspired by the beauty of everyday moments and the warmth of home.
    </p>
    <p className="text-base md:text-lg text-[#6d5c4d] leading-relaxed mb-4">
      My hope is that every mug I create brings you comfort, joy, and a sense of connection. Thank you for supporting my creative journey and being part of the MAYSART story.
    </p>
    <p className="text-base md:text-lg text-[#6d5c4d] leading-relaxed">
      With gratitude, <br />
      <span className="font-semibold text-[#4b3e34]">Mayssa</span>
    </p>
  </div>

  {/* Animations */}
  <style>
    {`
      @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(40px);}
        100% { opacity: 1; transform: translateY(0);}
      }
      .animate-fade-in-up {
        animation: fade-in-up 1.2s cubic-bezier(.39,.575,.565,1) both;
      }
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 0.4; }
      }
      .animate-pulse-slow {
        animation: pulse-slow 6s ease-in-out infinite;
      }
    `}
  </style>
</section>

      {/* Customer Reviews Section */}
<section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 border-t border-stone-200 relative overflow-hidden">
  {/* Decorative shapes */}
  <div className="absolute top-0 left-0 w-32 h-32 bg-amber-200 rounded-full opacity-20 animate-pulse-slow blur-2xl" />
  <div className="absolute bottom-0 right-0 w-44 h-44 bg-orange-200 rounded-full opacity-10 animate-pulse-slow blur-2xl" />

  <div className="relative max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#4b3e34] mb-6 tracking-tight drop-shadow">
        𝚆𝚑𝚊𝚝 𝚘𝚞𝚛 <span className="text-[#c97e6d]">𝚌𝚞𝚜𝚝𝚘𝚖𝚎𝚛𝚜</span> 𝚜𝚊𝚢
      </h2>
      <p className="text-[#6d5c4d] text-base md:text-lg font-medium">
        𝚁𝚎𝚊𝚕 𝚛𝚎𝚟𝚒𝚎𝚠𝚜 𝚏𝚛𝚘𝚖 𝚛𝚎𝚊𝚕 𝚙𝚎𝚘𝚙𝚕𝚎
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          name: "Narjess B",
          review: "𝙰𝚋𝚜𝚘𝚕𝚞𝚝𝚎𝚕𝚢 𝚕𝚘𝚟𝚎 𝚖𝚢 𝚗𝚎𝚠 𝚖𝚞𝚐! 𝚃𝚑𝚎 𝚀𝚞𝚊𝚕𝚒𝚝𝚢 𝚒𝚜 𝚊𝚖𝚊𝚣𝚒𝚗𝚐 𝚊𝚗𝚍 𝚒𝚝 𝚏𝚎𝚎𝚕𝚜 𝚜𝚘 𝚐𝚘𝚘𝚍 𝚒𝚗 𝚖𝚢 𝚑𝚊𝚗𝚍𝚜.",
          rating: 5,
          color: "from-amber-50 to-orange-50",
        },
        {
          name: "Houda G",
          review: "𝙱𝚎𝚊𝚞𝚝𝚒𝚏𝚞𝚕 𝚌𝚛𝚊𝚏𝚝𝚜𝚖𝚊𝚗𝚜𝚑𝚒𝚙! 𝙴𝚊𝚌𝚑 𝚖𝚞𝚐 𝚒𝚜 𝚞𝚗𝚒𝚚𝚞𝚎 𝚊𝚗𝚍 𝚢𝚘𝚞 𝚌𝚊𝚗 𝚛𝚎𝚊𝚕𝚕𝚢 𝚏𝚎𝚎𝚕 𝚝𝚑𝚎 𝚕𝚘𝚟𝚎 𝚙𝚞𝚝 𝚒𝚗𝚝𝚘 𝚒𝚝.",
          rating: 5,
          color: "from-amber-50 to-orange-50",
        },
        {
          name: "Mohamed B",
          review: "𝙼𝚢 𝚖𝚘𝚛𝚗𝚒𝚗𝚐 𝚌𝚘𝚏𝚏𝚎𝚎 𝚛𝚒𝚝𝚞𝚊𝚕 𝚑𝚊𝚜 𝚋𝚎𝚎𝚗 𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚕𝚢 𝚝𝚛𝚊𝚗𝚜𝚏𝚘𝚛𝚖𝚎𝚍. 𝚃𝚑𝚊𝚗𝚔 𝚢𝚘𝚞!",
          rating: 5,
          color: "from-amber-50 to-orange-50",
        },
      ].map((review, i) => (
        <div
          key={i}
          className={`bg-gradient-to-br ${review.color} p-8 rounded-3xl border border-[#e7d8c2]/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative`}
        >
          <div className="flex mb-4 justify-center">
            {[...Array(review.rating)].map((_, j) => (
              <Star key={j} className="w-5 h-5 text-[#c97e6d] fill-current drop-shadow" />
            ))}
          </div>
          <p className="text-[#4b3e34] text-base mb-6 leading-relaxed font-medium">{review.review}</p>
          <p className="text-[#927e6c] text-sm font-semibold">— {review.name}</p>
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/70 rounded-full flex items-center justify-center shadow-md border border-[#e7d8c2]">
            <Heart className="w-6 h-6 text-[#c97e6d]" />
          </div>
        </div>
      ))}
    </div>
  </div>
  <style>
    {`
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 0.4; }
      }
      .animate-pulse-slow {
        animation: pulse-slow 6s ease-in-out infinite;
      }
    `}
  </style>
</section>
      
    </div>
  )
}
