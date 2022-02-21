<template>
  <div class="login-page">
    <h3>INSTAGRAM<span>CLONE</span></h3>
    <div class="form-group">
      <input type="text" name="" v-model="email" id="" placeholder="Email" />
      <input
        type="password"
        name=""
        v-model="password"
        id=""
        placeholder="Password"
      />
      <button class="login-btn">Log in</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  flex-direction: column;
  padding: 25px;

  h3 {
    color: #171717;
    font-size: 28px;
    text-align: center;
    font-weight: 900;
    span {
      font-weight: 300;
    }
  }

  .form-group {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-flow: column;

    input {
      width: 100%;
      height: 30px;
      border: 1px solid #ddd;
      margin-bottom: 15px;
      text-indent: 5px;
      background-color: #eee;
      border-radius: 5px;
      outline: none;

      &:focus {
        border: 1px solid #aaa;
      }
    }
  }
  button {
    width: 100%;
    height: 30px;
    background-color: #ffce00;
    border-radius: 5px;
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;

    color: #171717;
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
