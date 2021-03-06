export default [
  {
    path: '/home',
    view: 'Home',
    name: 'Главная',
  },
  {
    path: '/projects',
    view: 'Projects',
    name: 'Проекты',
  },
  {
    path: '/allprojects',
    view: 'AllProjects',
    name: 'Проекты',
  },
  {
    path: '/editproject/:id',
    view: 'EditProject',
    name: 'Карточка Проекта',
  },
  {
    path: '/project/:id',
    view: 'Projects',
    name: 'Карточка Проекта ',
  },
  {
    path: '/contacts',
    name: 'ФЛ',
    view: 'Contacts'
  },
  {
    path: '/editcontact/:id',
    name: 'Карточка ФЛ',
    view: 'EditContact'
  },
  {
    path: '/firms',
    name: 'ЮЛ',
    view: 'Firms'
  },
  {
    path: '/editfirm/:id',
    name: 'Карточка ЮЛ',
    view: 'EditFirm'
  },
  {
    path: '/npa',
    name: 'НПА',
    view: 'Npa'
  },
  {
    path: '/editnpa/:id',
    name: 'Карточка НПА',
    view: 'EditNpa'
  },
  {
    path: '/login',
    name: 'Вход',
    view: 'Login'
  },
  {
    path: '/test',
    name: 'Test',
    view: 'Test'
  }
]
