<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <!--左侧菜单组件-->
    <el-menu
      :default-active="selected"
      :collapse="isCollapse"
      @select="handleSelect"
      class="el-menu-vertical"
      background-color="#F0F6F6"
      text-color="#3C3F41"
      active-text-color="#f60">
      <SubMenu :navMenus="navMenus"></SubMenu>
    </el-menu>
  </div>
</template>

<script>
  import SubMenu from '@/components/menu/SubMenu'

  export default {
    name: 'Menu',
    props: {
      navMenus: {}, // 菜单数据
      selected: String, // 初始化菜单的默认选中项
      isCollapse: Boolean // 菜单初始化状态(展开/收起)
    },
    data() {
      return {}
    },
    components: {
      SubMenu
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log("handleSelect", key, keyPath)
      }
    },
    beforeRouteEnter(to, from, next) {
      console.log("beforeRouteEnter", to, from, next)
      next(vm => {
        vm.selected = to.params.id
      })
    },
    watch: {
      $route(to, from) {
        console.log("watch", to, from)
        this.selected = to.params.id
      }
    },
  }
</script>

<style scoped>
  el-menu{
    border-right: none;
    font-size: 15px;
    margin-right: 0px;
    display: inline-block;
    width: 23px;
    text-align: center;
    color: inherit;
  }
</style>
