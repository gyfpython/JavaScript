// 可选参数和默认参数
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
var result3 = buildName("Bob", "Adams");
function buildName1(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName1("Bob"); // works correctly now
var result2 = buildName1("Bob", "Adams"); // ah, just right
// 默认值
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var user1 = buildName2("Bob"); // works correctly now, returns "Bob Smith"
var user2 = buildName2("Bob", undefined); // still works, also returns "Bob Smith"
var user4 = buildName2("Bob", "Adams"); // ah, just right
// 剩余参数
function buildName3(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");
//  this和箭头函数
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
