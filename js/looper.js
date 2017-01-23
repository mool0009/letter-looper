//Declare the variable (letter for example) which will store a letter of user's choice (don't assign any value to it just yet).

var letter
while (!letter){
	letter = prompt ("Enter a character!");
}
console.log("The character is " + letter + "!");

var i, k;
for (i = 0; i < 10; i +=1) {	
	for(k = 0; k <= i; k +=1 ){
		document.write(letter);
	}
document.write("<br>");
}
