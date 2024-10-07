async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  // WPGraphQL Plugin must be enabled
   const res = await fetch('https://ambicon-wp.sadu.at/' + "graphql", { 
    /* const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + "graphql", {   */   

    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}



export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}


export const getPostBySlug = async (slug: string) => {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!) {
      postBy(slug: $slug) {
        id
        title
        excerpt
        slug
        date
        modified
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
            nodes {
                name
            }
        }
        tags {
            nodes {
                name
            }
        }
      }
    }
  `,
    {
      variables: {
        slug,
      },
    },
  );
  return data?.postBy;
};

export async function getAllPosts() {
  const data = await fetchAPI(
    `
        query AllPosts {
            posts(first: 100, where: { orderby: { field: DATE, order: DESC }, }) {
              edges {
                node {
                  id
                  title
                  excerpt
                  slug
                  date
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  categories {
                      nodes {
                          name
                      }
                  }
                  tags {
                      nodes {
                          name
                      }
                  }
                }
              }
            }
          }
  `,
  );

  return data?.posts;
}

export async function getAllPostsForHome() {
  const data = await fetchAPI(
    `
        query AllPosts {
            posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
              edges {
                node {
                  id
                  title
                  excerpt
                  slug
                  date
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  categories {
                      nodes {
                          name
                      }
                  }
                  tags {
                      nodes {
                          name
                      }
                  }
                }
              }
            }
          }
  `,
  );

  return data?.posts;
}

export async function getAllJobs() {
  const data = await fetchAPI(
    `
        query AllJobs {
            jobs(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
              edges {
                node {
                  id
                  title
                  excerpt
                  slug
                  date
                  jobSpecifications {
                    summary
                  }
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  categories {
                      nodes {
                          name
                      }
                  }
                  tags {
                      nodes {
                          name
                      }
                  }
                }
              }
            }
          }
  `,
  );

  return data?.jobs;
}



export const getJobBySlug = async (slug: string) => {
  const data = await fetchAPI(
    `
    query JobBySlug($slug: String!) {
      jobBy(slug: $slug) {
        id
        title
        excerpt
        slug
        date
        modified
        content
        jobSpecifications {
          salary
          validThroug
          employmenttypenew
          salarytypenew
          summary
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
            nodes {
                name
            }
        }
        tags {
            nodes {
                name
            }
        }
      }
    }
  `,
    {
      variables: {
        slug,
      },
    },
  );
  return data?.jobBy;
};

export async function getPostsByCategory(category: string) {
  const data = await fetchAPI(
    `
      query AllPosts {
        posts(first: 100, where: { orderby: { field: DATE, order: DESC }, categoryName: "${category}" }) {
          edges {
            node {
              id
              title
              excerpt
              slug
              date
              featuredImage {
                node {
                  sourceUrl
                }
              }
              categories {
                  nodes {
                      name
                  }
              }
              tags {
                  nodes {
                      name
                  }
              }
            }
          }
        }
      }
    `,
  );
  return data?.posts;
}

export async function getCategories() {
  const data = await fetchAPI(
    `
        query AllCategories {
            categories(first: 100) {
              edges {
                node {
                  id
                  name
                  slug
                }
              }
            }
          }  
  `,
  );

  return data?.categories?.edges;
}
