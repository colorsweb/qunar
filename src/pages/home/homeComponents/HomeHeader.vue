<template>
    <div class="header">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="display:none">
            <symbol id="back" viewBox="0 0 129 129">
                <g>
                    <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" />
                </g>
            </symbol>
            <symbol id="search" viewBox="0 0 480.356 480.356">
                <path xmlns="http://www.w3.org/2000/svg" d="M469.725,418.417l-125.32-125.328c57.936-86.275,34.963-203.18-51.312-261.116S89.913-2.989,31.977,83.286    s-34.963,203.18,51.312,261.116c63.446,42.605,146.358,42.605,209.804,0l125.32,125.328c14.169,14.169,37.143,14.169,51.312,0    S483.895,432.587,469.725,418.417z M188.357,360.353c-94.949-0.106-171.894-77.051-172-172c0-94.993,77.007-172,172-172    s172,77.007,172,172S283.35,360.353,188.357,360.353z M458.421,458.41c-3.805,3.808-8.969,5.946-14.352,5.944    c-5.382,0.016-10.547-2.121-14.344-5.936L307.669,336.353l28.688-28.688l122.056,122.064    C466.335,437.647,466.339,450.488,458.421,458.41z"/>
                <path xmlns="http://www.w3.org/2000/svg" d="M192.573,32.409l-0.424,16c41.401,1.072,80.192,20.463,105.896,52.936l12.528-9.952    C281.926,55.215,238.705,33.61,192.573,32.409z"/>
                <path xmlns="http://www.w3.org/2000/svg" d="M322.245,108.233l-13.72,8.232c2.981,4.953,5.653,10.085,8,15.368l14.592-6.464    C328.513,119.481,325.551,113.758,322.245,108.233z"/>
            </symbol>
            <symbol id="downArrow" viewBox="0 0 292.362 292.362">
                <path xmlns="http://www.w3.org/2000/svg" d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
            </symbol>
        </svg>
        <div class="headerLeft">
            <svg class="back">
                <use xlink:href="#back"/>
            </svg>
        </div>
        <div class="headerInput">
            <svg class="search">
                <use xlink:href="#search"/>
            </svg>
            输入城市/景点/游玩主题
        </div>
        <div class="headerRight">
            城市
            <svg class="downArrow">
                <use xlink:href="#downArrow"/>
            </svg>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeHeader'
}
</script>
<style lang="scss" scoped>
    .header{
        display: flex;
        align-items: center;
        height: vw(86);
        background:$mainColor;
        color:$topFontColor;
        .headerLeft{
            width: vw(64);
            text-align: center;
            .back{
                width: vw(45);
                height: vw(45);
                fill: $topFontColor;
            }
        }
        .headerInput{
            flex-grow: 1;
            color:#aaa;
            line-height: vw(64);
            background: $topFontColor;
            border-radius: 5px;
            padding-left: vw(65);
            position: relative;
            .search{
                position: absolute;
                top: vw(12);
                left: vw(12);
                width:vw(40);
                height:vw(40);
                fill:#aaa;
            }
        }
        .headerRight{
            width:vw(124);
            text-align: center;   
            .downArrow{
                width:vw(20);
                height:vw(20);
                fill:$topFontColor;
            }
        }
    }
</style>
