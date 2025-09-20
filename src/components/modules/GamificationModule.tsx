import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Star, Medal, Award, Target, Crown } from 'lucide-react';
import { gsap } from 'gsap';

interface Achievement {
  id: string;
  name: string;
  description: string;
  points: number;
  icon: React.ElementType;
  color: string;
  awarded: boolean;
  progress?: number;
  maxProgress?: number;
}

interface LeaderboardEntry {
  user: string;
  points: number;
  badges: number;
  rank: number;
}

const GamificationModule = () => {
  const { t } = useTranslation();
  const [userPoints, setUserPoints] = useState(280);
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: '1',
      name: 'Beach Explorer',
      description: 'Visit 3 different beaches',
      points: 50,
      icon: Trophy,
      color: 'text-yellow-500',
      awarded: true,
      progress: 3,
      maxProgress: 3,
    },
    {
      id: '2',
      name: 'Culture Vulture',
      description: 'Visit 5 cultural sites',
      points: 75,
      icon: Medal,
      color: 'text-purple-500',
      awarded: true,
      progress: 5,
      maxProgress: 5,
    },
    {
      id: '3',
      name: 'Budget Master',
      description: 'Stay within budget for 7 days',
      points: 100,
      icon: Target,
      color: 'text-green-500',
      awarded: false,
      progress: 4,
      maxProgress: 7,
    },
    {
      id: '4',
      name: 'Social Butterfly',
      description: 'Share 10 diary entries',
      points: 60,
      icon: Star,
      color: 'text-pink-500',
      awarded: false,
      progress: 6,
      maxProgress: 10,
    },
    {
      id: '5',
      name: 'Adventure Seeker',
      description: 'Try 5 new activities',
      points: 80,
      icon: Award,
      color: 'text-blue-500',
      awarded: false,
      progress: 2,
      maxProgress: 5,
    },
    {
      id: '6',
      name: 'Travel Legend',
      description: 'Complete 1000 point milestone',
      points: 200,
      icon: Crown,
      color: 'text-amber-500',
      awarded: false,
      progress: 280,
      maxProgress: 1000,
    },
  ]);

  const [leaderboard] = useState<LeaderboardEntry[]>([
    { user: 'Alex Chen', points: 450, badges: 8, rank: 1 },
    { user: 'You', points: 280, badges: 4, rank: 2 },
    { user: 'Maria Santos', points: 230, badges: 5, rank: 3 },
    { user: 'John Smith', points: 180, badges: 3, rank: 4 },
    { user: 'Emma Wilson', points: 120, badges: 2, rank: 5 },
  ]);

  useEffect(() => {
    // GSAP animations for achievement cards
    gsap.fromTo(
      '.achievement-card',
      { rotationY: 180, opacity: 0 },
      { rotationY: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: 'power2.out' }
    );
  }, [achievements]);

  const awardedAchievements = achievements.filter(a => a.awarded);
  const availableAchievements = achievements.filter(a => !a.awarded);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">{t('gamification.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('gamification.description')}</p>
          </div>

          {/* Points Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="travel-card gradient-ocean text-white text-center">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Star className="w-5 h-5" />
                  <span>Total Points</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{userPoints}</div>
                <p className="text-sm opacity-80 mt-2">Keep exploring to earn more!</p>
              </CardContent>
            </Card>

            <Card className="travel-card gradient-sunset text-white text-center">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Trophy className="w-5 h-5" />
                  <span>Badges Earned</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{awardedAchievements.length}</div>
                <p className="text-sm opacity-80 mt-2">Out of {achievements.length} total</p>
              </CardContent>
            </Card>

            <Card className="travel-card gradient-tropical text-white text-center">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Medal className="w-5 h-5" />
                  <span>Leaderboard Rank</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">#2</div>
                <p className="text-sm opacity-80 mt-2">Top 5% of travelers</p>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Your Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={achievement.id} className="achievement-card">
                  <Card className={`travel-card relative overflow-hidden ${achievement.awarded ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20' : ''}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                          <div>
                            <CardTitle className="text-lg">{achievement.name}</CardTitle>
                            <CardDescription className="text-sm">
                              {achievement.description}
                            </CardDescription>
                          </div>
                        </div>
                        {achievement.awarded && (
                          <Badge className="bg-yellow-500 text-white">
                            <Trophy className="w-3 h-3 mr-1" />
                            Earned
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-primary">
                          {achievement.points} points
                        </span>
                        {achievement.progress !== undefined && achievement.maxProgress && (
                          <span className="text-sm text-muted-foreground">
                            {achievement.progress}/{achievement.maxProgress}
                          </span>
                        )}
                      </div>
                      {achievement.progress !== undefined && achievement.maxProgress && (
                        <Progress 
                          value={(achievement.progress / achievement.maxProgress) * 100} 
                          className="h-2"
                        />
                      )}
                    </CardContent>
                    {achievement.awarded && (
                      <div className="absolute top-2 right-2">
                        <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                          <Trophy className="w-4 h-4 text-white animate-pulse" />
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <Card className="travel-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Crown className="w-5 h-5 text-yellow-500" />
                <span>Global Leaderboard</span>
              </CardTitle>
              <CardDescription>See how you rank among fellow travelers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaderboard.map((entry, index) => (
                  <div 
                    key={entry.user}
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      entry.user === 'You' 
                        ? 'bg-primary/10 border-primary/30' 
                        : 'bg-muted/30 border-muted'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        entry.rank === 1 ? 'bg-yellow-500 text-white' :
                        entry.rank === 2 ? 'bg-gray-400 text-white' :
                        entry.rank === 3 ? 'bg-amber-600 text-white' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {entry.rank}
                      </div>
                      <div>
                        <div className="font-medium">{entry.user}</div>
                        <div className="text-sm text-muted-foreground">
                          {entry.badges} badges earned
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">{entry.points}</div>
                      <div className="text-sm text-muted-foreground">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GamificationModule;