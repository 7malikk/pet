import { useState } from "react";
import { Button, Card, Input } from "@material-tailwind/react";

function App() {
  const [currVal, setCurrVal] = useState<number>(0);
  const [days, setDays] = useState<number>(0);

  const getAmountByDays = () => {
    let i = 0;
    let amount = currVal;
    if (!currVal || !days) return;
    while (i < days) {
      amount = calcSingleGain(amount);
      i++;
    }
    alert(`You would have an estimated $${amount.toFixed(2)} in ${days} days`);
  };

  function calcSingleGain(value: number) {
    const percentage: number = value * 0.01 * 2;
    return value + percentage;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <Card
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className="p-2"
      >
        <form className=" flex flex-col space-y-3 ">
          <Input
            size="md"
            type="number"
            label="Amount"
            min={0}
            onChange={(e) => setCurrVal(+e.target.value)}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
          <Input
            label="Days"
            type="number"
            min={1}
            onChange={(e) => setDays(+e.target.value)}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
          <Button
            onClick={getAmountByDays}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default App;
