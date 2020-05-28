import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* gameSaga() {
  yield takeEvery("FETCH_GAME", fetchGame);
}
function* fetchGame(action) {
  try {
    const id = action.payload;
    const response = yield axios.get(`/game/${id}`);
    console.log(response);
    yield put({ type: "FETCH_GAME_BY_ID", payload: response.data });
  } catch (error) {
    console.log("Error with fetching game:", error);
  }
}

export default gameSaga;
