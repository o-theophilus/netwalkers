form = document.querySelector("form");
username = document.querySelector("#username");
usernameError = document.querySelector("#username ~ .error");
password = document.querySelector("#password");
passwordError = document.querySelector("#password ~ .error");

const submit = () => {
	console.log("Submitted");
};

const validate = (e) => {
	invalid = false;
	e.preventDefault();
	if (!username.value) {
		invalid = true;
		usernameError.innerHTML = "Please enter your Username";
	}
	if (!password.value) {
		invalid = true;
		passwordError.innerHTML = "Please enter your Password";
	}

	if (!invalid) {
		submit();
	}
};

form.addEventListener("submit", validate);

username.addEventListener("input", () => {
	usernameError.innerHTML = "";
});

password.addEventListener("input", () => {
	passwordError.innerHTML = "";
});
