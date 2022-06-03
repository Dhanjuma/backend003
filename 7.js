let input = 32;
let output;
if (input>69&&input<=100){
    output = "you scored an A"
} else if(input>59&&input<70){
    output = "you scored a B"
} else if(input>=50&&input<60){
    output = "you scored a C"
} else if(input>44&&input<50){
    output = "you scored a D"
} else {output = "you scored an F"};
console.log(output);