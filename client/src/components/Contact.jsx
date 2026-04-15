import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // Used to show success/error messages to the user

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    setStatus('Sending...');

    try {
      const response = await fetch('http://127.0.0.1:5000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert our React state into a JSON string
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Network error. Is the server running?');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Get In Touch</h2>
        
        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-100">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input 
              type="text" name="name" id="name" required
              value={formData.name} onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input 
              type="email" name="email" id="email" required
              value={formData.email} onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="john@company.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea 
              name="message" id="message" rows="4" required
              value={formData.message} onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Hi Kaif, we would love to interview you for a developer role..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>

          {/* Success/Error Message Display */}
          {status && (
            <p className={`mt-4 text-center font-semibold ${status.includes('successfully') ? 'text-green-600' : 'text-blue-600'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;