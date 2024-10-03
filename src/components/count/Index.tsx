import React, { useState } from 'react';
import { Input } from '@/components/ui/input';

interface NumberInputProps {
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ min = 0, max = 100, onChange }) => {
  const [value, setValue] = useState<number>(2);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      setValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  return <Input type="number" value={value} onChange={handleChange} min={min} max={max} className="w-14 h-8" />;
};

export default NumberInput;
