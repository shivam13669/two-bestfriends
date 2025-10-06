import { Heart, Users, Calendar, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const memories = [
    {
      year: "2024",
      title: "First Meeting",
      description: "We met at MSSCE College, Sitamarhi on practical submission day - instant connection"
    },
    {
      year: "2024-2025",
      title: "Phone Call Chronicles",
      description: "Building a strong bond through endless phone conversations, sometimes talking for hours"
    },
    {
      year: "2025-Present",
      title: "Growing Stronger",
      description: "Another practical submission day meeting, and the calls continue - building memories every day"
    }
  ];

  const funFacts = [
    { icon: "📞", text: "Hours-long phone conversations" },
    { icon: "💬", text: "Endless support and understanding" },
    { icon: "🎓", text: "MSSCE College memories" },
    { icon: "💪", text: "Unbreakable bond despite distance" },
    { icon: "🤝", text: "Best friends in record time" },
    { icon: "❤️", text: "Brotherhood built on trust" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <Badge className="mb-6 px-6 py-2 text-base gradient-warm border-0">
            <Heart className="w-4 h-4 mr-2" />
            Best Friends Forever
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
            Shivam & Anant
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A celebration of brotherhood, laughter, and unforgettable memories
          </p>
          
          <div className="mt-12 flex gap-4 justify-center items-center text-sm text-muted-foreground">
            <Users className="w-5 h-5" />
            <span>Unbreakable Bond</span>
            <span className="text-primary">•</span>
            <span>Brothers by Choice</span>
            <span className="text-primary">•</span>
            <span>Friends for Life</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A chance meeting at MSSCE College, Sitamarhi during practical submission day 
              sparked an extraordinary friendship. What makes it special? Despite the distance, 
              Shivam and Anant became best friends in remarkably short time, connecting through 
              countless phone calls - sometimes talking for hours. Their bond proves that true 
              friendship doesn't need daily meetings, just genuine connection and trust.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="p-8 text-center shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-2 border-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Unconditional Support</h3>
              <p className="text-muted-foreground">
                Always there for each other, no matter what life throws their way
              </p>
            </Card>

            <Card className="p-8 text-center shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-2 border-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-warm flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Shared Memories</h3>
              <p className="text-muted-foreground">
                Creating unforgettable moments together, one conversation at a time
              </p>
            </Card>

            <Card className="p-8 text-center shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-2 border-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Brothers Forever</h3>
              <p className="text-muted-foreground">
                A friendship that has evolved into an unbreakable brotherhood
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4 gradient-hero">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Journey Through Time
            </h2>
            <p className="text-lg text-muted-foreground">
              Milestones of an incredible friendship
            </p>
          </div>

          <div className="space-y-8">
            {memories.map((memory, index) => (
              <Card 
                key={index}
                className="p-8 shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-1 animate-fade-in border-l-4 border-l-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <Badge className="w-fit gradient-primary border-0 text-lg font-bold px-6 py-2">
                    {memory.year}
                  </Badge>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{memory.title}</h3>
                    <p className="text-muted-foreground">{memory.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-24 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Fun Facts
            </h2>
            <p className="text-lg text-muted-foreground">
              What makes Shivam & Anant's friendship special
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {funFacts.map((fact, index) => (
              <Card 
                key={index}
                className="p-6 shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-2 text-center border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{fact.icon}</div>
                <p className="font-medium text-lg">{fact.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center gradient-primary">
        <p className="text-white text-lg font-medium">
          Celebrating a friendship that will last forever
        </p>
        <p className="text-white/80 mt-2">Shivam & Anant</p>
      </footer>
    </div>
  );
};

export default Index;
