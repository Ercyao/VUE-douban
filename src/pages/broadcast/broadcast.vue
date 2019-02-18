<template>
  <div class="page">
    <headerNav></headerNav>
    <div v-show="!showLoading">
      <div class="broadcast-box">
        <ul>
          <li v-for="item in Broadcast"
              :key="item.status.sharing_url">
            <a :href="item.status.sharing_url">
              <div class="broadcast-con">
                <div class="left"><img src="../../assets/img/logo.png" /></div>
                <div class="right">
                  <p class="author"><span class="blod">{{item.status.author.name}}</span><span class="gray">{{item.status.activity}}</span></p>
                  <p class="gray">{{item.status.create_time}}</p>
                  <template v-if="item.status.text">
                    <div class="said_des">{{item.status.text}}</div>
                    <div class="said_img">
                      <template v-for="img in item.status.images">
                        <template v-if="img.normal.height == 460">
                          <img :key="img.normal.url"
                               :src="img.normal.url"
                               class="smallimg" />
                        </template>
                        <template v-else>
                          <img :key="img.normal.url"
                               :src="img.normal.url"
                               class="bigimg" />
                        </template>
                      </template>
                    </div>
                  </template>
                  <template v-else>
                    <div class="diary_des">
                      <p class="diary_title">{{item.status.card.title}}</p>
                      <div class="diary_content">
                        <div class="diary_text">{{item.status.card.subtitle}}</div>
                        <div class="diary_img">
                          <template v-if="item.status.card.image">
                            <img :src="item.status.card.image.normal.url" />
                          </template>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="list-link">显示更多广播</div>
      <drown-app></drown-app>
    </div>
    <loading v-show="showLoading"></loading>
  </div>
</template>

<script>
import loading from '@/components/loading'
import headerNav from '@/components/header'
import drownApp from '@/components/drownapp'
import { getBroadcast } from '@/store/API'

export default {
  data () {
    return {
      showLoading: true,
      Broadcast: null
    }
  },
  components: {
    headerNav,
    drownApp,
    loading
  },
  created () {
    this.getMovieData()
  },
  methods: {
    async getMovieData () {
      let Broadcast = await getBroadcast().then(res => res.json())
      this.Broadcast = Broadcast.items

      this.hideLoading()
    },
    hideLoading () {
      this.showLoading = false
    }
  }
}
</script>

<style lang="less" scoped>
.broadcast-box {
  ul {
    li {
      margin: 1rem 0 1.5rem;
    }
  }
  .broadcast-con {
    display: flex;
    justify-content: space-between;
    .left {
      width: 40px;
      margin-right: 10px;
      img {
        width: 35px;
        border-radius: 50%;
      }
    }
    .right {
      width: 97%;
      color: #000000;
      padding-bottom: 30px;
      border-bottom: 0.1rem solid #e8e8e8;
      .author {
        font-size: 1.3rem;
        line-height: 2.2rem;
      }
      .blod {
        font-weight: 600;
        margin-right: 5px;
      }
      .said_des {
        margin-top: 10px;
        line-height: 22px;
        color: #494949;
      }
      .said_img {
        max-height: 300px;
        overflow: hidden;
        .smallimg {
          width: 32.8%;
          height: 6.5em;
          margin-right: 0.1em;
          margin-bottom: 0.1em;
          float: left;
        }
        .smallimg:after {
          clear: both;
        }
        .bigimg {
          margin-top: 15px;
          width: 99%;
        }
      }

      .diary_des {
        padding: 15px;
        margin: 10px 0 20px;
        border-radius: 2px;
        background: #f9f9f9;
        .diary_title {
          font-size: 17px;
          font-weight: 500;
          line-height: 1.4;
          color: #494949;
          margin-bottom: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .diary_content {
          display: flex;
          .diary_text {
            flex: 2;
            font-size: 12px;
            line-height: 16px;
            color: #aaa;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
          .diary_img {
            height: 48px;
            overflow: hidden;
            img {
              width: 75px;
              margin-left: 10px;
            }
          }
        }
      }
    }
    .gray {
      color: #aaaaaa;
    }
  }
}
.list-link {
  color: #42bd56;
  display: block;
  padding: 15px 0;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
}
</style>
