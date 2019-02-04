<template>
    <v-content>
        <div id="core-view">
            <v-fade-transition mode="out-in">
                <router-view/>
            </v-fade-transition>
        </div>
        <core-footer v-if="false"/>
        <v-snackbar
                :color="color"
                :bottom="bottom"
                :top="top"
                :left="left"
                :right="right"
                v-model="snackbar"
                dark>
            <v-icon color="white"
                    class="mr-3">
                mdi-bell-plus
            </v-icon>
            <div>{{ message }}</div>
            <v-icon
                    size="16"
                    @click="snackbar = false">
                mdi-close-circle
            </v-icon>
        </v-snackbar>
    </v-content>
</template>

<script>
  import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

  let unwatcher1
  export default {
    metaInfo () {
      return {
        title: 'Долговой центр'
      }
    },
    data () {
      return {
        color: null,
        colors: [
          'purple',
          'info',
          'success',
          'warning',
          'error'
        ],
        top: true,
        bottom: false,
        left: true,
        right: false,
        snackbar: false,
        message: ''
      }
    },
    methods: {
      
      snack (msg, type) {
        this.message = msg
        this.color = this.colors[type || 2]
        this.snackbar = true
      },
      ...mapMutations({
        logOut: 'logOut'
      }),
    },
    computed: {},
    created () {
      try {
        let self = this
        unwatcher1 = this.$store.watch(state => {
            return state.snapMessage
          },
          (newValue) => {
            if (newValue) {
              self.snack(newValue.msg, newValue.type)
            }
          });
      } catch (e) {
        console.log(e)
      }
      
      
    },
    
    beforeDestroy () {
      unwatcher1();
    }

  }
</script>

<style>
    #core-view {
        height: auto !important;
        padding-bottom: 100px;
    }
</style>
