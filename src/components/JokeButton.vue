<template>
    <div>
        <button @click="selectJoke">JokeButton</button>
            <!-- <div v-for="joke in jokes" :key="joke">
                {{jokes}}
            </div> -->
<!-- Used a for loop to iterate throughout the jokes. I used the key as jokes instead of index as i was getting a vertical display in my joke when i used it. 
Also got rid of the "let funny = response.data" statement i had in methods as using a variable there didn't seem to display on the page for some reason., when i tried to inject into html   -->
    </div>
</template>



<script>
import axios from "axios";

    export default {
        name : "JokeButton",
        data() {
            return {
                jokes : []
            }
        },
        methods: {//Put the axios call in methods not mounted!!!
            selectJoke() {
                axios.request({
                    url : "https://geek-jokes.sameerkumar.website/api?format=json",
                    method : "GET"
                }).then((response)=>{//Success code
                    this.jokes = response.data;
                    this.$root.$emit(`chooseJoke`,this.jokes);//global emit
                }).catch((error)=>{//Error code
                    console.log(error);
                });
            }
        },
}

</script>

<style scoped>
button{
    height: 5vh;
    color: green;
}
</style>