function my_initiation() {
document.write('Hello LES5')

 }
 Window.onload = my_initiation;
 my_initiation();

var div = document.createElement("div");
div.className = "my_div";
div.innerHTML = "<h1>Заголовок</h1><p>Содержимое</p>";
document.body.appendChild(div);

