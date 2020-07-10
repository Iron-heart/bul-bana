import React, { useState } from "react";
import "../../sass/main.scss";
import Layout from "../Layout/Layout";
import SearchBar from "../SearchBar/SearchBar";
import Hero from "../Hero/Hero";
import BusinessList from "../BusinessList/BusinessList";
import Yelp from "../../util/Yelp";

function App() {
  const [businesses, setBusinesses] = useState([]);

  function searchYelp(term, location) {
    Yelp.search(term, location)
      .then((businessesList) => {
        setBusinesses(businessesList);
      })
      .then(console.log(businesses));
  }

  console.log(businesses);
  return (
    <div>
      <Hero>
        <SearchBar searchYelp={searchYelp} />
      </Hero>
      <Layout>
        <BusinessList businesses={businesses} />
      </Layout>
    </div>
  );
}

export default App;
