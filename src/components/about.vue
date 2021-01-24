<template>
  <div class="about">
    <div class="container">
      <h1>WHAT WE DO</h1>
      <!--  -->
      <div class="one">
        <div class="img">
          <img src="../assets/images/icon_1.png" />
        </div>
        <div class="info">
          <h2>LINK BUILDING</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content..
          </p>
        </div>
      </div>
      <!--  -->
      <div class="one">
        <div class="img">
          <img src="../assets/images/icon_2.png" />
        </div>
        <div class="info">
          <h2>MONTHLY SEO TASK</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content..
          </p>
        </div>
      </div>
      <!--  -->
      <div class="one">
        <div class="img">
          <img src="../assets/images/icon_3.png" />
        </div>
        <div class="info">
          <h2>ON PAGE SEO</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content..
          </p>
        </div>
      </div>
      <!--  -->
      <div class="one">
        <div class="img">
          <img src="../assets/images/icon_4.png" />
        </div>
        <div class="info">
          <h2>ONLINE MARKETING</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content..
          </p>
        </div>
      </div>

      <div class="client">
        <h4>INCREASE YOUR CLIENT FOR</h4>
        <h2>BETTER POSITION OF BUSINESS</h2>
        <div class=" text mx auto">
          <h3>Increase your client</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a pass
            <br /><br />
            age of Lorem Ipsum, you need to be sure there isn'There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn
          </p>
          <button>read more</button>
        </div>
        <div class=" img  mx auto">
          <img src="../assets/images/f1.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
};
</script>
<style lang="scss" scoped>
.about {
  background-color: #f6f6f6;
  .container {
    overflow: hidden;
    h1 {
      padding: 80px 0px;
    }
    .one {
      padding: 20px;
      box-shadow: 2px 2px 10px #cccccc;
      transition: 0.5s all;
      border: 1px solid #f23f3f;
      width: 24%;
      float: left;
      margin-right: 10px;
      &:hover {
        background-color: #f23f3f;
        color: white;
        border: 1px solid #272f43;
      }
      .img {
        width: 30%;
        margin: auto;
        img {
          width: 100%;
        }
      }
      .info {
        width: 100%;
        h2 {
          margin: 15px 0px;
          font-size: 20px;
        }
        p {
          line-height: 1.8;
        }
      }
    }
  
  .client {
    
    h4 {
      color: #fc301e;
    }
    h2 {
      color: #272f43;
      font-weight: bold;
      margin: 20px;
      padding-bottom: 50px;
    }
      
      .text {
        text-align: left;
        margin-right: 95px;
        width:40%;
        float: left;
        margin-bottom: 50px;
      h3 {
        margin-bottom: 40px;
        border-bottom: 1px solid #272f4391;
        padding-bottom: 10px;
      }
      P{
        line-height: 1.8;
        color: #272f43b9;
      }
    }
    .img {
      width: 40%;
      float: right;
      margin-bottom: 50px;
      img {
        width: 100%;
      }
    }
    button{
      border: none;
      padding: 20px 40px;
      margin-top: 20px;
      box-shadow: 0px 0px 15px #fc301e;
      border: 1px solid #fc301e;
      color: white;
      background-color: #272f43;
      text-transform: uppercase;
      transition: 0.5s all;
      &:hover{
        box-shadow: 0px 0px 15px #272f43;
     }
    }
    
  }
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .about {
    .container {
      h1 {
        padding: 40px 0px;
      }
      .one {
        width: 90%;
        margin: 25px auto;
        display: block;
        float: none;
      }
      .client{
          h4 {
      padding-top: 30px;
      font-size: 22px;
    }
    h2 {
      margin: 20px;
      padding-bottom: 10px;
      font-size: 24px;
    }
        .text{
          width: 85%;
        margin: 25px auto;
        display: block;
        float: none;  
        }
        .img{
          width: 85%;
        margin: 25px auto;
        display: block;
        float: none;
        }
        button{
      padding: 10px 20px;
      margin-top: 20px;
    }
      }
    }
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .about {
    .container {
      h1 {
        padding: 40px 0px;
      }
      .one {
        width: 40%;
        margin: 25px;
        margin-right: 44px;
        float: left;
        margin-bottom: 100px;
      }
      .client{
          h4 {
      padding-top: 30px;
      font-size: 22px;
    }
    h2 {
      margin: 20px;
      padding-bottom: 10px;
      font-size: 24px;
    }
        .text{
          width: 85%;
        margin: 25px auto;
        display: block;
        float: none;  
        }
        .img{
          width: 50%;
        margin: 25px auto;
        display: block;
        float: none;
        }
        button{
      padding: 10px 20px;
      margin-top: 20px;
    }
      }
    }
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .about {
    .container {
      h1 {
        padding: 40px 0px;
      }
      .one {
        width: 40%;
        margin: 25px;
        margin-right: 66px;
        float: left;
        margin-bottom: 100px;
      }
      .client {
    
    h4 {
      color: #fc301e;
    }
    h2 {
      color: #272f43;
      font-weight: bold;
      margin: 20px;
      padding-bottom: 50px;
    }
      
      .text {
        text-align: left;
        margin-right: 95px;
        width:40%;
        float: left;
        margin-bottom: 50px;
      h3 {
        margin-bottom: 40px;
        border-bottom: 1px solid #272f4391;
        padding-bottom: 10px;
      }
      P{
        line-height: 1.8;
        color: #272f43b9;
      }
    }
    .img {
      width: 40%;
      float: right;
      margin-bottom: 50px;
      img {
        width: 100%;
      }
    }
    button{
      border: none;
      padding: 20px 40px;
      margin-top: 20px;
      box-shadow: 0px 0px 15px #fc301e;
      border: 1px solid #fc301e;
      color: white;
      background-color: #272f43;
      text-transform: uppercase;
      transition: 0.5s all;
      &:hover{
        box-shadow: 0px 0px 15px #272f43;
     }
    }
      }
    }
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .about {
    .container {
      h1 {
        padding: 40px 0px;
      }
      .one {
        width: 22%;
        margin-right: 5px;
        float: left;
        margin-bottom: 100px;
      }
    }
  }
}
</style>
