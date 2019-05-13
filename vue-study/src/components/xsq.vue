<template>
    <p class="jsqxsq" v-on:click="ccc">{{msg}}</p>
</template>

<script>
export default {
    name: 'HelloWorld4',
    props: ["msg"],
    data(){
        return{
            sss:'',
            result:''
        }
    },
    methods:{
        ccc:function(e){
            console.log(this.msg)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
:root {
  --mainColor:red;
  --onewidth:100%;
  --oneheight:500px;
  --boxBgColor:#ccc;
  --btnBColor:#fff;
  --btnBRcolor:#ccc;
  --pJbColor1:#fff;
  --pJbcolor2:color(#000 alpha(50%));
  --PColor:#000;
}
body {
  color: var(--mainColor);
  font-family: system-ui;
  overflow-wrap: break-word;
  background:--mainColor;
}
p{
  color:var(--PColor);
  width:100%;
  height:40px;
  line-height:40px;
  font-size:22px;
  font-weight:bold;
  text-align:right;
  padding:0;
  margin:0;
  background:linear-gradient(to left,var(--pJbColor1), var(--pJbcolor2));
  margin-bottom:5px;
}
</style>
