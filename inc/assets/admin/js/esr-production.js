jQuery((function(e){e(document).ready((function(){function t(t){t.find("input:not([type=submit]):not([type=radio])").val(""),t.find("input[type=radio].esr-default").prop("checked",!0),t.find("textarea").val(""),t.find("select").val(null),e.each(e("select option[data-default=1]",t),(function(t,s){e(s).parent().val(e(s).val())})),e.each(e("input[data-default]",t),(function(t,s){e(s).val(e(s).data("default"))}))}function s(){var s=e(".esr-edit-box");t(s),s.show()}function a(t,s){var a=e(".esr-edit-box");a.find("[name=user_email]").val(t.data("email")),a.find("[name=wave_id]").val(t.data("wave_id")),a.find("[name=payment_status]").val("paid"),a.find("[name=payment]").val(parseFloat(t.data("to_pay"))),a.find("[name=note]").val(t.data("note")),e("tr.payment").show(),s&&(a.find("[name=payment_id]").val(t.data("id")),a.find("[name=payment]").val(parseFloat(t.data("payment"))))}function n(e){return e.closest(".esr-row")}0!==e(".esr-question").length&&tippy(".esr-question",{interactive:!0,content:e=>e.getAttribute("title")}),0===e("body").find(".esr-hall").size()&&e("body").find(".esr-header .esr-hall-header").hide(),e(".esr-color-picker").length>0&&e(".esr-color-picker").wpColorPicker(),e(".esr-datatable:not(.esr-all-false)").length?e.each(e(".esr-datatable:not(.esr-all-false)"),(function(t,s){var a={lengthMenu:[[25,50,100,200,-1],[25,50,100,200,"All"]],pageLength:100,order:[[0,"desc"]],aoColumnDefs:[{bSortable:!1,aTargets:["no-sort"]}],dom:"lBfrtip",buttons:["colvis"],columnDefs:[{targets:"no-sort",orderable:!1}],initComplete:function(){this.api().columns().every((function(){var t=this,s=e(t.header()).hasClass("esr-multiple-filters");if(e(t.header()).data("label",e(t.header()).text()),!e(t.header()).hasClass("esr-filter-disabled")){var a=e('<select><option value="">'+e(t.header()).text()+"</option></select>").appendTo(e(t.header()).empty()).on("change",(function(){var a=e.fn.dataTable.util.escapeRegex(e(this).val());s?t.search(a?a+"+":"",!0,!1).draw():t.search(a?"^"+a+"$":"",!0,!1).draw()})),n=[];t.data().unique().sort().each((function(t){s?e.each(t.split("<br>"),(function(t,s){""!==s&&-1===e.inArray(s,n)&&(a.append('<option value="'+s+'">'+s+"</option>"),n.push(s))})):""!==t&&a.append('<option value="'+t+'">'+t+"</option>")}))}})),e("[data-cin-course-id]").length>0&&jQuery("th.course select option").filter((function(){return 0===jQuery(this).text().indexOf(e("[data-cin-course-id]").data("cin-course-id")+" - ")})).prop("selected",!0).trigger("change")}};e(s).hasClass("esr-email-export")&&a.buttons.push({extend:"copyHtml5",text:"Copy Emails",title:"",header:!1,exportOptions:{columns:[".esr-student-email:visible:not(.esr-hide-print)"],customizeData:function(t){var s=[],a=[];e.each(t.body,(function(t,n){-1===e.inArray(n[0],a)&&(s.push(n),a.push(n[0]))})),t.body=s}}}),e(s).hasClass("esr-newsletter-email-export")&&a.buttons.push({extend:"copyHtml5",text:"Copy newsletter emails",title:"",header:!1,exportOptions:{columns:[".esr-student-email:visible:not(.esr-hide-print)"],rows:[".esr-has-newsletter"],customizeData:function(t){var s=[],a=[];e.each(t.body,(function(t,n){-1===e.inArray(n[0],a)&&(s.push(n),a.push(n[0]))})),t.body=s}}}),e(s).hasClass("esr-copy-table")&&a.buttons.push({extend:"copyHtml5",text:"Copy Table",title:"",exportOptions:{columns:[":visible:not(.esr-hide-print)"],format:{header:function(t,s,a,n){return e(a).data("label")}}}}),e(s).hasClass("esr-excel-export")&&a.buttons.push({extend:"excel",text:"Excel",title:"",exportOptions:{columns:[":visible:not(.esr-hide-print)"],format:{header:function(t,s,a,n){return e(a).data("label")}}}}),e(s).hasClass("esr-enable-scroll")&&(a.scrollX=!0,a.scrollCollapse=!0,a.fixedColumns=!0,a.columnDefs.push({width:"20%",targets:0})),"undefined"!==e(s).data("idisplaylengt")&&(a.iDisplayLength=e(s).data("idisplaylengt"));var n=e(s).DataTable(a);e(s).hasClass("esr-enable-scroll")&&n.columns.adjust().draw(),e("[data-cin-student-id]").length>0&&jQuery(".dataTables_filter input[type=search]").val(e("[data-cin-student-id]").data("cin-student-id")).trigger("keyup")})):e(".esr-datatable.esr-all-false").length&&e(".esr-datatable.esr-all-false").DataTable({bFilter:!1,bInfo:!1,bPaginate:!1,bLength:!1,bSort:!1});var i=!0;e(document).on("click",".esr-add-new",(function(){s()})).on("click",".esr-edit-box .close",(function(){var s=e(".esr-edit-box");t(s),s.hide()})).on("click",".actions.esr-payment .esr-action.confirm-payment",(function(){s(),a(n(e(this)),!1)})).on("click",".actions.esr-payment .esr-action.edit",(function(){s(),a(n(e(this)),!0)})).on("click",".actions.esr-payment .esr-action.forgive-payment",(function(){var t={action:"esr_forgive_payment",payment_id:e(this).closest(".esr-row").data("id")};e.post(ajaxurl,t,(function(e){-1!==e&&console.log(e)}))})).on("click",".actions.esr-payment .esr-action.disable-registration",(function(){var t=e(this).closest(".esr-row").data("user_id"),s={action:"esr_disable_student_registrations",user_id:t};e.post(ajaxurl,s,(function(s){-1!==s&&e(".esr-row[data-user_id="+t+"]").addClass("esr-disable-registrations")}))})).on("click",".actions.esr-payment .esr-action.enable-registration",(function(){var t=e(this).closest(".esr-row").data("user_id"),s={action:"esr_enable_student_registrations",user_id:t};e.post(ajaxurl,s,(function(s){-1!==s&&e(".esr-row[data-user_id="+t+"]").removeClass("esr-disable-registrations")}))})).on("input",".esr-range",(function(){e(this).prev().html(e(this).val())})).on("click","[name=esr_payment_submit]",(function(s){s.preventDefault();var a=e(".esr-edit-box"),n=a.find("[name=user_email]").val();e(".esr-error",a).remove();var i={action:"esr_payment_save_payment",user_email:a.find("[name=user_email]").val(),wave_id:a.find("[name=wave_id]").val(),payment:a.find("[name=payment]").val(),payment_status:a.find("[name=payment_status]").val(),payment_type:a.find("[name=payment_type]").val(),esr_payment_email_confirmation:a.find("[name=esr_payment_email_confirmation]").is(":checked"),note:a.find("[name=note]").val()};e.post(ajaxurl,i,(function(s){if(-1!==s){var a=jQuery.parseJSON(s);if(a.hasOwnProperty("error"))a.error.hasOwnProperty("student")&&e(".esr-student td").append("<span class='esr-error'>"+a.error.student+"</span>");else{var i=e(".esr-edit-box");t(i),i.hide();var o=e('tr[data-email="'+n+'"]');o.find(".status").text(a.payment_status_title),o.find(".payment-type").text(a.payment_type),o.find(".student-paid").html(a.payment),o.data("note",a.payment_note),""!==a.payment_note&&o.find(".esr-note").html("<span class='dashicons dashicons-admin-comments esr-show-note' title='"+a.payment_note+"' style='display: block;'></span><span class='dashicons dashicons-welcome-comments esr-hide-note' style='display: none;'></span><span class='esr-note-message' style='display: none;'>"+a.payment_note+"</span>");var r=o[0].className.match(/paid\-status\-[0-9]/gi);r.length>0&&e(o).removeClass(r[0]).addClass("paid-status-"+a.payment_status),e(".esr-payments-table tr").length}}}))})).on("change","[name=payment_status]",(function(){"paid"===e("[name=payment_status]").val()?e("tr.payment").show():e("tr.payment").hide()})).on("change",".esr-toggle-on-change",(function(){e(this).is(":checked")?(e(e(this).data("show")).show(),e(e(this).data("hide")).hide()):(e(e(this).data("show")).hide(),e(e(this).data("hide")).show())})).on("click",".esr-show-note",(function(){var t=e(this).parent();e(".esr-hide-note, .esr-note-message",t).css("display","block"),e(".esr-show-note",t).hide()})).on("click",".esr-hide-note",(function(){var t=e(this).parent();e(".esr-hide-note, .esr-note-message",t).hide(),e(".esr-show-note",t).css("display","block")})).on("click",".esr-show-all-notes",(function(){e(".esr-header-note."+e(this).data("class")+" .esr-hide-all-notes, ."+e(this).data("class")+" .esr-hide-note, ."+e(this).data("class")+" .esr-note-message").css("display","block"),e(".esr-header-note."+e(this).data("class")+" .esr-show-all-notes, ."+e(this).data("class")+" .esr-show-note").hide()})).on("click",".esr-hide-all-notes",(function(){e(".esr-header-note."+e(this).data("class")+" .esr-show-all-notes, ."+e(this).data("class")+" .esr-show-note").css("display","block"),e(".esr-header-note."+e(this).data("class")+" .esr-hide-all-notes, ."+e(this).data("class")+" .esr-hide-note, ."+e(this).data("class")+" .esr-note-message").hide()})).on("click",".esr-add-list-item",(function(){var t=e(this).parent().find("tr:last"),s=t.clone(),a=t.data("key")+1;return s.find("td input").val(""),s.find("input").each((function(){var t=e(this).attr("name");t=t.replace(/\[(\d+)\]/,"["+parseInt(a)+"]"),e(this).attr("name",t).attr("id",t)})),s.find("label").each((function(){var t=e(this).attr("for");t=t.replace(/\[(\d+)\]/,"["+parseInt(a)+"]"),e(this).attr("for",t)})),s.find(".esr-key-container").text(a),s.data("key",a),s.insertAfter(t),!1})).on("click",".esr_remove_list_item",(function(){var t=e(this).closest(".esr_list_items");return 2===t.find("tr:visible").length?t.find('input[type="text"]').val(""):e(this).closest("tr").remove(),!1})).on("click",".esr-row .actions button",(function(){e(this).next().is(":visible")?e(this).next().hide():(e(".esr-actions-box").hide(),e(this).next().show(),i=!1)})).on("keypress keyup blur",".esr-allow-decimal",(function(t){e(this).val(e(this).val().replace(/[^0-9\.]/g,"")),-1==e(this).val().indexOf(".")&&e.inArray(t.which,[37,39,8,46])||!(t.which<48||t.which>57)||t.preventDefault()})).on("click","body",(function(){i&&e(".esr-actions-box").hide(),i=!0})).on("change","input[name=esr-select-all]",(function(){e('input[name="esr_choosed_users[]"]',e(this).closest("table")).prop("checked",e(this).is(":checked"))})).on("click",".show-email-example",(function(){var t=e(this).parent();e(".esr-email-popup",t).html(e("textarea",t).val())})).on("click",".esr-row.registration-row .actions button",(function(t){let s=e(".esr-actions-box");const a=e(this).closest(".esr-row"),n=e(this).offset();s.data("id",e(a).data("id")),e(".esr-action, .esr-show-status-0, .esr-show-status-1",s).show(),a.hasClass("status-1")&&e(".esr-action.remove-forever",s).hide(),a.hasClass("status-2")&&e(".esr-action.confirm, .esr-action.remove-forever",s).hide(),a.hasClass("status-3")&&e(".esr-action.edit, .esr-action.remove",s).hide(),a.hasClass("free-registration-status-0")&&e(".esr-action .esr-show-status-0",s).hide(),a.hasClass("free-registration-status-1")&&e(".esr-action .esr-show-status-1",s).hide(),s.css("top",n.top-2).css("left",n.left-e(this).closest(".esr-settings").offset().left+24).show()})).on("click",".esr-deactivate-license",(function(){e(this).prev().val("")})).on("click",".esr-teacher-calendar-generation",(function(t){t.preventDefault(),e(this).closest(".esr-row"),e.post(ajaxurl,{action:"esr_ics_generate_teacher_calendar",wave_id:e(this).data("wave-id")},(function(t){jQuery.isEmptyObject(t)||function(t){var s=ics("default","Calendar",t.timezone);e.each(t.halls,(function(t,a){!function(t,s){e.each(s.courses,(function(e,a){""!==a.from&&""!==a.to&&t.addEvent(a.title,a.id,a.title,s.hall,a.from,a.to,s.timezone,{freq:"WEEKLY",interval:1,count:a.weeks})}))}(s,a)})),s.download("classes")}(t)}))})).on("change","input[name=esr_hide_passed_courses]",(function(){var t={action:"esr_toggle_passed_courses",is_checked:e(this).is(":checked")};e.post(ajaxurl,t,(function(e){window.location.reload()}))})),e(".esr-settings-registrations .dataTables_scrollBody").on("scroll",(function(){let t=e(".esr-actions-box"),s=e(`.esr-row[data-id=${t.data("id")}]`);const a=e("button",s).offset();if(void 0!==a){const n=a.left-e(s).closest(".esr-settings").offset().left+24;t.css("left",n).show(),n<=0?t.css("visibility","hidden"):t.css("visibility","visible")}}))}))}));