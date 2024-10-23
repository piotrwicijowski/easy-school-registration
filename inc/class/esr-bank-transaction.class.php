<?php

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

class ESR_Bank_Transaction {

	/**
	 * @param int $wave_id
	 *
	 * @return array
	 */
	public function get_bank_transactions_by_wave($wave_id, $object = ARRAY_A) {
		global $wpdb;

		return $wpdb->get_results($wpdb->prepare("SELECT * FROM {$wpdb->prefix}esr_bank_transactions WHERE wave_id = %d ORDER BY id", [intval($wave_id)]), $object);
	}

}
