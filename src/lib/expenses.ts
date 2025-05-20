export interface ExpenseData {
  title: string;
  description: string;
  amount: number;
  date: string;
  category: string;
  recurring: boolean;
  createdById: number;
  houseId: number;
  status?: string;
  recurrenceId?: string | null;
}

export async function updateExpense(id: number, data: ExpenseData) {
  const response = await fetch(`/api/expenses/${id}`, {
    method: 'PATCH',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.error || 'Erro ao atualizar despesa');
  }

  return responseData;
}

export async function createExpense(data: ExpenseData) {
  const response = await fetch('/api/expenses', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.error || 'Erro ao criar despesa');
  }

  return responseData;
} 