import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Plus, Lightbulb } from 'lucide-react';
import { gsap } from 'gsap';

interface Activity {
  id: string;
  time: string;
  activity: string;
  location: string;
  tips: string;
  day: number;
}

const ItineraryModule = () => {
  const { t } = useTranslation();
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: '1',
      time: '09:00',
      activity: 'Beach sunrise meditation',
      location: 'Calangute Beach',
      tips: 'Best time for peaceful moments and stunning photos',
      day: 1,
    },
    {
      id: '2',
      time: '12:00',
      activity: 'Local spice market tour',
      location: 'Anjuna Flea Market',
      tips: 'Bargain for spices and try local street food',
      day: 1,
    },
    {
      id: '3',
      time: '16:00',
      activity: 'Water sports adventure',
      location: 'Baga Beach',
      tips: 'Book in advance for better prices',
      day: 1,
    },
  ]);

  const [newActivity, setNewActivity] = useState({
    time: '',
    activity: '',
    location: '',
    tips: '',
    day: 1,
  });

  const [selectedDay, setSelectedDay] = useState(1);

  useEffect(() => {
    // GSAP animations for activity cards
    gsap.fromTo(
      '.activity-card',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.6, ease: 'power2.out' }
    );
  }, [activities, selectedDay]);

  const handleAddActivity = () => {
    if (newActivity.activity && newActivity.time) {
      const activity: Activity = {
        id: Date.now().toString(),
        ...newActivity,
        day: selectedDay,
      };
      setActivities([...activities, activity]);
      setNewActivity({ time: '', activity: '', location: '', tips: '', day: selectedDay });
    }
  };

  const getDayActivities = (day: number) => {
    return activities.filter(activity => activity.day === day);
  };

  const days = [1, 2, 3, 4, 5];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">{t('itinerary.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('itinerary.description')}</p>
          </div>

          {/* Day Selector */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 bg-muted rounded-lg p-1">
              {days.map((day) => (
                <Button
                  key={day}
                  variant={selectedDay === day ? "default" : "ghost"}
                  className={selectedDay === day ? "gradient-ocean text-white" : ""}
                  onClick={() => setSelectedDay(day)}
                >
                  {t('itinerary.day', { number: day })}
                </Button>
              ))}
            </div>
          </div>

          {/* Activities Timeline */}
          <div className="space-y-6 mb-12">
            {getDayActivities(selectedDay).map((activity, index) => (
              <div key={activity.id} className="activity-card">
                <Card className="travel-card border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          <Clock className="w-3 h-3 mr-1" />
                          {activity.time}
                        </Badge>
                        <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground">
                          <MapPin className="w-3 h-3 mr-1" />
                          {activity.location}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{activity.activity}</CardTitle>
                  </CardHeader>
                  {activity.tips && (
                    <CardContent className="pt-0">
                      <div className="flex items-start space-x-2 bg-accent/10 rounded-lg p-3">
                        <Lightbulb className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-accent-foreground">{activity.tips}</p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </div>
            ))}
          </div>

          {/* Add Activity Form */}
          <Card className="travel-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>{t('itinerary.addActivity')}</span>
              </CardTitle>
              <CardDescription>Add a new activity to your itinerary</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">{t('itinerary.time')}</label>
                  <Input
                    type="time"
                    value={newActivity.time}
                    onChange={(e) => setNewActivity({ ...newActivity, time: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Input
                    placeholder="Enter location"
                    value={newActivity.location}
                    onChange={(e) => setNewActivity({ ...newActivity, location: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t('itinerary.activity')}</label>
                <Input
                  placeholder="What will you do?"
                  value={newActivity.activity}
                  onChange={(e) => setNewActivity({ ...newActivity, activity: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t('itinerary.tips')}</label>
                <Textarea
                  placeholder="Any helpful tips?"
                  value={newActivity.tips}
                  onChange={(e) => setNewActivity({ ...newActivity, tips: e.target.value })}
                />
              </div>
              <Button 
                onClick={handleAddActivity}
                className="w-full gradient-ocean text-white hover:scale-[1.02] transition-all duration-300"
              >
                <Plus className="w-4 h-4 mr-2" />
                {t('itinerary.addActivity')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ItineraryModule;