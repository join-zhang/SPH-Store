<template>
  <div class="pagination">
    <button :disabled ="pageNo == 1" @click="$emit('getPageNo',pageNo-1)">上一页</button>
    <button v-if="startNumAndEndNum.start >= 2" @click="$emit('getPageNo',1)" :class="{active:pageNo==1}">1</button>
    <button v-if="startNumAndEndNum.start > 2" >···</button>

    <button
      v-for="(page, index) in startNumAndEndNum.end"
      v-if="page >= startNumAndEndNum.start"
      @click="$emit('getPageNo',page)"
      :class="{active : pageNo == page}"
    >
      {{ page }}
    </button>

    <button v-if="startNumAndEndNum.end < totalPage -1">···</button>
    <button v-if="startNumAndEndNum.end < totalPage" @click="$emit('getPageNo',totalPage)" :class="{active:pageNo == totalPage}">{{ totalPage }}</button>
    <button :disabled ="pageNo == totalPage" @click="$emit('getPageNo',pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  //         页码数     每页个数    总个数    中间个数
  // 计算属性
  computed: {
    // 计算总共的页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      const { pageNo, pageSize, total, continues } = this;
      let start = 0;
      let end = 0;
      // 不正常现在  定义的continues 比 总页数还大
      if (continues > this.totalPage) {
        start = 1;
        end = this.totalPage;
      } else {
        // 正常现象  [连续页码5,  但是你的总页数一定大于5
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        if (start < 1) {
          start = 1;
          end = continues;
        }

        if (end > this.totalPage) {
          start = this.totalPage - continues + 1;
          end = this.totalPage;
        }
      }

      //   console.log(this);
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
.active{
    background-color: skyblue;
}
</style>
