import { useState } from "react";
import { siteConfig } from "../data/siteConfig";
import { contact, hod, facultyMembers } from "../data/facultyData";
import { courseData } from "../data/courseData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import building from "../assets/hero/building.webp";

// ─────────────────────────────────────────────────────────────
// FAQ Data: strict project facts only (derived from courseData & facultyData)
// ─────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: "What academic programs does the Department offer?",
    a: (
      <>
        The Department offers undergraduate and postgraduate programs:{" "}
        <strong className="text-white">B.Sc. Computer Science</strong> (4 Years, 64 Seats) and{" "}
        <strong className="text-white">M.Sc. Computer Science</strong> (2 Years, 32 Seats). Detailed curriculum and semester outlines can be explored on our{" "}
        <a href="/courses" className="text-amber-400 hover:text-amber-300 underline font-medium">
          Academic Courses
        </a>{" "}
        page.
      </>
    )
  },
  {
    q: "What is the eligibility criteria for B.Sc. Computer Science admission?",
    a: (
      <>
        According to department regulations, candidates must have passed 10+2 (Science) with Mathematics as a core subject and a minimum aggregate score of 50%.
      </>
    )
  },
  {
    q: "What are the eligibility requirements for the M.Sc. Computer Science program?",
    a: (
      <>
        Applicants require a B.Sc. in Computer Science, BCA, B.Tech, or an equivalent undergraduate degree with a minimum of 55% marks.
      </>
    )
  },
  {
    q: "What are the departmental office hours for student queries and visitor assistance?",
    a: (
      <>
        The departmental administrative office is open{" "}
        <strong className="text-white">{contact.officeHours}</strong> at{" "}
        <span className="text-white/80">{contact.officeLocation}</span>.
      </>
    )
  },
  {
    q: "Where can I view current exam schedules, placement alerts, and official notices?",
    a: (
      <>
        All active announcements, timetables, and deadline notices are published directly on our{" "}
        <a href="/notices" className="text-amber-400 hover:text-amber-300 underline font-medium">
          Notice Board
        </a>
        .
      </>
    )
  }
];

function Contact() {
  useDocumentTitle("Contact | CS Department, KAC");

  // Contact values sourced from siteConfig and facultyData (no hardcoding)
  const email = siteConfig.email || contact.departmentEmail || "";
  const address = siteConfig.address || contact.college || "";
  const phone = siteConfig.phone || ""; // Sourced purely from siteConfig; hidden when empty
  const officeHours = contact.officeHours || "";
  const social = siteConfig.social || {};

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Admissions",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);

  // Address copy handler with graceful fallback
  const handleCopyAddress = async () => {
    if (!address) return;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(address);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = address;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  // Form validation & mailto generation
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Build honest mailto link and trigger email client
    const mailtoSubject = `[CS Department Query - ${formData.subject}] from ${formData.name.trim()}`;
    const mailtoBody = `Name: ${formData.name.trim()}
Sender Email: ${formData.email.trim()}
Department Subject: ${formData.subject}

Message:
${formData.message.trim()}
`;

    const mailtoUrl = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
      mailtoSubject
    )}&body=${encodeURIComponent(mailtoBody)}`;

    window.location.href = mailtoUrl;
  };

  // Check if at least one social link is configured
  const hasSocialLinks = Object.values(social).some((url) => Boolean(url && url.trim()));

  return (
    <main className="bg-[#0F172A] min-h-screen text-slate-300 font-sans pb-24">
      {/* ── 1. HERO BANNER ── */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={building}
          alt="Department Building"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          style={{ filter: "brightness(0.25) saturate(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#0F172A]/30" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 text-center mt-12">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            Contact Us
          </h1>
          <div className="mt-8 w-24 h-1 bg-amber-400 mx-auto rounded-full" />
          <p className="mt-8 text-white/80 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
            Get in touch with the Department of Computer Science. We are here to assist prospective students, academic inquiries, and visitors.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-16 lg:space-y-24">
        {/* ── 2. INFO CARDS ROW (1 / 2 / 4 columns, hidden if empty) ── */}
        <section aria-label="Department contact cards">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Address Card */}
            {address && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-white font-serif text-lg font-bold mb-2">Campus Location</h2>
                  <p className="text-white/60 text-sm leading-relaxed">{address}</p>
                  {contact.officeLocation && (
                    <p className="text-amber-400/80 text-xs mt-2 font-medium">{contact.officeLocation}</p>
                  )}
                </div>
              </div>
            )}

            {/* Email Card */}
            {email && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-white font-serif text-lg font-bold mb-2">Email Inquiries</h2>
                  <p className="text-white/60 text-sm leading-relaxed mb-3">Reach our departmental inbox directly:</p>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="text-amber-400 hover:text-amber-300 text-sm font-semibold underline break-all focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
                >
                  {email}
                </a>
              </div>
            )}

            {/* Phone Card (rendered ONLY if phone is non-empty) */}
            {phone ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h2 className="text-white font-serif text-lg font-bold mb-2">Telephone</h2>
                  <p className="text-white/60 text-sm leading-relaxed mb-3">Official administrative contact line:</p>
                </div>
                <a
                  href={`tel:${phone}`}
                  className="text-amber-400 hover:text-amber-300 text-sm font-semibold underline focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
                >
                  {phone}
                </a>
              </div>
            ) : null}

            {/* Office Hours Card */}
            {officeHours && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-white font-serif text-lg font-bold mb-2">Office Hours</h2>
                  <p className="text-white/60 text-sm leading-relaxed">{officeHours}</p>
                </div>
                <p className="text-white/40 text-xs mt-3">Closed on Sundays & Gazetted Holidays</p>
              </div>
            )}
          </div>
        </section>

        {/* ── 3. TWO-COLUMN SECTION (Send Message Form & Find Us) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Message Form */}
          <div className="lg:col-span-7 bg-[#0a1020] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            <h2 className="text-white font-serif text-2xl sm:text-3xl font-bold mb-2">Send Us a Message</h2>
            <p className="text-white/60 text-sm mb-8">
              Fill out your query below to launch your email client pre-addressed to the department.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full bg-white/5 border rounded-xl py-3.5 px-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all ${
                    errors.name ? "border-red-400 focus:ring-red-400/50" : "border-white/10 focus:border-amber-400/60 focus:ring-amber-400/30"
                  }`}
                  placeholder="e.g. Priyabrata Mohapatra"
                />
                {errors.name && (
                  <p id="name-error" className="text-red-400 text-xs mt-1.5 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">
                  Email Address <span className="text-amber-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full bg-white/5 border rounded-xl py-3.5 px-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all ${
                    errors.email ? "border-red-400 focus:ring-red-400/50" : "border-white/10 focus:border-amber-400/60 focus:ring-amber-400/30"
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="text-red-400 text-xs mt-1.5 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject Category */}
              <div>
                <label htmlFor="subject" className="block text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">
                  Subject Category
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-[#0F172A] border border-white/10 rounded-xl py-3.5 px-4 text-white focus:outline-none focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/30 transition-all cursor-pointer"
                >
                  <option value="Admissions">Admissions</option>
                  <option value="Academics">Academics</option>
                  <option value="Examinations">Examinations</option>
                  <option value="Events">Events</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">
                  Message <span className="text-amber-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full bg-white/5 border rounded-xl py-3.5 px-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all resize-y ${
                    errors.message ? "border-red-400 focus:ring-red-400/50" : "border-white/10 focus:border-amber-400/60 focus:ring-amber-400/30"
                  }`}
                  placeholder="Write your inquiry or question here..."
                />
                {errors.message && (
                  <p id="message-error" className="text-red-400 text-xs mt-1.5 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 text-[#0F172A] font-bold text-sm tracking-wider uppercase px-8 py-3.5 rounded-full hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#0a1020]"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Compose Email
                </button>
                <p className="text-white/40 text-xs mt-3 italic">
                  This opens your email app to send the message.
                </p>
              </div>
            </form>
          </div>

          {/* Right: Find Us Card */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 mb-4">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Find Us
              </div>
              <h2 className="text-white font-serif text-2xl font-bold mb-3">Visit the Department</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Located within the historic Kendrapara Autonomous College campus. Visitors and students are welcome during regular working hours.
              </p>

              <div className="bg-[#0a1020] border border-white/10 rounded-2xl p-5 mb-6">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">Postal Address</p>
                <p className="text-white/90 text-sm leading-relaxed font-medium">{address}</p>
              </div>
            </div>

            {/* Directions & Copy Address Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-400 text-[#0F172A] font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-xl hover:bg-amber-300 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Get Directions
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded-xl hover:bg-white/15 transition-colors border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* ── 4. WHO TO CONTACT SECTION ── */}
        <section aria-labelledby="who-to-contact-heading" className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 id="who-to-contact-heading" className="text-white font-serif text-3xl sm:text-4xl font-bold">
              Who to Contact
            </h2>
            <div className="mt-3 w-16 h-1 bg-amber-400 mx-auto rounded-full" />
            <p className="text-white/60 text-sm sm:text-base mt-4">
              Direct contacts for academic leadership and department faculty members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* HOD Card */}
            {hod && (
              <div className="bg-[#0a1020] border-2 border-amber-400/40 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-amber-400 transition-all duration-300">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    {hod.image ? (
                      <img
                        src={hod.image}
                        alt={hod.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-amber-400/40"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-amber-400/10 text-amber-400 font-bold text-lg flex items-center justify-center border border-amber-400/30">
                        HOD
                      </div>
                    )}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                        Department Head
                      </span>
                      <h3 className="text-white font-serif text-lg font-bold mt-1 leading-tight">{hod.name}</h3>
                      <p className="text-white/50 text-xs">{hod.designation}</p>
                    </div>
                  </div>
                  {hod.specialization && (
                    <p className="text-white/60 text-xs leading-relaxed mb-4 line-clamp-2">
                      {hod.specialization}
                    </p>
                  )}
                </div>
                {hod.email && (
                  <a
                    href={`mailto:${hod.email}`}
                    className="text-amber-400 hover:text-amber-300 text-xs font-semibold underline break-all pt-3 border-t border-white/10 flex items-center gap-2 focus:outline-none focus:ring-1 focus:ring-amber-400 rounded"
                  >
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {hod.email}
                  </a>
                )}
              </div>
            )}

            {/* Faculty Members */}
            {facultyMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-white/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover border border-white/10"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-white/10 text-white/80 font-bold text-lg flex items-center justify-center border border-white/10">
                        {member.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h3 className="text-white font-serif text-lg font-bold leading-tight">{member.name}</h3>
                      <p className="text-white/50 text-xs mt-0.5">{member.designation}</p>
                    </div>
                  </div>
                  {member.specialization && (
                    <p className="text-white/60 text-xs leading-relaxed mb-4 line-clamp-2">
                      {member.specialization}
                    </p>
                  )}
                </div>
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="text-amber-400 hover:text-amber-300 text-xs font-semibold underline break-all pt-3 border-t border-white/10 flex items-center gap-2 focus:outline-none focus:ring-1 focus:ring-amber-400 rounded"
                  >
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact via Office
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. FAQ ACCORDION ── */}
        <section aria-labelledby="faq-heading" className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <h2 id="faq-heading" className="text-white font-serif text-3xl sm:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <div className="mt-3 w-16 h-1 bg-amber-400 mx-auto rounded-full" />
            <p className="text-white/60 text-sm mt-4">
              Answers to common inquiries regarding admissions, courses, and department services.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            {FAQ_ITEMS.map((item, idx) => (
              <details
                key={idx}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <summary className="cursor-pointer list-none p-5 sm:p-6 text-white font-semibold text-base sm:text-lg flex items-center justify-between gap-4 hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400/50">
                  <span>{item.q}</span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-open:rotate-180 transition-transform motion-reduce:transform-none">
                    <svg className="w-4 h-4 text-white/60 group-hover:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-6 sm:px-6 text-white/70 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── 6. SOCIAL LINKS ROW (Rendered only if at least one URL is non-empty) ── */}
        {hasSocialLinks && (
          <section aria-label="Social media channels" className="text-center pt-8 border-t border-white/10">
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-6">
              Connect with us on Social Media
            </p>
            <div className="flex items-center justify-center gap-4">
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-amber-400 hover:text-[#0F172A] hover:border-amber-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-amber-400 hover:text-[#0F172A] hover:border-amber-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-amber-400 hover:text-[#0F172A] hover:border-amber-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-amber-400 hover:text-[#0F172A] hover:border-amber-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default Contact;
