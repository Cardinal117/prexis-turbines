'use client'

import { Navbar } from '@/components/ui/navbar'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ImageCarousel } from '@/components/ui/carousel'
import { TurbineSpinner } from '@/components/ui/turbine-spinner'
import { 
  Zap, 
  Gauge, 
  Wind, 
  Droplets, 
  Cpu, 
  Factory,
  TrendingUp,
  BarChart3,
  Battery,
  Sun
} from 'lucide-react'
import { withBasePath } from '@/lib/paths'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const services = [
  {
    title: "Gas Turbine Power Plants",
    description: "Standalone gas turbine power plants have the advantage of quick start-up and rapid response to changes in electricity demand, and can achieve full power output within minutes, allowing the power station to respond swiftly to increasing demand or compensate for fluctuations in renewable energy sources.",
    icon: Zap,
    features: ["Quick start-up", "Rapid response", "High efficiency", "Low emissions"],
    image: "/Prexis-Gas-Turbine-Generator.jpg"
  },
  {
    title: "Steam Turbine Power Plants",
    description: "Steam turbine power plants are used in conventional and combined cycle power plants, with more than 8,000 steam turbines in service worldwide, as an energy solution, its proven technology are unparalleled.",
    icon: Gauge,
    features: ["Proven technology", "8,000+ in service", "Reliable operation", "Wide applications"],
    image: "/Prexis-Maintenance-01.jpg"
  },
  {
    title: "Hydropower Plants",
    description: "Hydropower plants transforms the hydraulic energy of a watercourse, whether it is natural or artificial, into renewable electricity, the three types of hydropower plans are, run-of-river, reservoir or storage.",
    icon: Droplets,
    features: ["Renewable energy", "Multiple types", "Sustainable", "Long lifespan"],
    image: "/Hydro-2-2.jpeg"
  },
  {
    title: "Combined Cycle Gas Turbine",
    description: "Combined cycle gas turbine (CCGT) power plants combines a gas turbine with a steam turbine to improve overall plant efficiency.",
    icon: Cpu,
    features: ["High efficiency", "Combined operation", "Reduced emissions", "Cost effective"],
    image: "/CCHP-1.jpeg"
  },
  {
    title: "Cogeneration (CHP)",
    description: "Cogeneration or combined heat and power (CHP) is the use of a heat engine or power station to generate electricity and useful heat at the same time.",
    icon: Factory,
    features: ["Heat and power", "Energy efficiency", "Reduced costs", "Environmental benefits"],
    image: "/CHP-1.jpeg"
  },
  {
    title: "Energy Assessments",
    description: "Our energy assessments cover all aspects of the energy use of commercial and industrial facilities and processes. We'll evaluate your energy usage and identify areas for improvement, providing recommendations that help you become more energy efficient, save money and reduce your carbon footprint.",
    icon: BarChart3,
    features: ["Comprehensive analysis", "Cost savings", "Carbon reduction", "Expert recommendations"],
    image: "/Assessments-3.jpeg"
  }
]

export default function ServicesPage() {
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
              <span className="text-yellow-600 font-medium text-sm sm:text-base">Our Services</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Comprehensive
              <span className="gradient-text"> Energy Solutions</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-4xl px-2">
              Prexis is 100% focused and committed to delivering innovative and sustainable energy solutions to our customers. 
              From gas turbines to hydropower, we provide the full spectrum of energy generation technologies.
            </p>
            
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 sm:px-8">
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="space-y-16 sm:space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    Learn More
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-600 to-orange-800 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Energy Future?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let our expert team help you find the perfect energy solution for your needs. 
              From initial assessment to implementation, we're with you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 shadow-lg hover:shadow-xl">
                  Get Started
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-yellow-600 px-8 shadow-lg hover:shadow-xl">
                  Download Brochure
                </Button>
              </motion.div>
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
