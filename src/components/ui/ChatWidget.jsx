import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { chatbot, getLabel, getTopic, matchTopic } from "../../data/chatbot";
import Icon from "./Icon";
import ScrollToTop from "./ScrollToTop";

/**
 * The floating chat assistant.
 *
 * Everything it can say lives in src/data/chatbot.js — this component only
 * renders nodes and decides which one to show next. Two ways in:
 *
 *   tapping a chip   -> getTopic(id), always a real node
 *   typing a question -> matchTopic(text), a node or null
 *
 * `null` renders `chatbot.fallback`, which declines and re-offers the menu.
 * There is no third path, so the widget cannot answer anything that is not
 * already written down, and cannot be talked off the subject of Elevate.
 *
 * Mounted once in Layout, outside the routed <main>, so a conversation
 * survives navigating between pages.
 */

const { meta, root, fallback } = chatbot;

/** Long enough to read as a reply being composed, short enough not to annoy. */
const TYPING_MS = 420;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chips, setChips] = useState([]);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState("");

  const panelRef = useRef(null);
  const launcherRef = useRef(null);
  const threadEndRef = useRef(null);
  const inputRef = useRef(null);
  const timerRef = useRef(null);
  const seqRef = useRef(0);
  const restoreFocusRef = useRef(false);

  const nextId = () => {
    seqRef.current += 1;
    return seqRef.current;
  };

  /** Queue a bot node after a short typing pause. */
  const replyWith = useCallback((node) => {
    setChips([]);
    setTyping(true);

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setTyping(false);
      setMessages((current) => [
        ...current,
        {
          key: nextId(),
          from: "bot",
          paragraphs: node.answer,
          bullets: node.bullets,
          footnote: node.footnote,
          link: node.link,
        },
      ]);
      setChips(node.follow ?? root);
    }, TYPING_MS);
  }, []);

  /** Open the conversation: greeting, then the root menu. */
  const startConversation = useCallback(() => {
    setStarted(true);
    setMessages([{ key: nextId(), from: "bot", paragraphs: meta.greeting }]);
    replyWith({ answer: [meta.menuPrompt], follow: root });
  }, [replyWith]);

  const restart = useCallback(() => {
    clearTimeout(timerRef.current);
    setTyping(false);
    setDraft("");
    setMessages([]);
    setChips([]);
    setStarted(false);
  }, []);

  /** A chip tap: echo the node's own question, then answer it. */
  const askTopic = useCallback(
    (id) => {
      const topic = getTopic(id);
      if (!topic) return;

      setMessages((current) => [...current, { key: nextId(), from: "user", text: topic.question }]);
      replyWith(topic);
    },
    [replyWith],
  );

  /** A typed question: match it, or decline. */
  const submitDraft = useCallback(
    (eventObject) => {
      eventObject.preventDefault();
      const text = draft.trim();
      if (!text || typing) return;

      setDraft("");
      setMessages((current) => [...current, { key: nextId(), from: "user", text }]);
      replyWith(matchTopic(text) ?? fallback);
    },
    [draft, replyWith, typing],
  );

  const openPanel = () => setOpen(true);

  /** Close and hand focus back to the launcher, for Escape and the × button. */
  const closePanel = useCallback(() => {
    restoreFocusRef.current = true;
    setOpen(false);
  }, []);

  // Drop any queued reply if the widget unmounts mid-pause.
  useEffect(() => () => clearTimeout(timerRef.current), []);

  // Return focus to the launcher after a deliberate close. Following a link
  // out of the panel does not set the flag, so it leaves focus on the page the
  // reader just navigated to.
  useEffect(() => {
    if (open || !restoreFocusRef.current) return;
    restoreFocusRef.current = false;
    launcherRef.current?.focus();
  }, [open]);

  // Keep the newest message in view. An explicit `behavior` in JS overrides the
  // stylesheet, so the reduced-motion preference has to be read here too.
  useEffect(() => {
    if (!open) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    threadEndRef.current?.scrollIntoView({ block: "end", behavior: prefersReducedMotion ? "instant" : "smooth" });
  }, [messages, chips, typing, open, started]);

  // Escape closes, from anywhere inside the panel.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closePanel();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closePanel]);

  // Move focus into the panel on open: the input once a conversation is
  // running, otherwise the panel itself so the header is read first.
  useEffect(() => {
    if (!open) return;
    if (started) inputRef.current?.focus();
    else panelRef.current?.focus();
  }, [open, started]);

  return (
    <>
      {/* ---- Floating stack ---------------------------------------------
          Back-to-top sits above the chat launcher, and the whole stack is
          hidden while the panel is open so nothing overlaps it. */}
      {!open && (
        <div className="fixed bottom-5 right-5 z-[55] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
          <ScrollToTop />

          <button
            ref={launcherRef}
            type="button"
            onClick={openPanel}
            aria-haspopup="dialog"
            className="btn-motion inline-flex items-center gap-2.5 rounded-full bg-brand-600 py-3.5 pl-5 pr-6 text-base font-semibold text-white shadow-xl hover:bg-brand-700"
          >
            <Icon name="chat" className="h-6 w-6" />
            {meta.launcher}
          </button>
        </div>
      )}

      {/* ---- Panel ------------------------------------------------------ */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label={`${meta.name} assistant`}
          tabIndex={-1}
          // Height is pinned only once a conversation is running, so the
          // thread can scroll under a fixed composer. Before that the panel
          // hugs the start card instead of opening as a tall empty box.
          className={`chat-panel fixed bottom-4 right-4 left-4 z-[55] flex max-h-[calc(100dvh-2rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-ink-900/10 sm:left-auto sm:bottom-6 sm:right-6 sm:w-[24rem] ${
            started ? "h-[calc(100dvh-2rem)] sm:h-[34rem]" : ""
          }`}
        >
          {/* Header */}
          <div className="relative shrink-0 bg-gradient-to-br from-brand-700 via-brand-600 to-ink-900 px-5 pb-12 pt-5 text-white">
            <div className="flex items-start justify-between gap-3">
              <img
                src={meta.logo}
                alt=""
                loading="lazy"
                className="h-10 w-10 shrink-0 rounded-lg bg-white/95 object-contain p-1"
              />
              <div className="flex shrink-0 gap-1">
                {started && (
                  <button
                    type="button"
                    onClick={restart}
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold text-white/85 transition-colors hover:bg-white/15 hover:text-white"
                  >
                    <Icon name="restart" className="h-4 w-4" />
                    {meta.restart}
                  </button>
                )}
                <button
                  type="button"
                  onClick={closePanel}
                  aria-label="Close the chat"
                  className="grid h-8 w-8 place-items-center rounded-full text-white/85 transition-colors hover:bg-white/15 hover:text-white"
                >
                  <Icon name="close" className="h-4 w-4" />
                </button>
              </div>
            </div>

            <p className="mt-3 text-xl font-semibold tracking-tight">{meta.name}</p>
            <p className="text-sm text-halo-100">{meta.subtitle}</p>
          </div>

          {/* Start card. Lifted over the header edge as on the reference
              widget, and deliberately outside any scrolling box so its shadow
              is not clipped and it cannot slide under the header. */}
          {!started ? (
            <div className="-mt-8 px-4 pb-4">
              <div className="rounded-2xl bg-white p-5 shadow-xl ring-1 ring-ink-900/5">
                <p className="text-base font-semibold text-ink-900">{meta.startTitle}</p>
                <p className="mt-1.5 text-sm text-ink-600">{meta.startBody}</p>
                <button
                  type="button"
                  onClick={startConversation}
                  className="btn-motion mt-4 w-full rounded-lg bg-brand-600 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-700"
                >
                  {meta.startCta}
                </button>
                <p className="mt-3.5 text-center text-xs text-ink-400">{meta.note}</p>
              </div>
            </div>
          ) : (
            /* Running thread: the only part that scrolls. */
            <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
              <div className="flex flex-col gap-3 pt-4">
                {messages.map((message) =>
                  message.from === "user" ? (
                    <p
                      key={message.key}
                      className="chat-bubble ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-brand-600 px-3.5 py-2.5 text-sm text-white"
                    >
                      {message.text}
                    </p>
                  ) : (
                    <div
                      key={message.key}
                      className="chat-bubble mr-auto max-w-[92%] rounded-2xl rounded-bl-sm bg-ink-50 px-3.5 py-3 text-sm leading-relaxed text-ink-800 ring-1 ring-ink-900/5"
                    >
                      {message.paragraphs.map((paragraph, index) => (
                        <p key={index} className="mt-2 first:mt-0 text-pretty">
                          {paragraph}
                        </p>
                      ))}

                      {message.bullets && (
                        <ul className="mt-2.5 space-y-1.5">
                          {message.bullets.map((bullet, index) => (
                            <li key={index} className="flex gap-2 text-pretty">
                              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {message.footnote && <p className="mt-2.5 text-xs text-ink-500">{message.footnote}</p>}

                      {message.link && (
                        <Link
                          to={message.link.to}
                          onClick={() => setOpen(false)}
                          className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                        >
                          {message.link.label}
                          <Icon name="arrowRight" className="arrow-shift h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  ),
                )}

                {typing && (
                  <p
                    className="mr-auto flex items-center gap-1 rounded-2xl rounded-bl-sm bg-ink-50 px-4 py-3.5 ring-1 ring-ink-900/5"
                    aria-label="Typing"
                  >
                    <span className="chat-dot h-1.5 w-1.5 rounded-full bg-ink-400" />
                    <span className="chat-dot h-1.5 w-1.5 rounded-full bg-ink-400" />
                    <span className="chat-dot h-1.5 w-1.5 rounded-full bg-ink-400" />
                  </p>
                )}

                {chips.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {chips.map((id) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => askTopic(id)}
                        className="btn-motion rounded-full bg-white px-3 py-1.5 text-left text-xs font-semibold text-brand-700 ring-1 ring-brand-200 hover:bg-brand-50"
                      >
                        {getLabel(id)}
                      </button>
                    ))}
                  </div>
                )}

                {/* Announces new replies without moving focus. */}
                <p aria-live="polite" className="sr-only">
                  {typing ? "Typing" : messages.at(-1)?.paragraphs?.join(" ")}
                </p>

                <div ref={threadEndRef} />
              </div>
            </div>
          )}

          {/* Composer */}
          {started && (
            <form onSubmit={submitDraft} className="shrink-0 border-t border-ink-100 bg-white p-3">
              <div className="flex items-center gap-2">
                <label htmlFor="chat-input" className="sr-only">
                  {meta.inputLabel}
                </label>
                <input
                  id="chat-input"
                  ref={inputRef}
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder={meta.inputPlaceholder}
                  autoComplete="off"
                  className="min-w-0 flex-1 rounded-full bg-ink-50 px-4 py-2.5 text-sm text-ink-900 ring-1 ring-ink-200 outline-none placeholder:text-ink-400 focus:ring-2 focus:ring-brand-500"
                />
                <button
                  type="submit"
                  disabled={!draft.trim() || typing}
                  aria-label="Send question"
                  className="btn-motion grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-600 text-white hover:bg-brand-700 disabled:pointer-events-none disabled:opacity-40"
                >
                  <Icon name="send" className="h-[18px] w-[18px]" />
                </button>
              </div>
              <p className="mt-2 text-center text-[11px] text-ink-400">{meta.note}</p>
            </form>
          )}
        </div>
      )}
    </>
  );
}
