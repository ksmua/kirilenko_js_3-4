var testTitle = "Тест по програмированию";
var cssSrc = 'css/main.css';
var testList = {
	question1: "Вопрос №1",
	ansvers1: {
		var1: 'Вариант ответа №1',
		var2: 'Вариант ответа №2',
		var3: 'Вариант ответа №3'
	},
	question2: "Вопрос №2",
	ansvers2: {
		var1: 'Вариант ответа №1',
		var2: 'Вариант ответа №2',
		var3: 'Вариант ответа №3'
	},
	question3: "Вопрос №3",
	ansvers3: {
		var1: 'Вариант ответа №1',
		var2: 'Вариант ответа №2',
		var3: 'Вариант ответа №3'
	}
} 
var doc = document.body;
	doc.className = 'test-body';
var insertFragment = document.createDocumentFragment();
// document.createDocumentFragment();

function createTestFragment(list){
	var olElem = document.createElement('ol'); //create ordered list
	for (var key in list){
		//if qurent is answers
		if ( typeof(list[key]) === "object") {
			var subList = list[key];
	
			for (subKey in subList){
				var liElem = document.createElement('li'); //create tag li
					liElem.className = 'ul-li-elem';
					var labelElem = document.createElement('label'); //create tag label
						labelElem.innerHTML = subList[subKey]; //set ansver text in teg label
						var inputElem = document.createElement('input'); //create input field
							inputElem.type = 'checkbox'; //input = checkbox (or can be radio)
							inputElem.id = 'checkbox1';
					labelElem.insertBefore(inputElem, labelElem.firstChild); //add input before label content
				liElem.appendChild(labelElem); //add label in li
				ulElem.appendChild(liElem); //add li in ul
			}
		} else { 
			//if qurent is question
		var olLiElem = document.createElement('li'); //create ordered list element
			var ulElem = document.createElement('ul');
				ulElem.className = 'ul-elem';
				ulElem.innerHTML = list[key]; //add qestion text in ul title
		}
	olLiElem.appendChild(ulElem); //add question list to ordered list element
	olLiElem.className = 'ol-elem';
	olElem.appendChild(olLiElem); //add ordered list element to ordered list
	}
	insertFragment.appendChild(olElem); //add ol in fragment
//after that the final fragment will be added to body
}

//add stylesheet link in html head
function addStyleSheetLink(linkSrc){
var head = document.head;
	var styleSheetLink = document.createElement('link');
	styleSheetLink.rel = 'stylesheet';
	styleSheetLink.type = 'text/css';
	styleSheetLink.href = linkSrc;
	head.appendChild(styleSheetLink);
}

addStyleSheetLink(cssSrc); //add stylesheet link in html head


var wrapElem = document.createElement('div');
	wrapElem.className = 'wrapper';
	//class = 'wrapper';
	var headElem = document.createElement('p');
		headElem.className = 'test-header';
		headElem.innerHTML = testTitle; //set title 'Тест по програмированию'
	wrapElem.appendChild(headElem); //add p in wraper

	//add testBody
	createTestFragment(testList);
	wrapElem.appendChild(insertFragment);
//  insertFragment.appendChild(wrapElem); //add wraper in body
	doc.appendChild(wrapElem);
	// doc.style = 'margin-left: 98px';
// doc.appendChild(insertFragment);


// function addNode(testQuestion){
// 	node = document.createElement("li");
// 	li.textContent = e;
// 	docfrag.appendChild(li);
// }
// insertfr.appendChild(node);

// var container = document.createElement('div');
// 	div.className = "test";
// 	div.innerHTML = '<p style="color: red">Тест по програмированию</p>';
// doc.appendChild(div);