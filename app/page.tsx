'use client'

import { Navbar } from '@/components/ui/navbar'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ImageCarousel } from '@/components/ui/carousel'
import { TurbineSpinner } from '@/components/ui/turbine-spinner'
import { AnalyticsDashboard } from '@/components/ui/analytics-dashboard'
import {
  Zap,
  Factory,
  Wind,
  Droplets,
  Gauge,
  Cpu,
  Shield,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Target,
  Globe
} from 'lucide-react'
import { withBasePath } from '@/lib/paths'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-yellow-50 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <TurbineSpinner size="sm" className="mr-2" />
                <span className="text-yellow-600 font-medium">Africa's Leading Gas Turbine Manufacturer</span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Advanced
                <span className="gradient-text"> Energy Solutions </span>
                for Africa
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Prexis Turbines develops and manufactures advanced, clean, low-emissions gas turbine generating sets.
                The only gas turbine manufacturer in Africa with 35 years of engineering excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8" asChild>
                  <a href={withBasePath('/services')}>Explore Solutions</a>
                </Button>
                <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50" asChild>
                  <a href={withBasePath('/about')}>View Profile</a>
                </Button>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 sm:mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">35+</div>
                  <div className="text-sm sm:text-base text-slate-600">Years Experience</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">1.5-10</div>
                  <div className="text-sm sm:text-base text-slate-600">MW Power Solutions</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">100%</div>
                  <div className="text-sm sm:text-base text-slate-600">African Manufactured</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl p-4 sm:p-8 shadow-2xl float-animation">
                  <div className="mb-4 sm:mb-6">
                    <ImageCarousel
                      images={[
                        '/Prexis-Maintenance-01.jpg',
                        '/Prexis-Turbine-Engineer.jpg',
                        '/Enerflex_Products_Electric-Power_Canada-1.jpg',
                        '/Platform.png',
                        '/Prexis-web.png'
                      ]}
                      className="h-48 sm:h-64"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-white/10 backdrop-blur rounded-xl p-3 sm:p-4">
                      <Factory className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2" />
                      <div className="text-white font-semibold text-sm sm:text-base">Gas Turbines</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-xl p-3 sm:p-4">
                      <Wind className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2" />
                      <div className="text-white font-semibold text-sm sm:text-base">Wind Turbines</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-xl p-3 sm:p-4">
                      <Droplets className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2" />
                      <div className="text-white font-semibold text-sm sm:text-base">Hydro Turbines</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-xl p-3 sm:p-4">
                      <Gauge className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2" />
                      <div className="text-white font-semibold text-sm sm:text-base">Steam Turbines</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-600/20 rounded-2xl blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Capabilities
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Complete gas turbine industry chain from R&D and design to manufacturing and service
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Zap,
                title: "Reliable Industrial Gas Turbines",
                description: "Advanced gas turbine technology for efficient power generation with low emissions."
              },
              {
                icon: Gauge,
                title: "Efficient Steam Turbines",
                description: "High-performance steam turbines for various industrial applications."
              },
              {
                icon: Cpu,
                title: "Combined Cycle Power Plants",
                description: "Integrated solutions for maximum efficiency and power output."
              },
              {
                icon: Shield,
                title: "Off Grid Power Solutions",
                description: "Independent power systems for remote locations and specific needs."
              },
              {
                icon: TrendingUp,
                title: "Combined Heat and Power Plants",
                description: "Cogeneration solutions for optimized energy utilization."
              },
              {
                icon: Factory,
                title: "Gas Turbine Generators",
                description: "Complete generator sets for reliable electricity production."
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full card-hover border-slate-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                      <capability.icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <CardTitle className="text-xl">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">
                      {capability.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Expert Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive energy solutions from assessment to implementation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full card-hover border-slate-200">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-yellow-600" />
                      </div>
                      <TurbineSpinner size="sm" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Track record of excellence in energy solutions across Africa
            </p>
          </motion.div>

          <AnalyticsDashboard />
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Innovation in
                <span className="gradient-text"> Clean Energy</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Prexis is helping to create a renewable energy future for electricity generation.
                Our flexible industrial gas turbine power plants are already capable of using completely
                synthetic and carbon-neutral fuels.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                They are also capable of combusting hydrogen/natural gas blends with up to 40% hydrogen –
                and we're working towards an industrial gas turbine power plant concept for pure hydrogen operations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">40%</div>
                  <div className="text-slate-600">Hydrogen Blend Capability</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-slate-600">Carbon Neutral Future</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-400 to-yellow-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Prexis-P18 Series</h3>
                  <p className="text-white/90 mb-4">
                    Advanced gas turbine generating sets with superior efficiency and reliability
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-white">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Low emissions design
                    </div>
                    <div className="flex items-center text-white">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      High efficiency operation
                    </div>
                    <div className="flex items-center text-white">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Flexible fuel capability
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-600">
              Contact us to discuss your energy requirements
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Address</h3>
              <p className="text-slate-600">
                7 Golden drive, Formula-K Business Park, Unit 43<br />
                Morehill, Benoni<br />
                Johannesburg
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600">
                +27 11 123 4567<br />
                +27 11 123 4568
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600">
                info@prexisturbines.co.za<br />
                sales@prexisturbines.co.za
              </p>
            </motion.div>
          </div>
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
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
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
              <h4 className="font-semibold mb-4">Certifications</h4>
              <p className="text-slate-400">
                ISO 9001:2015 Certified<br />
                35 Years of Engineering Excellence<br />
                Proudly South African
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
