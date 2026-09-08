"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { site } from "@/data/site";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/reveal";

export function InquirySection({
  compact = false,
  presetInterest,
}: {
  compact?: boolean;
  presetInterest?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Demo only — no data is sent anywhere. Simulate a brief send delay
    // before showing the success state.
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  return (
    <section id="inquiry" className="bg-ink py-28 text-ivory md:py-36">
      <div className="container-luxe grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal>
            <span className="label-caps-light text-ivory/45">Start An Inquiry</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-4xl leading-[1.1] sm:text-5xl">
              Find your
              <br />
              <span className="italic text-champagne">signature piece.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-sm text-[15px] leading-relaxed text-ivory/60">
              Our team would be delighted to help you find a piece that feels
              uniquely yours.
            </p>
          </Reveal>

          {!compact && (
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col gap-5 border-t border-ivory/15 pt-8 sm:flex-row sm:items-center sm:gap-8">
                <a href={site.phoneHref} className="link-underline text-[15px] text-ivory/80 hover:text-ivory">
                  {site.phone}
                </a>
                <Link
                  href="/the-house"
                  className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-widest2 text-ivory/70 hover:text-champagne"
                >
                  Visit Our Showroom
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              </div>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.15}>
          <div className="relative min-h-[520px] border border-ivory/15 bg-ivory/[0.03] p-8 md:p-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex h-full min-h-[456px] flex-col items-center justify-center text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-champagne/50 text-champagne">
                    <Check className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-7 font-serif text-2xl text-ivory">
                    Thank you for your inquiry.
                  </h3>
                  <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-ivory/60">
                    This is a design demo, so no message was sent — but this is
                    exactly how a client inquiry would be received.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="link-underline mt-8 text-[12px] font-medium uppercase tracking-widest2 text-ivory/70 hover:text-ivory"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="space-y-7"
                >
                  <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name" className="text-ivory/45">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Full name"
                        className="border-ivory/25 text-ivory placeholder:text-ivory/30 focus:border-ivory"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-ivory/45">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="0917 000 0000"
                        className="border-ivory/25 text-ivory placeholder:text-ivory/30 focus:border-ivory"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-ivory/45">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@email.com"
                      className="border-ivory/25 text-ivory placeholder:text-ivory/30 focus:border-ivory"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interest" className="text-ivory/45">
                      Interested In
                    </Label>
                    <Select
                      id="interest"
                      name="interest"
                      defaultValue={presetInterest || ""}
                      className="border-ivory/25 text-ivory [&>option]:text-ink"
                    >
                      <option value="" disabled>
                        Select a piece or category
                      </option>
                      {products.map((p) => (
                        <option key={p.slug} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="Something Else">Something else</option>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-ivory/45">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Tell us what you have in mind…"
                      className="border-ivory/25 text-ivory placeholder:text-ivory/30 focus:border-ivory"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="inverse"
                    disabled={submitting}
                    className="mt-2 w-full sm:w-auto"
                  >
                    {submitting ? "Sending…" : "Send Inquiry"}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
