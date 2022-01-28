var Kahoot = require("kahoot.js-updated");
var kahoots = [];
var name = "KahootBot";
var bot_count = 200;
var fs = require('fs');
fs.readFile('id.txt', 'utf8', function(err, data){
     var pin = data;
     for (var i = 0; i < bot_count; i++) {
        function makeid(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * 
         charactersLength));
           }
           return result;
        }
        kahoots.push(new Kahoot);
        kahoots[i].join(pin, makeid(5)).catch(error => {
            console.log("join failed " + error.description + " " + error.status)
        });
        kahoots[i].on("Joined", () => {
            console.log("successfully joined game")
        });
        kahoots[i].on("QuestionStart", (question) => {
            question.answer(
                Math.floor(
                    Math.random() * question.quizQuestionAnswers[question.questionIndex]
                ) + 0
            );
        });
        kahoots[i].on("Disconnect", (reason) => {
            console.log("disconnected because " + reason);
        });
    }
    
});

