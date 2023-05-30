import React from "react";
import Navbar from "./components/NavBar/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Art from "./components/pages/Art";
import Coding from "./components/pages/Coding";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Twinbeds from "./components/pages/Twinbeds";
import Writings from "./components/pages/Writings";



import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <Navbar />
          
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/art" exact element={<Art />} />
            <Route path="/coding" exact element={<Coding />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/twinbeds" exact element={<Twinbeds />} />
            <Route path="/writings" exact element={<Writings />} />
          </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
