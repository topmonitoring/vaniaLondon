const Promise = require("bluebird");
const path = require("path");
const _ = require("lodash");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const product = path.resolve("./src/templates/product/product.js");
    resolve(
      graphql(
        `
          {
            allContentfulProduct(limit: 1000) {
              edges {
                node {
                  node_locale
                  slug
                  id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulProduct.edges;
        posts.forEach((post, index) => {
          var locale = "";
          if (post.node.node_locale === "en-US") {
            locale = "en";
          } else {
            locale = "bg";
          }
          createPage({
            path: `/${locale}/${post.node.slug}/`,
            component: product,
            context: {
              slug: post.node.slug,
              id: post.node.id
            }
          });
        });
      })
    );
  });
};
