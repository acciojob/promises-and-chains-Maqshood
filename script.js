document.getElementById("voteForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from actually submitting

      const name = document.getElementById("name").value.trim();
      const age = document.getElementById("age").value.trim();

      if (name === "" || age === "") {
        alert("Please enter valid details.");
        return;
      }

      // Convert age to a number
      const ageNumber = parseInt(age);

      const checkEligibility = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (ageNumber > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000); // 4-second delay
      });

      checkEligibility
        .then((message) => {
          alert(message);
        })
        .catch((error) => {
          alert(error);
        });
    });