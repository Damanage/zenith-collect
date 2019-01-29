<template>
  <v-app>
    <core-toolbar/>
    
    <core-drawer v-if="$route.name !== 'Вход'"/>

    <core-view />
    <v-alert
      :value="true"
      type="info"
      dismissible
      transition="scale-transition"
      style="z-index: 500"
      >
      <h3>Внимание!</h3>
      <p>Коллеги, данная страница является статичной демо-версией фронта и имеет ряд ограничений:</p>
      <p>Страница разрабатывается только под десктоп, и не адаптирована для других устройств</p>
      <p>У демо нет связи с базой, поэтому все данные сбрасываются с обновлением страницы.</p>
    </v-alert>
  </v-app>
</template>

<style lang="scss">
@import '@/styles/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
