import * as Types from "./types/actions";

const API = process.env.ENDPOINT_URL || "http://localhost:8000/api?value=";

const OPTIONS = {
  method: "GET",
  headers: {
    Accept: "application/json", "Content-Type": "application/json"
  },
};

const fetchT9Value = async (value) => {
  const response = await fetch(`${API}${value}`, OPTIONS).catch(error => {
    return { error: true };
  });

  if (!response.error) {
    const data = await response.json();
    return data;
  }

  return response;
};

export const addData = (value) => async (dispatch) => {
    dispatch({ type: Types.ADD_DATA, payload: {value} });
}

export const removeData = (value) => async (dispatch) => {
    dispatch({ type: Types.REMOVE_DATA, payload: {value} });
}

export const getWordList = (value) => async (dispatch) => {
    dispatch({ type: Types.FETCH_DATA });
    const data = await fetchT9Value(value);
    return data.error
      ? dispatch({ type: Types.FETCH_DATA_ERROR })
      : dispatch({
          type: Types.FETCH_DATA_SUCCESS,
          payload: { data, value }
        });
};