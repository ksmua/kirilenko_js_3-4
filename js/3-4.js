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
var insertFragment = document.createDocumentFragment();
// document.createDocumentFragment();

function createTestFragment(list){
	for (var key in list){
		//if qurent is answers
		if ( typeof(list[key]) === "object") {
			var subList = list[key];
	
			for (subKey in subList){
				var liElem = document.createElement('li'); //create tag li
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
			var ulElem = document.createElement('ul');
				ulElem.style = 'list-style: none';
				ulElem.innerHTML = list[key]; //add qestion text in ul title
		}
	insertFragment.appendChild(ulElem); //add ul(with question) in fragment
	}
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
	wrapElem.style = 'class="wrapper"';
	//class = 'wrapper';
	var headElem = document.createElement('p');
		headElem.class = 'test-header';
		headElem.innerHTML = testTitle; //set title 'Тест по програмированию'
	wrapElem.appendChild(headElem); //add p in wraper

	//add testBody
insertFragment.appendChild(wrapElem); //add wraper in body
createTestFragment(testList);
doc.appendChild(insertFragment);


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