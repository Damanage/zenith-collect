<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-card class="elevation-12">
                    <v-toolbar color="green">
                        <v-toolbar-title style="color: white">Вход в систему</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field prepend-icon="person" name="login" label="Login" type="text"
                                          v-model="username"></v-text-field>
                            <v-text-field prepend-icon="lock" name="password" label="Password" id="password"
                                          type="password"
                                          v-model="password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" style="color: white;" @click="logIn({username, password})">Войти
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapState, mapMutations, mapActions, mapGetters} from "vuex";

    export default {
        data() {
            return {
                username: '',
                password: ''
            };
        },
        methods: {
          ...mapActions({
            logIn: 'logIn'
          })
        }
    };
</script>
<style scoped>
    .v-toolbar__content{
        margin-left: 0!important;
    }
</style>
