<template>
  <div class="container mt-5">
    <div class="row g-3">
    
        <div v-if="loading" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
     
      <div v-else class="col-md-4" >
        <UserCardView :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import UserCardView from "@/components/users/CardView.vue";
export default {
  name: "UsersHi",
  components: {
    UserCardView,
  },

  setup() {
    const user = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getUser() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then((response) => {
          console.log(response);
          user.value = response.data;
          loading.value = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getUser();
    return { user , loading };
  },
};
</script>

<style></style>
