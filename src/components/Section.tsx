export default function Section({
                                    id, title, children, kicker, subtitle,
                                }: { id?: string; title: string; kicker?: string; subtitle?: string; children: React.ReactNode; }) {
    return (
        <section id={id} className="container py-16 md:py-24">
            <div className="max-w-2xl">
                {kicker && <div className="badge">{kicker}</div>}
                <h2 className="text-3xl md:text-4xl font-extrabold mt-3">{title}</h2>
                {subtitle && <p className="mt-3 text-base text-[#cbd5e1]">{subtitle}</p>}
            </div>
            <div className="mt-8">{children}</div>
        </section>
    );
}
