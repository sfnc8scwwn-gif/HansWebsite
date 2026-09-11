// ============================================================
// VIDEO SHORTS — video data
//
// Same layout as the Wildlife Photography page: alternating rows
// with a "Jump to" guide on the left. Each entry plays inline —
// nothing autoplays; a visitor presses play, and can mute/unmute
// with the volume control. The video frame sizes itself to match
// each file's own aspect ratio (vertical phone clips, 4:3, 16:9,
// whatever you give it).
//
// HOW TO ADD A NEW VIDEO:
// 1. Add the video file to /images/video/
// 2. Copy one of the objects below and paste it into the array
// 3. Update video, title, meta, text, and url (an optional link to
//    where a longer cut lives — leave it as "" if there isn't one)
// 4. Save — it appears in the list automatically.
//
// For the widest browser support, export as .mp4 (H.264 video +
// AAC audio). Files straight off an iPhone (.MOV) or in .M4V often
// play fine in Chrome and Safari, but aren't guaranteed everywhere —
// converting to .mp4 first is the safe bet. "poster" is the thumbnail
// shown before someone presses play, and again once the video finishes
// (it resets automatically so it's ready to be played again). Leave it
// out and the browser shows the video's own first frame instead.
// ============================================================

const previousVideos = [
  {
    video: "../images/video/Korea_final 2.MOV",
    poster: "../images/video/Korea_final 2 poster.png",
    title: "Searching For Roots",
    text: "This video was made in spring 2026 and documents my first trip back to Korea since 2016. During this period, I reconnected with family and saw my grandmother, who was very sick at the time. Korea is a beautiful country, and it reminded me how important having roots is to one’s self-identity.",
    url: "",
  },
  {
    video: "../images/video/Hawaii Final 3.MP4",
    poster: "../images/video/Hawaii Final 3 poster.png",
    title: "A Hui Hou",
    text: "My family immigrated to America and settled in Glenview, IL after my father received a scholarship to pursue a master’s degree at McCormick Theological Seminary. One of his classmates and his wife, and now close family friends, lead a church in Honolulu, HI. As my parents caught up with them, my sister and I explored the rich native culture, surfed at Waikiki, and hiked the nature trails around Oahu. We also made frequent pit stops at the various ABC Stores throughout the city. As Hawaii is home to many longstanding Asian American immigrant communities, we were invited by our family friend to celebrate this history at a Korean cultural expo. At this event, I filmed various traditional dances, including Seungmu, featured in this video. Fun fact: All the snorkeling clips of fish at the end were taken with my iPhone inside a waterproof phone pouch.",
    url: "",
  },
  {
    video: "../images/video/Everest with narrator.M4V",
    poster: "../images/video/Everest with narrator.png",
    title: "Expedition Everest",
    text: "Two years after making the “Reach for the Stars” video, Phoebe, who was in charge of planning the 5K at the time, asked if I could make another promotional video for that year’s event. I, of course, said yes, and we put together a fun little sequel to the original Dream Team project.",
    url: "",
  },
  {
    video: "../images/video/Stillwater final.M4V",
    poster: "../images/video/Stillwater final poster.png",
    title: "Stillwater Revival",
    text: "When my friends Ian, Dom, and Cole said they were starting a country-rock band, I told them I would be happy to film a couple of promotional videos. Growing up in the church in the South and attending an SEC college, football, country music, and beer were a natural part of the culture I found myself engaging with. Although much has changed since leaving Florida, memories like singing Tom Petty’s “Won’t Back Down” during the third quarter at Ben Hill Griffin Stadium, spending late nights with friends at the Salty Dog Saloon, and attending concerts by bands such as Stillwater Revival will forever hold a special place in my heart.",
    url: "",
  },
  {
    video: "../images/video/Budapesto.M4V",
    poster: "../images/video/Budapesto poster.png",
    title: "Accross the Danube",
    text: "When Dr. Donnelly, the Director of the University of Florida’s Center for Undergraduate Research, told me {HYPERLINK(https://kimhangil6.wixsite.com/hanskim)she had found funding for me to travel to Spain}, I was ecstatic. During my study abroad, I was able to briefly visit Budapest, Hungary. As I quietly stood by the Shoes on the Danube Bank, the historical weight stirred visceral emotions within me as I learned about the atrocities carried out by the Nazis during the Holocaust at that site. Sitting across the riverbank while recording a time-lapse of the sun setting over the Országház, I reflected on the different ways the actions and legacies of previous generations persist into the present day.",
    url: "",
  },
  {
    video: "../images/video/NC Ashville Vid - HD 720p.MOV",
    poster: "../images/video/NC Ashville Vid - HD 720p poster.png",
    title: "When in Asheville",
    text: "This was one of my earliest attempts at creating nature content. I was inspired by the Echelson brothers at a local surf shop I used to work at in Jacksonville, FL. They not only created incredibly aesthetic nature videos and photos but were also incredibly passionate people. Despite not knowing him for that long, Quinn was a huge inspiration for the photographer I would become and the type of creator I strive to be.",
    url: "",
  },
  {
    video: "../images/video/5k Video Final 2.mov",
    poster: "../images/video/5k Video Final 2.png",
    title: "Reach for the Stars",
    text: "It was by being a part of the Dream Team volunteering organization at the University of Florida that I rediscovered my love for videotography. Using an old camcorder from my parents’ house and a gimbal, I filmed a recap video for Dream Team’s annual 5K fundraiser. Although the video quality wasn’t ideal and my camera fundamentals needed some work, I had a lot of fun with this project. Watching the video and seeing my friends leaves me nostologic for what was an incredibly formative period of my life.",
    url: "",
  },
];
