// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'n/prefer-global/buffer': 0,
    'n/prefer-global/process': 0,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 0,
  },
})
