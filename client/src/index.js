// import components
import Home from "./components/Home.js";
import About from "./components/About.js";
import Settings from "./components/Settings.js";

const Router = async () => {
  const routes = [
    { path: "/", render: Home },
    { path: "/about", render: About },
    { path: "/settings", render: Settings },
  ];

  const activePaths = routes.map((route) => {
    return {
      route,
      isActive: location.pathname === route.path,
    };
  });

  let isActivePath = activePaths.find((p) => p.isActive);

  if (!isActivePath) {
    isActivePath = { route: routes[0], isActive: true };
  }

  const renderComponent = isActivePath.route.render;

  document.querySelector("#root").innerHTML = await renderComponent.getHTML();
};

const Navigator = (url) => {
  history.pushState(null, null, url);
  Router();
};

window.addEventListener("popstate", Router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      Navigator(e.target.href);
    }
  });
  Router();
});
