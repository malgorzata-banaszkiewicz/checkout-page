const checkbox = document.querySelector("[data-form-checkbox]");
const checkboxContainer = document.querySelector(
	"[data-form-checkbox-container]"
);

export const customCheckbox = () => {
	checkboxContainer.addEventListener("click", () => {
		if (!checkbox.checked) {
			checkbox.setAttribute("checked", "");
		} else if (checkbox.checked) {
			checkbox.removeAttribute("checked");
		}
	});
};
