
import { createContext, useContext, useReducer, ReactNode, useMemo } from 'react';

export interface Sale {
  id: string;
  amount: number;
  description: string;
  client: string;
  date: string;
  month: string;
}

interface SalesState {
  sales: Sale[];
}

type SalesAction = { type: 'ADD_SALE'; payload: Sale };

const initialSales: Sale[] = [
  { id: '1', amount: 45000, description: 'Suscripción mensual', client: 'Valentina López', date: 'Ene 2024', month: 'Ene' },
  { id: '2', amount: 52000, description: 'Plan Growth', client: 'Martín Rodríguez', date: 'Feb 2024', month: 'Feb' },
  { id: '3', amount: 48000, description: 'Consultoría digital', client: 'Sofía Fernández', date: 'Mar 2024', month: 'Mar' },
  { id: '4', amount: 61000, description: 'Licencia anual', client: 'Diego Herrera', date: 'Abr 2024', month: 'Abr' },
  { id: '5', amount: 72000, description: 'Plan Pro', client: 'Camila Torres', date: 'May 2024', month: 'May' },
  { id: '6', amount: 88000, description: 'Integración API', client: 'Lucía Gómez', date: 'Jun 2024', month: 'Jun' },
  { id: '7', amount: 95000, description: 'Soporte premium', client: 'Nicolás Pérez', date: 'Jul 2024', month: 'Jul' },
  { id: '8', amount: 110000, description: 'Renovación anual', client: 'Florencia Díaz', date: 'Ago 2024', month: 'Ago' },
  { id: '9', amount: 124500, description: 'Plan Enterprise', client: 'Sebastián Ruiz', date: 'Sep 2024', month: 'Sep' },
];

function salesReducer(state: SalesState, action: SalesAction): SalesState {
  switch (action.type) {
    case 'ADD_SALE':
      return { ...state, sales: [...state.sales, action.payload] };
    default:
      return state;
  }
}

interface SalesContextValue {
  sales: Sale[];
  totalRevenue: number;
  addSale: (sale: Omit<Sale, 'id'>) => void;
  revenueByMonth: { month: string; revenue: number }[];
}

const SalesContext = createContext<SalesContextValue | null>(null);

export function SalesProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(salesReducer, { sales: initialSales });

  const totalRevenue = useMemo(
    () => state.sales.reduce((acc, s) => acc + s.amount, 0),
    [state.sales]
  );

  const revenueByMonth = useMemo(() => {
    const map: Record<string, number> = {};
    state.sales.forEach((s) => {
      map[s.month] = (map[s.month] || 0) + s.amount;
    });
    return Object.entries(map).map(([month, revenue]) => ({ month, revenue }));
  }, [state.sales]);

  const addSale = (sale: Omit<Sale, 'id'>) => {
    try {
      // Basic validation to avoid adding incomplete sales
      if (!sale.amount || !sale.description || !sale.client || !sale.date || !sale.month) {
        throw new Error('All sale fields except id must be provided');
      }

      dispatch({
        type: 'ADD_SALE',
        payload: { ...sale, id: `sale-${Date.now()}` },
      });
    } catch (error) {
      console.error('Failed to add sale:', error);
    }
  };

  return (
    <SalesContext.Provider value={{ sales: state.sales, totalRevenue, addSale, revenueByMonth }}>
      {children}
    </SalesContext.Provider>
  );
}

export function useSales(): SalesContextValue {
  const ctx = useContext(SalesContext);
  if (!ctx) throw new Error('useSales must be used within a SalesProvider');
  return ctx;
}
