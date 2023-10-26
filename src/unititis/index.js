import Navigo from "navigo"; // When using ES modules.
const router = new Navigo("/", { linksSelector: "a", hash: true });
const rennder = (app, page) => {
  app.innerHTML = page();
};
export { rennder, router };
