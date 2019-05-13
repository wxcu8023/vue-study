<template>
    <div class="ButtonDiv">
        <button v-on:click="sz(showTxt)" v-text="showTxt"></button>
    </div>
</template>
<script>
export default {
    name: 'numberStyle',
    props: {
        showTxt: String,

    },
    methods:{
        sz:function(e){
            this.$emit("listenToChildEvent",e);
        }
    }
}
</script>
<style scoped>
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
.ButtonDiv{
    float: left;
}
button{
  width:60px;
  height:38px;
  line-height:38px;
  text-align:center;
  background-color:var(--btnBColor);
  border:1px solid var(--btnBRcolor);
  font-size:20px;
}
button:active{
    background-color:#000
}

</style>