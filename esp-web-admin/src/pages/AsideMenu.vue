<template>
  <el-row class="tac">
    <el-col>
      <Menu :navMenus="totalList" :selected="defaultSelected" :isCollapse="isCollapse"></Menu>
    </el-col>
  </el-row>
</template>

<script>
  import config from '../datas/MenuDatas'
  import Menu from '@/components/menu/Menu';

  export default {
    data() {
      return {
        totalList: config.childs,
        defaultSelected: "系统管理",
        isCollapse: false
      }
    },
    methods: {
    },
    components: {
      // 引入菜单组件
      Menu
    }
  }
</script>
