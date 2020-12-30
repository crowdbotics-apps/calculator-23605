import axios from "axios"
const calculatorAPI = axios.create({
  baseURL: "https://calculator-23605.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_customtext_list(action) {
  return calculatorAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read(action) {
  return calculatorAPI.get(`/api/v1/customtext/${action.id}/`)
}
function api_v1_customtext_update(action) {
  return calculatorAPI.put(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customtext_partial_update(action) {
  return calculatorAPI.patch(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_dosages_list(action) {
  return calculatorAPI.get(`/api/v1/dosages/`)
}
function api_v1_dosages_create(action) {
  return calculatorAPI.post(`/api/v1/dosages/`, null, { data: action.data })
}
function api_v1_dosages_read(action) {
  return calculatorAPI.get(`/api/v1/dosages/${action.id}/`)
}
function api_v1_dosages_update(action) {
  return calculatorAPI.put(`/api/v1/dosages/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_dosages_partial_update(action) {
  return calculatorAPI.patch(`/api/v1/dosages/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_dosages_delete(action) {
  return calculatorAPI.delete(`/api/v1/dosages/${action.id}/`)
}
function api_v1_homepage_list(action) {
  return calculatorAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read(action) {
  return calculatorAPI.get(`/api/v1/homepage/${action.id}/`)
}
function api_v1_homepage_update(action) {
  return calculatorAPI.put(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_partial_update(action) {
  return calculatorAPI.patch(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_indications_list(action) {
  return calculatorAPI.get(`/api/v1/indications/`)
}
function api_v1_indications_create(action) {
  return calculatorAPI.post(`/api/v1/indications/`, null, { data: action.data })
}
function api_v1_indications_read(action) {
  return calculatorAPI.get(`/api/v1/indications/${action.id}/`)
}
function api_v1_indications_update(action) {
  return calculatorAPI.put(`/api/v1/indications/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_indications_partial_update(action) {
  return calculatorAPI.patch(`/api/v1/indications/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_indications_delete(action) {
  return calculatorAPI.delete(`/api/v1/indications/${action.id}/`)
}
function api_v1_login_create(action) {
  return calculatorAPI.post(`/api/v1/login/`)
}
function api_v1_medications_list(action) {
  return calculatorAPI.get(`/api/v1/medications/`)
}
function api_v1_medications_create(action) {
  return calculatorAPI.post(`/api/v1/medications/`, null, { data: action.data })
}
function api_v1_medications_read(action) {
  return calculatorAPI.get(`/api/v1/medications/${action.id}/`)
}
function api_v1_medications_update(action) {
  return calculatorAPI.put(`/api/v1/medications/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_medications_partial_update(action) {
  return calculatorAPI.patch(`/api/v1/medications/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_medications_delete(action) {
  return calculatorAPI.delete(`/api/v1/medications/${action.id}/`)
}
function api_v1_parameters_list(action) {
  return calculatorAPI.get(`/api/v1/parameters/`)
}
function api_v1_parameters_create(action) {
  return calculatorAPI.post(`/api/v1/parameters/`, null, { data: action.data })
}
function api_v1_parameters_read(action) {
  return calculatorAPI.get(`/api/v1/parameters/${action.id}/`)
}
function api_v1_parameters_update(action) {
  return calculatorAPI.put(`/api/v1/parameters/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_parameters_partial_update(action) {
  return calculatorAPI.patch(`/api/v1/parameters/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_parameters_delete(action) {
  return calculatorAPI.delete(`/api/v1/parameters/${action.id}/`)
}
function api_v1_signup_create(action) {
  return calculatorAPI.post(`/api/v1/signup/`, null, { data: action.data })
}
function rest_auth_login_create(action) {
  return calculatorAPI.post(`/rest-auth/login/`, null, { data: action.data })
}
function rest_auth_logout_list(action) {
  return calculatorAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(action) {
  return calculatorAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(action) {
  return calculatorAPI.post(`/rest-auth/password/change/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_create(action) {
  return calculatorAPI.post(`/rest-auth/password/reset/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_confirm_create(action) {
  return calculatorAPI.post(`/rest-auth/password/reset/confirm/`, null, {
    data: action.data
  })
}
function rest_auth_registration_create(action) {
  return calculatorAPI.post(`/rest-auth/registration/`, null, {
    data: action.data
  })
}
function rest_auth_registration_verify_email_create(action) {
  return calculatorAPI.post(`/rest-auth/registration/verify-email/`, null, {
    data: action.data
  })
}
function rest_auth_user_read(action) {
  return calculatorAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(action) {
  return calculatorAPI.put(`/rest-auth/user/`, null, { data: action.data })
}
function rest_auth_user_partial_update(action) {
  return calculatorAPI.patch(`/rest-auth/user/`, null, { data: action.data })
}
export const apiService = {
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_dosages_list,
  api_v1_dosages_create,
  api_v1_dosages_read,
  api_v1_dosages_update,
  api_v1_dosages_partial_update,
  api_v1_dosages_delete,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_indications_list,
  api_v1_indications_create,
  api_v1_indications_read,
  api_v1_indications_update,
  api_v1_indications_partial_update,
  api_v1_indications_delete,
  api_v1_login_create,
  api_v1_medications_list,
  api_v1_medications_create,
  api_v1_medications_read,
  api_v1_medications_update,
  api_v1_medications_partial_update,
  api_v1_medications_delete,
  api_v1_parameters_list,
  api_v1_parameters_create,
  api_v1_parameters_read,
  api_v1_parameters_update,
  api_v1_parameters_partial_update,
  api_v1_parameters_delete,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
