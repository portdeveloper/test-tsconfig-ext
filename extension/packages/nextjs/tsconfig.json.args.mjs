export const extraPaths = [
  `
      "@/*": ["./src/*"],
      "components/*": ["./components/*"],
      "lib/*": ["./lib/*"],
      "types/*": ["./types/*"],
      "styles/*": ["./styles/*"]
  `
];

export const extraPlugins = [
  `
      {
        "name": "next-superjson-plugin"
      },
      {
        name: "@next/mdx",
      },
    ],
    baseUrl: ".",
    rootDir: "src",
    outDir: "dist",
    declaration: true,
    sourceMap: true,
    removeComments: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    noImplicitReturns: true,
    noFallthroughCasesInSwitch: true,
    allowUnreachableCode: false,
    allowUnusedLabels: false,
  },
];
