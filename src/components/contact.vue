<template>
  <div class="contact">
      <h1 class="header-text">Contact Us</h1>
    <div class="container">
      <div class="one">
        <div class="img">
          <img src="../assets/images/f_icon1.png" />
        </div>
        <div class="text">
          <h3>Address</h3>
          <p>
            151 Ho Ba Kien Street,<br> Ward 15, District 10,<br> Ho Chi Minh City,
            Vietnam
          </p>
        </div>
      </div>
      <!--  -->
       <div class="one">
        <div class="img">
          <img src="../assets/images/f_icon2.png" />
        </div>
        <div class="text">
          <h3>Phone</h3>
          <p>
+84 126 922 0162<br> +84 905 333 333<br> Monday - Sunday<br> 08:00 am - 05:00 pm
          </p>
        </div>
      </div>
      <!--  -->
       <div class="one">
        <div class="img">
          <img src="../assets/images/f_icon3.png" />
        </div>
        <div class="text">
          <h3>Email</h3>
          <p>
            support@sofbox.com<br> 24 X 7 online support

          </p>
        </div>
      </div>
      <!--  -->
      <div class="one">
        <div class="img">
          <img src="../assets/images/f_icon2.png" />
        </div>
        <div class="text">
          <h3>Social media</h3>
          <p class="icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <i class="far fa-envelope"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:'contact',
}
</script>
<style lang="scss" scoped>
    .contact{
        background-color: #272f43;
        color: white;
         .header-text{
            padding: 60px 0px;
          }
        .container{
          overflow: hidden;
          justify-content: space-around;
          display: flex;
          .one{
            width: 20%;
            float: left;
            .img{
              img{
                margin-bottom: 18px;
              }
            }
            .text{
              h3{
                font-size: 22px;
              } 
              p{
                line-height: 1.8;
               
              }
              .icons{
                
                i{
                  color: white;
                  margin-right: 20px;
                  transition: 0.5s all;
                  font-size: 20px;
                  // margin-left:2px;
                  &:hover{
                    color: #9b0909;
                  }
                }
              }
            }
          }
        }
    }
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
     .contact{
         .header-text{
            padding: 25px 0px 0px 0px;
          }
        .container{
          display: block;
          .one{
            width: 90%;
            margin: 60px auto;
            display: block;
            float: none;
          }
          .icons{
                i{
                  margin-left: 20px;
                }
              }
        }
     }

}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .contact{
         .header-text{
            padding: 30px 0px 0px 0px;
          }
        .container{
          display: flex;
          justify-content: space-between;
          .one{
            width: 40%;
            margin: 50px auto;
            float: left;
          }
        }
     }

}
   
</style>
