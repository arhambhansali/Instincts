import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Laptop, Palette, Calendar, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const EventWebsite = () => {
  const [isTechnical, setIsTechnical] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  
  const technicalEvents = [
    {
      time: "9:00 AM",
      title: "Hackathon Kickoff",
      location: "Computer Lab Complex",
      description: "24-hour coding challenge begins"
    },
    {
      time: "10:30 AM",
      title: "AI Workshop",
      location: "Tech Hub - Room 301",
      description: "Introduction to Machine Learning fundamentals"
    },
    {
      time: "2:00 PM",
      title: "Competitive Programming",
      location: "Lab 201",
      description: "Algorithm challenges and problem solving"
    },
    {
      time: "4:30 PM",
      title: "IoT Project Showcase",
      location: "Innovation Lab",
      description: "Display of student IoT projects"
    },
    {
      time: "6:00 PM",
      title: "Tech Talk",
      location: "Main Auditorium",
      description: "Industry experts on emerging technologies"
    }
  ];

  const nonTechnicalEvents = [
    {
      time: "9:30 AM",
      title: "Art Exhibition Opening",
      location: "Creative Arts Center",
      description: "Student artwork showcase begins"
    },
    {
      time: "11:00 AM",
      title: "Dance Workshop",
      location: "Performance Hall",
      description: "Contemporary dance masterclass"
    },
    {
      time: "2:30 PM",
      title: "Poetry Slam",
      location: "Literary Corner",
      description: "Creative writing and poetry performance"
    },
    {
      time: "4:00 PM",
      title: "Battle of Bands",
      location: "Open Air Theatre",
      description: "Live music competition"
    },
    {
      time: "7:00 PM",
      title: "Fashion Show",
      location: "Grand Hall",
      description: "Student designer showcase"
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background image with overlay */}
      <img 
        src="/api/placeholder/1920/1080" 
        alt="Event background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 transition-colors duration-500
        ${isTechnical ? 
          'bg-gradient-to-br from-teal-900/90 via-cyan-800/90 to-sky-900/90' : 
          'bg-gradient-to-br from-amber-500/95 via-yellow-500/95 to-amber-600/95'}`}
      />

      {/* Main content */}
      <div className="relative min-h-screen flex items-center justify-center p-8">
        <div className="max-w-2xl w-full backdrop-blur-xl bg-white/10 p-12 rounded-3xl shadow-2xl">
          
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-7xl font-extrabold mb-3 text-white tracking-tight">
              INSTINCTS
            </h1>
            <h2 className="text-2xl font-light text-white/80 mb-12">
              Indus University
            </h2>
            
            {/* Custom Toggle with embedded icons */}
            <div className="inline-flex items-center bg-black/20 p-2 rounded-full backdrop-blur">
              <div className={`relative flex items-center transition-all duration-300
                ${isTechnical ? 'text-gray-400' : 'text-yellow-200'}`}>
                <Palette className="w-5 h-5" />
              </div>
              
              <Switch
                checked={isTechnical}
                onCheckedChange={setIsTechnical}
                className={`mx-3 h-6 w-12 relative transition-colors duration-300
                  data-[state=checked]:bg-cyan-500 data-[state=unchecked]:bg-amber-500`}
              />
              
              <div className={`relative flex items-center transition-all duration-300
                ${isTechnical ? 'text-cyan-200' : 'text-gray-400'}`}>
                <Laptop className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Registration Card */}
          <Card className="bg-white/10 backdrop-blur-md border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center text-white">
                {isTechnical ? 'Technical Events Registration' : 'Non-Technical Events Registration'}
              </h3>
              <p className="text-white/80 text-center mb-6">
                Join us for an incredible experience at Instincts 2025. 
                {isTechnical ? 
                  ' Showcase your technical prowess and innovation.' : 
                  ' Celebrate creativity and artistic excellence.'}
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  className={`px-8 py-6 text-lg font-semibold transition-all duration-300 text-white
                    ${isTechnical ? 
                      'bg-cyan-600 hover:bg-cyan-700' : 
                      'bg-amber-500 hover:bg-amber-600'}`}>
                  Register Now
                </Button>
                <Button 
                  onClick={() => setShowSchedule(true)}
                  className="px-6 py-6 text-lg font-semibold bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all duration-300 text-white">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Schedule Dialog */}
      <Dialog open={showSchedule} onOpenChange={setShowSchedule}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">
              {isTechnical ? 'Technical Events Schedule' : 'Cultural Events Schedule'}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {(isTechnical ? technicalEvents : nonTechnicalEvents).map((event, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg
                  ${isTechnical ? 
                    'bg-cyan-50 hover:bg-cyan-100' : 
                    'bg-amber-50 hover:bg-amber-100'
                  }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-900"
                      contentEditable
                      suppressContentEditableWarning>
                    {event.title}
                  </h4>
                  <span className={`text-sm font-medium px-2 py-1 rounded
                    ${isTechnical ? 
                      'bg-cyan-100 text-cyan-800' : 
                      'bg-amber-100 text-amber-800'
                    }`}>
                    {event.time}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1"
                   contentEditable
                   suppressContentEditableWarning>
                  {event.location}
                </p>
                <p className="text-sm text-gray-500"
                   contentEditable
                   suppressContentEditableWarning>
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventWebsite;
