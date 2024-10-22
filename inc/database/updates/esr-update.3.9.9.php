<?php
if (version_compare(get_site_option('esr_db_version'), '3.9.9', '<')) {
    global $wpdb;

    $wpdb->query("CREATE TABLE {$wpdb->prefix}esr_bank_transactions (
			id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
			user_payment_id bigint(20) UNSIGNED NULL,
			wave_id bigint(20) UNSIGNED NOT NULL,
			title varchar(1000) NOT NULL,
			transaction_datetime varchar(50) NOT NULL,
			amount float DEFAULT NULL,
			balance float DEFAULT NULL,
			note text DEFAULT NULL,
			status int DEFAULT 0,
			PRIMARY KEY id (id)
		) $charset_collate;");
}
