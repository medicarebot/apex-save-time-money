import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import {
  LayoutDashboard,
  Bot,
  MessageSquare,
  Users,
  Calendar,
  Settings,
  ChevronDown,
  ChevronRight,
  Briefcase,
  ClipboardList,
  BarChart3,
  Zap,
  BookOpen,
  UserPlus,
  CalendarDays,
  ListTodo,
  UserCheck,
  ArrowRightLeft,
  UsersRound,
  CreditCard,
  Coins,
  LineChart,
  FileText,
  TrendingUp,
  Gauge,
  Building2,
  Shield,
  Bell,
  Command,
  Sparkles,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface MenuItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  children?: {
    title: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "AI Agents",
    icon: Bot,
    children: [
      { title: "Create", href: "/dashboard/ai-agents/create", icon: Sparkles },
      { title: "Train", href: "/dashboard/ai-agents/train", icon: Zap },
      { title: "Manage", href: "/dashboard/ai-agents/manage", icon: Settings },
    ],
  },
  {
    title: "Executive Command",
    icon: Command,
    children: [
      { title: "Create", href: "/dashboard/executive/create", icon: Sparkles },
      { title: "Train", href: "/dashboard/executive/train", icon: Zap },
      { title: "Manage", href: "/dashboard/executive/manage", icon: Settings },
    ],
  },
  {
    title: "Conversations",
    icon: MessageSquare,
    href: "/dashboard/conversations",
  },
  {
    title: "CRM",
    icon: Users,
    children: [
      { title: "All Contacts", href: "/dashboard/crm/contacts", icon: UsersRound },
      { title: "Add Contacts", href: "/dashboard/crm/add", icon: UserPlus },
    ],
  },
  {
    title: "Bookings",
    icon: Calendar,
    children: [
      { title: "Overview", href: "/dashboard/bookings/overview", icon: LayoutDashboard },
      { title: "Calendar", href: "/dashboard/bookings/calendar", icon: CalendarDays },
      { title: "Services", href: "/dashboard/bookings/services", icon: Briefcase },
      { title: "Bookings", href: "/dashboard/bookings/list", icon: ClipboardList },
      { title: "Set Up Guide", href: "/dashboard/bookings/setup", icon: BookOpen },
    ],
  },
  {
    title: "Operations",
    icon: ClipboardList,
    children: [
      { title: "Tasks", href: "/dashboard/operations/tasks", icon: ListTodo },
      { title: "Staff", href: "/dashboard/operations/staff", icon: UserCheck },
      { title: "Handoffs", href: "/dashboard/operations/handoffs", icon: ArrowRightLeft },
    ],
  },
  {
    title: "Affiliates",
    icon: UsersRound,
    children: [
      { title: "Program", href: "/dashboard/affiliates/program", icon: Briefcase },
      { title: "Payments", href: "/dashboard/affiliates/payments", icon: CreditCard },
      { title: "Commissions", href: "/dashboard/affiliates/commissions", icon: Coins },
    ],
  },
  {
    title: "Analytics",
    icon: BarChart3,
    children: [
      { title: "Analytics", href: "/dashboard/analytics/overview", icon: LineChart },
      { title: "Reports", href: "/dashboard/analytics/reports", icon: FileText },
      { title: "ROI", href: "/dashboard/analytics/roi", icon: TrendingUp },
      { title: "Performance", href: "/dashboard/analytics/performance", icon: Gauge },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    children: [
      { title: "Company Settings", href: "/dashboard/settings/company", icon: Building2 },
      { title: "Users & Seats", href: "/dashboard/settings/users", icon: Users },
      { title: "Billing & Credits", href: "/dashboard/settings/billing", icon: CreditCard },
      { title: "Permissions", href: "/dashboard/settings/permissions", icon: Shield },
      { title: "Notifications", href: "/dashboard/settings/notifications", icon: Bell },
    ],
  },
];

function MenuItemWithChildren({ item }: { item: MenuItem }) {
  const location = useLocation();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  
  const isActive = item.children?.some(
    (child) => location.pathname === child.href || location.pathname.startsWith(child.href + "/")
  );
  
  const [isOpen, setIsOpen] = useState(isActive);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            className={cn(
              "w-full justify-between",
              isActive && "bg-accent text-accent-foreground"
            )}
          >
            <span className="flex items-center gap-3">
              <item.icon className="h-4 w-4" />
              {!isCollapsed && <span>{item.title}</span>}
            </span>
            {!isCollapsed && (
              <span className="ml-auto">
                {isOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </span>
            )}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.children?.map((child) => (
              <SidebarMenuSubItem key={child.href}>
                <SidebarMenuSubButton asChild>
                  <NavLink
                    to={child.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    activeClassName="text-primary font-medium"
                  >
                    {child.icon && <child.icon className="h-3.5 w-3.5" />}
                    <span>{child.title}</span>
                  </NavLink>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

function SingleMenuItem({ item }: { item: MenuItem }) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <NavLink
          to={item.href!}
          end
          className="flex items-center gap-3"
          activeClassName="bg-accent text-accent-foreground"
        >
          <item.icon className="h-4 w-4" />
          {!isCollapsed && <span>{item.title}</span>}
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export function DashboardSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2 px-2 py-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground font-bold text-sm">A</span>
          </div>
          {!isCollapsed && (
            <span className="font-bold text-lg text-foreground">APEX</span>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) =>
                item.children ? (
                  <MenuItemWithChildren key={item.title} item={item} />
                ) : (
                  <SingleMenuItem key={item.title} item={item} />
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <div className={cn(
          "flex items-center gap-3 px-2 py-3",
          isCollapsed && "justify-center"
        )}>
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
            <Users className="h-4 w-4 text-muted-foreground" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-medium truncate">Demo User</span>
              <span className="text-xs text-muted-foreground truncate">demo@apex.com</span>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
