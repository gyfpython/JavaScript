// 可选参数和默认参数
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

let result3 = buildName("Bob", "Adams");

function buildName1(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName1("Bob");  // works correctly now
let result2 = buildName1("Bob", "Adams");  // ah, just right
// 默认值
function buildName2(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
let user1 = buildName2("Bob");                  // works correctly now, returns "Bob Smith"
let user2 = buildName2("Bob", undefined);       // still works, also returns "Bob Smith"
let user4 = buildName2("Bob", "Adams");         // ah, just right

// 剩余参数
function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }
  
  let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");

//  this和箭头函数
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);