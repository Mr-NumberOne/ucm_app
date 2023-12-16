// Copyright (c) 2023, Jawad Alsarookh and contributors
// For license information, please see license.txt

frappe.ui.form.on('Agenda UCM', {
	refresh: function(frm) {
		cur_frm.get_field('council_name').$input.css('background-color','lightgreen');
		cur_frm.get_field('meeting').$input.css('background-color','lightgreen');
		cur_frm.get_field('agenda_number').$input.css('background-color','lightgreen');
		cur_frm.get_field('agenda_status').$input.css('background-color','lightgreen');


		// frm.fields_dict['section_details_agenda'].wrapper.css('background-color','lightyellow');
	}
});
