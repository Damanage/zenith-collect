<template>
    <v-dialog persistent v-model="dialog" max-width="600" lazy scrollable style="border-radius: 4px;" overflow-hidden>
        <v-card overflow-hidden>
            <v-card-title
                    class="headline orange">
                <span class="d-dialog-toolbar-text">Выберите значение</span>
            </v-card-title>
            <v-card-text class="d-dialog-list">
                <v-list class="pa-0">
                    <template v-for="item in items">
                        <v-list-tile @click="select(item)">
                            <v-list-tile-action>
                                <v-icon v-if="item.id === selected.id" color="green">check</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{item[itemProperty]}}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-divider></v-divider>
                    </template>
                </v-list>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary"
                       flat
                       @click="cancel">
                    Cancel
                </v-btn>
                <v-btn color="primary" flat @click="done">Ok</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
    props: ['listCollection', 'itemProperty', 'showDialog', 'currentSelection'],
    name: 'ProjectSelect',
    data () {
      return {
        dialog: false,
        items: this.listCollection,
        selected: this.currentSelection
      }
    },
    computed: {},
    methods: {
      select (item) {
        this.selected = item || {}
      },
      done () {
        this.dialog = false
        this.$emit('itemSelected', this.selected)
      },
      cancel () {
        this.dialog = false
        this.$emit('itemSelected', null)
      }
    },
    watch: {
      showDialog (v) {
        this.dialog = v
        this.selected = this.currentSelection
      }
    }
  }
</script>

<style scoped>
    .d-dialog-toolbar-text {
        color: white;
        font-size: 16px;
    }

    .d-dialog-list {
        height: 500px;
        overflow-y: auto;
    }
    .d-dialog-list a {
        padding:0;
    }
</style>
