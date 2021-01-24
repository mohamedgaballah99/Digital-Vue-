<template>
  <div class="navbar2">
    <div class="container">
      <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand" href="#">
          <img src="../assets/images/main_logo.png" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <router-link tag="li" to="/"
              ><a class="nav-link" href="Home.vue">Home</a></router-link
            >
            <router-link tag="li" to="/About"
              ><a class="nav-link" href="About.vue">About</a></router-link
            >
            <router-link tag="li" to="/Services"
              ><a class="nav-link" href="Services.vue">Services</a></router-link
            >
            <router-link tag="li" to="/Contact"
              ><a class="nav-link" href="Contact.vue">Contact</a></router-link
            >
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style lang="scss" scoped>
.navbar2 {
  background-color: #d2d2d2;
  nav {
    padding-top: 20px;
    .navbar-collapse {
      justify-content: flex-end;
      a {
        margin-right: 30px;
        transition: 0.5s all;
        color: #272f43;
        &:hover{
          color: #f23f3f;
        }
      }
    }
    button{
      background-color: #272f43;
      
      span{
        background-color: white !important;
        border-radius: 10px;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .navbar-brand{
    img{
      width: 160px;
    }
  }
  .navbar-toggler {
    padding: .25rem .50rem;
    font-size: 1rem;
  }
}
</style>
