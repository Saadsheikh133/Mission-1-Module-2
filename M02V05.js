// count subtotal using reduce

const cartItems = [
    { id: 'p-001', name: 'Daraz Laptop Bag', price: 1500, quantity: 1 },
    { id: 'p-002', name: 'Walton USB-C Cable', price: 550, quantity: 3 },
    { id: '003', name: 'Aarong Kurta', price: 2500, quantity: 2 }
];

const subtotal = cartItems.reduce((subtotal, product) => {
    // console.log(subtotal, product);
    return subtotal + (product.price * product.quantity)
}, 0);

// console.log(subtotal);


// find best scorer

const players = [
    { name: 'Jamal Khan', score: 77 },
    { name: 'Sheikh Mursalin', score: 80 },
    { name: 'Hamza Chowdhuri', score: 95 },
    { name: 'Topu Barmon', score: 92 },
    { name: 'Karim Khan', score: 94 }
];

const bestScorer = players.reduce((bestPlayer, player) => {
    // console.log(bestPlayer, player);
    if (bestPlayer.score > player.score) {
        return bestPlayer;
    };
    return player;
}, players[0]);

console.log(bestScorer);