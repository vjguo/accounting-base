import { AccountingDatabase } from '@vongolajs/types-accounting'
import { defineStore } from 'pinia'

interface DatabaseStoreState {
  database: AccountingDatabase
}

export const useDatabaseStore = defineStore('DatabaseStore', {
  state: (): DatabaseStoreState => ({
    database: {} as AccountingDatabase
  })
})
