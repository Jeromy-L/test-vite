<template>
  <div class="page page_live_doc">
    <div class="main_hd">
 
    </div>     
    <!-- 阿斯蒂芬-if="active === '0'"  -->
    <div class="main_bd markdown-section">
      <h1>是打发斯蒂芬</h1>
      <p>
        <strong>
          sdfasdf沙发斯蒂芬
          <a target="_black" href="">撒旦法</a>
        </strong>
      </p>
      <h2>功能介绍</h2>
      <p>撒旦法</p>
      <p>沙发斯蒂芬</p>
      <div class="services_info_card_preview">
        <div class="services_info_card">
          <p class="services_info_card_title simple_tips_item">撒旦法</p>
          <div class="services_info_card_image">
          </div>
        </div>
        <div class="services_info_card">
          <p class="services_info_card_title simple_tips_item">撒旦法</p>
          <div class="services_info_card_image">
          </div>
        </div>
      </div>
      <h2>萨法</h2>
      <h3>撒旦法</h3>
      <p>
        阿斯蒂芬>
      </p>
      <ol>
        <li>
          阿斯顿发斯蒂芬.阿斯顿发顺丰
        </li>
        <li>
          撒旦法
        
        </li>
      </ol>
     
    </div>
    <!-- 运营手册 -->
    <!-- <div v-else-if="active === '2'" class="main_bd markdown-section">运营手册</div> -->
  </div>
</template>

<script>
import { addToken } from "../../utils/string";
import { mapState, mapMutations } from "vuex";
import Vue from "vue";

export default Vue.extend({
  name: "homeDoc",
  created() {
    this.SET_PAGE_INFO({ simple: false });
 },
  watch: {
    active(v) {}
  },
  data() {
    return {
      pdf: 'import("./assets/help.pdf")',
      nav: `<navigator`,
      sub: `<subscribe`,
      achor: "",
      tabs: [
        {
          id: "manage",
          name: "啊啊",
          url: addToken("/sdf/sd/index")
        },
        {
          id: "store",
          name: "刚刚",
          url: addToken("/s/ds/d")
        },
        {
          id: "usermanage",
          name: "森岛帆高",
          url: addToken("/ss/sdf/sdf")
        },
        {
          id: "doc",
          name: "按时",
          url: addToken("/df/sf/doc")
        }
      ],
      active: "0",
      tabsSecond: [
       
      ]
    };
  },
  mounted() {
    // this.active = this.$route.query.type || "0";
    // console.log(this.$route.query)
    // setTimeout(() => {
    document.documentElement.scrollTop = Number(this.$route.query.st);
    document.body.scrollTop = Number(this.$route.query.st);
    // }, 0)
    // console.log(document.documentElement.scrollTop)
  },
  methods: {
    ...mapMutations(["SET_PAGE_INFO"]),
    changeTab(v) {
      let url = addToken(`/sdfs/sdf/doc?type=${v}`);
      // this.achor && (url += `&st=${this.achor}`)
      location.href = url;
    },
  
  },
  computed: {
    ...mapState(["userInfo"])
  },
});
</script>

<style lang="less">

.ulClass li {
  color: #d14;
}
</style>
