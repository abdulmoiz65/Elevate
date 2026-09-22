import { useId, useState } from "react";
import Button from "../ui/Button";
import { contact } from "../../data/content";

const EMPTY = { name: "", email: "", role: "", message: "" };

/**
 * Enquiry form. There is no backend yet, so submitting validates through the
 * browser and then shows a confirmation; swap the body of handleSubmit for a
 * fetch() (or a form service) when an endpoint exists.
 */
export default function ContactForm() {
  const id = useId();
  const [values, setValues] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setValues(EMPTY);
    setSubmitted(true);
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border-0 bg-ink-50 px-4 py-3 text-base text-ink-900 ring-1 ring-ink-200 transition-shadow placeholder:text-ink-400 focus:ring-2 focus:ring-brand-600 focus:outline-none";
  const labelClass = "block text-sm font-medium text-ink-800";

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby={`${id}-form-heading`}
      className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-ink-200 sm:p-8"
    >
      <h3 id={`${id}-form-heading`} className="text-lg font-semibold text-ink-900">
        Send us a message
      </h3>

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor={`${id}-name`} className={labelClass}>
            Name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor={`${id}-email`} className={labelClass}>
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor={`${id}-role`} className={labelClass}>
            I am a&hellip;
          </label>
          <select
            id={`${id}-role`}
            name="role"
            required
            value={values.role}
            onChange={handleChange}
            className={fieldClass}
          >
            <option value="" disabled>
              Select one
            </option>
            {contact.roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={`${id}-message`} className={labelClass}>
            Message
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={5}
            required
            value={values.message}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-7 w-full">
        Send message
      </Button>

      {/* Announced to screen readers when it appears. */}
      <p role="status" aria-live="polite" className="sr-only">
        {submitted ? "Your message has been recorded." : ""}
      </p>

      {submitted && (
        <p className="mt-4 rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-700">
          Thank you &mdash; your message has been recorded. Connect a form service or API
          endpoint to deliver it.
        </p>
      )}
    </form>
  );
}
