<script setup>
import { unlockWindow } from '@/renderer/utils/ipcRenderer/ipcRendererSend.js'

const user = reactive({
    name: '张三',
    pin: ''
})
watch(user, ({ pin }) => {
    console.log(pin)
    if (pin.length > 5) unlockWindow()
})
const time = reactive({
    ymd: null,
    hms: null
})
function showTime() {
    const date = new Date()
    time.ymd = date.toLocaleDateString()
    time.hms = date.toLocaleTimeString()
}
showTime()
setInterval(showTime, 1000)
</script>

<template>
    <el-container>
        <el-header>
            <div class="time">
                <div class="hms" v-text="time.hms"></div>
                <div class="ymd" v-text="time.ymd"></div>
            </div>
        </el-header>
        <el-main>
            <el-input class="user" v-model="user.name" disabled>
                <template #prepend>员工</template>
            </el-input>
            <el-form>
                <el-form-item>
                    <el-input class="pin" v-model="user.pin" maxlength="6" size="large" type="password" clearable>
                        <template #prepend>6位PIN</template>
                        <template #append>{{ user.pin.length }} / 6</template>
                    </el-input>
                </el-form-item>
            </el-form>
        </el-main>
        <el-footer>
            <el-button class="reset" type="success" plain round>重置PIN</el-button>
        </el-footer>
    </el-container>
</template>

<style scoped>
.el-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */

    .el-header {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 160px;

        div.time {
            text-align: center;
            font-size: 32px;
            font-weight: bold;
            color: #2b2b2b;

            div.hms {
                font-size: 64px;
            }
        }
    }

    .el-main {
        flex: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 35px;

        .el-input.user {
            width: 160px;
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