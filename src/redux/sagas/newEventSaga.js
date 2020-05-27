import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* newEventSaga() {
    yield takeEvery('NEW_EVENT', newEvent);
  }
function* newEvent (action){

    try{
        yield axios.post('/create', {host_id: 1, game_name: "King of Tokyo", date_time: "2020-06-13 20:00:00-05" });
        yield put({type: 'CREATE_EVENT', payload: action.payload});
        
    }catch (error) {
        console.log('Error with creating event:', error);
      }
}

export default newEventSaga;