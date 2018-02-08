function calculateCurrentGrade() {

    var HW = document.getElementById("homework").value;
    var CW = document.getElementById("classwork").value;
    var AS = document.getElementById("assessments").value;
    var PAR = document.getElementById("participation").value;
    console.log(HW);

    var hwWeight = parseInt(document.getElementById("homeworkWeight").value);
    var cwWeight = parseInt(document.getElementById("classworkWeight").value);
    var asWeight = parseInt(document.getElementById("assessmentsWeight").value);
    var parWeight = parseInt(document.getElementById("participationWeight").value);
    console.log(hwWeight)

    var hwArray = convertArrayStringToNumber(HW);
    var cwArray = convertArrayStringToNumber(CW);
    var asArray = convertArrayStringToNumber(AS);
    var parArray = convertArrayStringToNumber(PAR);
    console.log(hwArray);

    var homeworkAvg = averageArray(hwArray);
    var classworkAvg = averageArray(cwArray);
    var assessmentsAvg = averageArray(asArray);
    var participationAvg = averageArray(parArray);
    console.log(homeworkAvg);

    var weightedHW = weighted(hwWeight);
    var weightedCW = weighted(cwWeight);
    var weightedAS = weighted(asWeight);
    var weightedPAR = weighted(parWeight);
    console.log(weightedHW);

    var weightedHomework = weightedHW * homeworkAvg;
    var weightedClasswork = weightedCW * classworkAvg;
    var weightedAssessments = weightedAS * assessmentsAvg;
    var weightedParticipation = weightedPAR * participationAvg;

    var sumAverages = weightedHomework + weightedClasswork + weightedAssessments + weightedParticipation;
    var sumWeights = weightedHW + weightedCW + weightedAS + weightedPAR;

    var currentGrade = sumAverages / sumWeights;
    document.getElementById("currentGrade").innerHTML = "Current grade : " + currentGrade.toString().slice(0,5) + "%";

    colorRows(homeworkAvg,document.getElementById("hwRow"));
    colorRows(classworkAvg,document.getElementById("cwRow"));
    colorRows(assessmentsAvg,document.getElementById("asRow"));
    colorRows(participationAvg,document.getElementById("parRow"));

    return currentGrade;

}

function colorRows(avg,element) {
    if(avg >= 100){
        element.style.background = "#33cccc"
    }
    if(avg >= 90 && avg < 100){
        element.style.background = "yellowgreen"
    }
    if(avg >= 80 && avg < 90){
        element.style.background = "gold"
    }
    if(avg >= 70 && avg < 80){
        element.style.background = "darkorange"
    }
    if(avg >= 60 && avg < 70){
        element.style.background = "crimson"
    }
}

function convertArrayStringToNumber(input){
    var array = input.split(",");
    for(var i = 0; i < array.length; i++){
        array[i] = parseInt(array[i]);
    }
    return array;
}

function averageArray(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum/array.length;
}

function weighted(numbers){
    var weight = numbers / 100;
    return weight;
}

function calculateFinalGrade(){
    var currentGrade = calculateCurrentGrade();
    var finalWeight = parseInt(document.getElementById("finalWeight").value);
    var finalDesired = parseInt(document.getElementById("final").value);
    var currentWeight = 1 - (finalWeight/100);
    var weightedCurrent = currentGrade * currentWeight;
    var finalGradeRequired = (finalDesired - weightedCurrent) / (finalWeight/100);
    document.getElementById("gradeRequired").innerHTML = finalGradeRequired.toString().slice(0,5) + "% required to get a " + finalDesired;
}