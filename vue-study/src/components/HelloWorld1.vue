<template>
    <div class="hello">
        <div class="jsqbox1">
        <div class="jsq1">
          <p class="jsqxsq">0</p>
          <button>CE</button>
          <button>C</button>
          <button>←</button>
          <button>÷</button>
          <button v-on:click="sz(1)">7</button>
          <button v-on:click="sz(1)">8</button>
          <button v-on:click="sz(1)">9</button>
          <button v-on:click="sz(1)">X</button>
          <button v-on:click="sz(1)">4</button>
          <button v-on:click="sz(1)">5</button>
          <button v-on:click="sz(1)">6</button>
          <button v-on:click="sz(1)">-</button>
          <button v-on:click="sz(1)">1</button>
          <button v-on:click="sz(1)">2</button>
          <button v-on:click="sz(1)">3</button>
          <button v-on:click="sz(1)">+</button>
          <button>±</button>
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld1',
    props: {
        msg: String
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
.jsqbox1{
  width:var(--onewidth);
  height:var(--oneheight);
  display: flex;
  justify-content: center;
  align-items:center
}
.jsq1{
  width:240px;
  height:240px;
  background:var(--boxBgColor);
  overflow: hidden;
}
 
.jsq1 button{
  width:60px;
  height:38px;
  line-height:38px;
  text-align:center;
  background-color:var(--btnBColor);
  border:1px solid var(--btnBRcolor);
  font-size:20px;
}
 
.jsq1 p{
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
