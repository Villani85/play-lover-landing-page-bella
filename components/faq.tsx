"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Come funziona il servizio fotografico?",
    answer:
      "Prenoti il tuo shooting online, scegli data e location. Il giorno dello shooting, il nostro fotografo professionista ti guiderà in ogni posa per farti apparire al meglio. Dopo lo shooting, selezioniamo e ritocchiamo le foto migliori. Riceverai tutte le foto via email entro i tempi previsti dal tuo pacchetto.",
  },
  {
    question: "Quanto dura lo shooting?",
    answer:
      "Lo shooting dura circa 1-2 ore, a seconda del pacchetto scelto. Questo ci permette di ottenere una grande varietà di foto in diverse pose, angolazioni e lighting per darti le migliori opzioni possibili.",
  },
  {
    question: "Dove si svolge lo shooting?",
    answer:
      "Lavoriamo con location esclusive nelle principali città italiane. Sceglieremo insieme le location più adatte al tuo stile e personalità. Possiamo fare shooting sia in ambienti urbani che in contesti più naturali.",
  },
  {
    question: "Cosa devo indossare?",
    answer:
      "Ti forniremo una guida dettagliata sullo styling prima dello shooting. In generale, consigliamo di portare 2-3 outfit diversi che riflettano il tuo stile personale. Per i pacchetti Upgrade e Magnet, avrai anche una consulenza styling personalizzata.",
  },
  {
    question: "Le foto saranno modificate?",
    answer:
      "Sì! Tutte le foto selezionate vengono post-prodotte professionalmente. Questo include correzione colore, rimozione imperfezioni, ottimizzazione della luce e altri ritocchi per farti apparire al meglio mantenendo un aspetto naturale.",
  },
  {
    question: "Funziona davvero per aumentare i match?",
    answer:
      "Assolutamente! I nostri clienti riportano in media un aumento del 300-500% nei match dopo aver aggiornato il profilo con le nostre foto. La qualità delle foto è il fattore #1 che determina il successo sulle app di dating.",
  },
  {
    question: "Cosa succede se non sono soddisfatto?",
    answer:
      "Offriamo una garanzia soddisfatti o rimborsati al 100%. Se non sei completamente soddisfatto, puoi scegliere di rifare lo shooting gratuitamente oppure ottenere un rimborso completo. Nessuna domanda, nessun problema.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Domande <span className="text-amber-400">Frequenti</span>
          </h2>
          <p className="text-xl text-gray-400">Tutto quello che devi sapere prima di prenotare</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-amber-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 mt-4 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
