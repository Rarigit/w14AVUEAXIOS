<template>
    <div>
        <!-- Called click id the same as my called function in methods -->
        <button @click="getNormal">Normal</button>
            <div v-for="joke in normals" :key="joke">
                {{joke}}
            </div>
    </div>
</template>

<script>

    export default {
        name : "NormalJoke",
        data() {
            return {
                normals: [],
            };
        }, 
        methods: {
            async getNormal() {
                try {  //This is a different method i found online to request and display API data utilizing try and catch along with the async functions: async and await.
                        //The await is attached to the request as the get function will fetch a promise which in turn is set to the variable response. 
                    const response = await this.$http.get("https://geek-jokes.sameerkumar.website/api?format=json", {
                        headers: {  //Was getting a 503 ERROR so i did some research and found that this type of request needed a user-agent header for it to work.
                            Accept: "application/json",
                        }
                    }
                    );
                    this.normals = response.data;
                    } catch (error) {
                    console.log(error);
                    }
            },
        },
        // created() {
        //     this.getNormal();
        // },
        // mounted () {
        //     this.$root.$on(`chooseJoke`,this.getNormal);
        // },
    }
</script>

<style scoped>

</style>