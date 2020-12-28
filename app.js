const navLinkBtn = document.getElementById("toggle-btn");
const tabs = document.querySelectorAll(".tabs li");
const tabContent = document.querySelectorAll("#tab-content > div");
const form = document.getElementById("signup-form");
const signUpUserName = document.getElementById("name");
const signUpEmail = document.getElementById("email");
const signUpPwd = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");

const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const pwdformat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

// collapsable nav link toggler
navLinkBtn.addEventListener("click", () => {
  const element = document.getElementById("nav-links");
  element.classList.toggle("is-active");
});

// tabs switch
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");

    const target = tab.dataset.target;
    tabContent.forEach((box) => {
      if (target === box.getAttribute("id")) {
        box.classList.remove("is-hidden");
      } else {
        box.classList.add("is-hidden");
      }
    });
  });
});
//price toggle
const selection = document.getElementById("select")
const priceOne = document.getElementById("price1");
const priceTwo = document.getElementById("price2");
const defaultSelection = document.getElementById("default")
selection.addEventListener("change", () => {
  const Svalue = selection.options[selection.selectedIndex].value;
  if(Svalue == 250){
    priceTwo.classList.add("is-hidden");
    priceOne.classList.remove("is-hidden")
  }
  if(Svalue == 500){
    priceOne.classList.add("is-hidden");
    priceTwo.classList.remove("is-hidden")
  }
  if(Svalue == "default"){
    priceOne.classList.add("is-hidden")
    priceTwo.classList.add("is-hidden")
  }
});
// form validation
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (signUpUserName.value === "" || signUpUserName.value === null) {
    wrongValidator(
      signUpUserName,
      "correct-icon",
      "correct-username",
      "is-success"
    );
    correctValidator(
      signUpUserName,
      "wrong-icon",
      "empty-username",
      "is-danger"
    );
    return;
  } else {
    correctValidator(
      signUpUserName,
      "correct-icon",
      "correct-username",
      "is-success"
    );
    wrongValidator(signUpUserName, "wrong-icon", "empty-username", "is-danger");
  }

  if (signUpEmail.value === "" || signUpEmail.value === null) {
    wrongValidator(
      signUpEmail,
      "correct-icon-email",
      "correct-email",
      "is-success"
    );
    correctValidator(
      signUpEmail,
      "wrong-icon-email",
      "empty-email",
      "is-danger"
    );
    return;
  } else {
    correctValidator(
      signUpEmail,
      "correct-icon-email",
      "correct-email",
      "is-success"
    );
    wrongValidator(signUpEmail, "wrong-icon-email", "empty-email", "is-danger");
  }

  if (signUpEmail.value.match(mailformat)) {
    correctValidator(
      signUpEmail,
      "correct-icon-email",
      "correct-email",
      "is-success"
    );
    wrongValidator(signUpEmail, "wrong-icon-email", "wrong-email", "is-danger");
  } else {
    wrongValidator(
      signUpEmail,
      "correct-icon-email",
      "correct-email",
      "is-success"
    );
    correctValidator(
      signUpEmail,
      "wrong-icon-email",
      "wrong-email",
      "is-danger"
    );
    return;
  }
  if(!document.getElementById("terms").checked){
    alert('You must agree to the terms first.');
    return false;
}
  clear();
 form.reset();
 
});

const clearCo = (inputType, icon, helperText, inputBoxColor) => {
  document.getElementById(icon).classList.add("is-hidden");
  document.getElementById(helperText).classList.add("is-hidden");
  inputType.classList.remove(inputBoxColor);
};

const clear = () => {
  clearCo(signUpUserName, "correct-icon", "correct-username", "is-success");
  clearCo(signUpEmail, "correct-icon-email", "correct-email", "is-success");
  clearCo(signUpUserName, "wrong-icon", "empty-username", "is-danger");
  clearCo(signUpEmail, "wrong-icon-email", "empty-email", "is-danger");
  clearCo(signUpEmail, "wrong-icon-email", "wrong-email", "is-danger");
};

const wrongValidator = (inputType, icon, helperText, inputBoxColor) => {
  document.getElementById(icon).classList.add("is-hidden");
  document.getElementById(helperText).classList.add("is-hidden");
  inputType.classList.remove(inputBoxColor);
};

const correctValidator = (inputType, icon, helperText, inputBoxColor) => {
  document.getElementById(icon).classList.remove("is-hidden");
  document.getElementById(helperText).classList.remove("is-hidden");
  inputType.classList.add(inputBoxColor);
};

//modal
const signUpBtn = document.getElementById("signup-btn");
const modalBg = document.getElementById("modal-background");
const modal = document.getElementById("modal");
const viewModal1 = document.getElementById("view-modal1")
const viewModal2 = document.getElementById("view-modal2")
const viewModal3 = document.getElementById("view-modal3")

signUpBtn.addEventListener("click", () => {
  modal.classList.add("is-active");
});

modalBg.addEventListener("click", () => {
  modal.classList.remove("is-active");
  clear();
  form.reset();
});
//view detail modal one
const viewDetailsModalShow1 = () => {
  viewModal1.classList.add("is-active")
}
const viewDetailsModalHide1 = () => {
  viewModal1.classList.remove("is-active");
}

//view detail modal two
const viewDetailsModalShow2 = () => {
  viewModal2.classList.add("is-active")
}
const viewDetailsModalHide2 = () => {
  viewModal2.classList.remove("is-active");
}

//view detail modal three
const viewDetailsModalShow3 = () => {
  viewModal3.classList.add("is-active")
}
const viewDetailsModalHide3 = () => {
  viewModal3.classList.remove("is-active");
}