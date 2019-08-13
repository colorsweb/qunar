<template>
    <div class="container">
        <div class="bounary"></div>
        <div class="title">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
            猜你喜欢
        </div>
        <ul class="like-items">
            <router-link class="item" 
            v-for="item of likeList" 
            :key="item.id"
            tag="li"
            :to="`/detail/${item.id}`"
            >
                <div class="item-left">
                    <img :src=item.imgUrl>
                    <div class="img-tag">可订明日</div>
                </div>
                <div class="item-right">
                    <div class="right-title">{{item.title}}</div>
                    <div class="right-star">
                        <img src="@/assets/styles/star.svg">
                        <img src="@/assets/styles/star.svg">
                        <img src="@/assets/styles/star.svg">
                        <img src="@/assets/styles/star.svg">
                        <img src="@/assets/styles/star.svg">
                        <span>{{item.count}}条评论</span>
                    </div>
                    <div class="right-cost">
                        <span class="cost-left">￥<em>{{item.money}}</em></span>
                        <span class="qi">起</span>
                        <span class="cost-right">{{item.area}}</span>
                    </div>
                </div>
            </router-link>
            
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    props:{
        likeList:Array
    }
}
</script>
<style lang="scss" scoped>
    .bounary{
        height: vw(20);
        background: #eee;
    }
    .container{
        font-size: vw(32);
        .title{
            margin-top: vw(20);
            padding:vw(25);
            img{
                width: vw(30);
                height: vw(30);
            }
        }
        .like-items{
            float: right;
            .item{
                width: vw(726);
                height: vw(240);
                padding: vw(20) 0;
                display: flex;
                .item-left{
                    position: relative;
                    img{
                    width:vw(200);
                    height: vw(200);
                    }
                    .img-tag{
                        position: absolute;
                        top:0;
                        left:0;
                        width: vw(100);
                        height: vw(38);
                        background: rgb(65, 219, 247);
                        color: #fff;
                        font-size: vw(20);
                        border-bottom-right-radius: vw(20);
                    }
                }
                .item-right{
                    width: vw(526);
                    padding-left: vw(22);
                    .right-title{
                        margin-top: vw(26);
                        @include text-hide;
                    }
                    .right-star{
                        line-height: vw(60);
                        img{
                            width: vw(24);
                            height: vw(24);
                        }
                        span{
                            font-size: vw(24);
                            color:#616161;
                            margin-left: vw(28);
                            vertical-align: baseline;
                        }
                    }
                    .right-cost{
                        display: flex;
                        align-items: center;
                        height: vw(44);
                        margin-top: vw(20);
                        font-size: vw(24);
                        color: #616161;
                        .cost-left{                           
                            color: #ff8300;
                        }
                        em{
                            font-size: vw(40);
                        }
                        .cost-right{
                            margin-left:auto;
                            margin-right: vw(20)
                        }
                        .qi{
                            left: vw(10);
                            position: relative;
                            top:vw(5)
                        }
                    }
                }
            }
        }
    }
</style>


