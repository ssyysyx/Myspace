<template>
    <div class="card">
        <div class="card-body">
            <!-- 所有的循环的对象都需要绑定一个key属性，需要保证是唯一的 -->
            <!-- key是vue内部的加速机制，跟代码没关系，但保证每一个循环的对象最外层都需要加上一层key属性 -->
            <!-- 对于posts.posts里面的每一个post都构造一个div -->
            <div v-for="post in posts.posts" :key="post.id">
                <!-- 希望每一个内容都是一个小方块 -->
                <div class="card single-post">
                    <div class="card-body">
                        {{ post.content }}
                    </div>
                </div>
                <!-- {{ posts }} -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // 建议这个name起的和文件名一样
    name: "UserProfilePosts",
    props: {
        //也可以直接简写成posts: Object
        posts: {
            type: Object,
            //必须传，不传就报错
            required: true,
        }
    }
}
</script>

<style scoped>
.single-post {
    margin-bottom: 10px;
}
</style>            