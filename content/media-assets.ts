import type { Locale } from "@/lib/i18n/config";
import { pageMediaFr } from "@/content/page-media.fr";

/**
 * Strategic image paths for D.A Language Academy.
 * Rule: images should strengthen trust, not decorate the site.
 */
export const mediaAssets = {
  logo: {
    full: "/images/logo/da-logo-full.png",
    fullTransparent: "/images/logo/da-logo-transparent.png",
    mark: "/images/logo/da-logo-mark.png",
    footer: "/images/logo/da-logo-footer.png",
  },
  academy: {
    classroom: "/images/academy/academy-classroom-01.jpg",
    classroomWide: "/images/academy/academy-classroom-03.jpg",
    classroomSession: "/images/academy/academy-classroom-04.jpg",
    trainingSession: "/images/academy/academy-training-session-01.jpg",
    studentsDiscussion: "/images/academy/academy-students-discussion-01.jpg",
    studentsGroup: "/images/academy/academy-students-discussion-02.jpg",
  },
  programmes: {
    trainingSession: "/images/programmes/academy-training-session-01.jpg",
    trainingWide: "/images/programmes/academy-training-session-03.jpg",
  },
  ukCoaching: {
    onlineSession: "/images/uk-coaching/uk-online-session-01.jpg",
    hybridSession: "/images/uk-coaching/uk-online-session-02.jpg",
    britishCouncil: "/images/uk-coaching/uk-coaching-british-council-01.jpg",
  },
  organisations: {
    training: "/images/organisations/organisation-training-01.jpg",
    workshop: "/images/organisations/organisation-training-02.jpg",
  },
  about: {
    directorProfile: "/images/about/director-profile-01.jpg",
  },
  testimonials: {
    learnerPortrait: "/images/testimonials/testimonial-learner-01.jpg",
  },
  videos: {
    hanifaGraduate: "/videos/testimonials/hanifa-graduate.mp4",
    ngoSaveTheChildren: "/videos/testimonials/ngo-save-the-children.mp4",
    ngoRefugee: "/videos/testimonials/ngo-refugee.mp4",
  },
} as const;

export type TestimonialVideo = {
  src: string;
  poster?: string;
  label: string;
};

export type TestimonialContent = {
  context: string;
  role: string;
  description?: string;
  image?: MediaImage;
  video?: TestimonialVideo;
};

export type MediaImage = {
  src: string;
  alt: string;
};

export type MediaFeatureContent = {
  eyebrow: string;
  title: string;
  description: string;
  note?: string;
  image?: MediaImage;
  images?: readonly MediaImage[];
  priority?: boolean;
  reverse?: boolean;
};

export const pageMedia = {
  home: {
    academy: {
      eyebrow: "Inside the academy",
      title: "Real classrooms, real discussion, and structured English progress.",
      description:
        "Learners train in active classroom environments with guided speaking, vocabulary work, and practical communication practice in Niamey.",
      note: "These photos show actual academy sessions — not stock imagery.",
      images: [
        {
          src: mediaAssets.academy.classroom,
          alt: "English instructors teaching vocabulary at a whiteboard in a D.A Language Academy classroom in Niamey",
        },
        {
          src: mediaAssets.academy.studentsDiscussion,
          alt: "Adult learners in discussion during an English training session at D.A Language Academy",
        },
        {
          src: mediaAssets.academy.classroomWide,
          alt: "Full classroom view of students and teacher during an English programme session in Niamey",
        },
      ],
      priority: true,
    } satisfies MediaFeatureContent,
    testimonials: [
      {
        context: "Hanifa",
        role: "Graduate of D.A Language Academy",
        description:
          "A learner shares her experience after completing the academy programme in Niamey.",
        video: {
          src: mediaAssets.videos.hanifaGraduate,
          poster: mediaAssets.testimonials.learnerPortrait,
          label: "Video testimonial from Hanifa, graduate of D.A Language Academy",
        },
      },
      {
        context: "Save the Children partnership",
        role: "NGO English training delivery",
        description:
          "D.A Language Academy delivering professional English workshops in partnership with Save the Children.",
        video: {
          src: mediaAssets.videos.ngoSaveTheChildren,
          poster: mediaAssets.organisations.training,
          label: "Video of D.A Language Academy partnership training with Save the Children",
        },
      },
    ] satisfies readonly TestimonialContent[],
  },
  programmes: {
    training: {
      eyebrow: "Programme delivery",
      title: "A structured 3-month programme you can picture before you apply.",
      description:
        "Sessions combine classroom teaching, guided practice, and clear progression so learners know what they are committing to.",
      note: "Programme photos focus on teaching quality and learner engagement.",
      image: {
        src: mediaAssets.programmes.trainingSession,
        alt: "Students attending an English programme session at D.A Language Academy in Niamey",
      },
    } satisfies MediaFeatureContent,
  },
  ukCoaching: {
    session: {
      src: mediaAssets.ukCoaching.britishCouncil,
      alt: "UK-linked English coaching session with British Council branding on screen at D.A Language Academy",
    },
    hybrid: {
      src: mediaAssets.ukCoaching.hybridSession,
      alt: "Hybrid English discussion session with conferencing equipment for online coaching support",
    },
  },
  organisations: {
    training: {
      eyebrow: "Organisation training",
      title: "Professional English delivery for NGOs, institutions, and teams.",
      description:
        "D.A Language Academy supports organisation-facing workshops with structured facilitation, practical materials, and clear communication outcomes.",
      note: "Partner and NGO sessions are delivered with the same professional standards as core programmes.",
      image: {
        src: mediaAssets.organisations.workshop,
        alt: "Facilitated English workshop for organisation participants at D.A Language Academy",
      },
      reverse: true,
    } satisfies MediaFeatureContent,
    testimonials: [
      {
        context: "Save the Children partnership",
        role: "NGO programme delivery in Niamey",
        description:
          "Structured English training delivered for Save the Children programme participants.",
        video: {
          src: mediaAssets.videos.ngoSaveTheChildren,
          poster: mediaAssets.organisations.training,
          label: "D.A Language Academy training partnership with Save the Children",
        },
      },
      {
        context: "Refugee programme partnership",
        role: "NGO English support",
        description:
          "Workshop delivery supporting refugee programme participants with practical English communication.",
        video: {
          src: mediaAssets.videos.ngoRefugee,
          poster: mediaAssets.organisations.workshop,
          label: "D.A Language Academy partnership training for refugee programme participants",
        },
      },
    ] satisfies readonly TestimonialContent[],
  },
  about: {
    leadership: {
      eyebrow: "Academy leadership",
      title: "Professional facilitation behind the programme.",
      description:
        "D.A Language Academy is led with a clear focus on practical English communication, structured teaching, and professional standards for adult learners.",
      image: {
        src: mediaAssets.about.directorProfile,
        alt: "D.A Language Academy facilitator leading a professional English training session in Niamey",
      },
      reverse: true,
    } satisfies MediaFeatureContent,
  },
} as const;

export type PageMedia = typeof pageMedia;

export function getPageMedia(locale: Locale): PageMedia {
  return (locale === "fr" ? pageMediaFr : pageMedia) as PageMedia;
}
