<template>
  <div class="touch">
    <h1>GET IN TOUCH</h1>
    <div class="container">
      <div class="form">
        <div class="bg">
            <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="text" placeholder="Your Phone" />
        <textarea cols="30" rows="3" placeholder="Message"></textarea>
        <button>send</button>
        </div>
      </div>
      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.250745608789!2d139.70086698539436!3d35.69544673680092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd62b12729b%3A0x947818445ae2a774!2sDigital%20Marketing!5e0!3m2!1sar!2seg!4v1611503489456!5m2!1sar!2seg" width="600" height="640" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "touch",
};
</script>
<style lang="scss" scoped>
.touch {
  background-color: #f6f6f6;
  padding-bottom: 60px;
  h1 {
    color: black;
    padding: 40px 0px;
    font-weight: bold;
  }
  .container {
      overflow: hidden;
      .form{
          width: 47%;
          float: left;
          background-color: #f23f3f;
          padding:25px;
          .bg{
              background-color: white;
              padding: 20px;
              box-shadow: 0px 0px 10px #272f43;
              input{
              border: none;
              border-bottom: 1px solid rgba(128, 128, 128, 0.63);
              padding: 10px;
              padding-bottom: 15px;
              display: block;
              margin-bottom: 20px;
              width: 100%;
              outline: none;
          }
          textarea{
              outline: none;
              padding: 10px;
              display: block;
              width: 100%;
              border: none;
              border-bottom: 1px solid rgba(128, 128, 128, 0.63);
          }
          button{
              background-color: #f23f3f;
              border: none;
              padding: 15px 30px;
              font-size: 18px;
              text-transform: uppercase;
              color: white;
                margin-top: 20px;
                &:hover{
                    background: #272f43;
                    transition: 0.7s all;
                }
          }
          }
      }
      .map{
          width: 50%;
          float: right;
      }
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .touch{
        .container{
            .form{
                width: 95%;
                display: block;
                margin: auto;
                float: none;
                margin-bottom: 60px;
                 button{
              padding: 10px 20px !important;
              font-size: 15px !important;
                 }
            }
            .map{
                
                width: 95%;
                display: block;
                margin: auto;
                float: none;
                iframe{
                    width: 100% !important;
                    height: 400px !important;
                }
            }
        }
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
     .touch{
        .container{
            overflow: hidden;
            .form{
                width: 48%;
                float: left;
                 button{
              padding: 10px 20px !important;
              font-size: 15px !important;
                 }
            }
            .map{
             width: 48%;
                float: right;
                iframe{
                    width: 100% !important;
                    height: 450px !important;
                }
            }
        }
    }
}
</style>
