<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="(data, index) in fetchData" v-bind:key="index">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ data.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <template v-if="data.domain">
              <a v-bind:href="data.url">
                {{ data.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`item/${data.id}`">
                {{ data.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ data.time_ago }} by
            <router-link v-if="data.user" :to="`/user/${data.user}`">{{
              data.user
            }}</router-link>
            <a :href="data.url" v-else> {{ data.domain }} </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    fetchData() {
      return this.$store.state.list;
    },
  },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
