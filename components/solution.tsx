"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const beforeAfter = {
  before: "https://playloveracademy.it/wp-content/uploads/2025/11/PlayLover_Shooting-1-768x1152.webp",
  after: "https://playloveracademy.it/wp-content/uploads/2025/11/PlayLover_Shooting-2-768x1152.webp",
}

export function Solution() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.clientX, rect)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.touches[0].clientX, rect)
  }

  return (
    <section className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            La{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Soluzione
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Fotografie professionali che trasformano il tuo profilo da invisibile a irresistibile.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-col-resize select-none shadow-2xl"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
            >
              {/* After Image */}
              <img
                src={beforeAfter.after || "/placeholder.svg"}
                alt="Dopo PlayLover"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Before Image with clip */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={beforeAfter.before || "/placeholder.svg"}
                  alt="Prima PlayLover"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-amber-500 shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 rounded-full p-3 shadow-2xl">
                  <ChevronLeft className="w-4 h-4 text-black absolute left-1" />
                  <ChevronRight className="w-4 h-4 text-black absolute right-1" />
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold text-red-400">PRIMA</span>
              </div>
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold text-amber-400">DOPO</span>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-8">Cosa Ottieni con PlayLover PhotoLab</h3>

            {[
              {
                title: "Fotografie Professionali",
                description: "Shot di alta qualità realizzati da fotografi esperti nel dating",
              },
              {
                title: "Direzione Artistica",
                description: "Ti guidiamo in ogni posa per farti apparire sicuro e attraente",
              },
              {
                title: "Location Esclusive",
                description: "Ambienti curati che valorizzano la tua personalità",
              },
              {
                title: "Post-Produzione Avanzata",
                description: "Editing professionale per risultati da rivista",
              },
              {
                title: "Garanzia Risultati",
                description: "O rifai il servizio gratis, o ti rimborsiamo al 100%",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-8 py-6 rounded-xl mt-8"
            >
              Scopri i Pacchetti
            </Button>
          </motion.div>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Guarda il Processo in Azione</h3>
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://fast.wistia.net/embed/iframe/dtzvj9umk7"
              className="w-full aspect-video"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
