import Main from "./views/main";

export const HOST = process.env.REACT_APP_HOST;
export const APIKEY = process.env.REACT_APP_APIKEY;

function App() {
  return <Main />;
}

export default App;
