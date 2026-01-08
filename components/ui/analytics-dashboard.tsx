'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { TrendingUp, Users, Factory, Zap, Award } from 'lucide-react'
import { TurbineSpinner } from './turbine-spinner'

const stats = [
  {
    title: 'Clients Helped',
    value: '250+',
    icon: Users,
    change: '+15%',
    color: 'text-green-600'
  },
  {
    title: 'Turbines Built',
    value: '1,200+',
    icon: Factory,
    change: '+22%',
    color: 'text-blue-600'
  },
  {
    title: 'MW Generated',
    value: '8,500+',
    icon: Zap,
    change: '+18%',
    color: 'text-yellow-600'
  },
  {
    title: 'Awards Won',
    value: '15',
    icon: Award,
    change: '+3',
    color: 'text-purple-600'
  }
]

const chartData = [
  { month: 'Jan', projects: 12, revenue: 240 },
  { month: 'Feb', projects: 19, revenue: 380 },
  { month: 'Mar', projects: 15, revenue: 300 },
  { month: 'Apr', projects: 25, revenue: 500 },
  { month: 'May', projects: 22, revenue: 440 },
  { month: 'Jun', projects: 30, revenue: 600 },
]

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">
                  {stat.title}
                </CardTitle>
                <div className="relative">
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <p className={`text-xs ${stat.color} flex items-center`}>
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TurbineSpinner size="sm" className="mr-3" />
              Project Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {chartData.map((item, index) => (
                <div key={item.month} className="flex items-center space-x-4">
                  <div className="w-12 text-sm font-medium text-slate-600">{item.month}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-slate-200 rounded-full h-2">
                        <motion.div
                          className="bg-yellow-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(item.projects / 30) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                      <span className="text-sm text-slate-600 w-12 text-right">
                        {item.projects}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
