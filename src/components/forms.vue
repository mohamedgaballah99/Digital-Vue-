<template>
    <div class="forms">
        <div class="info">
            <h2>WE’VE DONE LOT’S OF WORK, LET’S</h2>
            <h1>CHECK SOME FROM HERE</h1>
        </div>
        <div class="container">
            <div class="img">
                <div class="overlay"><img src="../assets/images/search_icon.png"> </div>
                <img src="../assets/images/blog1.jpg" alt="">
            </div>
            <div class="img">
                <div class="overlay"><img src="../assets/images/search_icon.png"> </div>
                <img src="../assets/images/blog2.jpg" alt="">
            </div>
            <div class="img">
                <div class="overlay"><img src="../assets/images/search_icon.png"> </div>
                <img src="../assets/images/blog3.jpg" alt="">
            </div>
            <div class="img">
                <div class="overlay"><img src="../assets/images/search_icon.png"> </div>
                <img src="../assets/images/blog4.jpg" alt="">
            </div>
        </div>  
    </div>
</template>
<script>
export default {
    name:'forms'
}
</script>
<style lang="scss" scoped>
    .forms{
         background-color: #f6f6f6;
         padding-top: 60px;
        .info{
            text-align: center;
            h2{
                color: #fc301e;
                font-size: 27px;
            }
            h1{
                color:black;
                font-weight: bold;
                font-size: 40px;
                margin: 15px 0px;
            }
        }
        .container{
            display: flex;
            justify-content: space-between;
            overflow: hidden;
            .img{
                width: 23%;
                margin: 30px 0px;
                position: relative;
                &:hover .overlay{
                   visibility: visible;
                    height:100%;             
                }
                img{
                    width: 100%;
                }
                .overlay{
                    transition: 0.5s all;  
                    position: absolute;
                    top: 0px;
                    bottom: 0px;
                    left: 0px;
                    right: 0px;
                    width: 100%;
                    height: 0%;
                    background-color: #fc301e;
                    opacity: 0.8;
                    visibility: hidden;
                    img{
                        position: absolute;
                        transform: translate(-50%,-50%);
                        top: 50%;
                        left: 50%;
                        width: 100px;
                        height: auto;
                        cursor: pointer;
                    }
                    
                }
            }
        }
    }
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .forms{
        .info{
            h2{
                font-size: 17px;
            }
            h1{
                font-size: 23px;
            }
        }
        .container{
            display: block;
            .img{
                width: 85%;
                margin:30px auto;
                display: block;
                float: none;
            }
        }
    }
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .forms{
        .info{
            h2{
                font-size: 25px;
            }
            h1{
                font-size: 35px;
            }
        }
        .container{
           display: flex;
            justify-content: space-between;
            overflow: hidden;
            .img{
                width: 23%;
                float: left;
            }
        }
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .forms{
        .info{
            h2{
                font-size: 28px;
            }
            h1{
                font-size: 40px;
            }
        }
    }
}    
</style>