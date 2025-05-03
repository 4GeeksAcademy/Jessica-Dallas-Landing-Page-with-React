import React from "react";
import Navbar from "./components/Navbar.jsx";
import Jumbotron from "./components/Jumbotron.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Jumbotron />
        <div className="row">
          <Card title="Card Title" />
          <Card title="Card Title" />
          <Card title="Card Title" />
          <Card title="Card Title" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
