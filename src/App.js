import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [coins, setCoins] = useState(0);
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    // Generate clouds
    const newClouds = Array.from({ length: 8 }, (_, i) => ({
      left: (i * 25) + Math.random() * 10,
      top: Math.random() * 30 + 10,
      delay: i * 2,
      duration: 20 + Math.random() * 10
    }));
    setClouds(newClouds);
  }, []);

  const skills = [
    { name: '.NET Core', level: 90, color: '#FBD000' },
    { name: 'C#', level: 85, color: '#F83800' },
    { name: 'PostgreSQL', level: 80, color: '#7C2C00' },
    { name: 'AWS', level: 75, color: '#00A800' },
    { name: 'Entity Framework', level: 85, color: '#6888FF' },
    { name: 'Git', level: 90, color: '#FC9838' },
  ];

  const experiences = [
    {
      title: 'Backend Developer Intern',
      company: 'Morphosium',
      date: '07/2025 – 08/2025',
      description: [
        'Developed backend of file-sharing platform with AWS S3 integration',
        'Implemented authentication & authorization mechanisms',
        'Managed API testing through Postman',
        'Utilized PostgreSQL and Git for development'
      ]
    },
    {
      title: 'Full-Stack Developer Intern',
      company: 'Argeya',
      date: '07/2024 – 09/2024',
      description: [
        'Built web application for job/internship management',
        'Designed relational database with MS SQL Server',
        'System actively used by organization',
        'Maintained version control through Git'
      ]
    }
  ];

  const projects = [
    {
      title: 'Neural Networks',
      tech: '.NET Framework, C++ (CLR)',
      description: 'Developed single and multi-layer neural networks for 2D labeled data classification',
      icon: '🧠'
    },
    {
      title: 'Word Add-in with AI',
      tech: '.NET Framework (VSTO), Hugging Face API',
      description: 'Microsoft Word add-in for code language detection and syntax highlighting',
      icon: '📝'
    }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const collectCoin = () => {
    setCoins(coins + 1);
  };

  // Mario Brick Block Component
  const BrickBlock = ({ children, className = "", style = {} }) => (
    <div className={`relative ${className}`} style={style}>
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #D85800 0%, #D85800 25%, #A84000 25%, #A84000 50%, #D85800 50%, #D85800 75%, #A84000 75%, #A84000 100%)',
        backgroundSize: '16px 16px',
        border: '4px solid #F87858',
        boxShadow: 'inset 0 0 0 2px #7C2C00, 4px 4px 0 0 #7C2C00'
      }} />
      <div className="relative z-10">{children}</div>
    </div>
  );

  // Mario Question Block Component
  const QuestionBlock = ({ children, className = "" }) => (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #FBD000 0%, #FBD000 50%, #F8A800 50%, #F8A800 100%)',
        backgroundSize: '8px 8px',
        border: '4px solid #FBD000',
        boxShadow: 'inset 0 0 0 2px #A87800, 4px 4px 0 0 #A87800'
      }} />
      <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white" style={{
        textShadow: '3px 3px 0 #A87800'
      }}>
        ?
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );

  // Mario Pipe Component
  const Pipe = ({ className = "", style = {} }) => (
    <div className={`${className}`} style={{
      ...style,
      background: 'linear-gradient(to right, #00D800 0%, #00D800 40%, #00A800 40%, #00A800 60%, #00D800 60%)',
      border: '4px solid #00A800',
      boxShadow: 'inset 0 0 0 2px #005800, 4px 4px 0 0 #005800'
    }}>
      <div className="w-full h-8 bg-gradient-to-r from-green-400 to-green-500" style={{
        borderTop: '3px solid #00D800',
        borderBottom: '3px solid #005800'
      }} />
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: '#5C94FC',
      fontFamily: "'Press Start 2P', monospace"
    }}>
      {/* Mario Sky Background */}
      <div className="fixed inset-0" style={{
        background: 'linear-gradient(to bottom, #5C94FC 0%, #5C94FC 70%, #00A800 70%, #00A800 100%)'
      }} />

      {/* Pixel Grid */}
      <div className="fixed inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 5px), repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 5px)'
      }} />

      {/* Animated Clouds */}
      {clouds.map((cloud, i) => (
        <div
          key={i}
          className="fixed pointer-events-none"
          style={{
            left: `${cloud.left}%`,
            top: `${cloud.top}%`,
            animation: `float ${cloud.duration}s linear infinite`,
            animationDelay: `${cloud.delay}s`
          }}
        >
          <div className="relative w-24 h-16">
            <div className="absolute top-4 left-4 w-16 h-8 bg-white" style={{
              boxShadow: '0 0 0 3px white'
            }} />
            <div className="absolute top-0 left-8 w-8 h-8 bg-white" />
            <div className="absolute top-8 left-0 w-8 h-8 bg-white" />
            <div className="absolute top-8 left-16 w-8 h-8 bg-white" />
          </div>
        </div>
      ))}

      {/* Coin Counter */}
      <div className="fixed top-24 right-8 z-50 flex items-center gap-3 px-6 py-3" style={{
        background: '#000',
        border: '4px solid #FBD000',
        boxShadow: '4px 4px 0 0 #A87800'
      }}>
        <div className="text-4xl animate-bounce">🪙</div>
        <span className="text-2xl text-yellow-400 font-bold">×{coins}</span>
      </div>

      <style>{`
        @keyframes float {
          from { transform: translateX(-100%); }
          to { transform: translateX(100vw); }
        }
        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes coinSpin {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>

      {/* Navigation - Mario Style */}
      <nav className="fixed top-0 w-full z-50 shadow-lg" style={{
        background: '#000',
        borderBottom: '6px solid #FBD000'
      }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold" style={{
            color: '#F83800',
            textShadow: '3px 3px 0px #7C2C00',
            imageRendering: 'pixelated'
          }}>
            {'⭐ ESRA ⭐'}
          </div>
          <div className="flex gap-2">
            {['HOME', 'ABOUT', 'WORK', 'PROJECTS', 'CONTACT'].map((section, idx) => (
              <button
                key={section}
                onClick={() => scrollToSection(section.toLowerCase().replace('work', 'experience'))}
                className={`px-4 py-2 font-bold transition-all duration-200 text-xs`}
                style={{
                  background: activeSection === section.toLowerCase().replace('work', 'experience') ? '#FBD000' : '#F83800',
                  color: activeSection === section.toLowerCase().replace('work', 'experience') ? '#000' : '#FFF',
                  border: '3px solid',
                  borderColor: activeSection === section.toLowerCase().replace('work', 'experience') ? '#F8A800' : '#A81000',
                  boxShadow: activeSection === section.toLowerCase().replace('work', 'experience') 
                    ? '3px 3px 0 0 #A87800' 
                    : '3px 3px 0 0 #7C2C00',
                  imageRendering: 'pixelated'
                }}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section - Mario World */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-6">
        <div className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Mario Character Block */}
          <div className="relative inline-block">
            <QuestionBlock className="w-48 h-48 mx-auto cursor-pointer hover:scale-110 transition-transform" onClick={collectCoin}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-7xl">👩‍💻</div>
              </div>
            </QuestionBlock>
            <div className="absolute -top-8 right-0 text-5xl animate-bounce" style={{ animationDuration: '0.5s' }}>⭐</div>
            <div className="absolute -bottom-8 left-0 text-5xl" style={{ animation: 'coinSpin 2s linear infinite' }}>🪙</div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold" style={{
            color: '#FFF',
            textShadow: '4px 4px 0px #F83800, 8px 8px 0px #000',
            imageRendering: 'pixelated',
            letterSpacing: '3px'
          }}>
            ESRA GÜLER
          </h1>
          
          <BrickBlock className="inline-block px-8 py-6">
            <div className="flex items-center justify-center gap-3">
              <span className="text-lg md:text-xl text-white font-bold" style={{ textShadow: '2px 2px 0 #000' }}>
                JUNIOR SOFTWARE ENGINEER
              </span>
            </div>
          </BrickBlock>
          
          <div className="max-w-3xl mx-auto">
            <div className="p-6" style={{
              background: '#FFF',
              border: '5px solid #000',
              boxShadow: '6px 6px 0 0 #7C2C00'
            }}>
              <p className="text-sm md:text-base leading-relaxed font-bold" style={{ color: '#000' }}>
                🍄 Building scalable backend APIs with .NET Core, C#, and cloud technologies.
                <br />
                ⭐ Passionate about creating maintainable, high-performance solutions!
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center pt-6 flex-wrap">
            <a href="https://github.com/Esradslmn/" target="_blank" rel="noopener noreferrer" 
               className="p-4 hover:scale-110 transition-all duration-200"
               style={{
                 background: '#000',
                 border: '4px solid #FFF',
                 boxShadow: '4px 4px 0 0 #7C2C00'
               }}>
              <Github className="w-8 h-8 text-white" />
            </a>
            <a href="https://www.linkedin.com/in/esraguler1/" target="_blank" rel="noopener noreferrer"
               className="p-4 hover:scale-110 transition-all duration-200"
               style={{
                 background: '#0077B5',
                 border: '4px solid #FFF',
                 boxShadow: '4px 4px 0 0 #00558C'
               }}>
              <Linkedin className="w-8 h-8 text-white" />
            </a>
            <a href="mailto:esragulerezgi@gmail.com"
               className="p-4 hover:scale-110 transition-all duration-200"
               style={{
                 background: '#F83800',
                 border: '4px solid #FFF',
                 boxShadow: '4px 4px 0 0 #A81000'
               }}>
              <Mail className="w-8 h-8 text-white" />
            </a>
          </div>
          
          <div className="pt-12">
            <div className="text-5xl animate-bounce" style={{ animation: 'jump 1s infinite' }}>⬇️</div>
          </div>
        </div>

        {/* Ground Pipes */}
        <Pipe className="absolute bottom-0 left-20 w-24 h-32" />
        <Pipe className="absolute bottom-0 right-20 w-24 h-32" />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        <div className="max-w-5xl w-full relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{
            color: '#FFF',
            textShadow: '4px 4px 0px #F83800, 8px 8px 0px #000'
          }}>
            &lt; ABOUT ME /&gt;
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <BrickBlock className="p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">🎓</div>
                <h3 className="text-xl font-bold text-white" style={{ textShadow: '2px 2px 0 #000' }}>
                  EDUCATION
                </h3>
              </div>
              <p className="text-white leading-relaxed font-bold text-sm" style={{ textShadow: '1px 1px 0 #000' }}>
                <span className="text-yellow-300">Bachelor's Degree</span>
                <br />Computer Science
                <br />
                🏛️ Karadeniz Technical University
                <br />
                <span className="text-yellow-300">08/2020 – 10/2025</span>
              </p>
            </BrickBlock>

            <div className="p-8 hover:scale-105 transition-all duration-300" style={{
              background: '#00D800',
              border: '5px solid #00A800',
              boxShadow: '6px 6px 0 0 #005800'
            }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">📍</div>
                <h3 className="text-xl font-bold text-white" style={{ textShadow: '2px 2px 0 #000' }}>
                  LOCATION
                </h3>
              </div>
              <p className="text-white leading-relaxed font-bold text-sm" style={{ textShadow: '1px 1px 0 #000' }}>
                Based in <span className="text-yellow-300">Antalya, Türkiye</span> 🌴
                <br /><br />
                ⭐ Open to remote opportunities
              </p>
            </div>
          </div>

          {/* Skills - Mario Blocks */}
          <div className="mt-12 p-8" style={{
            background: '#FBD000',
            border: '6px solid #F8A800',
            boxShadow: '8px 8px 0 0 #A87800'
          }}>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ color: '#000' }}>
              <div className="text-4xl">💪</div>
              POWER-UPS (SKILLS)
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-sm" style={{ color: '#000' }}>{skill.name}</span>
                    <span className="font-bold text-sm" style={{ color: '#F83800' }}>{skill.level}%</span>
                  </div>
                  <div className="w-full h-8 relative" style={{
                    background: '#FFF',
                    border: '3px solid #000',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
                  }}>
                    <div 
                      className="h-full transition-all duration-1000 flex items-center justify-end pr-2"
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                        border: '2px solid rgba(255,255,255,0.5)',
                        boxShadow: 'inset 0 -2px 0 rgba(0,0,0,0.2)'
                      }}
                    >
                      <span className="text-xs">⭐</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{
            color: '#FFF',
            textShadow: '4px 4px 0px #00D800, 8px 8px 0px #000'
          }}>
            &lt; EXPERIENCE /&gt;
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <BrickBlock key={index} className="p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">💼</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2" style={{ textShadow: '2px 2px 0 #000' }}>
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap justify-between items-center gap-3 mt-3">
                      <p className="font-bold text-yellow-300 text-lg">{exp.company}</p>
                      <p className="font-bold px-3 py-1 text-xs" style={{
                        background: '#000',
                        color: '#FBD000',
                        border: '2px solid #FBD000'
                      }}>{exp.date}</p>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 ml-16">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-white flex items-start gap-3 font-bold text-sm" style={{ textShadow: '1px 1px 0 #000' }}>
                      <span className="text-yellow-300 text-xl flex-shrink-0">⭐</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </BrickBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{
            color: '#FFF',
            textShadow: '4px 4px 0px #FBD000, 8px 8px 0px #000'
          }}>
            &lt; PROJECTS /&gt;
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <QuestionBlock key={index} className="p-8 hover:scale-105 hover:rotate-2 transition-all duration-300 cursor-pointer">
                <div className="relative z-20 text-left">
                  <div className="text-6xl mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ textShadow: '2px 2px 0 #000' }}>
                    {project.title}
                  </h3>
                  <p className="font-bold text-xs mb-4 inline-block px-3 py-1" style={{
                    background: '#000',
                    color: '#FBD000',
                    border: '2px solid #FBD000'
                  }}>
                    {project.tech}
                  </p>
                  <p className="text-white leading-relaxed font-bold text-sm" style={{ textShadow: '1px 1px 0 #000' }}>
                    {project.description}
                  </p>
                </div>
              </QuestionBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{
            color: '#FFF',
            textShadow: '4px 4px 0px #F83800, 8px 8px 0px #000'
          }}>
            &lt; CONTACT /&gt;
          </h2>
          
          <BrickBlock className="p-10 mb-12">
            <p className="text-xl md:text-2xl text-white leading-relaxed font-bold" style={{ textShadow: '2px 2px 0 #000' }}>
              🚀 Looking for new adventures!
              <br />
              ⭐ Let's connect and build something amazing! 🍄
            </p>
          </BrickBlock>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:esragulerezgi@gmail.com" className="p-8 hover:scale-110 transition-all duration-300" style={{
              background: '#F83800',
              border: '5px solid #FFF',
              boxShadow: '6px 6px 0 0 #7C2C00'
            }}>
              <div className="text-5xl mb-4">📧</div>
              <p className="text-xs text-yellow-300 font-bold mb-2">EMAIL</p>
              <p className="text-white font-bold text-xs break-all" style={{ textShadow: '1px 1px 0 #000' }}>
                esragulerezgi@gmail.com
              </p>
            </a>
            
            <a href="tel:+905348470187" className="p-8 hover:scale-110 transition-all duration-300" style={{
              background: '#00D800',
              border: '5px solid #FFF',
              boxShadow: '6px 6px 0 0 #005800'
            }}>
              <div className="text-5xl mb-4">📱</div>
              <p className="text-xs text-yellow-300 font-bold mb-2">PHONE</p>
              <p className="text-white font-bold" style={{ textShadow: '1px 1px 0 #000' }}>
                +90 534 847 01 87
              </p>
            </a>
            
            <div className="p-8 hover:scale-110 transition-all duration-300" style={{
              background: '#FBD000',
              border: '5px solid #FFF',
              boxShadow: '6px 6px 0 0 #A87800'
            }}>
              <div className="text-5xl mb-4">🌴</div>
              <p className="text-xs font-bold mb-2" style={{ color: '#000' }}>LOCATION</p>
              <p className="font-bold" style={{ color: '#000' }}>
                Antalya, Türkiye
              </p>
            </div>
          </div>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <a href="https://github.com/Esradslmn/" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 font-bold text-sm hover:scale-110 transition-all duration-300"
               style={{
                 background: '#000',
                 color: '#FFF',
                 border: '4px solid #FFF',
                 boxShadow: '6px 6px 0 0 #7C2C00'
               }}>
              GITHUB PROFILE
            </a>
            <a href="https://www.linkedin.com/in/esraguler1/" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 font-bold text-sm hover:scale-110 transition-all duration-300"
               style={{
                 background: '#0077B5',
                 color: '#FFF',
                 border: '4px solid #FFF',
                 boxShadow: '6px 6px 0 0 #00558C'
               }}>
              LINKEDIN PROFILE
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Mario Ground */}
      <footer className="py-10 text-center relative" style={{
        background: '#7C2C00',
        borderTop: '8px solid #D85800'
      }}>
        <div className="relative z-10">
          <p className="text-white font-bold text-sm mb-2" style={{ textShadow: '2px 2px 0 #000' }}>
            MADE WITH <Heart className="inline w-5 h-5 text-red-500 animate-pulse" fill="#F83800" /> BY ESRA GÜLER
          </p>
          <p className="text-yellow-300 font-bold text-xs" style={{ textShadow: '1px 1px 0 #000' }}>
            © 2025 ALL RIGHTS RESERVED ⭐
          </p>
        </div>
        
        {/* Ground Blocks */}
        <div className="absolute bottom-0 left-0 right-0 h-4" style={{
          background: 'repeating-linear-gradient(90deg, #D85800 0px, #D85800 32px, #A84000 32px, #A84000 64px)',
        }} />
      </footer>
    </div>
  );
}