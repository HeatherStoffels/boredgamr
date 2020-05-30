import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* myEventSaga() {
    yield takeEvery('GET_MY_EVENTS', myEvents);
  }
function* myEvents (action){

    try{
        const response = yield axios.get('/myevents');
        yield put({ type: "FETCH_MY_EVENTS", payload: response.data });
    }catch (error) {
        console.log('Error with fetching events:', error);
      }
}

export default myEventSaga;