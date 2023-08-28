const { createWriteStream } = require("fs");
const { SitemapStream } = require("sitemap");

// Creates a sitemap object given the input configuration with URLs
const sitemap = new SitemapStream({ hostname: "http://www.revita-dukla.pl" });

const writeStream = createWriteStream("./public/sitemap.xml");
sitemap.pipe(writeStream);

[
  {
    url: "/",
    changefreq: "weekly",
    priority: 1,
  },
  {
    url: "/#/rehabilitacja-dzieci",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    url: "/#/rehabilitacja-doroslych",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "/#/rehabilitacja-domowa",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "/#/kontakt",
    changefreq: "weekly",
    priority: 0.8,
  },
].forEach((url) => sitemap.write(url));

sitemap.end();
