import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "تقارير دقيقة",
    description: "بيانات محاسبية متقنة تُترجم إلى قوائم مالية احترافية جاهزة للمسؤولين التنفيذيين."
  },
  {
    icon: Lightbulb,
    title: "رؤى استراتيجية",
    description: "لا نكتفي بعرض الأرقام، بل نُفسّرها لاكتشاف فرص النمو المخفية في بياناتك."
  },
  {
    icon: TrendingUp,
    title: "وضوح تنفيذي",
    description: "رؤية شاملة ومباشرة للوضع المالي لشركتك، متى ما احتجتها."
  }
];

export default function About() {
  return (
    <section className="py-24 bg-slate-50 border-y border-border/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-secondary mb-6"
          >
            نحوّل البيانات المالية إلى قرارات تجارية أفضل
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            في أصول، نؤمن بأن الإدارة المالية الاحترافية ليست حكرًا على الشركات الكبرى. نجلب دقة ومنهجية كبرى مكاتب المراجعة العالمية إلى أعمالك، ونمنحك الوضوح الذي تحتاجه لقيادة أعمالك بثقة.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
