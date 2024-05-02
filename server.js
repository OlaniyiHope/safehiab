import express from "express";

import matchRoutes from "react-router-config";
import { SitemapStream, streamToPromise } from "sitemap";
import routes from "./src/routes";

const app = express();

app.get("/sitemap.xml", (req, res) => {
  const sitemap = new SitemapStream({
    hostname: "https://www.safehiab.com.ng",
  });

  matchRoutes(routes, req.path).map(({ route }) => {
    sitemap.write({ url: route.path, changefreq: "monthly", priority: 0.7 });
  });

  sitemap.end();
  streamToPromise(sitemap).then((sm) => {
    res.header("Content-Type", "application/xml");
    res.send(sm);
  });
});

app.listen(3000, () => console.log("Server started on port 3000"));
