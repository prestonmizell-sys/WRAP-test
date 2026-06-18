const stories = [
  {
    headline:
      "ICE blasts Hilton after emails allegedly show hotel refusing rooms to immigration agents",
    excerpt:
      "Federal immigration officials criticized Hilton after alleged emails surfaced about hotel rooms being denied to agents.",
    source: "Fox News",
    url: "https://www.foxnews.com/politics/ice-blasts-hilton-after-emails-allegedly-show-hotel-refusing-rooms-immigration-agents",
    label: "Politics",
  },
  {
    headline:
      "Crane removes Hampton Inn by Hilton sign from Minnesota hotel allegedly denied service to DHS, ICE agents",
    excerpt:
      "A Minnesota hotel removed Hampton Inn branding after allegations that federal agents were refused service at the property.",
    source: "Fox News",
    url: "https://www.foxnews.com/us/crane-removes-hampton-inn-hilton-sign-from-minnesota-hotel-allegedly-denied-service-dhs-ice-agents",
    label: "U.S.",
  },
  {
    headline:
      "Minnesota hotel removed from approved federal lodging list after refusing to accommodate ICE agents",
    excerpt:
      "The property was reportedly taken off a federal lodging list following claims that it declined accommodations for ICE personnel.",
    source: "Fox News",
    url: "https://www.foxnews.com/politics/minnesota-hotel-removed-from-approved-federal-lodging-list-after-refusing-accommodate-ice-agents",
    label: "Politics",
  },
  {
    headline:
      "12 Minneapolis anti-ICE agitators arrested after massive crowd gathers outside Hilton hotel",
    excerpt:
      "Authorities arrested multiple demonstrators after a large anti-ICE crowd gathered outside a Minneapolis-area hotel.",
    source: "Fox News",
    url: "https://www.foxnews.com/us/12-minneapolis-anti-ice-agitators-arrested-after-massive-crowd-gathers-outside-hilton-hotel",
    label: "U.S.",
  },
  {
    headline:
      "15 Antifa radicals indicted, 12 arrested in sweeping federal probe of Minneapolis anti-ICE operations",
    excerpt:
      "Federal prosecutors announced indictments tied to alleged anti-ICE activity in Minneapolis as the investigation widened.",
    source: "Fox News",
    url: "https://www.foxnews.com/politics/15-antifa-radicals-indicted-12-arrested-sweeping-federal-probe-minneapolis-anti-ice-operations",
    label: "Politics",
  },
  {
    headline: "Live updates: Minneapolis ICE shooting",
    excerpt:
      "Follow continuing live coverage and updates connected to the Minneapolis ICE shooting story.",
    source: "Fox News Live",
    url: "https://www.foxnews.com/live-news/minneapolis-ice-shooting-1-8-2026",
    label: "Live News",
  },
];

const videos = [
  {
    headline: "Fox Business video report on the Minnesota hotel controversy",
    excerpt:
      "Business coverage examines the fallout from the hotel dispute involving federal immigration agents.",
    source: "Fox Business Video",
    url: "https://www.foxbusiness.com/video/6387322658112",
    duration: "Video",
  },
  {
    headline: "Fox News video: Federal response to hotel room allegations",
    excerpt:
      "A Fox News segment highlights official reaction and the latest details in the developing story.",
    source: "Fox News Video",
    url: "https://www.foxnews.com/video/6387296449112",
    duration: "Video",
  },
  {
    headline: "Fox News video: Minneapolis protests and arrests",
    excerpt:
      "Watch coverage of the protest activity and arrests connected to anti-ICE demonstrations.",
    source: "Fox News Video",
    url: "https://www.foxnews.com/video/6388878193112",
    duration: "Video",
  },
  {
    headline: "Fox News video: Analysis of ICE operations in Minnesota",
    excerpt:
      "An analysis segment reviews the broader federal operations and public-safety response.",
    source: "Fox News Video",
    url: "https://www.foxnews.com/video/6387359083112",
    duration: "Video",
  },
];

function uniqueByUrl(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (seen.has(item.url)) {
      return false;
    }

    seen.add(item.url);
    return true;
  });
}

function createExternalLink({ className, headline, source, url }) {
  const link = document.createElement("a");
  link.className = className;
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `${headline} - opens ${source} in a new tab`);
  return link;
}

function createThumbnail({ text, modifierClass = "" }) {
  const thumbnail = document.createElement("div");
  thumbnail.className = `thumbnail ${modifierClass}`.trim();
  thumbnail.setAttribute("aria-hidden", "true");

  const badge = document.createElement("span");
  badge.textContent = text;
  thumbnail.appendChild(badge);

  return thumbnail;
}

function renderStories() {
  const list = document.querySelector("#story-list");
  const uniqueStories = uniqueByUrl(stories);

  uniqueStories.forEach((story, index) => {
    const article = document.createElement("article");
    article.className = index === 0 ? "story-card story-card-featured" : "story-card";

    const link = createExternalLink({
      className: "story-link",
      headline: story.headline,
      source: story.source,
      url: story.url,
    });

    link.appendChild(createThumbnail({ text: story.label }));

    const body = document.createElement("div");
    body.className = "card-body";

    const label = document.createElement("p");
    label.className = "card-label";
    label.textContent = story.label;

    const heading = document.createElement(index === 0 ? "h3" : "h4");
    heading.className = "card-title";
    heading.textContent = story.headline;

    const excerpt = document.createElement("p");
    excerpt.className = "card-excerpt";
    excerpt.textContent = story.excerpt;

    const source = document.createElement("p");
    source.className = "card-source";
    source.textContent = story.source;

    body.append(label, heading, excerpt, source);
    link.appendChild(body);
    article.appendChild(link);
    list.appendChild(article);
  });
}

function renderVideos() {
  const list = document.querySelector("#video-list");
  const uniqueVideos = uniqueByUrl(videos);

  uniqueVideos.forEach((video) => {
    const article = document.createElement("article");
    article.className = "video-card";

    const link = createExternalLink({
      className: "video-link",
      headline: video.headline,
      source: video.source,
      url: video.url,
    });

    const media = document.createElement("div");
    media.className = "video-media";
    media.appendChild(createThumbnail({ text: video.duration, modifierClass: "thumbnail-video" }));

    const play = document.createElement("span");
    play.className = "play-indicator";
    play.setAttribute("aria-hidden", "true");
    play.textContent = "Play";
    media.appendChild(play);

    const body = document.createElement("div");
    body.className = "video-body";

    const heading = document.createElement("h3");
    heading.className = "video-title";
    heading.textContent = video.headline;

    const excerpt = document.createElement("p");
    excerpt.className = "video-excerpt";
    excerpt.textContent = video.excerpt;

    const source = document.createElement("p");
    source.className = "video-source";
    source.textContent = video.source;

    body.append(heading, excerpt, source);
    link.append(media, body);
    article.appendChild(link);
    list.appendChild(article);
  });
}

renderStories();
renderVideos();
