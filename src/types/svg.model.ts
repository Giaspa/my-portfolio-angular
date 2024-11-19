const SVG_LIST = {
  angular: "angular.svg",
  figma: "figma.svg",
  firebase: "firebase.svg",
  java: "java.svg",
  javascript: "js.svg",
  miro: "miro.svg",
  mongodb: "mongodb.svg",
  next: "nextjs.svg",
  prisma: "prisma.svg",
  react: "react.svg",
  redux: "redux.svg",
  sass: "sass.svg",
  sonarcloud: "sonarcloud.svg",
  spring: "spring.svg",
  mysql: "sql.svg",
  supabase: "supabase.svg",
  svelte: "svelte.svg",
  tailwind: "tailwind.svg",
  typescript: "ts.svg",
  vite: "vite.svg",
  vue: "vue.svg",
}

const SVG_DIRECTORY_PATH: string = "assets/svg/";

export const SVG_MAP = Object.fromEntries(
  Object.entries(SVG_LIST)
    .map(obj => {
      return [
        obj[0],
        `${SVG_DIRECTORY_PATH}${obj[1]}`
      ]
    })
)
