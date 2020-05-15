import { getAutocompleteInstance, getDatepickerInstance } from "../plugins/materialize";

class FormUI {
	constructor(autocompleteInstance, datepickerInstance) {
		this._form = document.forms["locationControls"];
		this.origin = document.getElementById("autocomplete-origin");
		this.destination = document.getElementById("autocomplete-destination");
		this.depart = document.getElementById("datepicker-depart");
		this.return = document.getElementById("datepicker-return");
		this.originAutoComplete = autocompleteInstance(this.origin);
		this.destinationAutoComplete = autocompleteInstance(this.destination);
		this.departDatePicker = datepickerInstance(this.depart);
		this.returnDatePicker = datepickerInstance(this.return);
	}

	get form() {
		return this._form;
	}

	get originValue() {
		return this.origin.value;
	}

	get destinationValue() {
		return this.destination.value;
	}

	get returnDateValue() {
		return this.returnDatePicker.toString();
	}

	get departDateValue() {
		return this.departDatePicker.toString();
	}

	setAutoCompleteDate(data) {
		this.originAutoComplete.updateData(data);
		this.destinationAutoComplete.updateData(data);
	}
}

const formUI = new FormUI(getAutocompleteInstance, getDatepickerInstance);

export default formUI;
