import { ref, onMounted, onUnmounted } from "vue";

export function useDetectScrolledDown() {
    const isScrolledDown = ref(false);
    let lastScrollY = window.scrollY;
    let ticking = false;
    const threshold = 25;

    const updateScrollState = () => {
        const currentScrollY = window.scrollY;

        // Only toggle when scrolled beyond threshold
        if (currentScrollY > lastScrollY + threshold) {
            isScrolledDown.value = true;
            lastScrollY = currentScrollY;
        } else if (currentScrollY < lastScrollY - threshold) {
            // Only reset if near the top
            if (currentScrollY <= threshold) {
                isScrolledDown.value = false;
            }
            lastScrollY = currentScrollY;
        }

        ticking = false;
    };

    const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollState);
            ticking = true;
        }
    };

    onMounted(() => {
        lastScrollY = window.scrollY;
        window.addEventListener("scroll", onScroll);
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", onScroll);
    });

    return { isScrolledDown };
}
