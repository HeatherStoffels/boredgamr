import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* eventsSaga() {
    yield takeEvery('getEvents', fetchEvents);
  }
function* fetchEvents (action){
    try{
        const response = yield axios.get("/events");
        yield put({ type: "FETCH_EVENTS", payload: response.data });
    }catch (error) {
        console.log('Error with fetching events:', error);
      }
}

export default eventsSaga;