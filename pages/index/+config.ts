import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import { portfolio } from "../../data";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  title: portfolio.name,
  description: portfolio.blurb,
  extends: vikeReact,
  prerender: true,
} satisfies Config;
