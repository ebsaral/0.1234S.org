import { Validator } from "jsonschema";
import { readFile } from 'fs/promises';
import pkg from '@next/env';
const { loadEnvConfig } = pkg;

loadEnvConfig(process.cwd())

const v = new Validator();


const TitleAndTextProperty = JSON.parse(
	await readFile(
		new URL('./properties/TitleAndText.json', import.meta.url)
	)
);

v.addSchema(TitleAndTextProperty);

const schema = JSON.parse(
	await readFile(
		new URL('./main.json', import.meta.url)
	)
);


const runAsync = async () => {
	
	const trJson = JSON.parse(
		await readFile(
			new URL('../tr.json', import.meta.url)
		)
	);
	const enJson = JSON.parse(
		await readFile(
			new URL('../en.json', import.meta.url)
		)
	);
	console.info(`Validating translation: tr.json`)
	const trResult = v.validate(trJson, schema, {nestedErrors: true})
	
	console.info(`Validating translation: en.json`)
	const enResult = v.validate(enJson, schema, {nestedErrors: true})

	let hasError = false

	if(!trResult.valid) {
		console.log("Errors found in tr schema:")
		console.error(trResult.toString())
		hasError = true
	}

	if(!enResult.valid) {
		console.log("Error(s) found in en schema:")
		console.error(enResult.toString())
		hasError = true
	}

	if(hasError) {
		throw new Error("Schema validation failed.")
	}
	else {
		console.info("Schema validation is successful.")
	}
}

;(async () => {
	await runAsync()
})().catch(err => {
	console.error(err)
	throw err
})