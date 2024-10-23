<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class ESR_Bank_Transactions_Table_Subblock_Templater {


	public function print_table( $selected_wave ) {
		$user_can_edit = current_user_can( 'esr_bank_transactions_edit' );

		$classes = [ 'wp-list-table widefat fixed striped esr-datatable esr-bank-transactions esr-copy-table esr-excel-export esr-enable-scroll' ];

		?>
		<table id="datatable" class="<?php echo esc_attr(implode( ' ', $classes )) ?>">
			<thead>
			<tr>
				<?php do_action( 'esr_template_bank_transactions_table_header', $selected_wave ); ?>
			</tr>
			</thead>
			<tbody class="list">
			<?php
			$bank_transaction_data               = ESR()->bank_transaction->get_bank_transactions_by_wave( $selected_wave);
			foreach ( $bank_transaction_data as $k => $bank_transaction ) {
				$classes = [ "esr-row", "bank-transfer-row", "transaction-status-" . $bank_transaction->status ];

				?>
				<tr class="<?php echo esc_attr(implode( " ", $classes )); ?>"
					<?php if ( $user_can_edit ) { ?>
						data-id="<?php echo esc_attr($bank_transaction->id); ?>"
						<?php do_action( 'esr_template_bank_transactions_row_data', $bank_transaction ); ?>
					<?php } ?>>
					<?php do_action( 'esr_template_bank_transactions_table_content', $selected_wave, $bank_transaction ); ?>
				</tr>
				<?php
			}
			?>
			</tbody>
		</table>
		<?php $this->print_action_box( $selected_wave );
	}


	private function print_action_box( $wave_id ) {
		?>
		<ul class="esr-actions-box esr-bank-transaction-actions dropdown-menu">
			<li class="esr-action reject">
				<a href="javascript:;">
					<span class="dashicons dashicons-no-alt"></span>
					<span><?php esc_html_e( 'Reject', 'easy-school-registration' ); ?></span>
				</a>
			</li>
		</ul>
		<?php
	}

}
