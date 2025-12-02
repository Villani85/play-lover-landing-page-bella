"use client"

import { motion, useScroll } from "framer-motion"
import { ImageOff, Frown, HeartCrack } from "lucide-react"
import { useRef } from "react"

const problems = [
  {
    icon: ImageOff,
    title: "Foto Vecchie o Sfocate",
    description: "Le tue foto del profilo non ti rendono giustizia. Sono vecchie, sfocate o fatte male.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Frown,
    title: "Non sai come Posare?",
    description: "Di fronte alla fotocamera ti senti impacciato. Non sai quale espressione fare o come muoverti.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: HeartCrack,
    title: "Risultato: 0 Match",
    description: "Le ragazze scorrono via. Nessun match, nessuna conversazione, nessun appuntamento.",
    color: "from-amber-500 to-yellow-500",
  },
]

export function Problem() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={containerRef} className="relative py-32 bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Il <span className="text-red-500">Problema</span> è Reale
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Se sei su app di dating e non ottieni risultati, probabilmente stai commettendo questi errori fatali:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all duration-300 h-full">
                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${problem.color} mb-6`}>
                    <problem.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">{problem.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{problem.description}</p>
                </div>

                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${problem.color} opacity-20 blur-2xl rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-2xl md:text-3xl font-bold text-amber-400">È ora di cambiare le cose.</p>
        </motion.div>
      </div>
    </section>
  )
}
