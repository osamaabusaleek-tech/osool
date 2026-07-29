import { motion } from 'framer-motion';

const steps = [
  {
    num: "٠١",
    title: "أرسل بياناتك عبر واتساب",
    desc: "أرسل فواتيرك وإيصالاتك وسجلاتك التجارية عبر قناة واتساب الآمنة بكل سهولة."
  },
  {
    num: "٠٢",
    title: "أصول تُعالج البيانات",
    desc: "يراجع خبراؤنا الماليون البيانات بدقة متناهية، ويُصنّفونها ويُدخلونها إلى أنظمتنا."
  },
  {
    num: "٠٣",
    title: "إعداد التقارير ولوحات البيانات",
    desc: "نُحوّل البيانات المُعالجة إلى تقارير احترافية ولوحات بيانات تفاعلية سهلة القراءة."
  },
  {
    num: "٠٤",
    title: "تسلّم رؤاك التنفيذية",
    desc: "احصل كل شهر على تقريرك التنفيذي الشامل مع توصيات قابلة للتنفيذ لتطوير أعمالك."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider text-sm mb-3 block">عملية سلسة وبسيطة</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">كيف نعمل؟</h2>
        </div>

        <div className="relative">
          {/* Vertical line — on the right side for RTL */}
          <div className="absolute right-8 md:right-1/2 top-4 bottom-4 w-px bg-border md:translate-x-px"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex items-start md:items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16`}
                >
                  {/* Step marker — right side for RTL */}
                  <div className="absolute right-8 md:right-1/2 w-10 h-10 translate-x-1/2 bg-white border-4 border-primary rounded-full flex items-center justify-center z-10 shadow-sm">
                    <span className="text-xs font-bold text-secondary">{step.num}</span>
                  </div>

                  {/* Content Box */}
                  <div className={`pr-20 md:pr-0 w-full md:w-1/2 ${isEven ? 'md:pl-16 text-right md:text-left' : 'md:pr-16 text-right'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
