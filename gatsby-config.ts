import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'gatsby-test',
        siteUrl: 'https://www.yourdomain.tld'
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-postcss',
        'gatsby-plugin-provide-react',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-plugin-tsconfig-paths',
        'gatsby-plugin-provide-react',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: "src/images/icon.png"
            },
        },
    ]
};

export default config;
