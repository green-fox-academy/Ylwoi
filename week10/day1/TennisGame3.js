var TennisGame3 = function(playerName1, playerName2) {
    this.scorePlayer2 = 0;
    this.scorePlayer1 = 0;
    this.playerName1 = playerName1;
    this.playerName2 = playerName2;
};

TennisGame3.prototype.getScore = function() {
    var scoreType;
    if ((this.scorePlayer1 < 4 && this.scorePlayer2 < 4) && (this.scorePlayer1 + this.scorePlayer2 < 6)) {
        var scoreOptions = ["Love", "Fifteen", "Thirty", "Forty"];
        scoreType = scoreOptions[this.scorePlayer1];
        return (this.scorePlayer1 == this.scorePlayer2) ? scoreType + "-All" : scoreType + "-" + scoreOptions[this.scorePlayer2];
    } else {
        if (this.scorePlayer1 == this.scorePlayer2)
            return "Deuce";
        scoreType = this.scorePlayer1 > this.scorePlayer2 ? this.playerName1 : this.playerName2;
        return ((this.scorePlayer1 - this.scorePlayer2) * (this.scorePlayer1 - this.scorePlayer2) == 1) ? "Advantage " + scoreType : "Win for " + scoreType;
    }
};

TennisGame3.prototype.wonPoint = function(playerName) {
    if (playerName == "player1")
        this.scorePlayer1 += 1;
    else
        this.scorePlayer2 += 1;

};