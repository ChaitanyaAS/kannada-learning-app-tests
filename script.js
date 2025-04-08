// Enhanced Kannada word database with categories, difficulty levels, and examples
const words = [
    { 
        english: "Hello", 
        kannada: "ನಮಸ್ಕಾರ", 
        pronunciation: "Namaskāra", 
        category: "greetings", 
        difficulty: 1,
        example: "ನಮಸ್ಕಾರ, ಹೇಗಿದ್ದೀರಿ? (Hello, how are you?)",
        audio: "hello.mp3"
    },
    { 
        english: "Thank you", 
        kannada: "ಧನ್ಯವಾದ", 
        pronunciation: "Dhan'yavāda", 
        category: "greetings", 
        difficulty: 1,
        example: "ನಿಮ್ಮ ಸಹಾಯಕ್ಕೆ ಧನ್ಯವಾದ (Thank you for your help)",
        audio: "thankyou.mp3"
    },
    { 
        english: "Goodbye", 
        kannada: "ಹೋಗಿ ಬನ್ನಿ", 
        pronunciation: "Hōgi banni", 
        category: "greetings", 
        difficulty: 1,
        example: "ಹೋಗಿ ಬನ್ನಿ, ನಾಳೆ ಸಿಗೋಣ (Goodbye, see you tomorrow)",
        audio: "goodbye.mp3"
    },
    { 
        english: "Yes", 
        kannada: "ಹೌದು", 
        pronunciation: "Haudu", 
        category: "basics", 
        difficulty: 1,
        example: "ಹೌದು, ನಾನು ಸಿದ್ಧನಾಗಿದ್ದೇನೆ (Yes, I am ready)"
    },
    { 
        english: "No", 
        kannada: "ಇಲ್ಲ", 
        pronunciation: "Illā", 
        category: "basics", 
        difficulty: 1,
        example: "ಇಲ್ಲ, ನಾನು ಬರಲಾರೆ (No, I can't come)"
    },
    { 
        english: "Water", 
        kannada: "ನೀರು", 
        pronunciation: "Nīru", 
        category: "basics", 
        difficulty: 1,
        example: "ನನಗೆ ನೀರು ಬೇಕು (I need water)"
    },
    { 
        english: "Food", 
        kannada: "ಆಹಾರ", 
        pronunciation: "Āhāra", 
        category: "food", 
        difficulty: 1,
        example: "ಆಹಾರ ಸಿದ್ಧವಾಗಿದೆ (Food is ready)"
    },
    { 
        english: "How are you?", 
        kannada: "ನೀವು ಹೇಗಿದ್ದೀರಿ?", 
        pronunciation: "Nīvu hēgiddīri?", 
        category: "conversation", 
        difficulty: 2,
        example: "ನಮಸ್ಕಾರ, ನೀವು ಹೇಗಿದ್ದೀರಿ? (Hello, how are you?)"
    },
    { 
        english: "I am fine", 
        kannada: "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ", 
        pronunciation: "Nānu chennāgiddēne", 
        category: "conversation", 
        difficulty: 2,
        example: "ಧನ್ಯವಾದ, ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ (Thank you, I am fine)"
    },
    { 
        english: "What is your name?", 
        kannada: "ನಿನ್ನ ಹೆಸರೇನು?", 
        pronunciation: "Ninna hesarēnu?", 
        category: "conversation", 
        difficulty: 2,
        example: "ನಮಸ್ಕಾರ, ನಿನ್ನ ಹೆಸರೇನು? (Hello, what is your name?)"
    },
    { 
        english: "My name is...", 
        kannada: "ನನ್ನ ಹೆಸರು...", 
        pronunciation: "Nanna hesaru...", 
        category: "conversation", 
        difficulty: 2,
        example: "ನನ್ನ ಹೆಸರು ರಾಜೇಶ್ (My name is Rajesh)"
    },
    { 
        english: "Please", 
        kannada: "ದಯವಿಟ್ಟು", 
        pronunciation: "Dayaviṭṭu", 
        category: "basics", 
        difficulty: 1,
        example: "ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಕುಳಿತುಕೊಳ್ಳಿ (Please sit here)"
    },
    { 
        english: "Sorry", 
        kannada: "ಕ್ಷಮಿಸಿ", 
        pronunciation: "Kṣhamisi", 
        category: "basics", 
        difficulty: 1,
        example: "ಕ್ಷಮಿಸಿ, ನಾನು ತಡವಾಗಿ ಬಂದಿದ್ದೇನೆ (Sorry, I am late)"
    },
    { 
        english: "I don't understand", 
        kannada: "ನನಗೆ ಅರ್ಥವಾಗುತ್ತಿಲ್ಲ", 
        pronunciation: "Nanage arthavāguttilla", 
        category: "conversation", 
        difficulty: 2,
        example: "ಕ್ಷಮಿಸಿ, ನನಗೆ ಅರ್ಥವಾಗುತ್ತಿಲ್ಲ (Sorry, I don't understand)"
    },
    { 
        english: "Help", 
        kannada: "ಸಹಾಯ", 
        pronunciation: "Sahāya", 
        category: "basics", 
        difficulty: 1,
        example: "ನನಗೆ ಸಹಾಯ ಬೇಕು (I need help)"
    },
    { 
        english: "Where is...?", 
        kannada: "...ಎಲ್ಲಿದೆ?", 
        pronunciation: "...ellide?", 
        category: "travel", 
        difficulty: 2,
        example: "ಟಾಯ್ಲೆಟ್ ಎಲ್ಲಿದೆ? (Where is the toilet?)"
    },
    { 
        english: "How much?", 
        kannada: "ಎಷ್ಟು?", 
        pronunciation: "Eshtu?", 
        category: "shopping", 
        difficulty: 2,
        example: "ಇದು ಎಷ್ಟು? (How much is this?)"
    },
    { 
        english: "Delicious", 
        kannada: "ರುಚಿಕರವಾದ", 
        pronunciation: "Ruchikaravāda", 
        category: "food", 
        difficulty: 2,
        example: "ಈ ಊಟ ರುಚಿಕರವಾಗಿದೆ (This food is delicious)"
    },
    { 
        english: "Beautiful", 
        kannada: "ಸುಂದರ", 
        pronunciation: "Sundara", 
        category: "adjectives", 
        difficulty: 2,
        example: "ಈ ಸ್ಥಳ ಸುಂದರವಾಗಿದೆ (This place is beautiful)"
    },
    { 
        english: "I love you", 
        kannada: "ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ", 
        pronunciation: "Nānu ninnannu prītisuttēne", 
        category: "phrases", 
        difficulty: 3,
        example: "ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ, ಅಮ್ಮ (I love you, mom)"
    }
];

// Cultural content
const cultureContent = [
    {
        title: "Dasara Festival",
        image: "dasara.jpg",
        text: "Dasara is Karnataka's state festival celebrated for 10 days. The Mysuru Dasara is particularly famous with its grand procession of decorated elephants. The festival marks the victory of good over evil and is celebrated with great pomp across the state."
    },
    {
        title: "Kannada Proverbs",
        text: "<p><strong>\"ಅಕ್ಕಸಾಲಿಗನ ಮಗ ಅಕ್ಕಸಾಲಿಗ\"</strong> (Akka sāligana maga akka sāliga) - \"The goldsmith's son becomes a goldsmith\" (Like father, like son)</p><p><strong>\"ಹಸುವಿನ ಹಿಂದೆ ಹೋದರೆ ಹಾಲು ಸಿಗುತ್ತೆ, ಹುಲಿಯ ಹಿಂದೆ ಹೋದರೆ ಹಾಳು ಸಿಗುತ್ತೆ\"</strong> (Follow a cow to get milk, follow a tiger to get destroyed)</p><p><strong>\"ಅಂಗೈಯಲ್ಲಿ ನೀರು ಹಿಡಿಯಲು ಬರದು\"</strong> (You can't hold water in your palm) - Some things are impossible</p>"
    },
    {
        title: "Karnataka Cuisine",
        image: "karnataka-food.jpg",
        text: "Karnataka cuisine is diverse and varies regionally. Some popular dishes include:<ul><li><strong>Bisi Bele Bath</strong> - A spicy rice dish with lentils and vegetables</li><li><strong>Ragi Mudde</strong> - Finger millet balls, a staple in rural areas</li><li><strong>Mysore Pak</strong> - A sweet made from gram flour, ghee and sugar</li><li><strong>Dosa</strong> - The crispy rice pancake originated in Karnataka</li></ul>"
    },
    {
        title: "Kannada Literature",
        text: "Kannada has a rich literary tradition dating back to the 9th century. Notable works include:<ul><li><strong>Kavirajamarga</strong> (850 CE) - The earliest available work on rhetoric and poetics</li><li><strong>Pampa Bharata</strong> (941 CE) - A Jain version of the Mahabharata</li><li><strong>Vachana Sahitya</strong> - 12th century devotional literature by Shiva Sharanas</li><li>Modern writers like Kuvempu, Shivaram Karanth, and U.R. Ananthamurthy have won Jnanpith awards</li></ul>"
    }
];

// Badges system
const badges = [
    { id: 1, name: "Starter", icon: "fa-seedling", description: "Complete your first lesson", xpThreshold: 10 },
    { id: 2, name: "Explorer", icon: "fa-compass", description: "Learn 10 words", xpThreshold: 50 },
    { id: 3, name: "Scholar", icon: "fa-graduation-cap", description: "Reach level 3", xpThreshold: 150 },
    { id: 4, name: "Master", icon: "fa-crown", description: "Reach level 5", xpThreshold: 300 },
    { id: 5, name: "Streaker", icon: "fa-fire", description: "7-day streak", xpThreshold: 100 },
    { id: 6, name: "Polyglot", icon: "fa-language", description: "Learn 50 words", xpThreshold: 500 }
];

// Game state
let currentCard = 0;
let points = 0;
let streak = 0;
let level = 1;
let xp = 0;
let xpNeeded = 100;
let mode = 'flashcard';
let currentUser = null;
let currentCultureCard = 0;

// Kannada keyboard layout with vattakshara support
const keyboardLayout = [
    // Vowels
    ['ಅ', 'ಆ', 'ಇ', 'ಈ', 'ಉ', 'ಊ', 'ಋ', 'ಎ', 'ಏ', 'ಐ', 'ಒ', 'ಓ', 'ಔ'],
    // Consonants row 1
    ['ಕ', 'ಖ', 'ಗ', 'ಘ', 'ಙ', 'ಚ', 'ಛ', 'ಜ', 'ಝ', 'ಞ'],
    // Consonants row 2
    ['ಟ', 'ಠ', 'ಡ', 'ಢ', 'ಣ', 'ತ', 'ಥ', 'ದ', 'ಧ', 'ನ'],
    // Consonants row 3
    ['ಪ', 'ಫ', 'ಬ', 'ಭ', 'ಮ', 'ಯ', 'ರ', 'ಲ', 'ವ', 'ಶ'],
    // Consonants row 4
    ['ಷ', 'ಸ', 'ಹ', 'ಳ', 'ೞ', 'ಕ್ಷ', 'ಜ್ಞ'],
    // Vowel signs and halant
    ['ಾ', 'ಿ', 'ೀ', 'ು', 'ೂ', 'ೃ', 'ೆ', 'ೇ', 'ೈ', 'ೊ', 'ೋ', 'ೌ', '್'],
    // Common vattakshara combinations
    ['ಕ್ಕ', 'ಗ್ಗ', 'ಚ್ಚ', 'ಜ್ಜ', 'ಟ್ಟ', 'ಡ್ಡ', 'ತ್ತ', 'ದ್ದ', 'ನ್ನ', 'ಮ್ಮ', 'ಸ್ಸ'],
    // Numbers and special characters
    ['೧', '೨', '೩', '೪', '೫', '೬', '೭', '೮', '೯', '೦', '?', '!', '.', ',', ';']
];

// Initialize the game
window.onload = function() {
    // Check if user is already logged in (from localStorage)
    const savedUser = localStorage.getItem('kannadaUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        points = currentUser.points || 0;
        level = currentUser.level || 1;
        streak = currentUser.streak || 0;
        xp = currentUser.xp || 0;
        xpNeeded = currentUser.xpNeeded || 100;
        showGame();
        updateUserInfo();
    } else {
        showAuth();
    }
    
    // Try to load streak from localStorage
    const savedStreak = localStorage.getItem('kannadaStreak');
    if (savedStreak) {
        streak = parseInt(savedStreak);
        updateStats();
    }
    
    // Initialize keyboard
    initKeyboard();
    
    // Set word of the day
    setWordOfTheDay();
    
    // Load culture content
    loadCultureContent();
};

function initKeyboard() {
    const keyboard = document.getElementById('kannada-keyboard');
    keyboard.innerHTML = '';
    
    // Add regular keys
    keyboardLayout.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';
        
        row.forEach(key => {
            const keyBtn = document.createElement('button');
            keyBtn.className = 'keyboard-key';
            keyBtn.textContent = key;
            
            // Add special classes for vattakshara and halant keys
            if (key.length > 1 && key.includes('್')) {
                keyBtn.classList.add('vattakshara');
            } else if (key === '್') {
                keyBtn.classList.add('halant');
            }
            
            keyBtn.onclick = () => insertKannada(key);
            rowDiv.appendChild(keyBtn);
        });
        
        keyboard.appendChild(rowDiv);
    });
    
    // Add control keys
    const controlsRow = document.createElement('div');
    controlsRow.className = 'keyboard-row';
    
    const backspaceBtn = document.createElement('button');
    backspaceBtn.className = 'keyboard-key special';
    backspaceBtn.textContent = '⌫ Backspace';
    backspaceBtn.onclick = backspace;
    controlsRow.appendChild(backspaceBtn);
    
    const clearBtn = document.createElement('button');
    clearBtn.className = 'keyboard-key special';
    clearBtn.textContent = 'Clear';
    clearBtn.onclick = () => document.getElementById('typing-answer').value = '';
    controlsRow.appendChild(clearBtn);
    
    const spaceBtn = document.createElement('button');
    spaceBtn.className = 'keyboard-key special';
    spaceBtn.textContent = 'Space';
    spaceBtn.onclick = () => insertKannada(' ');
    controlsRow.appendChild(spaceBtn);
    
    keyboard.appendChild(controlsRow);
}

function setWordOfTheDay() {
    // Simple implementation - just pick a random word
    const today = new Date().getDate();
    const wordIndex = today % words.length;
    const word = words[wordIndex];
    
    document.getElementById('wotd-kannada').textContent = word.kannada;
    document.getElementById('wotd-english').textContent = word.english;
    document.getElementById('wotd-pronunciation').textContent = word.pronunciation;
}

function loadCultureContent() {
    const cultureContainer = document.getElementById('culture-mode');
    cultureContent.forEach((content, index) => {
        const card = document.createElement('div');
        card.className = 'culture-card';
        card.id = `culture-card-${index + 1}`;
        
        let html = `<div class="culture-title">${content.title}</div>`;
        if (content.image) {
            html += `<img src="images/${content.image}" alt="${content.title}" class="culture-image">`;
        }
        html += `<div class="culture-text">${content.text}</div>`;
        
        card.innerHTML = html;
        cultureContainer.insertBefore(card, document.querySelector('.culture-nav'));
    });
    
    // Activate first card
    document.querySelector('.culture-card').classList.add('active');
}

// Authentication functions
function showAuth() {
    document.getElementById('auth-container').classList.add('active');
    document.getElementById('game-container').classList.remove('active');
    showLogin();
}

function showGame() {
    document.getElementById('auth-container').classList.remove('active');
    document.getElementById('game-container').classList.add('active');
    updateStats();
    displayCard();
}

function showLogin() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('register-form').classList.remove('active');
    // Clear any success messages
    const successMsg = document.querySelector('.success-message');
    if (successMsg) successMsg.remove();
}

function showRegister() {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('register-form').classList.add('active');
}

function handleLogin() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    let isValid = true;

    // Clear previous errors
    document.getElementById('login-email-error').textContent = '';
    document.getElementById('login-password-error').textContent = '';
    document.getElementById('login-email').classList.remove('input-error');
    document.getElementById('login-password').classList.remove('input-error');

    // Validation
    if (!email) {
        document.getElementById('login-email-error').textContent = 'Email is required';
        document.getElementById('login-email').classList.add('input-error');
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('login-email-error').textContent = 'Invalid email format';
        document.getElementById('login-email').classList.add('input-error');
        isValid = false;
    }

    if (!password) {
        document.getElementById('login-password-error').textContent = 'Password is required';
        document.getElementById('login-password').classList.add('input-error');
        isValid = false;
    }

    if (!isValid) return;

    // Check credentials
    const users = JSON.parse(localStorage.getItem('kannadaUsers')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Successful login
        currentUser = user;
        points = user.points || 0;
        level = user.level || 1;
        streak = user.streak || 0;
        xp = user.xp || 0;
        xpNeeded = user.xpNeeded || 100;
        
        localStorage.setItem('kannadaUser', JSON.stringify(user));
        updateUserInfo();
        showGame();
    } else {
        document.getElementById('login-password-error').textContent = 'Invalid email or password';
        document.getElementById('login-password').classList.add('input-error');
    }
}

function handleRegister() {
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;
    let isValid = true;

    // Clear previous errors
    const errorIds = ['register-name', 'register-email', 'register-password', 'register-confirm'];
    errorIds.forEach(id => {
        document.getElementById(`${id}-error`).textContent = '';
        document.getElementById(id).classList.remove('input-error');
    });

    // Validation
    if (!name) {
        document.getElementById('register-name-error').textContent = 'Name is required';
        document.getElementById('register-name').classList.add('input-error');
        isValid = false;
    }

    if (!email) {
        document.getElementById('register-email-error').textContent = 'Email is required';
        document.getElementById('register-email').classList.add('input-error');
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('register-email-error').textContent = 'Invalid email format';
        document.getElementById('register-email').classList.add('input-error');
        isValid = false;
    }

    if (!password) {
        document.getElementById('register-password-error').textContent = 'Password is required';
        document.getElementById('register-password').classList.add('input-error');
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('register-password-error').textContent = 'Password must be at least 6 characters';
        document.getElementById('register-password').classList.add('input-error');
        isValid = false;
    }

    if (password !== confirm) {
        document.getElementById('register-confirm-error').textContent = 'Passwords do not match';
        document.getElementById('register-confirm').classList.add('input-error');
        isValid = false;
    }

    if (!isValid) return;

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('kannadaUsers')) || [];
    if (users.some(u => u.email === email)) {
        document.getElementById('register-email-error').textContent = 'Email already registered';
        document.getElementById('register-email').classList.add('input-error');
        return;
    }

    // Create new user
    const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password,
        points: 0,
        level: 1,
        streak: 0,
        xp: 0,
        xpNeeded: 100,
        joined: new Date().toISOString(),
        progress: {},
        badges: []
    };

    users.push(newUser);
    localStorage.setItem('kannadaUsers', JSON.stringify(users));
    
    // Show success and switch to login
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.textContent = 'Registration successful! Please login';
    document.getElementById('register-form').appendChild(successMsg);
    
    setTimeout(() => {
        showLogin();
        document.getElementById('login-email').value = email;
        document.getElementById('login-password').value = '';
    }, 1500);
}

function logout() {
    currentUser = null;
    localStorage.removeItem('kannadaUser');
    showAuth();
}

function toggleUserMenu() {
    document.getElementById('user-dropdown').classList.toggle('active');
}

// Update user info in the dropdown
function updateUserInfo() {
    if (currentUser) {
        document.getElementById('user-name').textContent = currentUser.name;
        document.getElementById('user-email').textContent = currentUser.email;
    }
}

// Game functions
function setMode(newMode) {
    mode = newMode;
    
    // Update active mode buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show/hide modes
    document.querySelectorAll('.game-mode').forEach(modeEl => {
        modeEl.classList.remove('active');
    });
    document.getElementById(`${newMode}-mode`).classList.add('active');
    
    if (mode === 'quiz') {
        displayQuestion();
    } else if (mode === 'flashcard') {
        displayCard();
    } else if (mode === 'typing') {
        displayTypingPrompt();
    }
}

function displayCard() {
    const card = words[currentCard];
    document.getElementById('card-front-text').textContent = card.english;
    document.getElementById('card-back-text').textContent = card.kannada;
    document.getElementById('card-pronunciation').textContent = card.pronunciation;
    
    // Display example if available
    if (card.example) {
        document.getElementById('word-example').textContent = card.example;
    } else {
        document.getElementById('word-example').textContent = '';
    }
    
    // Reset card flip state
    document.querySelector('.flashcard').classList.remove('flipped');
}

function flipCard() {
    document.querySelector('.flashcard').classList.toggle('flipped');
}

function nextCard() {
    currentCard = (currentCard + 1) % words.length;
    if (mode === 'flashcard') {
        displayCard();
    } else if (mode === 'quiz') {
        displayQuestion();
    } else if (mode === 'typing') {
        displayTypingPrompt();
    }
}

function displayQuestion() {
    const correctWord = words[currentCard];
    const options = [correctWord.kannada];
    
    // Add wrong options
    while (options.length < 4) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        if (!options.includes(randomWord.kannada)) {
            options.push(randomWord.kannada);
        }
    }
    
    // Shuffle options
    options.sort(() => Math.random() - 0.5);
    
    document.getElementById('quiz-question').textContent = 
        `What is the Kannada word for "${correctWord.english}"?`;
    
    const optionButtons = document.querySelectorAll('#quiz-options .quiz-option');
    optionButtons.forEach((btn, index) => {
        btn.textContent = options[index];
        btn.classList.remove('correct', 'incorrect');
    });
    
    document.getElementById('quiz-result').textContent = '';
    document.getElementById('quiz-explanation').textContent = '';
}

function checkAnswer(optionIndex) {
    const selectedBtn = document.querySelectorAll('#quiz-options .quiz-option')[optionIndex];
    const correctWord = words[currentCard];
    
    if (selectedBtn.textContent === correctWord.kannada) {
        selectedBtn.classList.add('correct');
        document.getElementById('quiz-result').textContent = 'Correct!';
        document.getElementById('quiz-result').style.color = '#4CAF50';
        document.getElementById('quiz-explanation').textContent = correctWord.example || '';
        playSound('correct');
        addPoints(10);
        trackProgress(true);
    } else {
        selectedBtn.classList.add('incorrect');
        document.getElementById('quiz-result').textContent = `Incorrect! The correct answer is: ${correctWord.kannada}`;
        document.getElementById('quiz-result').style.color = '#f44336';
        document.getElementById('quiz-explanation').textContent = correctWord.example || '';
        playSound('wrong');
        trackProgress(false);
        
        // Highlight correct answer
        const optionButtons = document.querySelectorAll('#quiz-options .quiz-option');
        optionButtons.forEach(btn => {
            if (btn.textContent === correctWord.kannada) {
                btn.classList.add('correct');
            }
        });
    }
    
    setTimeout(() => {
        nextCard();
    }, 2000);
}

function displayTypingPrompt() {
    const word = words[currentCard];
    document.getElementById('typing-prompt').textContent = 
        `Type the Kannada word for "${word.english}":`;
    document.getElementById('typing-answer').value = '';
    document.getElementById('typing-result').textContent = '';
    document.getElementById('typing-answer').focus();
}

function checkTyping() {
    const userAnswer = document.getElementById('typing-answer').value.trim();
    const correctWord = words[currentCard];
    
    if (userAnswer.toLowerCase() === correctWord.kannada.toLowerCase() || 
        userAnswer.toLowerCase() === correctWord.pronunciation.toLowerCase()) {
        document.getElementById('typing-result').textContent = 'Correct!';
        document.getElementById('typing-result').style.color = '#4CAF50';
        playSound('correct');
        addPoints(15); // More points for typing as it's harder
        trackProgress(true);
    } else {
        document.getElementById('typing-result').textContent = 
            `Incorrect! The correct answer is: ${correctWord.kannada} (${correctWord.pronunciation})`;
        document.getElementById('typing-result').style.color = '#f44336';
        playSound('wrong');
        trackProgress(false);
    }
    
    setTimeout(() => {
        nextCard();
    }, 2000);
}

function toggleKeyboard() {
    const keyboard = document.getElementById('kannada-keyboard');
    keyboard.style.display = keyboard.style.display === 'none' ? 'block' : 'none';
}

function playCurrentWord() {
    const currentWord = words[currentCard];
    playWordAudio(currentWord);
}

function playWOTD() {
    const word = {
        kannada: document.getElementById('wotd-kannada').textContent,
        english: document.getElementById('wotd-english').textContent,
        pronunciation: document.getElementById('wotd-pronunciation').textContent
    };
    playWordAudio(word);
}

function playWordAudio(word) {
    const audio = document.getElementById('word-audio');
    
    if (word.audio) {
        audio.src = `audio/${word.audio}`;
        audio.play().catch(e => {
            // Fallback to text-to-speech if audio file fails
            speakKannada(word.kannada);
        });
    } else {
        // Use text-to-speech as fallback
        speakKannada(word.kannada);
    }
}

function speakKannada(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'kn-IN';
        speechSynthesis.speak(utterance);
    } else {
        alert('Text-to-speech not supported in your browser');
    }
}

function playSound(type) {
    const audio = document.getElementById(`${type}-sound`);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}

function insertKannada(char) {
    const input = document.getElementById('typing-answer');
    const startPos = input.selectionStart;
    const endPos = input.selectionEnd;
    const currentValue = input.value;
    
    // Special handling for halant to create proper vattakshara
    if (char === '್') {
        if (startPos > 0) {
            const prevChar = currentValue[startPos - 1];
            if (isKannadaConsonant(prevChar)) {
                // Insert halant after the consonant
                input.value = currentValue.substring(0, startPos) + '್' + currentValue.substring(endPos);
                input.setSelectionRange(startPos + 1, startPos + 1);
            }
        }
        return;
    }
    
    // If current character is consonant and previous is halant, combine them
    if (isKannadaConsonant(char) && startPos > 0 && currentValue[startPos - 1] === '್') {
        // Move cursor back to before the halant
        const beforeHalant = startPos - 1;
        if (beforeHalant > 0 && isKannadaConsonant(currentValue[beforeHalant - 1])) {
            // Replace consonant+halant with consonant+halant+new consonant
            input.value = currentValue.substring(0, beforeHalant - 1) + 
                          currentValue[beforeHalant - 1] + '್' + char + 
                          currentValue.substring(endPos);
            input.setSelectionRange(beforeHalant + 1, beforeHalant + 1);
        }
    } else {
        // Normal insertion
        input.value = currentValue.substring(0, startPos) + char + currentValue.substring(endPos);
        input.setSelectionRange(startPos + char.length, startPos + char.length);
    }
    
    input.focus();
}

// Helper function to check if a character is a Kannada consonant
function isKannadaConsonant(char) {
    const consonants = [
        'ಕ', 'ಖ', 'ಗ', 'ಘ', 'ಙ', 
        'ಚ', 'ಛ', 'ಜ', 'ಝ', 'ಞ',
        'ಟ', 'ಠ', 'ಡ', 'ಢ', 'ಣ',
        'ತ', 'ಥ', 'ದ', 'ಧ', 'ನ',
        'ಪ', 'ಫ', 'ಬ', 'ಭ', 'ಮ',
        'ಯ', 'ರ', 'ಲ', 'ವ', 'ಶ',
        'ಷ', 'ಸ', 'ಹ', 'ಳ', 'ೞ'
    ];
    return consonants.includes(char);
}

function backspace() {
    const input = document.getElementById('typing-answer');
    const startPos = input.selectionStart;
    const endPos = input.selectionEnd;
    
    if (startPos === endPos && startPos > 0) {
        // Check if we're deleting a vattakshara (conjunct consonant)
        if (startPos > 1 && input.value[startPos - 1] === '್') {
            // Delete the halant and the consonant before it
            input.value = input.value.substring(0, startPos - 2) + input.value.substring(endPos);
            input.setSelectionRange(startPos - 2, startPos - 2);
        } else {
            // Delete one character before cursor
            input.value = input.value.substring(0, startPos - 1) + input.value.substring(endPos);
            input.setSelectionRange(startPos - 1, startPos - 1);
        }
    } else if (startPos !== endPos) {
        // Delete selected text
        input.value = input.value.substring(0, startPos) + input.value.substring(endPos);
        input.setSelectionRange(startPos, startPos);
    }
    
    input.focus();
}

function trackProgress(correct) {
    if (!currentUser) return;
    
    if (!currentUser.progress) {
        currentUser.progress = {};
    }
    
    const wordId = words[currentCard].english.toLowerCase().replace(/\s+/g, '-');
    
    if (!currentUser.progress[wordId]) {
        currentUser.progress[wordId] = {
            attempts: 0,
            correct: 0,
            lastAttempt: new Date().toISOString()
        };
    }
    
    currentUser.progress[wordId].attempts++;
    if (correct) {
        currentUser.progress[wordId].correct++;
    }
    currentUser.progress[wordId].lastAttempt = new Date().toISOString();
    
    // Save to localStorage
    localStorage.setItem('kannadaUser', JSON.stringify(currentUser));
}

function addPoints(amount) {
    points += amount;
    xp += amount;
    
    // Update user's points in localStorage
    if (currentUser) {
        currentUser.points += amount;
        currentUser.xp += amount;
        
        // Check for new badges
        checkForNewBadges();
        
        localStorage.setItem('kannadaUser', JSON.stringify(currentUser));
        
        // Update in users array
        const users = JSON.parse(localStorage.getItem('kannadaUsers')) || [];
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        if (userIndex !== -1) {
            users[userIndex].points += amount;
            users[userIndex].xp += amount;
            localStorage.setItem('kannadaUsers', JSON.stringify(users));
        }
    }
    
    // Check for level up
    if (xp >= xpNeeded) {
        level++;
        xp -= xpNeeded;
        xpNeeded = Math.floor(xpNeeded * 1.2); // Increase needed XP for next level
        
        // Update user level
        if (currentUser) {
            currentUser.level = level;
            currentUser.xp = xp;
            currentUser.xpNeeded = xpNeeded;
            localStorage.setItem('kannadaUser', JSON.stringify(currentUser));
            
            const users = JSON.parse(localStorage.getItem('kannadaUsers')) || [];
            const userIndex = users.findIndex(u => u.email === currentUser.email);
            if (userIndex !== -1) {
                users[userIndex].level = level;
                users[userIndex].xp = xp;
                users[userIndex].xpNeeded = xpNeeded;
                localStorage.setItem('kannadaUsers', JSON.stringify(users));
            }
        }
        
        // Show level up message
        alert(`Level Up! You are now level ${level}`);
    }
    
    // Update streak
    updateStreak();
    updateStats();
}

function checkForNewBadges() {
    if (!currentUser) return;
    
    // Initialize badges array if it doesn't exist
    if (!currentUser.badges) {
        currentUser.badges = [];
    }
    
    let newBadges = [];
    
    // Check each badge
    badges.forEach(badge => {
        // Skip if user already has this badge
        if (currentUser.badges.includes(badge.id)) return;
        
        // Check if user meets the criteria
        if (currentUser.xp >= badge.xpThreshold) {
            currentUser.badges.push(badge.id);
            newBadges.push(badge);
        }
    });
    
    // Show notification for new badges
    if (newBadges.length > 0) {
        let message = 'You earned new badges!\n';
        newBadges.forEach(badge => {
            message += `\n${badge.name}: ${badge.description}`;
        });
        alert(message);
        
        // Update localStorage
        localStorage.setItem('kannadaUser', JSON.stringify(currentUser));
        
        // Update in users array
        const users = JSON.parse(localStorage.getItem('kannadaUsers')) || [];
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        if (userIndex !== -1) {
            users[userIndex].badges = currentUser.badges;
            localStorage.setItem('kannadaUsers', JSON.stringify(users));
        }
    }
}

function updateStreak() {
    const today = new Date().toDateString();
    const lastPlayed = localStorage.getItem('kannadaLastPlayed');
    
    if (lastPlayed !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastPlayed === yesterday.toDateString()) {
            streak++;
        } else {
            streak = 1;
        }
        
        localStorage.setItem('kannadaStreak', streak);
        localStorage.setItem('kannadaLastPlayed', today);
        
        // Update user streak
        if (currentUser) {
            currentUser.streak = streak;
            localStorage.setItem('kannadaUser', JSON.stringify(currentUser));
            
            const users = JSON.parse(localStorage.getItem('kannadaUsers')) || [];
            const userIndex = users.findIndex(u => u.email === currentUser.email);
            if (userIndex !== -1) {
                users[userIndex].streak = streak;
                localStorage.setItem('kannadaUsers', JSON.stringify(users));
            }
        }
    }
}

function updateStats() {
    document.getElementById('points').textContent = points;
    document.getElementById('streak').textContent = streak;
    document.getElementById('level').textContent = level;
    document.getElementById('progress-bar').style.width = `${(xp / xpNeeded) * 100}%`;
    document.getElementById('progress-text').textContent = `${xp}/${xpNeeded} XP`;
}

// Culture card navigation
function nextCultureCard() {
    const cards = document.querySelectorAll('.culture-card');
    cards[currentCultureCard].classList.remove('active');
    
    currentCultureCard = (currentCultureCard + 1) % cards.length;
    cards[currentCultureCard].classList.add('active');
}

function prevCultureCard() {
    const cards = document.querySelectorAll('.culture-card');
    cards[currentCultureCard].classList.remove('active');
    
    currentCultureCard = (currentCultureCard - 1 + cards.length) % cards.length;
    cards[currentCultureCard].classList.add('active');
}

// Modal functions
function showProfile() {
    if (!currentUser) return;
    
    document.getElementById('profile-name').textContent = currentUser.name;
    document.getElementById('profile-email').textContent = currentUser.email;
    document.getElementById('profile-joined').textContent = new Date(currentUser.joined).toLocaleDateString();
    
    document.getElementById('profile-level').textContent = currentUser.level;
    document.getElementById('profile-points').textContent = currentUser.points;
    document.getElementById('profile-streak').textContent = currentUser.streak;
    
    // Count learned words (words with at least one correct attempt)
    let learnedWords = 0;
    if (currentUser.progress) {
        learnedWords = Object.values(currentUser.progress).filter(p => p.correct > 0).length;
    }
    document.getElementById('profile-words').textContent = learnedWords;
    
    // Display badges
    const badgesContainer = document.getElementById('badges-container');
    badgesContainer.innerHTML = '';
    
    badges.forEach(badge => {
        const badgeDiv = document.createElement('div');
        badgeDiv.className = `badge ${currentUser.badges?.includes(badge.id) ? 'unlocked' : ''}`;
        
        const icon = document.createElement('i');
        icon.className = `fas ${badge.icon}`;
        badgeDiv.appendChild(icon);
        
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.textContent = `${badge.name}: ${badge.description}`;
        badgeDiv.appendChild(tooltip);
        
        badgesContainer.appendChild(badgeDiv);
    });
    
    document.getElementById('profile-modal').classList.add('active');
    document.getElementById('user-dropdown').classList.remove('active');
}

function showLeaderboard() {
    const users = JSON.parse(localStorage.getItem('kannadaUsers')) || [];
    
    // Sort users by points (descending)
    const sortedUsers = [...users].sort((a, b) => b.points - a.points);
    
    // Populate leaderboard
    const leaderboardBody = document.getElementById('leaderboard-body');
    leaderboardBody.innerHTML = '';
    
    sortedUsers.forEach((user, index) => {
        const row = document.createElement('tr');
        if (currentUser && user.email === currentUser.email) {
            row.classList.add('current-user');
        }
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.level}</td>
            <td>${user.points}</td>
        `;
        
        leaderboardBody.appendChild(row);
    });
    
    document.getElementById('leaderboard-modal').classList.add('active');
    document.getElementById('user-dropdown').classList.remove('active');
}

function showLeaderboardTab(tab) {
    // In a real app, we would filter by date ranges
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
    
    // Close user dropdown when clicking outside
    if (!event.target.closest('.user-menu') && !event.target.closest('.user-dropdown')) {
        document.getElementById('user-dropdown').classList.remove('active');
    }
}