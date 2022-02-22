const shop = {
    name: 'jane super shop',
    ceo: { name: 'jane alom', age: 20, address: 'habiganj, sylhet' },
    manager: { name: 'md omuk', age: 25, address: 'dhaka, bd' },
    propit: 500000,
    isExpencive: false,
}
const shopStringifyed = JSON.stringify(shop);
console.log(shopStringifyed);
// console.log(shop);
const converted = JSON.parse(shopStringifyed);
