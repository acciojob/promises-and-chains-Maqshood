document.getElementById("voteForm").addEventListener("submit", function(event) {
      event.preventDefault(); 

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
        }, 4000); 
      });

      checkEligibility
        .then((message) => {
          alert(message);
        })
        .catch((error) => {
          alert(error);
        });
    });
cy.on("window:alert", (str) => {
  expect(str).to.equal("Please enter valid details.");
});