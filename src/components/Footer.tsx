export default function Footer() {
    return (
        <footer className="mt-20 border-t border-brand">
            <div className="container py-10 text-sm grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                    <div className="font-bold">MAIBizz</div>
                    <p className="opacity-75">AI agents & automations that save time and grow revenue.</p>
                    <a href="mailto:info@maibizz.be" className="underline">info@maibizz.be</a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <div className="font-semibold opacity-90">Explore</div>
                        <a href="#services" className="opacity-80 hover:opacity-100">Services</a><br/>
                        <a href="#process" className="opacity-80 hover:opacity-100">How we work</a><br/>
                        <a href="#cases" className="opacity-80 hover:opacity-100">Cases</a><br/>
                        <a href="#faq" className="opacity-80 hover:opacity-100">FAQ</a>
                    </div>
                    <div className="space-y-2">
                        <div className="font-semibold opacity-90">Company</div>
                        <a href="/" className="opacity-80 hover:opacity-100">Home</a><br/>
                        <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a><br/>
                        <a href="/sitemap.xml" className="opacity-80 hover:opacity-100">Sitemap</a>
                    </div>
                </div>
                <div className="md:text-right opacity-75 flex md:justify-end items-end">
                    © {new Date().getFullYear()} MAIBizz • All rights reserved
                </div>
            </div>
        </footer>
    );
}
