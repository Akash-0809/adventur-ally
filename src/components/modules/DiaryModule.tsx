import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calendar, Save, Edit3 } from 'lucide-react';
import { gsap } from 'gsap';

interface DiaryEntry {
  id: string;
  title: string;
  content: string;
  date: string;
  location: string;
  mood: string;
}

const DiaryModule = () => {
  const { t } = useTranslation();
  const [entries, setEntries] = useState<DiaryEntry[]>([
    {
      id: '1',
      title: 'First Day in Paradise',
      content: 'The moment I stepped onto the warm sand of Calangute Beach, I knew this trip would be magical. The sunset painted the sky in shades of orange and pink that no camera could capture. The local fishermen were heading out for their evening catch, their colorful boats creating a beautiful contrast against the golden horizon.',
      date: '2024-03-15',
      location: 'Goa, India',
      mood: 'excited',
    },
    {
      id: '2',
      title: 'Spice Market Adventure',
      content: 'Today I explored the vibrant spice market in Old Goa. The aroma of cardamom, cinnamon, and turmeric filled the air. I met Maria, a local vendor who taught me about traditional Goan spices and shared her grandmother\'s curry recipe. These authentic connections make travel so much more meaningful.',
      date: '2024-03-16',
      location: 'Old Goa, India',
      mood: 'curious',
    },
  ]);

  const [newEntry, setNewEntry] = useState({
    title: '',
    content: '',
    location: '',
    mood: 'happy',
  });

  const [isWriting, setIsWriting] = useState(false);

  useEffect(() => {
    // GSAP animations for diary entries
    gsap.fromTo(
      '.diary-entry',
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.3, duration: 0.8, ease: 'power2.out' }
    );
  }, [entries]);

  const handleSaveEntry = () => {
    if (newEntry.title && newEntry.content) {
      const entry: DiaryEntry = {
        id: Date.now().toString(),
        ...newEntry,
        date: new Date().toISOString().split('T')[0],
      };
      setEntries([entry, ...entries]);
      setNewEntry({ title: '', content: '', location: '', mood: 'happy' });
      setIsWriting(false);
    }
  };

  const getMoodColor = (mood: string) => {
    const colors = {
      excited: 'bg-secondary/20 text-secondary-foreground border-secondary/30',
      happy: 'bg-accent/20 text-accent-foreground border-accent/30',
      curious: 'bg-primary/20 text-primary-foreground border-primary/30',
      peaceful: 'bg-muted/20 text-muted-foreground border-muted/30',
    };
    return colors[mood as keyof typeof colors] || colors.happy;
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">{t('diary.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('diary.description')}</p>
          </div>

          {/* Write New Entry */}
          <Card className="travel-card mb-12">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Edit3 className="w-5 h-5 text-primary" />
                  <CardTitle>{t('diary.write')}</CardTitle>
                </div>
                {!isWriting && (
                  <Button 
                    onClick={() => setIsWriting(true)}
                    className="gradient-ocean text-white"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Start Writing
                  </Button>
                )}
              </div>
            </CardHeader>
            {isWriting && (
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Entry title..."
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    value={newEntry.title}
                    onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Location..."
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    value={newEntry.location}
                    onChange={(e) => setNewEntry({ ...newEntry, location: e.target.value })}
                  />
                </div>
                <Textarea
                  placeholder={t('diary.placeholder')}
                  value={newEntry.content}
                  onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
                  className="min-h-32"
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">Mood:</span>
                    <select
                      value={newEntry.mood}
                      onChange={(e) => setNewEntry({ ...newEntry, mood: e.target.value })}
                      className="px-3 py-1 border border-input rounded-md bg-background text-sm"
                    >
                      <option value="excited">🤩 Excited</option>
                      <option value="happy">😊 Happy</option>
                      <option value="curious">🤔 Curious</option>
                      <option value="peaceful">😌 Peaceful</option>
                    </select>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" onClick={() => setIsWriting(false)}>
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleSaveEntry}
                      className="gradient-sunset text-white"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {t('diary.save')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Diary Entries */}
          <div className="space-y-8">
            {entries.map((entry, index) => (
              <div key={entry.id} className="diary-entry">
                <Card className="travel-card">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline" className={getMoodColor(entry.mood)}>
                          {entry.mood}
                        </Badge>
                        <Badge variant="secondary">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(entry.date).toLocaleDateString()}
                        </Badge>
                        {entry.location && (
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                            📍 {entry.location}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{entry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {entry.content}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiaryModule;