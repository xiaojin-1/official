<template>

     <div class="foot">
       <div class="foot-main">
           <ul class="nav">
             <li  v-for="(item,index) in nav" :key="index">
                <router-link :to="{path:item.nav}" class="nav-text">
                  {{item.title}}
                </router-link> 
             </li>
             <li>
                <a href="#" class="nav-text">APP下载</a>
             </li>
          </ul>
          <div class="foot-main-nav">
          <ul class="nav-list">
            <li class="nav-list-li" v-for="(item,index) in navlist" :key="index">
              <ul>
                <li v-for="(a,index) in item.list" :key="index">
                <router-link :to="{path:a.url}" class="navlist-text">
                  {{a.title}}
                </router-link>
                </li>
              </ul>
                 
             </li>
             <a  href="#" style="display:block">
             <li class="nav-list-li" >
              <ul>
                <li >
                  <a  href="#" class="navlist-text">IOS下载</a>
              
                </li>
                 <li >
                  <a  href="#" class="navlist-text">Android下载</a>
               
                </li>
              </ul>
                 
             </li>
             </a>
          </ul>

          </div>
          <div class="gzh">
            <img src="../assets/img_gzh@2x.png" alt="">
            <p class="gzh-text">扫描上方二维码关注创学关注</p>
          </div>
         <div class="xian">

         </div>
         <p class="foot-dz">©2011-2020 Cli.im 浙江创学网络科技有限公司</p>
         <p class="foot-bh">浙ICP备12002234号-4 浙公网安备 3302034200027号增值电信业务经营许可证：浙B2-20200277</p>
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
      nav:[
          {title:'产品介绍',url:'/introduce?id=1'},
          {title:'教育教学',url:'/school?id=2'},
          {title:'关于我们',url:'/aboutus?id=3'},
          {title:'加入我们',url:'/joinus?id=4'},
     
      ],
      navlist:[
          {
            list:[
              {title:'APP简介',url:'/introduce?id=1&nav=banner'},
              {title:'功能介绍',url:'/introduce?id=1&nav=banner1'},
              {title:'核心技术',url:'/introduce?id=1&nav=banner2'},
              // {title:'产品优势',url:'/introduce?id=1&nav=banner3'}
            ]
            
          },
         {
            list:[
              // {title:'战略部署',url:'/school?id=2&nav=school'},
              {title:'教育支持',url:'/school?id=2&nav=school'},
              {title:'名师团队',url:'/school?id=2&nav=school1'},
              {title:'课程辅导',url:'/school?id=2&nav=school2'},
            //   {title:'友情链接',url:'/school?id=2'},
            ]
            
          },
          {
            list:[
              {title:'企业介绍',url:'/aboutus?id=3&nav=aboutus'},
            //  {title:'发展规划',url:'/aboutus?id=3&nav=aboutus1'},
              {title:'运营理念',url:'/aboutus?id=3&nav=aboutus1'},
              {title:'创学团队',url:'/aboutus?id=3&nav=aboutus2'}
            ]
            
          },
          {
            list:[
              {title:'合作模式',url:'/joinus?id=4&nav=joinus'},
              {title:'优势介绍',url:'/joinus?id=4&nav=joinus1'},
              {title:'招募条件',url:'/joinus?id=4&nav=joinus2'},
              {title:'人才招聘',url:'/joinus?id=4&nav=joinus3'},
              
            ]
            
          },
         
      ]
    }
  },
   created () {
 
  
  },
  mounted () {
      //sessionStorage.setItem('id','Member');
 },
  methods: {
     check:function(index){
       this.isActive = index
     }
 },

  
  watch: {
    
 },
    computed: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foot{
    background: #3B3C41;
    width: 100%;
    height: 387px;
    clear: both;
}
.foot-main-nav{

    margin: 0 auto;
    clear: both;
    padding-top: 20px;
}
.foot-main{
    width: 1140px;
    height: 387px;
    margin: 0 auto;
}
.nav{
  padding-top: 40px;
}
.nav li{
    width: 192px;
    float: left;
    height: 25px;
    font-size: 18px;
    font-family: AlibabaPuHuiTiR;
    color: #FFFFFF;
    line-height: 25px;
}
.nav-text{
  color: #FFFFFF;
  text-decoration: none;
}
.navlist-text{
  margin-bottom: 10px;
  color: #B8B8BA;
  display: block;
  text-decoration: none;
}
.nav-list-li{
    width: 192px;
    float: left;
   
height: 22px;
font-size: 16px;
font-family: AlibabaPuHuiTiR;
color: #B8B8BA;
line-height: 22px;
margin-bottom: 10px;
}
.gzh{
  float: left;
  margin-top: -40px;
}
.gzh img{
    width: 120px;
    height: 120px;
}
.gzh-text{
  margin-top: 10px;
  width: 120px;
  
font-size: 14px;
font-family: AlibabaPuHuiTiR;
color: #B8B8BA;
line-height: 20px;
margin-bottom: 66px;
}
.xian{
  width: 1140px;
height: 1px;
background: #666666;

clear: both;

}
.foot-dz{
  text-align: center;
height: 20px;
font-size: 14px;
font-family: AlibabaPuHuiTiR;
color: #B8B8BA;
line-height: 20px;
margin-top: 30px;
}
.foot-bh{
text-align: center;
height: 20px;
font-size: 14px;
font-family: AlibabaPuHuiTiR;
color: #B8B8BA;
line-height: 20px;
margin-top: 10px;
}
</style>
