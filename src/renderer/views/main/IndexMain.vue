<script setup>

</script>

<template>
    <el-container>
        <el-header>
            <el-menu mode="horizontal" :ellipsis="false" router>
                <img class="logo" src="/icon/logo.jpg" alt="yd-logo">
                <el-menu-item index="/dashboard">仪表盘</el-menu-item>
                <el-menu-item index="/menu">菜单</el-menu-item>
                <el-menu-item>员工</el-menu-item>
                <div class="flex"></div>
                <div class="avatar">
                    <el-avatar>avatar</el-avatar>
                    <span class="name">员工姓名</span>
                    | 🔔
                </div>
            </el-menu>
        </el-header>
        <el-breadcrumb separator=">">
            <el-breadcrumb-item>1</el-breadcrumb-item>
            <el-breadcrumb-item>2</el-breadcrumb-item>
            <el-breadcrumb-item>3</el-breadcrumb-item>
        </el-breadcrumb>
        <el-main>
            <RouterView></RouterView>
        </el-main>
    </el-container>
</template>

<style scoped>
.el-container {
    .el-header {
        .el-menu {
            img.logo {
                height: 100%;
                border-right: 1px solid var(--el-border-color);
                border-radius: 10px;
                margin-right: 10px;
                padding-right: 10px;
            }

            .el-menu-item {
                font-weight: bolder;
                border-radius: 10px 10px 5px 5px;
            }

            div.flex {
                flex: 1;
            }

            div.avatar {
                display: flex;
                align-items: center;
                gap: 10px;
            }
        }
    }
}
</style>