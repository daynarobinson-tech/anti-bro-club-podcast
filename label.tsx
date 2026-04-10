"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle2, Mic, MessageSquare, Users, X, ArrowRight } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    whatYouDo: "",
    hotTake: "",
    website: "",
    podcastExperience: "",
    anythingElse: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Google Sheets integration - replace with your Google Apps Script URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzfaomzOep0s4wv9nyqZIedSkhhQpRaq1ej9cCYyXOR6BwiC_qXsELYqteBB-IR934f/exec";

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Still show success since no-cors won't return a response
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="grain-overlay" />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-orange-50/30 to-stone-100" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 animate-fade-in-up opacity-0">
            <Mic className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">New Podcast</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 animate-fade-in-up opacity-0 animate-delay-100">
            ANTI BRO
            <span className="block text-gradient">CLUB</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 animate-fade-in-up opacity-0 animate-delay-200 leading-relaxed">
            Got a story the bro marketing world doesn&apos;t want told?
            <span className="block mt-2 text-foreground font-semibold">
              We want you on the show.
            </span>
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 animate-delay-300">
            For coaches, consultants, and founders who build with integrity — not manipulation.
            <span className="text-foreground font-medium"> Women and aligned men welcome.</span>
          </p>

          <a
            href="#apply"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-lg font-semibold hover:bg-foreground/90 transition-all duration-300 hover-lift animate-fade-in-up opacity-0 animate-delay-400"
          >
            Apply to Be a Guest
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-24 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            ABOUT THE SHOW
          </h2>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">Anti Bro Club</span> is a podcast for business owners who are done with the hype, hustle, and hollow promises of bro marketing culture.
            </p>

            <p>
              We talk <span className="text-foreground font-medium">revenue, strategy, and real growth</span> — without the fake scarcity, manufactured urgency, or{" "}
              <span className="strikethrough-decoration">6-figure-in-6-weeks</span> nonsense.
            </p>

            <div className="pt-6 border-t border-border">
              <p className="text-base text-muted-foreground">
                Hosted by <span className="text-foreground font-semibold">Dayna Robinson</span>, Revenue Growth Partner and digital nomad running her business from Bali.
              </p>
              <p className="text-base text-muted-foreground mt-3">
                Yes, men are welcome here — the ones who actually align. Because dismantling bro culture takes all of us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">
            WHO WE&apos;RE
            <span className="text-gradient"> LOOKING FOR</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Coaches, consultants, strategists, or founders — women and men",
              "You have a real, honest, or contrarian take on business growth",
              "You've walked away from hype culture (or never bought into it)",
              "You build with integrity, not manipulation",
              "Men especially: if you've called out bro tactics in your own space, we want that conversation",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-card rounded-lg hover-lift"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
            <div className="flex items-center gap-3 mb-2">
              <X className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">No gatekeeping. No pitch-fests. No egos.</span>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="px-6 py-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight text-background">
            WHAT TO EXPECT
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-background">Conversational</h3>
              <p className="text-background/70">
                No-fluff interview format. Real conversations, not rehearsed soundbites.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-background">Deep Dives</h3>
              <p className="text-background/70">
                We go deep — not surface level hot takes. Your expertise matters.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center">
                <Mic className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-background">Be Heard</h3>
              <p className="text-background/70">
                You&apos;ll be heard, not performed at. This is your space to share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="px-6 py-24 scroll-mt-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-center">
            APPLY NOW
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Tell us about yourself and your anti-bro hot take
          </p>

          {isSubmitted ? (
            <div className="text-center py-16 px-8 bg-card rounded-lg">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Application Received!</h3>
              <p className="text-muted-foreground">
                Thanks for applying to be a guest on Anti Bro Club. We&apos;ll review your application and get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Jane Smith"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessName" className="text-sm font-medium">
                    Business Name *
                  </Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Your Business"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatYouDo" className="text-sm font-medium">
                  What you do and who you serve *
                </Label>
                <Textarea
                  id="whatYouDo"
                  name="whatYouDo"
                  required
                  value={formData.whatYouDo}
                  onChange={handleInputChange}
                  placeholder="Tell us about your work and the people you help..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hotTake" className="text-sm font-medium">
                  Your most anti-bro hot take *{" "}
                  <span className="text-primary">(this is the fun one)</span>
                </Label>
                <Textarea
                  id="hotTake"
                  name="hotTake"
                  required
                  value={formData.hotTake}
                  onChange={handleInputChange}
                  placeholder="What's your contrarian take on business, marketing, or growth?"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website" className="text-sm font-medium">
                  Link to website or socials *
                </Label>
                <Input
                  id="website"
                  name="website"
                  required
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://yourwebsite.com"
                  className="h-12"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-medium">
                  Have you been on a podcast before? *
                </Label>
                <RadioGroup
                  value={formData.podcastExperience}
                  onValueChange={(value: string) =>
                    setFormData({ ...formData, podcastExperience: value })
                  }
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="font-normal cursor-pointer">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="font-normal cursor-pointer">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="anythingElse" className="text-sm font-medium">
                  Anything else you want us to know?
                </Label>
                <Textarea
                  id="anythingElse"
                  name="anythingElse"
                  value={formData.anythingElse}
                  onChange={handleInputChange}
                  placeholder="Optional: Share anything else that might be relevant..."
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !formData.podcastExperience}
                className="w-full h-14 text-lg font-semibold bg-foreground text-background hover:bg-foreground/90"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold tracking-tight mb-2">ANTI BRO CLUB</h3>
          <p className="text-muted-foreground">
            A podcast by{" "}
            <a
              href="https://daynarobinson.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Dayna Robinson
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
