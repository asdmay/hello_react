var janken = ( function() {
  function Janken(hand) {
    this.hand = hand;
  }
  janken.prototype.poi = function() {
    return this.hand = Math.floor(Math.random() * 3);
  };
  janken.prototype.judge = fuction(your) {
    var judgement = (computer_hand - human_hand + 3) % 3;
    if (judgement == 0) {
      return "引き分け";
    }else if (judgement == 1) {
      return "勝ち";
    }else{
      return "負け":
    }
  };
  return Janken;
})();
