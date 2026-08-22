import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { site } from "@/config/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const empty = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [sending, setSending] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent — I'll get back to you within 24 hours.");
      setForm(empty);
    } catch (err) {
      toast.error(err.response?.data?.detail || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    "w-full bg-transparent border border-zinc-800 px-4 py-3 font-mono text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-primary transition-colors duration-300 rounded-none";

  return (
    <section id="contact" className="border-t border-zinc-800" data-testid="contact-section">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-b lg:border-b-0 lg:border-r border-zinc-800">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-display font-black tracking-tighter leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-zinc-100"
            data-testid="contact-heading"
          >
            LET'S<br />
            <span className="text-primary">BUILD.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-10 space-y-3 font-mono text-sm text-zinc-400"
          >
            <p data-testid="contact-email">{site.email}</p>
            <p>{site.location}</p>
          </motion.div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="px-6 md:px-12 lg:px-24 py-24 md:py-32 space-y-6"
          data-testid="contact-form"
        >
          <div>
            <label htmlFor="contact-name" className="block font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 mb-3">
              Full Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={form.name}
              onChange={set("name")}
              placeholder="Jane Cooper"
              className={inputCls}
              data-testid="contact-name-input"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 mb-3">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={form.email}
              onChange={set("email")}
              placeholder="jane@company.com"
              className={inputCls}
              data-testid="contact-email-input"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 mb-3">
              What should we automate?
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={form.message}
              onChange={set("message")}
              placeholder="Tell me about the workflow eating your team's time…"
              className={`${inputCls} resize-none`}
              data-testid="contact-message-input"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="group flex items-center gap-3 bg-primary text-primary-foreground font-mono text-sm font-bold tracking-wider uppercase px-8 py-4 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 transition-transform duration-300"
            data-testid="contact-submit-button"
          >
            {sending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
