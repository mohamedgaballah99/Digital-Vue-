<template>
  <div class="header">
    <div id="demo" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      <!-- The slideshow -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/images/slider_1.jpg" />
          <div class="carousel-caption">
            <p>GROW YOUR BUSINESS</p>
            <h1>DIGITAL</h1>
            <h2>Marketing</h2>
            <img src="@/assets/images/icon_4.png" />
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/images/slider_1.jpg" />
          <div class="carousel-caption">
            <p>GROW YOUR BUSINESS</p>
            <h1>DIGITAL</h1>
            <h2>Marketing</h2>
            <img src="@/assets/images/icon_4.png" />
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/images/slider_1.jpg" />
          <div class="carousel-caption">
            <p>GROW YOUR BUSINESS</p>
            <h1>DIGITAL</h1>
            <h2>Marketing</h2>
            <img src="@/assets/images/icon_4.png" />
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "header",
};
</script>

<style lang="scss" scoped>
@keyframes up {
  0% {
    transform: scale(1.03);
  }
  50% {
    transform: scale(0.96);
  }
  100% {
    transform: scale(1.03);
  }
}
.header {
  position: relative;
 
  .carousel-inner {
    width: 100%;
    img {
      width: 100%;
    }
    .carousel-caption {
      color: #272f43;
      right: 67%;
      bottom: 60px;
      left: 100px;
      img {
        width: 100px;
        animation: up 2s infinite;
      }
      p {
        font-size: 25px;
      }
      h1 {
        font-weight: bold;
        font-size: 100px;
      }
      h2 {
        font-weight: bold;
        font-size: 70px;
        text-transform: uppercase;
      }
    }
  }

  .carousel-indicators {
    li {
      border-radius: 50%;
      height: 20px;
      background-color: #fc301e;
    }
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .carousel-caption {
    display: none;
  }
  .carousel-indicators {
    bottom: -17px;
    li {
      height: 5px !important;
    }
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .carousel-caption {
      color: #272f43;
      right: 67%;
      top:60px  !important;
      bottom: 0px !important;
      left: 70px !important;
      img {
        width: 50px !important;
        animation: up 2s infinite;
      }
      p {
        font-size: 15px !important;
        font-weight: bold !important;
      }
      h1 {
        font-weight: bold;
        font-size: 55px !important;
      }
      h2 {
        font-weight: bold;
        font-size: 40px !important;
        text-transform: uppercase;
      }
    }
  .carousel-indicators {
    bottom: -15px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
   .carousel-caption {
      color: #272f43;
      right: 67%;
      top:60px  !important;
      bottom: 0px !important;
      left:50px !important;
      img {
        width:70px !important;
        animation: up 2s infinite;
      }
      p {
        font-size: 23px !important;
        font-weight: bold !important;
      }
      h1 {
        font-weight: bold;
        font-size: 100px !important;
      }
      h2 {
        font-weight: bold;
        font-size: 70px !important;
        text-transform: uppercase;
      }
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .carousel-caption {
      color: #272f43;
      right: 67%;
      top:100px  !important;
      bottom: 0px !important;
      left:100px !important;
      img {
        width:70px !important;
        animation: up 2s infinite;
      }
      p {
        font-size: 23px !important;
        font-weight: bold !important;
      }
      h1 {
        font-weight: bold;
        font-size: 100px !important;
      }
      h2 {
        font-weight: bold;
        font-size: 70px !important;
        text-transform: uppercase;
      }
    }
}
</style>
