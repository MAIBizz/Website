export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-2xl border border-brand-border bg-brand.card p-6 hover:shadow-soft transition">
            {children}
        </div>
    );
}
