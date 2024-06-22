const emojiDictionary = {
    'a': '🍎',
    'b': '🍌',
    'c': '🌊',
    'd': '🐬',
    'e': '🍆',
    'f': '🌸',
    'g': '🍇',
    'h': '🌺',
    'i': '🍦',
    'j': '🍏',
    'k': '🍪',
    'l': '🍋',
    'm': '🍈',
    'n': '🌙',
    'o': '🍊',
    'p': '🍍',
    'q': '🌈',
    'r': '🌹',
    's': '🍓',
    't': '🌴',
    'u': '🍇',
    'v': '🌋',
    'w': '🍉',
    'x': '❌',
    'y': '🍋',
    'z': '⚡',
    ' ': '⬜'
};

document.getElementById('encryptBtn').addEventListener('click', () => {
    document.getElementById('buttons').classList.add('hidden');
    document.getElementById('encryptSection').classList.remove('hidden');
});

document.getElementById('startEncryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = inputText.split('').map(char => emojiDictionary[char.toLowerCase()] || char).join('');
    document.getElementById('outputText').innerText = encryptedText;
});
