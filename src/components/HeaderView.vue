<template>
    <header>

        <v-app-bar app>
            <v-app-bar-nav-icon v-if="$vuetify.breakpoint.xs" @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>Portfolio</v-toolbar-title>
            <v-tabs v-if="!$vuetify.breakpoint.xs" right color="#4b0082">
                <v-tab to="/portfolio/" exact>Home</v-tab>
                <v-tab to="/portfolio/Works" exact>Works</v-tab>
                <!-- <v-tab to="/Work2" exact>Work2</v-tab> -->
                <v-tab to="/portfolio/Skills" exact>Skills</v-tab>
                <!-- <v-tab to="/Contact" exact>Contact</v-tab> -->
            </v-tabs>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group v-model="selectedItem" color="#4b0082">
                    <v-list-item to="/portfolio/">
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/portfolio/Works">
                        <v-list-item-title>Works</v-list-item-title>
                    </v-list-item>
                    <!-- <v-list-item to="/Work2">
                        <v-list-item-title>Work2</v-list-item-title>
                    </v-list-item> -->
                    <v-list-item to="/portfolio/Skills">
                        <v-list-item-title>Skills</v-list-item-title>
                    </v-list-item>
                    <!-- <v-list-item to="/Contact">
                        <v-list-item-title>Contact</v-list-item-title>
                    </v-list-item> -->
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
      selectedItem: 0
    }
  }
}
</script>

<style scoped lang="scss">
    .v-toolbar__title {
        overflow: visible !important;
        color: #707070;
        padding-left: 180px;
    }
    .v-tabs {
        padding-right: 180px;
    }
    .v-tab {
        min-width: 120px;
    }
</style>
