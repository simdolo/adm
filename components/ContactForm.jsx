"use client"

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Meno je povinné';
    if (!formData.email.trim()) newErrors.email = 'Email je povinný';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Neplatný email';

    if (!formData.subject.trim()) newErrors.subject = 'Predmet je povinný';
    if (!formData.message.trim()) newErrors.message = 'Správa je povinná';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length) return setErrors(newErrors);

    setIsSubmitting(true);
    setTimeout(() => {
      setStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setStatus(null), 4000);
    }, 1000);
  };

  const contactInfo = [
    { icon: <Mail size={20} />, value: 'posta@adm.sk (kancelária)' },
    { icon: <Mail size={20} />, value: 'obchod@adm.sk (obchod)' },
    { icon: <Phone size={20} />, value: '+421 41 5005 228' },
    { icon: <Phone size={20} />, value: '+421 903 702 704' },
    { icon: <MapPin size={20} />, value: 'Pri Celulózke 29, 010 01 Žilina' },
  ];

  return (
    <div className="font-sans bg-white">

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-4 pb-14 pt-30" id="contact">
        <h2 className="text-4xl font-extrabold text-sky-900 text-center mb-10">
          Často kladené otázky
        </h2>

        <div className="space-y-4">
          {[
            {
              q: 'Ako dlho trvá kalibrácia?',
              a: '3–5 pracovných dní podľa typu zariadenia.',
            },
            {
              q: 'Robíte servis aj u zákazníka?',
              a: 'Áno, podľa dohody vieme zabezpečiť výjazd.',
            },
            {
              q: 'Kedy ste dostupní?',
              a: 'Po–Pi 9:00 – 15:00',
            },
          ].map((f, i) => (
            <div key={i} className="border rounded-lg p-4">
              <h3 className="font-bold text-sky-900">{f.q}</h3>
              <p className="text-gray-600 text-sm mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAP + CONTACT */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* MAPA */}
          <div className="h-full min-h-130 rounded-xl overflow-hidden border border-sky-200 shadow-sm">
            <iframe
              title="mapa"
              className="w-full h-full"
              src="https://www.google.com/maps?q=Pri%20Celul%C3%B3zke%2029%20%C5%BDilina&output=embed"
            />
          </div>

          {/* KONTAKT */}
          <div className="h-full flex flex-col justify-between rounded-xl border border-sky-200 p-6 bg-linear-to-b from-sky-50 to-white">

            {/* INFO */}
            <div className="space-y-3 mb-6">
              <h3 className="text-2xl font-bold text-sky-900 mb-3">
                Kontakt
              </h3>

              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                  <span className="text-sky-600">{c.icon}</span>
                  {c.value}
                </div>
              ))}

              <div className="pt-3 text-sm text-gray-600">
                <p className="font-semibold text-sky-900">Otváracie hodiny</p>
                <p>Pondelok – Piatok: 9:00 – 15:00</p>
                <p>Sobota – Nedeľa: Zatvorené</p>
              </div>
            </div>

            {/* FORM */}
            {status === 'success' && (
              <div className="flex items-center gap-2 bg-green-50 border border-green-300 text-green-700 p-3 rounded mb-4">
                <CheckCircle size={18} />
                Správa odoslaná
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 text-gray-600">

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Meno"
                className="w-full p-2 border rounded-md text-sm"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 border rounded-md text-sm"
              />

              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Predmet"
                className="w-full p-2 border rounded-md text-sm"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Správa"
                rows={3}
                className="w-full p-2 border rounded-md text-sm"
              />

              <button
                disabled={isSubmitting}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-md text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Odoslať
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactForm;