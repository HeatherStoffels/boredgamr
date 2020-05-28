import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* allGamesSaga() {
  yield takeEvery("FETCH_ALL_GAMES", fetchAllGames);
}
function* fetchAllGames(action) {
  try {
    const response = yield axios.get("/allgames");
    console.log(response);
    yield put({ type: "FETCH_ALL_GAMES_BY_ID", payload: response.data });
  } catch (error) {
    console.log("Error with fetching game:", error);
  }
}

export default allGamesSaga;