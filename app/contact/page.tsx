'use client'

import { Navbar } from '@/components/ui/navbar'
import Image from 'next/image'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TurbineSpinner } from '@/components/ui/turbine-spinner'
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Building,
  Users,
  Headphones
} from 'lucide-react'
import { withBasePath } from '@/lib/paths'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: [
      "7 Golden drive, Formula-K Business Park, Unit 43",
      "Morehill, Benoni",
      "Johannesburg"
    ]
  },
  {
    icon: Phone,
    title: "Phone",
    details: [
      "+27 11 123 4567",
      "+27 11 123 4568"
    ]
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "info@prexisturbines.co.za",
      "sales@prexisturbines.co.za"
    ]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Friday: 8:00 - 16:00",
      "Saturday: Closed",
      "Sunday: Closed"
    ]
  }
]

const departments = [
  {
    icon: Users,
    title: "Sales Department",
    email: "sales@prexisturbines.co.za",
    phone: "+27 11 123 4567",
    description: "For product inquiries and quotations"
  },
  {
    icon: Building,
    title: "Technical Support",
    email: "support@prexisturbines.co.za",
    phone: "+27 11 123 4568",
    description: "For technical assistance and maintenance"
  },
  {
    icon: Headphones,
    title: "Customer Service",
    email: "service@prexisturbines.co.za",
    phone: "+27 11 123 4569",
    description: "For general inquiries and support"
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-6">
        <div className="container mx-auto">
          <motion.div {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center px-3 sm:px-4 py-2 bg-yellow-50 rounded-full mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <TurbineSpinner size="sm" className="mr-2" />
              <span className="text-yellow-600 font-medium text-sm sm:text-base">Contact Us</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Get in
              <span className="gradient-text"> Touch</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-4xl px-2">
              Ready to transform your energy solutions? Our expert team is here to help you find the perfect 
              power generation solution for your needs. Reach out to us today for a consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full card-hover border-slate-200">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <info.icon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm sm:text-base text-slate-600 mb-2">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Departments */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-4 sm:p-8">
                <CardHeader className="px-0">
                  <CardTitle className="text-2xl sm:text-3xl text-slate-900">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Departments */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Our Departments</h2>
                
                {departments.map((dept, index) => (
                  <motion.div
                    key={dept.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="card-hover border-slate-200">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                            <dept.icon className="w-6 h-6 text-yellow-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">
                              {dept.title}
                            </h3>
                            <p className="text-slate-600 mb-3">{dept.description}</p>
                            <div className="space-y-2">
                              <div className="flex items-center text-slate-600">
                                <Mail className="w-4 h-4 mr-2 text-yellow-600" />
                                {dept.email}
                              </div>
                              <div className="flex items-center text-slate-600">
                                <Phone className="w-4 h-4 mr-2 text-yellow-600" />
                                {dept.phone}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Visit Our Facility</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Come see our state-of-the-art manufacturing facility and meet our expert team
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-200 rounded-2xl h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 text-lg">Interactive Map</p>
              <p className="text-slate-500">7 Golden drive, Formula-K Business Park, Unit 43, Morehill, Benoni, Johannesburg</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Prexis Turbines</h3>
              <p className="text-slate-400">
                Africa's leading gas turbine manufacturer, providing innovative energy solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href={withBasePath('/')} className="hover:text-white transition-colors">Home</a></li>
                <li><a href={withBasePath('/about')} className="hover:text-white transition-colors">About</a></li>
                <li><a href={withBasePath('/services')} className="hover:text-white transition-colors">Services</a></li>
                <li><a href={withBasePath('/contact')} className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Gas Turbines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Steam Turbines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wind Turbines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hydro Turbines</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <p className="text-slate-400">
                7 Golden drive, Formula-K Business Park, Unit 43<br />
                Morehill, Benoni<br />
                Johannesburg
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Prexis Turbines. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
