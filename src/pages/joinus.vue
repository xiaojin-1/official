<template>
<div>
  <div class="home-page" :style="pageactive">
     <div class="banner" id="joinus">
      <div>
        <v-header></v-header>
      </div>
         <div class="banner-main" id="tab" name="tab" ref="tab">
             <p class="banner-text">寻找一起探索教育事业的小伙伴</p>
             <p class="banner-title">
                 和创学一起做有价值的事
             </p>
             <p class="banner-button">合作了解</p>
           
         </div>
         
       
     </div>
     <div class="plan">
         <div class="plan-img">
             <div class="plan-main">
                  <div class="Characteristic-title">
                    <img src="../assets/title_left@2x.png" class="title_left" alt="">
                    <p class="title">合作模式</p>
                    <img src="../assets/title_right@2x.png" class="title_right" alt="">
                  </div>
                  <p class="Characteristic-en">Cooperation mode</p>
                  <p class="plan-text">
                      <span>作家中心：S2B2C模式，入驻即开通分成。</span>
                      
                       <span >培训机构：提供教育培训相关的价值输出，共享平台品牌、流量资源。</span>
                   <span >商家：提供合法合规的商品，平台为其引流，共享经济收益。</span>
                   </p>
                  
             </div>
         </div>
     </div>
     <div class="advantage" id="joinus1">
         <div class="advantage-left">
             <div class="advantage-left-main">
                 <p class="advantage-left-text">Advantages</p>
                 <p class="advantage-left-title">Introduct</p>
                 <p class="advantage-left-xian"></p>
                 <p class="advantage-left-text">优势介绍</p>
                 <p class="advantage-left-desc">合法合规贡献有价值内容<br>
享受知识变现带来的乐趣<br>
用知识创造额外收入<br>
入驻即开通分成，告别新手期<br>
知识变现，开启自由工作之路</p>
             </div>
         </div>
         <div class="advantage-right">
             <ul>
                 <li v-for="(item,index) in tab" 
                  @mouseover="mouseOver(index)"
                  @mouseleave="mouseLeave(index)" 
                 :key="index">
                   <img  class="list-icon" :src="item.icon" alt="">
                    <!-- <p class="list-icon">{{item.icon}}</p> -->
                     <p class="list-text" v-html="item.text"></p>
                     <div class="item" v-if="cur == index" :style="mouseactive" >
                         
                         <p class="item-text">{{item.text}}</p>
                         <p class="item-title">{{item.title}}</p>
                     </div>
                 </li>
             </ul>
         </div>
     </div>
     <div class="Introduction con" id="joinus2">
         
          <div class="Characteristic-title">
             <img src="../assets/title_left@2x.png" class="title_left" alt="">
             <p class="title">招募条件</p>
             <img src="../assets/title_right@2x.png" class="title_right" alt="">
         </div>
         <p class="Characteristic-en">Recruitment conditio</p>
         <div class="conditio">
             <ul>
                 <li v-for="(item,index) in list" :key="index">
                    <p class="conditio-text">{{item.text}}</p>
                    <p class="conditio-xian"></p>
                    <p class="conditio-title">{{item.title}}</p>
                 </li>
             </ul>
         </div>
       
     </div>
       <div class="Talent con" >
          <div class="Characteristic-title">
             <img src="../assets/title_left@2x.png" class="title_left" alt="">
             <p class="title" id="joinus3">人才招聘</p>
             <img src="../assets/title_right@2x.png" class="title_right" alt="">
         </div>
         <p class="Characteristic-en">Talent recruitment</p>
         <div class="recruitment">
              <ul>
                  <li v-for="(item,index) in talent" :key="index">
                      <div class="recruitment-left">
                          <p class="talent-name">{{item.title}}</p>
                          <p class="talent-money">{{item.salary}}</p>
                          <p class="talent-text"><span>{{item.province}}</span>｜<span>{{item.education}}</span>｜<span>{{item.workingYear}}</span></p>
                      </div>
                      <!-- <router-link to="/joinus/post"> -->
                       <div class="recruitment-right" 
                       @mouseover="mouseOver1(index)"
                       @mouseleave="mouseLeave1(index)" 
                       :class="{active:act == index}"
                       @click="lookpost(index)"
                       >
                          查看该职位
                      </div>
                      <!-- </router-link> -->
                     
                  </li>
              </ul>
         </div>  
       
     </div>
     <div class="foot">
         <v-foot></v-foot>
     </div>
     

                       

     
  </div>
   <!-- <transition >
          <router-view></router-view>
	  </transition> -->
   </div>
</template>

<script>
import { Swiper, swiperSlide } from 'vue-awesome-swiper'
import header from '@/components/header';
import foot from '@/components/foot';
import post from '@/pages/post';
import '../styles/index.css';

import free from '../assets/icon_advantage_free.png';
import cause from '../assets/icon_advantage_personnel.png';
import major from '../assets/icon_advantage_mechanism.png';
import overall from '../assets/icon_advantage_shop.png';
import brand from '../assets/icon_advantage_brand.png';
import data from '../assets/icon_advantage_data.png';
export default {
  name: 'index',
   components: {
   'v-header':header,
   'v-foot':foot,
   'v-post':post,
  },
  data () {
    return {
      swiperList: [],
      pageactive:'display:block',
      cur:'-1',
      act:'-1',
      id:'',
      list:[
          {num:'01',text:'营业执照',title:'需具备营业执照，“个体执照”或“有限公司执照”等。'},
          {num:'02',text:'合法合规',title:'拥有合法合规的商品。'},
          {num:'03',text:'第三方认证',title:'配合第三方认证。'},
          {num:'04',text:'原创',title:'发布自己的原创作品、长短视频、图文、音频等，申请通过即可拥有作家身份。'},
          {num:'05',text:'创学学员',title:'凡是创学学员均可自行向平台申请作家。'},
      ],
     talent:[
          {name:'岗位名称',money:'5K-10K',text:'宁波 ｜ 大专 ｜ 1-3年'},
          {name:'岗位名称',money:'5K-10K',text:'宁波 ｜ 大专 ｜ 1-3年'},
          {name:'岗位名称',money:'5K-10K',text:'宁波 ｜ 大专 ｜ 1-3年'},
          {name:'岗位名称',money:'5K-10K',text:'宁波 ｜ 大专 ｜ 1-3年'},
          {name:'岗位名称',money:'5K-10K',text:'宁波 ｜ 大专 ｜ 1-3年'},
      ],
      tab:[
          {icon:free,text:'免费',title:'目前免费入驻，汇聚各行业精英、大V、媒体、企业等，人人都可成为创业者与创作者\n免费学习，免费参与线下大咖交流，做好各行领航'},
          {icon:cause,text:'人才培养与输送',title:'平台以大数据为依托，与精英行业合作，大力扶持优秀人才，共同探索人才输送新模式，为数字经济培养和输送高质量应用型及复合型人才'},
          {icon:major,text:'机构云集',title:'全国性学习平台，提升知名度\n快速搭建机构网校\n助力机构轻松转型在线服务\n互动直播课堂，互动零距离\n打造专属创学机构平台'},
          {icon:overall,text:'商家汇聚',title:'汇聚各行业精英商家，打通线上线下购物，带动实体引流消费\n店铺展示，不间断互动，高转化\n平台活动，大力引流宣传，为各商家吸粉'},
          {icon:brand,text:'品牌引流',title:'树立品牌形象\n空间、时间等快速提升竞争力\n获得私域流量，增加影响力\n共享百万流量，增大曝光量'},
          {icon:data,text:'资源整合',title:'精英荟萃，提升竞争力与影响力\n商家入驻，形成吃喝住行生态圈\n顺应社会发展\n带来流量入口，紧随时代脚步'},
    
      ]
    }
  },
   created () {
       this.nav = this.$route.query.nav
       
       //console.log(this.nav)
     if (this.$route.path == '/joinus/post') {
      this.pageactive = 'display:none'
     }
  
  },
  mounted () {
     this.getData();
    //  
     
      if (this.nav != null && this.nav!=''){
           this.$nextTick(() => {
               //console.log(123)
               
             document.getElementById(this.nav).scrollIntoView({
             behavior: "smooth"
         })
       })

     }
 },
  methods: {
     
      GetCon:function(){
          console.log(1111)
          this.pageactive = 'display:block'
      },
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
     lookpost:function(index){
         this.id = index
         this.$router.push({path:'/post',query: {id:'4',category:this.id,nav:'post'}})
       //  this.pageactive = 'display:none'
     },
     getData() {
       this.$axios.get("/consumer/recruit/getAllRecruit",{
     })
    .then(res=>{
        this.talent = res.data.data
        //this.id = this.active[0].id
      //  this.slide = res.data.data
        //console.log(res.data.data,8888)
      
    })
    }

 },

  
  watch: {
    '$route' (to, from) {
        this.getData(this.$route.query.nav)
    }
 },
    computed: {
        swiper() {
   return this.$refs.mySwiper.swiper
  }
    },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
.banner-text{
height: 55px;
font-size: 40px;
font-family: AlibabaPuHuiTiM;
color: #FFFFFF;
line-height: 55px;
    margin-top: 152px;
    font-weight: bold;
    text-align: center;
}
.active{
    
background: #2494FF;
color: #fff;
}
.banner-title{  
    width: 650px;
    font-size: 18px;
    font-family: AlibabaPuHuiTiR;
    color: #FFFFFF;
    line-height: 25px;
    margin-top: 20px;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
}
.banner-button{
    width: 120px;
    height: 40px;
    border: 1px solid #fff;
    text-align: center;
    line-height: 40px;
    margin: 0 auto;
    margin-top: 40px;
    color: #fff;
    font-size: 16px;
}
.banner-en{
    width: 461px;
    height: 40px;
    font-size: 14px;
    font-family: AlibabaPuHuiTiR;
    color: #FFFFFF;
    line-height: 20px;
    margin-top: 10px;
}
.banner-btn{
    width: 160px;
    height: 52px;
    background: #FFFFFF;
    border-radius: 6px;   
    height: 52px;
    font-size: 20px;
    font-family: AlibabaPuHuiTiR;
    color: #1677FF;
    line-height: 52px;
    text-align: center;
    margin-top: 40px;
    float: left;
    margin-right: 20px;
}
.banner-btn p{
    float: left;
    margin-left: 27px;
}
.banner-btn img{
    float: left;
    width: 22px;
    height: 22px;
    margin-top: 15px;
    margin-left: 8px;
}
.operate{
font-size: 16px;
font-family: AlibabaPuHuiTiR;
color: #999999;
line-height: 22px;
}
.operate-text{
    margin-top: 40px;
}
.operate-title{
    margin-top: 10px;
}
.operate-img{
    width: 1140px;
    height: 200px;
    margin-top: 40px;
}
.team-left{
    float: left;
    margin-top: 40px;
}
.team-right{
    float: left;
    width: 800px;
    margin-top: 40px;
}
.team-right-about{
    
font-size: 22px;
font-family: AlibabaPuHuiTiM;
color: #333333;
line-height: 30px;
margin-top: 10px;
margin-left: 20px;
}
.team-right-text{

font-size: 14px;
font-family: AlibabaPuHuiTiR;
color: #666666;
line-height: 20px;
margin-top: 10px;
margin-left: 20px;
}
.team{
    height: 380px;
}
.plan{
    height: 320px;
    width: 1140px;
    margin: 0 auto;
    position: relative;
    background: #fff;
}
.plan-img{
    width: 1140px;
    height: 320px;
    position: absolute;
    left: 0;
    top: -108px;
    background: #fff;
    
box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
}
.plan-main{
    margin-top: 40px;
}
.plan-text{
    width: 1060px;
height: 229px;
font-size: 18px;
font-family: AlibabaPuHuiTiR;
color: #666666;
line-height: 25px;
margin: 0 auto;
margin-top: 20px;
}
.plan-text span{
   display: block;
}
.advantage-right{
    float: left;
    width: 870px;
    margin-bottom: 80px;
}
.advantage-right ul li{
    width: 288px;
    height: 178px;
    border: 1px solid #f0f0f0;
    float: left;
    position: relative;
}
.list-icon{
    display: block;
    width: 64px;
    height: 64px;
    background: #2494FF;
    line-height: 64px;
    font-size: 16px;
    font-family: AlibabaPuHuiTiR;
    color: #FFFFFF;
    text-align: center;
    border-radius: 64px;
    margin: 0 auto;
    margin-top: 28px;
}
.item{
  
    width: 290px;
    height: 180px;
    position: absolute;
    top: 0;
    left: 0;
    background: #2494FF;
   
    
  white-space: pre-wrap;
}
.item-text{
    
height: 30px;
font-size: 22px;
font-family: AlibabaPuHuiTiM;
color: #FFFFFF;
line-height: 30px;
margin-top: 20px;
margin-left: 20px;
}
.item-title{
    width: 230px;
font-size: 16px;
font-family: AlibabaPuHuiTiR;
color: #FFFFFF;
line-height: 22px;

margin-left: 20px;

}

.conditio{
   width: 1160px;
   margin-top: 40px;
   
}
.Talent{
    min-height: 500px;
}
.conditio ul li{
  width: 210px;
  height: 318px;
  border: 1px solid #f0f0f0;
  float: left;
  margin-right: 20px;
  margin-bottom: 80px;
}
.conditio-text{
    
height: 30px;
font-size: 22px;
font-family: AlibabaPuHuiTiM;
color: #333333;
line-height: 30px;
text-align: center;
margin-top: 40px;
}
.conditio-xian{
 width: 40px;
height: 2px;
background: #2494FF;
margin: 0 auto;
margin-top: 5px;
}
.conditio-title{
width: 172px;

font-size: 14px;
font-family: AlibabaPuHuiTiR;
color: #666666;
line-height: 20px;
margin: 0 auto;
margin-top: 20px;
}
.recruitment{
    width: 1160px;
    min-height: 146px;
    margin-top: 40px;
    padding-bottom: 60px;
}
.recruitment ul li{
    width: 558px;
    height: 146px;
    border: 1px solid #f0f0f0;
    float: left;
    margin-bottom: 20px;
    margin-right: 20px;
}
.recruitment-left{
    float: left;
}
.recruitment-right{
    float: right;
    width: 120px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #2494FF;
    color: #2494FF;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    margin-top: 54px;
    margin-right: 40px;
    cursor: pointer;
}
.talent-name{
    
font-size: 20px;
font-family: AlibabaPuHuiTiM;
color: #333333;
line-height: 27px;
margin: 45px 0 0 40px;
}
.talent-money{
height: 22px;
font-size: 16px;
font-family: AlibabaPuHuiTiM;
color: #2494FF;
line-height: 22px;
float: left;
margin-top: 10px;
margin-left: 40px;
}
.talent-text{

height: 20px;
font-size: 14px;
font-family: AlibabaPuHuiTiR;
color: #999999;
line-height: 20px;
float: left;
margin-top: 10px;
margin-left: 20px;
}
















.advantage{
    width: 1140px;
    height: 360px;
    margin: 0 auto;
}
.advantage-left{
    width: 270px;
    height: 360px;
    background: #F5F6F7;
    float: left;
    margin-bottom: 80px;
}
.advantage-left-main{
    width: 210px;
    margin: 0 auto;
    padding-top: 40px;
}
.advantage-left-text{
    
font-size: 22px;
font-family: AlibabaPuHuiTiM;
color: #333333;
line-height: 30px;

}
.advantage-left-title{
    
font-size: 32px;
font-family: AlibabaPuHuiTiM;
color: #333333;
line-height: 30px;
margin-top: 10px;
margin-bottom: 10px;
}
.advantage-left-desc{
 white-space: pre-wrap;
font-size: 14px;
font-family: AlibabaPuHuiTiM;
color: #999999;
line-height: 20px;
margin-top: 20px;
}
.advantage-left-xian{
width: 2px;
height: 32px;
background: #333333;
}




.mobilelog{
    width: 400px;
    height: 300px;
    position: absolute;
    right: 0;
    top: 20px;
}
.con{
    width: 1140px;
    margin: 0 auto;
}
.Introduction{
    width: 1140px;
    position: relative;
    margin-bottom: 80px;
}
.Introduction-img{
    width: 640px;
    height: 640px;
    position: absolute;
    top: 60px;
    left: 250px;
}
.left-Introduction{
    width: 200px;
    height: 640px;
    position: absolute;
    left: 140px;
    top: 60px;
}
.right-Introduction{
    width: 200px;
    height: 640px;
    position: absolute;
    right: 40px;
    top: 60px;
}
.left-Introduction-icon{
    float: right;
    margin-top: 110px;
    text-align: center;
    line-height: 40px;
    width: 40px;
height: 40px;
background: #FFFFFF;
border-radius: 8px;
border: 2px solid #1677FF;
margin-bottom: 20px;
}
.right-Introduction-icon{
    margin-top: 110px;
    line-height: 40px;
    width: 40px;
    text-align: center;
height: 40px;
background: #FFFFFF;
border-radius: 8px;
border: 2px solid #1677FF;
margin-bottom: 20px;
}
.left-Introduction-text{
    clear: both;
    text-align: right;
    
height: 30px;
font-size: 22px;
font-family: AlibabaPuHuiTiM;
color: #333333;
line-height: 30px;
margin-bottom: 10px;
}
.right-Introduction-text{

height: 30px;
font-size: 22px;
font-family: AlibabaPuHuiTiM;
color: #333333;
line-height: 30px;
margin-bottom: 10px;
}
.left-Introduction-title{

font-size: 14px;
font-family: AlibabaPuHuiTiR;
color: #999999;
line-height: 20px;
}
.right-Introduction-title{

font-size: 14px;
font-family: AlibabaPuHuiTiR;
color: #999999;
line-height: 20px;
}
.Information{
    position: relative;
    height: 660px;
}
.Information-main{
    width: 1140px;
    margin: 0 auto;
    text-align: center;
}
.Information-main img{
    width: 800px;
    height: 660px;
    position: absolute;
    bottom: -166px;
    left: 170px;
}
.Information-main-list{
    
}
.Information-left-icon{
    width: 52px;
    height: 52px;
    background: #fff;
    border-radius: 52px;
    text-align: center;
    line-height: 52px;
    float: left;
}
.Information-right-text{
    float: left;
    width: 200px;
    text-align: left;
    margin-left: 10px;
}
.Information-right-desc{

height: 34px;
font-size: 12px;
font-family: AlibabaPuHuiTiR;
color: #AFD8FF;
line-height: 17px;
}
.Information-right-title{
    
height: 30px;
font-size: 22px;
font-family: AlibabaPuHuiTiM;
color: #FFFFFF;
line-height: 30px;
}
.Information-main-list-right{
     position: absolute;
    right: 80px;
    bottom: 0px;
}
.Information-main-list-right li{
   clear: both;
  height: 70px;
  margin-bottom: 60px;
}
.Information-main-list-left{
    position: absolute;
    left: 80px;
    bottom: 0px;
}
.Information-main-list-left li{
  clear: both;
  height: 70px;
  margin-bottom: 60px;
}


.title_left{
    float: left;
    margin-left: 327px;
    margin-top: 20px;
    width: 160px;
    height: 6px;
}
.title{
    float: left;
    
height: 44px;
font-size: 32px;
font-family: AlibabaPuHuiTiM;
color: #333333;
line-height: 44px;
margin: 0 20px 0 20px;
}
.title_right{
    float: left;
    margin-top: 20px;
    width: 160px;
    height: 6px;
}
.Characteristic-en{
    clear: both;
height: 22px;
font-size: 16px;
font-family: AlibabaPuHuiTiM;
color: #CCCCCC;
line-height: 22px;
text-align: center;
}
.Characteristic-list{
    width: 1140px;
    overflow: hidden;
    margin-top: 40px;
    margin-bottom: 80px;
}
.Characteristic-list ul{
    width: 1160px;
}
.Characteristic-list ul li{
    width: 360px;
    height: 220px;
    float: left;
    margin-right: 20px;
    margin-top: 20px;
    border: 1px solid #f0f0f0;
    position: relative;
    color: #2494FF;
}
.active{
    background: #2494FF;
    color: #fff;
}
.active p{

    color: #fff;
}

.list-text{

font-size: 22px;
font-family: AlibabaPuHuiTiM;
color: #2494FF;
line-height: 30px;
margin-top: 30px;
text-align: center;

}


.Informa{
    width: 100%;
    height: 660px ;
    background: #2494FF;
}
.Informatitle{
    color: #fff;

}
.Informa-en{
    color: #AFD8FF;
}
.Characteristic-active{
    width: 1140px;
    height: 570px;
}
.Characteristic-active ul li {
    width: 285px;
    height: 570px;
    float: left;
}

.active-text{
height: 27px;
font-size: 20px;
font-family: AlibabaPuHuiTiM;
color: #333333;
line-height: 27px;
margin-left: 20px;
margin-top: 40px;
margin-bottom: 10px;
}
.active-title{
    margin: 0 auto;
    width: 245px;
font-size: 14px;
font-family: AlibabaPuHuiTiR;
color: #333333;
line-height: 20px;
}
.white{
    width: 100%;
    height: 206px;
}
</style>
