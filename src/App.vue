<template>
  <div id="app">
    <router-view />
    <footer id="site-footer">
      <div id="footer-left">
        <p class="lh"><a href="#">关于我们</a></p>
        <p class="lh"><a href="#">用户反馈</a></p>
        <p class="lh"><a href="#">友情链接:</a></p>
        <p class="lh"><a href="/">MiniURL</a></p>
      </div>
      <div id="footer-right">
        <p class="lh"><a>“</a><a id="jinrishici-sentence" href="http://www.jinrishici.com" target="view_window">正在加载今日诗词....</a><a>”</a></p>
        <p class="lh"><a href="#"> 粤ICP备15111xxx号-1</a></p>
      </div>
    </footer>
  </div>
</template>

<style lang="css">
html,
body,
#app {
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
}
#navigation{

}
.header-container {
 }
.site-header{
  height: 40px;
  background: linear-gradient(rgba(0, 0, 0, 0.23), transparent);
  width: 100%;
  position: absolute;  /*不加和404冲突*/
  /*display: flex;*/
  /*justify-content: space-between;*/
  /*flex-direction: row;*/
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
  display: flex;
  justify-content: space-between;
  flex-direction:row;
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
#footer-left{
}
#footer-right{
}
.lh {
  display: inline-block;
}
</style>
