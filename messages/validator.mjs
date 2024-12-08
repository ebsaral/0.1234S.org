import { Validator } from "jsonschema";
import { readFile } from 'fs/promises';
import pkg from '@next/env';
const { loadEnvConfig } = pkg;

loadEnvConfig(process.cwd())

const v = new Validator();


const TitleAndTextProperty = {
	"id": "/TitleAndText",
  	"type": "object",
  	"properties": {
		"title": {"type": "string"},
		"text": {"type": "string"},
  	},
	"required": ["title", "text"]
}

v.addSchema(TitleAndTextProperty);

const schema = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"id": "/Translation",
	"type": "object",
	"properties": {
	  "Text": {
		"type": "object",
		"properties": {
		  "LastUpdate": {
			"type": "string"
		  }
		},
		"required": ["LastUpdate"]
	  },
	  "NotFoundPage": {
		"type": "object",
		"properties": {
		  "title": {
			"type": "string"
		  }
		},
		"required": ["title"]
	  },
	  "Metadata": {
		"type": "object",
		"properties": {
		  "title": {
			"type": "string"
		  },
		  "description": {
			"type": "string"
		  },
		  "name": {
			"type": "string"
		  },
		  "Gallery": {
			"type": "object",
			"properties": {
			  "title": {
				"type": "string"
			  },
			  "description": {
				"type": "string"
			  },
			  "keywords": {
				"type": "string"
			  }
			},
			"required": ["title", "description", "keywords"]
		  }
		},
		"required": ["title", "description", "name", "Gallery"]
	  },
	  "Link": {
		"type": "object",
		"properties": {
		  "home": {
			"type": "string"
		  },
		  "cvName": {
			"type": "string"
		  },
		  "cvLink": {
			"type": "string"
		  },
		  "contact": {
			"type": "string"
		  }
		},
		"required": ["home", "cvName", "cvLink", "contact"]
	  },
	  "Info": {
		"type": "object",
		"properties": {
		  "title": {
			"type": "string"
		  },
		  "education": {"$ref": "/TitleAndText"},
		  "work_experience": {"$ref": "/TitleAndText"},
		  "consultancy_solutions": {"$ref": "/TitleAndText"},
		  "personality_traits": {"$ref": "/TitleAndText"},
		  "interests": {"$ref": "/TitleAndText"},
		  "social_causes": {"$ref": "/TitleAndText"},
		  "places": {"$ref": "/TitleAndText"}
		},
		"required": ["title", "education", "work_experience", "consultancy_solutions", "personality_traits", "interests", "social_causes", "places"
		]
	  },
	  "Projects": {
		"type": "object",
		"properties": {
		  "title": {
			"type": "string"
		  },
		  "TouchSensei": {
			"type": "object",
			"properties": {
			  "title": {
				"type": "string"
			  },
			  "text": {
				"type": "string"
			  }
			},
			"required": ["title", "text"]
		  },
		  "CB": {
			"type": "object",
			"properties": {
			  "title": {
				"type": "string"
			  },
			  "text": {
				"type": "string"
			  }
			},
			"required": ["title", "text"]
		  },
		  "EBSLifeSolutions": {
			"type": "object",
			"properties": {
			  "title": {
				"type": "string"
			  },
			  "text": {
				"type": "string"
			  }
			},
			"required": ["title", "text"]
		  }
		},
		"required": ["title", "TouchSensei", "CB", "EBSLifeSolutions"]
	  },
	  "Soon": {
		"type": "object",
		"properties": {
		  "title": {
			"type": "string"
		  }
		},
		"required": ["title"]
	  },
	  "Hobbies": {
		"type": "object",
		"properties": {
		  "title": {
			"type": "string"
		  },
		  "Gallery": {
			"type": "object",
			"properties": {
			  "title": {
				"type": "string"
			  },
			  "text": {
				"type": "string"
			  },
			  "link": {
				"type": "string"
			  }
			},
			"required": ["title", "text", "link"]
		  },
		  "DeviantArt": {"$ref": "/TitleAndText"},
		  "SoundCloud": {"$ref": "/TitleAndText"},
		  "Vimeo": {"$ref": "/TitleAndText"},
		"required": [
		  "title",
		  "Gallery",
		  "DeviantArt",
		  "SoundCloud",
		  "Vimeo"
		]
	  },
	  "Career": {
		"type": "object",
		"properties": {
		  "title": {
			"type": "string"
		  },
		  "Github": {"$ref": "/TitleAndText"},
		  "DevTo": {"$ref": "/TitleAndText"},
		  "Stackoverflow": {"$ref": "/TitleAndText"},
		"required": [
		  "title",
		  "Github",
		  "DevTo",
		  "Stackoverflow"
		]
	  },
	  "SocialMedia": {
		"type": "object",
		"properties": {
		  "title": {
			"type": "string"
		  },
		  "LinkedIn": {"$ref": "/TitleAndText"},
		  "FetLife": {"$ref": "/TitleAndText"},
		"required": [
		  "title",
		  "LinkedIn",
		  "FetLife"
		]
	  },
	  "Apology": {"$ref": "/TitleAndText"},
	  "LegalWarning": {"$ref": "/TitleAndText"},
	  "Gallery": {
		"type": "object",
		"properties": {
		  "doodles": {
			"type": "string"
		  },
		  "drawings": {
			"type": "string"
		  }
		},
		"required": [
		  "doodles",
		  "drawings"
		]
	  },
	  "Links": {
		"type": "object",
		"properties": {
		  "title": {
			"type": "string"
		  }
		},
		"required": [
		  "title"
		]
	  },
	  "Files": {
		"type": "object",
		"properties": {
		  "title": {
			"type": "string"
		  },
		  "file_cv": {
			"type": "object",
			"properties": {
			  "filename": {
				"type": "string"
			  },
			  "type": {
				"type": "string"
			  }
			},
			"required": [
			  "filename",
			  "type"
			]
		  },
		  "Links": {
			"type": "object",
			"properties": {
			  "download": {
				"type": "string"
			  },
			  "link": {
				"type": "string"
			  }
			},
			"required": [
			  "download",
			  "link"
			]
		  }
		},
		"required": [
		  "title",
		  "file_cv",
		  "Links"
		]
	  }
	},
	"required": [
	  "Text",
	  "NotFoundPage",
	  "Metadata",
	  "Link",
	  "Info",
	  "Projects",
	  "Soon",
	  "Hobbies",
	  "Career",
	  "SocialMedia",
	  "Apology",
	  "LegalWarning",
	  "Gallery",
	  "Links",
	  "Files"
	]
  }
	  }
	}
}


const runAsync = async () => {
	
	const trJson = JSON.parse(
		await readFile(
			new URL('./tr.json', import.meta.url)
		)
	);
	const enJson = JSON.parse(
		await readFile(
			new URL('./en.json', import.meta.url)
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