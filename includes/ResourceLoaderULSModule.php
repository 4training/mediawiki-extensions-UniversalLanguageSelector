<?php
/**
 * ResourceLoader module for UniversalLanguageSelector
 *
 * Copyright (C) 2012 Alolita Sharma, Amir Aharoni, Arun Ganesh, Brandon Harris,
 * Niklas Laxström, Pau Giner, Santhosh Thottingal, Siebrand Mazeland and other
 * contributors. See CREDITS for a list.
 *
 * UniversalLanguageSelector is dual licensed GPLv2 or later and MIT. You don't
 * have to do anything special to choose one license or the other and you don't
 * have to notify anyone which license you are using. You are free to use
 * UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @file
 * @author Niklas Laxström
 * @ingroup Extensions
 * @license GPL-2.0-or-later
 * @license MIT
 */

namespace UniversalLanguageSelector;

use Language;
use ResourceLoader;
use ResourceLoaderContext;
use ResourceLoaderModule;

/**
 * ResourceLoader module for UniversalLanguageSelector
 */
class ResourceLoaderULSModule extends ResourceLoaderModule {
	protected $targets = [ 'desktop', 'mobile' ];

	/**
	 * Get all the dynamic data for the content language to an array.
	 *
	 * @param string $languageCode
	 * @return array
	 */
	private function getData( $languageCode ) {
		$vars = [];
        // #custom4training: only some languages are available for user interface language selection
        // TODO: This alone is not sufficient anymore to reduce the number of available languages. Remove this? Or does this save some performance? Investigate that more thoroughly...
        $availableLanguages = array('de','en','tr','sq','fa','ar','ku','ku-sinj','ru','ru-cars','ss','pt','pt-br','ms','es','fr','ro','hu','ur','vi','ur','pl','cs','id','zh','ko','bg','it','az','sw','ps','rn','sk','sl','hr','te','ka','uk','ky','et','ti','xh','af','sv','ckb','tr-tanri','ta','th','uz','uz-cyrl','ar-urdun','ha','hi','ml','kn','nl','sr','nb','lg');
        foreach ($availableLanguages as $lang) {
            $vars['wgULSLanguages'][$lang] = Language::fetchLanguageName($lang);
        }
/*
        $vars['wgULSLanguages'] = Language::fetchLanguageNames(
            $languageCode,
            'mwfile'
        );*/
		return $vars;
	}

	/**
	 * @suppress PhanParamSignatureRealMismatchParamType, UnusedSuppression -- T308443
	 * @param ResourceLoaderContext $context
	 * @return string JavaScript code
	 */
	public function getScript( ResourceLoaderContext $context ) {
		$languageCode = $context->getLanguage();
		return ResourceLoader::makeConfigSetScript( $this->getData( $languageCode ) );
	}

	/**
	 * @return bool
	 */
	public function enableModuleContentVersion() {
		return true;
	}
}
