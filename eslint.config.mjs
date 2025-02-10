import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  rules: {
    "node/prefer-global/process": "off", // Disable this lint rule
  },
})
