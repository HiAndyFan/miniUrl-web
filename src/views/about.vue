<template>
  <div class="container">
    <div id="content" class="flex-center">
      <div id="main-area">
        <div id="UDMiddle">
          <img id="logo" src="@/assets/common/logo2.gif" />
          <div id="introduce">
            这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
html,
.container {
  height: 100%;
  margin: 0;
  padding: 0;
}
.container {
  background-image: url(../assets/common/background.jpg);
  background-position: center top;
  background-size: cover;
  background-attachment: fixed;
}
.flex-center {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* justify-content: space-between; */
  align-items: center;
}

.el-form-item label {
  margin-top: 5px;
}
#content {
  min-height: 100%;
}
#main-area {
  width: 700px;
  height: 200px;
  background-color: white;
  /*background: rgba(255, 255, 255, 0.5);*/
  /*border-radius: 15px;*/
  /*box-shadow: 3px 3px 5px #666;*/
  margin: 0 auto;
}
#UDMiddle {
  margin: 0 auto; /*水平居中*/
  position: relative; /*脱离文档流*/
  top: 50%; /*偏移*/
  transform: translateY(-50%);
  background-color: black;
  width: 80%;
}
#logo {
  width: 120px;
  height: 120px;
  float: left;
  position: relative;
}
#introduce {
  width: 60%;
  float: left;
  position: relative;
  height: 120px;
}
</style>
