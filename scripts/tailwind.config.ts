import { TailwindConfig } from 'tailwindcss/tailwind-config'
// https://github.com/microsoft/TypeScript/issues/37582
// TypeScript does not allow adding the .ts file extension explicitly at the moment
import { foo } from './a'

console.log(foo)
console.log(require('./a').foo)
console.log(require('./a.ts').foo)
console.log(require('./b').foo)
console.log(require('./b.js').foo)
console.log(require('./c.cjs').foo)
console.log(JSON.stringify(require('./test')))
console.log(JSON.stringify(require('./test.json')))
console.log('---------------')

export const config: TailwindConfig = {
  content: ['./index.html'],
  theme: {
    extend: {}
  },
  plugins: []
}
