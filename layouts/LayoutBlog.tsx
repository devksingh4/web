import React from "react";
import { portfolio } from "../data";
// Assuming IconOnlyLinkButtons is not used in this specific component,
// it can be removed if not needed elsewhere or tree-shaken by your bundler.
// import { IconOnlyLinkButtons } from "../pages/index/+Page";
import { BasicNavbar } from "../components/BasicNavbar";

interface BlogPageParams {
    title: string;
    date?: string;
    author?: string;
    categories?: string[];
    tags?: string[];
}

interface BlogPageLayoutProps {
    params: BlogPageParams;
    children: React.ReactNode;
}

const BlogPage: React.FC<BlogPageLayoutProps> = ({ params, children }) => {
    return (
        <div className="bg-slate-900 text-white min-h-screen flex flex-col">
            <BasicNavbar />

            {/* Main Content Area */}
            {/* Changed flex to flex-col on small screens, sm:flex-row for larger */}
            <div className="flex-grow container mx-auto px-4 py-8 flex flex-col sm:flex-row">
                {/* Left Column: Blog Post Parameters */}
                {/* Adjusted width for stacking and side-by-side, added margin-bottom for stacked view */}
                <aside className="w-full sm:w-1/4 sm:pr-8 mb-8 sm:mb-0">
                    <h2 className="text-4xl font-bold mb-4">{params.title}</h2>
                    {params.date && (
                        <p className="text-slate-400 mb-2">Published on: {params.date}</p>
                    )}
                    <p className="text-slate-400 mb-2">By: {params.author || portfolio.name}</p>

                    {params.categories && params.categories.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold mb-2 text-slate-200">Categories</h3>
                            <ul className="list-disc list-inside text-slate-300">
                                {params.categories.map((category) => (
                                    <li key={category}>{category}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {params.tags && params.tags.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold mb-2 text-slate-200">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {params.tags.map((tag) => (
                                    <span key={tag} className="bg-slate-700 px-2 py-1 rounded text-sm hover:bg-slate-600 cursor-pointer">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </aside>

                {/* Adjusted width for stacking and side-by-side */}
                <main className="w-full sm:w-3/4">
                    <article className="prose prose-invert lg:prose-xl max-w-none">
                        {children}
                    </article>
                </main>
            </div>

            <footer className="border-t border-slate-700 bg-slate-800 py-4 text-center text-slate-400">
                <p>&copy; {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default BlogPage;