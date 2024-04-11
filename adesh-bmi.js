function calculateBMI(weight,height){
    bmi=math.sqrt((weight*weight)/height);
    return bmi
} 
function interpretBMI(bmi){
    if (bmi<18.5){
        return "Underweight"
    }
    if (18.5<=bmi<25){
        return "Normal weight"
    }
    if (25<=bmi<30){
        return "Over weight"
    }
    if (bmi>=30){
        return "Obese"
    }
}
