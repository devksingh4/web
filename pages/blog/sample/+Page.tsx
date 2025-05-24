import BlogPage from "../../../layouts/LayoutBlog";
import config from "./+config"

export const Page: React.FC = () => {
    return (
        <BlogPage params={{ title: config.title }}>
            <h1 className="text-4xl">Here be dragons!</h1>
        </BlogPage>
    );
}