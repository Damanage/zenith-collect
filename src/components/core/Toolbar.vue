<template>
  <v-toolbar
    id="core-toolbar"
    flat
    prominent
    app
    style="background: #eee;">
    <div class="v-toolbar-title">
      <v-toolbar-title
              class="tertiary--text font-weight-light">
        <v-btn
                v-if="responsive"
                class="default v-btn--simple"
                dark
                icon
                @click.stop="onClickBtn">
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
        {{ title }}
      </v-toolbar-title>
    </div>
    <!--<v-spacer />-->
    <v-toolbar-items v-if="title !== 'Вход' && showEdit">
      <v-flex
              align-center
              layout
              py-2>
        <v-btn
                v-ripple
                flat icon
                class="toolbar-items"
                @click="onSaveClick">
          <v-icon color="tertiary">mdi-content-save</v-icon>
        </v-btn>
      </v-flex>
    </v-toolbar-items>

    <v-spacer />
    <v-toolbar-items v-if="title !== 'Вход'">
      <v-flex
        align-center
        layout
        py-2>
        <router-link
          v-ripple
          class="toolbar-items"
          to="/">
          <v-icon color="tertiary">mdi-home</v-icon>
        </router-link>
        <v-btn
          v-ripple
          flat icon
          class="toolbar-items"
          @click="logOut">
          <v-icon color="tertiary">mdi-exit-to-app</v-icon>
        </v-btn>
      </v-flex>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

import {
  mapMutations
} from 'vuex';

import { EventBus, EventName} from '@/utils/eventbus';

export default {
  data: () => ({
    title: null,
    responsive: false,
    responsiveInput: false,
    showEdit: false
  }),

  watch: {
    '$route' (to, from) {
      this.title = to.name;
      this.showEdit = to.path.indexOf('edit') > 0;
    }
  },

  computed: {
  },

  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },

  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onClickBtn () {
      this.setDrawer(!this.$store.state.app.drawer)
    },
    ...mapMutations({
      logOut: 'logOut'
    }),
    onClick () {
      //
    },
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
        this.responsiveInput = false
      } else {
        this.responsive = false
        this.responsiveInput = true
      }
    },
    onSaveClick(){
      EventBus.$emit(EventName.EVENT_SAVE,{});
    }
  }
}
</script>

<style>
  #core-toolbar a {
    text-decoration: none;
  }
</style>
