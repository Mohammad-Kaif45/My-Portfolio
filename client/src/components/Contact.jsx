import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setStatus('Sending...');

    try {
      const response = await fetch('http://127.0.0.1:5000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Network error. Is the server running?');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 max-w-4xl relative">
        
        {/* Background decorative blobs (Optional but adds a premium feel) */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden md:flex">
          
          {/* Left Side: Contact Info & Text */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 md:w-2/5 text-white flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Let's Connect.</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="space-y-4 text-sm font-medium text-blue-100">
              <div className="flex items-center space-x-3">
                <span className="text-xl">📧</span>
                <span>kaifmumtajansari@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">📍</span>
                <span>Vapi, Gujarat</span>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="p-10 md:w-3/5 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">Full Name</label>
                <input 
                  type="text" name="name" id="name" required
                  value={formData.name} onChange={handleChange}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">Email Address</label>
                <input 
                  type="email" name="email" id="email" required
                  value={formData.email} onChange={handleChange}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="message">Your Message</label>
                <textarea 
                  name="message" id="message" rows="4" required
                  value={formData.message} onChange={handleChange}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder=""
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Send Message
              </button>

              {/* Upgraded Success/Error Message Display */}
              {status && (
                <div className={`mt-6 p-4 rounded-xl text-center font-medium transition-all ${
                  status.includes('successfully') 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : status === 'Sending...'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200 animate-pulse'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;