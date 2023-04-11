<template>
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <UserProfileInfo @follow123="follow" @unfollow1234="unfollow" :user="user" />
        <UserProfileWrite @post_a_post="post_a_post"/>
      </div>
      <div class="col-9">
        <UserProfilePosts :posts="posts" />
      </div>
    </div>
  </ContentBase>
</template>
<script>
import ContentBase from '../components/ContentBase.vue'
import UserProfileInfo from '../components/UserProfileInfo.vue'
import UserProfilePosts from '../components/UserProfilePosts.vue'
import UserProfileWrite from '../components/UserProfileWrite.vue'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'UserProfile',
  components: {
    ContentBase,
    UserProfileInfo,
    UserProfilePosts,
    UserProfileWrite,
  },
  setup() {
    const route = useRoute();
    const userId = route.params.userId;
    console.log(route.params.userId);
    console.log(userId);

    const user = reactive({
      id: 1,
      username: "shenyanxin",
      lastName: "Shen",
      firstName: "Yanxin666",
      followerCount: 0,
      // 登录用户是否关注了当前用户
      is_followed: false,
    });
    
    const posts = reactive({
      count: 3,
      posts: [
        {
          id: 1,
          userId: 1,
          content: "今天真开心",
        },
        {
          id: 2,
          userId: 1,
          content: "今天更开心了",
        },        
        {
          id: 3,
          userId: 1,
          content: "今天开心极了",
        },        
      ]
    })
    
    const follow = () => {
      if (user.is_followed) return;
      user.is_followed = true;
      user.followerCount ++ ;
    }
    const unfollow = () => {
      if (!user.is_followed) return;
      user.is_followed = false;
      user.followerCount -- ;
    }
    const post_a_post = (content) => {
      posts.count ++;
      //如果在数组最后加的话是push，在最前面加元素是unshift
      posts.posts.unshift({
        id: posts.count,
        userId: 1,
        content: content,
      });
    }
    return {
      //key和value都一样可简写成1个值
      user: user,
      //这样就在templates可以用这个属性了，而user是要在UserProfileInfo这个组件里被渲染出来的，所以需传到Info
      follow,
      unfollow,
      posts,
      post_a_post,
    }
  }
}
</script>

<style scoped>
</style>