import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Server, ShieldCheck, BrainCircuit, Fingerprint, Radar,
  Sparkles, Network, MessageCircle, TrendingUp, AlertTriangle, FileOutput, Database,
  User, Lightbulb, Building, ArrowDown, ArrowRight, Cloud, Layers3
} from "lucide-react";

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
    icon: <User className="w-10 h-10" />,
    actor: "You",
    action: "Ask a financial question in natural language."
  },
  {
    step: "2",
    icon: <BrainCircuit className="w-10 h-10" />,
    actor: "AI Agent (Vertex AI + Gemini)",
    action: "Initiates a secure data request via API."
  },
  {
    step: "3",
    icon: <Server className="w-10 h-10" />,
    actor: "Fi Money MCP Server",
    action: "Securely aggregates and structures data from 18+ sources."
  },
  {
    step: "4",
    icon: <Building className="w-10 h-10" />,
    actor: "Financial Institutions",
    action: "Return structured financial data (JSON) back to the MCP Server."
  },
  {
    step: "5",
    icon: <Sparkles className="w-10 h-10" />,
    actor: "AI Agent (Gemini)",
    action: "Generates personalized insights and actions from the data."
  },
  {
    step: "6",
    icon: <Lightbulb className="w-10 h-10" />,
    actor: "You",
    action: "Receive actionable financial advice, tailored to you."
  }
];

const finalFlowStep = {
  icon: <ShieldCheck className="w-10 h-10 text-emerald-500" />,
  actor: "Full Data Control & Privacy",
  action: "Your data is yours. Secure, private, and under your control at all times."
};

const technologiesUsed = [
  {
    icon: <Server className="w-8 h-8 text-primary" />,
    title: "Fi Money's MCP Server",
    description: "Secure, real-time access to your complete financial data across 18+ sources.",
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "Google AI Stack",
    description: "The core intelligence layer powering personalized financial insights and orchestration.",
    subItems: [
      {
        icon: <Sparkles className="w-5 h-5 text-primary" />,
        name: "Gemini",
        details: "Core AI for natural language understanding and personalized financial insights.",
      },
      {
        icon: <Network className="w-5 h-5 text-primary" />,
        name: "Vertex AI Agent Builder",
        details: "Orchestrates the AI agents and handles data grounding via MCP.",
      },
      {
        icon: <Cloud className="w-5 h-5 text-primary" />,
        name: "Google Cloud Platform (GCP)",
        details: "Scalable, secure infrastructure.",
      },
    ],
  },
  {
    icon: <Layers3 className="w-8 h-8 text-primary" />,
    title: "Flexible UI",
    description: "Engage via voice, chat, mobile, or even API-driven experiences for ultimate flexibility.",
  },
];


const FlowchartNode = ({ step, icon, actor, action }: (typeof flowchartSteps)[0]) => (
  <div className="flex flex-col items-center text-center w-52 shrink-0">
    <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-primary/10 ring-8 ring-background">
      <div className="text-primary">{icon}</div>
    </div>
    <p className="text-sm font-semibold text-primary">STEP {step}</p>
    <h3 className="mt-1 text-xl font-semibold">{actor}</h3>
    <p className="mt-2 text-muted-foreground">{action}</p>
  </div>
);

export default function IconsPage() {
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

        <Card className="max-w-6xl mx-auto mt-16 shadow-lg">
          <CardHeader className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How It Works: The Data Flow</h2>
            <CardDescription className="mt-2 text-lg">
              A step-by-step look at how we turn your questions into answers.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8 overflow-x-auto">
            {/* Desktop landscape flowchart */}
            <div className="hidden lg:flex flex-col items-center gap-y-4">
              {/* Row 1 */}
              <div className="flex items-center">
                <FlowchartNode {...flowchartSteps[0]} />
                <ArrowRight className="w-10 h-10 mx-6 text-border shrink-0" />
                <FlowchartNode {...flowchartSteps[1]} />
                <ArrowRight className="w-10 h-10 mx-6 text-border shrink-0" />
                <FlowchartNode {...flowchartSteps[2]} />
              </div>
              {/* Connector */}
              <div className="flex justify-end w-full pl-[calc(100%/3*2)]">
                <div className="w-[calc(50%+28px)] h-12 border-b-2 border-r-2 rounded-br-2xl border-border"></div>
              </div>
              {/* Row 2 */}
              <div className="flex items-center">
                <FlowchartNode {...flowchartSteps[5]} />
                <ArrowRight className="w-10 h-10 mx-6 text-border shrink-0 -scale-x-100" />
                <FlowchartNode {...flowchartSteps[4]} />
                <ArrowRight className="w-10 h-10 mx-6 text-border shrink-0 -scale-x-100" />
                <FlowchartNode {...flowchartSteps[3]} />
              </div>
            </div>

            {/* Mobile & Tablet vertical flowchart */}
            <div className="flex flex-col items-center max-w-2xl gap-8 mx-auto lg:hidden">
              {flowchartSteps.map((item, index) => (
                <React.Fragment key={item.step}>
                  <FlowchartNode {...item} />
                  {index < flowchartSteps.length - 1 && (
                    <ArrowDown className="w-10 h-10 text-border" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Connector to final step */}
            <div className="flex justify-center my-8">
              <ArrowDown className="w-10 h-10 text-border" />
            </div>

            <div className="w-full max-w-lg p-6 mx-auto text-center border-2 rounded-lg shadow-inner bg-card border-emerald-500/50">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-emerald-500/10 ring-8 ring-background">
                  {finalFlowStep.icon}
                </div>
                <h3 className="mt-1 text-xl font-semibold">{finalFlowStep.actor}</h3>
                <p className="mt-2 text-muted-foreground">{finalFlowStep.action}</p>
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

        <div className="pt-16 mt-16 mb-8 text-center border-t">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Technologies Used</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            The powerful, secure, and scalable technologies behind Fi Advisor.
          </p>
        </div>

        <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-1 lg:grid-cols-3">
          {technologiesUsed.map((tech, index) => (
            <Card key={index} className="flex flex-col shadow-md">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 shrink-0">
                    {tech.icon}
                  </div>
                  <CardTitle className="text-xl leading-snug">{tech.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  {tech.description}
                </p>
                {tech.subItems && (
                  <div className="mt-4 space-y-3">
                    {tech.subItems.map((sub, subIndex) => (
                      <div key={subIndex} className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 mt-1 rounded-md bg-primary/5 shrink-0">
                          {sub.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{sub.name}</p>
                          <p className="text-sm text-muted-foreground">{sub.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="pt-16 mt-16 mb-8 text-center border-t">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">System Architecture</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            How we securely connect your data to AI-powered insights.
          </p>
        </div>

        <Card className="max-w-6xl mx-auto shadow-lg">
          <CardContent className="p-4 sm:p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Column 1: Input & Control */}
              <div className="space-y-6">
                <div className="p-4 space-y-2 border rounded-lg shadow-sm bg-background">
                  <h3 className="flex items-center gap-3 font-semibold text-foreground">
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-primary/10 text-primary"><User className="w-5 h-5" /></span>
                    <span className="text-base">User Interaction</span>
                  </h3>
                  <p className="pl-14 text-sm text-muted-foreground">Natural language queries via chat, voice, or web interface.</p>
                </div>
                <div className="p-4 space-y-2 border rounded-lg shadow-sm bg-background">
                  <h3 className="flex items-center gap-3 font-semibold text-foreground">
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-primary/10 text-primary"><FileOutput className="w-5 h-5" /></span>
                    <span className="text-base">User Control</span>
                  </h3>
                  <p className="pl-14 text-sm text-muted-foreground">Users own and can export their generated financial insights.</p>
                </div>
              </div>
              
              {/* Column 2: Core Data Flow */}
              <div className="flex flex-col items-center justify-start gap-4 p-4 rounded-lg bg-muted/50">
                <div className="w-full p-4 text-center border rounded-lg shadow-sm bg-background">
                  <h3 className="flex items-center justify-center gap-2 font-semibold"><BrainCircuit className="w-5 h-5 shrink-0" /> AI Agent</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Processes requests & generates insights.</p>
                </div>
                <ArrowDown className="w-8 h-8 text-border" />
                <div className="w-full p-4 text-center border rounded-lg shadow-sm bg-background">
                  <h3 className="flex items-center justify-center gap-2 font-semibold"><Server className="w-5 h-5 shrink-0" /> Fi Money MCP</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Aggregates & structures data.</p>
                </div>
                <ArrowDown className="w-8 h-8 text-border" />
                <div className="w-full p-4 text-center border rounded-lg shadow-sm bg-background">
                  <h3 className="flex items-center justify-center gap-2 font-semibold"><Building className="w-5 h-5 shrink-0" /> Financial Institutions</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Provides data from 18+ sources.</p>
                </div>
              </div>

              {/* Column 3: Guiding Principles */}
              <div className="space-y-6">
                <div className="p-4 space-y-2 border rounded-lg shadow-sm bg-background">
                  <h3 className="flex items-center gap-3 font-semibold text-foreground">
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-primary/10 text-primary"><Sparkles className="w-5 h-5" /></span>
                    <span className="text-base">Key Functionalities</span>
                  </h3>
                  <ul className="pl-14 text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li>Analysis & Planning</li>
                    <li>Debt Optimization</li>
                    <li>Anomaly Detection</li>
                  </ul>
                </div>
                <div className="p-4 space-y-2 border rounded-lg shadow-sm bg-background">
                  <h3 className="flex items-center gap-3 font-semibold text-foreground">
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-primary/10 text-primary"><ShieldCheck className="w-5 h-5" /></span>
                    <span className="text-base">Security & Privacy</span>
                  </h3>
                   <ul className="pl-14 text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li>Consent-based access</li>
                    <li>End-to-end encryption</li>
                    <li>Multi-factor authentication</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
