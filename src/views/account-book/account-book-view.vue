<template>
  <div class="account-book-view">
    <!-- <el-form :model="formData" label-position="top">
      <el-form-item label="账本名称" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="本位币" prop="currency">
        <el-select v-model="formData.currency">
          <el-option value="RMB" label="人民币"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="月起始日" prop="monthStartDay">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
    </el-form> -->
    <el-table :data="accountBooks" border>
      <el-table-column label="账本名称" prop="name" :min-width="193"></el-table-column>
      <el-table-column label="本位币" prop="currency" :min-width="67"></el-table-column>
      <el-table-column label="月起始日" prop="monthStartDay" :min-width="89"></el-table-column>
      <el-table-column
        label="创建时间"
        prop="createTime"
        :min-width="151"
        :formatter="formatCreateTime"
      ></el-table-column>
      <el-table-column label="默认" prop="isDefault" :min-width="49" #default="{ row }">
        <el-icon v-show="row.isDefault">
          <Star></Star>
        </el-icon>
      </el-table-column>
      <el-table-column label="操作" :min-width="145" #default="{ row }">
        <el-button type="primary" circle :icon="Edit"></el-button>
        <el-button type="danger" circle :icon="Delete" @click="handleDelete(row)"></el-button>
        <el-button v-if="!row.isDefault" type="warning" circle :icon="Star"></el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { Delete, Edit, Star } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'
import { useDatabaseStore } from '@/store/database-store'
import { ElMessageBox } from 'element-plus'
import 'element-plus/es/components/message-box/style/css'
import type { AccountBook } from '@vongolajs/types-accounting'

const database = useDatabaseStore().database
const accountBooks = ref<AccountBook[]>([])
accountBooks.value

function formatCreateTime(row: AccountBook) {
  return row.createTime?.toLocaleString() || ''
}

async function handleDelete(row: AccountBook) {
  try {
    await ElMessageBox.confirm('确定要删除吗', '确认', { type: 'warning' })
    database.accountBooks.delete(row.id)
  } catch {
    return
  }
}

onMounted(async () => {
  accountBooks.value = await database.accountBooks.toArray()
})
</script>

<style lang="scss" scoped>
.account-book-view {
  height: 100%;
  width: 100%;
}
</style>
