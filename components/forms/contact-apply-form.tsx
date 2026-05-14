"use client";

import { useState } from "react";

type ContactApplyFormProps = {
  learnerTypes: readonly string[];
  programmeInterests: readonly string[];
  preferredContactMethods: readonly string[];
  submitMessage: string;
  guidanceNote: string;
};

const inputClassName =
  "mt-2 w-full rounded-2xl border border-[color:var(--color-border-strong)] bg-white px-4 py-3 text-sm text-[color:var(--color-slate-900)] outline-none transition focus:border-[color:var(--color-brand-500)] focus:ring-4 focus:ring-[rgba(53,95,170,0.10)]";

export function ContactApplyForm({
  learnerTypes,
  programmeInterests,
  preferredContactMethods,
  submitMessage,
  guidanceNote,
}: ContactApplyFormProps) {
  const [feedbackMessage, setFeedbackMessage] = useState("");

  return (
    <form
      aria-label="Contact and apply form"
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        setFeedbackMessage(submitMessage);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[color:var(--color-slate-700)]">
          Full name
          <input
            className={inputClassName}
            name="fullName"
            type="text"
            required
            autoComplete="name"
          />
        </label>

        <label className="block text-sm font-medium text-[color:var(--color-slate-700)]">
          Phone number
          <input
            className={inputClassName}
            name="phoneNumber"
            type="tel"
            required
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-[color:var(--color-slate-700)]">
        Email address
        <input
          className={inputClassName}
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[color:var(--color-slate-700)]">
          Learner type
          <select className={inputClassName} name="learnerType" required defaultValue="">
            <option value="" disabled>
              Select learner type
            </option>
            {learnerTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-[color:var(--color-slate-700)]">
          Programme interest
          <select
            className={inputClassName}
            name="programmeInterest"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select programme interest
            </option>
            {programmeInterests.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-[color:var(--color-slate-700)]">
        Preferred contact method
        <select
          className={inputClassName}
          name="preferredContactMethod"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select preferred contact method
          </option>
          {preferredContactMethods.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm font-medium text-[color:var(--color-slate-700)]">
        Message / enquiry
        <textarea
          className={`${inputClassName} min-h-36 resize-y`}
          name="message"
          required
        />
      </label>

      <p className="text-sm leading-7 text-[color:var(--color-slate-600)]">
        {guidanceNote}
      </p>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-brand-700)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-brand-800)]"
      >
        Send Enquiry
      </button>

      {feedbackMessage ? (
        <div
          role="status"
          className="rounded-2xl border border-[color:var(--color-brand-200)] bg-[color:var(--color-brand-50)] px-4 py-4 text-sm leading-7 text-[color:var(--color-brand-800)]"
        >
          {feedbackMessage}
        </div>
      ) : null}
    </form>
  );
}
