import React, { useState } from 'react';
import { Calculator } from './calculator';
import { Calculator as CalculatorIcon } from 'lucide-react';

function App() {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [operation, setOperation] = useState<string>('+');
  const [result, setResult] = useState<string>('');
  const calculator = new Calculator();

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers');
      return;
    }

    try {
      let calculatedResult: number;
      switch (operation) {
        case '+':
          calculatedResult = calculator.add(a, b);
          break;
        case '-':
          calculatedResult = calculator.subtract(a, b);
          break;
        case '*':
          calculatedResult = calculator.multiply(a, b);
          break;
        case '/':
          calculatedResult = calculator.divide(a, b);
          break;
        default:
          setResult('Invalid operation');
          return;
      }
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex items-center justify-center mb-6">
          <CalculatorIcon className="w-8 h-8 text-blue-500 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Calculator</h1>
        </div>
        
        <div className="space-y-4">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="First number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="+">Add (+)</option>
            <option value="-">Subtract (-)</option>
            <option value="*">Multiply (*)</option>
            <option value="/">Divide (/)</option>
          </select>
          
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Second number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <button
            onClick={calculate}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Calculate
          </button>
          
          {result && (
            <div className="mt-4 p-4 bg-gray-50 rounded">
              <p className="text-center text-lg font-semibold">
                Result: {result}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;