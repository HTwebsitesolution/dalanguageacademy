/**
 * Mapping for photos sorted from public/photos/ (batch 1: first 7 files).
 * Originals are kept in public/photos/ for reference.
 */
export const photoInventoryBatch1 = [
  {
    source: "DA_Language_Academy0001.jpg",
    destination: "images/academy/academy-students-discussion-01.jpg",
    summary:
      "Adults at a yellow table, focused group discussion with notebooks and phones — strong learner engagement shot.",
  },
  {
    source: "DA_Language_Academy0002.jpg",
    destination: "images/organisations/organisation-training-01.jpg",
    summary:
      "Professional training with IRC (International Rescue Committee) banner visible — NGO/organisation delivery.",
  },
  {
    source: "DA_Language_Academy0003.jpg",
    destination: "images/academy/academy-training-session-01.jpg",
    summary:
      "Presenter leading a workshop; green table, laptops, and projector — formal training session.",
  },
  {
    source: "DA_Language_Academy0004.jpg",
    destination: "images/organisations/organisation-training-02.jpg",
    summary:
      "Small-group session with programme banner (ATWA) — organisation/programme partner context.",
  },
  {
    source: "DA_Language_Academy0005.jpg",
    destination: "images/about/director-profile-01.jpg",
    summary:
      "Professional man in blazer with lanyard at a training table — suitable director/facilitator profile.",
  },
  {
    source: "DA_Language_Academy001.jpg",
    destination: "images/academy/academy-classroom-01.jpg",
    summary:
      "Instructors at whiteboard with English vocabulary; projector and students — core classroom teaching.",
  },
  {
    source: "DA_Language_Academy002.jpg",
    destination: "images/programmes/academy-training-session-01.jpg",
    summary:
      "Students seated in classroom, attentive during a session — programme delivery from the learner view.",
  },
] as const;

/** Batch 2: next 3 files (003–005) */
export const photoInventoryBatch2 = [
  {
    source: "DA_Language_Academy003.jpg",
    destination: "images/academy/academy-classroom-02.jpg",
    summary:
      "Two instructors with microphones at the whiteboard; projected lesson steps and vocabulary notes.",
  },
  {
    source: "DA_Language_Academy004.jpg",
    destination: "images/academy/academy-students-discussion-02.jpg",
    summary:
      "Students in purple academy shirts in peer discussion during a classroom session.",
  },
  {
    source: "DA_Language_Academy005.jpg",
    destination: "images/academy/academy-training-session-02.jpg",
    summary:
      "Instructor teaching from the whiteboard with greetings and introduction vocabulary visible.",
  },
] as const;

/** Batch 3: next 4 files (006–009) */
export const photoInventoryBatch3 = [
  {
    source: "DA_Language_Academy006.jpg",
    destination: "images/uk-coaching/uk-online-session-01.jpg",
    summary:
      "Instructor leading a session with English reading content on a wall screen — fits online/hybrid coaching.",
  },
  {
    source: "DA_Language_Academy007.jpg",
    destination: "images/academy/academy-students-discussion-03.jpg",
    summary:
      "Attentive adult learners at yellow tables during a group session.",
  },
  {
    source: "DA_Language_Academy008.jpg",
    destination: "images/uk-coaching/uk-online-session-02.jpg",
    summary:
      "Training table with conference speakerphone and camera — hybrid/online discussion setup.",
  },
  {
    source: "DA_Language_Academy009.jpg",
    destination: "images/organisations/organisation-training-03.jpg",
    summary:
      "IRC (International Rescue Committee) workshop with visible partner poster in background.",
  },
] as const;

/** Batch 4: next 4 files (01–04) */
export const photoInventoryBatch4 = [
  {
    source: "DA_Language_Academy01.jpg",
    destination: "images/testimonials/testimonial-learner-01.jpg",
    summary:
      "Professional adult learner at a session — suitable for a future learner quote or trust block.",
  },
  {
    source: "DA_Language_Academy02.jpg",
    destination: "images/organisations/organisation-training-04.jpg",
    summary:
      "Organisation workshop with community/partner posters on the wall; yellow-table setup.",
  },
  {
    source: "DA_Language_Academy03.jpg",
    destination: "images/programmes/academy-training-session-02.jpg",
    summary:
      "Participants at a yellow-table training session with laptop and materials.",
  },
  {
    source: "DA_Language_Academy04.jpg",
    destination: "images/academy/academy-students-discussion-04.jpg",
    summary:
      "Adult learners in a hybrid-style group session with conferencing equipment on the table.",
  },
] as const;

/** Batch 5: final 5 files (05–09) */
export const photoInventoryBatch5 = [
  {
    source: "DA_Language_Academy05.jpg",
    destination: "images/academy/academy-classroom-03.jpg",
    summary:
      "Full classroom with teacher at the whiteboard and students in purple uniforms — strong scale/trust shot.",
  },
  {
    source: "DA_Language_Academy06.jpg",
    destination: "images/uk-coaching/uk-coaching-british-council-01.jpg",
    summary:
      "Presenter in front of British Council branding on screen — strong UK/international coaching link.",
  },
  {
    source: "DA_Language_Academy07.jpg",
    destination: "images/programmes/academy-training-session-03.jpg",
    summary:
      "Wide classroom view showing programme delivery at scale (similar angle to 05, learner-focused).",
  },
  {
    source: "DA_Language_Academy08.jpg",
    destination: "images/organisations/organisation-training-05.jpg",
    summary:
      "Facilitator presenting with partner banner visible — organisation/partner session context.",
  },
  {
    source: "DA_Language_Academy09.jpg",
    destination: "images/academy/academy-classroom-04.jpg",
    summary:
      "Dual-instructor English lesson with microphones and vocabulary on the whiteboard.",
  },
] as const;

/** All 23 source photos are now mapped. contact-location-01.jpg still needs a dedicated exterior shot. */
export const photoSortComplete = true;
