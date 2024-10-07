<script setup>
const formData = ref({
    email: null, pswd: null, stay: false
})
function goMain() {
    ipcRendererSend.window.openWindowMain()
}
</script>

<template>
    <div class="login">
        <h1>Login</h1>
        <el-form class="login">
            <el-form-item>
                <el-input placeholder="邮箱" v-model="formData.email" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="密码" type="password" v-model="formData.pswd" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-checkbox label="保持登录" v-model="formData.stay"></el-checkbox>
            </el-form-item>
            <el-form-item class="btn">
                <el-button type="primary" @click="goMain">登录</el-button>
                <RouterLink to="register"><el-button>注册</el-button></RouterLink>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped></style>