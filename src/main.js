import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Notpage from "./pages/Notpage";
import products from "./pages/products";
import { rennder, router } from "./unititis/index.js";
const app = document.querySelector("#app");
console.log(router);
router.on("/", () => rennder(app, Homepage));

router.on("about", () => rennder(app, About));
router.on("products", ()=> rennder(app,products))
router.resolve();

router.notFound(()=> rennder(app,Notpage))