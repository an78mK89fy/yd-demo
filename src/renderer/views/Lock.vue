<script setup>
import { reactive } from 'vue';

const user = reactive({
    name: '张三',
    pin: ''
})
function backMainWindow() {

}
const time = reactive({
    ymd: null,
    hms: null
})
setInterval(() => {
    const date = new Date()
    time.ymd = date.toLocaleDateString()
    time.hms = date.toLocaleTimeString()
}, 1000)
</script>

<template>
    <el-container>
        <el-header>
            <el-input class="user" v-model="user.name" disabled>
                <template #prepend>员工</template>
            </el-input>
        </el-header>
        <el-main>
            <el-form>
                <el-form-item>
                    <el-input class="pin" v-model="user.pin" maxlength="6" size="large" type="password" clearable>
                        <template #prepend>6位PIN</template>
                        <template #append>{{ user.pin.length }} / 6</template>
                    </el-input>
                </el-form-item>
            </el-form>
            <div class="time">
                <div class="ymd" v-text="time.ymd"></div>
                <div class="hms" v-text="time.hms"></div>
            </div>
        </el-main>
        <el-footer>
            <el-button class="reset" type="success" plain round @click="backMainWindow">重置PIN</el-button>
        </el-footer>
    </el-container>
</template>

<style scoped>
.el-container {
    height: 100%;
    display: flex;
    flex-direction: column;

    .el-header {
        display: flex;
        justify-content: center;
        align-items: flex-end;

        .el-input {
            width: 160px;
        }
    }

    .el-main {
        flex: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 35px;

        div.time {
            text-align: center;
            font-size: 36px;
            font-weight: bold;
        }

        .el-form {
            width: 280px;
        }
    }

    .el-footer {
        display: flex;
        justify-content: center;
    }
}
</style>