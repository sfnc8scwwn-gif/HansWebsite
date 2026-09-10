# Hans Kim Portfolio

A simple, static photography website: a home page, a Wildlife Photography
page and a Video Shorts page (both with alternating rows, a "jump to"
guide, and scroll fade-ins — photos on one, playable video on the
other), a Dear Harabuji Documentary page, and an About Me page. The
Home, About Me, and Dear Harabuji pages also fade in as a whole when
you land on them.

No build tools, frameworks, or installs required — it's plain HTML, CSS,
and JavaScript, which makes it a good fit for free hosting on GitHub Pages.

## File structure

```
index.html                          Home page
wildlife.html                       Wildlife Photography
about.html                          About Me
projects/dear-harabuji.html         Dear Harabuji Documentary
projects/video-shorts.html   Video Shorts

css/style.css                       All site styling

js/main.js                          Nav, scroll fade-ins, and the shared
                                     story-list renderer (guide + rows +
                                     photo cross-fade) used by both the
                                     Wildlife and Video Work pages
js/wildlife-data.js                 ← Wildlife photo/story content lives here
js/render-stories.js                Loads wildlife-data.js onto wildlife.html
js/video-data.js                    ← Video Shorts content lives here
js/render-videos.js                 Loads video-data.js onto the video page

images/home-hero.jpg                Home page photo
images/wildlife/                    Wildlife photos
images/projects/                    Dear Harabuji images
images/video/                       Video thumbnails
images/about/                       About Me page portrait
```

Any image still showing "Replace this placeholder" is a placeholder —
swap in your own photo before you publish, keeping the same filename.

## Site structure

The nav is flat — five links, no dropdown: **Home**, **Wildlife
Photography**, **Dear Harabuji Documentary**, **Video Shorts**,
**About Me**. The two project pages still live inside the `projects/` folder
for tidiness, but there's no longer a "Projects" landing page — each is
linked directly from the nav.

## Adding your own content

**Home page:** replace `images/home-hero.jpg` with your own photo, keeping
the same filename — it updates automatically.

**Wildlife Photography:** open `js/wildlife-data.js`. Each entry is one
photo story:

```js
{
  images: ["images/wildlife/story-01.jpg"],
  alt: "A description of the photo, for accessibility",
  meta: "Location, Year",
  title: "Story title",
  text: "The story behind the photograph.",
},
```

To add a new one: drop your photo into `images/wildlife/`, copy one of
these blocks, paste it into the list, and update the fields. It appears
on the page automatically — alternating sides with the entry before it,
added to the "Jump to a story" guide on the left, and fading in as
visitors scroll to it. No HTML editing required.

Photos display in a square frame and are never cropped — a tall or wide
photo just shows in full with a little breathing room on the sides
rather than filling every corner of the square.

**Cross-fading photos:** `images` takes a list, not a single filename.
Give an entry 2–3 photos instead of 1 and they'll cross-fade into each
other automatically, about every 4 seconds, for as long as someone is
looking at that story. Each story starts its cycle at a slightly
different moment, so photos across the page don't all change at once:

```js
images: [
  "images/wildlife/story-01.jpg",
  "images/wildlife/story-01b.jpg",
  "images/wildlife/story-01c.jpg",
],
```

**Video Shorts:** uses the same layout, guide, and left-hand jump-to
menu as Wildlife Photography, but each entry is a real, playable video
rather than a photo. Open `js/video-data.js`:

```js
{
  video: "images/video/my-clip.mp4",
  poster: "images/video/my-clip-poster.jpg",
  title: "Video title",
  meta: "Client or context, Year",
  text: "What the project was and what it involved.",
  url: "",
},
```

To add a new one: drop the video file into `images/video/`, copy an
entry, and fill in the fields. The player is deliberately minimal —
just a thumbnail with a play button and a small mute toggle in the
corner, no scrub bar or timestamp. Nothing autoplays; a visitor
presses play themselves. Pausing partway through just brings the play
button back at that frame, but letting a video play to the end resets
it completely — back to the thumbnail with the play button showing,
exactly as if it had never been played. The frame isn't cropped to a
fixed shape either: it sizes itself to match each video's own aspect
ratio, so a vertical phone clip, a widescreen clip, and a 4:3 clip all
display at their natural shape rather than being forced into the same
box.

`poster` is the thumbnail shown before (and after) playback — add your
own photo here the same way you would for a wildlife photo. Leave it
out and the browser shows the video's own first frame instead. `url`
is optional too: set it to a link (YouTube, Vimeo, wherever) and a
"Watch this video" link appears beneath the description — handy if a
longer cut lives somewhere else.

For the widest browser support, export videos as **.mp4** (H.264 video
+ AAC audio). Files straight off an iPhone (.MOV) or in .M4V often play
fine in Chrome and Safari, but aren't guaranteed in every browser —
converting to .mp4 first (most editors, or QuickTime's own "File →
Export" panel, can do this) is the safe bet before publishing.

Note the paths in `js/video-data.js` start with `../` — that's because
this page lives inside the `projects/` folder, one level down from
`images/`.

## The "Jump to" guide

Both story pages (Wildlife Photography and Video Shorts) have a guide
listing every story or video title. On desktop it's a sidebar on the
left; on mobile it collapses into a small floating button in the
bottom-right corner that stays put as you scroll, so you can jump to
any section from anywhere on the page — tap it to open the list, tap
a title to go there.

Clicking a title scrolls straight to that story and briefly darkens it
so it's easy to spot when it lands, whichever direction the jump goes.
The guide also highlights whichever story is currently in view as you
scroll past it, including snapping to the last one once you reach the
bottom of the page.

**Dear Harabuji Documentary:** this page is written directly in
`projects/dear-harabuji.html` since it's a single, one-off page rather
than a repeating list. It's just a hero photo and text — edit the copy
in the `<div class="project-body">` section and replace the hero image
(`images/projects/dear-harabuji-hero.jpg`). Like the home page, the
hero photo has a slight parallax as you scroll past it.

**About Me:** edit `about.html` directly — replace `images/about/portrait.jpg`
with a photo of yourself and rewrite the bio paragraphs in
`<div class="about-layout__body">`.

**"Related" menu:** in the top right of the nav on every page, "Related"
isn't a link itself — it's a label that opens a small dropdown (on
hover on desktop, on tap on mobile) with a link that currently reads
"Check out my mom's gallery." Open any HTML file, find
`site-nav__related-panel`, and replace the placeholder
`href="https://your-mothers-gallery-website.com"` with the real URL —
you'll need to do this in each HTML file, since the nav is repeated on
every page rather than shared from one file. Add more links inside
that same `<div>` if you want more than one related site listed there.

## Your name and email

A find-and-replace across the HTML files handles these:

- `Hans Kim` / `Hans Kim Portfolio` → your name (as it should read in the
  nav, footer, and page titles)
- `you@example.com` → your email address

There's currently no Instagram link anywhere on the site. To add one back
in, add a list item to `site-footer__links` in each page's footer (and,
if you'd like, to `about-layout__contact` on the About Me page):

```html
<li><a href="https://instagram.com/yourusername" target="_blank" rel="noopener">Instagram</a></li>
```

## Previewing locally

Open `index.html` directly in a browser, or, for the most accurate
preview (some browsers restrict local file access), run a tiny local
server from this folder:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Publishing with GitHub Pages

1. Create a new repository on GitHub (e.g. `your-username.github.io` for a
   root domain, or any name like `photography-site` for a project site).
2. Upload all the files in this folder to that repository, keeping the
   folder structure intact.
3. In the repository, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to "Deploy from a branch,"
   choose the `main` branch and the `/ (root)` folder, then save.
5. GitHub will give you a URL (usually within a minute or two) — that's
   your live site.

Whenever you want to add new photos, edit the relevant file as described
above, commit, and push — GitHub Pages updates automatically within a
minute or so.
