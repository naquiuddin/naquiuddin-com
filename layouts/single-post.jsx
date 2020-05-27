import Unsplash from "react-unsplash-wrapper";
import HomeLayout from "./home";
const dayjs = require("dayjs");
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
export default ({
  title,
  author,
  publishedAt,
  excerpt,
  photoId,
  isUnsplash = true,
}) => {
  return ({ children: content }) => {
    return (
      <HomeLayout>
        <div className="flex flex-col">
          <div className="w-8/12 mx-auto">
            <h1 className="mt-5 mb-2 text-5xl font-bold text-green-900 font-heading">
              {title}
            </h1>
            <h3 className="mb-5 text-lg text-green-700 font-heading">
              Written By {author} {dayjs(publishedAt).fromNow()}
            </h3>
            <p className="my-4 text-2xl font-light text-gray-800 font-body">
              {excerpt}
            </p>
          </div>

          <div className="w-full mx-auto overflow-hidden ">
            <Unsplash height="400" className="object-fill" photoId={photoId} />
          </div>
          <article className="w-8/12 mx-auto font-body full-post">
            {content}
          </article>
        </div>
      </HomeLayout>
    );
  };
};
