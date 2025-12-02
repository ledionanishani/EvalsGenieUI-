import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import Login from "@/pages/login";
import DomainGeneral from "@/pages/domain/general";
import DomainOwners from "@/pages/domain/owners";
import DomainMembers from "@/pages/domain/members";
import DomainSchemas from "@/pages/domain/schemas";
import DomainTraining from "@/pages/domain/training";
import DomainPrompts from "@/pages/domain/prompts";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/login" component={Login} />
      
      {/* Domain Editor Routes */}
      <Route path="/domain/:id" component={DomainGeneral} />
      <Route path="/domain/:id/owners" component={DomainOwners} />
      <Route path="/domain/:id/members" component={DomainMembers} />
      <Route path="/domain/:id/requests" component={DomainMembers} /> {/* Reuse members for now */}
      <Route path="/domain/:id/schemas" component={DomainSchemas} />
      <Route path="/domain/:id/training" component={DomainTraining} />
      <Route path="/domain/:id/prompts" component={DomainPrompts} />

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
