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
} as const;

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
        context: "Learner environment",
        role: "Professional and university learners",
        image: {
          src: mediaAssets.testimonials.learnerPortrait,
          alt: "Adult learner participating in an English session at D.A Language Academy",
        },
        placeholderNote:
          "A learner quote can be added here when approved. The photo shows the type of serious adult learner the academy supports.",
      },
      {
        context: "Organisation delivery",
        role: "NGO and institutional workshops",
        image: {
          src: mediaAssets.organisations.training,
          alt: "Organisation training workshop delivered with D.A Language Academy in Niamey",
        },
        placeholderNote:
          "A partner or institutional reference can be added here when available.",
      },
    ],
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
    proof: {
      context: "Institutional training context",
      role: "NGO and partner workshops",
      image: {
        src: mediaAssets.organisations.training,
        alt: "IRC organisation workshop during English training with D.A Language Academy",
      },
      placeholderNote:
        "A named institutional testimonial can be added here when approved for publication.",
    },
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
