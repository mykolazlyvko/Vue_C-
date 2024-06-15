<template>
    <div class="header-container sticky top-0 left-0">
        <div class="header-wrapper header items-center flex">
            <div class="flex items-center justify-center">
                <a href="/" class="flex items-center">
                    <img
                        src="/assets/images/icons/logo.png"
                        alt="Lynk"
                        class="h-[25px] sm:h-[30px] md:h-[35px]"
                    />
                    <img
                        src="/assets/images/icons/logo-title-header.svg"
                        alt="Lynk"
                        class="ml-2 h-[20px] sm:h-[25px] md:h-[30px]"
                    />
                </a>
            </div>
            <div class="header-wrapper__login-wrapper">
                <NuxtLink :to="'/'">
                    <button
                        class="header__profile-btn text-[12px] py-3 px-2 sm:text-[14px] text-bold"
                    >
                        <span>Join the Beta</span>
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {},
    methods: {
        toggleMenu() {
            this.open = !this.open;
        },

        getExploreColor() {
            return this.routeText == "heartbeat" ||
                this.routeText == "leaderboard" ||
                this.routeText == "referrals"
                ? "font-extrabold text-white"
                : "font-medium text-gray-400";
        },
    },
    mounted() {},
    data() {
        return {
            open: false,
        };
    },
};
</script>

<style lang="scss">
.version {
    color: #ccc;
    font-size: 10px;
    margin: 12px;
}

.header-container {
    border-bottom: 1px solid #444;
}
.header-wrapper {
    padding: 0 10px;
    @include xs {
        padding: 0 30px;
    }
    @include sm {
        padding: 0 40px;
    }
    @include xxl {
        max-width: 1320px;
        padding: 0;
        margin: 0 auto;
    }
    &__publicaddress {
        display: flex;
        align-items: center;
        margin-right: 1rem;
        font-size: 14px;
        @media (max-width: 800px) {
            display: none;
        }
    }

    &__publicaddress::before {
        content: "";
        margin-right: 5px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #009345;
    }

    &__login-wrapper {
        margin-left: auto;
        display: flex;
        align-items: center;
    }
}

@keyframes pulse {
    0% {
        transform: scale(0.97);
        box-shadow: 0 0 0 0 rgba(206, 17, 38, 0.7);
    }

    70% {
        transform: scale(1);
        box-shadow: 0 0 0 5px rgba(206, 17, 38, 0);
    }

    100% {
        transform: scale(0.98);
        box-shadow: 0 0 0 0 rgba(206, 17, 38, 0);
    }
}

.header {
    height: 60px;
    @include md {
        height: 75px;
    }
    backdrop-filter: blur(30px);
    .explore-menu {
        background-color: #222;
    }
    .soon-badge {
        margin-left: auto;
        font-size: 10px;
        text-transform: uppercase;
        opacity: 0.5;
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
}
</style>
