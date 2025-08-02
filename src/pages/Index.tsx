import { Button } from '@/components/ui/button';
import EventCard from '@/components/EventCard';
import AnimatedDragon from '@/components/AnimatedDragon';
import { Download, UserPlus, Flame, Code, Lightbulb, Trophy, Utensils, HelpCircle, Wrench, Network, Move, Film, DollarSign, Gamepad2, Camera } from 'lucide-react';

const events = [
  {
    title: "Technical Charades",
    description: "Team-based guessing game with technical terms - fast, fun, fiery!",
    type: "team" as const,
    duration: "45 minutes",
    icon: <Lightbulb />,
    rules: [
      "Teams of 4-6 members allowed",
      "One team member acts out technical terms without speaking",
      "Other team members must guess the term within the time limit",
      "Each team gets 2 minutes per turn",
      "No verbal clues or sound effects allowed",
      "Points awarded based on correct guesses",
      "Technical terms cover programming, networking, AI, and modern tech",
      "Gestures and body language only - no props allowed"
    ],
    prizes: "Winner gets tech merchandise and certificates"
  },
  {
    title: "Debugging",
    description: "Solo event - fix the buggy code with minimum changes. Top 2 awarded.",
    type: "solo" as const,
    duration: "2 hours",
    icon: <Code />,
    rules: [
      "Individual participation only",
      "Multiple programming languages available (C++, Java, Python)",
      "Fix bugs with minimum code changes possible",
      "Scoring based on efficiency and correctness",
      "No external resources or internet access",
      "Use of IDE debugging tools is allowed",
      "Code must compile and run successfully",
      "Partial credit given for partially working solutions",
      "Time bonus for early submissions"
    ],
    prizes: "Top 2 participants receive cash prizes and internship opportunities"
  },
  {
    title: "Poster Making",
    description: "Create creative and impactful posters on given themes using digital tools.",
    type: "team" as const,
    duration: "3 hours",
    icon: <Lightbulb />,
    rules: [
      "Teams of 2-3 members allowed",
      "Digital poster creation using any software",
      "Theme will be announced at the start",
      "Original content and design required",
      "Posters must be submitted in high resolution (minimum 300 DPI)",
      "Copyright-free images and fonts only",
      "Final submission in PDF and PNG formats",
      "Judged on creativity, relevance, and visual impact",
      "Presentation of concept may be required"
    ],
    prizes: "Winning team gets design software licenses and certificates"
  },
  {
    title: "Technical Quiz",
    description: "5 rounds - MCQ, Voiceover, and Rapid Fire. Solo event. No cheating allowed!",
    type: "solo" as const,
    duration: "1.5 hours",
    icon: <HelpCircle />,
    rules: [
      "Individual participation only",
      "5 rounds: MCQ, True/False, Voiceover, Image Round, Rapid Fire",
      "Each round has different point weightage",
      "No external help or devices allowed",
      "Questions cover latest technology trends, programming, and general tech",
      "Negative marking for wrong answers in MCQ rounds",
      "Time limit strictly enforced for each round",
      "Any form of cheating leads to immediate disqualification",
      "Mobile phones must be surrendered before the quiz"
    ],
    prizes: "Solo winner gets laptop and runner-up gets tablet"
  },
  {
    title: "Workshop",
    description: "Hands-on technical workshop session with industry experts and practical learning.",
    type: "team" as const,
    duration: "4 hours",
    icon: <Wrench />,
    rules: [
      "Teams of 3-4 members preferred",
      "Workshop materials and tools provided",
      "Active participation required throughout",
      "Follow safety protocols and guidelines",
      "Complete project deliverable by end of session",
      "Document learning outcomes and insights",
      "Present final project to peers",
      "Industry mentors will guide throughout"
    ],
    prizes: "Certificate of completion and internship opportunities"
  },
  {
    title: "Technical Connections",
    description: "Network building and technical discussion event connecting minds and ideas.",
    type: "team" as const,
    duration: "2.5 hours",
    icon: <Network />,
    rules: [
      "Teams of 2-4 members allowed",
      "Focus on technology trends and innovations",
      "Prepare elevator pitch for your technical idea",
      "Networking rounds with different teams",
      "Problem-solving sessions in mixed groups",
      "Share contact information and collaborate",
      "Professional presentation required",
      "Judges evaluate communication and technical depth"
    ],
    prizes: "Networking opportunities and mentorship programs"
  },
  {
    title: "Cooking Without Fire",
    description: "Team of 2-5. No heating. Clean-up mandatory. Presentation, taste, hygiene matters.",
    type: "team" as const,
    duration: "2 hours",
    icon: <Utensils />,
    rules: [
      "Teams of 2-5 members only",
      "No heating or cooking appliances allowed",
      "Create a complete meal with appetizer, main course, and dessert",
      "All ingredients provided by organizers",
      "Hygiene and food safety protocols must be followed",
      "Workspace must be cleaned after completion",
      "Presentation and plating is part of judging criteria",
      "Team must explain their dish and cooking process to judges",
      "Time management is crucial - late submissions penalized",
      "Judges evaluate on taste, presentation, creativity, and hygiene"
    ],
    prizes: "Winning team gets kitchen appliances and culinary workshop access"
  },
  {
    title: "Make a Move",
    description: "Strategic thinking and quick decision-making challenge with multiple scenarios.",
    type: "team" as const,
    duration: "1.5 hours",
    icon: <Move />,
    rules: [
      "Teams of 3-5 members allowed",
      "Multiple strategic scenarios presented",
      "Quick decision-making under time pressure",
      "Teams must justify their choices",
      "Points awarded for logical reasoning",
      "Leadership and teamwork skills evaluated",
      "No external resources allowed",
      "Each scenario has limited time for discussion"
    ],
    prizes: "Leadership development workshop access"
  },
  {
    title: "Movie Quiz",
    description: "Test your cinema knowledge across genres, eras, and film trivia.",
    type: "team" as const,
    duration: "1 hour",
    icon: <Film />,
    rules: [
      "Teams of 2-4 members allowed",
      "Questions cover all film genres and eras",
      "Multiple rounds: Visual, Audio, and Rapid Fire",
      "International and regional cinema included",
      "No mobile phones or external help",
      "Points vary based on difficulty level",
      "Tie-breaker questions for final rounds",
      "Focus on movies from 1980s to present"
    ],
    prizes: "Movie theater vouchers and film festival passes"
  },
  {
    title: "IPL Auctions",
    description: "Simulate cricket team auctions with strategy, budget management, and player selection.",
    type: "team" as const,
    duration: "2 hours",
    icon: <DollarSign />,
    rules: [
      "Teams of 4-6 members representing franchises",
      "Fixed budget allocation for each team",
      "Real IPL player database with statistics",
      "Strategic bidding and team composition",
      "Must follow IPL auction rules and regulations",
      "Team presentation of final squad required",
      "Judges evaluate strategy and team balance",
      "Budget management skills crucial for winning"
    ],
    prizes: "Sports merchandise and cricket match tickets"
  },
  {
    title: "GAMING (Online)",
    description: "Competitive online gaming tournament across multiple popular game titles.",
    type: "solo" as const,
    duration: "3 hours",
    icon: <Gamepad2 />,
    rules: [
      "Individual participation only",
      "Multiple game categories available",
      "Participants must bring own gaming setup",
      "Stable internet connection required",
      "Tournament bracket elimination format",
      "Fair play and anti-cheat policies enforced",
      "Game-specific rules will be announced",
      "Live streaming of final matches"
    ],
    prizes: "Gaming peripherals and cash prizes for winners"
  },
  {
    title: "PHOTOGRAPHY (Online)",
    description: "Digital photography contest with theme-based submissions and creative expression.",
    type: "solo" as const,
    duration: "24 hours",
    icon: <Camera />,
    rules: [
      "Individual submissions only",
      "Theme will be announced at start time",
      "Original photographs taken during contest period",
      "Submit high-resolution images (minimum 2MB)",
      "Basic editing allowed (no heavy manipulation)",
      "Include brief description of concept",
      "Maximum 3 submissions per participant",
      "Judges evaluate creativity, composition, and theme relevance"
    ],
    prizes: "Professional camera equipment and photography workshop"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedDragon />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">
            <span 
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fire-pulse"
              style={{ fontFamily: 'serif' }}
            >
              CYNEX
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-wide">
            Unleash the Fire
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            1st National Level Symposium
          </p>
          <p className="text-base text-muted-foreground">
            August | TRP Auditorium, SRMIST Ramapuram
          </p>
        </div>

        {/* Event section title */}
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <Flame className="text-primary animate-fire-pulse" />
            EVENTS
            <Flame className="text-primary animate-fire-pulse" />
          </h3>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              type={event.type}
              duration={event.duration}
              rules={event.rules}
              prizes={event.prizes}
              icon={event.icon}
            />
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="/rulebook.pdf" target="_blank" rel="noopener noreferrer">
        <Button variant="fire" size="lg" className="min-w-48">
        <Download className="w-5 h-5" />
        Download Rule Book (PDF)
        </Button>
        </a>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSoLWbvJPipYYQ94EPjwVdP9JbrNZay42bfJ532ezG6rFkQQ/viewform">
       <Button variant="ember" size="lg" className="min-w-48">
        <UserPlus className="w-5 h-5" />
        Register Now
      </Button>
      </a>
      </div>


        {/* Footer */}
        <div className="mt-16 text-center text-muted-foreground text-sm">
          <p>Ready to ignite your potential? Join us for an unforgettable experience!</p>
        </div>
      </div>
    </div>
  );
}
