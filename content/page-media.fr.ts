import type { MediaFeatureContent, TestimonialContent } from "@/content/media-assets";

export const pageMediaFr = {
  home: {
    academy: {
      eyebrow: "Au cœur de l'académie",
      title:
        "De vraies salles de classe, de vraies discussions et une progression structurée en anglais.",
      description:
        "Les apprenants s'entraînent dans des environnements actifs avec expression guidée, travail du vocabulaire et pratique de la communication à Niamey.",
      note: "Ces photos montrent de vraies sessions de l'académie — pas des images de stock.",
      images: [
        {
          src: "/images/academy/academy-classroom-01.jpg",
          alt: "Formateurs en anglais enseignant le vocabulaire au tableau dans une salle de D.A Language Academy à Niamey",
        },
        {
          src: "/images/academy/academy-students-discussion-01.jpg",
          alt: "Apprenants adultes en discussion lors d'une session de formation en anglais à D.A Language Academy",
        },
        {
          src: "/images/academy/academy-classroom-03.jpg",
          alt: "Vue d'ensemble d'une salle avec étudiants et enseignant pendant une session de programme d'anglais à Niamey",
        },
      ],
      priority: true,
    } satisfies MediaFeatureContent,
    testimonials: [
      {
        context: "Hanifa",
        role: "Diplômée de D.A Language Academy",
        description:
          "Une apprenante partage son expérience après avoir terminé le programme de l'académie à Niamey.",
        video: {
          src: "/videos/testimonials/hanifa-graduate.mp4",
          poster: "/images/testimonials/testimonial-learner-01.jpg",
          label: "Témoignage vidéo de Hanifa, diplômée de D.A Language Academy",
        },
      },
      {
        context: "Partenariat Save the Children",
        role: "Formation en anglais pour ONG",
        description:
          "D.A Language Academy anime des ateliers professionnels en anglais en partenariat avec Save the Children.",
        video: {
          src: "/videos/testimonials/ngo-save-the-children.mp4",
          poster: "/images/organisations/organisation-training-01.jpg",
          label: "Vidéo de formation en partenariat entre D.A Language Academy et Save the Children",
        },
      },
    ] satisfies readonly TestimonialContent[],
  },
  programmes: {
    training: {
      eyebrow: "Déroulement du programme",
      title: "Un programme structuré de 3 mois que vous pouvez visualiser avant de vous inscrire.",
      description:
        "Les sessions combinent enseignement en salle, pratique guidée et progression claire pour que les apprenants sachent à quoi ils s'engagent.",
      note: "Les photos du programme mettent l'accent sur la qualité pédagogique et l'engagement des apprenants.",
      image: {
        src: "/images/programmes/academy-training-session-01.jpg",
        alt: "Étudiants participant à une session de programme d'anglais à D.A Language Academy à Niamey",
      },
    } satisfies MediaFeatureContent,
  },
  ukCoaching: {
    session: {
      src: "/images/uk-coaching/uk-coaching-british-council-01.jpg",
      alt: "Session de coaching en anglais liée au Royaume-Uni avec le logo British Council à l'écran à D.A Language Academy",
    },
    hybrid: {
      src: "/images/uk-coaching/uk-online-session-02.jpg",
      alt: "Session hybride de discussion en anglais avec équipement de visioconférence pour le coaching en ligne",
    },
  },
  organisations: {
    training: {
      eyebrow: "Formation pour organisations",
      title: "Formation professionnelle en anglais pour ONG, institutions et équipes.",
      description:
        "D.A Language Academy accompagne les ateliers pour organisations avec une animation structurée, des supports pratiques et des objectifs de communication clairs.",
      note: "Les sessions partenaires et ONG respectent les mêmes standards professionnels que les programmes principaux.",
      image: {
        src: "/images/organisations/organisation-training-02.jpg",
        alt: "Atelier d'anglais animé pour des participants d'organisations à D.A Language Academy",
      },
      reverse: true,
    } satisfies MediaFeatureContent,
    testimonials: [
      {
        context: "Partenariat Save the Children",
        role: "Formation ONG à Niamey",
        description:
          "Formation structurée en anglais pour les participants du programme Save the Children.",
        video: {
          src: "/videos/testimonials/ngo-save-the-children.mp4",
          poster: "/images/organisations/organisation-training-01.jpg",
          label: "Formation en partenariat entre D.A Language Academy et Save the Children",
        },
      },
      {
        context: "Partenariat programme réfugiés",
        role: "Soutien en anglais pour ONG",
        description:
          "Animation d'ateliers pour les participants au programme réfugiés avec une communication pratique en anglais.",
        video: {
          src: "/videos/testimonials/ngo-refugee.mp4",
          poster: "/images/organisations/organisation-training-02.jpg",
          label: "Formation en partenariat de D.A Language Academy pour les participants au programme réfugiés",
        },
      },
    ] satisfies readonly TestimonialContent[],
  },
  about: {
    leadership: {
      eyebrow: "Direction de l'académie",
      title: "Une facilitation professionnelle au service du programme.",
      description:
        "D.A Language Academy est dirigée avec un accent clair sur la communication pratique en anglais, l'enseignement structuré et des standards professionnels pour les apprenants adultes.",
      image: {
        src: "/images/about/director-profile-01.jpg",
        alt: "Facilitateur de D.A Language Academy animant une session professionnelle de formation en anglais à Niamey",
      },
      reverse: true,
    } satisfies MediaFeatureContent,
  },
} as const;
