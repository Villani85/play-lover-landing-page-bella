"use client"

import { motion } from "framer-motion"
import { Sparkles, Star } from "lucide-react"
import { useEffect } from "react"

const galleryImages = [
  "https://playloveracademy.it/wp-content/uploads/2025/11/PlayLover_Shooting-7-1024x683.webp",
  "https://playloveracademy.it/wp-content/uploads/2025/11/PlayLover_Shooting-6-1024x683.webp",
  "https://playloveracademy.it/wp-content/uploads/2025/11/PlayLover_Shooting-3-1024x683.webp",
  "https://playloveracademy.it/wp-content/uploads/2025/11/PlayLover_Shooting-9-1024x683.webp",
  "https://playloveracademy.it/wp-content/uploads/2025/11/PlayLover_Shooting-10-1024x683.webp",
]

export function Hero() {
  useEffect(() => {
    console.log("[v0] Hero component mounted")
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Images Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid grid-cols-3 gap-4 p-4 opacity-20">
          {galleryImages.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt=""
              className="w-full h-80 object-cover rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            />
          ))}
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 px-4 py-2 rounded-full">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="text-amber-400 font-bold">4.8/5</span>
            <span className="text-gray-300 text-sm">Eccellente</span>
            <span className="text-gray-400 text-sm">• 450+ recensioni</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span className="text-amber-500 font-semibold uppercase tracking-wider text-sm">
            Mai Visto Prima in Italia
          </span>
          <Sparkles className="w-5 h-5 text-amber-500" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
        >
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            PlayLover
          </span>
          <br />
          <span className="text-white">PhotoLab</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-3xl text-white font-semibold mb-4 max-w-4xl mx-auto leading-tight">
            Hai solo <span className="text-amber-400">3 secondi</span> per convincere una donna ad uscire con te.{" "}
            <span className="text-amber-400">Zero parole.</span>
          </p>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Le tue foto possono rovinarti i migliori appuntamenti o regalarti{" "}
            <span className="text-amber-400 font-semibold">conoscenze straordinarie</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold text-lg px-12 py-6 rounded-xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
            Prenota il tuo Shooting
          </button>
        </motion.div>
      </div>
    </div>
  )
}
