(function() {
      const registerBtn = document.getElementById('registerBtn');
      const interestedCountElem = document.getElementById('interestedCount');
      const teamsCountElem = document.getElementById('teamsCount');
      const alertMessage = document.getElementById('alertMessage');

      let interestedCount = 0;

      function updateDisplay() {
        interestedCountElem.textContent = interestedCount;
        const teams = Math.floor(interestedCount / 3);
        teamsCountElem.textContent = teams;

        if (teams >= 4) {
          alertMessage.classList.add('visible');
        } else {
          alertMessage.classList.remove('visible');
        }
      }

      registerBtn.addEventListener('click', () => {
        interestedCount++;
        updateDisplay();
      });

      updateDisplay();
    })();