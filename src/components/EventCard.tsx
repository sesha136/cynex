import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Flame, Users, User, Clock, Trophy } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  type: 'team' | 'solo';
  duration?: string;
  rules: string[];
  prizes?: string;
  icon: React.ReactNode;
}

export default function EventCard({ title, description, type, duration, rules, prizes, icon }: EventCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card 
          className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 border-border bg-card/50 backdrop-blur-sm group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            background: isHovered 
              ? 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--accent) / 0.2) 100%)'
              : 'hsl(var(--card) / 0.5)',
            boxShadow: isHovered 
              ? 'var(--shadow-fire)'
              : '0 4px 20px hsl(var(--background) / 0.3)'
          }}
        >
          {/* Fire glow effect */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Animated ember particles */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-2 h-2 bg-primary rounded-full animate-ember-rise" />
          </div>
          <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-1 h-1 bg-accent rounded-full animate-ember-rise" style={{ animationDelay: '0.5s' }} />
          </div>

          <CardHeader className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-primary text-2xl group-hover:animate-fire-pulse">
                  {icon}
                </div>
                <div>
                  <CardTitle className="text-foreground text-xl font-bold tracking-wide">
                    {title}
                  </CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant={type === 'team' ? 'default' : 'secondary'} className="text-xs">
                      {type === 'team' ? <Users className="w-3 h-3 mr-1" /> : <User className="w-3 h-3 mr-1" />}
                      {type === 'team' ? 'Team' : 'Solo'}
                    </Badge>
                    {duration && (
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {duration}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <Flame className="text-primary w-6 h-6 group-hover:animate-fire-pulse" />
            </div>
          </CardHeader>
          
          <CardContent className="relative z-10">
            <CardDescription className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </CardDescription>
            {prizes && (
              <div className="mt-3 flex items-center gap-1 text-primary text-sm font-medium">
                <Trophy className="w-4 h-4" />
                {prizes}
              </div>
            )}
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-2xl bg-card border-border backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
            <div className="text-primary">{icon}</div>
            {title} Rules
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 max-h-96 overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              {type === 'team' ? <Users className="w-4 h-4 text-primary" /> : <User className="w-4 h-4 text-primary" />}
              <span className="text-sm font-medium text-foreground">
                {type === 'team' ? 'Team Event' : 'Solo Event'}
              </span>
            </div>
            {duration && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{duration}</span>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Flame className="w-5 h-5 text-primary" />
              Event Rules
            </h4>
            <ul className="space-y-2">
              {rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {prizes && (
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <div className="flex items-center gap-2 text-primary font-medium">
                <Trophy className="w-5 h-5" />
                Prizes & Recognition
              </div>
              <p className="text-sm text-muted-foreground mt-1">{prizes}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}