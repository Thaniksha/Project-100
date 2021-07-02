var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();

function start(){
    document.getElementById("text_box").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("text_box").innerHTML=content;
    if (content=="take my selfie"){
        speak(); 
        console.log("Taking selfie");
    }
       
}

function speak(){
var synth=window.speechSynthesis;
var speak_date="taking your selfie in 5 seconds";
var utter_this=new SpeechSynthesisUtterance(speak_date);
synth.speak(utter_this);
Webcam.attach(camera);
setTimeout(function(){
    take_snapshot();
    save();
},5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
var camera=document.getElementById("camera")
 
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}

function save(){
    var link=document.getElementById("link");
    var image=document.getElementById("selfie_image").src ;
link.href=image;
link.click();
}
