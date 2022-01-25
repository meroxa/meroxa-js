## Meroxa JS

## Installation

```
npm install https://github.com/meroxa/meroxa-js.git
```

## Usage

```
import { Client } from "@meroxa/client"

// Initializing a client
let meroxa = new Client({
auth: process.env.MEROXA_TOKEN,
})

;(async () => {
let resources = await meroxa.resources.list()
}
```

## Requirements

Runtime: node >= 12
Type definitions (optional): typescript >= 4.2
