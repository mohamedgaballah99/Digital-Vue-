<template>
  <div class="vedio">
    <div class="container">
      <div class=" text mx auto">
        <h4>PREVIOUS PROJECTS</h4>
        <h2>OUR CASE STUDIES</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn'
        </p>
      </div>
      <div class=" img  mx auto">
        <img src="../assets/images/video_img.jpg" />
      </div>
     
    </div>
    
  </div>
</template>
<script>
export default {
  name: "vedio",
};
</script>
<style lang="scss" scoped>
.vedio {
  background-color: #f6f6f6;
  padding-top: 80px;
  .container {
    .text {
      width: 90%;
      margin: auto;
      h4 {
        color: #fc301e;
        font-size: 30px;
      }
      h2 {
        margin: 20px 0px;
        font-weight: bold;
        font-size: 45px;
        color: black;
      }
      p {
        line-height: 2;
        font-size: 17px;
        color: #272f43;
      }
    }
    .img {
      width: 95%;
      margin: auto;
      img {
        width: 100%;
        cursor: pointer;
      }
    }
    
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .vedio {
  .container {
    .text {
      h4 {
        font-size: 20px;
      }
      h2 {
        font-size: 27px;
      }
      p {
        font-size: 15px;
        text-align: justify;
      }
    }
  }
    }
}
</style>
