import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* allBoardgamesSaga() {
  yield takeEvery("GET_ALL_GAMES", getAllGames);
}
function* getAllGames(action) {
  try {
    const response = yield axios.get("/allgames");
    yield put({ type: "GET_ALL_GAMES_SUCCESSFUL", payload: response.data });
  } catch (error) {
    yield put({ type: "GET_ALL_GAMES_FAILED", payload: error });
  }
}

export default allBoardgamesSaga;
