<?php
if (version_compare(get_site_option('esr_db_version'), '3.9.9', '<')) {
    global $wpdb;

    $wpdb->query("CREATE TABLE {$wpdb->prefix}esr_bank_transactions;");
}
