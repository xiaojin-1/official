<template>
  <div class="home-page">
     <div class="banner" id="school">
      <div>
        <v-header></v-header>
      </div>
      <div id="container1" class="swiper-wrapper1">
               <swiper class="swiper" :options="swiperOption1" ref="mySwiper">
                   <swiper-slide class="swiper-slide1"  v-for="(item,index) in slidetop" :key="index">
                    <div class="swipercon1">
                        <img :src=" 'https://chuangxue-oss.oss-cn-hangzhou.aliyuncs.com'+item.pic" class="swipertopimg" alt="">
                        <div class="swiperbottom">
                            <a :href=" 'https://'+item.href" target="_blank" >
                                <p class="swipertitle">{{item.title}}</p>
                            </a>
                            <div class="info" v-html="item.info"></div>
                        </div>
                    </div>
                   
                  </swiper-slide>
      
                </swiper>   
            </div> 
         
     </div>
   
     <div class="Characteristic con" id="school1">
         <div class="Characteristic-title">
             <img src="../assets/title_left@2x.png" class="title_left" alt="">
             <p class="title">名师团队</p>
             <img src="../assets/title_right@2x.png" class="title_right" alt="">
         </div>
         <p class="Characteristic-en">Famous teacher team</p>
         <div class="Characteristic-list">
              <div class="swiper-container">
           <div id="container" class="swiper-wrapper">
               <swiper class="swiper" :options="swiperOption" ref="mySwiper">
                   <swiper-slide class="swiper-slide"  v-for="(item,index) in slide" :key="index">
                    <div class="swipercon"  @mouseover="mouseOver(index)"
                  @mouseleave="mouseLeave(index)">
                        <img :src=" 'https://chuangxue-oss.oss-cn-hangzhou.aliyuncs.com'+item.head" alt="" class="swiperconimg">
                        <p class="swiper-bot-text">{{item.teacherName}}</p>
                        <div class="swiper-show" v-if="cur == index"  :style="mouseactive" >
                        <img :src=" 'https://chuangxue-oss.oss-cn-hangzhou.aliyuncs.com'+item.head" alt="" class="swiper-show-img">
                        <div class="swiper-show-right">
                            <p class="teacherName">{{item.teacherName}}</p>
                            <p class="major">{{item.major}}</p>
                        </div>
                        <p class="swiper-show-introduce">{{item.introduce}}</p>
                    </div>
                    </div>
                   
                  </swiper-slide>
                 
                  <div class="swiper-button-prev" slot="button-prev"></div>
                 <div class="swiper-button-next" slot="button-next"></div>
                </swiper>   
            </div> 

           </div>
         </div>
     </div>
    
     
     <div class="Public con" id="school2">
         <div class="Characteristic-title" >
             <img src="../assets/title_left@2x.png" class="title_left" alt="">
             <p class="title">课程辅导</p>
             <img src="../assets/title_right@2x.png" class="title_right" alt="">
         </div>
         <p class="Characteristic-en">Tutorial course</p>
        <div class="grade">
            <p class="grade-text">课程年级:</p>
            <ul class="grade-ul">
                <li v-for="(item,index) in list" @click="tab(index)" :class="{active:cur2==index}" :key="index">
                    {{item.text}}
                </li>
                
            </ul>
        </div>
        <div class="classification">
            <p class="grade-text">课程分类:</p>
            <ul class="grade-ul">
                <li v-for="(item,index) in active" @click="tab1(index)" :class="{show:cur1==index}" :key="index">
                    {{item.title}}
                </li>
                
            </ul>
        </div>
        <div class="look-list">
            <ul>
                <li v-for="(item,index) in look" :key="index" @click="videoopenclick(index)">
                    <a :href="item.externalLinks" target="_blank" v-if="item.isExternalLinks == 1">
                         <p class="look-list-img">
                        <img :src=" 'https://chuangxue-oss.oss-cn-hangzhou.aliyuncs.com'+item.coverImage" alt="">
                        </p>
                        <p class="look-list-text">{{item.title}}</p>
                    </a>
                    <div v-else>
                         <p class="look-list-img">
                        <img :src=" 'https://chuangxue-oss.oss-cn-hangzhou.aliyuncs.com'+item.coverImage" alt="">
                        </p>
                        <p class="look-list-text">{{item.title}}</p>
  
                    </div>
                   
                </li>
            </ul>
            <p class="more" @click="moreclick">查看更多</p>
        </div>
     </div>
     <div>
         <div class="video" v-show="show == 1">
         <div class="videoclose">
         <video
          @click="suspend"
          controls="controls"
          autoplay
           id="myVideo"
           class="video-js"
           ref='audio'
            :src="videosrc"
            type="video/mp4"
           >
          
          </video>
<i @click="close()" class="close el-icon-close"></i>
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
        swiperOption: {
    
   	 speed: 1000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
      loop:false, //循环切换
    //  spaceBetween: '5%',
         appendNumber:4,
         paginationClickable: true,
    spaceBetween: 17,
       slidesPerView: 'auto',
//       paginationClickable: true,
   	 grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
  	 //setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
     autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。  
     autoWidth: 900,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。 
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
   swiperOption1: {
      autoplay : {
    	disableOnInteraction: true, //用户操作后是否禁止自动循环
   		delay: 2000 //自自动循环时间
  	  }, //可选选项，自动滑动
	 speed: 1000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
      loop:false, //循环切换
    //  spaceBetween: '5%',
       //  appendNumber:4,
         paginationClickable: true,
    spaceBetween: 60,
       slidesPerView: 'auto',
//       paginationClickable: true,
   	 grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
  	 //setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
     autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。  
     autoWidth: 600,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。 
  	 scrollbar: '.swiper-scrollbar',
  	 mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
  	 observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper

   	pagination: {
    	el: '.swiper-pagination',
    	// type : 'progressbar', //分页器形状
    	clickable :true, //点击分页器的指示点分页器会控制Swiper切换
       },
     
  	   
   }   ,
      swiperList: [],
      mouseactive:'',
      cur:'0',
      cur1:'0',
      cur2:'0',
      size:'4',
      nav:'',
      videosrc:'',
      show:2,
      slide:[],
      id:'',
      category:'',
      list:[
          {icon:'icon',text:'小学'},
          {icon:'icon',text:'初中'},
          {icon:'icon',text:'高一'},
          {icon:'icon',text:'高二'},
          {icon:'icon',text:'高三'},
    
    ],
     active:[
          {pic:'icon',text:'语文'},
          {pic:'icon',text:'数学'},
          {pic:'icon',text:'科学'},
          {pic:'icon',text:'英语'},
          {pic:'icon',text:'化学'},
          {pic:'icon',text:'物理'},
      ],
      slidetop:[{},
      {}
      ,
      {}],
      look:[
       
      ]
    }

    
  },
   created () {
 this.nav = this.$route.query.nav
  
  },
  mounted () {

     this.getData();
     this.gettype();
     
     this.gettop();
       if (this.nav != null && this.nav!=''){
           this.$nextTick(() => {
             document.getElementById(this.nav).scrollIntoView({
             behavior: "smooth"
         })
       })

     }
 },
  methods: {
      videoopenclick:function(index){
        
        this.types = this.look[index].isExternalLinks
        if (this.types == 0){
          this.show = 1
        this.videosrc = 'https://chuangxue-oss.oss-cn-hangzhou.aliyuncs.com'+this.look[index].videoUrl
        document.body.style.overflow='hidden';
        this.initVideo();
        }
       
      },
      close:function(){
          document.body.style.overflow='';
          this.videosrc = '1'
          this.show = 2
        //   var vide= document.getElementById("myVideo");
        //   vide.pause()
      },
     suspend:function(){
       // this.show = 2
       
     //   var vide= document.getElementById("myVideo");
        //console.log(vide.play(),11)
        
      //    console.log(this.$refs.audio.player)
     //   this.$refs.audio.pause() // 暂停
        //this.$refs.audio.load()
     },
     mouseOver:function(index){
         this.cur = index
        this.mouseactive = 'display:block'
     },
     mouseLeave:function(index){
         this.cur = index
        this.mouseactive = 'display:none'
     },
     tab:function(index){
       this.cur2 = index
     },
     tab1:function(index){
      this.cur1 = index
      this.category = this.active[index].id
      this.size = 4
      this.getvideo();
     // console.log(this.id)
     },
     getData() {
      
   this.$axios.get("/consumer/teacher/getAllTeacher",{
     })
    .then(res=>{
        this.slide = res.data.data
      //  this.slide = res.data.data
        //console.log(res.data.data,8888)
      
    })
    },
     gettype() {
      
   this.$axios.get("/consumer/video_category/getAllVideoType",{
     })
    .then(res=>{
        this.active = res.data.data
        this.category = this.active[0].id
        console.log(this.id)
        this.getvideo();
      //  this.slide = res.data.data
       // console.log(res.data.data,8888)
      
    })
    },
     getvideo() {
     // this.id = this.active[0].id
   this.$axios.get("/consumer/zs_video/getWebSiteVideo",{
       params:{
        category:this.category,
        pageNo:1,
        pageSize:4
      }
     })
    .then(res=>{
       // console.log(res)
        this.look = res.data.data
      //  this.slide = res.data.data
       // console.log(res.data.data,123)
      
    })
    },
     gettop() {
     // this.id = this.active[0].id
   this.$axios.get("/consumer/institutions/getAllInstitutions",{
      
     })
    .then(res=>{
       //console.log(res,9898)
        this.slidetop = res.data.data
       // this.id = res.data.data[0].id
      //  this.slide = res.data.data
      //  console.log(res.data.data,88818)
      
    })
    },
    moreclick:function(){
       this.size = this.size*1+4*1
       //console.log(this.id,88)
        this.$axios.get("/consumer/zs_video/getWebSiteVideo",{
       params:{
        category:this.category,
        pageNo:1,
        pageSize:this.size
      }
     })
    .then(res=>{
        //console.log(res,1)
        this.look = res.data.data
      //  this.slide = res.data.data
       // console.log(res,8888)
      
    })



     //  this.getvideo()
    },
    initVideo() {
        //初始化视频方法
      //  console.log(myVideo,1)
        let myPlayer = this.$video(myVideo, {
            //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            controls: true,
            //自动播放属性,muted:静音播放
            autoplay: "false",
            //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            preload: "auto",
            //设置视频播放器的显示宽度（以像素为单位）
            width: "800px",
            //设置视频播放器的显示高度（以像素为单位）
            height: "400px"
        });
        }

 },

  
  watch: {
    '$route' (to, from) {
        //console.log(to)
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
.video{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 666;
   overflow-y: hidden;
}

.videoclose{
    width: 800px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -400px;
    transition: (50%,50%);
}
.close{
    position: absolute;
    right: -40px;
    top: -40px;
    font-size: 36px;
    color: #fff;
    cursor: pointer;
}
.more{
    clear: both;
    width: 120px;
    height: 44px;
    border-radius: 6px;
    text-align: center;
    line-height: 44px;
    border: 2px solid #ccc;
    margin: 0 auto;
    cursor: pointer;
    color: #666;
    font-size: 16px;
}
.more:hover{
    
    
    border: 2px solid #2494FF;
    margin: 0 auto;
    cursor: pointer;
    color: #fff;
    background: #2494FF;
}
.info{
    width: 460px;
    text-align: left;
    font-size: 14px;
    
color: #999999;
    margin: 10px 0  0 30px;
}
.swipertitle{
    margin: 18px 0 0 30px;
    color: #2494FF;
    text-align: left;
}
.swipertopimg{
    width: 600px;
    height: 308px;
}
.swiperbottom{
    width: 520px;
    height: 150px;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -260px;
    overflow: hidden;
}
.swipercon1{
    width: 900px;
}
 .swiper-wrapper1{
        width: 1140px;
        height: 608px;
        margin: 0 auto;
        margin-top: 30px;
       padding-top: 100px;
    }

.swiper-slide1 {
      height: 408px !important;
      position: relative;
        text-align: center;
        font-size: 18px;
        width: 600px !important;  
        
        /* Center slide text vertically */
        /* display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex; */
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        /* align-items: center; */
    }
.major{
    
height: 17px;
font-size: 12px;
font-family: AlibabaPuHuiTiR;
color: #AFD8FF;
line-height: 17px;
margin-top: 5px;
}
.teacherName{
    font-size: 16px;
}
.swiper-show-introduce{
    color: #fff;
    clear: both;
    width: 186px;
font-size: 12px;
font-family: AlibabaPuHuiTiR;
margin: 0 auto;
line-height: 17px;
padding-top: 20px;
}
.swiper-show{
    width: 226px;
    height: 280px;
    background: #2494FF;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
}
.swiper-show-img{
    width: 52px;
    height: 52px;
    border-radius: 52px;
    float: left;
    margin: 20px 0 0 20px;
}
.swiper-show-right{
    float: left;
    color: #fff;
    margin-top: 20px;
    margin-left: 10px;
}
.swiper-bot-text{
    position: absolute;
    width: 226px;
    height: 40px;
    text-align: center;
    color: #fff;
    line-height: 40px;
    left: 0;
    bottom: 0;
    background: #2494FF;
}
.swipercon{
    width: 226px;
    height: 280px;
}
.swiperconimg{
    width: 226px;
    height: 280px;
}
.look-list-text{
    margin-left: 10px;
    margin-top: 20px;
    height: 25px;
    font-size: 18px;
    font-family: AlibabaPuHuiTiM;
    color: #333333;
    line-height: 25px;
}
.look-list-img{
    
    width: 270px;
    height: 160px;
}
.look-list-img img{
    
    width: 270px;
    height: 160px;
}
.look-list{
    width: 1160px;
    padding-bottom: 60px;
}
.look-list ul li{
  width: 270px;
  height: 225px; 
  margin-right: 20px;
  margin-bottom: 20px;
  float: left;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
}
.grade{
    padding-top: 41px;
}
.grade-text{
height: 22px;
font-size: 16px;
font-family: AlibabaPuHuiTiR;
color: #333333;
line-height: 22px;
margin-left: 30px;
float: left;
margin-right: 36px;
padding: 0 6px 0 6px;
}
.grade-ul{
    float: left;
}
.grade-ul li{
    float: left;
height: 22px;
font-size: 16px;
font-family: AlibabaPuHuiTiR;
color: #333333;
line-height: 22px;
margin-right: 35px;
padding: 0 6px 0 6px;
}
.classification{
    clear: both;
    padding-top: 32px;
    padding-bottom: 41px;
}
.active{
    background: #2494FF;
    color: #fff !important;
    
border-radius: 4px;
}
.show{
    background: #2494FF;
    color: #fff !important;
    
border-radius: 4px;
}
.swiper-wrapper1 .swiper-container{
    width: 1140px;
        height: 608px;
        margin: 0 auto;
   
}
  .swiper-wrapper .swiper-container {
      width: 955px;
        height: 280px;
        
    }
    .swiper-slide {
        width: 226px;
        height: 280px;
        text-align: center;
        font-size: 18px;
    
        
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
        align-items: center;
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
    right: 35px;
    top: 114px;
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
    width: 285px;
    height: 570px;
    float: left;
}
.active-pic{
    width: 285px;
    height: 285px;
    background: #000;
    clear: both;
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
</style>
