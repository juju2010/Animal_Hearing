function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jbrW7LB5L/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error){
    console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rbg("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        if(results[0].label == "dog"){
           document.getElementById("dog").src="dog.jpeg";
        } 
        else if(results[0].label == "cat"){
            document.getElementById("dog").src="Cat.png";
        }
        else if(results[0].label == "hamster"){
            document.getElementById("dog").src="Hamster.jpeg";
       }
       else if(results[0].label == "horse"){
        document.getElementById("dog").src="Horse.jpeg";
       }
       else if(results[0].label == "duck"){
        document.getElementById("dog").src="duck.jpeg";
       }
    }
}