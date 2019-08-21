<template>
  <div class="navMenu">
    <label v-for="navMenu in navMenus">
      <router-link :to="{ path: navMenu.entity.value }">
        <el-menu-item v-if="!navMenu.childs && navMenu.entity && navMenu.entity.state==='1'"
                      :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.id">
          <i :class="navMenu.entity.icon"></i>
          <span slot="title">{{navMenu.entity.alias ? navMenu.entity.alias : navMenu.entity.name}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-if="navMenu.childs && navMenu.entity && navMenu.entity.state==='1'"
                  :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.id">
        <template slot="title">
          <i :class="navMenu.entity.icon"></i>
          <span>{{navMenu.entity.alias ? navMenu.entity.alias : navMenu.entity.name}}</span>
        </template>
        <SubMenu :navMenus="navMenu.childs"></SubMenu>
      </el-submenu>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'SubMenu',
    props: {
      navMenus: {} // 菜单数据
    },
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style scoped>
  a {
    text-decoration: none
  }
</style>
