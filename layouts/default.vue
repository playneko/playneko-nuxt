<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      color="#424242"
      class="header-font"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: '',
          title: 'Rasberry Pi',
          to: '/rasberry-pi/1'
        },
        {
          icon: '',
          title: 'Python',
          to: '/python/2'
        },
        {
          icon: '',
          title: 'PHP',
          to: '/php/3'
        },
        {
          icon: '',
          title: 'Java',
          to: '/java/4'
        },
        {
          icon: '',
          title: 'Linux',
          to: '/linux/5'
        },
        {
          icon: '',
          title: 'JavaScript',
          to: '/javascript/6'
        },
        {
          icon: '',
          title: '아키바 정보',
          to: '/akihabara/7'
        },
        {
          icon: '',
          title: '챗봇',
          to: '/chat-bot/9'
        }
      ],
      title: '여러가지 IT정보를 공유하는 블로그&커뮤니티 입니다.'
    }
  }
}
</script>

<style>
.header-font div, .header-font i {
  color: #ffffff !important;
}
</style>
