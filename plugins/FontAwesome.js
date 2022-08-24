/* import the fontawesome core */
import { library, config } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
config.autoAddCss = false;

library.add(fas, fab, far);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-icon", FontAwesomeIcon, {});
});
