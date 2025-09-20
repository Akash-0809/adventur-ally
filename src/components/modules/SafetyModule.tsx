import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  AlertTriangle, 
  Phone, 
  Shield, 
  Cloud, 
  Users, 
  Heart, 
  MapPin,
  Clock,
  Thermometer
} from 'lucide-react';

interface SafetyAlert {
  id: string;
  type: 'SOS' | 'Weather' | 'Health' | 'Crowd' | 'Emergency';
  message: string;
  severity: 'low' | 'medium' | 'high';
  time: string;
  icon: React.ElementType;
}

const SafetyModule = () => {
  const { t } = useTranslation();
  const [alerts] = useState<SafetyAlert[]>([
    {
      id: '1',
      type: 'Weather',
      message: 'Heavy rain expected between 3-6 PM. Consider indoor activities.',
      severity: 'medium',
      time: '2:00 PM',
      icon: Cloud,
    },
    {
      id: '2',
      type: 'Crowd',
      message: 'Calangute Beach is very crowded. Baga Beach has lighter crowds.',
      severity: 'low',
      time: '1:30 PM',
      icon: Users,
    },
    {
      id: '3',
      type: 'Health',
      message: 'Stay hydrated! Temperature is high today (32°C).',
      severity: 'medium',
      time: '12:00 PM',
      icon: Thermometer,
    },
  ]);

  const [emergencyContacts] = useState([
    { name: 'Local Police', number: '100', type: 'police' },
    { name: 'Tourist Helpline', number: '1363', type: 'tourist' },
    { name: 'Medical Emergency', number: '108', type: 'medical' },
    { name: 'Fire Emergency', number: '101', type: 'fire' },
  ]);

  const [safetyTips] = useState([
    'Always inform someone about your travel plans',
    'Keep copies of important documents',
    'Stay aware of local customs and dress codes',
    'Use official transportation services',
    'Keep emergency contacts handy',
    'Avoid isolated areas after dark',
    'Stay connected with cellular/wifi coverage',
  ]);

  const handleSOS = () => {
    // In a real app, this would trigger emergency protocols
    alert('SOS Alert sent to emergency contacts!\n\nLocation: Calangute Beach, Goa\nTime: ' + new Date().toLocaleString());
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'default';
    }
  };

  const getSeverityBgColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-destructive/10 border-destructive/30';
      case 'medium': return 'bg-yellow-50 border-yellow-200 dark:bg-yellow-950/20 dark:border-yellow-800';
      case 'low': return 'bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800';
      default: return 'bg-muted/50 border-muted';
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">{t('safety.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('safety.description')}</p>
          </div>

          {/* Emergency SOS Button */}
          <div className="text-center mb-12">
            <Button
              onClick={handleSOS}
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
            >
              <Phone className="w-6 h-6 mr-3" />
              Emergency SOS
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Press and hold for 3 seconds to send emergency alert to contacts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Safety Alerts */}
            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <span>Safety Alerts</span>
                </CardTitle>
                <CardDescription>Stay informed about current conditions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {alerts.map((alert) => (
                  <Alert key={alert.id} className={getSeverityBgColor(alert.severity)}>
                    <div className="flex items-start space-x-3">
                      <alert.icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant={getSeverityColor(alert.severity) as any} className="text-xs">
                            {alert.type}
                          </Badge>
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span>{alert.time}</span>
                          </div>
                        </div>
                        <AlertDescription className="text-sm">
                          {alert.message}
                        </AlertDescription>
                      </div>
                    </div>
                  </Alert>
                ))}
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-green-500" />
                  <span>Emergency Contacts</span>
                </CardTitle>
                <CardDescription>Important numbers for Goa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {emergencyContacts.map((contact) => (
                  <div key={contact.number} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-medium">{contact.name}</div>
                      <div className="text-sm text-muted-foreground capitalize">{contact.type} services</div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="gradient-ocean text-white border-0"
                      onClick={() => window.open(`tel:${contact.number}`)}
                    >
                      {contact.number}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Safety Tips */}
          <Card className="travel-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <span>Travel Safety Tips</span>
              </CardTitle>
              <CardDescription>Essential guidelines for safe travel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {safetyTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-accent/10 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-white">{index + 1}</span>
                    </div>
                    <p className="text-sm text-foreground">{tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Location Status */}
          <div className="mt-8 text-center">
            <Card className="travel-card inline-block">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>Location sharing: <strong>Active</strong></span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>Emergency contacts: <strong>3 notified</strong></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyModule;