import pug from "@vituum/vite-plugin-pug";
import pages from "vituum/plugins/pages.js";

export default {
  plugins: [pages(), pug()],
  build: {
    rollupOptions: {
      input: [
          'src/pages/index.pug.html'
      ]
    }
  }
};
