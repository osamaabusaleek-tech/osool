import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const barData = [
  { month: 'يناير', revenue: 45000 },
  { month: 'فبراير', revenue: 52000 },
  { month: 'مارس', revenue: 48000 },
  { month: 'أبريل', revenue: 61000 },
  { month: 'مايو', revenue: 59000 },
  { month: 'يونيو', revenue: 75000 },
];

const pieData = [
  { name: 'الرواتب', value: 45 },
  { name: 'التشغيل', value: 25 },
  { name: 'التسويق', value: 15 },
  { name: 'البرمجيات', value: 15 },
];

const COLORS = ['#1B3A6B', '#00B5B0', '#4A6FA5', '#99D5D4'];

export default function DashboardPreview() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider text-sm mb-3 block">رؤية تنفيذية شاملة</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">بياناتك، مرئيةً بوضوح</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">ذكاء أعمال على مستوى المؤسسات الكبرى. تابع مؤشراتك الرئيسية وراقب التدفق النقدي وحلّل الربحية بلمحة واحدة.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-xl border border-border bg-[#f8fafc] shadow-2xl overflow-hidden"
        >
          {/* Browser Chrome */}
          <div className="h-10 bg-slate-200 border-b border-border flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="mx-auto bg-white rounded-md h-6 w-1/2 max-w-sm flex items-center justify-center text-[10px] text-muted-foreground shadow-sm" dir="ltr">
              dashboard.osool.com/executive
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 md:p-8 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-secondary">الملخص التنفيذي</h3>
              <div className="text-sm font-medium bg-white px-3 py-1.5 rounded-md border border-border text-muted-foreground shadow-sm" dir="ltr">
                Q2 2025 YTD
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "إجمالي الإيرادات", value: "340,000 ر.س", trend: "+12.5%" },
                { label: "إجمالي المصروفات", value: "185,000 ر.س", trend: "-2.4%" },
                { label: "صافي الربح", value: "155,000 ر.س", trend: "+8.1%" },
                { label: "النقد التشغيلي", value: "42,000 ر.س", trend: "+15.3%" }
              ].map((kpi, i) => (
                <div key={i} className="bg-white p-4 md:p-5 rounded-xl border border-border shadow-sm">
                  <div className="text-xs md:text-sm text-muted-foreground mb-1">{kpi.label}</div>
                  <div className="text-lg md:text-2xl font-bold text-secondary mb-2" dir="ltr">{kpi.value}</div>
                  <div className={`text-xs font-medium ${kpi.trend.startsWith('+') ? 'text-green-600' : 'text-primary'}`} dir="ltr">
                    {kpi.trend} مقارنة بالفترة السابقة
                  </div>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto">
              <div className="bg-white p-5 rounded-xl border border-border shadow-sm lg:col-span-2">
                <h4 className="text-sm font-semibold text-secondary mb-4">اتجاه الإيرادات (شهريًا)</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                      <Tooltip 
                        cursor={{fill: '#f1f5f9'}} 
                        contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontFamily: 'Cairo, sans-serif' }}
                      />
                      <Bar dataKey="revenue" fill="var(--color-secondary)" radius={[4, 4, 0, 0]} maxBarSize={40} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-border shadow-sm flex flex-col">
                <h4 className="text-sm font-semibold text-secondary mb-4">توزيع المصروفات</h4>
                <div className="h-64 flex-grow">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                        stroke="none"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', fontFamily: 'Cairo, sans-serif' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {pieData.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS[i % COLORS.length] }}></div>
                      <span className="text-muted-foreground">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
