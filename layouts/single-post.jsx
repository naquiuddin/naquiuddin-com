import Unsplash from "react-unsplash-wrapper";
import HomeLayout from "./home";

export default ({ title, author, publishedAt, excerpt }) => {
  return ({ children: content, isUnsplash = true }) => {
    return (
      <HomeLayout>
        <div className="flex flex-col">
          <div className="w-8/12 mx-auto">
            <h1 className="mt-5 mb-2 text-5xl font-bold text-green-900 font-heading">
              {title}
            </h1>
            <h3 className="mb-5 text-lg text-green-700 font-heading">
              Written By {author} 3 days ago
            </h3>
            <p className="my-4 text-2xl font-light text-gray-800 font-body">
              {excerpt}
            </p>
          </div>

          <div className="w-full mx-auto overflow-hidden ">
            {isUnsplash ? (
              <Unsplash
                height="400"
                className="object-fill"
                photoId={"WLUHO9A_xik"}
              />
            ) : (
              <img className="object-fill" src="/img/" alt="" srcset="" />
            )}
          </div>
          <article className="w-8/12 mx-auto font-body full-post">{content}</article>
        </div>
      </HomeLayout>
    );
  };
};
