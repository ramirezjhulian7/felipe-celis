import { motion } from 'framer-motion';
import { teaching, experience, education, awards, signatureAssignments } from '../data/content';
import { ParallaxLayer } from '../components/ParallaxLayer';
import { BookOpen, Award, Briefcase, GraduationCap, Lightbulb, Star } from 'lucide-react';

const Teaching = () => {
  return (
    <section id="teaching" className="py-32 bg-gradient-to-b from-primary via-secondary to-primary text-white relative overflow-hidden">
      {/* Parallax background elements */}
      <ParallaxLayer speed={0.25} className="absolute top-40 left-5 opacity-5">
        <BookOpen size={160} className="text-accent" />
      </ParallaxLayer>
      
      <ParallaxLayer speed={0.18} className="absolute bottom-40 right-10 opacity-5">
        <GraduationCap size={180} className="text-accent-light" />
      </ParallaxLayer>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
            Academic Portfolio
          </h2>
          <div className="h-1 w-32 bg-gradient-gold mx-auto mb-16 rounded-full" />
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-accent" size={32} />
                <h3 className="text-3xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-accent pl-4 hover:border-accent-light transition-colors"
                  >
                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                    <p className="text-gray-400 text-sm mt-1">{edu.institution}, {edu.location}</p>
                    <p className="text-accent text-sm font-semibold">{edu.year}</p>
                    {edu.details && <p className="text-gray-500 text-sm mt-2 italic">{edu.details}</p>}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-accent" size={32} />
                <h3 className="text-3xl font-bold">Experience</h3>
              </div>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group hover:bg-glass rounded-lg p-4 -mx-4 transition-all duration-300"
                  >
                    <h4 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">{exp.institution} | {exp.period}</p>
                    {exp.details && (
                      <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mt-2">
                        {exp.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Teaching Focus */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-8 border-2 border-accent/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-accent" size={32} />
                <h3 className="text-3xl font-bold">Teaching Focus</h3>
              </div>
              
              <div className="mb-6 p-6 glass rounded-xl">
                <h4 className="text-2xl font-semibold text-accent mb-3">{teaching.syllabus.title}</h4>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{teaching.syllabus.description}</p>
                <h5 className="font-bold text-white mb-3 text-sm flex items-center gap-2">
                  <Star className="text-accent" size={16} />
                  Key Objectives:
                </h5>
                <ul className="space-y-2">
                  {teaching.syllabus.objectives.slice(0, 3).map((obj, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Lightbulb className="text-accent" size={24} />
                  Teaching Artifacts
                </h4>
                <div className="space-y-3">
                  {teaching.artifacts.map((artifact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-l-2 border-accent/50 pl-4 hover:border-accent transition-colors"
                    >
                      <h5 className="font-semibold text-accent text-sm">{artifact.title}</h5>
                      <p className="text-gray-400 text-xs mt-1">{artifact.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Signature Assignments */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-accent" size={28} />
                Signature Assignments
              </h3>
              <div className="grid gap-4">
                {signatureAssignments.map((assign, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-4 rounded-xl border border-accent/20 hover:border-accent hover:bg-glass-strong transition-all duration-300 group"
                  >
                    <h5 className="font-bold text-white text-sm mb-1 group-hover:text-accent transition-colors">
                      {assign.title}
                    </h5>
                    <p className="text-gray-400 text-xs">{assign.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Innovative Coursework */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent/10 via-secondary to-primary glass-strong rounded-2xl p-8 border border-accent/30"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Innovative Coursework</h3>
              <h5 className="font-bold text-2xl mb-3 text-accent">{teaching.rapCourse.title}</h5>
              <p className="text-gray-300 text-sm leading-relaxed">{teaching.rapCourse.description}</p>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Star className="text-accent" size={28} />
                Awards & Honors
              </h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col hover:bg-glass p-3 -mx-3 rounded-lg transition-all duration-300"
                  >
                    <span className="font-bold text-accent text-sm">{award.title}</span>
                    <span className="text-gray-400 text-xs mt-1">{award.organization} | {award.year}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
