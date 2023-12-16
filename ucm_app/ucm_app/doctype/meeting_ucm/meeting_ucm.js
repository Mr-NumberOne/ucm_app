// Copyright (c) 2023, Jawad Alsarookh and contributors
// For license information, please see license.txt

frappe.ui.form.on('Meeting UCM', {
	refresh: function(frm) {
		cur_frm.get_field('council').$input.css('background-color','lightgreen');
		cur_frm.get_field('number').$input.css('background-color','lightgreen');
		cur_frm.get_field('title').$input.css('background-color','lightgreen');
		cur_frm.get_field('meeting_date').$input.css('background-color','lightgreen');
		cur_frm.get_field('time').$input.css('background-color','lightgreen');
		cur_frm.get_field('meeting_status').$input.css('background-color','lightgreen');
	}
});
