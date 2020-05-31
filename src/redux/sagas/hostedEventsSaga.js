
import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* hostedEventsSaga() {
  yield takeEvery('GET_ALL_HOSTED_EVENTS', getAllHostedEvents);
}
function* getAllHostedEvents(action) {
  try {
    const id = action.payload;
    const response = yield axios.get(`/host/${id}`);
    yield put({ type: "GET_ALL_HOSTED_EVENTS_SUCCESSFUL", payload: response.data });
  } catch (error) {
    yield put({ type: "GET_ALL_HOSTED_EVENTS_FAILED", payload: error });
  }
}

export default hostedEventsSaga;