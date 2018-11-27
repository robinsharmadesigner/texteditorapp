
window.addEventListener("load", function(){

 
  var txtbtn = document.querySelector("#textbutton");
   
  let counter = 0;
  txtbtn.addEventListener("click", function creatediv()  {
   
    document.getElementById('formattingbar').style.display = "block";

    var input =  document.getElementById('richTextArea');
    var newdiv = document.createElement("div");
    newdiv.id = "mydiv" + counter;
    newdiv.style.backgroundColor = "Antiquewhite";
    newdiv.style.textAlign =  "center";
    newdiv.style.position = "absolute";
    newdiv.contentEditable = "true";
    newdiv.style.zIndex = "9";
    newdiv.className = "resizable";

    var lastdiv = document.createElement("div");
    lastdiv.setAttribute("id", "mydivheader" + counter);
lastdiv.contentEditable = "true";
lastdiv.style.zIndex = "10";
lastdiv.style.padding = "0px";
lastdiv.style.cursor =  "move";
lastdiv.style.backgroundColor =  "Antiquewhite";
lastdiv.style.color = "black";
lastdiv.className = "resizers";
lastdiv.style.overflow = "hidden";

var resizetl = document.createElement("div"); //handletl
resizetl.setAttribute("class", "resizer top-left"  );
resizetl.contentEditable = "false";

var resizetr = document.createElement("div");
resizetr.setAttribute("class", "resizer top-right" );
resizetr.contentEditable = "false";

var resizebl = document.createElement("div");
resizebl.setAttribute("class", "resizer bottom-left"  );
resizebl.contentEditable = "false";

var resizebr = document.createElement("div");
resizebr.setAttribute("class", "resizer bottom-right" );
resizebr.contentEditable = "false";

lastdiv.appendChild(resizetl);
lastdiv.appendChild(resizetr);
lastdiv.appendChild(resizebl);
lastdiv.appendChild(resizebr);
newdiv.appendChild(lastdiv);
input.appendChild(newdiv);
    

 const element = document.getElementById("mydiv" + counter);  
 const resizers = document.querySelectorAll( ".resizer");
    let original_width = 0;
    let original_height = 0;
    let original_x = 0;
    let original_y = 0;
    let original_mouse_x = 0;
    let original_mouse_y = 0;
    for (let i = 0 ;i < resizers.length; i++) {
      const currentResizer = resizers[i];
      currentResizer.addEventListener('mousedown', function(e) {
       
        original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
        original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
        original_x = element.getBoundingClientRect().left;
        original_y = element.getBoundingClientRect().top;
        original_mouse_x = e.pageX;
        original_mouse_y = e.pageY;
        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', stopResize)
      })
      
      function resize(e) {
        if (currentResizer.classList.contains('bottom-right')) {
          element.style.width = original_width + (e.pageX - original_mouse_x)  + 'px'
          element.style.height = original_height + (e.pageY - original_mouse_y)  + 'px'
        }
        else if (currentResizer.classList.contains('bottom-left')) {
          element.style.width = original_width - (e.pageX - original_mouse_x)  + 'px'
          element.style.height = original_height + (e.pageY - original_mouse_y)  + 'px'
          element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
        }
        else if (currentResizer.classList.contains('top-right')) {
          element.style.width = original_width + (e.pageX - original_mouse_x)  + 'px'
          element.style.height = original_height - (e.pageY - original_mouse_y)  + 'px'
          element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
        }
        else {
          element.style.width = original_width - (e.pageX - original_mouse_x)  + 'px'
          element.style.height = original_height - (e.pageY - original_mouse_y)  + 'px'
          element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
          element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
        }
      }
      function stopResize() {
        window.removeEventListener('mousemove', resize)
      }
    }
  
    var offset = [0,0];
    var divOverlay = document.getElementById ("mydiv" + counter);
    var isDown = false;
    divOverlay.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            divOverlay.offsetLeft - e.clientX,
            divOverlay.offsetTop - e.clientY
        ];
    }, true);
    document.addEventListener('mouseup', function() {
        isDown = false;
    }, true);
    
    document.addEventListener('mousemove', function(e) {
        event.preventDefault();
        if (isDown) {
            divOverlay.style.left = (e.clientX + offset[0]) + 'px';
            divOverlay.style.top  = (e.clientY + offset[1]) + 'px';
        }
    }, true);
    
      // x.setAttribute("src", "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg");
       
      var inputdiv  =  document.getElementById("mydivheader" + counter);
      document.getElementById("fileuploader").addEventListener("change",  function(event) { 
    var createimg = document.createElement("img");
    createimg.id = "output";
            var reader = new FileReader();
            reader.onload = function(){
              
              createimg.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
      inputdiv.append(createimg);
    
    });
    document.getElementById('richTextArea').style.display = "block";
    counter++;
});
 document.querySelector("#boldbutton").addEventListener("click", function() {
    document.execCommand ('bold');
  });
  document.querySelector("#italicButton").addEventListener("click", function() {
    document.execCommand("Italic");
    },false);

    document.querySelector("#underlineButton")
    underlineButton.addEventListener("click", function() {
        document.execCommand("Underline");
        },false);
        
        document.querySelector("#fontChanger").addEventListener("click", function(event){
document.execCommand("FontName", false, event.target.value);
},false);

document.querySelector("#fontsizeChanger").addEventListener("click", function(event){
document.execCommand("FontSize", false, event.target.value);
},false);

document.querySelector("#strikeButton").addEventListener("click", function(event){
  document.execCommand("Strikethrough", false, event.target.value);
  },false);

  document.querySelector("#undoButton").addEventListener("click", function(event){
    document.execCommand("undo", false, event.target.value);
    },false);

    document.querySelector("#redoButton").addEventListener("click", function(event){
      document.execCommand("redo", false, event.target.value);
      },false);
});