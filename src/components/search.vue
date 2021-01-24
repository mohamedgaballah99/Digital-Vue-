<template>
  <div class="search-p">
    <div class="search">
      <div class="container">
        <div class="text">
          <h4>GET YOUR FREE QUOTE</h4>
          <h1>TODAY</h1>
        </div>
        <div class="search-bar">
          <input type="search" placeholder="Enter URL" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
};
</script>
<style lang="scss" scoped>
.search-p {
  background-color: #272f43;
  padding: 40px;
  .search {
    .container {
      overflow: hidden;
      .text {
        color: white;
        width: 40%;
        float: left;
        h4 {
          font-size: 33px;
        }
        h1 {
          font-weight: bold;
          font-size: 55px;
        }
      }
      .search-bar {
        width: 50%;
        float: right;
        input {
          border: none;
          padding: 15px;
          font-size: 22px;
          width: 80%;
          outline: none;
        }
        button {
          border: none;
          background-color: #fc301e;
          padding: 12px;
          color: white;
          font-size: 26px;
        }
      }
    }
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .search-p {
    .search {
      .container {
        .text {
          display: block;
          margin: auto;
          width: 90%;
          float: none;
          h4 {
            font-size: 18px;
          }
          h1 {
            font-size: 30px;
          }
        }
        .search-bar {
          width: 90%;
          margin: auto;
          display: block;
          float: none;
          input {
            padding: 10px;
            margin: 10px 0px;
            font-size: 15px;
            width: 100%;
          }
          button {
            padding: 12px 24px;
            font-size: 17px;
          }
        }
      }
    }
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .search-p {
    .search {
      .container {
          overflow: hidden;
        .text {
          width: 40%;
          float: left;
          h4 {
            font-size: 20px;
          }
          h1 {
            font-size: 30px;
          }
        }
        .search-bar {
          width: 50%;
          float: right;
          input {
            padding: 10px;
            margin: 10px 0px;
            font-size: 15px;
            width: 69%;
          }
          button {
            padding: 9px 24px;
            font-size: 17px;
          }
        }
      }
    }
  }
}
@media only screen and (min-width: 1200px) {
   .search-p {
    .search {
      .container {
        .text {
          h4 {
            font-size: 30px;
          }
          h1 {
            font-size: 47px;
          }
        }
      }
    }
   }
}
</style>
