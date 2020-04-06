<template>
  <div class="container">
    <div class="header-container">
      <div class="site-header">
        <div id="reg-and-login">
          <li type="none" v-if="!hasUserInfo">
            <a class="header-a" href="#" @click="dialogLoginVisible = true"
              >登陆</a
            >
            <a
              class="header-a"
              href="#"
              @click="dialogRegisterVisible = true"
              v-on:click="goReg"
              >注册</a
            >
          </li>
          <el-dropdown @command="userInfoCommand" v-else>
            <span class="header-a">
              欢迎, {{ userInfo.username
              }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item disabled
                >邮箱：{{ userInfo.email }}</el-dropdown-item
              >
              <el-dropdown-item disabled
                >用户ID：{{ userInfo.userid }}</el-dropdown-item
              >
              <el-dropdown-item command="urlRecord"
                >创建次数：{{ userInfo.urlnum }}</el-dropdown-item
              >
              <el-dropdown-item disabled
                >用户等级：{{ userInfo.userclass }}</el-dropdown-item
              >
              <el-dropdown-item divided command="logout"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <el-dialog
        title="登录"
        :visible.sync="dialogLoginVisible"
        width="380px"
        center
      >
        <el-form
          :model="form"
          :rules="rules"
          label-position="left"
          size="large"
          :label-width="formLabelWidth"
        >
          <el-form-item label="邮箱">
            <el-input v-model="form.mail" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              type="password"
              v-model="form.password"
              autocomplete="off"
              @keyup.enter.native="login"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogLoginVisible = false">取 消</el-button>
          <el-button type="primary" @click="login">登 录</el-button>
        </div>
      </el-dialog>
      <el-dialog
        title="注册"
        :visible.sync="dialogRegisterVisible"
        width="380px"
        center
      >
        <el-form
          :model="form"
          :rules="rules"
          label-position="left"
          size="large"
          :label-width="formLabelWidth"
        >
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="form.username"
              autocomplete="off"
              placeholder="最长6个字符"
            ></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="mail">
            <el-input
              v-model="form.mail"
              autocomplete="off"
              placeholder="唯一凭证"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="form.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirm">
            <el-input
              type="password"
              v-model="form.confirm"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="regvalidatecode">
            <el-input
              type="password"
              v-model="form.regvalidatecode"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <div id="regvalidatecodeImgDiv">
            <img
              id="regvalidatecodeImg"
              height="50px"
              width="200px"
              v-on:click="goReg"
            />
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogRegisterVisible = false">取 消</el-button>
          <el-button type="primary" @click="resister">注 册</el-button>
        </div>
      </el-dialog>
    </div>
    <div id="content" class="flex-center">
      <div id="main-area">
        <div class="flex-center">
          <img
            id="logo"
            class="animated bounce"
            src="@/assets/common/logo2.gif"
          />
        </div>
        <div id="div-input" class="flex-center">
          <el-input
            placeholder="请输入网址"
            v-model="input"
            id="full-url"
            @keyup.enter.native="onSubmit"
            clearable
            autofocus
          >
          </el-input>
          <el-button type="primary" slot="append" id="submit" @click="onSubmit">
            创建短链</el-button
          >
        </div>
        <div class="more-opt">
          <label class="el-form-item__label"
            >自定义短码
            <el-tooltip
              class="item"
              effect="dark"
              content="登录后可用"
              placement="bottom"
              v-if="!hasUserInfo"
            >
              <el-input
                id="te_inputN"
                class="midinput"
                :disabled="true"
                placeholder="5字母"
              ></el-input>
            </el-tooltip>
            <el-input
              v-else
              id="te_input"
              class="midinput"
              v-model="cusID"
              placeholder="5字母"
            ></el-input>
          </label>
          <label class="el-form-item__label"
            >短链生命
            <el-tooltip
              class="item"
              effect="dark"
              content="短链接的有效期, 未登录用户最长7天, 登录用户可设置为0, 短链接永久有效"
              placement="bottom-start"
            >
              <i class="el-icon-warning-outline"></i>
            </el-tooltip>
            <el-input
              class="te_input2 smallinput"
              v-model="ttl"
              v-if="!hasUserInfo"
              @input="only7($event)"
            ></el-input>
            <el-input
              class="te_input2 smallinput"
              v-model="ttl"
              v-else
            ></el-input>
            天
          </label>
        </div>
      </div>
    </div>
    <el-dialog
      title="注册成功，请验证邮箱"
      :visible.sync="emailDialogVisible"
      width="30%"
      center
    >
      <i class="el-icon-success"></i>
      <a :href="urlToLoginEmail">点我去登录邮箱</a>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="emailDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="生成短链接"
      :visible.sync="createURLDialogVisible"
      width="40%"
      center
    >
      结果：
      <div id="URLresult">{{ URLresult }}</div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="createURLDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-drawer
      title="创建记录"
      :visible.sync="userRecordDrawerShow"
      direction="rtl"
      size="60%"
      :with-header="false"
    >
      <h1 id="userRecordDrawerTitle">创建记录</h1>
      <el-table
        :data="userUrlRecord"
        style="width: 100%"
        stripe
        v-el-table-infinite-scroll="getUserUrlRecord"
        height="80%"
      >
        <el-table-column
          property="createdTime"
          label="日期"
          width="150"
          fixed
        ></el-table-column>
        <el-table-column
          property="idTtl"
          label="生命（天）"
          width="150"
        ></el-table-column>
        <el-table-column
          property="resourseId"
          label="短链"
          width="150"
        ></el-table-column>
        <el-table-column property="originalUrl" label="原链"></el-table-column>
      </el-table>
    </el-drawer>
  </div>
</template>

<script>
import elTableInfiniteScroll from "el-table-infinite-scroll";
export default {
  directives: {
    "el-table-infinite-scroll": elTableInfiniteScroll
  },
  name: "home",
  data: function() {
    var confirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      hasUserInfo: false,
      userToken: "",
      userInfo: {
        userid: "",
        email: "",
        username: "",
        userclass: "",
        urlnum: 0,
        createTime: ""
      },

      input: "",
      ttl: 7,
      cusID: "",

      userUrlRecord: [],
      pageSize: 30,
      currentPage: 1,
      firstGet: true,

      userRecordDrawerShow: false,
      dialogRegisterVisible: false,
      dialogLoginVisible: false,
      emailDialogVisible: false,
      urlToLoginEmail: "",
      createURLDialogVisible: false,
      formLabelWidth: "80px",
      URLresult: "",
      form: {
        username: "",
        mail: "",
        password: "",
        confirm: "",
        regvalidatecode: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 1, max: 6, message: "长度在 6 个字符之内", trigger: "blur" }
        ],
        mail: [
          {
            type: "email",
            required: true,
            message: "请输入正确的邮箱地址",
            trigger: "change"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          {
            min: 6,
            max: 32,
            message: "密码长度在 6 到 32 个字符之间",
            trigger: "blur"
          }
        ],
        confirm: [
          { required: true, validator: confirmPass, trigger: "change" }
        ],
        regvalidatecode: [{ required: true, message: "验证码是必填项" }]
      }
    };
  },
  created() {
    //console.log("可以:"+this.$store.state.userToken)
    let that = this;
    if (this.$store.state.userToken !== "") {
      this.userToken = this.$store.state.userToken;
      this.$axios
        .post(
          "/user/getinfo",
          { token: this.userToken },
          { headers: { "Content-Type": "application/json" } }
        )
        .then(function(response) {
          that.hasUserInfo = true;
          that.userInfo = response.data.data;
        });
    }
  },
  methods: {
    onSubmit() {
      // console.log(this.$data.input.split('/')[2])
      // console.log(window.location.host)
      if (this.$data.input.split("/")[2] === window.location.host) {
        this.$data.input = "禁止套娃！";
        return;
      } else if (this.$data.input === "禁止套娃！") {
        return;
      }
      if (this.$data.input.length === 0) {
        return;
      }
      if (
        (this.$data.input.length !== 0) &
        (this.$data.input.indexOf(".") === -1)
      ) {
        self.location.href = "http://baidu.com/s?wd=" + this.$data.input;
        return;
      }
      let that = this;
      let qs = require("qs");
      if (!this.hasUserInfo) {
        if (this.$data.ttl > 7) {
          this.$data.ttl = 7;
        }
        this.$axios
          .post(
            "/createURL",
            qs.stringify({
              original_url: this.$data.input,
              id_ttl: this.$data.ttl
            })
          )
          .then(function(response) {
            // that.createURLDialogVisible = true;
            that.URLresult = response.data.data.result_url;
            that.$data.input = response.data.data.result_url;
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        this.$axios
          .post(
            "/createURL",
            qs.stringify({
              token: this.userToken,
              original_url: this.$data.input,
              resource_id: this.$data.cusID,
              id_ttl: this.$data.ttl
            })
          )
          .then(function(response) {
            // that.createURLDialogVisible = true;
            that.URLresult = response.data.data.result_url;
            that.$data.input = response.data.data.result_url;
            that.$axios
              .post(
                "/user/getinfo",
                { token: that.userToken },
                { headers: { "Content-Type": "application/json" } }
              )
              .then(function(response) {
                //console.log(response.data.data)
                if (response.data.code === "ok") {
                  that.userInfo = response.data.data;
                } else {
                  that.$message({
                    message: response.data.message,
                    type: "error"
                  });
                }
              });
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    goReg() {
      this.$axios
        .get("user/register/regvalidatecode", { responseType: "blob" })
        .then(function(response) {
          document.getElementById(
            "regvalidatecodeImg"
          ).src = URL.createObjectURL(response.data);
        });
    },
    resister() {
      var that = this;
      this.$axios
        .post("/user/register", {
          username: this.form.username,
          email: this.form.mail,
          password: this.form.password,
          validateCode: this.form.regvalidatecode
        })
        .then(function(response) {
          console.log(response.data);
          if (response.data.code === "ok") {
            that.dialogRegisterVisible = false;
            that.emailDialogVisible = true;
            that.urlToLoginEmail = response.data.data.urlToLoginEmail;
            that.$message({
              message: response.data.message,
              type: "success"
            });
          } else {
            that.$message({
              message: response.data.message,
              type: "error"
            });
          }
        })
        .catch(function(error) {
          console.log("网页错误:" + error);
        });
    },
    login() {
      let that = this;
      this.$axios
        .post(
          "/user/login",
          {
            email: this.form.mail,
            password: this.form.password
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then(function(response) {
          //console.log(response.data.data);
          if (response.data.code === "ok") {
            that.userToken = response.data.data.token;
            //console.log(that.userToken)
            that.$axios
              .post(
                "/user/getinfo",
                { token: that.userToken },
                { headers: { "Content-Type": "application/json" } }
              )
              .then(function(response) {
                //console.log(response.data.data)
                if (response.data.code === "ok") {
                  that.userInfo = response.data.data;
                  that.hasUserInfo = true;
                  that.$store.commit("setuserToken", that.userToken);
                  that.dialogLoginVisible = false;
                  that.$message({
                    message: "欢迎回来！ " + response.data.data.username,
                    type: "success"
                  });
                } else {
                  that.$message({
                    message: response.data.message,
                    type: "error"
                  });
                }
              });
          } else {
            that.$message({
              message: response.data.message,
              type: "error"
            });
          }
        })
        .catch(function(error) {
          console.log("网页错误:" + error);
        });
    },

    userInfoCommand(command) {
      switch (command) {
        case "logout": {
          console.log("拜拜");
          this.hasUserInfo = false;
          this.userToken = "";
          for (let i in this.userInfo) {
            this.userInfo[i] = "";
          }
          this.$store.commit("setuserToken", "");
          break;
        }
        case "urlRecord": {
          this.currentPage = 1;
          this.getUserUrlRecord();
          this.userRecordDrawerShow = true;
          console.log(this.userUrlRecord);
          break;
        }
      }
    },
    only7(e) {
      console.log(e % 10);
      if (e % 10 <= 7 && e % 10 >= 1) {
        this.ttl = e % 10;
      }
      if (this.ttl > 7) {
        this.ttl = 7;
      } else if (this.ttl < 1) {
        this.ttl = 1;
      }
    },
    getUserUrlRecord() {
      let that = this;
      if (this.firstGet) {
        this.$axios
          .get(
            "/user/geturlrecord?token=" +
              this.userToken +
              "&currentPage=" +
              this.currentPage +
              "&pageSize=" +
              this.pageSize
          )
          .then(function(response) {
            if (response.data.code === "ok") {
              //that.userUrlRecord = response.data.data;
              let buffer = response.data.data;
              for (let i in buffer) {
                buffer[i].resourseId =
                  window.location.host + "/" + buffer[i].resourseId;
              }
              that.userUrlRecord = that.userUrlRecord.concat(buffer);
            } else {
              that.$message({
                message: response.data.message,
                type: "error"
              });
            }
          });
        this.firstGet = false;
      }
      if (that.currentPage * that.pageSize < that.userInfo.urlnum) {
        that.currentPage++;

        this.$axios
          .get(
            "/user/geturlrecord?token=" +
              this.userToken +
              "&currentPage=" +
              this.currentPage +
              "&pageSize=" +
              this.pageSize
          )
          .then(function(response) {
            if (response.data.code === "ok") {
              //that.userUrlRecord = response.data.data;
              let buffer = response.data.data;
              for (let i in buffer) {
                buffer[i].resourseId =
                  window.location.host + "/" + buffer[i].resourseId;
              }
              that.userUrlRecord = that.userUrlRecord.concat(buffer);
            } else {
              that.$message({
                message: response.data.message,
                type: "error"
              });
            }
          });
      }
    }
  }
};
</script>

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

#reg-and-login {
  float: right;
  height: 40px;
  display: flex;
  align-items: center;
  /*position: absolute;*/
  z-index: 10;
  overflow: hidden;
  flex-direction: row-reverse;
  /* box-shadow: 0px 0px 5px #444; */
}
.el-form-item label {
  margin-top: 5px;
}

#content {
  min-height: 100%;
}
#main-area {
  width: 700px;
  height: 400px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  box-shadow: 3px 3px 5px #666;
  padding-bottom: 35px;
  margin: 0 auto;
}
#logo {
  width: 180px;
  height: 180px;
  margin: 60px;
  margin-top: 50px;
}
#div-input {
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-wrap: nowrap;
}

#submit {
  height: 40px;
  /* background-color: #67c23a; */
  border: 0px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
#submit:hover {
  /* background-color: #85ce61; */
}
.smallinput {
  max-width: 80px;
}
.midinput {
  max-width: 80px;
}
.more-opt {
  padding-left: 100px;
}
.el-form-item__label {
  margin-top: 10px;
  padding-left: -30px;
  margin-right: 30px;
}

#URLresult {
  font-size: 22px;
  background-color: #fad8b9;
  border-radius: 8px;
}
#recordTitle {
  text-align: center;
}
#regvalidatecodeImgDiv {
  margin-top: 10px;
  margin-left: 80px;
  text-align: center;
  width: auto;
}
#regvalidatecodeImg {
  border-radius: 5px;
}
#userRecordDrawerTitle {
  text-align: center;
}
</style>
