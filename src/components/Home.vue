<template>
    <div>
        <h1>Central list for your family to share...</h1>
        <b-button type="submit" variant="primary" :to="{ name: 'login' }">Create your list now!</b-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            'home': 'home'
        }
    }
}
</script>
