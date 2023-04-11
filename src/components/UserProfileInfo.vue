<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/85624_lg_b45329694d.jpeg" alt="">
                </div>
                <div class="col-9">
                    <div class="username">{{ fullName }}</div>
                    <div class="fans">粉丝: {{ user.followerCount }}</div>
                    <button @click="follow" v-if="!user.is_followed"  type="button" class="btn btn-secondary btn-sm">+关注</button>
                    <button @click="unfollow" v-if="user.is_followed"  type="button" class="btn btn-secondary btn-sm">已关注</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue';
export default {
    name: "UserProfileInfo",
    props: {
        user: {
            // user的类型是object
            type: Object,
            // user是必填的
            required: true,
        }
    },
    setup(props, context) {
        //因为这个值要被动态计算，所以需要传一个函数
        let fullName = computed( () => props.user.lastName + ' ' + props.user.firstName );
        const follow = () => {
            context.emit("follow123");
        }
        const unfollow = () => {
            context.emit("unfollow1234");
        }
        return {
            fullName,
            follow,
            unfollow,
        }
    }
}
</script>

<style scoped>
img {
    border-radius: 50%;
}

.username {
    font-weight: bold;
}

.fans {
    font-size: 12px;
    color: gray;
}

button {
    padding: 2px 4px;
    font-size: 12px;
}
</style>

