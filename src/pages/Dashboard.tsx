import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquare, 
  Calendar, 
  TrendingUp, 
  Users, 
  ArrowUpRight, 
  ArrowDownRight,
  Bot,
  Clock,
  CheckCircle2,
  Zap
} from "lucide-react";

const stats = [
  {
    title: "Total Conversations",
    value: "2,847",
    change: "+12.5%",
    trend: "up",
    icon: MessageSquare,
    description: "vs last month"
  },
  {
    title: "Bookings This Week",
    value: "156",
    change: "+8.2%",
    trend: "up",
    icon: Calendar,
    description: "vs last week"
  },
  {
    title: "AI Response Rate",
    value: "94.2%",
    change: "+2.1%",
    trend: "up",
    icon: Bot,
    description: "successfully handled"
  },
  {
    title: "Time Saved",
    value: "127 hrs",
    change: "+15.3%",
    trend: "up",
    icon: Clock,
    description: "this month"
  },
];

const recentActivity = [
  {
    id: 1,
    type: "conversation",
    title: "New customer inquiry handled",
    description: "AI successfully resolved pricing question",
    time: "2 min ago",
    icon: MessageSquare,
  },
  {
    id: 2,
    type: "booking",
    title: "Appointment booked",
    description: "Haircut service scheduled for tomorrow",
    time: "15 min ago",
    icon: Calendar,
  },
  {
    id: 3,
    type: "task",
    title: "Task completed",
    description: "Follow-up email sent automatically",
    time: "1 hour ago",
    icon: CheckCircle2,
  },
  {
    id: 4,
    type: "ai",
    title: "AI Agent trained",
    description: "New responses added to knowledge base",
    time: "3 hours ago",
    icon: Zap,
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back. Here's what's happening with your business.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center gap-1 text-xs mt-1">
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-3 w-3 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 text-red-500" />
                  )}
                  <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>
                    {stat.change}
                  </span>
                  <span className="text-muted-foreground">{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions from your AI agents and team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <activity.icon className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats Card */}
          <Card>
            <CardHeader>
              <CardTitle>This Month</CardTitle>
              <CardDescription>Key performance metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">AI Resolution Rate</span>
                  <span className="font-medium">94%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: "94%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Booking Completion</span>
                  <span className="font-medium">87%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: "87%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Customer Satisfaction</span>
                  <span className="font-medium">91%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: "91%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-medium">&lt; 5 sec</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: "98%" }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you might want to do</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <button className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                <Bot className="h-5 w-5" />
                <div>
                  <p className="font-medium text-sm">Train AI Agent</p>
                  <p className="text-xs text-muted-foreground">Add new responses</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                <Users className="h-5 w-5" />
                <div>
                  <p className="font-medium text-sm">Add Contact</p>
                  <p className="text-xs text-muted-foreground">New customer</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                <Calendar className="h-5 w-5" />
                <div>
                  <p className="font-medium text-sm">View Calendar</p>
                  <p className="text-xs text-muted-foreground">Upcoming bookings</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                <TrendingUp className="h-5 w-5" />
                <div>
                  <p className="font-medium text-sm">View Reports</p>
                  <p className="text-xs text-muted-foreground">Analytics & ROI</p>
                </div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
