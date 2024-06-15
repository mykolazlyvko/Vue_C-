<template>
    <main class="bg-lynk">
        <!-- <img
            src="/assets/target.png"
            style="opacity: 0.2; position: absolute"
        /> -->
        <Header />
        <div class="main-layout lynk-layout">
            <slot />
        </div>
        <Footer />
    </main>
</template>
<script>
import Header from "~/components/_general/layout/Header.vue";
import Footer from "~/components/footer/Footer.vue";

export default {
    components: { Header },
};
</script>

<style lang="scss">
.main-layout {
    min-height: calc(100vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: -1;
}
</style>
