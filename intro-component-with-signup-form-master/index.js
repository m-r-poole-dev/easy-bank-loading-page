//jshint esversion:6

window.addEventListener("load", (evenet) =>{
  var domStrings = {
    btn:document.querySelector('.btn'),
    input:document.querySelectorAll('input'),
    feedback:document.querySelectorAll('.feedback'),
    imgs:document.querySelectorAll('img')
  };

  domStrings.btn.addEventListener('pointerover', (event) =>{
    domStrings.input.forEach((e, i)=>{
      e.classList.add("pink-border");
    });
  });
domStrings.btn.addEventListener('pointerout', (event) =>{
    domStrings.input.forEach((e, i)=>{
      e.classList.remove("pink-border");
    });
  });

  domStrings.btn.addEventListener('click', (event) =>{
    var x = 0;
      domStrings.input.forEach((e, i)=>{
        if (i != 2 && i <4){
          if(empty(e.value)){
            displayContent(domStrings.feedback[i],domStrings.imgs[i]);
          }
          else{
            hideContent(domStrings.feedback[i], domStrings.imgs[i]);
            x++;
          }
        }
        else if(i===2){
          if(validEmail(e.value)){
            hideContent(domStrings.feedback[i],domStrings.imgs[i]);
            x++;
          }
        else{
            displayContent(domStrings.feedback[i],domStrings.imgs[i]);
          }
        }
          console.log("x === " + x);
        if (x != 4){
          event.preventDefault();
        }
        else{
          window.reload();
        }

      });
    });


function empty(str){
  console.log(str);
   return str.length === 0;
}

function validEmail(str){
  return  (str.includes("@", 1)) && (str.endsWith(".com") || str.endsWith(".co.uk"));
}

function displayContent(feed, image){
  feed.style.display = "block";
  image.style.display = "block";
}
function hideContent(feed, image){
  feed.style.display = "none";
  image.style.display = "none";
}


});
