<template>
  <nav class="side-nav bg-white">
    <ul>
      <li v-for="item in sideNav" :key="item.name" class="nav-item">
        <div class="nav-title" v-text="item.name"></div>
        <div class="groups-wrapper" v-if="item.groups">
          <div class="group" v-for="group in item.groups" :key="group.name">
            <div class="group-title" v-text="group.name"></div>
            <div class="group-list">
              <router-link
                class="group-list-item"
                tag="li"
                v-for="link in group.children"
                :key="link.name"
                v-text="link.name"
                :to="link.path"
              ></router-link>
            </div>
          </div>
        </div>
        <ul class="pure-menu-list" v-else>
          <router-link
            tag="li"
            v-for="link in item.children"
            :key="link.name"
            class="pure-list-item"
            :to="link.path"
            v-text="link.name"
          ></router-link>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import navConf from "../nav.conf.json";
export default {
  data() {
    return {
      sideNav: []
    };
  },
  created() {
    this.sideNav = navConf.sideNav;
  }
};
</script>

<style scoped>
.side-nav {
  position: fixed;
  width: 15rem;
  border-radius: 3px;
  padding: 20px;
}
.nav-title,
.group-list-item,
.pure-list-item {
  height: 32px;
  line-height: 32px;
  cursor: pointer;
}
.nav-title {
  color: #333;
  font-weight: 700;
  font-size: 16px;
  margin-top: 15px;
}

.group-title {
  font-size: 12px;
  color: #999;
  line-height: 20px;
  margin-top: 15px;
}
.side-nav ul .nav-item:first-child .nav-title {
  margin-top: 0;
}
</style>