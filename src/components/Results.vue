<template>
    <div>
        <h1> Your score: {{ score }} ms</h1>
        <p class="rank">Your Rank: {{ rank }}</p>
        
    </div>
</template>

<script>
export default{
    props:['score'],
    data(){
        return{
            rank:null
        }
    },
    mounted(){
        if(this.score< 250){
            this.rank = 'Ninja Fingers'
        }else if(this.score<400){
            this.rank = 'Rapid Reflexes'
        }else{
            this.rank = 'Snail pace ^@...'
        }
    }
}

</script>

<style>
    p.rank{
        color:brown;
        font-size: 20px;
        font-weight: bold;
    }
</style>