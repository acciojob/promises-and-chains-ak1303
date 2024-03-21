//your JS code here. If required.
let submitBtn = document.getElementById('btn');
let nameInput = document.getElementById('name');
let ageInput = document.getElementById('age');

submitBtn.addEventListener('click',(e)=>{
	e.preventDefault();
	let name = nameInput.value;
	let age = ageInput.value;
	let promise = new Promise((resolve,reject)=>{ 
		if(age>18)
			setTimeout(()=>{
				resolve(`Welcome, ${name}. You can vote.`);
			},4000);
		else reject(`Oh sorry ${name}. You aren't old enough.`);
	});
	if(name!="" && age!=""){
		promise.then((data)=>{
			alert(data)
		}).catch((data)=>alert(data));
	}
})