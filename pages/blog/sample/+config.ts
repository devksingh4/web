import vikeReact from "vike-react/config";
import { Config } from "vike/types";

export default {
    title: "Sample Page",
    description: "A sample blog page",
    extends: vikeReact,
    prerender: true,
} satisfies Config;
