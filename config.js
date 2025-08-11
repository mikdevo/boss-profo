window.PROFILE_CONFIG = {
  site: {
    backgroundImage: "./assets/background.png",
    animatedBackground: {
      enabled: true,
      type: "blobs",
      blobs: 5,
      speed: 28
    },
    theme: {
      primary: "#6c5ce7",
      accent: "#00d1ff",
      text: "#f6f7fb",
      muted: "#cfd3e3",
    },
  },
  user: {
    displayName: "Wick",
    avatar: "./assets/avatar.png",
    banner: "./assets/banner.jpg",
    roles: [
      "Gamer",
      "Driver",
    ],
  },
  roles: {
    Gamer: '<i class="fas fa-gamepad"></i>',
    Driver: '<i class="fas fa-car"></i>',
  },
  dynamic: {
    discord: {
      enabled: true,
      userId: "91588766757552128",
      sourcePriority: ["japi", "lanyard"],
      refreshMs: 10000,
      overrideDisplayName: true,
      imageSizes: { avatar: 512, banner: 2048 },
    },
  },
  socials: [
    { name: "Discord", url: "https://discord.com/users/91588766757552128", icon: "discord" },
    { name: "YouTube", url: "https://www.youtube.com/@b0ss682", icon: "youtube" },
    { name: "TikTok", url: "https://www.tiktok.com/@m4ow", icon: "tiktok" },
    { name: "Twitch", url: "https://www.twitch.tv/iqg_b0ss", icon: "twitch" },
    { name: "Kick", url: "https://www.kick.com/iraqcafe", icon: "kick" },
    { name: "Snapchat", url: "https://www.snapchat.com/add/iraqcafe", icon: "snapchat" },
    { name: "Threads", url: "https://www.threads.net/@b0ss.qi", icon: "threads" },
    { name: "Steam", url: "https://steamcommunity.com/profiles/76561198986563152", icon: "steam" },
    { name: "Instagram", url: "https://www.instagram.com/b0ss.qi/", icon: "instagram" },
    { name: "Spotify", url: "https://open.spotify.com/user/BOSS", icon: "spotify" },
  ],
};