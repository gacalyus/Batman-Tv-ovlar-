import { useEffect,  useContext } from "react";
import ShowsContext from "../context/shows/showsContext";
import Item from "./Item";

const Homepage = () => {
  
  const { loadingShows, shows } = useContext(ShowsContext);

  useEffect(() => {
    loadingShows(shows);
    console.log(shows);
  }, [""]);

  return (
    <div className="homepage__list">
      {shows.map((item) => (
        <Item
          key={item.show.id}
          id={item.show.id}
          image={item.show.image.medium}
          name={item.show.name}
          average={
            item.show.rating.average ? item.show.rating.average : "No Raiting"
          }
        />
      ))}
    </div>
  );
};

export default Homepage;
