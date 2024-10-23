<?php

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

class ESR_Bank_Transactions_Table_Column_Content {

    public static function esr_print_action_content_callback ($wave, $bank_transaction) {
        if ( current_user_can( 'esr_bank_transactions_edit' ) ) { ?>
            <td class="actions no-sort esr-bank-transaction esr-hide-print">
                <div class="esr-relative">
                    <button class="page-title-action"><?php esc_html_e( 'Actions', 'easy-school-registration' ) ?></button>
                </div>
            </td>
        <?php }
    }

    public static function esr_print_note_content_callback ($wave, $bank_transaction) {
        ?>
        <td class="esr-note">
            <?php if ( ( $bank_transaction->note !== null ) && ( $bank_transaction->note !== "" ) ) { ?>
                <span class="dashicons dashicons-admin-comments esr-show-note" title="<?php echo esc_html(htmlspecialchars( $bank_transaction->note, ENT_QUOTES, 'UTF-8' )); ?>"></span>
                <span class="dashicons dashicons-welcome-comments esr-hide-note"></span>
                <span class="esr-note-message"><?php echo esc_html(htmlspecialchars( $bank_transaction->note, ENT_QUOTES, 'UTF-8' )); ?></span>
            <?php } ?>
        </td>
        <?php
    }

    public static function esr_print_status_content_callback ($wave, $bank_transaction) {
        ?>
        <td class="status"><?php echo esc_html(ESR()->bank_transaction_status->get_title( $bank_transaction->status )); ?></td>
        <?php
    }

    public static function esr_print_title_content_callback ($wave, $bank_transaction) {
        ?>
        <td class="status"><?php echo esc_html($bank_transaction->title); ?></td>
        <?php
    }

    public static function esr_print_datetime_content_callback ($wave, $bank_transaction) {
        ?>
        <td class="status"><?php echo esc_html($bank_transaction->transaction_datetime); ?></td>
        <?php
    }

    public static function esr_print_amount_content_callback ($wave, $bank_transaction) {
        ?>
        <td class="status"><?php echo esc_html($bank_transaction->amount); ?></td>
        <?php
    }

}

add_action('esr_template_bank_transactions_table_content', ['ESR_Bank_Transactions_Table_Column_Content', 'esr_print_action_content_callback'], 20, 2);
add_action('esr_template_bank_transactions_table_content', ['ESR_Bank_Transactions_Table_Column_Content', 'esr_print_note_content_callback'], 30, 2);
add_action('esr_template_bank_transactions_table_content', ['ESR_Bank_Transactions_Table_Column_Content', 'esr_print_status_content_callback'], 50, 2);
add_action('esr_template_bank_transactions_table_content', ['ESR_Bank_Transactions_Table_Column_Content', 'esr_print_title_header_callback'], 100, 2);
add_action('esr_template_bank_transactions_table_content', ['ESR_Bank_Transactions_Table_Column_Content', 'esr_print_datetime_header_callback'], 30, 2);
add_action('esr_template_bank_transactions_table_content', ['ESR_Bank_Transactions_Table_Column_Content', 'esr_print_amount_header_callback'], 30, 2);
