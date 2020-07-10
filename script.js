// Функция jQuery (селектор, контекст) предназначена для выполнения поиска элементов в DOM-дереве 
// на основании селектора, указанного в качестве первого аргумента. 
function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector)); 
	return this
}

// Так как мы получаем всегда массив элементов, то нам надо написать функцию, 
// которая будет перебирать элементы и работать с каждым из них. 
jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

// Метод, который вешает обработчик на наши элементы.
jQuery.prototype.click = function(fn){
	this.each(element => element.addEventListener('click', fn))
	return this
}

// Метод jQuery.prototype.html() изменяет html-содержимое выбранных элементов, преврящая их в пункты списка.
jQuery.prototype.html = function() {
	this.each(element => element.outerHTML = "<li>list</li>")
    return this
}

// Создадим несколько кнопок и повесим на каждую из них обработчик таким образом:
const $ = (e) => new jQuery(e);

// Применям созданный метод html()
$('button').click(e => console.log(e)).html()
