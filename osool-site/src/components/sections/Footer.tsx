import osoolLogo from '@/assets/osool-logo.png';

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <img src={osoolLogo} alt="أصول" className="h-12 object-contain mb-6" />
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              استشارات مالية متميزة، محاسبة احترافية، ولوحات بيانات تنفيذية لأعمالك.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-secondary mb-4">معلومات التواصل</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>عمان، الأردن</li>
              <li><a href="tel:+92798401720" className="hover:text-primary transition-colors" dir="ltr">+927 984 01720</a></li>
              <li><a href="mailto:info@osool.pro" className="hover:text-primary transition-colors" dir="ltr">info@osool.pro</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-secondary mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">استشارة عبر واتساب</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">لينكد إن</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">بوابة العملاء</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} أصول للحلول المالية. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-primary transition-colors">شروط الخدمة</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
