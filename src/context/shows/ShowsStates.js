import { useReducer } from "react";
import ShowsContext from "./showsContext";
import ShowsReducer from "./showsReducer";
import axios from "axios";
import { SET_LOADİNG, SET_SINGLE_SHOW, CLEAR_SINGLE_SHOW } from "../types";

const ShowsStates = (props) => {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  const loadingShows = async () => {
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=batman`
    );

    dispatch({
      type: SET_LOADİNG,
      payload: data,
    });
  };

  const getSingleShow = async (id) => {
  
    const { data } = await axios.get(
      `https://api.tvmaze.com/shows/${id}`
    );
    dispatch({
      type: SET_SINGLE_SHOW,
      payload: data,
    });
  };

  const clearSingleShow = async () => {
    dispatch({
      type: CLEAR_SINGLE_SHOW,
    });
  };
  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        singleShow: state.singleShow,
        loading: state.loading,
        loadingShows,
        getSingleShow,
        clearSingleShow,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsStates;
