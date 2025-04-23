const { words } = require('../script.js');

describe("Kannada Words Dataset", () => {
    test("should contain 'Hello' in English and 'ನಮಸ್ಕಾರ' in Kannada", () => {
        const helloWord = words.find(w => w.english === 'Hello');
        expect(helloWord).toBeDefined();
        expect(helloWord.kannada).toBe('ನಮಸ್ಕಾರ');
    });

    test("should have at least 20 words", () => {
        expect(words.length).toBeGreaterThanOrEqual(20);
    });

    test("each word should have an English, Kannada, and pronunciation field", () => {
        for (const word of words) {
            expect(word).toHaveProperty('english');
            expect(word).toHaveProperty('kannada');
            expect(word).toHaveProperty('pronunciation');
        }
    });
});
