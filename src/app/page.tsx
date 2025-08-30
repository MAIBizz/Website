import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Page() {
  return (
      <>
        <Navbar />

        {/* Hero */}
        <section className="container pt-16 md:pt-24" id="content" aria-label="MAIBizz hero">
          <div className="grid gap-10 items-center md:grid-cols-2">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                AI agents & automations that <span className="text-brand">save time</span> and <span className="text-brand-2">grow revenue</span>.
              </h1>
              <p className="mt-6 text-lg opacity-90 max-w-prose">
                We plug practical AI into your existing stack—Gmail, Slack, Drive, WordPress, PostgreSQL, n8n/Zapier—so your team can focus on the work that matters.
              </p>
              <div className="mt-8 flex gap-3">
                <a href="#contact" className="btn btn-primary btn-glow">Book a free consult</a>
                <a href="#services" className="btn btn-outline">Explore services</a>
              </div>
              <div className="mt-6 text-sm opacity-70">Avg. reply within 24h • Europe-based</div>
            </div>
            <div className="rounded-3xl border border-brand bg-card p-6 shadow-soft">
              {/*<Image
                  src="/assets/hero-ui.svg"
                  alt="Preview of MAIBizz automations UI"
                  width={900}
                  height={600}
                  className="w-full h-auto opacity-95"
                  priority
              />*/}
            </div>
          </div>

          {/* Logo cloud */}
          <div className="mt-12 opacity-80">
            <div className="badge">Trusted tools we integrate</div>
            <div className="grid grid-cols-2 gap-6 mt-6 md:grid-cols-6 items-center">
              {/* Inline simple logos as placeholders */}
              {["Gmail","Slack","WordPress","PostgreSQL","n8n","Zapier"].map((name)=>(
                  <div key={name} className="flex items-center justify-center py-3 border border-brand rounded-xl bg-card">{name}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <Section
            id="services"
            kicker="What we do"
            title="Practical AI that plugs into your stack"
            subtitle="Modular services you can start small with and scale up. Always grounded in your data and processes."
        >
          <div className="grid gap-6 grid-cols-1 grid-cols-3-md">
            <Card>
              <div className="font-semibold text-lg">Chatbots & RAG</div>
              <p className="opacity-80 mt-2 text-sm">Sales & support bots that answer from your docs, tickets & knowledge base with guardrails.</p>
              <ul className="mt-3 text-sm opacity-80 list-disc pl-5 space-y-1">
                <li>Website & WhatsApp</li><li>Source-of-truth connectors</li><li>Analytics & A/B prompts</li>
              </ul>
            </Card>
            <Card>
              <div className="font-semibold text-lg">Workflow Automation</div>
              <p className="opacity-80 mt-2 text-sm">n8n / Zapier / Make across Gmail, Slack, Drive, WordPress, Stripe, Sheets.</p>
              <ul className="mt-3 text-sm opacity-80 list-disc pl-5 space-y-1">
                <li>Lead routing & enrichment</li><li>Ticket triage & summaries</li><li>Report generation</li>
              </ul>
            </Card>
            <Card>
              <div className="font-semibold text-lg">Custom AI Agents</div>
              <p className="opacity-80 mt-2 text-sm">Secure agents hosted on Vercel/Hetzner with Postgres, role-based access & audit trails.</p>
              <ul className="mt-3 text-sm opacity-80 list-disc pl-5 space-y-1">
                <li>Tool-use & retrieval</li><li>Human-in-the-loop</li><li>Observability</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* Process */}
        <Section
            id="process"
            kicker="How we work"
            title="Fast discovery. Measured impact. Then scale."
            subtitle="A lightweight, low-risk path to real outcomes. Clear guardrails and measurable wins."
        >
          <div className="grid gap-6 grid-cols-1 grid-cols-3-md">
            <Card>
              <div className="font-semibold">1) Discovery (free)</div>
              <p className="opacity-80 mt-2 text-sm">20–30 min call → identify quick wins & data sources. You get a short plan and quote.</p>
            </Card>
            <Card>
              <div className="font-semibold">2) Pilot (2–3 weeks)</div>
              <p className="opacity-80 mt-2 text-sm">We ship a focused pilot with success metrics (e.g., time saved, reply time, conversion).</p>
            </Card>
            <Card>
              <div className="font-semibold">3) Scale & Support</div>
              <p className="opacity-80 mt-2 text-sm">Harden what works. Training, docs, monitoring. Optional retainer for continuous improvement.</p>
            </Card>
          </div>
        </Section>

        {/* Cases */}
        <Section id="cases" kicker="Proof" title="Selected outcomes" subtitle="Every client and stack is different—here are typical results corridors from recent builds.">
          <div className="grid gap-6 grid-cols-1 grid-cols-3-md">
            <Card><div className="font-semibold">Lead capture bot</div><p className="opacity-80 mt-2 text-sm">+20–35% qualified leads in 4–8 weeks via smarter prompts & enrichment.</p></Card>
            <Card><div className="font-semibold">Ticket triage</div><p className="opacity-80 mt-2 text-sm">–30–50% first-response time using summaries, intent, and canned-actions.</p></Card>
            <Card><div className="font-semibold">Invoice assistant</div><p className="opacity-80 mt-2 text-sm">3–6 h/week saved for ops with automated checks, reminders & drafts.</p></Card>
          </div>
        </Section>

        {/* Testimonials */}
        <Section kicker="What clients say" title="“Clear plan. Fast delivery. Real impact.”">
          <div className="grid gap-6 grid-cols-1 grid-cols-2-md">
            <Card>
              <p className="text-sm opacity-85">
                “They plugged AI into our existing tools—no rebuild—so we saw value in days, not months.”
              </p>
              <div className="mt-3 text-xs opacity-70">— SME Founder, Belgium</div>
            </Card>
            <Card>
              <p className="text-sm opacity-85">
                “Support got faster and calmer. The team loves the summaries and suggested replies.”
              </p>
              <div className="mt-3 text-xs opacity-70">— Operations Lead, E-commerce</div>
            </Card>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" kicker="FAQ" title="Good questions">
          <div className="grid gap-4">
            <Card>
              <div className="font-semibold">What do you need from us?</div>
              <p className="opacity-80 mt-2 text-sm">Access to the tools you want automated, a contact person for quick validation, and sample data/docs.</p>
            </Card>
            <Card>
              <div className="font-semibold">Is our data safe?</div>
              <p className="opacity-80 mt-2 text-sm">Yes—scoped access, least-privilege keys, and privacy-first model choices. We can run on EU infra.</p>
            </Card>
            <Card>
              <div className="font-semibold">How do we measure success?</div>
              <p className="opacity-80 mt-2 text-sm">We agree on 1–2 primary metrics for the pilot (e.g., time saved, conversion, reply time) and track them.</p>
            </Card>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" kicker="Get started" title="Free 20-minute consult">
          <div className="grid gap-6 grid-cols-1 grid-cols-2-md">
            <Card>
              <form className="grid gap-3" onSubmit={(e)=>e.preventDefault()}>
                <input className="input" placeholder="Your name" aria-label="Your name"/>
                <input className="input" placeholder="Company" aria-label="Company"/>
                <input className="input" placeholder="Email" type="email" aria-label="Email"/>
                <textarea className="input" placeholder="What do you want to automate?" rows={4} aria-label="Message"/>
                <button className="btn btn-primary btn-glow" type="submit">Request consult</button>
              </form>
              <div className="mt-4 text-sm opacity-70">Prefer email? <a className="underline" href="mailto:info@maibizz.be">info@maibizz.be</a></div>
            </Card>
            <Card>
              <div className="text-sm opacity-85">
                <div className="font-semibold">Why MAIBizz?</div>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Start small, deliver fast</li>
                  <li>Integrate with your stack</li>
                  <li>Clear metrics & documentation</li>
                </ul>
              </div>
              <div className="hr my-6" />
              <div className="text-sm opacity-70">Avg. reply within 24h • Based in Belgium • EU data options</div>
            </Card>
          </div>
        </Section>

        <Footer />
      </>
  );
}
