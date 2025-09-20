import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Wallet, 
  Plus, 
  Home, 
  Utensils, 
  Car, 
  Camera, 
  ShoppingBag, 
  MoreHorizontal,
  AlertTriangle 
} from 'lucide-react';
import { gsap } from 'gsap';

interface Expense {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
}

interface BudgetCategory {
  category: string;
  budgeted: number;
  spent: number;
  icon: React.ElementType;
  color: string;
}

const ExpensesModule = () => {
  const { t } = useTranslation();
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: '1',
      amount: 150,
      category: 'accommodation',
      description: 'Beach resort booking',
      date: '2024-03-15',
    },
    {
      id: '2',
      amount: 45,
      category: 'food',
      description: 'Local seafood dinner',
      date: '2024-03-15',
    },
    {
      id: '3',
      amount: 30,
      category: 'transport',
      description: 'Airport taxi',
      date: '2024-03-15',
    },
  ]);

  const [newExpense, setNewExpense] = useState({
    amount: '',
    category: 'food',
    description: '',
  });

  const [budgetCategories, setBudgetCategories] = useState<BudgetCategory[]>([
    { category: 'accommodation', budgeted: 500, spent: 150, icon: Home, color: 'text-primary' },
    { category: 'food', budgeted: 300, spent: 45, icon: Utensils, color: 'text-secondary' },
    { category: 'transport', budgeted: 200, spent: 30, icon: Car, color: 'text-accent' },
    { category: 'activities', budgeted: 250, spent: 0, icon: Camera, color: 'text-purple-500' },
    { category: 'shopping', budgeted: 150, spent: 0, icon: ShoppingBag, color: 'text-pink-500' },
    { category: 'other', budgeted: 100, spent: 0, icon: MoreHorizontal, color: 'text-gray-500' },
  ]);

  useEffect(() => {
    // Calculate spent amounts
    const updatedCategories = budgetCategories.map(category => {
      const spent = expenses
        .filter(expense => expense.category === category.category)
        .reduce((sum, expense) => sum + expense.amount, 0);
      return { ...category, spent };
    });
    setBudgetCategories(updatedCategories);
  }, [expenses]);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      '.expense-card',
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power2.out' }
    );
  }, [budgetCategories]);

  const handleAddExpense = () => {
    if (newExpense.amount && newExpense.description) {
      const expense: Expense = {
        id: Date.now().toString(),
        amount: parseFloat(newExpense.amount),
        category: newExpense.category,
        description: newExpense.description,
        date: new Date().toISOString().split('T')[0],
      };
      setExpenses([...expenses, expense]);
      setNewExpense({ amount: '', category: 'food', description: '' });
    }
  };

  const getTotalBudget = () => budgetCategories.reduce((sum, cat) => sum + cat.budgeted, 0);
  const getTotalSpent = () => budgetCategories.reduce((sum, cat) => sum + cat.spent, 0);
  const getRemainingBudget = () => getTotalBudget() - getTotalSpent();

  const getProgressColor = (spent: number, budgeted: number) => {
    const percentage = (spent / budgeted) * 100;
    if (percentage >= 90) return 'text-destructive';
    if (percentage >= 75) return 'text-yellow-500';
    return 'text-accent';
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">{t('expenses.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('expenses.description')}</p>
          </div>

          {/* Budget Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="travel-card gradient-ocean text-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2">
                  <Wallet className="w-5 h-5" />
                  <span>{t('expenses.budget')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">${getTotalBudget()}</div>
              </CardContent>
            </Card>

            <Card className="travel-card gradient-sunset text-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2">
                  <span>{t('expenses.spent')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">${getTotalSpent()}</div>
              </CardContent>
            </Card>

            <Card className="travel-card gradient-tropical text-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2">
                  <span>{t('expenses.remaining')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">${getRemainingBudget()}</div>
                {getRemainingBudget() < getTotalBudget() * 0.2 && (
                  <div className="flex items-center space-x-1 mt-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-sm">Budget Alert!</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Category Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {budgetCategories.map((category, index) => (
              <Card key={category.category} className="expense-card travel-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                      <span className="font-medium capitalize">{t(`expenses.category.${category.category}`)}</span>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={getProgressColor(category.spent, category.budgeted)}
                    >
                      ${category.spent}/${category.budgeted}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Progress 
                    value={(category.spent / category.budgeted) * 100} 
                    className="mb-2"
                  />
                  <div className="text-sm text-muted-foreground">
                    {Math.round((category.spent / category.budgeted) * 100)}% used
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add Expense Form */}
          <Card className="travel-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>{t('expenses.addExpense')}</span>
              </CardTitle>
              <CardDescription>Track your travel spending</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Amount ($)</label>
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <select
                    value={newExpense.category}
                    onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="accommodation">{t('expenses.category.accommodation')}</option>
                    <option value="food">{t('expenses.category.food')}</option>
                    <option value="transport">{t('expenses.category.transport')}</option>
                    <option value="activities">{t('expenses.category.activities')}</option>
                    <option value="shopping">{t('expenses.category.shopping')}</option>
                    <option value="other">{t('expenses.category.other')}</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Description</label>
                  <Input
                    placeholder="What did you buy?"
                    value={newExpense.description}
                    onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                  />
                </div>
              </div>
              <Button 
                onClick={handleAddExpense}
                className="w-full md:w-auto gradient-ocean text-white hover:scale-[1.02] transition-all duration-300"
              >
                <Plus className="w-4 h-4 mr-2" />
                {t('expenses.addExpense')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExpensesModule;