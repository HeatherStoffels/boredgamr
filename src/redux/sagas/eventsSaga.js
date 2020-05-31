import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* eventsSaga() {
  yield takeEvery("GET_EVENTS", getEvents);
  yield takeEvery("GET_EVENT_BY_ID", getEventById);
}
function* getEvents(action) {
  try {
    const response = yield axios.get("/events");
    yield put({ type: "GET_EVENTS_SUCCESSFUL", payload: response.data });
  } catch (error) {
    yield put({ type: "GET_EVENTS_FAILED", payload: error });
  }
}
function* getEventById(action) {
  try {
    const id = action.payload;
   
    const response = yield axios.get(`/details/${id}`);
    yield put({ type: "GET_EVENT_BY_ID_SUCCESSFUL", payload: response.data });
  } catch (error) {
    yield put({ type: "GET_EVENT_BY_ID_FAILED", payload: error });
  }
}

export default eventsSaga;
