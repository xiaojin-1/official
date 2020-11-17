<template>
  <div class="home-page">
     <div class="banner" id="banner">
      <div>
        <v-header></v-header>
      </div>
         <div class="banner-main" id="tab" name="tab" ref="tab">
             <p class="banner-text">创学APP</p>
             <p class="banner-title">
                 创学是一款提供在线学习型APP ，本着“学习改变命运，知识创造财富”的愿景，通过课外辅导，创业培训，兴趣学习，技能提升等多个频道提供学习，让更多的人爱上学习。让学习变成一种习惯，也让学习变得更有价值，更有意义。
      同时通过平台建立线上学习社群，组织各种线下的相关的活动，丰富学习内容。继而平台推出线上的知识竞答，读书竞赛等丰富多彩的活动，增强用户对学习的乐趣。
      </p>
             <!-- <p class="banner-en">Creative learning makes learning more valuable. Online learning education app.</p> -->
            <!-- <a href="https://sj.qq.com/myapp/detail.htm?apkName=com.nb.cx" target="_blank">
             <div class="banner-btn">
                 <p>安卓下载</p> 
                 <img src="../assets/icon_download_android@2x.png" alt="">
             </div>

            </a>
           
            <a href="https://apps.apple.com/cn/app/%E5%88%9B%E5%AD%A6/id1474772079" target="_blank"></a>
             <div class="banner-btn">
                 <p>苹果下载</p>  
                 <img src="../assets/icon_download_ios@2x.png" alt="">
             </div> -->
             <img src="../assets/home_banner_phone@2x.png" alt="" class="mobilelog">
         </div>
         
     </div>
     <div class="Introduction con" id="banner1">
         <img src="../assets/phone_download_function@2x.png" alt=""  class="Introduction-img">
         <div class="left-Introduction">
             <div class="left-Introduction-list">
                 <img class="left-Introduction-icon" src="../assets/icon_function_shop.png" alt="">
                
                 <p class="left-Introduction-text">联盟商圈</p>
                 <p class="left-Introduction-title">所有商家可以来入驻创学，可以设置佣金，用户可以通过分享赚取佣金。</p>
             </div>
             <div class="left-Introduction-list">
                  <img class="left-Introduction-icon" src="../assets/icon_function_writer.png" alt="">
                
                 <p class="left-Introduction-text">作家中心</p>
                 <p class="left-Introduction-title">个人或机构入驻作家中心，上传自己的作品，给作品点赞用户和作者均可获得阅读值，实现赚钱学习。</p>
             </div>
         </div>
         <div class="right-Introduction" id="banner2">
             <div class="right-Introduction-list">
                  <img class="right-Introduction-icon" src="../assets/icon_function_live.png" alt="">
                 <p class="right-Introduction-text">直播</p>
                 <p class="right-Introduction-title">在线学习，实现不出户就可以在家学习，关注老师也可以实现一对一学习。</p>
             </div>
             <div class="right-Introduction-list">
                  <img class="right-Introduction-icon" src="../assets/icon_function_answer.png" alt="">
                 <p class="right-Introduction-text">答题</p>
                 <p class="right-Introduction-title">参与智力答题，打卡学习，答题竞赛等，免费学习的同时，增加学习的趣味性。</p>
             </div>
         </div>
     </div>
     <div class="Characteristic con" id="banner3">
         <div class="Characteristic-list">
             <ul>
                 <li v-for="(item,index) in list"
                  @mouseover="mouseOver(index)"
                  @mouseleave="mouseLeave(index)" 
                  
                  :key="index"
                  :class="{active: cur==index}" 
                  >
                     <p class="list-icon">{{item.num}}</p>
                     <p class="list-text">{{item.title}}</p>
                    
                 </li>
             </ul>
         </div>
     </div>
     <div class="Informa">
         <div class="Information con">
             <div class="Characteristic-title" style="padding-top: 40px;">
                <img src="../assets/title_left_white@2x.png" class="title_left" alt="">
                <p class="title Informatitle">核心技术</p>
                <img src="../assets/title_right_white@2x.png" class="title_right" alt="">
             </div>
             <p class="Characteristic-en Informa-en">Core technology</p>
             <div class="Information-main">
                 <div class="Information-main-list">
                     <ul class="Information-main-list-left">
                         <li>
                              <img class="Information-left-icon" src="../assets/icon_core_micro.png" alt="">
                             <div class="Information-right-text">
                                 <p class="Information-right-title">微服务</p>
                                 <p class="Information-right-desc">采用springboot技术，功能更新更便捷，维护性更好，降低了开发难度</p>
                             </div>
                         </li>
                         <li>
                            <img class="Information-left-icon" src="../assets/icon_core_dcs.png" alt="">
                             <div class="Information-right-text">
                                 <p class="Information-right-title">分布式架构</p>
                                 <p class="Information-right-desc">使用zookeeper注册中心dubbo协议，针对不同服务分配资源，有效提高资源利用率并且随时可以根据用户量级进行升级</p>
                             </div>
                         </li>
                         <li>
                              <img  class="Information-left-icon" src="../assets/icon_core_separate.png" alt="">
                           
                            <div class="Information-right-text">
                                 <p class="Information-right-title">前后端分离</p>
                                 <p class="Information-right-desc">技术分工更明确，提高用户体验和研发效率</p>
                             </div>
                         </li>
                     </ul>
                     <ul class="Information-main-list-right">
                         <li>
                            
                             <img class="Information-left-icon" src="../assets/icon_core_redis.png" alt="">
                             <div class="Information-right-text">
                                 <p class="Information-right-title">redis</p>
                                 <p class="Information-right-desc">高吞吐量数据采用缓存技术，提高了数据读写效率，使得性能更快捷</p>
                             </div>
                         </li>
                         <li>
                             
                             <img class="Information-left-icon" src="../assets/icon_core_ibatis.png" alt="">
                             <div class="Information-right-text">
                                 <p class="Information-right-title">ibatis</p>
                                 <p class="Information-right-desc">便捷的数据层，并对事物进行统一管理，提高了数据的安全性和一致性，通过事物注解对数据的容灾容错进行更细致的处理</p>
                             </div>
                         </li>
                         <li>
                             
                             <img class="Information-left-icon" src="../assets/icon_core_nginx.png" alt="">
                            <div class="Information-right-text">
                                 <p class="Information-right-title">Nginx</p>
                                 <p class="Information-right-desc">使用Nginx技术做负载均衡，提高服务的吞吐量，是的相应效率更高更顺畅</p>
                             </div>
                         </li>
                     </ul>
                 </div>
                 <img class="Information-main-img" src="../assets/img_download_technology.png" alt="">
                
             </div>
        </div>
     </div>
     <div class="white"></div>
     
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
      cur:'-1',
      nav:'',
      list:[
          {num:'01',text:'学圈',title:'组建学圈，不仅可以相互学习，互相交流，也能进行带货，增加销售渠道，更能建立私域流量，展现个人魅力。'},
          {num:'02',text:'分红权',title:'持有分红权，每天享受平台分红。'},
          {num:'03',text:'任务',title:'每天除完成基础任务得到相应奖励外，更有幸运大转盘、红包大战等各类任务相助，瓜分现金拿大奖。'},
          {num:'04',text:'福利',title:'为学员提供各类免费服务，除免费网络资源、优质学习资料、衣食住行各方面优惠福利外，更可在平台领任务得现金奖励等。'},
          {num:'05',text:'现下机构',title:'对接线下机构，实现线上线下引流，实现机构平台用户资源整合。'},
          {num:'06',text:'线下沙龙',title:'建立线下学习沙龙，方便学员相互交流，带动创学城市代理盈利增长。'},
      
      ],
     active:[
          {pic:'icon',text:'这是公益标题',title:'这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容'},
          {pic:'icon',text:'这是公益标题',title:'这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容'},
          {pic:'icon',text:'这是公益标题',title:'这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容'},
          {pic:'icon',text:'这是公益标题',title:'这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容这是公益内容'},
      ],
    }
  },
   created () {
      this.nav = this.$route.query.nav
  ///   console.log(this.nav)
  
  },
  mounted () {
     this.getData();
     if (this.nav != null && this.nav!=''){
           this.$nextTick(() => {
             document.getElementById(this.nav).scrollIntoView({
             behavior: "smooth"
         })
       })

     }
 
    
 },
  methods: {
     closeclick:function(){
        this.$emit('child-grab', false);
     },
     mouseOver:function(index){
         this.cur = index
       //  console.log(this.cur)
         //this.mouseactive = 'display:block'
     },
     mouseLeave:function(index){
         this.cur = '-1'
       //  this.mouseactive = 'display:none'
     },
     getData() {
      this.swiperList = [5, 6, 7, 8];
      setTimeout(function() {
        var mySwiper = new Swiper(".swiper-container", {
           
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 30,
            freeMode: true
        });
      }, 100);
    }

 },

  
  watch: {
    '$route':((to, from)=> {
        console.log(123456)
       // this.getData(this.$route.query.nav)
    })

 },
    computed: {
        swiper() {
   return this.$refs.mySwiper.swiper
  }
    }
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
    font-family: AlibabaPuHuiTiB;
    color: #FFFFFF;
    line-height: 55px;
    margin-top: 215px;
    font-weight: bold;
}
.banner-title{  
    width: 650px;
    font-size: 18px;
    font-family: AlibabaPuHuiTiR;
    color: #FFFFFF;
    line-height: 25px;
    margin-top: 10px;
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
.mobilelog{
    width: 310px;
    height: 500px;
    position: absolute;
    right: 5px;
    top: -114px;
}
.con{
    width: 1140px;

    margin: 0 auto;
}
.Introduction{
    width: 1140px;
    height: 760px;
    position: relative;
}
.Introduction-img{
    width: 381px;
    height: 640px;
    position: absolute;
    top: 60px;
    left: 390px;
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
    display: block;
    float: right;
    margin-top: 110px;
    text-align: center;
    line-height: 40px;
    width: 40px;
height: 40px;


margin-bottom: 20px;
}
.right-Introduction-icon{
    margin-top: 110px;
    line-height: 40px;
    width: 40px;
    text-align: center;
height: 40px;

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
.Information-main-img{
    width: 800px;
    height: 660px;
    position: absolute;
    bottom: -166px;
    left: 170px;
}
.Information-main-list{
    
}
.Information-left-icon{
    display: block;
    width: 52px;
    height: 52px;
   
    border-radius: 52px;
   
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
.list-icon{
   
font-size: 40px;
font-family: DIN-Bold, DIN;
font-weight: bold;
color: #CCCCCC;
line-height: 49px;
text-align: center;
margin-top: 30px;
}
.list-text{
    width: 280px;
font-size: 16px;
font-family: AlibabaPuHuiTiM;
color: #CCCCCC;
line-height: 22px;
margin: 0 auto;
margin-top: 20px;

}
.item{
    width: 270px;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    background: #2494FF;
    display: none;
}
.item-text{
    
height: 30px;
font-size: 22px;
font-family: AlibabaPuHuiTiM;
color: #FFFFFF;
line-height: 30px;
margin-top: 30px;
text-align: center;
}
.item-title{
    width: 230px;
font-size: 16px;
font-family: AlibabaPuHuiTiR;
color: #FFFFFF;
line-height: 22px;
margin-top: 10px;
margin: 0 auto;
margin-top: 10px;
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
