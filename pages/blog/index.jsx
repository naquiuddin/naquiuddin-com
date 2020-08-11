import Unsplash from "react-unsplash-wrapper";
import Link from "next/link";
const dayjs = require("dayjs");
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
import importAll from "import-all.macro";
import HomeLayout from "../../layouts/home";
const postsAll = importAll.sync("./*.mdx");

const formatPath = (path) => {
  return path.replace(/\.mdx$/, "");
};

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const getStaticProps = async () => {
  let postsMetas = [];
  Object.keys(postsAll).forEach((key) => {
    const { metaData } = postsAll[key];
    const postMeta = {
      ...metaData,
      path: formatPath(key),
    };
    postsMetas.push(postMeta);
  });
  return {
    props: { postsMetas },
  };
};

const Blog = ({ postsMetas }) => {
  return (
    <HomeLayout>
      <div className="flex flex-col justify-center py-12 mb-4 bg-teal-300 w-8-12 ">
        <h1 className="text-4xl text-center text-green-900 font-heading">
          Naqui's Blog
        </h1>
        <h2 className="text-2xl font-light text-center text-gray-900 font-heading">
          Teaching everything I learned to grow my career and make my life
          better
        </h2>
      </div>
      <div className="flex flex-row flex-wrap w-11/12 mx-auto sm:w-8/12">
        {postsMetas.map(
          ({ title, author, excerpt, publishedAt, photoId, path }) => (
            <div key={path} className="w-full p-3 sm:w-1/2">
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

              <Link href={`/blog/${path}/`}>
                <a className="mb-2 text-2xl text-green-900 font-heading">
                  {title}
                </a>
              </Link>
              <p className="font-light font-body text-md">{excerpt}</p>
            </div>
          )
        )}
      </div>
    </HomeLayout>
  );
};

export default Blog;
