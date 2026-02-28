
import { useState } from 'react';
import { useSales } from '../../../../context/SalesContext';

const MONTHS = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic',
];

interface Props {
  onClose: () => void;
}

/**
 * NewSaleModal
 *
 * Handles creation of a new sale. Includes validation, success feedback,
 * and robust error handling to avoid crashes when the context is missing
 * or when the amount parsing fails.
 */
export default function NewSaleModal({ onClose }: Props) {
  const { addSale } = useSales() ?? { addSale: () => {} }; // safety fallback
  const [form, setForm] = useState({ amount: '', description: '', client: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  /** Update form fields and clear previous error */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  /** Validate form, create sale entry and give user feedback */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Parse amount safely – accepts formats like "1.234,56"
    const normalized = form.amount.replace(/\./g, '').replace(',', '.');
    const amount = parseFloat(normalized);

    // Validation
    if (!form.client.trim()) {
      setError('El nombre del cliente es obligatorio.');
      return;
    }
    if (!form.description.trim()) {
      setError('La descripción es obligatoria.');
      return;
    }
    if (isNaN(amount) || amount <= 0) {
      setError('Ingresá un monto válido mayor a 0.');
      return;
    }

    // Build date representation
    const now = new Date();
    const monthIndex = now.getMonth();
    const month = MONTHS[monthIndex];
    const year = now.getFullYear();

    try {
      addSale({
        amount,
        description: form.description.trim(),
        client: form.client.trim(),
        date: `${month} ${year}`,
        month,
      });
    } catch (err) {
      console.error('Error adding sale:', err);
      setError('No se pudo registrar la venta. Intente nuevamente.');
      return;
    }

    // Show success feedback
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-label="close modal"
      />
      {/* Modal container */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-[fadeInUp_0.25s_ease]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E8E2D9] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-[#C4704B] to-[#B8860B] rounded-xl flex items-center justify-center">
              <i className="ri-add-circle-line text-white text-lg" />
            </div>
            <h2 className="text-lg font-bold text-[#2D2A26]">
              Registrar Nueva Venta
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-[#F7F4EF] rounded-lg transition-colors cursor-pointer"
            aria-label="cerrar"
          >
            <i className="ri-close-line text-[#6B6560] text-xl" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          {/* Cliente */}
          <div>
            <label className="block text-sm font-medium text-[#2D2A26] mb-1.5">
              Cliente <span className="text-[#C4704B]">*</span>
            </label>
            <input
              type="text"
              name="client"
              value={form.client}
              onChange={handleChange}
              placeholder="Ej: Valentina López"
              className="w-full px-4 py-2.5 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg text-sm text-[#2D2A26] placeholder-[#A09890] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all"
            />
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-sm font-medium text-[#2D2A26] mb-1.5">
              Descripción <span className="text-[#C4704B]">*</span>
            </label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Ej: Plan Pro mensual"
              className="w-full px-4 py-2.5 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg text-sm text-[#2D2A26] placeholder-[#A09890] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all"
            />
          </div>

          {/* Monto */}
          <div>
            <label className="block text-sm font-medium text-[#2D2A26] mb-1.5">
              Monto (ARS) <span className="text-[#C4704B]">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6560] font-semibold text-sm">
                $
              </span>
              <input
                type="text"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                placeholder="0"
                className="w-full pl-8 pr-4 py-2.5 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg text-sm text-[#2D2A26] placeholder-[#A09890] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all"
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-lg">
              <i className="ri-error-warning-line text-red-500 text-sm" />
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="flex items-center gap-2 px-4 py-3 bg-[#7C9070]/10 border border-[#7C9070]/30 rounded-lg">
              <i className="ri-checkbox-circle-line text-[#7C9070] text-sm" />
              <p className="text-sm text-[#7C9070] font-medium">
                ¡Venta registrada con éxito!
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg text-sm font-semibold text-[#6B6560] hover:bg-[#E8E2D9] transition-all whitespace-nowrap cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={success}
              className="flex-1 py-2.5 bg-gradient-to-r from-[#C4704B] to-[#B8860B] rounded-lg text-sm font-semibold text-white hover:shadow-md hover:shadow-[#C4704B]/30 transition-all whitespace-nowrap cursor-pointer disabled:opacity-60"
            >
              {success ? 'Guardando...' : 'Registrar Venta'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
