<template>
  <el-container style="border: 1px solid #eee">
    <el-header style="text-align: right; font-size: 12px">
      test-el-header
    </el-header>

    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <asideMenu></asideMenu>
      </el-aside>
      <el-container>
        <template>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </template>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>test-el-footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  import AsideMenu from '@/pages/AsideMenu'

  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }
      return {
        tableData: Array(20).fill(item)
      }
    },
    components: {
      asideMenu: AsideMenu
    }
  }
</script>
