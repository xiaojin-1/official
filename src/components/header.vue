<template>

     <div class="header">
        <img class="logo" src="../assets/nav_logo@2x.png" alt="">
        <div class="header-right">
            <ul>
                <li  v-for="(item,index) in nav" :key="index" v-bind:class="{active:index==isActive}" >
                    <router-link class="router-link" :to="{name:item.nav,query:{id:item.id}}">              
                    {{item.title}}
                    </router-link>
                </li>
                 <li 
                 @mouseover="mouseOver()"
                 @mouseleave="mouseLeave()" 
                 >
                    下载APP
                </li>
            </ul>
        </div>
        <div class="downimg" :style="mouseactive">
            <p class="downjt"></p>
            <div class="az">
                <img src="../assets/httpssj.qq.commyappd.png" alt="">
                <p>安卓下载</p>
            </div>
            <div class="apple">
                 <img src="../assets/httpsapps.apple.comc.png" alt="">
                 <p>苹果下载</p>
            </div>
        </div>
     </div>
     

</template>

<script>
import '../styles/index.css';
export default {
  name: 'index',
  data () {
    return {
      isActive:0,
      mouseactive:'',
      nav:[
          {title:'首页',nav:'index',id:0},
          {title:'产品介绍',nav:'introduce',id:1},
          {title:'教育教学',nav:'school',id:2},
          {title:'关于我们',nav:'aboutus',id:3},
          {title:'加入我们',nav:'joinus',id:4},

      ]
    }
  },
   created () {
       let id = this.$route.query.id
       this.isActive = id
 //    console.log(this.$route.query.id)
  
  },
  mounted () {
     
 },
  methods: {
      mouseOver:function(index){
       //  this.cur = index
        this.mouseactive = 'display:block'
     },
     mouseLeave:function(index){
        // this.cur = index
        this.mouseactive = 'display:none'
     },
 },

  
  watch: {
    
 },
    computed: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.az{
    float: left;
    text-align: center;
    
font-size: 14px;
font-family: AlibabaPuHuiTiM;
color: #333333;
line-height: 20px;
}
.apple{
    float: left;
    text-align: center;
    
font-size: 14px;
font-family: AlibabaPuHuiTiM;
color: #333333;
line-height: 20px;
}
.downjt{
    width: 0;
    height: 0;
    border-bottom: 14px solid #fff;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    position: absolute;
    top: -14px;
    right: 20px;
}
.downimg{
    width: 280px;
    height: 160px;
    background: #fff;
    position: absolute;
    right: 0;
    top: 70px;
    display: none;
    z-index: 9;
}
.downimg img{
    width: 120px;
    height: 120px;
    margin-top: 10px;
    margin-left: 10px;
}
.header{
    position: relative;
    width: 1140px;
    margin: 0 auto;
}
.logo{
    width: 148px;
    height: 40px;
    float: left;
    margin-top: 16px;
}
.header-right{
    float: right;
    margin-top: 14px;
}
.header-right ul li{
    float: left;
    height: 45px;
    font-size: 18px;
    font-family: AlibabaPuHuiTiM;
    color: #FFFFFF;
    line-height: 45px;
    margin-left: 50px;
    cursor: pointer;
}
.router-link{
    text-decoration: none;
    color: #FFFFFF;
}
.active{
    border-bottom: 3px solid #fff;
}
</style>
