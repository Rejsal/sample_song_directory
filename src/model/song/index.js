import {showAlert} from '../../helper';
import {getSongsFromAPI} from '../../service/song';

export default {
  state: {
    loading: false,
    error: null,
    songs: [],
    song: {},
  },

  reducers: {
    //on request
    onRequest(state) {
      return {
        ...state,
        loading: true,
      };
    },

    setSong(state, data) {
      return {
        ...state,
        song: data,
      };
    },

    //on songs api success
    onGetSongs(state, data) {
      return {
        ...state,
        loading: false,
        songs:
          data && data.results && data.results.length > 0 ? data.results : [],
      };
    },

    //on error
    onError(state, error) {
      if (error) showAlert(error);
      return {
        ...state,
        loading: false,
        error: error,
      };
    },
  },

  effects: {
    //get song list
    async getSongs() {
      this.onRequest();
      try {
        const res = await getSongsFromAPI();
        this.onGetSongs(res);
      } catch (e) {
        this.onError(e && e.message ? e.message : null);
      }
    },
  },
};
