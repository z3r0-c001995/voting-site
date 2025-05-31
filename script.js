fetch("https://script.google.com/macros/s/AKfycbz_15UgBJl6wcgS-OOEts7vkypce88YNm4J7zIHsnPPsxiAstOLK_uUHpTSTEhaOmPZ/exec", {
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
