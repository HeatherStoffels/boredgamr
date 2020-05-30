import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* gameSaga() {
  yield takeEvery("GET_GAME_BY_ID", getGameById);
}
function* getGameById(action) {
  try {
    const id = action.payload;
    const response = yield axios.get(`/game/${id}`);
    console.log(response);
    yield put({ type: "GET_GAME_BY_ID_SUCCESSFUL", payload: response.data });
  } catch (error) {
    yield put({ type: "GET_GAME_BY_ID_FAILED", payload: error });
   
  }
}

export default gameSaga;
