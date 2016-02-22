
// 부모 선택자 내에 포함된 문서 객체를 리턴하는 함수

function selector(selector, parent){

	if(parent){
		return document.querySelector(parent).querySelector(selector);
	}else{
		return document.querySelector(selector);
	}



}