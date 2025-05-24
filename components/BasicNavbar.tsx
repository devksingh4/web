import { portfolio } from "../data"
import { IconOnlyLinkButtons } from "../pages/index/+Page"

export const BasicNavbar: React.FC = () => {
    return (
        <header
            className={`sticky top-0 z-50 border-b border-slate-700 bg-slate-800 overflow-hidden transition-all duration-300 max-h-64 py-2 opacity-100`}
        >
            <div className="flex items-center justify-center">
                <h2 className="text-4xl font-bold text-center"><a href="/">{portfolio.name}</a></h2>
            </div>
            <IconOnlyLinkButtons />
        </header>
    )
}