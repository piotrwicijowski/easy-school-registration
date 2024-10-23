<?php

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

class ESR_Template_Bank_Transactions {

	const MENU_SLUG = 'esr_admin_sub_page_bank_transactions';

	public static function print_page() {
		$subblock_bank_transactions_table = new ESR_Bank_Transactions_Table_Subblock_Templater();
		/* $subblock_bank_transactions_edit_form = new ESR_Bank_Transactions_Edit_Form_Subblock_Templater(); */
		$user_can_edit = current_user_can('esr_bank_transactions_edit');

		$selected_wave = apply_filters('esr_all_waves_select_get', ESR()->wave->get_all_waves_ids());

		if (isset($_GET['cin_wave_id'])) {
			$selected_wave = intval($_GET['cin_wave_id']);
		}

		?>
		<div class="wrap esr-settings-bank-transactions esr-settings"
			<div class="esr_controls">
				<?php do_action('esr_all_waves_select_print', $selected_wave); ?>
			</div>
			<div class="esr-settings-header esr-clearfix">
				<h1 class="wp-heading-inline"><?php esc_html_e('Bank transactions', 'easy-school-registration'); ?></h1>
			</div>
			<?php
			// if ($user_can_edit) {
			// 	$subblock_bank_transactions_edit_form->print_content($selected_wave);
			// }
			$subblock_bank_transactions_table->print_table($selected_wave);
			?>
		</div>
		<?php
	}
}
