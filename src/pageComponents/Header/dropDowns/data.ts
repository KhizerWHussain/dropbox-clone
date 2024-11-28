// import { IconType } from "react-icons";

export type productDropDownArrayType = {
  id: number;
  title: string;
  desc: string;
  image: string;
};

export const productDropDownArray: productDropDownArrayType[] = [
  {
    id: 1,
    title: "Dropbox",
    desc: "Store, share and access file across devices",
    image:
      "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/Dropbox-logo-nav.svg?id=d587e174-e284-42e8-a18c-85c0d8e57e9e",
  },
  {
    id: 2,
    title: "Dash",
    desc: "Find, organize and protect company content",
    image:
      "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/dash-logo-nav.svg?id=0eaff5fa-ffc5-41dd-bba1-4f05c5e32205",
  },
  {
    id: 3,
    title: "Replay",
    desc: "Review and approve videos faster",
    image:
      "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/replay-logo-nav.svg?id=411f20bf-600b-42f8-a5a5-508c48fc55f7",
  },
  {
    id: 4,
    title: "DocSend",
    desc: "Send documents securely and track activity",
    image:
      "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/DocSend-logo-nav.svg?id=27f665ce-74c5-4746-8b8c-61cd9e34aadd",
  },
  {
    id: 5,
    title: "Backup",
    desc: "Automatically backup your devices",
    image:
      "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/Backup-logo-nav.svg?id=88a257c5-602b-48c0-bf49-e65aa2df21dd",
  },
  {
    id: 6,
    title: "Sign",
    desc: "Request and add signatures to documents",
    image:
      "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/dropbox-sign-logo.svg?id=f9aee885-ea7b-4b1f-81fd-3e908dadc578",
  },
  {
    id: 7,
    title: "Reclaim.ai",
    desc: "Schedule habits, tasks and meetings with AI",
    image:
      "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/reclaim-dbx-waffle-32x32.svg?id=48ed6a4b-91be-43f0-a91e-0868a4380db7",
  },
  {
    id: 8,
    title: "Early access",
    desc: "Preview new product experiences",
    image:
      "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/arrow_right-coconut.svg?id=b0a856e7-d536-491b-a084-e235051e782f",
  },
];

export type solutionsDropDownArrayType = {
  id: number;
  title: string;
  data: string[];
};

export const solutionsDropDownArray: solutionsDropDownArrayType[] = [
  {
    id: 1,
    title: "Teams",
    data: ["Sales", "Marketing", "HR", "IT", "Creatives"],
  },
  {
    id: 2,
    title: "Use cases",
    data: [
      "Cloud storage",
      "Video review",
      "Signining documents",
      "Sharing files",
    ],
  },
  {
    id: 3,
    title: "Industries",
    data: [
      "Construction",
      "Technology",
      "Manufacturing",
      "Media",
      "Professional services",
      "Education",
    ],
  },
];
