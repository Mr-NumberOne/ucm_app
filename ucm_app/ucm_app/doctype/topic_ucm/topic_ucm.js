// Copyright (c) 2023, Jawad Alsarookh and contributors
// For license information, please see license.txt

frappe.ui.form.on('Topic UCM', {
	refresh: function(frm) {
		cur_frm.get_field('council').$input.css('background-color','lightgreen');
		cur_frm.get_field('agenda').$input.css('background-color','lightgreen');
		cur_frm.get_field('main_council_topic_type_ucm').$input.css('background-color','lightgreen');
		cur_frm.get_field('council_topic_type_ucm').$input.css('background-color','lightgreen');
		cur_frm.get_field('creation_date').$input.css('background-color','lightgreen');
		
		frm.set_value('creation_date' , frappe.datetime.get_today());
		// frm.fields_dict['section_details_topic'].wrapper.css('background-color','lightgreen');

		/*
F5F5DC 
B2D8B2
			lightblue
				- Lemon Yellow (#FFF44F)
				- Canary Yellow (#FFE600)
				- Golden Yellow (#FFDF00)
				- Mustard Yellow (#FFDB58)
				- Pale Yellow (#FDFD96)
				- Creamy Yellow (#FFFFCC)
				- Banana Yellow (#FFE135)

				
				- Light Blue (#ADD8E6)
				- Baby Blue (#89CFF0)
				- Sky Blue (#87CEEB)
				- Steel Blue (#4682B4)
				- Navy Blue (#000080)
				- Royal Blue (#4169E1)
				- Teal Blue (#008080)
		*/

		// cur_frm.get_field('topic').$input.css('color' , 'red');
	    // cur_frm.get_field('topic').$input.css('background-color','lightyellow');
	    
	    
		// frm.fields_dict['basic_data_section'].wrapper.css('background-color','lightgreen');
		// frm.fields_dict['section_break_1'].wrapper.css('background-color','lightblue');
		
		// frm.set_value('creation_date' , frappe.datetime.get_today());
	}
});
