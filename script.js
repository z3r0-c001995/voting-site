fetch("https://script.google.com/macros/s/AKfycbxqHTkBZSuBz9pxAcF_wGyGIQ-oaeTuoSSDOyEcCvbw_ClIkbC8xWEQ4XNoYaJTpd5u/exec", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ vote: vote, ip: ip }),
})
.then(response => response.text())
.then(data => {
  alert(data || "Your vote has been submitted!");
  form.reset();
})
.catch((err) => {
  console.error("Submission failed", err);
  alert("There was an error. Please try again.");
});
