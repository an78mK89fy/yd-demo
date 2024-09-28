<script setup>
const formData = reactive({
    email: null, name: null, dept: null, pswd1: null, pswd2: null
})
const deptArray = [
    '业务部',
    '仓储部',
    '计划部',
    '技术部',
    '质检部',
    '生产部',
    '采购部',
    '财务部',
    '商务部'
]
const rules = {
    email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' }
    ],
    name: [
        { required: true, message: '请输入姓名', trigger: 'blur' }
    ],
    pswd: [
        { required: true, message: '请设置密码1', trigger: 'blur' },
        { required: true, message: '请设置密码2', trigger: 'blur' },

    ]
}
</script>

<template>
    <div>
        <h1>Register</h1>
        <el-form class="register" :model="formData" :rules="rules">
            <el-form-item prop="email">
                <el-input placeholder="邮箱" v-model="formData.email" clearable></el-input>
            </el-form-item>
            <el-form-item prop="name">
                <el-input placeholder="姓名" v-model="formData.name" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-select placeholder="申请部门" v-model="formData.dept" multiple clearable>
                    <el-option v-for="dept in deptArray" :value="dept" :key="dept"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="pswd">
                <el-input type="password" placeholder="设置密码" v-model="formData.pswd1" clearable></el-input>
                <el-input type="password" placeholder="验证密码" v-model="formData.pswd2" clearable></el-input>
            </el-form-item>
            <el-form-item class="btn">
                <el-button type="primary">申请</el-button>
                <RouterLink to="login"><el-button>返回</el-button></RouterLink>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped></style>