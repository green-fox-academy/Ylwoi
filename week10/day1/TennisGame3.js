var TennisGame3 = function(p1N, p2N) {
    this.scorePlayer2 = 0;
    this.scorePlayer1 = 0;

    this.p1N = p1N;
    this.p2N = p2N;
};

TennisGame3.prototype.getScore = function() {
    var s;
    if ((this.scorePlayer1 < 4 && this.scorePlayer2 < 4) && (this.scorePlayer1 + this.scorePlayer2 < 6)) {
        var p = ["Love", "Fifteen", "Thirty", "Forty"];
        s = p[this.scorePlayer1];
        return (this.scorePlayer1 == this.scorePlayer2) ? s + "-All" : s + "-" + p[this.scorePlayer2];
    } else {
        if (this.scorePlayer1 == this.scorePlayer2)
            return "Deuce";
        s = this.scorePlayer1 > this.scorePlayer2 ? this.p1N : this.p2N;
        return ((this.scorePlayer1 - this.scorePlayer2) * (this.scorePlayer1 - this.scorePlayer2) == 1) ? "Advantage " + s : "Win for " + s;
    }
};

TennisGame3.prototype.wonPoint = function(playerName) {
    if (playerName == "player1")
        this.scorePlayer1 += 1;
    else
        this.scorePlayer2 += 1;

};

if (typeof window === "undefined") {
    module.exports = TennisGame3;
}