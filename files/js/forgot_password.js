form = document.querySelector("form");
email = document.querySelector("#email");
emailError = document.querySelector("#email ~ .error");
captcha = document.querySelector("#captcha");
captchaError = document.querySelector("#captcha ~ .error");

const submit = () => {
	console.log("Submitted");
};

const validate = (e) => {
	invalid = false;
	e.preventDefault();
	if (!email.value) {
		invalid = true;
		emailError.innerHTML = "Please enter your Email Address";
	} else if (!/\S+@\S+\.\S+/.test(email.value)) {
		invalid = true;
		emailError.innerHTML = "Please enter a valid email address";
	}

	if (!captcha.value) {
		captchaError.innerHTML = "Please enter the CAPTCHA shown below";
	} else if (captcha.value !== "pq2MD") {
		captchaError.innerHTML = "Incorrect CAPTCHA";
	}

	if (!invalid) {
		submit();
	}
};

form.addEventListener("submit", validate);

email.addEventListener("input", () => {
	emailError.innerHTML = "";
});

captcha.addEventListener("input", () => {
	captchaError.innerHTML = "";
});
