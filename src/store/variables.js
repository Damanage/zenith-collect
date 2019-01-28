export const baseUrl = 'http://212.8.237.131:9000/'
import Vue from 'vue'
import Axios from 'axios'

export const Utils = Object.freeze({
  buildHeaders: function (auth) {
    let headers = {}
    headers[auth.header] = auth.token
    headers['Content-Type'] = 'application/json'
    return headers
  },
  processError (error) {
    let text = error.stack || error
    let serverError = null

    if (error.response) {
      serverError = (error.response.status === 500) ? 'Ошибка сервера' : 'Непредвиденная ошибка'
      text = (error.response.data) ? error.response.data : serverError
    }

    return {
      msg: text,
      type: 4,
      authError: !!(error.response && error.response.status === 401)
    };
  },
  GET (url) {
    let authReq = JSON.parse(localStorage.getItem('auth'))
    Axios.defaults.headers = this.buildHeaders(authReq);
    return Axios.get(baseUrl + url);
  },
  POST (url, data) {
    let authReq = JSON.parse(localStorage.getItem('auth'))
    Axios.defaults.headers = this.buildHeaders(authReq);
    return Axios.post(baseUrl + url, data);
  },
  dateFromString (v, pattern) {
    let p = pattern || 'DD.MM.YYYY'
    if (v && Vue._.isString(v)) {
      return Vue.moment(v, p).valueOf();
    }
    return null
  },
  dateToString (v, pattern) {
    let p = pattern || 'DD.MM.YYYY'
    if (v && Vue._.isNumber(v)) {
      return Vue.moment(v).format(p)
    }
    return null
  }

})
