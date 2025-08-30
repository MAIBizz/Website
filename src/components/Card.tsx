export default function Card({ children, as:Tag = "div", href }: { children: React.ReactNode; as?: any; href?: string; }) {
    const Inner = (
        <div className="rounded-2xl border border-brand bg-card p-6 hover:shadow-soft transition">
            {children}
        </div>
    );
    if (href) return <a href={href} className="block">{Inner}</a>;
    return <Tag>{Inner}</Tag>;
}
