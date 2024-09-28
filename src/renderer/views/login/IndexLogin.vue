<script setup>
</script>

<template>
    <el-card class="container">
        <div class="container">
            <RouterView></RouterView>
            <el-card class='badge'>
                <div class="badge">
                    <el-avatar size="large">avatar</el-avatar>
                    <div class="name">员工姓名</div>
                    <div class="dept">所属部门</div>
                </div>
            </el-card>
        </div>
    </el-card>
</template>

<style scoped>
div.container {
    display: flex;
    gap: 50px;
    justify-content: center;

    .el-card.badge {
        border-radius: 8px;

        div.badge:not(.el-card) {
            width: 210px;
            height: 330px;
            border: 1px solid var(--el-border-color);
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            >div {
                border-bottom: 1px solid black;
                padding: 10px;
            }
        }
    }
}
</style>
<style>
.el-form.register,
.el-form.login {
    width: 240px;

    .el-form-item.btn>div {
        display: flex;
        gap: 20px;
    }
}
</style>