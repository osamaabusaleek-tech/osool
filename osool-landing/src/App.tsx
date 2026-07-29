import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import WhyChoose from '@/components/sections/WhyChoose';
import HowItWorks from '@/components/sections/HowItWorks';
import DashboardPreview from '@/components/sections/DashboardPreview';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';
import FloatingWhatsApp from '@/components/sections/FloatingWhatsApp';

const queryClient = new QueryClient();

function LandingPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-foreground selection:bg-primary selection:text-white" dir="rtl">
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <HowItWorks />
      <DashboardPreview />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;