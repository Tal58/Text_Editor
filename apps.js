function clearText(){
    document.getElementById("text1").value = "";
   alert("text reset!!!")
}
function downloadFile(filename, content) {
    // It works on all HTML5 Ready browsers as it uses the download attribute of the <a> element:
    const element = document.createElement('a');
    
    //A blob is a data type that can store binary data
    // "type" is a MIME type
    // It can have a different value, based on a file you want to save
    const blob = new Blob([content], { type: 'plain/text' });
  
    //createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter.
    const fileUrl = URL.createObjectURL(blob);
    
    //setAttribute() Sets the value of an attribute on the specified element.
    element.setAttribute('href', fileUrl); //file location
    element.setAttribute('download', filename); // file name
    // element.setAttribute("style", "color");
    // element.setAttribute("style", "text-align");
    // element.setAttribute("style", "font-family");
    // element.setAttribute("style", "size");
    
    //use appendChild() method to move an element from one element to another
    document.body.appendChild(element);
    element.click();
    
    //The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node
    document.body.removeChild(element);
    alert("Your file has been downloaded!!!")
  };
  
  window.onload = () => {
    document.getElementById('download').
    addEventListener('click', e => {
      
      //The value of the file name input box
      const filename = document.getElementById('filename').value;
      
      //The value of what has been input in the textarea
      const content = document.getElementById('text1').value;
      
      // The && (logical AND) operator indicates whether both operands are true. If both operands have nonzero values, the result has the value 1 . Otherwise, the result has the value 0.
      
      if (filename && content) {
        downloadFile(filename, content);
      }
    });
  };

  function update(){
    var select = document.getElementById("font-family");
    var option = select.options[select.selectedIndex];
    document.getElementById("text1").style.fontFamily = option.text;
  }
  update()
  function updateColor(){
    var select = document.getElementById("color");
    var option = select.options[select.selectedIndex];
    document.getElementById("text1").style.color = option.text;

  }
  updateColor()
  function sizeUpdate(){
    var select = document.getElementById("size");
    var option = select.options[select.selectedIndex];
    document.getElementById("text1").style.fontSize = option.value;
  }
  sizeUpdate()

  function textAlign(){
    var select = document.getElementById("text-align");
    var option = select.options[select.selectedIndex];
    document.getElementById("text1").style.textAlign = option.value;
  }

  textAlign()

  function save(){
  
  localStorage.setItem("text1", document.getElementById('text1').value);
  // localStorage.setItem("text1.style.fontSize", document.getElementById('text1').style.fontSize);
  // localStorage.setItem("text1.style.fontFamily", document.getElementById('text1').style.fontFamily);
  // localStorage.setItem("text1.style.color", document.getElementById('text1').style.color);
  // localStorage.setItem("text1.style.textAlign", document.getElementById('text1').style.textAlign);
  
  alert("Text saved succesfully");
}
function get(){
  if(localStorage.getItem("text1")== ""){
        document.getElementById('text1').value = "Please write here...";
      }else {
        document.getElementById('text1').value = localStorage.getItem("text1");
      }

}
get()
