import HomeLayout from "../../layouts/home";
import { frontMatter as docsPages } from "./*.mdx";

const Blog = () => {
  return (
    <HomeLayout>
      {docsPages.map(({ title, author }) => (
        <h1>
          {title} by {author}
        </h1>
      ))}
    </HomeLayout>
  );
};

export default Blog;
