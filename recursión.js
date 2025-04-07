const gifts = ['pelota', "laptop", 'muñeca', 'bicicleta', 'libro', 'rompecabezas', 'Nintendo Switch', 'calcetines'];

function findGift(gifts, giftName, index = 0) {
    if (index === gifts.length) {
        return `El regalo "${giftName}" no está en la lista.`;
    }

    if (gifts[index].toLowerCase() === giftName.toLowerCase()) {
        return `¡El regalo "${giftName}" se encuentra en la posición ${index}!`;
    }

    return findGift(gifts, giftName, index + 1);
}

function searchGift() {
    const input = document.getElementById('giftInput').value.trim();
    const result = findGift(gifts, input);
    document.getElementById('result').textContent = result;
}
