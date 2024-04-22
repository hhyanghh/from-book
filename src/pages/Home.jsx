import React, { useState, useEffect } from "react";
import { fetchQuotes } from "../api/firebase";
import QuoteCard from "./components/QuoteCard";

const Home = () => {
  const [quote, setQuote] = useState("");
  const [source, setSource] = useState("");

  useEffect(() => {
    const loadQuotes = async () => {
      const quotesData = await fetchQuotes();

      const quotesArray = Object.values(quotesData).map((item) => ({
        quote: item.quote,
        source: item.source,
      }));

      if (quotesArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * quotesArray.length);
        setQuote(quotesArray[randomIndex].quote);
        setSource(`${quotesArray[randomIndex].source}`);
      }
    };

    loadQuotes();
  }, []);

  return (
    <div className="bg-secondary min-h-screen flex flex-col justify-center">
      <QuoteCard quote={quote} source={source} />
    </div>
  );
};

export default Home;
