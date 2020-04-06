<template>
  <div id="container">
    <section class="w3l-errorpage">
      <div class="site-header"></div>
      <div class="error500">
        <div class="wrapper">
          <div class="logo-brand">
            <h1>
              <a class="brand-logo-text" href="/"
                ><div class="position-head">抱歉，服务器出错</div>
              </a>
            </h1>
          </div>
        </div>
        <div class="wrapper">
          <div class="midle-page">
            <section class="error-container">
              500
            </section>
            <h1>Internal Server Error</h1>
            <p class="zoom-area para">
              我们这边出了点问题...
            </p>

            <a href="/" class="more-link">返回首页</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "InternalServerError"
};
</script>
<style scoped>
@font-face {
  font-weight: normal;
  font-style: normal;
}

:root {
  --bg-main-color: #fafafa;
  --bg-sub-color: #f7f7f7;
  --heading-main-color: #000;
  --title-main-color: #222;
  --title-super-color: #ff0000;
  --title-sub-color: #444;
  --para-main-color: #777;
  --button-bg-color: #4a4a4a;
}

html {
  scroll-behavior: smooth;
}

body,
html {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

* {
  box-sizing: border-box;
}

body a {
  cursor: pointer !important;
}

.wrapper {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .wrapper {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .wrapper {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .wrapper {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .wrapper {
    max-width: 1140px;
  }
}

a {
  text-decoration: none;
}

p,
a,
span {
  font-family: "Source Serif Pro", serif;
  margin: 0;
  padding: 0;
}

h1 {
  margin: 0;
  padding: 0;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
}

h1 {
  font-weight: 600;
}

a,
a:hover {
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -khtml-border-radius: 4px;
  transition: 0.3s ease;
  -webkit-transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  -o-transition: 0.3s ease;
}
h1 a.brand-logo-text {
  color: #fff;
  font-weight: 600;
  font-size: 40px;
  line-height: 55px;
  margin-bottom: 20px;
  display: inline-block;
  font-family: "Quicksand", sans-serif;
}
.logo-brand {
  max-width: 500px;
  margin: 0px 0px 0px auto;
  text-align: left;
}
.position-head {
  position: relative;
  display: inline;
  margin-left: 20px;
}

p.para {
  font-size: 16px;
  line-height: 25px;
  color: var(--para-main-color);
}

@media all and (max-width: 441px) {
  .wrapper {
    width: 100%;
    padding: 0 16px;
  }
}
.w3l-errorpage .error-container {
  font-size: 120px;
  line-height: 130px;
  font-weight: 800;
  margin: 0px 0px 40px;
}
.w3l-errorpage .error500 {
  background: url(../../assets/common/background.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  z-index: 1;
  display: grid;
  /*!*position: relative;*! 加上会导致底栏消失*/
  align-items: center;
  min-height: 100vh;
  padding: 40px 0px;
}
.w3l-errorpage .error-container > span {
  display: inline-block;
  line-height: 0.7;
  position: relative;
  color: #3be8b0;
}
.w3l-errorpage .error-container > span > span {
  display: inline-block;
  position: relative;
}
.w3l-errorpage .error-container > span:nth-of-type(1) {
  perspective: 800px;
  perspective-origin: 50% 50%;
  color: #39eafd;
}
.w3l-errorpage .error-container > span:nth-of-type(1) > span {
  transform: rotate(0);
  -webkit-animation: easyoutelastic 10s infinite;
  animation: easyoutelastic 10s infinite;
  transition-delay: 3s;
}
.w3l-errorpage .error-container > span:nth-of-type(3) {
  perspective: 800px;
  perspective-origin: 50% 50%;
  color: #ee70a6;
}
.w3l-errorpage .error-container > span:nth-of-type(3) > span {
  transform: rotate(0);
  -webkit-animation: easyoutelastic 10s infinite;
  animation: easyoutelastic 10s infinite;
  transition-delay: 3s;
}

@-webkit-keyframes easyoutelastic {
  0% {
    transform: rotateX(0deg);
  }
  9% {
    transform: rotateX(0deg);
  }
  13% {
    transform: rotateX(180deg);
  }
  16% {
    transform: rotateX(180deg);
  }
  18% {
    transform: rotateX(170deg);
  }
  20% {
    transform: rotateX(200deg);
  }
  60% {
    transform: rotateX(150deg);
  }
  80% {
    transform: rotateX(210deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes easyoutelastic {
  0% {
    transform: rotateX(0deg);
  }
  9% {
    transform: rotateX(0deg);
  }
  13% {
    transform: rotateX(180deg);
  }
  16% {
    transform: rotateX(180deg);
  }
  18% {
    transform: rotateX(170deg);
  }
  20% {
    transform: rotateX(200deg);
  }
  60% {
    transform: rotateX(150deg);
  }
  80% {
    transform: rotateX(210deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
.w3l-errorpage * {
  box-sizing: border-box;
}
.w3l-errorpage .zoom-area {
  margin: 15px auto 15px;
}
.w3l-errorpage a.more-link {
  text-transform: capitalize;
  font-size: 13px;
  background-color: #0a0a0a;
  padding: 10px 15px;
  color: #fff;
  display: inline-block;
  line-height: 1.5;
  text-decoration: none;
  letter-spacing: 1px;
  margin-top: 30px;
}
.w3l-errorpage a.more-link:hover {
  background-color: deepskyblue;
}
.w3l-errorpage .error500 h1 {
  font-size: 40px;
  line-height: 50px;
}
.w3l-errorpage .midle-page {
  max-width: 500px;
  margin: 0px 0px 0px auto;
  background: #f9f9f9;
  padding: 40px 40px;
}
</style>
