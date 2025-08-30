export default function Section({
                                    id, title, children, kicker,
                                }: { id?: string; title: string; kicker?: string; children: React.ReactNode; }) {
    return (
        <section id={id} className="container py-16 md:py-24">
            <div className="max-w-3xl">
                {kicker && <div className="text-brand.accent text-sm font-semibold tracking-wide">{kicker}</div>}
                <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{title}</h2>
            </div>
            <div className="mt-8">{children}</div>
        </section>
    );
}
