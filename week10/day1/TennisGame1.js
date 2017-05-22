var TennisGame1 = function() {
    this.m_score1 = 0;
    this.m_score2 = 0;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1") {
        this.m_score1 += 1;
    }
    else {
        this.m_score2 += 1;
    }
};

TennisGame1.prototype.getScore = function() {
    var scoreBoard = "";
    var tempScore = 0;
    if (this.m_score1 === this.m_score2) {
        switch (this.m_score1) {
            case 0:
                scoreBoard = "Love-All";
                break;
            case 1:
                scoreBoard = "Fifteen-All";
                break;
            case 2:
                scoreBoard = "Thirty-All";
                break;
            default:
                scoreBoard = "Deuce";
                break;
        }
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        var minusResult = this.m_score1 - this.m_score2;
        if (minusResult === 1) {
            scoreBoard = "Advantage player1";
        }
        else if (minusResult === -1) {
            scoreBoard = "Advantage player2";
        }
        else if (minusResult >= 2) {
            scoreBoard = "Win for player1";
        }
        else {
            scoreBoard = "Win for player2";
        }
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) {
                tempScore = this.m_score1;
            }
            else {
                scoreBoard += "-";
                tempScore = this.m_score2;
            }
            switch (tempScore) {
                case 0:
                    scoreBoard += "Love";
                    break;
                case 1:
                    scoreBoard += "Fifteen";
                    break;
                case 2:
                    scoreBoard += "Thirty";
                    break;
                case 3:
                    scoreBoard += "Forty";
                    break;
            }
        }
    }
    return scoreBoard;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}