<template>
  <BaseTable
    :propList="propList"
    :data="tableData"
    :operation="false"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BaseTable from '../../components/table/index'
import { ITableOptions } from '../../components/table/src/types'
const tableData: any = ref([])
tableData.value = [
  {
    fileName: '1',
    contractType_view: '1',
    submitterName: '1',
    submitTime: '1'
  },
  {
    fileName: '2',
    contractType_view: '2',
    submitterName: '2',
    submitTime: '2'
  }
]
const propList: ITableOptions[] = [
  {
    showOverflowTooltip: true,
    label: '文件名称',
    prop: 'fileName',
    minWidth: 130,
    align: 'left'
  },
  {
    showOverflowTooltip: true,
    label: '合同类型',
    prop: 'contractType_view',
    minWidth: 130,
    align: 'left'
  },
  {
    label: '上传人',
    prop: 'submitterName',
    minWidth: 150,
    showOverflowTooltip: true
  },
  {
    label: '上传时间',
    prop: 'submitTime',
    minWidth: 160
  }
]
</script>

<style scoped lang="scss"></style>
