export const initialState = {
  user: null,
  // token:'BQBfbOLm6b1C6coa0KKLOcRFCXjiduiATuSqBfXVxmrfBmP15uwTiJeEVgOwZdG9hJ3A-ApV8vNGRVhfg40gM8QObu4NoW9s44VWaJOm8E2LlOXR2aJu-ichBPUZF7hyOjspXWvL6qMgKnIHRZErbWVTpWqHGhka1R4nW88fNV8847VjkneTviaXCxAetOeVhnPnWTGJxeigi99aaA7D',
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_MY_SONGS":
      return {
        ...state,
        My_songs: action.My_songs,
      };
    case "SET_TOP_ARTISTS":
      return{
        ...state,
        top_artists: action.top_artists,
      }
    default:
      return state;
  }
};

export default reducer;