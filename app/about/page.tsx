'use client'

import { Navbar } from '@/components/ui/navbar'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ImageCarousel } from '@/components/ui/carousel'
import { TurbineSpinner } from '@/components/ui/turbine-spinner'
import { 
  Factory, 
  Zap, 
  Shield, 
  TrendingUp,
  Users,
  Award,
  Target,
  Globe
} from 'lucide-react'
import { withBasePath } from '@/lib/paths'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const services = [
  {
    title: "Site Assessments",
    description: "Site assessment is a cost-effective pre-feasibility analysis developed, as part of the customers, energy requirement, to find the best energy solution.",
    icon: Target
  },
  {
    title: "Gas Turbine Engineering",
    description: "Prexis gas turbines are designed to provide additional electricity generation during periods of high demand or peak load, or as a off-grid stand-alone electrical power plant.",
    icon: Zap
  },
  {
    title: "Energy Solutions",
    description: "Prexis is 100% focused and committed to delivering innovative and sustainable energy solutions to our customers.",
    icon: TrendingUp
  },
  {
    title: "Gas Turbine Maintenance",
    description: "Gas turbine maintenance strategies involve a combination of preventive, predictive, corrective, overhaul, and proactive maintenance approaches.",
    icon: Shield
  },
  {
    title: "Remote Monitoring",
    description: "Remote monitoring and diagnostics services for gas turbine fired power plants to improve their availability, reliability, operating performance.",
    icon: Factory
  },
  {
    title: "Power Plant Design",
    description: "We design for efficiency, to improved serviceability and optimum power plant integration, resulting in innovative electrical energy solutions.",
    icon: Globe
  }
]

const stats = [
  { value: "35+", label: "Years Experience", icon: Award },
  { value: "1", label: "Only Gas Turbine Manufacturer in Africa", icon: Factory },
  { value: "100%", label: "African Owned", icon: Globe },
  { value: "R&D", label: "Problem Solvers", icon: Users }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-yellow-50 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <TurbineSpinner size="sm" className="mr-2" />
              <span className="text-yellow-600 font-medium">About Prexis Turbines</span>
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Advanced Turbine
              <span className="gradient-text"> Technology</span>
              for Africa
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-4xl">
              Our advanced turbine technology will turn the energy market towards clean electrical power generation, 
              allowing us to serve global markets with efficient gas turbine power plants, installed at the source where 
              the electricity is needed, ensuring site-specific, reliable energy solutions.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Facilities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              State-of-the-art manufacturing and testing facilities
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <ImageCarousel 
              images={[
                '/Prexis-Maintenance-01.jpg',
                '/Prexis-Turbine-Engineer.jpg',
                '/Enerflex_Products_Electric-Power_Canada-1.jpg',
                '/Platform.png',
                '/Prexis-web.png'
              ]}
              className="h-96"
              objectFit="contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive energy solutions from assessment to implementation
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full card-hover border-slate-200">
                  <CardHeader>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-slate-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Statement */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Our Commitment to Excellence
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Prexis Turbines, through innovative design and together with our partners, we manufacture the most 
              efficient gas turbines for the benefit of end-customers, as the only gas turbine manufacturer on the 
              African continent, we strive to reduce their operating costs, improve their performance, and protect the environment.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed">
              Prexis Turbines (Pty) Ltd.'s design and engineering team is typically the group within the company, 
              responsible for archiving the development work once the gas turbine power plant project goes into production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src={withBasePath('/Logo.png')}
                alt="Prexis Turbines"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
              />
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
