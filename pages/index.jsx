import Nav from "../components/nav";
import HomeLayout from "../layouts/home";

const Home = (props) => {
  return (
    <HomeLayout>
      <section className="flex flex-row py-8">
        <div className="flex flex-col justify-center w-1/2 px-16">
          <h3 className="text-2xl text-teal-600 font-body">Hello!</h3>
          <h1 className="text-5xl text-teal-900 font-heading">
            I'm Khaja Naquiuddin
          </h1>
          <h2 className="text-3xl text-teal-600 font-body">
            A Senior Frontend Developer
          </h2>
        </div>
        <div className="flex justify-center w-1/2">
          <div className="blob-bg">
            <img
              className="block mx-auto"
              src="/img/smile-pic-enhanced.png"
              alt="Khaja Naquiuddin"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center py-24 text-teal-900 bg-teal-300">
        <h1 className="py-4 text-3xl font-bold font-heading">
          About
        </h1>
        <p className="w-1/2 text-lg text-center font-body">
          Khaja Naquiuddin is a Senior Frontend Developer who has 8+ years of experience in developing scalable web
          applications. He Worked with both startups to Fortune 500's and
          strength on both ends of the stack. He also understands dev-ops and
          worked with both distributed and onsite teams. He easily adapts to
          both small and large teams and can empower team members to grow and
          contribute their best.
        </p>
      </section>
    </HomeLayout>
  );
};

export default Home;
