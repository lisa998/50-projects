import { lazy } from "react";
import { projectName } from "./projectName";

export const handleName = (path) => {
  let str = "";
  path
    .split("-")
    .map((ele) => ele[0].toUpperCase() + ele.slice(1))
    .forEach((ele) => {
      str += ele;
    });
  str += " ";
  return str;
};
const componentSrc = (path) => {
  path = handleName(path);
  return path[0].toLowerCase() + path.slice(1, path.length - 1);
};

export const routes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() => import(`../../projects/home/home`)),
  },
  ...projectName.map((ele) => {
    return {
      name: handleName(ele),
      path: `/${ele}`,
      exact: true,
      text: componentSrc(handleName(ele)),
      component: lazy(() =>
        import(`../../projects/${componentSrc(ele)}/${componentSrc(ele)}`)
      ),
    };
  }),
];
