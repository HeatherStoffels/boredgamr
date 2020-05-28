import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* newEventSaga() {
    yield takeEvery('NEW_EVENT', newEvent);
  }
function* newEvent (action){

    try{
        yield axios.post('/create', {host_id: action.payload.host_id, game_id: action.payload.game_id, date_time: action.payload.date_time });
        yield put({type: 'CREATE_EVENT', payload: action.payload});
        
    }catch (error) {
        console.log('Error with creating event:', error);
      }
}

export default newEventSaga;