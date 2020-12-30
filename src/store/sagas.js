import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
import * as actions from "./actions"
function* api_v1_customtext_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_list, action)
    yield put(actions.api_v1_customtext_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_listFailed(err, action))
  }
}
function* api_v1_customtext_listWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_LIST, api_v1_customtext_listWorker)
}
function* api_v1_customtext_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_read, action)
    yield put(actions.api_v1_customtext_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_readFailed(err, action))
  }
}
function* api_v1_customtext_readWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_READ, api_v1_customtext_readWorker)
}
function* api_v1_customtext_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_update, action)
    yield put(actions.api_v1_customtext_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_updateFailed(err, action))
  }
}
function* api_v1_customtext_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_UPDATE,
    api_v1_customtext_updateWorker
  )
}
function* api_v1_customtext_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_customtext_partial_update,
      action
    )
    yield put(actions.api_v1_customtext_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_partial_updateFailed(err, action))
  }
}
function* api_v1_customtext_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
    api_v1_customtext_partial_updateWorker
  )
}
function* api_v1_dosages_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_dosages_list, action)
    yield put(actions.api_v1_dosages_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_dosages_listFailed(err, action))
  }
}
function* api_v1_dosages_listWatcher() {
  yield takeEvery(types.API_V1_DOSAGES_LIST, api_v1_dosages_listWorker)
}
function* api_v1_dosages_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_dosages_create, action)
    yield put(actions.api_v1_dosages_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_dosages_createFailed(err, action))
  }
}
function* api_v1_dosages_createWatcher() {
  yield takeEvery(types.API_V1_DOSAGES_CREATE, api_v1_dosages_createWorker)
}
function* api_v1_dosages_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_dosages_read, action)
    yield put(actions.api_v1_dosages_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_dosages_readFailed(err, action))
  }
}
function* api_v1_dosages_readWatcher() {
  yield takeEvery(types.API_V1_DOSAGES_READ, api_v1_dosages_readWorker)
}
function* api_v1_dosages_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_dosages_update, action)
    yield put(actions.api_v1_dosages_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_dosages_updateFailed(err, action))
  }
}
function* api_v1_dosages_updateWatcher() {
  yield takeEvery(types.API_V1_DOSAGES_UPDATE, api_v1_dosages_updateWorker)
}
function* api_v1_dosages_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_dosages_partial_update, action)
    yield put(actions.api_v1_dosages_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_dosages_partial_updateFailed(err, action))
  }
}
function* api_v1_dosages_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_DOSAGES_PARTIAL_UPDATE,
    api_v1_dosages_partial_updateWorker
  )
}
function* api_v1_dosages_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_dosages_delete, action)
    yield put(actions.api_v1_dosages_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_dosages_deleteFailed(err, action))
  }
}
function* api_v1_dosages_deleteWatcher() {
  yield takeEvery(types.API_V1_DOSAGES_DELETE, api_v1_dosages_deleteWorker)
}
function* api_v1_homepage_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_list, action)
    yield put(actions.api_v1_homepage_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_listFailed(err, action))
  }
}
function* api_v1_homepage_listWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_LIST, api_v1_homepage_listWorker)
}
function* api_v1_homepage_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_read, action)
    yield put(actions.api_v1_homepage_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_readFailed(err, action))
  }
}
function* api_v1_homepage_readWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_READ, api_v1_homepage_readWorker)
}
function* api_v1_homepage_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_update, action)
    yield put(actions.api_v1_homepage_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_updateFailed(err, action))
  }
}
function* api_v1_homepage_updateWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_UPDATE, api_v1_homepage_updateWorker)
}
function* api_v1_homepage_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_partial_update, action)
    yield put(actions.api_v1_homepage_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_partial_updateFailed(err, action))
  }
}
function* api_v1_homepage_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
    api_v1_homepage_partial_updateWorker
  )
}
function* api_v1_indications_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_indications_list, action)
    yield put(actions.api_v1_indications_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_indications_listFailed(err, action))
  }
}
function* api_v1_indications_listWatcher() {
  yield takeEvery(types.API_V1_INDICATIONS_LIST, api_v1_indications_listWorker)
}
function* api_v1_indications_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_indications_create, action)
    yield put(actions.api_v1_indications_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_indications_createFailed(err, action))
  }
}
function* api_v1_indications_createWatcher() {
  yield takeEvery(
    types.API_V1_INDICATIONS_CREATE,
    api_v1_indications_createWorker
  )
}
function* api_v1_indications_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_indications_read, action)
    yield put(actions.api_v1_indications_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_indications_readFailed(err, action))
  }
}
function* api_v1_indications_readWatcher() {
  yield takeEvery(types.API_V1_INDICATIONS_READ, api_v1_indications_readWorker)
}
function* api_v1_indications_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_indications_update, action)
    yield put(actions.api_v1_indications_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_indications_updateFailed(err, action))
  }
}
function* api_v1_indications_updateWatcher() {
  yield takeEvery(
    types.API_V1_INDICATIONS_UPDATE,
    api_v1_indications_updateWorker
  )
}
function* api_v1_indications_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_indications_partial_update,
      action
    )
    yield put(
      actions.api_v1_indications_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_indications_partial_updateFailed(err, action))
  }
}
function* api_v1_indications_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_INDICATIONS_PARTIAL_UPDATE,
    api_v1_indications_partial_updateWorker
  )
}
function* api_v1_indications_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_indications_delete, action)
    yield put(actions.api_v1_indications_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_indications_deleteFailed(err, action))
  }
}
function* api_v1_indications_deleteWatcher() {
  yield takeEvery(
    types.API_V1_INDICATIONS_DELETE,
    api_v1_indications_deleteWorker
  )
}
function* api_v1_login_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_login_create, action)
    yield put(actions.api_v1_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_login_createFailed(err, action))
  }
}
function* api_v1_login_createWatcher() {
  yield takeEvery(types.API_V1_LOGIN_CREATE, api_v1_login_createWorker)
}
function* api_v1_medications_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_medications_list, action)
    yield put(actions.api_v1_medications_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_medications_listFailed(err, action))
  }
}
function* api_v1_medications_listWatcher() {
  yield takeEvery(types.API_V1_MEDICATIONS_LIST, api_v1_medications_listWorker)
}
function* api_v1_medications_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_medications_create, action)
    yield put(actions.api_v1_medications_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_medications_createFailed(err, action))
  }
}
function* api_v1_medications_createWatcher() {
  yield takeEvery(
    types.API_V1_MEDICATIONS_CREATE,
    api_v1_medications_createWorker
  )
}
function* api_v1_medications_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_medications_read, action)
    yield put(actions.api_v1_medications_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_medications_readFailed(err, action))
  }
}
function* api_v1_medications_readWatcher() {
  yield takeEvery(types.API_V1_MEDICATIONS_READ, api_v1_medications_readWorker)
}
function* api_v1_medications_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_medications_update, action)
    yield put(actions.api_v1_medications_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_medications_updateFailed(err, action))
  }
}
function* api_v1_medications_updateWatcher() {
  yield takeEvery(
    types.API_V1_MEDICATIONS_UPDATE,
    api_v1_medications_updateWorker
  )
}
function* api_v1_medications_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_medications_partial_update,
      action
    )
    yield put(
      actions.api_v1_medications_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_medications_partial_updateFailed(err, action))
  }
}
function* api_v1_medications_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_MEDICATIONS_PARTIAL_UPDATE,
    api_v1_medications_partial_updateWorker
  )
}
function* api_v1_medications_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_medications_delete, action)
    yield put(actions.api_v1_medications_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_medications_deleteFailed(err, action))
  }
}
function* api_v1_medications_deleteWatcher() {
  yield takeEvery(
    types.API_V1_MEDICATIONS_DELETE,
    api_v1_medications_deleteWorker
  )
}
function* api_v1_parameters_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_parameters_list, action)
    yield put(actions.api_v1_parameters_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_parameters_listFailed(err, action))
  }
}
function* api_v1_parameters_listWatcher() {
  yield takeEvery(types.API_V1_PARAMETERS_LIST, api_v1_parameters_listWorker)
}
function* api_v1_parameters_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_parameters_create, action)
    yield put(actions.api_v1_parameters_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_parameters_createFailed(err, action))
  }
}
function* api_v1_parameters_createWatcher() {
  yield takeEvery(
    types.API_V1_PARAMETERS_CREATE,
    api_v1_parameters_createWorker
  )
}
function* api_v1_parameters_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_parameters_read, action)
    yield put(actions.api_v1_parameters_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_parameters_readFailed(err, action))
  }
}
function* api_v1_parameters_readWatcher() {
  yield takeEvery(types.API_V1_PARAMETERS_READ, api_v1_parameters_readWorker)
}
function* api_v1_parameters_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_parameters_update, action)
    yield put(actions.api_v1_parameters_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_parameters_updateFailed(err, action))
  }
}
function* api_v1_parameters_updateWatcher() {
  yield takeEvery(
    types.API_V1_PARAMETERS_UPDATE,
    api_v1_parameters_updateWorker
  )
}
function* api_v1_parameters_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_parameters_partial_update,
      action
    )
    yield put(actions.api_v1_parameters_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_parameters_partial_updateFailed(err, action))
  }
}
function* api_v1_parameters_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_PARAMETERS_PARTIAL_UPDATE,
    api_v1_parameters_partial_updateWorker
  )
}
function* api_v1_parameters_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_parameters_delete, action)
    yield put(actions.api_v1_parameters_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_parameters_deleteFailed(err, action))
  }
}
function* api_v1_parameters_deleteWatcher() {
  yield takeEvery(
    types.API_V1_PARAMETERS_DELETE,
    api_v1_parameters_deleteWorker
  )
}
function* api_v1_signup_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_signup_create, action)
    yield put(actions.api_v1_signup_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_signup_createFailed(err, action))
  }
}
function* api_v1_signup_createWatcher() {
  yield takeEvery(types.API_V1_SIGNUP_CREATE, api_v1_signup_createWorker)
}
function* rest_auth_login_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_login_create, action)
    yield put(actions.rest_auth_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_login_createFailed(err, action))
  }
}
function* rest_auth_login_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGIN_CREATE, rest_auth_login_createWorker)
}
function* rest_auth_logout_listWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_list, action)
    yield put(actions.rest_auth_logout_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_listFailed(err, action))
  }
}
function* rest_auth_logout_listWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_LIST, rest_auth_logout_listWorker)
}
function* rest_auth_logout_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_create, action)
    yield put(actions.rest_auth_logout_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_createFailed(err, action))
  }
}
function* rest_auth_logout_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_CREATE, rest_auth_logout_createWorker)
}
function* rest_auth_password_change_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_change_create,
      action
    )
    yield put(actions.rest_auth_password_change_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_change_createFailed(err, action))
  }
}
function* rest_auth_password_change_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_CHANGE_CREATE,
    rest_auth_password_change_createWorker
  )
}
function* rest_auth_password_reset_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_create,
      action
    )
    yield put(actions.rest_auth_password_reset_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_reset_createFailed(err, action))
  }
}
function* rest_auth_password_reset_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CREATE,
    rest_auth_password_reset_createWorker
  )
}
function* rest_auth_password_reset_confirm_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_confirm_create,
      action
    )
    yield put(
      actions.rest_auth_password_reset_confirm_createSucceeded(result, action)
    )
  } catch (err) {
    yield put(
      actions.rest_auth_password_reset_confirm_createFailed(err, action)
    )
  }
}
function* rest_auth_password_reset_confirm_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
    rest_auth_password_reset_confirm_createWorker
  )
}
function* rest_auth_registration_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_registration_create, action)
    yield put(actions.rest_auth_registration_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_registration_createFailed(err, action))
  }
}
function* rest_auth_registration_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_CREATE,
    rest_auth_registration_createWorker
  )
}
function* rest_auth_registration_verify_email_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_registration_verify_email_create,
      action
    )
    yield put(
      actions.rest_auth_registration_verify_email_createSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.rest_auth_registration_verify_email_createFailed(err, action)
    )
  }
}
function* rest_auth_registration_verify_email_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
    rest_auth_registration_verify_email_createWorker
  )
}
function* rest_auth_user_readWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_read, action)
    yield put(actions.rest_auth_user_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_readFailed(err, action))
  }
}
function* rest_auth_user_readWatcher() {
  yield takeEvery(types.REST_AUTH_USER_READ, rest_auth_user_readWorker)
}
function* rest_auth_user_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_update, action)
    yield put(actions.rest_auth_user_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_updateFailed(err, action))
  }
}
function* rest_auth_user_updateWatcher() {
  yield takeEvery(types.REST_AUTH_USER_UPDATE, rest_auth_user_updateWorker)
}
function* rest_auth_user_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_partial_update, action)
    yield put(actions.rest_auth_user_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_partial_updateFailed(err, action))
  }
}
function* rest_auth_user_partial_updateWatcher() {
  yield takeEvery(
    types.REST_AUTH_USER_PARTIAL_UPDATE,
    rest_auth_user_partial_updateWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    api_v1_customtext_listWatcher,
    api_v1_customtext_readWatcher,
    api_v1_customtext_updateWatcher,
    api_v1_customtext_partial_updateWatcher,
    api_v1_dosages_listWatcher,
    api_v1_dosages_createWatcher,
    api_v1_dosages_readWatcher,
    api_v1_dosages_updateWatcher,
    api_v1_dosages_partial_updateWatcher,
    api_v1_dosages_deleteWatcher,
    api_v1_homepage_listWatcher,
    api_v1_homepage_readWatcher,
    api_v1_homepage_updateWatcher,
    api_v1_homepage_partial_updateWatcher,
    api_v1_indications_listWatcher,
    api_v1_indications_createWatcher,
    api_v1_indications_readWatcher,
    api_v1_indications_updateWatcher,
    api_v1_indications_partial_updateWatcher,
    api_v1_indications_deleteWatcher,
    api_v1_login_createWatcher,
    api_v1_medications_listWatcher,
    api_v1_medications_createWatcher,
    api_v1_medications_readWatcher,
    api_v1_medications_updateWatcher,
    api_v1_medications_partial_updateWatcher,
    api_v1_medications_deleteWatcher,
    api_v1_parameters_listWatcher,
    api_v1_parameters_createWatcher,
    api_v1_parameters_readWatcher,
    api_v1_parameters_updateWatcher,
    api_v1_parameters_partial_updateWatcher,
    api_v1_parameters_deleteWatcher,
    api_v1_signup_createWatcher,
    rest_auth_login_createWatcher,
    rest_auth_logout_listWatcher,
    rest_auth_logout_createWatcher,
    rest_auth_password_change_createWatcher,
    rest_auth_password_reset_createWatcher,
    rest_auth_password_reset_confirm_createWatcher,
    rest_auth_registration_createWatcher,
    rest_auth_registration_verify_email_createWatcher,
    rest_auth_user_readWatcher,
    rest_auth_user_updateWatcher,
    rest_auth_user_partial_updateWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
