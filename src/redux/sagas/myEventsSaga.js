import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* myEventSaga() {
  yield takeEvery("GET_MY_EVENTS", getMyEvents);
  yield takeEvery("JOIN_EVENT_WITH_ID", joinEventWithId);
}
function* getMyEvents(action) {
  try {
     
    const response = yield axios.get(`/myevents`);
    yield put({ type: "GET_MY_EVENTS_SUCCESSFUL", payload: response.data });
  } catch (error) {
    yield put({ type: "GET_MY_EVENTS_FAILED", payload: error });
  }
}
function* joinEventWithId(action) {
  try {
    const response = yield axios.post("/myevents", {
      user: action.payload.user,
      event: action.payload.event,
    });
    yield put({ type: "JOIN_EVENT_WITH_ID_SUCCESSFUL", payload: response.data });
    yield put({ type: "GET_MY_EVENTS", payload: response.data });
  } catch (error) {
    yield put({ type: "JOIN_EVENT_WITH_ID_FAILED", payload: error });
  }
}

export default myEventSaga;
