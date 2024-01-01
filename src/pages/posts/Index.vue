<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="col-md-4" v-for="post in posts" :key="post.id">
    <div class="card">
      <div class="card-header">
        <router-link :to="{ name: 'postId', params: { id: post.id } }">
          {{ post.title }}
        </router-link>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">body : {{ post.body }}</li>

      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
// import UserCardView from "@/components/users/CardView.vue";
import { useRoute } from "vue-router";
export default {
  name: "UsersHi",
  // components: {
  //   UserCardView,
  // },

  setup() {
    const posts = ref([]);
    const loading = ref(true);
    const route = useRoute();

    console.log(route.params.id);
    function getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          console.log(response);
          posts.value = response.data;
          loading.value = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getPosts();
    return { posts, loading, route };
  },
};
</script>

<style></style>
