<template>
    <div>
        <button @click="getSnake">Snake</button>
            <div v-for="joke in snake" :key="joke">
                {{joke}}
            </div>
    </div>
</template>

<script>
    export default {
        name : "SnakeJoke",
        data() {
            return {
                snake: [],
            }
        }, 
        methods: {
            async getSnake() {
                try {  
                    const response = await this.$http.get("https://geek-jokes.sameerkumar.website/api?format=json", {
                        headers: {  
                            Accept: "application/json",
                        }
                    }
                    );
                    this.snake = response.data;
                    } catch (error) {
                    console.log(error);
                    }
            }, 
        },
        //     snakeJoke(jokes) {
        //         this.snake = jokes.toLowerCase(); //Got it lowercase couldn't figure out how to do snake_case. 
        //     }
        // },
        // mounted () {
        //     this.$root.$on(`chooseJoke`, this.snakeJoke);
        // },
    }
</script>

<style scoped>

</style>