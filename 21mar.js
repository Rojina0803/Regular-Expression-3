//Character Classes

const mono="harh7rd1r4r5r szxvcdefghijklmnpnmop@#@$%$%mahadev";
// const mono="My ka number 9999999 yy999";
let rego=/\war/; //word character alphanumeric character
rego = /\w+d1r/;
rego=/\Wmahadev/ // non word character
rego=/\W+/ // more than one none  word character
rego=/\d999/ // digit
rego=/number \d999/
rego=/\d+/
rego=/\D999/
rego=/\D+999/
rego=/\ska number/ //whitespace character
rego=/\s+ka number/
rego=/\S+/

//Word Boundry

rego=/4r5r\b/ //word boundary

//Assertions
rego=/h(?=a)/;
rego=/h(?!y)/;

// Using unicode regular expressions

rego=/{\u0061-\u0065}/g;
rego=/\u0061/;

const result2=rego.exec(mono)

console.log("The result from (.exec) is:",result2);

if(rego.test(mono)){
    console.log(`The string ${mono} matches the expression ${rego.source}`);

}
else{
    console.log(`The string:- ${mono} doesnot matches the expression --> ${rego.source}`);

}