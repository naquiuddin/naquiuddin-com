import Unsplash from "react-unsplash-wrapper";
import Link from "next/link";
const dayjs = require("dayjs");
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
import HomeLayout from "../../layouts/home";
import { frontMatter as docsPages } from "./*.mdx";

const formatPath = (path) => {
  return path.replace(/\.mdx$/, "");
};

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const Blog = () => {
  return (
    <HomeLayout>
      <div className="flex flex-col justify-center py-12 mb-4 bg-teal-300 w-8-12 ">
        <h1 className="text-4xl text-center text-green-900 font-heading">
          Khaja's Blog
        </h1>
        <h2 className="text-2xl font-light text-center text-gray-900 font-heading">
          Teaching everything I learned to grow my career and make my life
          better
        </h2>
      </div>
      <div className="flex flex-row flex-wrap w-8/12 mx-auto">
        {docsPages.map(
          ({
            __resourcePath,
            title,
            author,
            excerpt,
            publishedAt,
            photoId,
          }) => (
            <div key={__resourcePath} className="w-1/2 p-3">
              <div className="relative h-64">
                <Unsplash
                  expand={true}
                  className="object-fill overflow-hidden"
                  photoId={photoId}
                  height="350"
                />
              </div>
              <div className="flex flex-row justify-between my-2">
                <h3 className="text-sm text-teal-800 font-heading">
                  {capitalize(dayjs(publishedAt).fromNow())}
                </h3>
              </div>

              <Link href={`/${formatPath(__resourcePath)}/`}>
                <a className="mb-2 text-2xl text-green-900 font-heading">
                  {title}
                </a>
              </Link>
              <p className="font-light text-md">{excerpt}</p>
            </div>
          )
        )}
      </div>
    </HomeLayout>
  );
};

export default Blog;