const artyom = new Artyom();

// Add a single command
var commandHello = {
    indexes:["hello","hallo","hey", "test"], // These spoken words will trigger the execution of the command
    action:function(){ // Action to be executed when a index match with spoken word
        artyom.say("Hey buddy ! How are you today?");
    }
};

artyom.addCommands(commandHello); // Add the command with addCommands method. Now

// Or add multiple commands at time
var myGroup = [
    {
        description:"If my database contains the name of a person say something",
        smart:true, // a Smart command allow you to use wildcard in order to retrieve words that the user should say
        // Ways to trigger the command with the voice
        indexes:["Do you know who is *","I don't know who is *","Is * a good person"],
        // Do something when the commands is triggered
        action:function(i,wildcard){
            var database = ["Carlos","Bruce","David","Joseph","Kenny"];

            //If the command "is xxx a good person" is triggered do, else
            if(i == 2){
                if(database.indexOf(wildcard.trim())){
                    artyom.say("I'm a machine, I dont know what is a feeling");
                }else{
                    artyom.say("I don't know who is " + wildcard + " and i cannot say if is a good person");
                }
            }else{
                if(database.indexOf(wildcard.trim())){
                    artyom.say("Of course i know who is "+ wildcard + ". A really good person");
                }else{
                    artyom.say("My database is not big enough, I don't know who is " + wildcard);
                }
            }
        }
    },
    {
        indexes:["What time is it","Is too late"],
        action:function(i){ // var i returns the index of the recognized command in the previous array
            if(i == 0){
                aFunctionThatSaysTheTime(new Date());
            }else if(i == 1){
                artyom.say("Never is too late to do something my friend !");
            }
        }
    }
];

artyom.addCommands(myGroup);

const artyom = new Artyom();
// This function activates artyom and will listen and execute only 1 command (for http connections)
function startOneCommandArtyom(){
    artyom.fatality();// use this to stop any of

    setTimeout(function(){// if you use artyom.fatality , wait 250 ms to initialize again.
         artyom.initialize({
            lang:"en-GB",// A lot of languages are supported. Read the docs !
            continuous:false,// recognize 1 command and stop listening !
            listen:true, // Start recognizing
            debug:true, // Show everything in the console
            speed:1 // talk normally
        }).then(function(){
            console.log("Ready to work !");
        });
    },250);
}

// This function activates artyom and will listen all that you say forever (requires https conection, otherwise a dialog will request if you allow the use of the microphone)
function startContinuousArtyom(){
    artyom.fatality();// use this to stop any of

    setTimeout(function(){// if you use artyom.fatality , wait 250 ms to initialize again.
         artyom.initialize({
            lang:"en-GB",// A lot of languages are supported. Read the docs !
            continuous:true,// Artyom will listen forever
            listen:true, // Start recognizing
            debug:true, // Show everything in the console
            speed:1 // talk normally
        }).then(function(){
            console.log("Ready to work !");
        });
    },250);
}