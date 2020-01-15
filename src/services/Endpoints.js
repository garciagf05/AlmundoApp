const URL_BASE = `https://api-servicios-almundo.herokuapp.com/api`;
const HOTELS_PATH = `${URL_BASE}/hotels`;

export const hotelsPaths = {
  hotelsList:   `${HOTELS_PATH}/list`,
  getHotel:     `${HOTELS_PATH}/info`
}
