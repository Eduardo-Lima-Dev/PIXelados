'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface AddExpenseModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: {
    title: string
    amount: number
    dueDate: string
    description?: string
  }) => void
}

export function AddExpenseModal({ isOpen, onClose, onSubmit }: AddExpenseModalProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    onSubmit({
      title: formData.get('title') as string,
      amount: Number(formData.get('amount')),
      dueDate: formData.get('dueDate') as string,
      description: formData.get('description') as string,
    })
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed background-white inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-purple-base p-6 text-left align-middle shadow-xl transition-all border border-deep-blue">
                <Dialog.Title
                  as="div"
                  className="flex justify-between items-center mb-4"
                >
                  <h3 className="text-lg font-medium leading-6 text-soft-white">
                    Adicionar Nova Despesa
                  </h3>
                  <button
                    type="button"
                    className="text-soft-white/70 hover:text-soft-white"
                    onClick={onClose}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </Dialog.Title>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-soft-white/70">
                      Título
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      required
                      className="mt-1 block w-full rounded-md bg-deep-blue border-transparent focus:border-neon-blue focus:bg-deep-blue focus:ring-0 text-soft-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-soft-white/70">
                      Valor
                    </label>
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      required
                      min="0"
                      step="0.01"
                      className="mt-1 block w-full rounded-md bg-deep-blue border-transparent focus:border-neon-blue focus:bg-deep-blue focus:ring-0 text-soft-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="dueDate" className="block text-sm font-medium text-soft-white/70">
                      Data de Vencimento
                    </label>
                    <input
                      type="date"
                      name="dueDate"
                      id="dueDate"
                      required
                      className="mt-1 block w-full rounded-md bg-deep-blue border-transparent focus:border-neon-blue focus:bg-deep-blue focus:ring-0 text-soft-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-soft-white/70">
                      Descrição (opcional)
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      rows={3}
                      className="mt-1 block w-full rounded-md bg-deep-blue border-transparent focus:border-neon-blue focus:bg-deep-blue focus:ring-0 text-soft-white"
                    />
                  </div>

                  <div className="mt-6 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 text-sm font-medium text-soft-white/70 hover:text-soft-white"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-soft-white bg-neon-blue rounded-lg hover:bg-neon-purple transition-colors"
                    >
                      Adicionar Despesa
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
} 