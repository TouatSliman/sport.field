const ContactPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-100 to-blue-50 py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        تواصل معنا
      </h1>
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-8">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="الاسم"
            className="text-right px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="text-right px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            placeholder="رسالتك"
            rows={4}
            className="text-right px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold"
          >
            إرسال
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
