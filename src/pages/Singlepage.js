import { useEffect, useContext } from "react";
import ShowsContext from "../context/shows/showsContext";

const Singlepage = ({ match }) => {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);

  useEffect(() => {
    getSingleShow(match.params.id);
    console.log(singleShow);
  }, []);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };
  return (
    <>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <div className="singlepage">
          <img
            src={
              singleShow.image
                ? singleShow.image.medium
                : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
            alt={singleShow.name}
          />
          <div className="singlepageInfo">
            <h1>{singleShow.name}</h1>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span key={genre} className="singlepageGenre">
                  {genre}
                </span>
              ))}
            <p>
              <strong>Status:</strong>
              {singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Rating:</strong>
              {singleShow.rating ? singleShow.rating.average : "No Rating"}
            </p>
            <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Singlepage;
