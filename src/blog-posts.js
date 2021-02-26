export const getPosts = () => {
  return [
    {
      title: "Hello World!",
      slug: "merhaba",
      details: require("./posts/merhaba.md").default,
      date: "26 Şubat 2021"
    },
    {
      title: "React ve NextJS Blogu",
      slug: "lorem",
      details: require("./posts/lorem.md").default,
      date: "26 Şubat 2021"
    },
  ];
};
