
let generatedCaptcha="";

function generateCaptcha()
{
const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
generatedCaptcha="";
for(let i=0;i<5;i++)
{
generatedCaptcha+=chars.charAt(Math.floor(Math.random()*chars.length));
}
document.getElementById("captchaBox").innerText = generatedCaptcha;
document.getElementById("result").innerText = "";
document.getElementById("userInput").value = "";
}
function validateCaptcha()
{
    const userValue = document.getElementById("userInput").value;
    const result = document.getElementById("result");

    if (userValue === generatedCaptcha) {
        result.innerText = "✅ CAPTCHA Verified!";
        result.style.color = "green";
      } else {
        result.innerText = "❌ Incorrect CAPTCHA. Try again.";
        result.style.color = "red";
        window.alert("Incorrect CAPTCHA! Please try again.");
      }
}
window.onload = generateCaptcha;
