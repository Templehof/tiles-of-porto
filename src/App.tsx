import { Fade } from "react-awesome-reveal";
import Gallery from "./components/gallery";

const App = () => {
  const props = {
    delay: 1000,
  };

  return (
    <div className="App">
      <h1 className="header">Tiles of Porto</h1>
      <Fade {...props}>
        <Gallery />
      </Fade>
    </div>
  );
};

export default App;
