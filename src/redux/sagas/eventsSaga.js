import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* eventsSaga() {
    yield takeEvery('GET_EVENTS', getEvents);
  }
function* getEvents (action){
    try{
        const response = yield axios.get('/events');
        yield put({ type: "GET_EVENTS_SUCCESSFUL", payload: response.data });
    }catch (error) {
        yield put({ type: "GET_EVENTS_FAILED", payload: error});
  
      }
}

export default eventsSaga;