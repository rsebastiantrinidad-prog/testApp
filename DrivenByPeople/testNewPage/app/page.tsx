import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Clock, TrendingUp, CheckCircle, Star, Calendar, Instagram } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-2xl md:text-3xl text-foreground">Driven by People</h1>
              <p className="text-sm md:text-base text-muted-foreground">Claridad estratégica</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#servicios" className="text-base font-medium hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#historia" className="text-base font-medium hover:text-primary transition-colors">
              Historia
            </a>
            <a href="#estadisticas" className="text-base font-medium hover:text-primary transition-colors">
              Estadísticas
            </a>
            <a href="#contacto" className="text-base font-medium hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-base px-6 py-3">
            <a href="https://calendly.com/rsebastian-trinidad/30min" target="_blank" rel="noopener noreferrer">
              Comienza Ahora
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary text-primary-foreground border-primary text-base px-4 py-2">
              Optimización de Gestión de Proyectos
            </Badge>
            <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-balance mb-8 text-foreground leading-tight">
              Porque detrás de cada proyecto hay personas que se comunican
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground text-balance mb-10 max-w-4xl mx-auto leading-relaxed">
              Convertimos el caos organizacional en claridad estratégica
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-xl px-10 py-8">
                <a href="https://calendly.com/rsebastian-trinidad/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-6 h-6 mr-3" />
                  Agenda tu Diagnóstico Gratuito
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-xl px-10 py-8 bg-transparent">
                <a href="https://www.instagram.com/drivenbypeople_" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-6 h-6 mr-3" />
                  Síguenos en Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="estadisticas" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
              La Realidad del Mercado
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Datos que revelan la urgente necesidad de optimización organizacional
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-6xl md:text-7xl font-heading font-black text-primary mb-4">60%</div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  de las empresas se sienten desconectadas de la estrategia real
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-6xl md:text-7xl font-heading font-black text-secondary mb-4">$2.5M</div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  pérdida anual para empresas medianas por procesos poco claros
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-6xl md:text-7xl font-heading font-black text-primary mb-4">45%</div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  del tiempo semanal se desperdicia en reuniones innecesarias
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-secondary/10 to-primary/10">
              <CardContent className="p-0">
                <div className="text-5xl md:text-6xl font-heading font-black text-secondary mb-4">10 horas</div>
                <p className="text-base md:text-lg font-medium text-foreground leading-relaxed">
                  Imagina recuperar 10 horas semanales con un equipo verdaderamente motivado
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section id="historia" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-secondary text-secondary-foreground border-secondary text-base px-4 py-2">
                  Historia del Fundador
                </Badge>
                <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground leading-tight">
                  De la Frustración al Propósito
                </h2>
                <blockquote className="text-xl md:text-2xl lg:text-3xl text-muted-foreground italic mb-8 border-l-4 border-primary pl-6 leading-relaxed">
                  "Yo ya estuve ahí: equipos agotados, reuniones eternas y la frustración de correr para lograr
                  objetivos. Lo viví, lo sufrí... y lo transformé en propósito."
                </blockquote>
                <p className="text-muted-foreground mb-6 font-medium text-lg">— Sebastián Trinidad, Fundador</p>
                <p className="text-muted-foreground mb-8 text-lg md:text-xl leading-relaxed">
                  Sebastián convierte equipos caóticos en culturas colaborativas. Su método: gestión de proyectos que pone a las personas primero, donde cada talento encuentra su lugar y los resultados fluyen.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <img
                    src="/sebastian-trinidad-founder.jpg"
                    alt="Sebastián Trinidad - Fundador de Driven by People"
                    className="w-80 h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
              ¿Te Suena Familiar?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Los desafíos más comunes que enfrentan las empresas hoy
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Retrasos Constantes", desc: "Proyectos que nunca terminan a tiempo" },
              { icon: Users, title: "Equipos Agotados", desc: "Baja productividad y burnout generalizado" },
              { icon: Target, title: "Reuniones Infinitas", desc: "Horas perdidas sin resultados concretos" },
              { icon: TrendingUp, title: "Procesos Confusos", desc: "Falta de claridad en comunicación" },
            ].map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl md:text-2xl mb-4 text-foreground">{item.title}</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground border-primary text-base px-4 py-2">
              Nuestra Solución
            </Badge>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
              Transformación en 60 Días
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Un enfoque integral que combina metodología PMO con análisis DISC
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Implementación PMO 60 días",
                desc: "Estructura completa de gestión de proyectos adaptada a tu empresa",
                features: ["Procesos documentados", "Herramientas optimizadas", "Métricas de seguimiento"],
              },
              {
                title: "Perfilado DISC del Equipo",
                desc: "Análisis de personalidades para optimizar la comunicación y colaboración",
                features: ["Evaluación individual", "Mapeo de equipos", "Estrategias de comunicación"],
              },
              {
                title: "Arquitectura de Procesos",
                desc: "Diseño de flujos de trabajo que eliminan cuellos de botella",
                features: ["Mapeo de procesos", "Automatizaciones", "Documentación clara"],
              },
              {
                title: "Coaching de Liderazgo",
                desc: "Desarrollo de habilidades directivas para liderar el cambio",
                features: ["Sesiones personalizadas", "Herramientas de liderazgo", "Seguimiento continuo"],
              },
            ].map((solution, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="font-heading font-semibold text-2xl md:text-3xl mb-4 text-foreground">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg md:text-xl leading-relaxed">{solution.desc}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-base md:text-lg">
                        <CheckCircle className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DISC Preview Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground">
              Metodología DISC
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
              Descubre cómo los diferentes tipos de personalidad pueden trabajar en perfecta armonía
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {[
                { letter: "D", color: "bg-red-500", trait: "Dominante" },
                { letter: "I", color: "bg-yellow-500", trait: "Influyente" },
                { letter: "S", color: "bg-green-500", trait: "Estable" },
                { letter: "C", color: "bg-blue-500", trait: "Concienzudo" },
              ].map((disc, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 ${disc.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-white font-heading font-black text-3xl md:text-4xl">{disc.letter}</span>
                  </div>
                  <p className="text-base md:text-lg font-medium text-foreground">{disc.trait}</p>
                </div>
              ))}
            </div>
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-xl px-10 py-8">
              <a href="https://calendly.com/rsebastian-trinidad/30min" target="_blank" rel="noopener noreferrer">
                Descubre tu Perfil DISC
                <ArrowRight className="w-5 h-5 ml-3" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-8">
            ¿Listo para Transformar tu Empresa?
          </h2>
          <p className="text-2xl md:text-3xl mb-10 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Agenda una consulta gratuita de 30 minutos y descubre cómo podemos optimizar tus procesos y potenciar a tu
            equipo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" asChild className="text-xl px-10 py-8">
              <a href="https://calendly.com/rsebastian-trinidad/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-6 h-6 mr-3" />
                Agenda tu Diagnóstico Gratuito
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-xl px-10 py-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <a href="https://www.instagram.com/drivenbypeople_" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 mr-3" />
                Síguenos en Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground">Driven by People</h3>
                  <p className="text-sm md:text-base text-muted-foreground">Claridad estratégica</p>
                </div>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Transformamos el caos organizacional en claridad estratégica a través de metodologías probadas y
                análisis de tus indicadores claves
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4 text-lg md:text-xl">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-base md:text-lg">
                <li>
                  <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#historia" className="text-muted-foreground hover:text-primary transition-colors">
                    Historia
                  </a>
                </li>
                <li>
                  <a href="#estadisticas" className="text-muted-foreground hover:text-primary transition-colors">
                    Estadísticas
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4 text-lg md:text-xl">Contacto</h4>
              <div className="space-y-2 text-base md:text-lg text-muted-foreground">
                <p>Sebastián Trinidad</p>
                <p>Fundador</p>
                <div className="flex space-x-4 mt-4">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://www.instagram.com/drivenbypeople_" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://calendly.com/rsebastian-trinidad/30min" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-base text-muted-foreground">© 2025 Driven by People. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
