let csbutton= document.getElementById("customButton");
let bgColore= document.getElementById("bgColorInput");
let fontColore= document.getElementById("fontColorInput");
let fontsizee= document.getElementById("fontSizeInput");
let fontweighte= document.getElementById("fontWeightInput");
let paddinge= document.getElementById("paddingInput");
let bradiuse= document.getElementById("borderRadiusInput");
function onApply(){
   let bgColor= bgColore.value;
   let fontColor = fontColore.value;
   let fontsize= `${fontsizee.value}px`;
   let fontweight= fontweighte.value;
   let Cpadding=  `${paddinge.value}px`;
   let bradius= `${bradiuse.value}px`;
   csbutton.style.backgroundColor= bgColor;
   csbutton.style.color= fontColor;
   csbutton.style.fontSize= fontsize;
   csbutton.style.fontWeight= fontweight;
   csbutton.style.padding= Cpadding;
   csbutton.style.borderRadius= bradius;

}
function printKeyDown(event){
   if(event.key==="Enter"){
      onApply();
   }
   console.log("key was pressed");
}
bradiuse.addEventListener("keyup", printKeyDown);
// bradiuse.addEventListener("keydown", onApply);