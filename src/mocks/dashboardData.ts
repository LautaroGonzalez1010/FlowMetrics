export const metricsData = [
  {
    id: 1,
    title: "Ingresos Totales",
    value: "$ 124.500",
    change: "+23,5%",
    trend: "up",
    icon: "ri-money-dollar-circle-line",
    sparkline: [45000, 52000, 48000, 61000, 72000, 88000, 95000, 110000, 124500]
  },
  {
    id: 2,
    title: "Crecimiento Mensual",
    value: "+23,5%",
    change: "+4,2%",
    trend: "up",
    icon: "ri-arrow-up-line",
    sparkline: [12, 15, 14, 18, 19, 21, 23.5]
  },
  {
    id: 3,
    title: "Usuarios Activos",
    value: "2.847",
    change: "+12,3%",
    trend: "up",
    icon: "ri-user-line",
    sparkline: [2100, 2250, 2400, 2500, 2650, 2750, 2847]
  },
  {
    id: 4,
    title: "Tasa de Conversión",
    value: "3,2%",
    change: "-0,4%",
    trend: "down",
    icon: "ri-percent-line",
    sparkline: [3.8, 3.6, 3.5, 3.4, 3.3, 3.2]
  }
];

export const revenueChartData = [
  { month: "Ene", revenue: 45000, conversions: 320 },
  { month: "Feb", revenue: 52000, conversions: 385 },
  { month: "Mar", revenue: 48000, conversions: 340 },
  { month: "Abr", revenue: 61000, conversions: 425 },
  { month: "May", revenue: 72000, conversions: 510 },
  { month: "Jun", revenue: 88000, conversions: 620 },
  { month: "Jul", revenue: 95000, conversions: 680 },
  { month: "Ago", revenue: 110000, conversions: 750 },
  { month: "Sep", revenue: 124500, conversions: 845 }
];

export const channelsData = [
  { name: 'Organic', value: 4200, color: '#C4704B' },
  { name: 'Direct', value: 3100, color: '#7C9070' },
  { name: 'Social', value: 2400, color: '#B8860B' },
  { name: 'Referral', value: 1800, color: '#D4A574' },
];

export const recentActivity = [
  {
    id: 1,
    user: "Valentina López",
    avatar: "https://readdy.ai/api/search-image?query=professional%20woman%20business%20portrait%20clean%20background%20corporate%20headshot&width=80&height=80&seq=user1&orientation=squarish",
    action: "Compra completada",
    date: "Hace 2 minutos",
    status: "success"
  },
  {
    id: 2,
    user: "Martín Rodríguez",
    avatar: "https://readdy.ai/api/search-image?query=professional%20man%20business%20portrait%20clean%20background%20corporate%20headshot&width=80&height=80&seq=user2&orientation=squarish",
    action: "Inició prueba gratuita",
    date: "Hace 15 minutos",
    status: "info"
  },
  {
    id: 3,
    user: "Sofía Fernández",
    avatar: "https://readdy.ai/api/search-image?query=professional%20hispanic%20woman%20business%20portrait%20clean%20background%20corporate%20headshot&width=80&height=80&seq=user3&orientation=squarish",
    action: "Mejoró al plan Pro",
    date: "Hace 1 hora",
    status: "success"
  },
  {
    id: 4,
    user: "Diego Herrera",
    avatar: "https://readdy.ai/api/search-image?query=professional%20latin%20man%20business%20portrait%20clean%20background%20corporate%20headshot&width=80&height=80&seq=user4&orientation=squarish",
    action: "Canceló suscripción",
    date: "Hace 2 horas",
    status: "warning"
  },
  {
    id: 5,
    user: "Camila Torres",
    avatar: "https://readdy.ai/api/search-image?query=professional%20woman%20business%20portrait%20clean%20background%20corporate%20headshot&width=80&height=80&seq=user5&orientation=squarish",
    action: "Compra completada",
    date: "Hace 3 horas",
    status: "success"
  }
];

export const customersData = [
  {
    id: 1,
    name: "Valentina López",
    email: "valentina.lopez@empresa.com.ar",
    avatar: "https://readdy.ai/api/search-image?query=professional%20woman%20business%20portrait%20clean%20background%20corporate%20headshot&width=80&height=80&seq=customer1&orientation=squarish",
    status: "active",
    totalSpent: "$ 1.245.000",
    lastActivity: "Hace 2 horas"
  },
  {
    id: 2,
    name: "Martín Rodríguez",
    email: "martin.rodriguez@startup.com.ar",
    avatar: "https://readdy.ai/api/search-image?query=professional%20man%20business%20portrait%20clean%20background%20corporate%20headshot&width=80&height=80&seq=customer2&orientation=squarish",
    status: "active",
    totalSpent: "$ 892.000",
    lastActivity: "Hace 5 horas"
  },
  {
    id: 3,
    name: "Sofía Fernández",
    email: "sofia.fernandez@digitalventures.com.ar",
    avatar: "https://readdy.ai/api/search-image?query=professional%20hispanic%20woman%20business%20portrait%20clean%20background%20corporate%20headshot&width=80&height=80&seq=customer3&orientation=squarish",
    status: "active",
    totalSpent: "$ 1.578.000",
    lastActivity: "Hace 1 día"
  },
  {
    id: 4,
    name: "Diego Herrera",
    email: "diego.herrera@innovate.com.ar",
    avatar: "https://readdy.ai/api/search-image?query=professional%20latin%20man%20business%20portrait%20clean%20background%20corporate%20headshot&width=80&height=80&seq=customer4&orientation=squarish",
    status: "inactive",
    totalSpent: "$ 534.000",
    lastActivity: "Hace 1 semana"
  },
  {
    id: 5,
    name: "Camila Torres",
    email: "camila.torres@growthlab.com.ar",
    avatar: "https://readdy.ai/api/search-image?query=professional%20woman%20business%20portrait%20clean%20background%20corporate%20headshot&width=80&height=80&seq=customer5&orientation=squarish",
    status: "active",
    totalSpent: "$ 2.210.000",
    lastActivity: "Hace 3 horas"
  },
  {
    id: 6,
    name: "Luciano Gómez",
    email: "luciano.gomez@enterprise.com.ar",
    avatar: "https://readdy.ai/api/search-image?query=professional%20latin%20man%20business%20portrait%20clean%20background%20corporate%20headshot&width=80&height=80&seq=customer6&orientation=squarish",
    status: "active",
    totalSpent: "$ 1.865.000",
    lastActivity: "Hace 6 horas"
  },
  {
    id: 7,
    name: "Florencia Acosta",
    email: "florencia.acosta@marketing.com.ar",
    avatar: "https://readdy.ai/api/search-image?query=professional%20woman%20business%20portrait%20clean%20background%20corporate%20headshot&width=80&height=80&seq=customer7&orientation=squarish",
    status: "inactive",
    totalSpent: "$ 320.000",
    lastActivity: "Hace 2 semanas"
  },
  {
    id: 8,
    name: "Nicolás Pereyra",
    email: "nicolas.pereyra@techsolutions.com.ar",
    avatar: "https://readdy.ai/api/search-image?query=professional%20man%20business%20portrait%20clean%20background%20corporate%20headshot&width=80&height=80&seq=customer8&orientation=squarish",
    status: "active",
    totalSpent: "$ 987.000",
    lastActivity: "Hace 1 día"
  }
];

export const analyticsChartData = [
  { date: "1 Ene", pageViews: 2400, uniqueVisitors: 1800, bounceRate: 45 },
  { date: "8 Ene", pageViews: 2800, uniqueVisitors: 2100, bounceRate: 42 },
  { date: "15 Ene", pageViews: 3200, uniqueVisitors: 2400, bounceRate: 38 },
  { date: "22 Ene", pageViews: 3600, uniqueVisitors: 2700, bounceRate: 35 },
  { date: "29 Ene", pageViews: 4100, uniqueVisitors: 3100, bounceRate: 32 },
  { date: "5 Feb", pageViews: 4500, uniqueVisitors: 3400, bounceRate: 30 },
  { date: "12 Feb", pageViews: 5200, uniqueVisitors: 3900, bounceRate: 28 },
  { date: "19 Feb", pageViews: 5800, uniqueVisitors: 4300, bounceRate: 26 }
];

export const billingHistory = [
  {
    id: 1,
    date: "1 Sep, 2024",
    description: "Plan Growth - Mensual",
    amount: "$ 79.000",
    status: "paid",
    invoice: "FAC-2024-09-001"
  },
  {
    id: 2,
    date: "1 Ago, 2024",
    description: "Plan Growth - Mensual",
    amount: "$ 79.000",
    status: "paid",
    invoice: "FAC-2024-08-001"
  },
  {
    id: 3,
    date: "1 Jul, 2024",
    description: "Plan Growth - Mensual",
    amount: "$ 79.000",
    status: "paid",
    invoice: "FAC-2024-07-001"
  },
  {
    id: 4,
    date: "1 Jun, 2024",
    description: "Plan Starter - Mensual",
    amount: "$ 29.000",
    status: "paid",
    invoice: "FAC-2024-06-001"
  }
];