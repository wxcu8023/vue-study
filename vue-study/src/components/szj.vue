<template>
    <button v-on:click="sz('+')">+</button>
</template>

<script>
export default {
    name: 'HelloWorld2',
    props: {
        msg: String
    },
    methods:{
        sz:function(e){
            this.$emit("listenToChildEvent",e);
            console.log(e)
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
button{
  width:60px;
  height:38px;
  line-height:38px;
  text-align:center;
  background-color:var(--btnBColor);
  border:1px solid var(--btnBRcolor);
  font-size:20px;
}

</style>
