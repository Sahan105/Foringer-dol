import { createStore } from "vuex";
import eventsdetails from "./module/Eventmodule/eventsdetails";
import client from "./module/Homemodule/client";
import navbar from "./module/Homemodule/navbar";
import productbox from "./module/Homemodule/productbox";
import slider from "./module/Homemodule/slider";
import team from "./module/Homemodule/team";
import login from "./module/Loginmodule/login"

export default createStore({
  modules: {
    team,
    slider,
    navbar,
    client,
    productbox,
    eventsdetails,
    login
  },
});
