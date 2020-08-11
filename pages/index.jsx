import Nav from "../components/nav";
import HomeLayout from "../layouts/home";

const Home = (props) => {
  return (
    <HomeLayout>
      <section className="flex flex-row flex-wrap justify-between py-8">
        <div className="flex flex-col justify-center pl-8 pr-8 md:pl-16 sm:w-1/2">
          <h1 className="text-4xl text-teal-900 md:text-5xl font-heading">
            I'm Khaja Naquiuddin
          </h1>
          <h1 className="py-2 text-2xl text-teal-800 md:text-3xl font-heading">
            A Frontend Developer
          </h1>
          <h2 className="py-2 text-lg text-teal-600 md:text-xl font-body">
            Makes secure, scalable and maintainable web applications for both
            startups and fortune 500s.
          </h2>
        </div>
        <div className="flex justify-center w-full sm:w-1/2">
          <div className="blob-bg">
            <img
              className="block w-5/6 mx-auto"
              src="/img/smile-pic-enhanced.png"
              alt="Khaja Naquiuddin"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center py-24 text-teal-900 bg-teal-300">
        <h1 className="py-4 text-4xl font-bold font-heading">About</h1>
        <p className="w-11/12 text-lg text-center sm:w-3/4 font-body">
          A Frontend Developer who has 9 years of experience in developing
          scalable web applications. Worked with both startups and Fortune
          500's. Has strength on both ends of the stack and understands dev-ops.
          Worked with both distributed and onsite teams and can easily adapt to
          both small and large teams. Has experience in empowering team members
          to grow and contribute their best.
        </p>
      </section>
      <section className="flex flex-col items-center py-16 text-teal-200 bg-teal-900 md:px-16">
        <h1 className="w-full py-4 text-4xl text-center text-gray-100 font-heading">
          Skills
        </h1>
        <p className="w-11/12 pb-4 text-lg text-center sm:w-3/4 font-body">
          I understand and have used the below given technologies in various
          projects. The most prominent skills for me among all of them are React
          and JavaScript. I love writing maintainable, scalable, secure and
          testable code. One the reason businesses love to work with me is
          because of my clean coding skills.
        </p>
        <div className="w-full my-2">
          <h2 className="w-full text-2xl text-center text-gray-100">
            Frontend
          </h2>
          <p className="text-center">
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              JavaScript
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              ES6
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              NextJS
            </span>
            <span className="px-3 py-2 m-1 text-teal-900 bg-green-300">
              GraphQL
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              Apollo GraphQL
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              ReactJS
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              Redux
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              LoonaJS
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              React Native
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              GatsbyJS
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              BackboneJS
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              jQuery
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              TypeScript
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              HTML
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              CSS
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              SASS
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              CSS-Modules
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              PostCSS
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              TailwindCss
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              Bootstrap
            </span>
          </p>
        </div>
        <div className="w-full my-2">
          <h2 className="w-full text-2xl text-center text-gray-100">Backend</h2>
          <p className="text-center">
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              Hasura
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              Prisma
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              Node.js
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              Express
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              Restify
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              AdonisJS
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              NestJs
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              Java
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              Spring Framework
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              PHP
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              Laravel Framework
            </span>
          </p>
        </div>
        <div className="w-full my-2">
          <h2 className="w-full text-2xl text-center text-gray-100">
            Databases
          </h2>
          <p className="text-center">
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              MySql
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              Postgres
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              MongoDB
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              FaunaDB
            </span>
          </p>
        </div>
        <div className="w-full my-2">
          <h2 className="w-full text-2xl text-center text-gray-100">
            Tools, Editor & DevOps
          </h2>
          <p className="text-center">
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              Webpack
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              Rollup
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              lerna
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              eslint
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              prettier
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              Chrome Developer Tools
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              lighthouse
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              npm
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              cli
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              Git
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              GitHub
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              GitLab
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              BitBucket or Atlassian's tools
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              Docker
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              Heroku
            </span>
            <span className="inline-block px-3 py-2 m-2 text-teal-900 bg-green-300 rounded-md">
              AWS
            </span>
          </p>
        </div>
        {/* <div className="w-1/2">
          <h2 className="w-full text-2xl text-center text-gray-100">Work Summary</h2>
          <ul className="list-disc">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div> */}
      </section>
    </HomeLayout>
  );
};

export default Home;
