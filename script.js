function castVote(candidate) {
  if (localStorage.getItem('ictaz_vote')) {
    document.getElementById('result').innerText =
      'You have already voted. Thank you!';
    return;
  }

  localStorage.setItem('ictaz_vote', candidate);
  document.getElementById('result').innerText =
    'Vote recorded for ' + candidate + '. Thank you!';
}
