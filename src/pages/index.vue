<template>
  <div class="home-page">
     <div class="banner">
      <div>
        <v-header></v-header>
      </div>
         <div class="banner-main">
             <p class="banner-text">创学让学习更有价值</p>
             <p class="banner-title">在线学习教育APP</p>
             <p class="banner-en">Creative learning makes learning more valuable. Online learning education app.</p>
           
            <!-- <div class="banner-btn" @click="btndown()">
                 前往下载
                 <i class="el-icon-right"></i>
             </div> -->

            <img src="../assets/home_banner_phone@2x.png" alt="" class="mobilelog">
             
         </div>
         
     </div>
     <div class="Introduction con" style="position: relative;">
         <div class="Introduction-left">
             <p class="Introduction-text">创学简介</p>
             <p class="Introduction-title">
                 浙江创学网络科技有限公司以互联网+学习为起点、以共享为核心、以强大的技术队伍为支撑，是一家快速成长、锐意进取的年轻网络科技公司。以需求为导向，以服务为宗旨；以创新、专业、求实、诚信、和谐为经营理念。迅速发展成为网络科技领域的后起之秀。
基于一款阅读学习类APP，利用互动关系搭建阅读学习的传播平台，公司通过建立一个全民公共学习的系统，提供线上培训，交流学习，分享最新创业教程等功能，帮助全民从中学习提升自我价值，并让每一个阅读学习的用户都能从中享受到学习的乐趣。 
公司响应国家号召，“大众创业 万众创新”搭建一个互联网+全民学习的平台，打破传统枯燥乏味的学习模式，让学习更有乐趣和价值。
                 </p>
         </div>
         <div class="Introduction-right">
             <img src="../assets/img_home_introduce@2x.png" class="Introduction-img" alt="">
         </div>
     </div>
     <div class="Characteristic con">
         <div class="Characteristic-title">
             <img src="../assets/title_left@2x.png" class="title_left" alt="">
             <p class="title">软件特色</p>
             <img src="../assets/title_right@2x.png" class="title_right" alt="">
         </div>
         <p class="Characteristic-en">Software features</p>
         <div class="Characteristic-list">
             <ul>
                 <li v-for="(item,index) in list"
                  @mouseover="mouseOver(index)"
                  @mouseleave="mouseLeave(index)" 
                  :key="index">
                  <img class="list-icon" :src="item.icon" alt="">
                     <!-- <p class="list-icon">{{item.icon}}</p> -->
                     <p class="list-text">{{item.text}}</p>
                     <div class="item" v-if="cur == index" :style="mouseactive">
                         <p class="item-text">{{item.text}}</p>
                         <p class="item-title">{{item.title}}</p>
                     </div>
                 </li>
             </ul>
         </div>
     </div>
     <div class="Informa">
         <div class="Information con">
             <div class="Characteristic-title" style="padding-top: 40px;">
                <img src="../assets/title_left_white@2x.png" class="title_left" alt="">
                <p class="title Informatitle" >新闻资讯</p>
                <img src="../assets/title_right_white@2x.png" class="title_right" alt="">
             </div>
             <p class="Characteristic-en Informa-en" style="margin-bottom: 40px;">News and information</p>
             <div class="swiper-container">
           <div id="container" class="swiper-wrapper">
               <swiper class="swiper" :options="swiperOption" ref="mySwiper">
                   <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
                       <div class="slide-item">
                             <div class="slide-img">
                                 <img :src=" 'https://chuangxue-oss.oss-cn-hangzhou.aliyuncs.com'+item.pic" alt="" class="">
                             </div>
                             <p class="slide-text">{{item.info}}</p>

                       </div>
                     
                    
                  </swiper-slide>
              
                  <div class="swiper-button-prev" slot="button-prev"></div>
                 <div class="swiper-button-next" slot="button-next"></div>
                </swiper>   
            </div> 

           </div>
        </div>
    </div>
     
     <div class="Public con">
         <div class="Characteristic-title" style="padding-top:80px">
             <img src="../assets/title_left@2x.png" class="title_left" alt="">
             <p class="title">创学公益</p>
             <img src="../assets/title_right@2x.png" class="title_right" alt="">
         </div>
         <p class="Characteristic-en" style="margin-bottom: 40px;">Public benefit activ</p>
         <div class="Characteristic-active">
             <ul>
                 <li v-for="(item,index) in active"
                  @mouseover="mouseOver(index)"
                  @mouseleave="mouseLeave(index)" 
                  :key="index">
                     <div class="active-pic" :id="numid(index)">
                          <img :src=" 'https://chuangxue-oss.oss-cn-hangzhou.aliyuncs.com'+item.pic" alt="" class="">
                     </div>
                     <div 
                      class="activeright"
                      :id="rightnumid(index)"
                      @mouseover="mouseOverright(index)"
                      @mouseleave="mouseLeaveright(index)" 
                      :class="{active:rightactive == index}"
                      >
                          <p class="active-text">{{item.title}}</p>
                          <p class="active-title">{{item.info}}</p>
                     </div>
                    
                     <!-- <div class="item" v-if="cur == index" :style="mouseactive">
                         <p class="item-text">{{item.text}}</p>
                         <p class="item-title">{{item.title}}</p>
                     </div> -->
                 </li>
             </ul>
         </div>
     </div>
     <div class="user-information">
         <div class="main-user-information">
              <div class="left-user-information">
                <p class="text-user-information">200万+</p>
                <p class="title-user-information">用户总量</p>
             </div>
             <div class="con-user-information">
               <p class="text-user-information">600+</p>
                <p class="title-user-information">入驻商家</p>
             </div>
             <div class="right-user-information">
                <p class="text-user-information">20+</p>
                <p class="title-user-information">覆盖城市</p>
             </div>
         </div>
     </div>
     <div class="foot">
         <v-foot></v-foot>
     </div>
      <div >
         <v-leftnav></v-leftnav>
     </div>




  </div>
</template>

<script>
import { Swiper, swiperSlide } from 'vue-awesome-swiper'
import header from '@/components/header';
import foot from '@/components/foot';
import leftnav from '@/components/leftnav';
import '../styles/index.css';
import cause from '../assets/icon_trait_cause.png';
import free from '../assets/icon_trait_free.png';
import major from '../assets/icon_trait_major.png';
import overall from '../assets/icon_trait_overall.png';
export default {
  name: 'index',
   components: {
   'v-header':header,
   'v-foot':foot,
   'v-leftnav':leftnav,
  },
  data () {
    return {
        swiperOption: {
    //   autoplay : {
    // 	disableOnInteraction: true, //用户操作后是否禁止自动循环
   	// 	delay: 2000 //自自动循环时间
  	//   }, //可选选项，自动滑动
   	 speed: 1000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
      loop:false, //循环切换
    //  spaceBetween: '5%',
          slidesPerView: 4,
         //  appendNumber:4,
         paginationClickable: true,
    spaceBetween: 17,
   	 grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
  	 //setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
     autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。  
  //   autoWidth: '80%',   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。 
  	 scrollbar: '.swiper-scrollbar',
  	 mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
  	 observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper

   	pagination: {
    	el: '.swiper-pagination',
    	// type : 'progressbar', //分页器形状
    	clickable :true, //点击分页器的指示点分页器会控制Swiper切换
       },
       navigation: {
   	 nextEl: '.swiper-button-next',
   	 prevEl: '.swiper-button-prev',
 	  }, 
  	   
   }   ,
      swiperList: [],
      slide:[
          {},
          {},
          {},
          {},
          {},
      ],
      mouseactive:'',
      cur:'0',
      nav:'',
      rightactive:'-1',
      list:[
          {icon:cause,text:'全面',title:'育儿百科、课后辅导、技能提升、创业培训及生活百科等，涵盖人生每个阶段所需知识。'},
          {icon:free,text:'专业',title:'致力供给更权威、更精准、更具价值的内容。'},
          {icon:major,text:'创业',title:'大众创业，万众创学，人人都是学习者，更为创作者。'},
          {icon:overall,text:'免费',title:'免费学、趣味学、激励学。'},
    
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
     console.log(this.nav)
  
  },
  mounted () {
     this.getData();
     this.getpublic();
     
    // document.querySelector(this.nav).scrollIntoView(true)
 },
  methods: {
     closeclick:function(){
        this.$emit('child-grab', false);
     },
     mouseOver:function(index){
         this.cur = index
        this.mouseactive = 'display:block'
     },
     mouseLeave:function(index){
         this.cur = index
        this.mouseactive = 'display:none'
     },
     mouseOverright:function(index){
         this.rightactive = index
        // console.log(this.rightactive)
     },
     mouseLeaveright:function(index){
         this.rightactive = '-1'
     },
     numid:function(index){
       return 'numid'+index
     },
     rightnumid:function(index){
       return 'rightnumid'+index
     },
     getData() {
       this.$axios.get("/consumer/news/getAllNews",{
     })
    .then(res=>{
        this.slide = res.data.data
     // console.log(res.data.data,8888)
      
    })
   
    },
    btndown:function(){
        this.$router.push({path:'introduce',query: {id:'1'}})
    },

     getpublic() {
       this.$axios.get("/consumer/public/getAllWelfare",{
     })
    .then(res=>{
        this.active = res.data.data
      //  this.slide = res.data.data
       // console.log(res.data.data,8888)
      
    })
   
    }

 },

  
  watch: {
    
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
  .swiper-container {
        width: 955px;
        height: 280px;
        
        
    }
    .slide-item{
       width: 226px;
       height: 280px; 
    }
    .slide-img{
        clear: both;
        width: 226px;
        height: 140px;
        vertical-align: top;
    }
    .slide-img img{
        
        width: 226px;
        height: 140px;
        vertical-align: top;
    }
    .slide-text{
        margin: 10px 0 0 10px;
        width: 206px;
 
        font-size: 16px;
        overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
white-space:pre-wrap;
-webkit-box-orient:vertical;
-webkit-line-clamp:5; 
    }
    .swiper-slide {
        width: 226px;
        height: 280px;
        text-align: center;
        font-size: 18px;
        background: #fff;
        
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;

    }
    /* .swiper-button-prev{
        position: absolute;
        left: -20px !important;
    } */
.banner{
    background: #1677FF;
    width: 100%;
    height: 640px;
    overflow: hidden;
    position: relative;
}
.banner-main{
    position: relative;
    width: 1140px;
    height: 640px;
    margin: 0 auto;
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
    height: 44px;
    font-size: 32px;
    font-family: AlibabaPuHuiTiR;
    color: #FFFFFF;
    line-height: 44px;
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
    cursor: pointer;
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
.Introduction-left{
    float: left;
}
.Introduction-text{
    height: 35px;
    font-size: 26px;
    font-family: AlibabaPuHuiTiM;
    color: #333333;
    line-height: 35px;
    margin-top: 100px;
}
.Introduction-title{
    width: 640px;
    height: 229px;
    font-size: 18px;
    font-family: AlibabaPuHuiTiR;
    color: #999999;
    line-height: 25px;
    margin-top: 10px;
}
.Introduction-img{
    width: 400px;
    height: 300px;
    float: left;
    margin: 80px 0 80px 100px;
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
    width: 268px;
    height: 200px;
    float: left;
    margin-right: 20px;
    border: 1px solid #f0f0f0;
    position: relative;
}
.list-icon{
    display: block;
    width: 64px;
    border-radius: 64px;
    height: 64px;
    line-height: 64px;
    background: #2494FF;
    color: #fff;
    text-align: center;
    font-size: 16px;
    margin: 0 auto;
    margin-top: 40px;
}
.list-text{
    
height: 30px;
font-size: 22px;
font-family: AlibabaPuHuiTiM;
color: #2494FF;
line-height: 30px;
text-align: center;
margin-top: 30px;
font-weight: bold;
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
    height: 466px ;
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
  
    float: left;
}
.active-pic{
    width: 285px;
    height: 285px;

    
    float: left;
}
.active-pic img{
    width: 285px;
    height: 285px;
}
#numid2{
    float: right;
}
#numid3{
    float: right;
}
.activeright{
    background: #FAFAFA;
    width: 285px;
    height: 285px;
    float: left;
    overflow: hidden;
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
    overflow: hidden;
    margin: 0 auto;
    width: 245px;
font-size: 14px;
font-family: AlibabaPuHuiTiR;
color: #333333;
line-height: 20px;
text-overflow:ellipsis;
display:-webkit-box; 
white-space:pre-wrap;
-webkit-box-orient:vertical;
-webkit-line-clamp:9; 
}
.user-information{
    width: 100%;
    height: 400px;
    background: url(../assets/banner_data@2x.png) 100% 100% no-repeat;
    background-size: 100%;
}
.main-user-information{
    margin: 0 auto;
    width: 1140px;
}
.left-user-information{
    float: left;
    margin-top: 133px;
}
.con-user-information{
    float: left;
    margin-top: 133px;
    margin-left: 285px;
}
.right-user-information{
    float: left;
    margin-top: 133px;
    margin-left: 320px;
}
.text-user-information{
   height: 90px;
   font-size: 64px;
   font-family: DIN-Bold, DIN;
   font-weight: bold;
   color: #FFFFFF;
   line-height: 78px;
}
.title-user-information{ 
text-align: center;

height: 44px;
font-size: 32px;
font-family: AlibabaPuHuiTiM;
color: #FFFFFF;
line-height: 44px;
}
.active{
    background: #2494FF;
    color: #fff;
}
.active p{
    color: #fff;
}
</style>
