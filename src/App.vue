<template>
     <v-app>
        <HeaderView />

        <v-main>
            <router-view />
        </v-main>

    </v-app>
</template>

<script>
import HeaderView from './components/HeaderView';

export default {
  name: 'App',
  components: {
    HeaderView,
  },
};
</script>

<style scoped lang="scss">
    main {
        background-image: repeating-radial-gradient(circle at 30% 72%, rgba(224, 242, 242, 1), rgba(235, 235, 235, 1) 0%, rgba(233, 233, 233, 1) 12%, rgba(218, 218, 218, 1) 24%);
        background-attachment: fixed;
        color: #808080;
    }

    
</style>
