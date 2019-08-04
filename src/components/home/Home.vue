<template>
  <!-- 布局容器  -->
  <el-container>
    <!-- 头部 -->
    <el-header>
      <el-col>
        <el-col :span="8">
          <img
            src="../../assets/logo.png"
            alt=""
          >
        </el-col>
        <el-col :span="8">
          <h1>电商后台管理系统</h1>
        </el-col>
        <el-col
          :span="8"
          class='col3'
        >浅喜似苍狗，深爱如长风 <a
            @click.prevent='logout'
            href="#"
          >退出</a>
        </el-col>
      </el-col>
    </el-header>
    <!-- 容器 -->
    <el-container>
      <!-- 左侧栏 -->
      <el-aside width="200px">
        <!-- 菜单导航 -->
        <el-menu
          :router='true'
          :default-active="handleUrlPath()"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <!-- 标题 -->
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <!-- 选项 -->
            <el-menu-item index='/users'>用户列表</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <!-- 标题 -->
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <!-- 选项 -->
            <el-menu-item index='/roles'>角色列表</el-menu-item>
            <el-menu-item index='/rights'>权限列表</el-menu-item>
          </el-submenu>

        </el-menu>

      </el-aside>
      <!-- 主体 -->
      <el-main>
        <!-- 嵌套路由出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
/* eslint-disable */
export default {
  methods: {
    logout () {
      this.$confirm('此操作将退出账户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

        // 0.删除本地的 token
        localStorage.removeItem('token')

        //1. 点击确定 的提示
        this.$message({
          type: 'success',
          message: '退出成功!',
          duration: 800
        })

        // 2.返回
        this.$router.push('/login')
      }).catch(() => {
        // 点击取消 的提示
        this.$message({
          type: 'info',
          message: '取消退出',
          duration: 800
        })
      })
    },
    // 开
    handleOpen () {
      console.log('开了');

    },

    // 关
    handleClose () {
      console.log('关了');

    },
    // 处理url哈希值路径的方法
    handleUrlPath () {
      // 想怎么处理就怎么处理
      return this.$route.path
    }
  }

}
</script>

<style scoped lang='less' >
.el-container {
  height: 100%;
}

.el-header {
  background: #b3c1cd;
  padding: 0;
  h1 {
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 26px;
  }
  .col3 {
    line-height: 60px;
    text-align: right;
    padding-right: 30px;
    a {
      color: #daa520;
    }
  }
}

.el-aside {
  background: #545c64;
}

.el-main {
  background: #eaeef1;
}
</style>
