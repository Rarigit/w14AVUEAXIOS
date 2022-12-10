<template>
    <div>
        <button @click="getLoud">Loud Joke</button>
    <!-- The clicker id needs to be the same though-out and it originates from the original joke button clicker id -->
    <!-- It allows essentially for a console log of the joke data to be displayed on the Vue console after clicking the button; which itself is after clicking selectJoke -->
    <!-- selectJoke was the function within which the api data was generated in the first place -->
            <div v-for="joke in loud" :key="joke">
                {{joke}}
            </div>
    </div>
</template>

<script>
    export default {
        name : "LoudJoke",
        data() {
            return {
                loud: [],
            }
        },
        methods: {
            async getLoud() {
                try {  
                    const response = await this.$http.get("https://geek-jokes.sameerkumar.website/api?format=json", {
                        headers: {  
                            Accept: "application/json",
                        }
                    }
                    );
                    this.loud = response.data;
                    } catch (error) {
                    console.log(error);
                    }
            },
        },
        // created() { //This is like mounted when commented out the joke doses not display on the page when loaded.
        //     this.getLoud();
        // },
        //loudJoke(jokes){ //Since that variable funny has been globally emitted it can work in any component provided that it is being listened to in mounted.Displaying it is another case
        //this.loud = jokes.toUpperCase();//Found capitalization js method in w3 schools
        // }
        // },
        // mounted () {
        //     this.$root.$on(`chooseJoke`, this.loudJoke);
        // },
    }
</script>

<style scoped>

</style>