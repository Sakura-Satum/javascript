
let text = ""

for (let i = 0; i < 10 ; i++) 
{
  text += "This is a new Paragraph, Paragraph " + i + "<br>"
}

document.getElementById("test").innerHTML = text;
