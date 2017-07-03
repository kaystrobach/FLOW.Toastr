<?php
/**
 * Created by PhpStorm.
 * User: kay
 * Date: 05.05.14
 * Time: 09:15
 */

namespace KayStrobach\Toastr\ViewHelpers;


class ToastrFlashMessagesViewHelper extends \TYPO3\Fluid\Core\ViewHelper\AbstractViewHelper {
	
	/**
	 * NOTE: This property has been introduced via code migration to ensure backwards-compatibility.
	 * @see AbstractViewHelper::isOutputEscapingEnabled()
	 * @var boolean
	 */
	protected $escapeOutput = FALSE;
	/**
	 * @param null $severity
	 * @return string
	 */
	public function render($severity = NULL) {
		$flashMessages = $this->controllerContext->getFlashMessageContainer()->getMessagesAndFlush($severity);
		if (count($flashMessages) < 1) {
			return '';
		}
		$output = array();
		/** @var \TYPO3\Flow\Error\Message $singleFlashMessage*/
		foreach ($flashMessages as $singleFlashMessage) {
			$output[] = array(
				'severity' => $singleFlashMessage->getSeverity(),
				'message'  => $singleFlashMessage->render(),
				'title'    => $singleFlashMessage->getTitle(),
			);
		}
		return '<script type="text/javascript">jQuery().ToastrLoader(' . json_encode($output) . ');</script>';
	}
}
