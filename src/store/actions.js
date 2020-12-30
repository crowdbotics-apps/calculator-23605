import * as types from "./constants"
export const api_v1_customtext_list = () => ({
  type: types.API_V1_CUSTOMTEXT_LIST
})
export const api_v1_customtext_listSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_listFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_FAILED,
  response,
  starter
})
export const api_v1_customtext_read = () => ({
  type: types.API_V1_CUSTOMTEXT_READ
})
export const api_v1_customtext_readSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_readFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_FAILED,
  response,
  starter
})
export const api_v1_customtext_update = data => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE,
  data
})
export const api_v1_customtext_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_updateFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_customtext_partial_update = data => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
  data
})
export const api_v1_customtext_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_dosages_list = () => ({ type: types.API_V1_DOSAGES_LIST })
export const api_v1_dosages_listSucceeded = (response, starter) => ({
  type: types.API_V1_DOSAGES_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_dosages_listFailed = (response, starter) => ({
  type: types.API_V1_DOSAGES_LIST_FAILED,
  response,
  starter
})
export const api_v1_dosages_create = data => ({
  type: types.API_V1_DOSAGES_CREATE,
  data
})
export const api_v1_dosages_createSucceeded = (response, starter) => ({
  type: types.API_V1_DOSAGES_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_dosages_createFailed = (response, starter) => ({
  type: types.API_V1_DOSAGES_CREATE_FAILED,
  response,
  starter
})
export const api_v1_dosages_read = () => ({ type: types.API_V1_DOSAGES_READ })
export const api_v1_dosages_readSucceeded = (response, starter) => ({
  type: types.API_V1_DOSAGES_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_dosages_readFailed = (response, starter) => ({
  type: types.API_V1_DOSAGES_READ_FAILED,
  response,
  starter
})
export const api_v1_dosages_update = data => ({
  type: types.API_V1_DOSAGES_UPDATE,
  data
})
export const api_v1_dosages_updateSucceeded = (response, starter) => ({
  type: types.API_V1_DOSAGES_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_dosages_updateFailed = (response, starter) => ({
  type: types.API_V1_DOSAGES_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_dosages_partial_update = data => ({
  type: types.API_V1_DOSAGES_PARTIAL_UPDATE,
  data
})
export const api_v1_dosages_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_DOSAGES_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_dosages_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_DOSAGES_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_dosages_delete = () => ({
  type: types.API_V1_DOSAGES_DELETE
})
export const api_v1_dosages_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_DOSAGES_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_dosages_deleteFailed = (response, starter) => ({
  type: types.API_V1_DOSAGES_DELETE_FAILED,
  response,
  starter
})
export const api_v1_homepage_list = () => ({ type: types.API_V1_HOMEPAGE_LIST })
export const api_v1_homepage_listSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_listFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_FAILED,
  response,
  starter
})
export const api_v1_homepage_read = () => ({ type: types.API_V1_HOMEPAGE_READ })
export const api_v1_homepage_readSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_readFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_FAILED,
  response,
  starter
})
export const api_v1_homepage_update = data => ({
  type: types.API_V1_HOMEPAGE_UPDATE,
  data
})
export const api_v1_homepage_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_updateFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_homepage_partial_update = data => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
  data
})
export const api_v1_homepage_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_indications_list = () => ({
  type: types.API_V1_INDICATIONS_LIST
})
export const api_v1_indications_listSucceeded = (response, starter) => ({
  type: types.API_V1_INDICATIONS_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_indications_listFailed = (response, starter) => ({
  type: types.API_V1_INDICATIONS_LIST_FAILED,
  response,
  starter
})
export const api_v1_indications_create = data => ({
  type: types.API_V1_INDICATIONS_CREATE,
  data
})
export const api_v1_indications_createSucceeded = (response, starter) => ({
  type: types.API_V1_INDICATIONS_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_indications_createFailed = (response, starter) => ({
  type: types.API_V1_INDICATIONS_CREATE_FAILED,
  response,
  starter
})
export const api_v1_indications_read = () => ({
  type: types.API_V1_INDICATIONS_READ
})
export const api_v1_indications_readSucceeded = (response, starter) => ({
  type: types.API_V1_INDICATIONS_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_indications_readFailed = (response, starter) => ({
  type: types.API_V1_INDICATIONS_READ_FAILED,
  response,
  starter
})
export const api_v1_indications_update = data => ({
  type: types.API_V1_INDICATIONS_UPDATE,
  data
})
export const api_v1_indications_updateSucceeded = (response, starter) => ({
  type: types.API_V1_INDICATIONS_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_indications_updateFailed = (response, starter) => ({
  type: types.API_V1_INDICATIONS_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_indications_partial_update = data => ({
  type: types.API_V1_INDICATIONS_PARTIAL_UPDATE,
  data
})
export const api_v1_indications_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_INDICATIONS_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_indications_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_INDICATIONS_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_indications_delete = () => ({
  type: types.API_V1_INDICATIONS_DELETE
})
export const api_v1_indications_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_INDICATIONS_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_indications_deleteFailed = (response, starter) => ({
  type: types.API_V1_INDICATIONS_DELETE_FAILED,
  response,
  starter
})
export const api_v1_login_create = () => ({ type: types.API_V1_LOGIN_CREATE })
export const api_v1_login_createSucceeded = (response, starter) => ({
  type: types.API_V1_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_login_createFailed = (response, starter) => ({
  type: types.API_V1_LOGIN_CREATE_FAILED,
  response,
  starter
})
export const api_v1_medications_list = () => ({
  type: types.API_V1_MEDICATIONS_LIST
})
export const api_v1_medications_listSucceeded = (response, starter) => ({
  type: types.API_V1_MEDICATIONS_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_medications_listFailed = (response, starter) => ({
  type: types.API_V1_MEDICATIONS_LIST_FAILED,
  response,
  starter
})
export const api_v1_medications_create = data => ({
  type: types.API_V1_MEDICATIONS_CREATE,
  data
})
export const api_v1_medications_createSucceeded = (response, starter) => ({
  type: types.API_V1_MEDICATIONS_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_medications_createFailed = (response, starter) => ({
  type: types.API_V1_MEDICATIONS_CREATE_FAILED,
  response,
  starter
})
export const api_v1_medications_read = () => ({
  type: types.API_V1_MEDICATIONS_READ
})
export const api_v1_medications_readSucceeded = (response, starter) => ({
  type: types.API_V1_MEDICATIONS_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_medications_readFailed = (response, starter) => ({
  type: types.API_V1_MEDICATIONS_READ_FAILED,
  response,
  starter
})
export const api_v1_medications_update = data => ({
  type: types.API_V1_MEDICATIONS_UPDATE,
  data
})
export const api_v1_medications_updateSucceeded = (response, starter) => ({
  type: types.API_V1_MEDICATIONS_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_medications_updateFailed = (response, starter) => ({
  type: types.API_V1_MEDICATIONS_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_medications_partial_update = data => ({
  type: types.API_V1_MEDICATIONS_PARTIAL_UPDATE,
  data
})
export const api_v1_medications_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_MEDICATIONS_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_medications_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_MEDICATIONS_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_medications_delete = () => ({
  type: types.API_V1_MEDICATIONS_DELETE
})
export const api_v1_medications_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_MEDICATIONS_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_medications_deleteFailed = (response, starter) => ({
  type: types.API_V1_MEDICATIONS_DELETE_FAILED,
  response,
  starter
})
export const api_v1_parameters_list = () => ({
  type: types.API_V1_PARAMETERS_LIST
})
export const api_v1_parameters_listSucceeded = (response, starter) => ({
  type: types.API_V1_PARAMETERS_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_parameters_listFailed = (response, starter) => ({
  type: types.API_V1_PARAMETERS_LIST_FAILED,
  response,
  starter
})
export const api_v1_parameters_create = data => ({
  type: types.API_V1_PARAMETERS_CREATE,
  data
})
export const api_v1_parameters_createSucceeded = (response, starter) => ({
  type: types.API_V1_PARAMETERS_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_parameters_createFailed = (response, starter) => ({
  type: types.API_V1_PARAMETERS_CREATE_FAILED,
  response,
  starter
})
export const api_v1_parameters_read = () => ({
  type: types.API_V1_PARAMETERS_READ
})
export const api_v1_parameters_readSucceeded = (response, starter) => ({
  type: types.API_V1_PARAMETERS_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_parameters_readFailed = (response, starter) => ({
  type: types.API_V1_PARAMETERS_READ_FAILED,
  response,
  starter
})
export const api_v1_parameters_update = data => ({
  type: types.API_V1_PARAMETERS_UPDATE,
  data
})
export const api_v1_parameters_updateSucceeded = (response, starter) => ({
  type: types.API_V1_PARAMETERS_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_parameters_updateFailed = (response, starter) => ({
  type: types.API_V1_PARAMETERS_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_parameters_partial_update = data => ({
  type: types.API_V1_PARAMETERS_PARTIAL_UPDATE,
  data
})
export const api_v1_parameters_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_PARAMETERS_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_parameters_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_PARAMETERS_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_parameters_delete = () => ({
  type: types.API_V1_PARAMETERS_DELETE
})
export const api_v1_parameters_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_PARAMETERS_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_parameters_deleteFailed = (response, starter) => ({
  type: types.API_V1_PARAMETERS_DELETE_FAILED,
  response,
  starter
})
export const api_v1_signup_create = data => ({
  type: types.API_V1_SIGNUP_CREATE,
  data
})
export const api_v1_signup_createSucceeded = (response, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_signup_createFailed = (response, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_login_create = data => ({
  type: types.REST_AUTH_LOGIN_CREATE,
  data
})
export const rest_auth_login_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_login_createFailed = (response, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_logout_list = () => ({
  type: types.REST_AUTH_LOGOUT_LIST
})
export const rest_auth_logout_listSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_SUCCEEDED,
  response,
  starter
})
export const rest_auth_logout_listFailed = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_FAILED,
  response,
  starter
})
export const rest_auth_logout_create = () => ({
  type: types.REST_AUTH_LOGOUT_CREATE
})
export const rest_auth_logout_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_logout_createFailed = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_password_change_create = data => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE,
  data
})
export const rest_auth_password_change_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_change_createFailed = (response, starter) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_password_reset_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE,
  data
})
export const rest_auth_password_reset_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_reset_createFailed = (response, starter) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_password_reset_confirm_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
  data
})
export const rest_auth_password_reset_confirm_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_reset_confirm_createFailed = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_registration_create = data => ({
  type: types.REST_AUTH_REGISTRATION_CREATE,
  data
})
export const rest_auth_registration_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_registration_createFailed = (response, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_registration_verify_email_create = data => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
  data
})
export const rest_auth_registration_verify_email_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_registration_verify_email_createFailed = (
  response,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_user_read = () => ({ type: types.REST_AUTH_USER_READ })
export const rest_auth_user_readSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_READ_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_readFailed = (response, starter) => ({
  type: types.REST_AUTH_USER_READ_FAILED,
  response,
  starter
})
export const rest_auth_user_update = data => ({
  type: types.REST_AUTH_USER_UPDATE,
  data
})
export const rest_auth_user_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_updateFailed = (response, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_FAILED,
  response,
  starter
})
export const rest_auth_user_partial_update = data => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE,
  data
})
export const rest_auth_user_partial_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_partial_updateFailed = (response, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
