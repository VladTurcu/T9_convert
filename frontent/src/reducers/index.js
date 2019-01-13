import * as Types from "./../actions/types/actions";

const initialState = {
    data: [],
    value: '',
    loading: false,
    loaded: false,
    error: false
  };

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case Types.ADD_DATA: {
      return {
        ...state,
        value: `${state.value}${action.payload.value}`,
        loading: true,
        loaded: false,
        error: false
      };
    }

    case Types.REMOVE_DATA: {
      const value = state.value.split("");
      if (value.length > 0) {
        value.pop();
        const newValue = value.join("");
        return {
          ...state,
          loading: false,
          value: newValue
        };
      }
      return {
        ...state,
        loading: false
      };
    }

    case Types.FETCH_DATA: {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false
      };
    }

    case Types.FETCH_DATA_SUCCESS: {
      const { data, value } = action.payload;
      return {
        ...state,
        data: [...data],
        history: {
          ...state.history,
          [value]: data
        },
        loading: false,
        loaded: true,
        error: false
      };
    }

    case Types.FETCH_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true
      };
    }

    default:
      return state;
  }
};

export default reducer;
