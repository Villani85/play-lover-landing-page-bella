"use client"

import { motion } from "framer-motion"

const reviews = [
  "https://playloveracademy.it/wp-content/uploads/2024/02/rec16.png",
  "https://playloveracademy.it/wp-content/uploads/2024/02/rec19.png",
  "https://playloveracademy.it/wp-content/uploads/2024/02/rec113.png",
  "https://playloveracademy.it/wp-content/uploads/2024/02/rec34.png",
  "https://playloveracademy.it/wp-content/uploads/2024/02/rec31.png",
  "https://playloveracademy.it/wp-content/uploads/2024/02/rec23.png",
  "https://playloveracademy.it/wp-content/uploads/2024/02/rec28.png",
  "https://playloveracademy.it/wp-content/uploads/2024/02/rec25.png",
  "https://playloveracademy.it/wp-content/uploads/2024/02/rec26.png",
]

export function SocialProof() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Cosa Dicono i Nostri <span className="text-amber-400">Clienti</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Centinaia di uomini hanno già trasformato il loro successo nel dating con PlayLover
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Reviews - First Row */}
      <div className="relative mb-8">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...reviews, ...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] h-[300px] bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden"
            >
              <img
                src={review || "/placeholder.svg"}
                alt={`Recensione ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Infinite Scrolling Reviews - Second Row (Reverse) */}
      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [-1920, 0],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {[...reviews, ...reviews, ...reviews].map((review, index) => (
            <div
              key={`reverse-${index}`}
              className="flex-shrink-0 w-[400px] h-[300px] bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden"
            >
              <img
                src={review || "/placeholder.svg"}
                alt={`Recensione ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-900 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none z-10" />
    </section>
  )
}
