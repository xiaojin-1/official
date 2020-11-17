<template>
  <div class="home-page">
     <div class="banner" id="aboutus">
      <div>
        <v-header></v-header>
      </div>
         <div class="banner-main" id="tab" name="tab" ref="tab">
             <p class="banner-text">创学介绍</p>
             <p class="banner-title">
               浙江创学网络科技有限公司以互联网+学习为起点、以共享为核心、以强大的技术队伍为支撑，是一家快速成长、锐意进取的年轻网络科技公司。以需求为导向，以服务为宗旨；以创新、专业、求实、诚信、和谐为经营理念。迅速发展成为网络科技领域的后起之秀。基于一款阅读学习类APP，利用互动关系搭建阅读学习的传播平台，公司通过建立一个全民公共学习的系统，提供线上培训，交流学习，分享最新创业教程等功能，帮助全民从中学习提升自我价值，并让每一个阅读学习的用户都能从中享受到学习的乐趣。公司响应国家号召，“大众创业 万众创新”搭建一个互联网+全民学习的平台，打破传统枯燥乏味的学习模式。让学习更有乐趣和价值。
             </p>
         
               <img src="../assets/img_about_introduce.png" alt="" class="mobilelog">
         </div>
         
       
     </div>
     <div class="plan">
         <div class="plan-img">
             <img src="../assets/img_about_plan.png" alt="">

         </div>
         
     </div>
     <div class="Introduction con" id="aboutus1">
          <div class="Characteristic-title">
             <img src="../assets/title_left@2x.png" class="title_left" alt="">
             <p class="title">运营理念</p>
             <img src="../assets/title_right@2x.png" class="title_right" alt="">
         </div>
         <p class="Characteristic-en">Operation concept</p>
        <div class="operate">
            <p class="operate-text">以学习培训为理念，以新的教育技术为支撑，呼吁全民更热衷学习和阅读，面向全球市场，打造学习培训大数据。</p>
            <!-- <p class="operate-title">运营理念内容运营理念内容运营理念内容运营理念内容运营理念内容运营理念内容运营理念内容运营理念内容运营理念内容运营理念内容运营理念内容</p> -->
        </div>
        <img src="../assets/img_about_idea.png" class="operate-img" alt="">
       
     </div>
       <div class="team con" id="aboutus2">
          <div class="Characteristic-title">
             <img src="../assets/title_left@2x.png" class="title_left" alt="">
             <p class="title">团队介绍</p>
             <img src="../assets/title_right@2x.png" class="title_right" alt="">
         </div>
         <p class="Characteristic-en">Team Introduction</p>
         <div class="team-left">
              <img src="../assets/img_about_team.png" class="team-left-img" alt="">
         </div>
         <div class="team-right">
              <p class="team-right-about">创学团队介绍</p>
              <p class="team-right-text">
                  公司拥有各技术领域专家组成的技术科研团队，打造了一支具备丰富开发经验、市场运营能力、覆盖全学科矩阵式教研团队和国际前沿技术探索能力的高素质专业队伍。目前，公司在移动端、多媒体与大数据等领域，累计服务用户数千万，在技术创新与用户服务方面，均获得一致好评。
              </p>
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
      cur:'-1',
      nav:'',
      list:[
          {num:'01',text:'特色标题',title:'优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍'},
          {num:'02',text:'特色标题',title:'优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍'},
          {num:'03',text:'特色标题',title:'优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍'},
          {num:'04',text:'特色标题',title:'优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍'},
          {num:'05',text:'特色标题',title:'优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍'},
          {num:'06',text:'特色标题',title:'优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍优势介绍'},
      
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
      var hash = window.location.hash;
     var index = hash.lastIndexOf("#");
     if (index != -1) {
       var id = hash.substring(index + 1, hash.length + 1);
       var div = document.getElementById(id);
       if (div) {
         setTimeout(function () {
         //  console.log($(div).offset().top);
           //$('html,body').scrollTop($(div).offset().top - 43);
           $('html, body').animate({scrollTop: $(div).offset().top - 43}, 500)
         }, 500);
       }
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
    '$route' (to, from) {
        this.getData(this.$route.query.nav)
    }
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
    margin-top: 115px;
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
}
.plan img {
    width: 1084px;
    height: 268px;
    
    position: absolute;
    left: 30px;
    top: 40px;
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
