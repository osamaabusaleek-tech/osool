import { motion } from 'framer-motion';
import { FileText, Calculator, LayoutDashboard, BarChart3, PieChart, TrendingDown, Activity, LineChart } from 'lucide-react';

const services = [
  { icon: FileText, title: "التقارير المالية" },
  { icon: Calculator, title: "المحاسبة الشهرية" },
  { icon: LayoutDashboard, title: "لوحات البيانات التنفيذية" },
  { icon: BarChart3, title: "تحليل أداء الأعمال" },
  { icon: PieChart, title: "تحليل الربحية" },
  { icon: TrendingDown, title: "تحليل المصروفات" },
  { icon: Activity, title: "مراقبة التدفق النقدي" },
  { icon: LineChart, title: "تقارير الإدارة" }
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">خدماتنا المتخصصة</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">خدماتنا</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-border hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-default"
            >
              <div className="w-16 h-16 rounded-full bg-slate-50 group-hover:bg-primary/5 flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors duration-300 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-medium text-secondary">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
