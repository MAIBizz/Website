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
        <section className="container pt-16 md:pt-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                AI agents & automations that
                <span className="text-brand.primary"> save time</span> and
                <span className="text-brand.accent"> grow revenue</span>.
              </h1>
              <p className="mt-6 text-lg opacity-90 max-w-prose">
                We wire AI into your existing tools — Gmail, Slack, Drive, WordPress, PostgreSQL — to remove busywork and speed up sales/service.
              </p>
              <div className="mt-8 flex gap-3">
                <a href="#contact" className="px-5 py-3 rounded-2xl bg-brand.primary text-black font-semibold">Book a free consult</a>
                <a href="#services" className="px-5 py-3 rounded-2xl border border-brand-border">Explore services</a>
              </div>
            </div>
            <div className="rounded-3xl border border-brand-border bg-brand.card p-6">
              <Image
                  src="/assets/hero-ui.svg"
                  alt="Automation preview"
                  width={900}
                  height={600}
                  className="w-full h-auto opacity-90"
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <Section id="services" kicker="What we do" title="Practical AI that plugs into your stack">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="font-semibold">Chatbots & RAG</div>
              <p className="opacity-80 mt-2 text-sm">Sales & support bots grounded in your docs and data.</p>
            </Card>
            <Card>
              <div className="font-semibold">Workflow Automation</div>
              <p className="opacity-80 mt-2 text-sm">n8n / Zapier / Make across Gmail, Slack, Drive, WordPress.</p>
            </Card>
            <Card>
              <div className="font-semibold">Custom Agents</div>
              <p className="opacity-80 mt-2 text-sm">Hosted on Vercel/Hetzner with Postgres & role-based access.</p>
            </Card>
          </div>
        </Section>

        {/* Cases (placeholder) */}
        <Section id="cases" kicker="Proof" title="Recent results">
          <div className="grid md:grid-cols-3 gap-6">
            <Card><div className="font-semibold">Lead capture bot</div><p className="opacity-80 mt-2 text-sm">+32% qualified leads in 6 weeks.</p></Card>
            <Card><div className="font-semibold">Ticket triage</div><p className="opacity-80 mt-2 text-sm">–41% response time, happier customers.</p></Card>
            <Card><div className="font-semibold">Invoice assistant</div><p className="opacity-80 mt-2 text-sm">5h/week saved for ops team.</p></Card>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" kicker="Get started" title="Free 20-minute consult">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <form className="grid gap-3">
                <input className="bg-transparent rounded-xl border border-brand-border px-4 py-3" placeholder="Your name" />
                <input className="bg-transparent rounded-xl border border-brand-border px-4 py-3" placeholder="Company" />
                <input className="bg-transparent rounded-xl border border-brand-border px-4 py-3" placeholder="Email" type="email" />
                <textarea className="bg-transparent rounded-xl border border-brand-border px-4 py-3" placeholder="What do you want to automate?" rows={4} />
                <button className="rounded-2xl px-4 py-3 bg-brand.primary text-black font-semibold">Request consult</button>
              </form>
            </Card>
            <Card>
              <div className="text-sm opacity-80">
                Prefer email? <a className="underline" href="mailto:info@maibizz.be">info@maibizz.be</a>
              </div>
              <div className="mt-4 text-sm opacity-70">Avg. reply within 24h.</div>
            </Card>
          </div>
        </Section>

        <Footer />
      </>
  );
}
