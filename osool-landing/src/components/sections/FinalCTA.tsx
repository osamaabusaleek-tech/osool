import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            مستعد لفهم أعمالك بشكل أعمق؟
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            اتخذ الخطوة الأولى نحو وضوح مالي حقيقي. راسلنا على واتساب ودعنا نناقش كيف نحوّل تقاريرك المالية.
          </p>
          
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white px-10 py-5 rounded-full text-xl font-medium transition-all duration-300 shadow-xl transform hover:-translate-y-1"
          >
            <FaWhatsapp className="w-7 h-7" />
            <span>ابدأ محادثة واتساب</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
