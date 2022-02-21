<template>
  <div class="login-page">
    <header>
      <h3>INSTAGRAM<span>CLONE</span></h3>
      <h4>Login</h4>
    </header>
    <main class="form-group">
      <input type="text" name="" v-model="email" id="" placeholder="Email" />
      <input
        type="password"
        name=""
        v-model="password"
        id=""
        placeholder="Password"
      />
      <button class="login-btn">Log in</button>
    </main>
    <footer>
      <p>
        Don't have an account?
        <router-link to="/register" class="link">Sign up</router-link>.
      </p>
    </footer>
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
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;

  header {
    h3 {
      color: #171717;
      font-size: 28px;
      text-align: center;
      font-weight: 900;
      span {
        font-weight: 300;
      }
    }

    h4 {
      color: #888;
      font-size: 24px;
      text-align: center;
      font-weight: 300;
      margin: 0;
      padding: 0;
    }
  }

  .form-group {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    padding: 25px;

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

  footer {
    width: 100%;
    height: 20px;
    background-color: #eee;
    padding: 15px 25px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.2);

    p {
      color: #aaa;
      margin: 0px;
      padding: 0px;
      font-size: 16px;
      text-align: center;
    }

    .link {
      color: #e35205;
      font-weight: 700;
      text-decoration: none;
    }
  }
}
</style>
