import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirmDeleteModal({ isOpen, onClose, onConfirm }: ConfirmDeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1a2332] p-6 rounded-xl shadow-2xl max-w-sm w-full">
        <div className="flex items-center gap-3 mb-4">
          <FaExclamationTriangle className="text-yellow-400 text-2xl" />
          <h2 className="text-xl font-bold text-white">Confirmar exclusão</h2>
        </div>
        <p className="text-gray-300 mb-6">
          Tem certeza que deseja excluir esta despesa? Esta ação não pode ser desfeita.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl bg-gray-700/50 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700/70"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="rounded-xl bg-gradient-to-r from-red-500 to-pink-500 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 relative group"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 blur-md opacity-50 group-hover:opacity-75 transition-opacity"></span>
            <span className="relative">Excluir</span>
          </button>
        </div>
      </div>
    </div>
  );
}
