<template>
  <div id="app">
    <div class="header-container">
      <div id="navigation">
        <li type="none">
          
        </li>
      </div>
    </div>
    <router-view />
    <footer id="site-footer">
      <div class="footer-left">
        <p class="lh"><a href="#">用户反馈</a></p>
        <p class="lh"><a href="#">帮助</a></p>
        <p class="lh"><a href="#">API</a></p>
        <p class="lh"><a href="#">关于我们</a></p>
        <p class="lh"><a href="#">感谢</a></p>
        <p class="lh"><a href="#">粤ICP备15111xxx号-1</a></p>
      </div>
    </footer>
  </div>
</template>

<style lang="css">
html,
body,
#app {
  height: 100%;
}
#navigation{

}
.header-container {
 }
.header-a {
  color: #66ccff;
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  margin: 12px;
}
.header-a:hover {
  color: #3bd6ff;
}
.header-a:active {
  color: #53fffb;
}
#full-url {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
#site-footer {
  min-width: 100%;
  height: 35px;
  margin-top: -35px;
  z-index: 10;
  overflow: hidden;
  /* background-color: #333; */
  background-color: rgba(13, 13, 13, 0.7);
  display: flex;
  align-items: center;
}
#site-footer a {
  font-size: 14px;
  text-decoration: none;
  color: #666;
  margin: 5px;
  display: inline-block;
}
#site-footer a:hover {
  font-size: 14px;
  text-decoration: none;
  color: #999;
  margin: 5px;
  display: inline-block;
}

.lh {
  display: inline-block;
}
</style>
