import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface StatusSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const options = [
  { value: 'paid', label: 'Pago', color: 'text-green-400', bg: 'hover:bg-green-500/10' },
  { value: 'pending', label: 'Pendente', color: 'text-yellow-400', bg: 'hover:bg-yellow-500/10' },
];

export default function StatusSelect({ value, onChange }: StatusSelectProps) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, showAbove: false });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Atualiza a posição do dropdown sempre que abrir
  useEffect(() => {
    if (open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const dropdownHeight = 90; // altura aproximada do dropdown
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      const showAbove = spaceBelow < dropdownHeight && spaceAbove > spaceBelow;
      setPosition({
        top: showAbove ? rect.top - dropdownHeight : rect.bottom,
        left: rect.left,
        showAbove,
      });
    }
  }, [open]);

  const selected = options.find(opt => opt.value === value);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition 
          ${value === 'paid' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}
        onClick={() => setOpen(o => !o)}
      >
        {selected?.label}
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && createPortal(
        <div
          className="fixed bg-[#23243a] border border-gray-700 shadow-lg rounded-xl z-[9999]"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            width: '128px',
            overflow: 'hidden'
          }}
        >
          {options
            .filter(opt => opt.value !== value)
            .map(opt => (
              <button
                key={opt.value}
                onClick={() => { onChange(opt.value); setOpen(false); }}
                className={`w-full text-left px-4 py-2 text-sm ${opt.color} ${opt.bg} transition`}
              >
                {opt.label}
              </button>
            ))}
        </div>,
        document.body
      )}
    </>
  );
} 