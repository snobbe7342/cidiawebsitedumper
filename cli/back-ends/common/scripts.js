/*
 * Copyright 2010-2020 Gildas Lormeau
 * contact : gildas.lormeau <at> gmail.com
 * 
 * This file is part of CidiaWebsiteDump.
 *
 *   The code in this file is free software: you can redistribute it and/or 
 *   modify it under the terms of the GNU Affero General Public License 
 *   (GNU AGPL) as published by the Free Software Foundation, either version 3
 *   of the License, or (at your option) any later version.
 * 
 *   The code in this file is distributed in the hope that it will be useful, 
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of 
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero 
 *   General Public License for more details.
 *
 *   As additional permission under GNU AGPL version 3 section 7, you may 
 *   distribute UNMODIFIED VERSIONS OF THIS file without the copy of the GNU 
 *   AGPL normally required by section 4, provided you include this license 
 *   notice and a URL through which recipients can access the Corresponding 
 *   Source.
 */

/* global require, exports */

const fs = require("fs");

const SCRIPTS = [
	"dist/infobar.js"
];

const INDEX_SCRIPTS = [
	"dist/single-file.js",
	"dist/single-file-bootstrap.js"
];

const WEB_SCRIPTS = [
	"/dist/web/hooks/hooks-web.js",
	"/dist/web/hooks/hooks-frames-web.js",
	"/dist/web/infobar-web.js"
];

exports.get = async options => {
	const basePath = "../../../";
	let scripts = "let _CidiaWebsiteDumpDefine; if (typeof define !== 'undefined') { _CidiaWebsiteDumpDefine = define; define = null }";
	scripts += await readScriptFiles(INDEX_SCRIPTS, basePath);
	const webScripts = {};
	await Promise.all(WEB_SCRIPTS.map(async path => webScripts[path] = await readScriptFile(path, basePath)));
	scripts += "window.CidiaWebsiteDump.getFileContent = filename => (" + JSON.stringify(webScripts) + ")[filename];\n";
	scripts += await readScriptFiles(SCRIPTS, basePath);
	scripts += await readScriptFiles(options && options.browserScripts ? options.browserScripts : [], "");
	if (options.browserStylesheets && options.browserStylesheets.length) {
		scripts += "addEventListener(\"load\",()=>{const styleElement=document.createElement(\"style\");styleElement.textContent=" + JSON.stringify(await readScriptFiles(options.browserStylesheets, "")) + ";document.body.appendChild(styleElement);});";
	}
	scripts += "if (_CidiaWebsiteDumpDefine) { define = _CidiaWebsiteDumpDefine; _CidiaWebsiteDumpDefine = null }";
	return scripts;
};

async function readScriptFiles(paths, basePath = "../../../") {
	return (await Promise.all(paths.map(path => readScriptFile(path, basePath)))).join("");
}

function readScriptFile(path, basePath) {
	return new Promise((resolve, reject) =>
		fs.readFile(basePath ? require.resolve(basePath + path) : path, (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data.toString() + "\n");
			}
		})
	);
}