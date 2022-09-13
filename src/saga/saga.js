import * as api from "../api/usersApi";
import { call, fork, put, takeEvery} from "redux-saga/effects"
import * as actions from "../actions/userActionTypes";

function* getUsers() {
    try {
        const result = yield call(api.getUsers);
        yield put(actions.getUsersSuccess(result.data.data));
    } catch (err) {
        console.log(err);
    }
}

function* watchGetUsersrequest() {
    yield takeEvery(actions.Types.GET_USERs_REQUEST,getUsers);
}

const userSaga = [fork(watchGetUsersrequest)];
export default userSaga;