import { terser } from "rollup-plugin-terser";

export default [{
	input: ["lib/single-file/index.js"],
	output: [{
		file: "dist/single-file.js",
		format: "umd",
		name: "CidiaWebsiteDump",
		plugins: [terser()]
	}]
}, {
	input: ["lib/single-file/single-file-frames.js"],
	output: [{
		file: "dist/single-file-frames.js",
		format: "umd",
		name: "CidiaWebsiteDump",
		plugins: [terser()]
	}]
}, {
	input: ["lib/single-file/single-file-bootstrap.js"],
	output: [{
		file: "dist/single-file-bootstrap.js",
		format: "umd",
		name: "CidiaWebsiteDumpBootstrap",
		plugins: [terser()]
	}]
}, {
	input: ["common/ui/content/content-infobar.js"],
	output: [{
		file: "dist/infobar.js",
		format: "umd",
		name: "infobar",
		plugins: [terser()]
	}]
}, {
	input: ["extension/core/content/content-bootstrap.js"],
	output: [{
		file: "dist/extension-bootstrap.js",
		format: "iife",
		plugins: [terser()]
	}]
}, {
	input: ["extension/core/content/content-frames.js"],
	output: [{
		file: "dist/extension-frames.js",
		format: "iife",
		plugins: [terser()]
	}]
}, {
	input: ["extension/index.js"],
	output: [{
		file: "dist/extension-core.js",
		format: "umd",
		name: "extension",
		plugins: [terser()]
	}]
}, {
	input: ["extension/core/content/content.js"],
	output: [{
		file: "dist/extension.js",
		format: "iife",
		plugins: [terser()]
	}]
}, {
	input: ["lib/single-file/processors/hooks/content/content-hooks-web.js"],
	output: [{
		file: "dist/web/hooks/hooks-web.js",
		format: "iife",
		plugins: [terser()]
	}]
}, {
	input: ["lib/single-file/processors/hooks/content/content-hooks-frames-web.js"],
	output: [{
		file: "dist/web/hooks/hooks-frames-web.js",
		format: "iife",
		plugins: [terser()]
	}]
}, {
	input: ["common/ui/content/content-infobar-web.js"],
	output: [{
		file: "dist/web/infobar-web.js",
		format: "iife",
		plugins: [terser()]
	}]
}, {
	input: ["extension/ui/content/content-ui-editor-init-web.js"],
	output: [{
		file: "dist/web/editor/editor-init-web.js",
		format: "iife",
		plugins: [terser()]
	}]
}, {
	input: ["extension/ui/content/content-ui-editor-web.js"],
	output: [{
		file: "dist/web/editor/editor-web.js",
		format: "iife",
		plugins: []
	}]
}, {
	input: ["extension/ui/content/content-ui-editor-helper-web"],
	output: [{
		file: "dist/web/editor/editor-helper-web.js",
		format: "umd",
		name: "CidiaWebsiteDump",
		plugins: [terser()]
	}]
}, {
	input: ["extension/lib/single-file/browser-polyfill/chrome-browser-polyfill.js"],
	output: [{
		file: "dist/chrome-browser-polyfill.js",
		format: "iife",
		plugins: [terser()]
	}]
}, {
	input: ["extension/core/bg/index.js"],
	output: [{
		file: "dist/extension-background.js",
		format: "iife",
		plugins: [terser()]
	}]
}, {
	input: ["extension/lib/single-file/background.js"],
	output: [{
		file: "dist/single-file-background.js",
		format: "iife",
		plugins: [terser()]
	}]
}];