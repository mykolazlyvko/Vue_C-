<template>
    <div class="w-full h-full dashboard-layout">
        <div
            class="flex my-0 sm:my-5 md:my-20 justify-center dashboard-layout__title-wrapper"
        >
            <div class="text-center font-title dashboard-layout__title">
                The
                <span class="text-secondary">safe & easy</span>
                way<br class="lg:hidden" />
                to transfer<br class="lg:hidden" />
                decentralised assets
            </div>
        </div>
        <carousel
            class="lg:hidden mt-6 sm:mt-14"
            :items-to-show="1"
            :wrap-around="true"
            :auto-play="1000"
        >
            <slide class="flex flex-col mb-40 fade-on-scroll">
                <img
                    class="dashboard-layout__img"
                    src="/assets/images/dasbhoard/dashboard1.png"
                    alt="Lynk"
                />
                <div class="flex flex-col">
                    <p
                        class="text-white uppercase mt-8 md:mt-16 font-subtitle dashboard-layout__request-fund-title text-[16px] xs:text-[20px] sm:text-[22px] md:text-[24px]"
                    >
                        REQUEST FUNDS
                    </p>
                    <div
                        class="text-sm md:text-lg flex flex-col md:mt-4 dashboard-layout__request-desc font-secondary"
                    >
                        <p
                            class="mt-1 px-6 xs:px-9 sm:px-12 md:px-16 text-[14px] xs:text-[18px] sm:text-[20px] md:text-[22px]"
                        >
                            Generate a zero-risk payment link<br />
                            and be reassured that the funds<br />
                            arrive in your account.
                        </p>
                        <a
                            href="#"
                            class="mb-5 text-[18px] sm:text-[20px] md:text-[22px] mt-20"
                        >
                            <span class="underline" style="color: #9da4c4"
                                >Learn More</span
                            >
                        </a>
                    </div>
                </div>
            </slide>
            <slide class="flex flex-col mb-40 fade-on-scroll">
                <img
                    class="dashboard-layout__img"
                    src="/assets/images/dasbhoard/dashboard1.png"
                    alt="Lynk"
                />
                <div class="flex flex-col">
                    <p
                        class="text-white uppercase mt-8 md:mt-16 font-subtitle dashboard-layout__request-fund-title text-[14px] xs:text-[18px] sm:text-[20px] md:text-[24px]"
                    >
                        ORGANISE TRANSACTIONS
                    </p>
                    <div
                        class="text-sm md:text-lg flex flex-col md:mt-4 dashboard-layout__request-desc font-secondary"
                    >
                        <p
                            class="mt-1 px-6 xs:px-9 sm:px-12 md:px-16 text-[14px] xs:text-[18px] sm:text-[20px] md:text-[22px]"
                        >
                            Label accounts and transactions and<br />
                            export data to keep track of<br />
                            incoming payments.
                        </p>
                        <a
                            href="#"
                            class="mb-5 text-[18px] sm:text-[20px] md:text-[22px] mt-20"
                        >
                            <span class="underline" style="color: #9da4c4"
                                >Learn More</span
                            >
                        </a>
                    </div>
                </div>
            </slide>
            <slide class="flex flex-col mb-40 fade-on-scroll">
                <img
                    class="dashboard-layout__img"
                    src="/assets/images/dasbhoard/dashboard1.png"
                    alt="Lynk"
                />
                <div class="flex flex-col">
                    <p
                        class="text-white uppercase mt-8 md:mt-16 font-subtitle dashboard-layout__request-fund-title text-[14px] xs:text-[18px] sm:text-[20px] md:text-[24px]"
                    >
                        CONNECT ACCOUNTS
                    </p>
                    <div
                        class="text-sm md:text-lg flex flex-col md:mt-4 dashboard-layout__request-desc font-secondary"
                    >
                        <p
                            class="mt-1 px-6 xs:px-9 sm:px-12 md:px-16 text-[14px] xs:text-[18px] sm:text-[20px] md:text-[22px]"
                        >
                            Add wallets from multiple protocols<br />
                            and manage your decentralized<br />
                            transactions in one place.
                        </p>
                        <a
                            href="#"
                            class="mb-5 text-[18px] sm:text-[20px] md:text-[22px] mt-20"
                        >
                            <span class="underline" style="color: #9da4c4"
                                >Learn More</span
                            >
                        </a>
                    </div>
                </div>
            </slide>

            <template #addons>
                <pagination />
            </template>
        </carousel>

        <div class="hidden lg:block">
            <div
                id="dashboard-img1"
                class="dashboard-layout__imgcontainer dashboard-layout__img1 flex justify-between"
            >
                <div id="title_2" class="title">
                    <p
                        class="text-3xl text-white uppercase my-5 font-subtitle dashboard-layout__request-fund-title"
                        id="s-title"
                    >
                        REQUEST FUNDS
                    </p>

                    <div
                        class="text-lg flex flex-col mt-4 dashboard-layout__request-desc-lg font-secondary"
                    >
                        <p
                            class="text-[18px] xl:text-[22px]"
                            id="s-description"
                        >
                            Generate a zero-risk payment link and be reassured
                            that the funds arrive in your account.
                        </p>
                        <a href="#" class="dashboard-layout__learn-more my-10">
                            <span class="underline" style="color: #9da4c4"
                                >Learn More</span
                            >
                        </a>
                    </div>
                    <div class="breadcrumbs">
                        <div
                            class="breadcrumb active"
                            id="breadcrumb_1"
                            data-index="1"
                        ></div>
                        <div
                            class="breadcrumb"
                            id="breadcrumb_2"
                            data-index="2"
                        ></div>
                        <div
                            class="breadcrumb"
                            id="breadcrumb_3"
                            data-index="3"
                        ></div>
                    </div>
                </div>
                <img
                    class="dashboard-layout__img"
                    src="/assets/images/dasbhoard/dashboard1.png"
                    alt="Lynk"
                />
            </div>
        </div>

        <div class="hidden lg:block" style="height: calc(300vh + 100px)"></div>

        <div class="px-2 sm:px-5">
            <div class="grid grid-cols-1 mt-16 md:mt-28 mb-5">
                <div
                    class="text-center dashboard-layout__secure-audited text-[12px] xs:text-[16px] sm:text-[18px] md:text-[20px]"
                >
                    SECURELY AUDITED BY
                </div>
            </div>
            <div
                class="flex justify-around mb-6 sm:mb-10 md:mb-20 mt-6 sm:md-10 md:mt-14 ml-auto mr-auto"
            >
                <div class="w-[140px] mt-3 p-2">
                    <img src="/assets/images/icons/hrcken.svg" alt="Lynk" />
                </div>
                <div class="w-[140px] mt-3 p-2">
                    <img src="/assets/images/icons/certik.svg" alt="Lynk" />
                </div>
                <div class="w-[140px] mt-3 p-2">
                    <img src="/assets/images/icons/paradin.svg" alt="Lynk" />
                </div>
            </div>
            <div
                class="grid grid-cols-1 mt-10 xs:mt-16 sm:mt-20 md:mt-24 px-0 md:px-12"
            >
                <div class="dashboard-layout__lynk-ads-title">
                    Lynk provides a
                    <span class="dashboard-layout__lynk-ads-title-simple"
                        >simple yet effective toolkit</span
                    >
                    to securely manage decentralized transactions.
                </div>
            </div>
            <div class="grid grid-cols-1 mt-10 md:mt-20">
                <div class="dashboard-layout__why-use">
                    WHY CRYPT ENTHUSIASTS USE LYNK
                </div>
            </div>
            <div
                class="grid grid-cols-1 px-16 xs:px-20 sm:px-24 md:px-16 md:grid-cols-2 lg:grid-cols-3 mt-3 sm:mt-6 md:mt-10 mb-20"
            >
                <div class="col-span-1 dashboard-layout__lynk-ads">
                    No more stress, test<br />
                    transactions or lost funds
                </div>
                <div class="col-span-1 dashboard-layout__lynk-ads">
                    Quickly share payment<br />
                    links to your customers
                </div>
                <div class="col-span-1 dashboard-layout__lynk-ads">
                    Download PDF receipts<br />
                    with payment information
                </div>
                <div class="col-span-1 dashboard-layout__lynk-ads">
                    Non-custodial,<br />
                    decentralised core
                </div>
                <div class="col-span-1 dashboard-layout__lynk-ads">
                    Get started in two<br />
                    minutes, no KYC
                </div>
                <div class="col-span-1 dashboard-layout__lynk-ads">
                    Retail-first with support<br />
                    for small businesses
                </div>
            </div>

            <div class="grid grid-cols-1 mt-12 sm:mt-20 md:mt-32 mb-10">
                <div class="mx-0 text-center dashboard-layout__support">
                    CURRENTLY SUPPORTED ON MAJOR EVM<br class="md:hidden" />
                    CHAINS, SOLANA & XRP COMING SOON
                </div>
            </div>
            <div
                class="grid grid-cols-2 mt-8 sm:mt-14 md:mt-20 md:grid-cols-4 px-4 sm:px-8 md:px-12 mb-10 md:mb-20"
            >
                <div class="col-span-1 flex justify-center mb-10">
                    <img
                        src="/assets/images/icons/avalanche.svg"
                        alt="Lynk"
                        class="ml-auto mr-2 md:mx-auto w-[120px] md:w-[150px]"
                    />
                </div>
                <div class="col-span-1 flex justify-center mb-10 ml-1">
                    <img
                        src="/assets/images/icons/ethereum.svg"
                        alt="Lynk"
                        class="mr-auto md:mx-auto w-[110px] md:w-[140px]"
                    />
                </div>
                <div class="col-span-1 flex justify-center mb-10 ml-1">
                    <img
                        src="/assets/images/icons/binance.svg"
                        alt="Lynk"
                        class="ml-auto mr-2 md:mx-auto w-[100px] md:w-[130px]"
                    />
                </div>
                <div class="col-span-1 flex justify-center mb-10 ml-1">
                    <img
                        src="/assets/images/icons/tron.svg"
                        alt="Lynk"
                        class="mr-auto md:mx-auto w-[100px] md:w-[130px]"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
    name: "Home",
    setup() {},
    data() {
        return {
            isConnecting: false,
        };
    },
    components: { Carousel, Slide, Pagination, Navigation },
    async mounted() {
        var STATE = 1;
        var TOP_ADS_NUM = 250;
        var TOP_ADS_PIXEL_ABSOLUTE = TOP_ADS_NUM + "px";
        var TOP_ADS_PIXEL_FIXED = 90 + "px";
        var FADEIN_DURATION = 500;
        var DIV_RAIL_STEPS = [
            window.innerHeight,
            2 * window.innerHeight - 200,
            3 * window.innerHeight - 300,
            3 * window.innerHeight + 300,
        ];
        function turnOn(id) {
            if (id != STATE) {
                $("#dashboard-img1").fadeOut(FADEIN_DURATION / 10, function () {
                    $("#dashboard-img1").fadeIn(FADEIN_DURATION);
                });
            }

            document.getElementById("dashboard-img1").style.position = "fixed";
            document.getElementById("dashboard-img1").style.top =
                TOP_ADS_PIXEL_FIXED;
            $(".breadcrumb").removeClass("active");
            $("#breadcrumb_" + id).addClass("active");

            switch (id) {
                case 1: {
                    $("#s-title").text("REQUEST FUNDS");
                    $("#s-description").text(
                        "Generate a zero-risk payment link and be reassured that the funds arrive in your account."
                    );
                    break;
                }
                case 2: {
                    $("#s-title").text("ORGANISE TRANSACTIONS");
                    $("#s-description").text(
                        "Label accounts and transactions and export data to keep track of incoming payments."
                    );
                    break;
                }
                case 3: {
                    $("#s-title").text("CONNECT ACCOUNTS");
                    $("#s-description").text(
                        "Add wallets from multiple protocols and manage your decentralized transactions in one place."
                    );
                    break;
                }
                default: {
                    $("#s-title").text("REQUEST FUNDS");
                    $("#s-description").text(
                        "Generate a zero-risk payment link and be reassured that the funds arrive in your account."
                    );
                }
            }
        }
        function hideAll() {
            $("[id^=dashboard-img]").hide();
        }
        function scrollCallback() {
            const windowClient = window.document.documentElement;
            if (windowClient.scrollTop < TOP_ADS_NUM) {
                $("#dashboard-img1").css({ position: "absolute", top: "auto" });

                $(".breadcrumb").removeClass("active");
                $("#breadcrumb_1").addClass("active");
                $("#s-title").text("REQUEST FUNDS");
                $("#s-description").text(
                    "Generate a zero-risk payment link and be reassured that the funds arrive in your account."
                );
            } else if (
                windowClient.scrollTop > TOP_ADS_NUM &&
                windowClient.scrollTop < DIV_RAIL_STEPS[0]
            ) {
                turnOn(1);
            } else if (
                windowClient.scrollTop > DIV_RAIL_STEPS[0] &&
                windowClient.scrollTop < DIV_RAIL_STEPS[1]
            ) {
                turnOn(2);
            } else if (
                windowClient.scrollTop > DIV_RAIL_STEPS[1] &&
                windowClient.scrollTop < DIV_RAIL_STEPS[2]
            ) {
                turnOn(3);
            } else if (windowClient.scrollTop < DIV_RAIL_STEPS[3]) {
                $("#dashboard-img1").css({
                    position: "absolute",
                    top: DIV_RAIL_STEPS[2] + "px",
                    display: "flex",
                });

                $(".breadcrumb").removeClass("active");
                $("#breadcrumb_3").addClass("active");
                $("#s-title").text("CONNECT ACCOUNTS");
                $("#s-description").text(
                    "Add wallets from multiple protocols and manage your decentralized transactions in one place."
                );
            } else {
                hideAll();
            }
        }
        window.onscroll = () => {
            STATE = $(".active").data("index");
            scrollCallback();
        };
    },
    methods: {
        toggleMenu() {},
    },
};
</script>

<style lang="scss" scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.fade-in {
    animation: fadeIn 1s ease-in-out;
}

.dashboard-layout {
    color: #fff;
    &__ {
        direction: rtl;
        div {
            direction: ltr;
        }
    }
    &__img1 {
        position: absolute;
    }
    &__img2 {
        position: absolute;
        top: 250px;
        display: none;
    }
    &__img3 {
        top: 250px;
        display: none;
    }

    &__progress-bar {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &__deactive-bar {
        width: 6px;
        height: 60px;
        background-color: #2c3458;
    }

    &__active-bar {
        width: 6px;
        height: 60px;
        background-color: #eaf7fa;
    }
    &__learn-more {
        margin-top: auto;
        color: #d3d3d3a0;
        font-size: 18px;
    }

    &__img {
        height: auto;
        @include md {
            height: 600px;
        }
        // position: absolute;
    }

    &__lynk-ads {
        margin-top: 24px;
        min-width: 100px;
        border: 1px solid white;
        text-align: center;
        border-radius: 5px;
        margin-left: 10px;
        margin-right: 10px;
        border-radius: 12px;
        border: 1px solid #7b86bb;
        padding: 12px;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        @include xs {
            font-size: 14px;
        }
        @include sm {
            margin-left: 16px;
            margin-right: 16px;
            padding: 18px;
            font-size: 20px;
        }

        @media (min-width: 768px) {
            font-size: 16px;
        }

        @media (min-width: 850px) {
            font-size: 18px;
        }
        @media (min-width: 1024px) {
            margin-left: 12px;
            margin-right: 12px;
            padding: 12px;
            font-size: 16px;
        }
        @include xl {
            padding: 20px;

            font-size: 18px;
        }
    }

    &__request-label {
        color: #aaa;
    }
    &__lynk-ads-title {
        color: #eaf7fa;

        text-align: center;
        font-family: "Inter", sans-serif;

        font-style: normal;
        font-weight: 400;
        line-height: normal;
        max-width: 960px;
        margin: 20px auto;
        font-size: 14px;
        @include xs {
            font-size: 20px;
        }
        @include sm {
            font-size: 28px;
        }
        @include md {
            font-size: 36px;
        }
    }
    &__lynk-ads-title-simple {
        color: #d2eaa4;
        font-family: "Inter", sans-serif;
        font-size: 14px;
        @include xs {
            font-size: 20px;
        }
        @include sm {
            font-size: 28px;
        }
        @include md {
            font-size: 36px;
        }
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    &__lynk-textarea {
        background-color: #2c3458;
        padding: 10px;
        border-radius: 5px;
    }
    &__why-use {
        color: #7b86bb;
        text-align: center;
        font-family: "Open Sans", sans-serif;

        font-size: 14px;
        @include xs {
            font-size: 16px;
        }
        @include sm {
            font-size: 18px;
        }
        @include md {
            font-size: 20px;
        }
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    &__request-fund-title {
        color: #eaf7fa;
    }
    &__request-fund-progress {
        width: 6px;
        height: 60px;
        flex-shrink: 0;
    }
    &__request-desc {
        color: #c8cde3;
        flex-shrink: 0;
        line-height: 1.5;
    }

    &__request-desc-lg {
        color: #c8cde3;
        flex-shrink: 0;
        height: 300px;
        line-height: 1.5;
    }

    &__manage-contacts {
        border-radius: 10px;
        color: rgb(221, 221, 17);
        padding: 5px;
        font-size: 12px;
        margin-left: 20px;
        cursor: pointer;
        text-align: center;
        border: 1px solid rgb(221, 221, 17);
    }
    &__title-wrapper {
        max-width: 90%;
        margin-left: auto;
        margin-right: auto;
        @include md {
            margin-top: 35px;
        }
    }
    &__title {
        align-self: flex-start;
        font-weight: 400;
        width: 700px;
        line-height: normal;
        font-size: 24px;
        @include sm {
            font-size: 36px;
        }

        @include md {
            font-size: 48px;
        }
    }
    &__chart {
        background: #222;
        padding: 1rem;
        border-radius: 1rem;
    }

    &__support {
        color: #7b86bb;
        font-family: "Open Sans", sans-serif;

        font-style: normal;
        font-weight: 600;
        line-height: normal;
        font-size: 10px;
        line-height: 1.5;
        @media (min-width: 300px) {
            font-size: 12px;
        }
        @include xs {
            font-size: 17px;
        }

        @include lg {
            font-size: 20px;
        }
    }
    padding: 24px 0px;
    min-height: calc(100vh - 140px);
    @include sm {
        min-height: calc(100vh - 80px);
    }

    &__secure-audited {
        color: #7b86bb;

        font-family: "Open Sans", sans-serif;

        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    &__imgcontainer {
        @include md {
            width: calc(100vw - 80px);
        }
        @include lg {
            width: calc(100vw - 140px);
        }
        @include xxl {
            width: 1320px;
        }
        > img {
            max-width: 75%;
        }
        .title {
            margin-right: 10px;
            display: flex;
            flex-direction: column;
        }
    }
    &__swap-share {
        background-color: #989898;
        margin: 30px 0;
        width: 100%;
    }
}

.breadcrumbs {
    margin-top: auto;
}

.title {
    width: 400px;
    font-size: 30px;
}

.breadcrumb {
    width: 6px;
    height: 45px;
    margin: 4px;
    background-color: #2c3458;
}

.breadcrumb.active {
    background-color: white;
}
</style>
