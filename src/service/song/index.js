import config from '../../config';
import {api, catchHandler} from '../../helper/axios';

//get songs from API
export async function getSongsFromAPI() {
  return (await api())
    .get(`${config.artist.search}?term=Michael+jackson`)
    .then(res => res.data)
    .catch(catchHandler);
}
