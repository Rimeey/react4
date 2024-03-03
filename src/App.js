import Gallery from "./Components/Gallery/Gallery";
import Filters from "./Components/Filters/Filters";
import { Context } from "./Context";

export default function App() {
  return (
    <Context>
      <Filters />
      <Gallery />
    </Context>
  );
}
