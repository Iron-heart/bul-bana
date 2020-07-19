import React, { useState } from "react";
import "../../sass/main.scss";
import Layout from "../Layout/Layout";
import SearchBar from "../SearchBar/SearchBar";
import Hero from "../Hero/Hero";
import BusinessList from "../BusinessList/BusinessList";
import Yelp from "../../util/Yelp";
import Details from "../../pages/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(false);

  function searchYelp(term, location) {
    setLoading(true);
    Yelp.search(term, location).then((businessesList) => {
      setBusinesses(businessesList);
      setLoading(false);
    });
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Hero>
              <SearchBar searchYelp={searchYelp} color="red" />
            </Hero>
            {loading ? (
              <div className="business-list__loading">
                <h2>Yükleniyor...</h2>
              </div>
            ) : (
              <Layout>
                <BusinessList businesses={businesses} />
              </Layout>
            )}
          </Route>
          <Route
            path="/details/:id"
            render={(props) => <Details {...props} searchYelp={searchYelp} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
