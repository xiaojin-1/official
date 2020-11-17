<template>
  <div class="home-page">
     <div class="banner" id="post">
      <div>
        <v-header></v-header>
      </div>
        
     </div>
     <div class="post-main">
         <div class="post">
              <p class="top-nav">
                  <span @click="joinus()">加入我们</span>>
                  <span @click="joinusto()">人才招聘</span>>
                  <span>岗位名称</span>
            </p>
              <p class="post-text">{{title}}</p>
              <p class="talent-money">{{money}}</p>
              <p class="talent-text"><span>{{province}}</span><span>{{education}}</span><span>{{workingYear}}</span></p>
              <a href="javascript:void(0)" @click="goAnchor('#anchor')">
                   <p class="but">投递简历</p>
              </a>
             
              <p class="post-xian"></p>
        <div class="post-desc">
             <p class="post-desc-text">岗位职责</p>
             <div class="post-requirements" v-html="represent"></div>
             <!-- <ul>
                 <li>1、这是职位描述这是职位描述这是职位描述这是职位描述这是职位描述</li>
                 <li>1、这是职位描述这是职位描述这是职位描述这是职位描述这是职位描述</li>
                 <li>1、这是职位描述这是职位描述这是职位描述这是职位描述这是职位描述</li>
             </ul> -->
         </div>
         <div class="post-desc">
             <p class="post-desc-text" >任职资格</p>
             <div class="post-requirements" v-html="requirements"></div>
              <!-- <ul>
                 <li>1、这是职位描述这是职位描述这是职位描述这是职位描述这是职位描述</li>
                 <li>1、这是职位描述这是职位描述这是职位描述这是职位描述这是职位描述</li>
                 <li>1、这是职位描述这是职位描述这是职位描述这是职位描述这是职位描述</li>
             </ul> -->
         </div>
          <div class="post-desc">
             <p class="post-desc-text">公司地址</p>
              <ul>
                 <li>浙江省宁波市海曙区</li>
             </ul>
         </div>
         <div class="post-bottom" id="anchor">
             <img class="post-bottom-left" src="../assets/icon_join_mail.png" alt="">
             <div class="post-bottom-right">
                 <p class="post-bottom-dz">请发送简历至：<span id="inviteCode">dudignuw@am.cg</span><span class="copy" @click="CopyUrl()">点击复制</span></p>
                 <p class="post-bottom-yq">邮件标题格式为：你的姓名 + 应聘职位 + 来自创学官网</p>
             </div>
         </div>

         </div>
         
     </div>
    
     
     <div class="foot">
         <v-foot></v-foot>
     </div>




  </div>
</template>

<script>
import { Swiper, swiperSlide } from 'vue-awesome-swiper'
import header from '@/components/header';
import foot from '@/components/foot';
import '../styles/index.css';
export default {
  name: 'index',
   components: {
   'v-header':header,
   'v-foot':foot,
  },
  data () {
    return {
      swiperList: [],
      mouseactive:'',
      title:'',
      money:'',
      province:'',
      education:'',
      workingYear:'',
      represent:'',
      requirements:'',
      text:'宁波 ｜ 大专 ｜ 1-3年',
      cur:'-1',
      act:'-1',
      id:'',
     talent:[
          {name:'岗位名称',money:'5K-10K',text:'宁波 ｜ 大专 ｜ 1-3年'},
          {name:'岗位名称',money:'5K-10K',text:'宁波 ｜ 大专 ｜ 1-3年'},
          {name:'岗位名称',money:'5K-10K',text:'宁波 ｜ 大专 ｜ 1-3年'},
          {name:'岗位名称',money:'5K-10K',text:'宁波 ｜ 大专 ｜ 1-3年'},
          {name:'岗位名称',money:'5K-10K',text:'宁波 ｜ 大专 ｜ 1-3年'},
      ]
    }
  },
   created () {
    this.id = this.$route.query.category
     this.nav = this.$route.query.nav
  },
  mounted () {
     this.getData();
  //      if (window.history && window.history.pushState) {
  //   // 往历史记录里面添加一条新的当前页面的url
  //   history.pushState(null, null, document.URL);
  //   // 给 popstate 绑定一个方法 监听页面刷新
  //   window.addEventListener('popstate', this.backChange, false);//false阻止默认事件
  // }
       if (this.nav != null && this.nav!=''){
           this.$nextTick(() => {
             document.getElementById(this.nav).scrollIntoView({
             behavior: "smooth"
         })
       })

     }
 
 },
  methods: {
    goAnchor(selector) {
        var anchor = this.$el.querySelector(selector) // 参数为要跳转到的元素id
        document.body.scrollTop = anchor.offsetTop; // chrome
        document.documentElement.scrollTop = anchor.offsetTop; // firefox
    },

//         backChange() {
//        let that = this;
//      // alert("监听到了");
//      // history.pushState(null, null, document.URL);
//     this.$router.push({path:'/joinus',query: {id:'4',nav:'joinus3'}})
//      //  this.$router.go(0);

//     //  console.log(this.timerNum)
       

// },
     closeclick:function(){
        this.$emit('child-grab', false);
     },
     mouseOver:function(index){
         this.cur = index
       //  console.log(this.cur)
         this.mouseactive = 'display:block'
     },
     mouseLeave:function(index){
         this.cur = '-1'
         this.mouseactive = 'display:none'
     },
      mouseOver1:function(index){
         this.act = index
       //  console.log(this.cur)
       //  this.mouseactive = 'display:block'
     },
     mouseLeave1:function(index){
         this.act = '-1'
        // this.mouseactive = 'display:none'
     },
     joinus:function(){
           
          this.$router.push({path:'/joinus',query: {id:'4'}})

     },
     joinusto:function(){
         
         //this.pageactive = 'display:block'
          //this.$emit("GetKey",false)
          this.$router.push({path:'/joinus',query: {id:'4',nav:'joinus3'}})
     },
     getData() {
       
       this.$axios.get("/consumer/recruit/getAllRecruit",{
     })
    .then(res=>{
        console.log(res)
        let talent = res.data.data[this.id]
        this.title = talent.title
        this.money = talent.salary
        this.province = talent.province
        this.education =talent.education
        this.workingYear =talent.workingYear
        this.requirements = talent.requirements
        this.represent = talent.represent
        //this.id = this.active[0].id
      //  this.slide = res.data.data
    //  console.log(res.data.data,8888)
      
    })
    },
    CopyUrl(data){
        var Url2 = document.getElementById("inviteCode").innerText;
        var oInput = document.createElement("input");
        oInput.value = Url2;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = "oInput";
        oInput.style.display = "none";
        this.$message({
          message:"复制成功!",
          type:'success'
        })
    },

 },

  
  watch: {
    
 },
    computed: {
        swiper() {
   return this.$refs.mySwiper.swiper
  }
    },
    beforeCreate () {
    let that = this
  //  window.addEventListener('popstate', this.backChange)
  },
//        destroyed(){
//   window.removeEventListener('popstate', this.backChange, false);//false阻止默认事件
// },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.copy{
    display: inline-block;
    width: 72px;
height: 24px;
background: #E9F4FF;
border-radius: 4px;
border: 1px solid #2494FF;
font-size: 12px !important;
text-align: center;
margin-left: 10px;
}
.banner{
    background: #1677FF;
    width: 100%;
    height: 640px;
    overflow: hidden;
    position: relative;
}
.banner-main{
    width: 1140px;
    height: 640px;
    margin: 0 auto;
    position: relative;
}
.post-main{
    position: relative;
    height: 629px;
    background: #fff;
}
.but{
    position: absolute;
    right: 50px;
    top: 100px;
    width: 120px;
height: 40px;
line-height: 40px;
text-align: center;
background: #2494FF;
font-size: 16px;
color: #fff;
border: 1px solid #2494FF;
}
.post{
    width: 1140px;
    min-height: 877px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: -520px;
    margin-left: -570px;
    padding-bottom: 50px;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
}
.top-nav{
    
height: 20px;
font-size: 14px;
font-family: AlibabaPuHuiTiR;
color: #CCCCCC;
line-height: 20px;
margin: 20px 0 0 30px;
}
.post-text{
    
height: 55px;
font-size: 40px;
font-family: AlibabaPuHuiTiM;
color: #333333;
line-height: 55px;
margin: 20px 0 0 30px;
}
.talent-money{
    float: left;
height: 33px;
font-size: 24px;
font-family: AlibabaPuHuiTiM;
color: #2494FF;
line-height: 33px;
margin: 20px 0 0 30px;
}
.talent-text{
    float: left;
height: 27px;
font-size: 20px;
font-family: AlibabaPuHuiTiR;
color: #999999;
line-height: 27px;
margin: 20px 0 0 30px;
}
.post-xian{
 clear: both;
    width: 1100px;
height: 1px;
background: #F0F0F0;
margin-top: 37px;
}
.post-desc-text{
    
height: 33px;
font-size: 24px;
font-family: AlibabaPuHuiTiM;
color: #333333;
line-height: 33px;
margin: 30px 0 20px 60px;

}
.post-desc ul li{
    
height: 33px;
font-size: 24px;
font-family: AlibabaPuHuiTiM;
color: #333333;
line-height: 33px;
margin: 30px 0 20px 60px;

}
.post-requirements{
font-size: 18px;
font-family: AlibabaPuHuiTiR;
color: #333333;
line-height: 25px;
margin-left: 60px;
margin-bottom: 10px;
}
.post-bottom{
    margin-top: 70px;
}
.post-bottom-left{
    width: 60px;
    height: 60px;
    float: left;
    margin-left: 90px;
}
.post-bottom-right{
    float: left;
   
}
.post-bottom-dz{
    
height: 25px;
font-size: 18px;
font-family: AlibabaPuHuiTiR;
color: #333333;
line-height: 25px;
margin: 5px 0 0 10px;
}
.post-bottom-dz span{

height: 25px;
font-size: 18px;
font-family: AlibabaPuHuiTiR;
color: #2494FF;
line-height: 25px;
}
.post-bottom-yq{
    
height: 20px;
font-size: 14px;
font-family: AlibabaPuHuiTiR;
color: #999999;
line-height: 20px;
margin: 5px 0 0 10px;
}
</style>
