function HelloWorld() {
  return <h1>Hello World!</h1>;
}

function App() {
  return <HelloWorld />;
}

ReactDOM.render(<App />, document.getElementById("root"));
