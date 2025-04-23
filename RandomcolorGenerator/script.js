//For color generate and to display color
const randomcolor=document.getElementById("color-generate");
const colorcode=document.getElementById("color-code");
//Function to generate color
function getgeneratecolor()
{
    let hex="0123456789ABCDEF";
    let color="#";
    for (let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
//Color code to display at background
randomcolor.addEventListener('click',()=>{
    const newcolor=getgeneratecolor();
    document.body.style.backgroundColor=newcolor;
    colorcode.textContent=newcolor;
});