import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header";

// Nested Header using React.createElement
// const header = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", {}, "I am an H1 tag"),
//   React.createElement("h2", {}, "I am an H2 tag"),
//   React.createElement("h3", {}, "I am an H3 tag"),
// ]);

// Nested Header using JSX
// const header = (
//   <div className="title">
//     <h1>I am an H1 tag</h1>
//     <h2>I am an H2 tag</h2>
//     <h3>I am an H3 tag</h3>
//   </div>
// );

// Nested Header using Functional component
// const NestedHeader = () => (
//   <div className="title" id="header">
//     <h1>I am an H1 tag</h1>
//     <h2>I am an H2 tag</h2>
//     <h3>I am an H3 tag</h3>
//   </div>
// );

const Title = () => <h1>This is Title</h1>;

// Component Composition
const HeadingComponent = () => {
  return (
    <div className="container">
      Heading Component
      {Title()}
      <Title />
      <Title></Title>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering Nested Header
// root.render(<NestedHeader />);

// Rendering Heading Component
// root.render(<HeadingComponent />);

// Rendering Header Component with search bar
root.render(<Header />);
