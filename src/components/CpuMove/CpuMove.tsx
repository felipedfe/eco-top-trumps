import { useState, useEffect, useContext } from "react";
import myContext from "../../context/myContext";
import CardComparison from "../CardComparison/CardComparison";

function CpuMove() {
  const [confirmAttr, setConfirmAttr] = useState(false);

  const {
    playerCards,
    cpuCards,
    selectedAttr,
    setSelectedAttr } = useContext(myContext);

  const selectRandomAttribute = () => {
    return
  };

  // setSelectedAttr("skill");


  const intervalId = setInterval((prev: boolean) => setConfirmAttr(!prev), 1000);

  useEffect(() => {
    setSelectedAttr("skill");
    // const intervalId = setInterval((prev: boolean) => setConfirmAttr(!prev), 1000);
    return clearInterval(intervalId)
  }, []);

  return (
    <>
      <p>Cpu Move</p>
      {confirmAttr ? <CardComparison setConfirmAttr={setConfirmAttr} /> : <p>Cpu Pensando...</p>}
    </>
  )
}

export default CpuMove;
