"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Profile Boost",
    price: "299",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    features: [
      "1 Location Esclusiva",
      "10 Foto Professionali",
      "Post-Produzione Base",
      "Direzione Artistica",
      "Consegna in 7 Giorni",
    ],
  },
  {
    name: "Profile Upgrade",
    price: "399",
    icon: Star,
    color: "from-amber-500 to-amber-600",
    featured: true,
    badge: "BEST SELLER",
    features: [
      "2 Location Esclusive",
      "20 Foto Professionali",
      "Post-Produzione Avanzata",
      "Direzione Artistica Pro",
      "Styling Consultation",
      "Consegna in 5 Giorni",
      "Garanzia Soddisfatti",
    ],
  },
  {
    name: "Profile Magnet",
    price: "499",
    icon: Crown,
    color: "from-purple-500 to-pink-500",
    features: [
      "3 Location Premium",
      "30 Foto Professionali",
      "Post-Produzione Premium",
      "Direzione Artistica Elite",
      "Styling Coach Personale",
      "Video Brevi (5 clip)",
      "Consegna in 3 Giorni",
      "Garanzia 100% Risultati",
    ],
  },
]

export function Pricing() {
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
            Scegli il Tuo <span className="text-amber-400">Pacchetto</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Investimento una tantum che cambierà per sempre il tuo successo nel dating
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn("relative group", plan.featured && "md:-mt-8 md:scale-105")}
            >
              <div
                className={cn(
                  "relative bg-zinc-900/50 backdrop-blur-sm border rounded-2xl p-8 h-full transition-all duration-300",
                  plan.featured
                    ? "border-amber-500 shadow-2xl shadow-amber-500/20"
                    : "border-zinc-800 hover:border-zinc-700",
                )}
              >
                {/* Featured Badge */}
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    {plan.badge}
                  </div>
                )}

                {/* 3D Card Effect on Hover */}
                <motion.div
                  whileHover={{
                    rotateY: 5,
                    rotateX: 5,
                    z: 50,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${plan.color} mb-6`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">€</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className={cn(
                            "w-5 h-5 flex-shrink-0 mt-0.5",
                            plan.featured ? "text-amber-400" : "text-green-400",
                          )}
                        />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    size="lg"
                    className={cn(
                      "w-full font-bold text-lg py-6 rounded-xl transition-all duration-300",
                      plan.featured
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105"
                        : "bg-white/10 hover:bg-white/20 text-white",
                    )}
                  >
                    Prenota Ora
                  </Button>
                </motion.div>

                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20 p-8 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-2xl max-w-3xl mx-auto"
        >
          <h4 className="text-2xl font-bold mb-4 text-amber-400">Garanzia Soddisfatti o Rimborsati al 100%</h4>
          <p className="text-gray-300">
            Se non sei completamente soddisfatto del tuo servizio fotografico, puoi rifarlo gratuitamente oppure ti
            rimborsiamo l&apos;intero importo. Nessuna domanda, nessun problema.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
