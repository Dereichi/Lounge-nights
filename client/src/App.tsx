import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import FAQ from "@/pages/faq";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Jobs from "@/pages/jobs";
import Help from "@/pages/help";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about-us" component={About} />
      <Route path="/frequently-asked-questions" component={FAQ} />
      <Route path="/privacy-policy" component={Privacy} />
      <Route path="/terms-and-conditions" component={Terms} />
      <Route path="/careers" component={Jobs} />
      <Route path="/contact-support" component={Help} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
