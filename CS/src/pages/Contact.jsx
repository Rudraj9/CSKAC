import { contact } from '../data/facultyData';

function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 min-h-[60vh]">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Contact the Department</h1>
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 space-y-5 text-slate-700">
        <p><strong>Email: </strong><a className="text-amber-700 underline" href={`mailto:${contact.departmentEmail}`}>{contact.departmentEmail}</a></p>
        <p><strong>Office: </strong>{contact.officeLocation}</p>
        <p>{contact.college}</p>
        <p><strong>Office hours: </strong>{contact.officeHours}</p>
      </div>
    </section>
  );
}

export default Contact;
