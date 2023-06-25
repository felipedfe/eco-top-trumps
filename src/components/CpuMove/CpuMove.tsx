import { useState, useEffect, useContext, useMemo } from "react";
import myContext from "../../context/myContext";
import CardComparison from "../CardComparison/CardComparison";

function CpuMove() {
  const [confirmAttr, setConfirmAttr] = useState(false);

  const { setSelectedAttr } = useContext(myContext);

  const attributes: Record<number, string> = {
    0: "strength",
    1: "skill",
    2: "magic",
  }

  const NUMBER_OF_ATTR = 3;

  // const attrKey = Math.floor(Math.random() * 2);
  const attrKey = useMemo(() => Math.floor(Math.random() * NUMBER_OF_ATTR), []);

  const selectRandomAttribute = () => {
    console.log("attrKey: ", attrKey)
    console.log("atributo: ", attributes[attrKey])
    return attributes[attrKey];
  }

  const intervalId = setInterval((prev: boolean) => setConfirmAttr(!prev), 1000);

  useEffect(() => {
    const attribute = selectRandomAttribute();
    setSelectedAttr(attribute);
    return clearInterval(intervalId);
  }, []);

  return (
    <>
      <p>Cpu Move</p>
      {confirmAttr ? <CardComparison setConfirmAttr={setConfirmAttr} /> : <p>Cpu Pensando...</p>}
    </>
  )
}

export default CpuMove;
