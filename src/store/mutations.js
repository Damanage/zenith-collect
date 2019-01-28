// https://vuex.vuejs.org/en/mutations.html
import { Utils } from './variables.js'
import Axios from 'axios'

export default {
  showMessage (state, msg) {
    state.snapMessage = msg;
    if (msg.authError) {
      this.commit('logOut');
    }
  },
  logIn (state, auth) {
    state.loggedIn = !!(auth && auth.token);
    if(!state.loggedIn) this.commit("showMessage", {msg: 'Ошибка входа', type: 4});
  },
  logOut (state) {
    state.loggedIn = false
    this._vm.$localStorage.remove('auth');
    Axios.defaults.headers = {};
  },
  setContacts (state, contacts) {
    state.contacts = [];
    this._vm._.forEach(contacts, (p) => {
      state.contacts.push(p);
    })
  },
  setContact (state, contact) {
    state.contact = {};
    contact.birth_date = Utils.dateToString(contact.birth_date);
    Object.assign(state.contact, contact);
  },
  setFirms (state, firms) {
    state.firms = [];
    this._vm._.forEach(firms, (p) => {
      state.firms.push(p);
    })
  },
  setFirm (state, firm) {
    state.firm = {};
    Object.assign(state.firm, firm);
  },
  setProjects (state, projects) {
    state.projects = [];
    this._vm._.forEach(projects, (p) => {
      state.projects.push(p);
    })
  },
  setProject (state, project) {
    state.project = {};
    project.date_open = Utils.dateToString(project.date_open);
    project.date_close = Utils.dateToString(project.date_close);

    Object.assign(state.project, project);
  },
  setNpas (state, npas) {
    state.npas = [];
    this._vm._.forEach(npas, (p) => {
      state.npas.push(p);
    })
  },
  setNpa (state, npa) {
    state.npa = {};
    Object.assign(state.npa, npa);
  }
}
