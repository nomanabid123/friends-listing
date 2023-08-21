<template>
    <div class="friends-list container">
        <h1>Friends List</h1>
        <ul>
            <FriendsList v-for="friend in friends" :key="friend.id" :name="friend.name" :email="friend.email" :phone="friend.phone" />
        </ul>
    </div>
</template>

<script>
import FriendsList from './components/FriendsList.vue';


export default {
  name: 'App',
  data(){
    return{ 
      friends:[{
      id:1,
      name:"Imran",
      email:"imran@gmail.com",
      phone:"123456678"
    },{
      id:2,
      name:"haris",
      email:"haris@gmail.com",
      phone:"123456678"
    }]
  }
  },
  components: {
    FriendsList
}
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.friends-list h1{
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1rem;
}
 
</style>
