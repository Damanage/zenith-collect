// https://vuex.vuejs.org/en/getters.html

export default {
  loggedIn(state) {
    return state.loggedIn;
  },
  getContacts(state) {
    return state.contacts;
  },
  getContact(state) {
    return state.contact;
  },
  getFirms(state) {
    return state.firms;
  },
  getFirm(state) {
    return state.firm;
  },
  getProjects(state) {
    return state.projects;
  },
  getProject(state) {
    console.log("getters.js -23ln",state.project);
    return state.project;
  },
  getNpas(state) {
    return state.npas;
  },
  getNpa(state) {
    return state.npa;
  }
}
