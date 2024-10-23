<?php

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

class ESR_Bank_Transactions_Table_Header {

    public static function esr_print_action_header_callback ($wave) {
        if ( current_user_can( 'esr_bank_transactions_edit' ) ) { ?>
            <th 
                id="esr_reg_actions"
                class="esr-hide-print esr-filter-disabled no-sort"
                data-key="esr_reg_actions"
                data-visibility="1"><?php esc_html_e( 'Actions', 'easy-school-registration' ); ?></th>
        <?php }
    }

    public static function esr_print_note_header_callback ($wave) {
        ?>
            <th class="esr-filter-disabled esr-header-note esr-note"><?php esc_html_e( 'Note', 'easy-school-registration' ); ?>
                <span class="dashicons dashicons-admin-comments esr-show-all-notes" data-class="esr-note"></span>
                <span class="dashicons dashicons-welcome-comments esr-hide-all-notes" data-class="esr-note"></span>
            </th>
        <?php
    }

    public static function esr_print_status_header_callback ($wave) {
        ?>
            <th class="no-sort"><?php esc_html_e( 'Status', 'easy-school-registration' ); ?></th>
        <?php
    }

    public static function esr_print_title_header_callback ($wave) {
        ?>
            <th class="esr-filter-disabled no-sort"><?php esc_html_e( 'Transaction title', 'easy-school-registration' ); ?></th>
        <?php
    }

    public static function esr_print_datetime_header_callback ($wave) {
        ?>
            <th class="esr-filter-disabled"><?php esc_html_e( 'Date', 'easy-school-registration' ); ?></th>
        <?php
    }

    public static function esr_print_amount_header_callback ($wave) {
        ?>
            <th class="esr-filter-disabled"><?php esc_html_e( 'Amount', 'easy-school-registration' ); ?></th>
        <?php
    }
}

add_action('esr_template_bank_transactions_table_header', ['ESR_Bank_Transactions_Table_Header', 'esr_print_action_header_callback'], 20);
add_action('esr_template_bank_transactions_table_header', ['ESR_Bank_Transactions_Table_Header', 'esr_print_note_header_callback'], 30);
add_action('esr_template_bank_transactions_table_header', ['ESR_Bank_Transactions_Table_Header', 'esr_print_status_header_callback'], 50);
add_action('esr_template_bank_transactions_table_header', ['ESR_Bank_Transactions_Table_Header', 'esr_print_title_header_callback'], 100);
add_action('esr_template_bank_transactions_table_header', ['ESR_Bank_Transactions_Table_Header', 'esr_print_datetime_header_callback'], 30);
add_action('esr_template_bank_transactions_table_header', ['ESR_Bank_Transactions_Table_Header', 'esr_print_amount_header_callback'], 30);
