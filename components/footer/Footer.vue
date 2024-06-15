<template>
    <div class="footer-layout">
        <div class="footer-wrapper">
            <div class="flex flex-col">
                <div class="flex items-start">
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <div class="flex">
                            <img
                                src="/assets/images/icons/logo-title.svg"
                                alt="Lynk"
                                class="h-[25px] sm:h-[30px] md:h-[35px]"
                            />
                        </div>
                        <a
                            href="#"
                            class="underline footer-layout__join md:ml-3 lg:ml-12 mt-4 sm:mt-10 md:mt-0 font-title text-[16px] md:text-[18px]"
                            >Join the Beta Documentation Get in Touch Work at
                            Lynk
                        </a>
                    </div>

                    <button
                        class="footer-layout__profile-btn text-[12px] py-3 px-2 sm:text-[14px] text-bold"
                    >
                        <img src="/assets/images/icons/discord.svg" /><span
                            class="footer-layout__join-discord ml-1"
                            >Join Discord</span
                        >
                    </button>
                </div>
                <div
                    class="flex justify-between mt-5 grid grid-cols-1 md:grid-cols-2"
                >
                    <span
                        class="col-span-1 mt-4 sm:mt-8 footer-layout__copyright"
                        >Lynk Finance Inc © 2022</span
                    >
                    <div
                        class="flex col-span-1 mt-12 sm:mt-14 md:mt-0 md:ml-auto self-end"
                    >
                        <a href="#" class="mr-5 footer-layout__tip"
                            ><span class="footer-layout__toc"
                                >Terms of Use</span
                            >
                        </a>
                        <a href="#" class="footer-layout__tip"
                            ><span class="footer-layout__toc"
                                >Privacy Policy</span
                            ></a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer-wrapper {
    @include xxl {
        max-width: 1320px;
        margin: 0 auto;
        padding: 0;
    }
}
.footer-layout {
    position: relative;
    background-color: #121628;
    padding: 20px 15px;

    @include xs {
        padding: 30px 40px;
    }
    @include lg {
        padding: 48px 125px;
    }
    &__join {
        width: 137px;
        color: #eaf7fa;
        // margin-left: 50px;
        line-height: 1.8;
    }

    &__join-discord {
        display: none;
        @media (min-width: 250px) {
            display: block;
        }
    }
    &__toc {
        color: #eaf7fa;

        text-align: right;
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
    }
    &__copyright {
        color: #9da4c4;

        font-family: "Open Sans", sans-serif;
        font-size: 12px;
        @include md {
            font-size: 16px;
        }
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    &__profile-btn {
        display: flex;
        margin-left: auto;

        align-items: center;
        border-radius: 8px;
        font-weight: 600;
        border-radius: 12px;
        background: #d2eaa4;
        display: inline-flex;
        height: 42px;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
    }
    &__divider {
        border-top: 1px solid white;
    }

    &__accordion-detail {
        border-left: 5px solid #ff002e;
    }

    &__tip {
        color: #eaf7fa;

        text-align: right;
        font-family: "Open Sans", sans-serif;
        font-size: 8px;

        @include sm {
            font-size: 12px;
        }
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
    }

    &__text-gray {
        color: #b7b7b7;
    }
}
</style>
