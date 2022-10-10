<template>
    <header>
        <!-- メニューバー -->
        <v-app-bar app>
            <v-app-bar-nav-icon v-if="$vuetify.breakpoint.xs" @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title @click="$router.push('/portfolio')" style="cursor:pointer">Portfolio</v-toolbar-title>
            <v-tabs v-if="!$vuetify.breakpoint.xs" right color="#4b0082">
                <v-tab v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.url" :exact="menuItem.exact">
                    {{ menuItem.name }}
                </v-tab>
            </v-tabs>
        </v-app-bar>

        <!-- サイドメニュー -->
        <v-navigation-drawer v-model="drawer" fixed temporary>
            <v-list nav dense>
                <v-list-item-group color="#4b0082">
                    <v-list-item v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.url" :exact="menuItem.exact">
                        <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </header>
</template>

<script>
export default {
    name: 'HeaderView',
    data () {
        return {
            drawer: false,
            model: 'tab-1',
            menuItems: [
                {
                  name: 'Home',
                  url: '/portfolio',
                  exact: true
                },
                {
                  name: 'Works',
                  url: '/portfolio/Works',
                  exact: false
                },
                {
                  name: 'Skills',
                  url: '/portfolio/Skills',
                  exact: false
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    .v-toolbar__title {
        overflow: visible !important;
        color: #707070;
        padding-left: 8%;
        font-size: 24px;
    }
    .v-tabs {
        padding-right: 8%;
    }
    .v-tab {
        min-width: 120px;
    }
</style>
