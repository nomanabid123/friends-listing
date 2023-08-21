
<template>

  
        <li :key="id">
            <h3>{{ name }}</h3>
            <p>{{ phone }}</p>
            <p>{{email }}</p>
        </li>

</template>


<script>
export default {
  name: 'FriendsList',
  props: {
    id: Number,
    name: String,
    phone: String,
    email: String
  }
}
</script>

<style lang="scss">
    .container{
        justify-content:center;
        align-items:center;
        height:100vh;
        width:100%;
    }

    .friends-list{
        width: 60%;
        margin-left: auto;
        margin-right: auto;
    }

   


</style>