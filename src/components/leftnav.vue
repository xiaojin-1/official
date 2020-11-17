<template>
<div>
     <div class="leftnav">
        <div class="nav"
        id="test"
         @mouseleave="mouseOver()"
         @mouseover="mouseLeave()"
        >
            <img src="../assets/icon_sidebar_contact.png" class="icon-ly" alt="">
            <p class="nav-contart">联系.创学</p>
        </div>
        <a href="#">
            <div class="backtop">
            <img src="../assets/icon_sidebar_top.png" alt="">
        </div>

        </a>
        
        <div class="hover-show" 
         id="sub1"
         @mouseleave="mouseOver()"
         @mouseover="mouseLeave1()" 
         >
         
            <ul >
                <li>
                    <img src="../assets/icon_contact_telephone.png" class="left-icon" alt="">
                    <div class="right-hover">
                        <p class="right-hover-text">商务合作</p>
                        <p class="right-hover-title ">13685894861-陈小姐</p>
                    </div>
                </li>
                <li>
                     <img src="../assets/icon_contact_mail.png" class="left-icon" alt="">
                      <div class="right-hover">
                          <p class="right-hover-text">企业邮箱</p>
                          <p class="right-hover-title right-hover-address">2324894483@qq.com</p>
                    </div>
                </li>
                <li>
                     <img src="../assets/icon_contact_address.png" class="left-icon" alt="">
                      <div class="right-hover">
                          <p class="right-hover-text">公司地址</p>
                          <p class="right-hover-title right-hover-address">浙江省宁波市海曙区高桥镇商会大厦B座1805室</p>
                    </div>
                </li>
                <li @click="openkf()" class="openkf">
                     <img src="../assets/icon_contact_server.png" class="left-icon" alt="">
                      <div class="right-hover">
                          <p class="right-hover-text">联系客服</p>
                          <p class="right-hover-title" :class="{active:index==3}">cxkefu02</p>
                    </div>
                </li>
            </ul>
            <p class="btn">联系创学</p>
        </div>
       
    </div>
     <div class="dislog-kf" v-show="show">
          <img src="../assets/img_contact_header.png" class="kf-img" alt="">
          <p class="kf-text">创学客服</p>
          <p class="kf-title">扫描下方二维码添加创学客服微信，在线咨询产品或使用相关问题</p>
          <img src="../assets/img_contact_code.png" class="kf-erm" alt="">
          <img src="../assets/icon_contact_close.png" @click="closekf()" class="kf-close" alt="">
     </div>
     <div class="dislog-table">
         <p class="dislog-table-text">联系我们</p>
         <p class="dislog-table-title">浙江创学网络科技有限公司</p>
         <section>
        <div class="table" >
        <el-form :model="addManagerData" :rules="rules" ref="addForm" class="add-form" label-width="100px">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="真实姓名" prop="name">
                        <el-input v-model="addManagerData.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="公司名称" prop="company">
                        <el-input v-model="addManagerData.company"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="联系电话" prop="num">
                        <el-input v-model="addManagerData.num"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="工作职位" prop="position">
                        <el-input v-model="addManagerData.position"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="邮箱地址" prop="email">
                        <el-input v-model="addManagerData.email"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="联系地址" prop="contact">
                        <el-input v-model="addManagerData.contact"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="具体需求" prop="demand">
                <el-input v-model="addManagerData.demand"></el-input>
            </el-form-item>
          <el-form-item>
               
                <el-button type="primary" @click="updateSystemUser(addManagerData)">确 定</el-button>
            </el-form-item>
        </el-form>
        </div>
    </section>
     </div>
</div>
   
</template>

<script>
import '../styles/index.css';
export default {
  name: 'index',
  data () {
    return {
     mouseactive:'',
     show:false,
     timershow:'',
     timerhide:'',
     addManagerData: {
                    name: null,
                    company: null,
                    num: null,
                    position: null,
                    email: null,
                    contact:null,
                    demand:null
       },
       rules: {
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'},
                       
                    ],
                    company: [
                            {required: true, message: '请输入手机号', trigger: 'blur'},
                          
                    ],
                    num: [
                        {required: true, message: "用户名不能为空", trigger: "blur"},
                       
                    ],
                    position: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                     
                    ],
                    email: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                        
                    ],
                    contact: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                      
                    ],
                    demand: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                       
                    ]

                },
    }
  },
   created () {
 
  
  },
  mounted () {
//this.mouseOver1(index)
//window.onload=init
      //sessionStorage.setItem('id','Member');
 },
  methods: {
     mouseOver:function(){     //鼠标离开
        // console.log($event,98989898)
         this.timerhide = window.setTimeout("document.getElementById('sub1').style.display = 'none';", 200)
       
     },
     mouseLeave:function(){    //鼠标移入
        if (this.timerhide) { window.clearInterval(this.timerhide); }
         if (document.getElementById("sub1").style.display != "block") {
             this.timershow = window.setTimeout("document.getElementById('sub1').style.display = 'block';", 200)
         }
     },
 
     mouseLeave1:function(){   //鼠标移入
       if (this.timerhide) { window.clearInterval(this.timerhide); }     
     },
     openkf:function(){
         let _this = this
         _this.index = 3
      //   console.log(110)
         _this.show = true
     },
     closekf:function(){
         this.show = false
         this.index= -1
     },
     updateSystemUser(addManagerData){
        this.$refs.addForm.validate((valid) => {
            console.log(valid,111)
                    if (valid) {
                       console.log(1)
                    } else {
                        console.log(2)
                        return false;
                    }
                });
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

.table{
    width: 646px;
}
.dislog-table-text{
    
height: 30px;
font-size: 26px;
font-family: PingFang-SC-Bold, PingFang-SC;
font-weight: bold;
color: #333333;
line-height: 30px;
padding-left: 10px;
border-left: 4px solid #2494FF;
margin-left: 30px;
margin-top: 30px;
margin-bottom: 5px;
}
.dislog-table-title{
    

height: 22px;
font-size: 16px;
font-family: PingFang-SC-Bold, PingFang-SC;
font-weight: bold;
color: #999999;
margin-left: 44px;
line-height: 22px;
margin-bottom: 30px;
}
.openkf{
    height: 35px;
}
.leftnav{
    width: 292px;
    height: 311px;
    position: fixed;
    right: 20px;
    bottom: 200px;
    z-index: 999;
}
.nav{
    width: 52px;
    height: 160px;
    background: #2494FF;
    text-align: center;
    position: absolute;
    right: 0;
    top: 0;
}

.icon-ly{
    width: 26px;
    height: 26px;
    margin-top: 12px;
}
.nav-contart{
    width: 20px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    margin-left: 15px;
    margin-top: 5px;
    line-height: 22px;
    
}
.backtop{
    position: absolute;
    right: 0;
    top: 170px;
    width: 52px;
height: 52px;
background: #999;
border-radius: 6px;

text-align: center;
}
.backtop img{
  width: 22px;
  height: 22px;
  margin-top: 15px;
}
.hover-show{
    width: 220px;
height: 311px;
display: none;
display: none;
background: #FFFFFF;
box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
border-radius: 8px;
display: none;
}

.hover-show ul{
   padding-top: 20px;

}
.hover-show ul li{
    width: 180px;
    margin: 0 auto;
    clear: both;
    padding-bottom: 15px;
}
.left-icon{
    float: left;
    width: 20px;
    height: 20px;
}
.right-hover{
    float: left;
    margin-left: 14px;
}
.right-hover-text{
    
height: 22px;
font-size: 16px;
font-family: PingFang-SC-Bold, PingFang-SC;
font-weight: bold;
color: #666666;
line-height: 22px;
}
.right-hover-title{
    width: 144px;
    font-size: 14px;
    
font-family: PingFang-SC-Bold, PingFang-SC;
font-weight: bold;
color: #999999;
margin-bottom: 15px;
}
.active{
    color: #2494FF;
}
.right-hover-address{
    font-size: 12px;
}
.btn{
    clear: both;
    width: 180px;
height: 36px;
background: #2494FF;
border-radius: 4px;

font-size: 14px;
font-family: PingFang-SC-Bold, PingFang-SC;
font-weight: bold;
color: #FFFFFF !important;
line-height:36px;
text-align: center;
margin: 0 auto;
}
.dislog-kf{
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -160px;
    margin-top: -160px;
    width: 320px;
height: 320px;
background: #FFFFFF;
box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
border-radius: 12px;

}
.kf-img{
    position: absolute;
    width: 92px;
    height: 92px;
    left: 114px;
    top: -46px;
}
.kf-text{
    text-align: center;
height: 25px;
font-size: 18px;
font-family: PingFang-SC-Bold, PingFang-SC;
font-weight: bold;
color: #333333;
line-height: 25px;
margin-top: 51px;
margin-bottom: 5px;
}
.kf-title{
    width: 240px;
    text-align: center;
font-size: 12px;
font-family: PingFang-SC-Medium, PingFang-SC;
font-weight: 500;
color: #999999;
line-height: 17px;
margin:  0 auto;
}
.kf-erm{
    width: 184px;
    height: 184px;
    margin: 0 auto;
    display: block;
    margin-top: 3px;
}
.kf-close{
    position: absolute;
    right: 15px;
    top: 15px;
    width: 12px;
    height: 12px;
}
.dislog-table{
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -300px;
    margin-left: -340px;
    width: 676px;
height: 597px;
background: #FFFFFF;
box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
border-radius: 12px;
z-index: 999;
}
</style>
