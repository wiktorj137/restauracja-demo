"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "",
  notes: "",
};

const validate = (data: FormData) => {
  const errors: Partial<FormData> = {};
  if (!data.name.trim()) errors.name = "Podaj imię i nazwisko";
  if (!data.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) errors.email = "Podaj poprawny e-mail";
  if (!data.phone.match(/^\+?\d{9,}$/)) errors.phone = "Podaj poprawny numer telefonu";
  if (!data.date) errors.date = "Wybierz datę";
  if (!data.time) errors.time = "Wybierz godzinę";
  if (!data.guests || isNaN(Number(data.guests)) || Number(data.guests) < 1) errors.guests = "Podaj liczbę osób";
  return errors;
};

const times = [
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30", "22:00"
];

export default function ReservationSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm(initialForm);
    }, 1200); // symulacja wysyłki
  };

  return (
    <section id="rezerwacje" className="py-24 bg-white relative">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Zarezerwuj stolik</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Zarezerwuj wyjątkowe doświadczenie kulinarne w naszej restauracji. Wypełnij formularz, a my potwierdzimy Twoją rezerwację.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-100"
          autoComplete="off"
        >
          <div className="flex flex-col gap-4">
            <label className="font-medium text-gray-800">Imię i nazwisko
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`mt-2 w-full rounded-lg border px-4 py-3 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/30 transition ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
                required
              />
              {errors.name && <span id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</span>}
            </label>
            <label className="font-medium text-gray-800">E-mail
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`mt-2 w-full rounded-lg border px-4 py-3 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/30 transition ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
                required
              />
              {errors.email && <span id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</span>}
            </label>
            <label className="font-medium text-gray-800">Telefon
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={`mt-2 w-full rounded-lg border px-4 py-3 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/30 transition ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
                aria-invalid={!!errors.phone}
                aria-describedby="phone-error"
                required
              />
              {errors.phone && <span id="phone-error" className="text-red-500 text-xs mt-1">{errors.phone}</span>}
            </label>
          </div>
          <div className="flex flex-col gap-4">
            <label className="font-medium text-gray-800">Data
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className={`mt-2 w-full rounded-lg border px-4 py-3 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/30 transition ${errors.date ? 'border-red-400' : 'border-gray-200'}`}
                aria-invalid={!!errors.date}
                aria-describedby="date-error"
                required
              />
              {errors.date && <span id="date-error" className="text-red-500 text-xs mt-1">{errors.date}</span>}
            </label>
            <label className="font-medium text-gray-800">Godzina
              <select
                name="time"
                value={form.time}
                onChange={handleChange}
                className={`mt-2 w-full rounded-lg border px-4 py-3 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/30 transition ${errors.time ? 'border-red-400' : 'border-gray-200'}`}
                aria-invalid={!!errors.time}
                aria-describedby="time-error"
                required
              >
                <option value="">Wybierz godzinę</option>
                {times.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              {errors.time && <span id="time-error" className="text-red-500 text-xs mt-1">{errors.time}</span>}
            </label>
            <label className="font-medium text-gray-800">Liczba osób
              <input
                type="number"
                name="guests"
                min={1}
                max={20}
                value={form.guests}
                onChange={handleChange}
                className={`mt-2 w-full rounded-lg border px-4 py-3 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/30 transition ${errors.guests ? 'border-red-400' : 'border-gray-200'}`}
                aria-invalid={!!errors.guests}
                aria-describedby="guests-error"
                required
              />
              {errors.guests && <span id="guests-error" className="text-red-500 text-xs mt-1">{errors.guests}</span>}
            </label>
          </div>
          <div className="md:col-span-2">
            <label className="font-medium text-gray-800">Dodatkowe uwagi
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/30 transition min-h-[60px]"
                rows={3}
                placeholder="np. alergie, preferencje, specjalne okazje..."
              />
            </label>
          </div>
          <div className="md:col-span-2 mt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 rounded-full bg-black text-white font-semibold text-lg shadow-lg hover:bg-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black/30 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2 justify-center">
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="4" className="opacity-25" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M4 12a8 8 0 018-8" /></svg>
                  Wysyłanie...
                </span>
              ) : (
                "Zarezerwuj stolik"
              )}
            </button>
          </div>
          
          {/* Success message */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:col-span-2 mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center"
            >
              <div className="flex items-center justify-center gap-2 text-green-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Rezerwacja wysłana! Skontaktujemy się z potwierdzeniem.</span>
              </div>
            </motion.div>
          )}
        </motion.form>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <div className="mb-2">Godziny otwarcia: <span className="font-medium text-gray-700">Pon-Nd 12:00–22:00</span></div>
          <div className="mb-2">Telefon: <a href="tel:+48123456789" className="text-black hover:underline">+48 123 456 789</a></div>
          <div>Adres: <span className="text-gray-700">ul. Marszałkowska 142, 00-061 Warszawa</span></div>
        </div>
      </div>
    </section>
  );
} 