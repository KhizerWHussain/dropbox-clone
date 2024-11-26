import React from "react";
import GiantText from "../GiantText";
import ContentCollaboration from "../ContentCollobration";
import ContentVideoSection from "../ContentVideoSection";
import { HiOutlineUsers } from "react-icons/hi2";
import DocSend from "../DocSend";
import { PiMonitorPlay } from "react-icons/pi";
import Security from "../Security";
import Industries from "../Industries";
import Discover from "../Discover";

const documentImage =
  "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/features/docsend/docsend-feature-photo.png?id=16ad971c-bbd8-4c11-a10d-7b794636ac79&output_type=png";
const documentVideo =
  "https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/features/docsend/user-interface/webm/docsend-permissioning-ui-1080xauto-en_GB.webm";

const feedBackImage =
  "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/features/replay/The_Luupe_Genya_Oneall.jpg?id=e2669bcf-402f-4d94-bde1-1671ff42b8e7&width=3840&output_type=jpg";
const feedBackVideo =
  "https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/features/replay/user-interface/mov/replay-hero-ui-1080xauto-en_GB.mov";

const Base2 = () => {
  return (
    <>
      <GiantText />

      <ContentCollaboration
        color="#BE4B09"
        btnIcon={<HiOutlineUsers />}
        btnText="Content collaboration"
        title="Work with anyone, from anywhere, on any device"
        desc="Dropbox delivers flexible sharing, smart organisation and seamless
            collaboration – even for those without an account – so you and your
            team can get it done, and done right."
      />
      <ContentVideoSection />

      <ContentCollaboration
        color="#78286E"
        btnIcon={<HiOutlineUsers />}
        btnText="Document analytics"
        title="Instant, actionable insights"
        desc="With Dropbox DocSend, page-by-page analytics and permission controls track file use in real time, so you can see when clients, contractors or collaborators have viewed your content."
      />

      <DocSend imageSource={documentImage} videoSource={documentVideo} />
      <ContentCollaboration
        color="#017891"
        btnIcon={<PiMonitorPlay />}
        btnText="Faster feedback"
        title="Reduce the chaos"
        desc="Dropbox Replay reduces ‌feedback back-and-forth. Collect video, image and audio feedback all in one place, so you can get to final delivery in no time."
      />

      <DocSend imageSource={feedBackImage} videoSource={feedBackVideo} />

      <Security />

      <Industries />

      <Discover />
    </>
  );
};

export default Base2;
