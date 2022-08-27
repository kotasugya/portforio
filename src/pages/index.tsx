import type { NextPage } from "next";
import { Header } from "../components/molecules/Header";
import { Main } from "../components/organisms/Main";

const Home: NextPage = () => {
  return (
    <>
      <body>
        <Header />
        <Main />
        <div className="test-div">test</div>
      </body>
    </>
  );
};

export default Home;
