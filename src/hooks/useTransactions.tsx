import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  amount: number;
  category: string;
  createdAt: string;
  title: string;
  type: string;
}

type TransactionData = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsContextProps {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionData) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

const TransactionsContext = createContext<TransactionsContextProps>(
  {} as TransactionsContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionData) {
    const response = await api.post('transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const transactionsContext = useContext(TransactionsContext);

  return transactionsContext;
}
