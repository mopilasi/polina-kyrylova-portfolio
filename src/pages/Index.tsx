
import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Linkedin, Github, ExternalLink, Calendar, MapPin, Download, Users, Target, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Polina
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors capitalize ${
                    activeSection === section
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-bold">
                  <span className="block text-gray-900">Hi, I'm</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
                    Polina
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                  Product Manager | AI & Growth Enthusiast
                </p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  I drive product innovation through AI integration and data-driven growth strategies. 
                  Passionate about building scalable products that deliver exceptional user experiences 
                  and measurable business impact.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('projects')}
                  className="border-2 border-gray-300 hover:border-blue-600 px-8 py-6 text-lg rounded-xl transition-all duration-300"
                >
                  View My Work
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                <img
                  src="/lovable-uploads/9a661e19-1674-4a13-97de-000095bb5de1.png"
                  alt="Polina"
                  className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a results-driven Product Manager with a passion for creating products that users love. 
                With expertise in B2B SaaS, I bridge the gap between business objectives, user needs, 
                and technical feasibility.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My approach combines deep user research with cutting-edge AI technologies to build 
                products that solve real problems and deliver measurable business outcomes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not analyzing user data or designing product experiments, you'll find me 
                mentoring junior PMs, building out my next side project, or enjoying a run with 
                my Vizsla, Ziggy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">User-Centric</h3>
                <p className="text-sm text-gray-600">Deep user research drives every product decision</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <Target className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Results-Driven</h3>
                <p className="text-sm text-gray-600">Focus on measurable business outcomes</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <Lightbulb className="w-8 h-8 text-pink-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">Leveraging AI for product excellence</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <Calendar className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Agile</h3>
                <p className="text-sm text-gray-600">Fast iterations with continuous learning</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            <div className="space-y-12">
              {/* Eat Sip Repeat */}
              <div className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Founder & Product Lead</h3>
                      <p className="text-blue-600 font-medium">Eat Sip Repeat</p>
                    </div>
                    <div className="text-gray-500 text-sm lg:text-right">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        02/2025 – Present
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4" />
                        San Francisco, CA
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Launched a native mobile app featuring automated menu generation by orchestrating recipe-selection models, dietary-constraint guardrails, and user feedback loops in SwiftUI & Firebase</li>
                    <li>• Conducted 25+ developer-style interviews to validate function-calling prompts, error-handling flows, and deployment surfaces ahead of private beta launch</li>
                    <li>• Built a Python scraper and GPT-based tagging pipeline to ingest 200+ recipes into Airtable - defining data schemas and monitoring pipelines to ensure reliability</li>
                  </ul>
                </Card>
              </div>

              {/* Career Break */}
              <div className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-gray-400 rounded-full border-4 border-white shadow-lg"></div>
                <Card className="p-6 bg-gray-50 border-gray-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-700">✈️ Relocation & Sabbatical</h3>
                    </div>
                    <div className="text-gray-500 text-sm lg:text-right">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        08/2024 – 01/2025
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4" />
                        Europe → San Francisco
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Planned and executed a cross-continental move from Europe to the Bay Area</li>
                    <li>• Onboarded into U.S. market research for product opportunities</li>
                    <li>• Set up local networks, handled logistics, and prepared for Eat Sip Repeat launch</li>
                  </ul>
                </Card>
              </div>

              {/* PARiM */}
              <div className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Product Manager</h3>
                      <p className="text-purple-600 font-medium">PARiM Workforce Software</p>
                    </div>
                    <div className="text-gray-500 text-sm lg:text-right">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        12/2021 – 07/2024
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4" />
                        Tallinn, Estonia
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Owned roadmaps for key scheduling & time-tracking modules, aligning Sales, Marketing & CS around a unified vision</li>
                    <li>• Prioritized features via funnel drop-off analysis and customer interviews - boosting feature adoption by 25%</li>
                    <li>• Partnered with Engineering to instrument event tracking and build Mixpanel dashboards, accelerating data-driven iterations</li>
                    <li>• Led performance optimization initiative that cut load times on data-heavy views by 40% and reduced churn-related support tickets by 18%</li>
                  </ul>
                </Card>
              </div>

              {/* Paxful */}
              <div className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Product Manager, Fraud Prevention</h3>
                      <p className="text-green-600 font-medium">Paxful</p>
                    </div>
                    <div className="text-gray-500 text-sm lg:text-right">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        03/2021 – 12/2021
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4" />
                        Tallinn, Estonia
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Defined and executed marketplace roadmap focused on trust & fraud prevention - launching security features that cut fraud claims by 15%</li>
                    <li>• Collaborated with UX and engineering teams to refine the transaction flow, driving a 12% uplift in daily active users (DAU)</li>
                    <li>• Set and tracked OKRs tied to business KPIs, demonstrating clear ROI from product initiatives</li>
                    <li>• Conducted competitive analyses to uncover new market opportunities and inform prioritization</li>
                  </ul>
                </Card>
              </div>

              {/* Master Of Code Global */}
              <div className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-pink-600 rounded-full border-4 border-white shadow-lg"></div>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Project Manager</h3>
                      <p className="text-pink-600 font-medium">Master Of Code Global</p>
                    </div>
                    <div className="text-gray-500 text-sm lg:text-right">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        12/2019 – 03/2021
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4" />
                        Kyiv, Ukraine
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Managed end-to-end delivery of enterprise-grade NLP chatbot projects for Fortune 500 clients</li>
                    <li>• Tuned NLU models and built annotation pipelines - halving model update cycles and improving intent-recognition accuracy to >95%</li>
                    <li>• Coordinated cross-functional teams through design, development & deployment phases, ensuring on-time, on-budget delivery</li>
                  </ul>
                </Card>
              </div>

              {/* FigLeaf App */}
              <div className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Program Manager</h3>
                      <p className="text-indigo-600 font-medium">FigLeaf App</p>
                    </div>
                    <div className="text-gray-500 text-sm lg:text-right">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        02/2019 – 12/2019
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4" />
                        Kyiv, Ukraine
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Led Agile workflows across Engineering, Marketing & Product to deliver a privacy-focused mobile application in a fast-paced startup environment</li>
                    <li>• Designed and enforced sprint processes that increased team throughput by 30%</li>
                    <li>• Proposed and scoped internal product improvements - reducing QA cycle times by 20%</li>
                  </ul>
                </Card>
              </div>

              {/* ProZorro.sale */}
              <div className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-yellow-600 rounded-full border-4 border-white shadow-lg"></div>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Project Lead</h3>
                      <p className="text-yellow-600 font-medium">ProZorro.sale</p>
                    </div>
                    <div className="text-gray-500 text-sm lg:text-right">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        05/2018 – 02/2019
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4" />
                        Kyiv, Ukraine
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Led efforts to attract new participants to the Electronic Trading System for government assets, successfully delivering three large-scale projects</li>
                    <li>• Managed deliverables, supported solution design & architecture, and established a trusted-advisor status with key stakeholders</li>
                    <li>• Facilitated the first-ever electronic auction of government assets - a landmark in public asset management</li>
                  </ul>
                </Card>
              </div>

              {/* Playtech */}
              <div className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Client Delivery Manager</h3>
                      <p className="text-red-600 font-medium">Playtech</p>
                    </div>
                    <div className="text-gray-500 text-sm lg:text-right">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        01/2016 – 05/2018
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4" />
                        Kyiv, Ukraine
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Team-lead for Casino Mobile's CDMs, directly managing a team of 6 and ensuring high-quality, timely deliveries to all casino clients</li>
                    <li>• Managed multiple parallel projects and served as the sole communication hub for product inquiries and escalations</li>
                    <li>• Built strategic client partnerships, driving satisfaction and long-term engagement</li>
                    <li>• Overseen integration troubleshooting, risk mitigation, and external dependencies to keep releases on schedule</li>
                  </ul>
                </Card>
              </div>

              {/* Levi9 */}
              <div className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-lg"></div>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Project Manager</h3>
                      <p className="text-teal-600 font-medium">Levi9 Ukraine</p>
                    </div>
                    <div className="text-gray-500 text-sm lg:text-right">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        05/2013 – 12/2015
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4" />
                        Kyiv, Ukraine
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Managed a strategic account, doubling team size within one year through strong client and team relationships</li>
                    <li>• Acted as mediator between stakeholders and delivery teams, tracking milestones and reporting status</li>
                    <li>• Handled resource planning, project admin, and financial tracking to ensure on-budget delivery</li>
                    <li>• Identified and resolved escalations, enhancing client satisfaction and deepening relationships</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">Eat Sip Repeat</h3>
                    <p className="text-sm opacity-90">AI-Powered Recipe App</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Native mobile app with automated menu generation using AI models, 
                  dietary constraints, and user feedback loops.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">SwiftUI</Badge>
                  <Badge variant="secondary">Firebase</Badge>
                  <Badge variant="secondary">GPT</Badge>
                  <Badge variant="secondary">Python</Badge>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">PARiM Analytics</h3>
                    <p className="text-sm opacity-90">Workforce Optimization</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Data-driven scheduling and time-tracking platform with advanced 
                  analytics and performance optimization features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Mixpanel</Badge>
                  <Badge variant="secondary">Analytics</Badge>
                  <Badge variant="secondary">B2B SaaS</Badge>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Case Study
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">Fraud Prevention</h3>
                    <p className="text-sm opacity-90">Marketplace Security</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Comprehensive fraud prevention system for cryptocurrency marketplace, 
                  reducing fraud claims by 15% and improving user trust.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Security</Badge>
                  <Badge variant="secondary">ML</Badge>
                  <Badge variant="secondary">Marketplace</Badge>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Competencies</h3>
              <div className="space-y-3">
                {[
                  'Product Strategy & Roadmapping',
                  'User Research & Analytics',
                  'Agile/Scrum Methodologies',
                  'Cross-functional Team Leadership',
                  'Data-Driven Decision Making',
                  'B2B SaaS Product Management',
                  'OKR Setting & Tracking',
                  'Stakeholder Alignment'
                ].map((skill) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI & Technology</h3>
              <div className="space-y-3">
                {[
                  'AI/ML Integration',
                  'GPT & LLM Implementation',
                  'Natural Language Processing',
                  'Machine Learning Models',
                  'API Design & Integration',
                  'Database Schema Design',
                  'Analytics & Instrumentation',
                  'A/B Testing & Experimentation'
                ].map((skill) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tools & Platforms</h3>
              <div className="space-y-3">
                {[
                  'Mixpanel & Analytics Tools',
                  'Firebase & Backend Services',
                  'Airtable & Data Management',
                  'SwiftUI & Mobile Development',
                  'Python & Automation',
                  'Figma & Design Tools',
                  'Jira & Project Management',
                  'Git & Version Control'
                ].map((skill) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          <div className="mt-12">
            <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <h3 className="text-2xl font-bold mb-4 text-center">Areas of Interest</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <h4 className="font-semibold mb-2">AI/ML Integration</h4>
                  <p className="text-sm opacity-90">Leveraging AI to enhance product experiences</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Growth Engineering</h4>
                  <p className="text-sm opacity-90">Data-driven growth strategies and optimization</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Conversational AI</h4>
                  <p className="text-sm opacity-90">Chatbots, NLP, and human-AI interaction</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Product Analytics</h4>
                  <p className="text-sm opacity-90">Advanced metrics and behavioral insights</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Sharing thoughts on product management, AI integration, and building products that users love.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">Product Strategy</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  The Future of AI in Product Management
                </h3>
                <p className="text-gray-600 mb-4">
                  How AI is transforming the way we build, measure, and optimize products for better user experiences.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>5 min read</span>
                  <span>Coming Soon</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="text-sm text-purple-600 font-medium mb-2">Growth</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Data-Driven Product Decisions
                </h3>
                <p className="text-gray-600 mb-4">
                  A framework for making product decisions based on user behavior analytics and business metrics.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>7 min read</span>
                  <span>Coming Soon</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="text-sm text-green-600 font-medium mb-2">Leadership</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  Building High-Performing Product Teams
                </h3>
                <p className="text-gray-600 mb-4">
                  Lessons learned from leading cross-functional teams and creating alignment across stakeholders.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>6 min read</span>
                  <span>Coming Soon</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl opacity-90">
              Interested in collaborating or want to discuss product management, AI, or growth strategies?
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  I'm always excited to connect with fellow product enthusiasts, entrepreneurs, 
                  and anyone passionate about building great products with AI.
                </p>
              </div>
              <div className="space-y-4">
                <a 
                  href="mailto:polina@example.com" 
                  className="flex items-center space-x-3 hover:text-blue-200 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <span>polina@example.com</span>
                </a>
                <a 
                  href="https://linkedin.com/in/polina" 
                  className="flex items-center space-x-3 hover:text-blue-200 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>LinkedIn Profile</span>
                </a>
                <a 
                  href="https://github.com/polina" 
                  className="flex items-center space-x-3 hover:text-blue-200 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/60"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/60"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/60"
                      placeholder="Let's discuss your product ideas..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2025 Polina. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-gray-600 text-gray-300 hover:text-white hover:border-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
