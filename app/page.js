import { Fragment } from "react";
import HomePage from "./_Components/HomePage";
import About from "./_Components/About";
import WhoWe from "./_Components/WhoWe";
import Blogs from "./_Components/Blogs";
import Prices from "./_Components/Prices";

export default function Home() {
  return (
    <Fragment>
      <HomePage />
      <About />
      <WhoWe />
      <Blogs />
      <Prices />
    </Fragment>
  );
}
