import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  "تقارير مالية احترافية",
  "رؤى تجارية دقيقة",
  "لوحات بيانات تنفيذية",
  "دعم القرار الشهري"
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">لماذا تختار أصول؟</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              نُزيل الغموض عن عمليات أعمالك. منهجياتنا المالية الصارمة تمنحك أساسًا راسخًا من الحقيقة، يُمكّنك من التوسع بأمان وثقة.
            </p>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              تحدث مع خبير
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-medium">{reason}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
