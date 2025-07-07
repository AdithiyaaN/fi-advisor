import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, ShieldCheck, BrainCircuit, Fingerprint, Radar } from "lucide-react";

export default function IconsPage() {
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
            <Card className="flex flex-col shadow-md">
                <CardHeader className="flex-row items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">First-Mover MCP</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Unprecedented, secure access to all your financial data for a complete, accurate picture.
                    </p>
                </CardContent>
            </Card>

            <Card className="flex flex-col shadow-md">
                <CardHeader className="flex-row items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <BrainCircuit className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Google AI Power</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Gemini's intelligence and Vertex AI's orchestration deliver unparalleled accuracy and scale.
                    </p>
                </CardContent>
            </Card>

            <Card className="flex flex-col shadow-md">
                <CardHeader className="flex-row items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <Fingerprint className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">True User Control</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Privacy-by-design with explicit consent ensures you always own and control your data.
                    </p>
                </CardContent>
            </Card>

            <Card className="flex flex-col shadow-md">
                <CardHeader className="flex-row items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <Radar className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Holistic & Proactive</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Goes beyond budgeting to analyze investments, debt, goals, and detect anomalies.
                    </p>
                </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}
