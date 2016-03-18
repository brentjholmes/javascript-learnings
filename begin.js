// var num = Math.random();
// console.log(num);
// var poem = "roses are red";
// console.log(poem);
function randomletter(){
	var rlg = "abcdefghijklmnoprstuvwxyz";
	var characterArray = rlg.split("");
	var firstLetter = characterArray[
		Math.floor(Math.random() *26)
	];
	var secondLetter = characterArray[
		Math.floor(Math.random() *26)]
	// var firstLetterNumber = Math.random()
	return firstLetter + " " + secondLetter;
}
console.log(randomletter());
