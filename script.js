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

const reverseEmojiDictionary = Object.entries(emojiDictionary).reduce((obj, [key, value]) => {
    obj[value] = key;
    return obj;
}, {});

document.getElementById('encryptBtn').addEventListener('click', () => {
    document.getElementById('buttons').classList.add('hidden');
    document.getElementById('encryptSection').classList.remove('hidden');
});

document.getElementById('decryptBtn').addEventListener('click', () => {
    document.getElementById('buttons').classList.add('hidden');
    document.getElementById('decryptSection').classList.remove('hidden');
});

document.getElementById('startEncryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputTextEncrypt').value;
    const encryptedText = inputText.split('').map(char => emojiDictionary[char.toLowerCase()] || char).join('');
    document.getElementById('outputTextEncrypt').innerText = encryptedText;
});

document.getElementById('startDecryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputTextDecrypt').value;
    let decryptedText = '';
    for (let char of inputText) {
        decryptedText += reverseEmojiDictionary[char] || char;
    }
    document.getElementById('outputTextDecrypt').innerText = decryptedText;
});
