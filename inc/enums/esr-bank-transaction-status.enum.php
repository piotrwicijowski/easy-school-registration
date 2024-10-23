<?php

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

class ESR_Bank_Transaction_Status {
	const
		NEW = 0, MATCHED_AUTO = 1, MATCHED_MANUAL = 2, COULD_NOT_MATCH = 3, CONFIRMED = 4, REJECTED_AUTO = 5, REJECTED_MANUAL = 6;

	private $items = [];


	/**
	 * @codeCoverageIgnore
	 */
	public function __construct() {
		$this->items = [
			self::NEW => [
				'title' => esc_html__('New', 'easy-school-registration'),
			],
			self::MATCHED_AUTO => [
				'title' => esc_html__('Matched auto', 'easy-school-registration'),
			],
			self::MATCHED_MANUAL => [
				'title' => esc_html__('Matched manual', 'easy-school-registration'),
			],
			self::COULD_NOT_MATCH => [
				'title' => esc_html__('Could not match', 'easy-school-registration'),
			],
			self::CONFIRMED => [
				'title' => esc_html__('Confirmed', 'easy-school-registration'),
			],
			self::REJECTED_AUTO=> [
				'title' => esc_html__('Rejected auto', 'easy-school-registration'),
			],
			self::REJECTED_MANUAL => [
				'title' => esc_html__('Rejected manual', 'easy-school-registration'),
			]
		];
	}


	public function get_items() {
		return $this->items;
	}


	public function get_item($key) {
		return $this->get_items()[$key];
	}


	public function get_title($key) {
		return $this->get_item($key)['title'];
	}

}
