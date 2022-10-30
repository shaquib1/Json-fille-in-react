import React from "react";
import Navbar from "./components/Navbar";
import JsonDataDisplay from "./Json_Practice/Table";

export default function App() {
  return (
    <>
      <Navbar title="Shopping" home="About Us" />

      <h3>This is Student Table List</h3>
      <JsonDataDisplay />
    </>
  );
}
