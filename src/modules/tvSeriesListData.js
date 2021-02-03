import axios from 'axios'
import store from '../state/store/configureStore'

const tvSeriesList = {
  
  async index() {
    debugger
    let result = await axios.get("https://content.viaplay.se/pc-se/serier/samtliga")
    debugger
    store.dispatch({
      type: 'SET_TVSERIES_INDEX',
      payload: result.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products'],
    })
  }
}

export {tvSeriesList}