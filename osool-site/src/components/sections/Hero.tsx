import { motion } from 'framer-motion';
import osoolLogo from '@/assets/osool-logo.png';
import { FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-32 flex flex-col items-center justify-center min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white opacity-80"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center max-w-4xl">
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={osoolLogo} 
          alt="أصول للحلول المالية" 
          className="h-28 md:h-36 mb-12 object-contain"
        />
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-secondary mb-6 leading-tight"
        >
          حلول مالية تساعد أعمالك على النمو
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl leading-relaxed"
        >
          محاسبة احترافية، تقارير مالية تنفيذية، تحليل أداء الأعمال، لوحات بيانات تفاعلية، ورؤى مالية استراتيجية.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-[0_8px_20px_-4px_rgba(0,181,176,0.3)] hover:shadow-[0_12px_24px_-4px_rgba(0,181,176,0.5)] transform hover:-translate-y-1"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span>ابدأ محادثة واتساب</span>
          </a>
          
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-border hover:border-secondary hover:bg-slate-50 text-secondary px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
          >
            <span>احجز استشارة مجانية</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
