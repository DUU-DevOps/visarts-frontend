// MyContext.tsx
"use client";
import { createContext } from 'react';

interface ContactMethod {
  name: string;
  icon: {
    url: string;
    title: string;
  };
  url: string;
  buttonTitle: string;
  clickCopy: boolean;
}

interface GetInvolved {
  message: string;
  image: {
    url: string;
    title: string;
  };
  contactLinks: ContactMethod[];
}

interface ArtistSpotlight {
  text: string;
  image: {
    url: string;
    title: string;
  };
}

interface BrownGallery {
  text: string;
  link: string;
  image: {
    url: string;
    title: string;
  };
  backgroundImage: {
    url: string;
    title: string;
  };
}

interface Events {
  text: string;
  link: string;
}

interface HomepageInfo {
  landingTitle: string;
  landingText: string;
  visartsIcon: {
    url: string;
    title: string;
  };
  landingImage: {
    url: string;
    title: string;
  };
  spotlightText: string;
  getInvolvedText: string;
  brownGalleryText: string;
  figureDrawingText: string;
  eventsText: string;
  getInvolvedImage: {
    url: string;
    title: string;
  };
  brownGalleryImage: {
    url: string;
    title: string;
  };
  figureDrawingImage: {
    url: string;
    title: string;
  };
}

interface MeetUs {
  text: string;
  image: {
    url: string;
    title: string;
  };
}

interface SiteSettings {
  title: string;
  email: string;
  socialLinks: {
    type: string;
    url: string;
  }[];
  homepageInfo: HomepageInfo;
  meetUs: MeetUs;
  brownGallery: BrownGallery;
  artistSpotlight: ArtistSpotlight;
  events: Events;
  getInvolved: GetInvolved;
}

const Context = createContext<SiteSettings>({
    title: "",
    email: "",
    socialLinks: [],
    homepageInfo: {
        landingTitle: "",
        landingText: "",
        visartsIcon: { url: "", title: "" },
        landingImage: { url: "", title: "" },
        spotlightText: "",
        getInvolvedText: "",
        brownGalleryText: "",
        figureDrawingText: "",
        eventsText: "",
        getInvolvedImage: { url: "", title: "" },
        brownGalleryImage: { url: "", title: "" },
        figureDrawingImage: { url: "", title: "" },
    },
    meetUs: {
        text: "",
        image: { url: "", title: "" },
    },
    brownGallery: {
        text: "",
        link: "",
        image: { url: "", title: "" },
        backgroundImage: { url: "", title: "" },
    },
    artistSpotlight: {
        text: "",
        image: { url: "", title: "" },
    },
    events: {
        text: "",
        link: "",
    },
    getInvolved: {
        message: "",
        image: { url: "", title: "" },
        contactLinks: [],
    },
});

export default Context;