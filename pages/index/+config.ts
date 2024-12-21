import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../../layouts/LayoutDefault.js";
import { portfolio } from "../../data.js";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: portfolio.name,
  description: portfolio.blurb,
  image: portfolio.picture,
  extends: vikeReact,
} satisfies Config;
