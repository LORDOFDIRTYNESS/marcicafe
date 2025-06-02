import { computed } from "vue";

// Function to compute total characters
export const computeTotalChars = (titleWords) => {
    return computed(() =>
        titleWords.value.reduce((sum, word) => sum + word.length, 0)
    );
};

const totalDuration = 1.2; // seconds

// Global index function for characters
export const globalCharIndex = (titleWords, wordIndex, charIndex) => {
    return titleWords.value
        .slice(0, wordIndex)
        .reduce((sum, word) => sum + word.length, 0) + charIndex;
};