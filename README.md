<div align="center">
  <img src="public/M.svg" width="100"/>

  ######

  <h1>Mockado</h1>
  <p>Have fictitious yet realistic data for your development tests or other needs.</p>
</div>

## Built with

#####

<div align="center">
  <img alt="nodejs" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"/>
  <img alt="typescript" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"/>
</div>

#####

## 🚀 Features

- 📅 Dates in different formats - YYYY-MM-DD, DD/MM/YYYY, DD MMM YYYY, YYYY-MM-DD HH:mm:ss
- 🪪 Identification - CPF, SSN, SIN.
- 📧 Emails on different domains - gmail.com, hotmail.com, yahoo.com.
- 🧑 Names based on usability - first name, full name or username.
- 🔑 Password with whatever charset you want - With or without letters, with or without special characters, with or without numbers.
- 🌏 Location - A complete location or just the street, neighborhood, state or zipCode.
- 📱 Phone number - Numbers in BRA or US format.

> **Note**: The data generated seeks to be as realistic as possible, without being obvious.
> It is possible that real emails, phone numbers or addresses will be generated. Use them responsibly.
> Don't implement anything in your code that could upset the owners of this data.

## 📦 Install

```bash
npm install --save-dev mockado
```

## 🪄 Usage

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

export function createRandomUser(): User {
  return {
    username: mockado.name({type: "username"}),
    email: mockado.email(),
    password: mockado.password(),
    birthdate: mockado.date(),
  };
}
```

## Scenarios

Mockado always returns default data. To receive personalized data, you need to pass your preferences as a parameter. The type of data returned varies depending on the function called.

### First name

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const firstName = mockado.name({type: "firstName"});

console.log(`Hello my name is ${firstName}`);

// output: Hello my name is Ethan
```

### First name with choice of gender

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const firstName = mockado.name({type: "firstName", gender: "female"});

console.log(`Hello my name is ${firstName}`);

// output: Hello my name is Naomi
```

### Full name

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const fullName = mockado.name({type: "fullName"});

console.log(`Hello my name is ${fullName}`);

// output: Hello my name is Casey Pacheco
```

### username

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const username = mockado.name({type: "username"});

console.log(`Hi, my username is ${username}`);

// output: Hi, my username is matthew715
```

### Email

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const email = mockado.email();

console.log(email);

// output: william96@gmail.com
```

### Email with defined domain

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const email = mockado.email({type: "yahoo.com"});

console.log(email);

// output: patrick162@yahoo.com
```

### Email with defined domain and gender

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const email = mockado.email({type: "yahoo.com", gender: "female"});

console.log(email);

// output: ella648@yahoo.com
```

### Password

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const password = mockado.password();

console.log(password);

// output: Dkoq>kfk
```

### Custom password

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const password = mockado.password({
  letters: true,
  capitalLetters: true,
  numbers: false,
  specialCharacters: true,
  length: 21,
})

console.log(password)

// output: mXjQbfFOMOAbkfejXUoE&
```

### Date

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const date = mockado.date();

console.log(date)

// output: 1974-01-24
```

### Date with custom format

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const date = mockado.date({format: "DD MMM YYYY"});

console.log(date)

// 02 Dec 1994
```

### Date between a specified start and end

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const date = mockado.date({
  start: new Date(1995, 0, 1),
  end: new Date(2018, 0, 1),
})

console.log(date)

// 2011-10-11
```

### Identification

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const identification = mockado.identification()

console.log(identification)

// 719.705.559-80
```

### Identification with specified top

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const identification = mockado.identification("SSN")

console.log(identification)

// 705-33-0284
```

### Phone number

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const phone = mockado.phone()

console.log(phone)

// +55 89 81370-2069
```

### Telephone number with specified code

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const phone = mockado.phone({code: "EUA"})

console.log(phone)

// +1 730 773-6805
```

### Location

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const location = mockado.location()

console.log(location)

// Estr. das Paineiras, 1 - Alto da Boa Vista, Rio de Janeiro - Rio de Janeiro, 22241-330
```

### Get just the street

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const location = mockado.location("street")

console.log(location)

// Praça XV de Novembro
```

### Get just the zipCode

```ts
// ESM
import { mockado } from 'mockado';

// CJS
const { mockado } = require('mockado');

const location = mockado.location("zipCode")

console.log(location)

// 51011-000
```