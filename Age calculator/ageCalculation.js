const btn = document.getElementById("ageCalc");
const birthdayEL = document.getElementById("birthday");
const resultEl = document.getElementById("results");

function calculateAge() {
  const birthdayValue = birthdayEL.value; // Corrected property name
  if (birthdayValue === "") {
    alert("Please enter your date of birth");
  } else {
    // Validate if the entered value is a valid date
    const age = getAge(birthdayValue);
    if (isNaN(age)) {
      resultEl.innerText = "Invalid date format";
    } else {
      resultEl.innerText = `Your age is ${age} years old`;
    }
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  // Check if the date is valid
  if (isNaN(birthdayDate.getTime())) {
    return NaN;
  }

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}

btn.addEventListener("click", calculateAge);
