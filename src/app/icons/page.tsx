import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Server, ShieldCheck, BrainCircuit, Fingerprint, Radar,
  Sparkles, Network, MessageCircle, TrendingUp, AlertTriangle, FileOutput, Database,
  User, Lightbulb, Building, ArrowDown, ArrowUp
} from "lucide-react";

export default function IconsPage() {
  const uspItems = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "First-Mover MCP",
      description: "Unprecedented, secure access to all your financial data for a complete, accurate picture."
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-primary" />,
      title: "Google AI Power",
      description: "Gemini's intelligence and Vertex AI's orchestration deliver unparalleled accuracy and scale."
    },
    {
      icon: <Fingerprint className="w-6 h-6 text-primary" />,
      title: "True User Control",
      description: "Privacy-by-design with explicit consent ensures you always own and control your data."
    },
    {
      icon: <Radar className="w-6 h-6 text-primary" />,
      title: "Holistic & Proactive",
      description: "Goes beyond budgeting to analyze investments, debt, goals, and detect anomalies."
    }
  ];

  const keyFeatures = [
    {
        icon: <Sparkles className="w-6 h-6 text-primary" />,
        title: "Personalized Financial Insights",
        description: "Answers your specific financial questions using your real data."
    },
    {
        icon: <Network className="w-6 h-6 text-primary" />,
        title: "Comprehensive Data Access",
        description: "Unifies assets, liabilities, net worth, etc., from 18+ sources via Fi MCP."
    },
    {
        icon: <MessageCircle className="w-6 h-6 text-primary" />,
        title: "Natural Language Interaction",
        description: 'Talk to your finances like a human ("How much money will I have at 40?").'
    },
    {
        icon: <BrainCircuit className="w-6 h-6 text-primary" />,
        title: "Smart Analysis & Planning",
        description: "Gemini powers trend analysis, scenario simulations, and goal planning."
    },
    {
        icon: <TrendingUp className="w-6 h-6 text-primary" />,
        title: "Debt & Investment Optimization",
        description: "Guides strategies for loans and portfolios."
    },
    {
        icon: <AlertTriangle className="w-6 h-6 text-primary" />,
        title: "Anomaly Detection",
        description: "Identifies unusual financial activity."
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-primary" />,
        title: "Secure & Private",
        description: "Fi MCP ensures secure, consent-based data access with 2FA and encryption."
    },
    {
        icon: <FileOutput className="w-6 h-6 text-primary" />,
        title: "User Control",
        description: "You own your insights; exportable and extensible."
    }
  ];

  const flowchartSteps = [
    {
      step: "1",
      icon: <User className="w-6 h-6" />,
      actor: "You",
      action: "Ask a financial question in natural language."
    },
    {
      step: "2",
      icon: <BrainCircuit className="w-6 h-6" />,
      actor: "AI Agent (Vertex AI + Gemini)",
      action: "Initiates a secure data request via API."
    },
    {
      step: "3",
      icon: <Server className="w-6 h-6" />,
      actor: "Fi Money MCP Server",
      action: "Securely aggregates and structures data from 18+ sources (Banks, MFs, EPF, etc.)."
    },
    {
      step: "4",
      icon: <Building className="w-6 h-6" />,
      actor: "External Financial Institutions",
      action: "Return structured financial data (JSON) back to the MCP Server."
    },
    {
      step: "5",
      icon: <Sparkles className="w-6 h-6" />,
      actor: "AI Agent (Gemini for Analysis)",
      action: "Generates personalized insights, scenarios, and actions from the unified data."
    },
    {
      step: "6",
      icon: <Lightbulb className="w-6 h-6" />,
      actor: "You",
      action: "Receive actionable financial advice, tailored to your unique situation."
    }
  ];

  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1 p-4 md:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Why We&apos;re Different</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            From generic advice to actionable intelligence.
          </p>
        </div>

        <div className="grid max-w-4xl mx-auto gap-8 md:grid-cols-2">
          {/* Card 1: The Problem */}
          <Card className="flex flex-col shadow-lg">
            <CardHeader className="items-center text-center">
              <div className="flex items-center justify-center w-24 h-24 mb-4 rounded-full bg-destructive/10">
                  <svg
                      width="56"
                      height="56"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-destructive"
                  >
                      <path d="M12 8V4H8" />
                      <rect width="16" height="12" x="4" y="8" rx="2" />
                      <path d="M2 14h2" />
                      <path d="M20 14h2" />
                      <path d="M15 13v2" />
                      <path d="M9 13v2" />
                      <path d="m14.5 17.5-5-5" />
                      <path d="m9.5 17.5 5-5" />
                  </svg>
              </div>
              <CardTitle className="text-2xl">The Problem</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                AI lacks your real, structured financial data, leading to generic advice that doesn&apos;t fit your life.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: The Solution -> Result */}
          <Card className="flex flex-col shadow-lg border-primary/50 ring-2 ring-primary/10">
            <CardHeader className="items-center text-center">
                <div className="relative flex items-center justify-center w-24 h-24 mb-4 rounded-full bg-primary/10">
                    <Server className="w-12 h-12 text-primary" />
                    <Sparkles className="absolute p-1 bottom-1 right-1 h-8 w-8 fill-background bg-primary/10 rounded-full text-primary" />
                </div>
              <CardTitle className="text-2xl">Our Solution → The Result</CardTitle>
            </CardHeader>
            <CardContent className="px-4 space-y-4 text-left sm:px-6">
                <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                        <Database className="w-5 h-5 text-primary" />
                        <span>Fi MCP: The Data Foundation</span>
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground pl-7">Securely unifies all your financial accounts and history.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                        <BrainCircuit className="w-5 h-5 text-primary" />
                        <span>Google AI: The Intelligence</span>
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground pl-7">Analyzes your complete data to find opportunities.</p>
                </div>
                <Separator />
                <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-emerald-500" />
                        <span>Result: Actionable Insights</span>
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground pl-7">Receive deeply personalized advice to make smarter decisions.</p>
                </div>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-5xl mx-auto mt-16 shadow-lg">
          <CardHeader className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Unique Selling Proposition</h2>
            <CardDescription className="mt-2 text-lg">
              The core pillars that make Fi Advisor a truly intelligent financial partner.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-8 pt-6 md:grid-cols-2">
            {uspItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-1 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="max-w-4xl mx-auto mt-16 shadow-lg">
          <CardHeader className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How It Works: The Data Flow</h2>
            <CardDescription className="mt-2 text-lg">
              A step-by-step look at how we turn your questions into answers.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="relative">
              {/* Central connecting line */}
              <div className="absolute left-6 top-5 bottom-8 w-0.5 bg-border/70" aria-hidden="true"></div>

              <div className="space-y-12">
                {flowchartSteps.map((item) => (
                  <div key={item.step} className="relative flex items-start gap-6">
                    <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 ring-8 ring-background">
                      <div className="text-primary">{item.icon}</div>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm font-semibold text-primary">STEP {item.step}</p>
                      <h3 className="text-lg font-semibold">{item.actor}</h3>
                      <p className="mt-1 text-muted-foreground">{item.action}</p>
                    </div>
                  </div>
                ))}
                
                {/* Final privacy step */}
                <div className="relative flex items-start gap-6">
                   <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 ring-8 ring-background">
                      <ShieldCheck className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div className="pt-2">
                      <h3 className="text-lg font-semibold">Full Data Control & Privacy</h3>
                      <p className="mt-1 text-muted-foreground">Your data is yours. Secure, private, and under your control at all times.</p>
                    </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="pt-16 mt-16 mb-8 text-center border-t">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Key Features</h2>
            <p className="mt-2 text-lg text-muted-foreground">
                A comprehensive suite of tools for intelligent financial management.
            </p>
        </div>

        <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
            {keyFeatures.map((feature, index) => (
                <Card key={index} className="flex flex-col shadow-md">
                    <CardHeader className="flex-row items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 shrink-0">
                            {feature.icon}
                        </div>
                        <CardTitle className="text-lg leading-snug">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <p className="text-muted-foreground">
                            {feature.description}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </main>
    </div>
  );
}
