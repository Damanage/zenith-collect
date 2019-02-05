// https://vuex.vuejs.org/en/actions.html
import {Utils, baseUrl} from './variables.js'
import Axios from 'axios'

export default {
  async loadContacts(context) {
    let contacts = (await Utils.GET('fl/list/')
      .catch(error => {
        let e = Utils.processError(error);
        context.commit("showMessage", e);
      })).data;

    context.commit("setContacts", contacts);
  },
  async saveContact(context, contact) {
    contact.birth_date = Utils.dateFromString(contact.birth_date);

    let updated = (await Utils.POST('fl/', contact)
      .catch(error => {
        let e = Utils.processError(error);
        context.commit("showMessage", e);
      })).data;
    if (updated && updated.id === contact.id) context.commit("showMessage", {msg: "Успешно сохранено", type: 2});
    context.commit("setContact", updated);
  },
  async findContact(context, id) {
    let found = (await Utils.GET(`fl/${id}/`)
      .catch(error => {
        let e = Utils.processError(error);
        context.commit("showMessage", e);
      })).data;
    context.commit("setContact", found);
  },
  async loadFirms(context) {
    let firms = (await Utils.GET('ul/list/')
      .catch(error => {
        let e = Utils.processError(error);
        context.commit("showMessage", e);
      })).data;

    context.commit("setFirms", firms);
  },
  async saveFirm(context, firm) {
    let updated = (await Utils.POST('ul/', firm)
      .catch(error => {
        let e = Utils.processError(error);
        context.commit("showMessage", e);
      })).data;
    if (updated && updated.id === firm.id) context.commit("showMessage", {msg: "Успешно сохранено", type: 2});
    context.commit("setFirm", updated);
  },
  async findFirm(context, id) {
    let found = (await Utils.GET(`ul/${id}/`)
      .catch(error => {
        let e = Utils.processError(error);
        context.commit("showMessage", e);
      })).data;
    context.commit("setFirm", found);
  },
  async loadProjects(context) {
    let projects = (await Utils.GET('project/list/').catch(error => {
      let e = Utils.processError(error);
      context.commit("showMessage", e);
    })).data;
    context.commit("setProjects", projects);
  },
  async saveProject(context, project) {
    project.date_open = Utils.dateFromString(project.date_open);
    project.date_close = Utils.dateFromString(project.date_close);

    let updated = (await Utils.POST('api/v1/project/', project).catch(error => {
      let e = Utils.processError(error);
      context.commit("showMessage", e);
    })).data;
    if (updated && updated.id === project.id) context.commit("showMessage", {msg: "Успешно сохранено", type: 2});
    context.commit("setProject", updated);
  },
  async findProject(context, id) {
    let found = (await Utils.GET(`project/${id}/`).catch(error => {
      let e = Utils.processError(error);
      context.commit("showMessage", e);
    })).data;
    context.commit("setProject", found);
  },
  async loadNpas(context) {
    let npas = (await Utils.GET('npa/list/').catch(error => {
      let e = Utils.processError(error);
      context.commit("showMessage", e);
    })).data;
    context.commit("setNpas", npas);
  },
  async saveNpa(context, npa) {
    let updated = (await Utils.POST('npa/', npa).catch(error => {
      let e = Utils.processError(error);
      context.commit("showMessage", e);
    })).data;
    if (updated && updated.id === npa.id) context.commit("showMessage", {msg: "Успешно сохранено", type: 2});
    context.commit("setNpa", updated);
  },
  async findNpa(context, id) {
    let found = (await Utils.GET(`npa/${id}/`).catch(error => {
      let e = Utils.processError(error);
      context.commit("showMessage", e);
    })).data;
    context.commit("setNpa", found);
  },
  async logIn(context, loginData) {
    let authReq = (await Axios.post(baseUrl + 'login/', loginData)
      .catch(error => {
        let e = Utils.processError(error);
        context.commit("showMessage", e);
      })).data;
    this._vm.$localStorage.set("auth", JSON.stringify(authReq));
    context.commit("logIn", authReq);
  }
}
