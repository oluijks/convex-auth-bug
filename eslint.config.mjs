import antfu from "@antfu/eslint-config";

export default antfu({
  type: "app",
  react: true,
  typescript: true,
  formatters: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
  ignores: ["convex/README.md", "convex/_generated/**", "src/lib/components/ui/**"],
}, {
  rules: {
    "ts/no-redeclare": "off",
    "ts/consistent-type-definitions": ["error", "type"],
    "no-console": ["warn"],
    "antfu/no-top-level-await": ["off"],
    "node/prefer-global/process": ["off"],
    "node/no-process-env": ["error", {
      allowedVariables: ["NODE_ENV", "CONVEX_SITE_URL", "VITE_PUBLIC_URL"],
    }],
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
    }],
    "react-hooks-extra/no-direct-set-state-in-use-effect": ["off"],
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: ["README.md"],
    }],
  },
});
