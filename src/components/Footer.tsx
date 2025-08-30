export default function Footer() {
    return (
        <footer className="border-t border-brand-border mt-20">
            <div className="container py-10 text-sm opacity-75 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                <div>© {new Date().getFullYear()} MAIBizz</div>
                <a href="mailto:info@maibizz.be" className="underline">info@maibizz.be</a>
            </div>
        </footer>
    );
}
