import React from "react";
import QuoteCard from "./components/QuoteCard";

const Home = () => {
  const quote = "태양은 만인의 것, 바다는 즐기는 자의 것";
  const source = "책, <종의 기원>";

  return (
    <div className="bg-secondary min-h-screen flex flex-col justify-center">
      <QuoteCard quote={quote} source={source} />
    </div>
  );
};

export default Home;
