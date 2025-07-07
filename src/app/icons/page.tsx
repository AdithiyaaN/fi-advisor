import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Server, ShieldCheck, BrainCircuit, Fingerprint, Radar,
  Sparkles, Network, MessageCircle, TrendingUp, AlertTriangle, FileOutput 
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

  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1 p-4 md:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Why We&apos;re Different</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Understanding the leap from current AI limitations to true financial intelligence.
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
              <CardTitle className="text-2xl">AI Fails You</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Current AI can&apos;t access your private, scattered financial data. It sees an incomplete picture, leading to generic advice that doesn&apos;t fit your unique life.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: The Solution */}
          <Card className="flex flex-col shadow-lg border-primary/50 ring-2 ring-primary/10">
            <CardHeader className="items-center text-center">
                <div className="relative flex items-center justify-center w-24 h-24 mb-4 rounded-full bg-primary/10">
                    <Server className="w-12 h-12 text-primary" />
                    <ShieldCheck className="absolute p-1 bottom-1 right-1 h-8 w-8 fill-background bg-primary/10 rounded-full text-primary" />
                </div>
              <CardTitle className="text-2xl">The Breakthrough</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Fi Money&apos;s MCP Server – the first consumer-facing MCP – provides secure, real-time access to your <span className="font-semibold text-foreground">entire</span> financial footprint.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Unique Selling Proposition</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            The core pillars that make Fi Advisor a truly intelligent financial partner.
          </p>
        </div>

        <div className="grid max-w-5xl mx-auto gap-8 md:grid-cols-2">
          {uspItems.map((item, index) => (
            <Card key={index} className="flex flex-col shadow-md">
              <CardHeader className="flex-row items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  {item.icon}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

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
