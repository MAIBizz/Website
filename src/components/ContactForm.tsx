"use client";
import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");
        try {
            const form = new FormData(e.currentTarget);
            // TODO: vervang onderstaande fetch door jouw endpoint (n8n/webhook, API route, etc.)
            // await fetch("/api/contact", { method: "POST", body: form });

            // Demo: simuleer succes
            await new Promise(r => setTimeout(r, 600));
            setStatus("sent");
            e.currentTarget.reset();
        } catch (err) {
            setStatus("error");
        }
    }

    return (
        <form className="grid gap-3" onSubmit={handleSubmit}>
            <input className="input" name="name" placeholder="Your name" aria-label="Your name" required/>
            <input className="input" name="company" placeholder="Company" aria-label="Company"/>
            <input className="input" name="email" type="email" placeholder="Email" aria-label="Email" required/>
            <textarea className="input" name="message" placeholder="What do you want to automate?" rows={4} aria-label="Message" required/>
            <button className="btn btn-primary btn-glow" type="submit" disabled={status==="sending"}>
                {status==="sending" ? "Sending..." : "Request consult"}
            </button>
            {status==="sent" && <div className="text-sm opacity-80">Thanks! We’ll get back within 24h.</div>}
            {status==="error" && <div className="text-sm opacity-80">Something went wrong. Try again.</div>}
        </form>
    );
}
