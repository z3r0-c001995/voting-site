const form = document.getElementById("vote-form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const vote = document.querySelector('input[name="candidate"]:checked').value;

  // Get IP address from ipify.org
  const ipRes = await fetch("https://api.ipify.org?format=json");
  const ipData = await ipRes.json();
  const ip = ipData.ip;

  // Submit to Google Apps Script
  fetch("https://script.google.com/macros/s/AKfycbxqHTkBZSuBz9pxAcF_wGyGIQ-oaeTuoSSDOyEcCvbw_ClIkbC8xWEQ4XNoYaJTpd5u/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ vote: vote, ip: ip }),
  })
    .then(() => {
      alert("Your vote has been submitted!");
      form.reset();
    })
    .catch((err) => {
      console.error("Submission failed", err);
      alert("There was an error. Please try again.");
    });
});
